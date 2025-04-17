/*TRANSPILED*//*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';
goog.provide("goog.net.xpc.NativeMessagingTransport");
goog.require("goog.Timer");
goog.require("goog.asserts");
goog.require("goog.async.Deferred");
goog.require("goog.dispose");
goog.require("goog.events");
goog.require("goog.events.EventHandler");
goog.require("goog.log");
goog.require("goog.net.xpc");
goog.require("goog.net.xpc.CrossPageChannelRole");
goog.require("goog.net.xpc.Transport");
goog.require("goog.net.xpc.TransportTypes");
goog.requireType("goog.dom.DomHelper");
goog.requireType("goog.events.BrowserEvent");
goog.requireType("goog.net.xpc.CrossPageChannel");
goog.net.xpc.NativeMessagingTransport = function(channel, peerHostname, opt_domHelper, opt_oneSidedHandshake, opt_protocolVersion) {
  goog.net.xpc.NativeMessagingTransport.base(this, "constructor", opt_domHelper);
  this.channel_ = channel;
  this.protocolVersion_ = opt_protocolVersion || 2;
  goog.asserts.assert(this.protocolVersion_ >= 1);
  goog.asserts.assert(this.protocolVersion_ <= 2);
  this.peerHostname_ = peerHostname || "*";
  this.eventHandler_ = new goog.events.EventHandler(this);
  this.maybeAttemptToConnectTimer_ = new goog.Timer(100, this.getWindow());
  this.oneSidedHandshake_ = !!opt_oneSidedHandshake;
  this.setupAckReceived_ = new goog.async.Deferred();
  this.setupAckSent_ = new goog.async.Deferred();
  this.connected_ = new goog.async.Deferred();
  this.endpointId_ = goog.net.xpc.getRandomString(10);
  this.peerEndpointId_ = null;
  if (this.oneSidedHandshake_) {
    if (this.channel_.getRole() == goog.net.xpc.CrossPageChannelRole.INNER) {
      this.connected_.awaitDeferred(this.setupAckReceived_);
    } else {
      this.connected_.awaitDeferred(this.setupAckSent_);
    }
  } else {
    this.connected_.awaitDeferred(this.setupAckReceived_);
    if (this.protocolVersion_ == 2) {
      this.connected_.awaitDeferred(this.setupAckSent_);
    }
  }
  this.connected_.addCallback(this.notifyConnected_, this);
  this.connected_.callback(true);
  this.eventHandler_.listen(this.maybeAttemptToConnectTimer_, goog.Timer.TICK, this.maybeAttemptToConnect_);
  goog.log.info(goog.net.xpc.logger, "NativeMessagingTransport created.  " + "protocolVersion\x3d" + this.protocolVersion_ + ", oneSidedHandshake\x3d" + this.oneSidedHandshake_ + ", role\x3d" + this.channel_.getRole());
};
goog.inherits(goog.net.xpc.NativeMessagingTransport, goog.net.xpc.Transport);
goog.net.xpc.NativeMessagingTransport.CONNECTION_DELAY_MS_ = 200;
goog.net.xpc.NativeMessagingTransport.prototype.peerProtocolVersion_ = null;
goog.net.xpc.NativeMessagingTransport.prototype.initialized_ = false;
goog.net.xpc.NativeMessagingTransport.prototype.transportType = goog.net.xpc.TransportTypes.NATIVE_MESSAGING;
goog.net.xpc.NativeMessagingTransport.MESSAGE_DELIMITER_ = ",";
goog.net.xpc.NativeMessagingTransport.activeCount_ = {};
goog.net.xpc.NativeMessagingTransport.prototype.sendTimerId_ = 0;
goog.net.xpc.NativeMessagingTransport.prototype.couldPeerVersionBe_ = function(version) {
  return this.peerProtocolVersion_ == null || this.peerProtocolVersion_ == version;
};
goog.net.xpc.NativeMessagingTransport.initialize_ = function(listenWindow) {
  const uid = goog.getUid(listenWindow);
  let value = goog.net.xpc.NativeMessagingTransport.activeCount_[uid];
  if (typeof value !== "number") {
    value = 0;
  }
  if (value == 0) {
    goog.events.listen(listenWindow.postMessage ? listenWindow : listenWindow.document, "message", goog.net.xpc.NativeMessagingTransport.messageReceived_, false, goog.net.xpc.NativeMessagingTransport);
  }
  goog.net.xpc.NativeMessagingTransport.activeCount_[uid] = value + 1;
};
goog.net.xpc.NativeMessagingTransport.messageReceived_ = function(msgEvt) {
  const data = msgEvt.getBrowserEvent().data;
  if (typeof data !== "string") {
    return false;
  }
  const headDelim = data.indexOf("|");
  const serviceDelim = data.indexOf(":");
  if (headDelim == -1 || serviceDelim == -1) {
    return false;
  }
  const channelName = data.substring(0, headDelim);
  const service = data.substring(headDelim + 1, serviceDelim);
  const payload = data.substring(serviceDelim + 1);
  goog.log.fine(goog.net.xpc.logger, "messageReceived: channel\x3d" + channelName + ", service\x3d" + service + ", payload\x3d" + payload);
  const allChannels = goog.module.get("goog.net.xpc.CrossPageChannel").channels;
  const channel = allChannels[channelName];
  if (channel) {
    channel.xpcDeliver(service, payload, msgEvt.getBrowserEvent().origin);
    return true;
  }
  const transportMessageType = goog.net.xpc.NativeMessagingTransport.parseTransportPayload_(payload)[0];
  for (let staleChannelName in allChannels) {
    const staleChannel = allChannels[staleChannelName];
    if (staleChannel.getRole() == goog.net.xpc.CrossPageChannelRole.INNER && !staleChannel.isConnected() && service == goog.net.xpc.TRANSPORT_SERVICE && (transportMessageType == goog.net.xpc.SETUP || transportMessageType == goog.net.xpc.SETUP_NTPV2) && staleChannel.isMessageOriginAcceptable(msgEvt.getBrowserEvent().origin)) {
      staleChannel.updateChannelNameAndCatalog(channelName);
      staleChannel.xpcDeliver(service, payload);
      return true;
    }
  }
  goog.log.info(goog.net.xpc.logger, 'channel name mismatch; message ignored"');
  return false;
};
goog.net.xpc.NativeMessagingTransport.prototype.transportServiceHandler = function(payload) {
  const transportParts = goog.net.xpc.NativeMessagingTransport.parseTransportPayload_(payload);
  const transportMessageType = transportParts[0];
  const peerEndpointId = transportParts[1];
  switch(transportMessageType) {
    case goog.net.xpc.SETUP_ACK:
      this.setPeerProtocolVersion_(1);
      if (!this.setupAckReceived_.hasFired()) {
        this.setupAckReceived_.callback(true);
      }
      break;
    case goog.net.xpc.SETUP_ACK_NTPV2:
      if (this.protocolVersion_ == 2) {
        this.setPeerProtocolVersion_(2);
        if (!this.setupAckReceived_.hasFired()) {
          this.setupAckReceived_.callback(true);
        }
      }
      break;
    case goog.net.xpc.SETUP:
      this.setPeerProtocolVersion_(1);
      this.sendSetupAckMessage_(1);
      break;
    case goog.net.xpc.SETUP_NTPV2:
      if (this.protocolVersion_ == 2) {
        const prevPeerProtocolVersion = this.peerProtocolVersion_;
        this.setPeerProtocolVersion_(2);
        this.sendSetupAckMessage_(2);
        if ((prevPeerProtocolVersion == 1 || this.peerEndpointId_ != null) && this.peerEndpointId_ != peerEndpointId) {
          goog.log.info(goog.net.xpc.logger, "Sending SETUP and changing peer ID to: " + peerEndpointId);
          this.sendSetupMessage_();
        }
        this.peerEndpointId_ = peerEndpointId;
      }
      break;
  }
};
goog.net.xpc.NativeMessagingTransport.prototype.sendSetupMessage_ = function() {
  goog.asserts.assert(!(this.protocolVersion_ == 1 && this.peerProtocolVersion_ == 2));
  if (this.protocolVersion_ == 2 && this.couldPeerVersionBe_(2)) {
    let payload = goog.net.xpc.SETUP_NTPV2;
    payload += goog.net.xpc.NativeMessagingTransport.MESSAGE_DELIMITER_;
    payload += this.endpointId_;
    this.send(goog.net.xpc.TRANSPORT_SERVICE, payload);
  }
  if (this.couldPeerVersionBe_(1)) {
    this.send(goog.net.xpc.TRANSPORT_SERVICE, goog.net.xpc.SETUP);
  }
};
goog.net.xpc.NativeMessagingTransport.prototype.sendSetupAckMessage_ = function(protocolVersion) {
  goog.asserts.assert(this.protocolVersion_ != 1 || protocolVersion != 2, "Shouldn't try to send a v2 setup ack in v1 mode.");
  if (this.protocolVersion_ == 2 && this.couldPeerVersionBe_(2) && protocolVersion == 2) {
    this.send(goog.net.xpc.TRANSPORT_SERVICE, goog.net.xpc.SETUP_ACK_NTPV2);
  } else if (this.couldPeerVersionBe_(1) && protocolVersion == 1) {
    this.send(goog.net.xpc.TRANSPORT_SERVICE, goog.net.xpc.SETUP_ACK);
  } else {
    return;
  }
  if (!this.setupAckSent_.hasFired()) {
    this.setupAckSent_.callback(true);
  }
};
goog.net.xpc.NativeMessagingTransport.prototype.setPeerProtocolVersion_ = function(version) {
  if (version > this.peerProtocolVersion_) {
    this.peerProtocolVersion_ = version;
  }
  if (this.peerProtocolVersion_ == 1) {
    if (!this.setupAckSent_.hasFired() && !this.oneSidedHandshake_) {
      this.setupAckSent_.callback(true);
    }
    this.peerEndpointId_ = null;
  }
};
goog.net.xpc.NativeMessagingTransport.prototype.connect = function() {
  goog.net.xpc.NativeMessagingTransport.initialize_(this.getWindow());
  this.initialized_ = true;
  this.maybeAttemptToConnect_();
};
goog.net.xpc.NativeMessagingTransport.prototype.maybeAttemptToConnect_ = function() {
  const outerFrame = this.channel_.getRole() == goog.net.xpc.CrossPageChannelRole.OUTER;
  if (this.oneSidedHandshake_ && outerFrame || this.channel_.isConnected() || this.isDisposed()) {
    this.maybeAttemptToConnectTimer_.stop();
    return;
  }
  this.maybeAttemptToConnectTimer_.start();
  this.sendSetupMessage_();
};
goog.net.xpc.NativeMessagingTransport.prototype.send = function(service, payload) {
  const win = this.channel_.getPeerWindowObject();
  if (!win) {
    goog.log.fine(goog.net.xpc.logger, "send(): window not ready");
    return;
  }
  this.send = function(service, payload) {
    const transport = this;
    const channelName = this.channel_.name;
    const sendFunctor = function() {
      transport.sendTimerId_ = 0;
      try {
        const obj = win.postMessage ? win : win.document;
        if (!obj.postMessage) {
          goog.log.warning(goog.net.xpc.logger, "Peer window had no postMessage function.");
          return;
        }
        obj.postMessage(channelName + "|" + service + ":" + payload, transport.peerHostname_);
        goog.log.fine(goog.net.xpc.logger, "send(): service\x3d" + service + " payload\x3d" + payload + " to hostname\x3d" + transport.peerHostname_);
      } catch (error) {
        goog.log.warning(goog.net.xpc.logger, "Error performing postMessage, ignoring.", error);
      }
    };
    this.sendTimerId_ = goog.Timer.callOnce(sendFunctor, 0);
  };
  this.send(service, payload);
};
goog.net.xpc.NativeMessagingTransport.prototype.notifyConnected_ = function() {
  const delay = this.protocolVersion_ == 1 || this.peerProtocolVersion_ == 1 ? goog.net.xpc.NativeMessagingTransport.CONNECTION_DELAY_MS_ : undefined;
  this.channel_.notifyConnected(delay);
};
goog.net.xpc.NativeMessagingTransport.prototype.disposeInternal = function() {
  if (this.initialized_) {
    const listenWindow = this.getWindow();
    const uid = goog.getUid(listenWindow);
    const value = goog.net.xpc.NativeMessagingTransport.activeCount_[uid];
    goog.net.xpc.NativeMessagingTransport.activeCount_[uid] = value - 1;
    if (value == 1) {
      goog.events.unlisten(listenWindow.postMessage ? listenWindow : listenWindow.document, "message", goog.net.xpc.NativeMessagingTransport.messageReceived_, false, goog.net.xpc.NativeMessagingTransport);
    }
  }
  if (this.sendTimerId_) {
    goog.Timer.clear(this.sendTimerId_);
    this.sendTimerId_ = 0;
  }
  goog.dispose(this.eventHandler_);
  delete this.eventHandler_;
  goog.dispose(this.maybeAttemptToConnectTimer_);
  delete this.maybeAttemptToConnectTimer_;
  this.setupAckReceived_.cancel();
  delete this.setupAckReceived_;
  this.setupAckSent_.cancel();
  delete this.setupAckSent_;
  this.connected_.cancel();
  delete this.connected_;
  delete this.send;
  goog.net.xpc.NativeMessagingTransport.base(this, "disposeInternal");
};
goog.net.xpc.NativeMessagingTransport.parseTransportPayload_ = function(payload) {
  const transportParts = payload.split(goog.net.xpc.NativeMessagingTransport.MESSAGE_DELIMITER_);
  transportParts[1] = transportParts[1] || null;
  return transportParts;
};
