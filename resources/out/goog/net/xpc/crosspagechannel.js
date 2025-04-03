/*TRANSPILED*//*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';
goog.provide("goog.net.xpc.CrossPageChannel");
goog.require("goog.Uri");
goog.require("goog.async.Deferred");
goog.require("goog.async.Delay");
goog.require("goog.dispose");
goog.require("goog.dom");
goog.require("goog.dom.TagName");
goog.require("goog.dom.safe");
goog.require("goog.events");
goog.require("goog.events.EventHandler");
goog.require("goog.events.EventType");
goog.require("goog.functions");
goog.require("goog.html.legacyconversions");
goog.require("goog.json");
goog.require("goog.log");
goog.require("goog.messaging.AbstractChannel");
goog.require("goog.net.xpc");
goog.require("goog.net.xpc.CfgFields");
goog.require("goog.net.xpc.ChannelStates");
goog.require("goog.net.xpc.CrossPageChannelRole");
goog.require("goog.net.xpc.NativeMessagingTransport");
goog.require("goog.net.xpc.TransportTypes");
goog.require("goog.net.xpc.UriCfgFields");
goog.require("goog.string");
goog.require("goog.uri.utils");
goog.require("goog.userAgent");
goog.requireType("goog.net.xpc.Transport");
goog.net.xpc.CrossPageChannel = function(cfg, opt_domHelper) {
  goog.net.xpc.CrossPageChannel.base(this, "constructor");
  for (let i = 0, uriField; uriField = goog.net.xpc.UriCfgFields[i]; i++) {
    if (uriField in cfg && !/^https?:\/\//.test(cfg[uriField])) {
      throw new Error("URI " + cfg[uriField] + " is invalid for field " + uriField);
    }
  }
  this.cfg_ = cfg;
  this.name = this.cfg_[goog.net.xpc.CfgFields.CHANNEL_NAME] || goog.net.xpc.getRandomString(10);
  this.domHelper_ = opt_domHelper || goog.dom.getDomHelper();
  this.deferredDeliveries_ = [];
  this.peerLoadHandler_ = new goog.events.EventHandler(this);
  cfg[goog.net.xpc.CfgFields.LOCAL_POLL_URI] = cfg[goog.net.xpc.CfgFields.LOCAL_POLL_URI] || goog.uri.utils.getHost(this.domHelper_.getWindow().location.href) + "/robots.txt";
  cfg[goog.net.xpc.CfgFields.PEER_POLL_URI] = cfg[goog.net.xpc.CfgFields.PEER_POLL_URI] || goog.uri.utils.getHost(cfg[goog.net.xpc.CfgFields.PEER_URI] || "") + "/robots.txt";
  goog.net.xpc.CrossPageChannel.channels[this.name] = this;
  if (!goog.events.getListener(window, goog.events.EventType.UNLOAD, goog.net.xpc.CrossPageChannel.disposeAll_)) {
    goog.events.listenOnce(window, goog.events.EventType.UNLOAD, goog.net.xpc.CrossPageChannel.disposeAll_);
  }
  goog.log.info(goog.net.xpc.logger, "CrossPageChannel created: " + this.name);
};
goog.inherits(goog.net.xpc.CrossPageChannel, goog.messaging.AbstractChannel);
goog.net.xpc.CrossPageChannel.TRANSPORT_SERVICE_ESCAPE_RE_ = new RegExp("^%*" + goog.net.xpc.TRANSPORT_SERVICE + "$");
goog.net.xpc.CrossPageChannel.TRANSPORT_SERVICE_UNESCAPE_RE_ = new RegExp("^%+" + goog.net.xpc.TRANSPORT_SERVICE + "$");
goog.net.xpc.CrossPageChannel.prototype.connectionDelay_ = null;
goog.net.xpc.CrossPageChannel.prototype.peerWindowDeferred_ = null;
goog.net.xpc.CrossPageChannel.prototype.transport_ = null;
goog.net.xpc.CrossPageChannel.prototype.state_ = goog.net.xpc.ChannelStates.NOT_CONNECTED;
goog.net.xpc.CrossPageChannel.prototype.isConnected = function() {
  return this.state_ == goog.net.xpc.ChannelStates.CONNECTED;
};
goog.net.xpc.CrossPageChannel.prototype.peerWindowObject_ = null;
goog.net.xpc.CrossPageChannel.prototype.iframeElement_ = null;
goog.net.xpc.CrossPageChannel.prototype.getConfig = function() {
  return this.cfg_;
};
goog.net.xpc.CrossPageChannel.prototype.getIframeElement = function() {
  return this.iframeElement_;
};
goog.net.xpc.CrossPageChannel.prototype.setPeerWindowObject = function(peerWindowObject) {
  this.peerWindowObject_ = peerWindowObject;
};
goog.net.xpc.CrossPageChannel.prototype.getPeerWindowObject = function() {
  return this.peerWindowObject_;
};
goog.net.xpc.CrossPageChannel.prototype.isPeerAvailable = function() {
  try {
    return !!this.peerWindowObject_ && !this.peerWindowObject_.closed;
  } catch (e) {
    return false;
  }
};
goog.net.xpc.CrossPageChannel.prototype.determineTransportType_ = function() {
  let transportType;
  if (typeof document.postMessage === "function" || typeof window.postMessage === "function" || goog.userAgent.IE && window.postMessage) {
    transportType = goog.net.xpc.TransportTypes.NATIVE_MESSAGING;
  } else {
    transportType = goog.net.xpc.TransportTypes.UNDEFINED;
  }
  return transportType;
};
goog.net.xpc.CrossPageChannel.prototype.createTransport_ = function() {
  if (this.transport_) {
    return;
  }
  const CfgFields = goog.net.xpc.CfgFields;
  if (!this.cfg_[CfgFields.TRANSPORT]) {
    this.cfg_[CfgFields.TRANSPORT] = this.determineTransportType_();
  }
  if (typeof this.cfg_[CfgFields.TRANSPORT] === "function") {
    this.transport_ = new this.cfg_[CfgFields.TRANSPORT](this, this.domHelper_);
  } else {
    switch(this.cfg_[CfgFields.TRANSPORT]) {
      case goog.net.xpc.TransportTypes.NATIVE_MESSAGING:
        const protocolVersion = this.cfg_[CfgFields.NATIVE_TRANSPORT_PROTOCOL_VERSION] || 2;
        this.transport_ = new goog.net.xpc.NativeMessagingTransport(this, this.cfg_[CfgFields.PEER_HOSTNAME], this.domHelper_, !!this.cfg_[CfgFields.ONE_SIDED_HANDSHAKE], protocolVersion);
        break;
    }
  }
  if (this.transport_) {
    goog.log.info(goog.net.xpc.logger, "Transport created: " + this.transport_.getName());
  } else {
    throw new Error("CrossPageChannel: No suitable transport found! You may " + "try injecting a Transport constructor directly via the channel " + "config object.");
  }
};
goog.net.xpc.CrossPageChannel.prototype.getTransportType = function() {
  return this.transport_.getType();
};
goog.net.xpc.CrossPageChannel.prototype.getTransportName = function() {
  return this.transport_.getName();
};
goog.net.xpc.CrossPageChannel.prototype.getPeerConfiguration = function() {
  const peerCfg = {};
  peerCfg[goog.net.xpc.CfgFields.CHANNEL_NAME] = this.name;
  peerCfg[goog.net.xpc.CfgFields.TRANSPORT] = this.cfg_[goog.net.xpc.CfgFields.TRANSPORT];
  peerCfg[goog.net.xpc.CfgFields.ONE_SIDED_HANDSHAKE] = this.cfg_[goog.net.xpc.CfgFields.ONE_SIDED_HANDSHAKE];
  if (this.cfg_[goog.net.xpc.CfgFields.LOCAL_RELAY_URI]) {
    peerCfg[goog.net.xpc.CfgFields.PEER_RELAY_URI] = this.cfg_[goog.net.xpc.CfgFields.LOCAL_RELAY_URI];
  }
  if (this.cfg_[goog.net.xpc.CfgFields.LOCAL_POLL_URI]) {
    peerCfg[goog.net.xpc.CfgFields.PEER_POLL_URI] = this.cfg_[goog.net.xpc.CfgFields.LOCAL_POLL_URI];
  }
  if (this.cfg_[goog.net.xpc.CfgFields.PEER_POLL_URI]) {
    peerCfg[goog.net.xpc.CfgFields.LOCAL_POLL_URI] = this.cfg_[goog.net.xpc.CfgFields.PEER_POLL_URI];
  }
  const role = this.cfg_[goog.net.xpc.CfgFields.ROLE];
  if (role) {
    peerCfg[goog.net.xpc.CfgFields.ROLE] = role == goog.net.xpc.CrossPageChannelRole.INNER ? goog.net.xpc.CrossPageChannelRole.OUTER : goog.net.xpc.CrossPageChannelRole.INNER;
  }
  return peerCfg;
};
goog.net.xpc.CrossPageChannel.prototype.createPeerIframe = function(parentElm, opt_configureIframeCb, opt_addCfgParam) {
  goog.log.info(goog.net.xpc.logger, "createPeerIframe()");
  let iframeId = this.cfg_[goog.net.xpc.CfgFields.IFRAME_ID];
  if (!iframeId) {
    iframeId = this.cfg_[goog.net.xpc.CfgFields.IFRAME_ID] = "xpcpeer" + goog.net.xpc.getRandomString(4);
  }
  const iframeElm = goog.dom.getDomHelper(parentElm).createElement(goog.dom.TagName.IFRAME);
  iframeElm.id = iframeElm.name = iframeId;
  if (opt_configureIframeCb) {
    opt_configureIframeCb(iframeElm);
  } else {
    iframeElm.style.width = iframeElm.style.height = "100%";
  }
  this.cleanUpIncompleteConnection_();
  this.peerWindowDeferred_ = new goog.async.Deferred(undefined, this);
  const peerUri = this.getPeerUri(opt_addCfgParam);
  this.peerLoadHandler_.listenOnceWithScope(iframeElm, "load", this.peerWindowDeferred_.callback, false, this.peerWindowDeferred_);
  if (goog.userAgent.GECKO || goog.userAgent.WEBKIT) {
    window.setTimeout(goog.bind(function() {
      parentElm.appendChild(iframeElm);
      goog.dom.safe.setIframeSrc(iframeElm, goog.html.legacyconversions.trustedResourceUrlFromString(peerUri.toString()));
      goog.log.info(goog.net.xpc.logger, "peer iframe created (" + iframeId + ")");
    }, this), 1);
  } else {
    goog.dom.safe.setIframeSrc(iframeElm, goog.html.legacyconversions.trustedResourceUrlFromString(peerUri.toString()));
    parentElm.appendChild(iframeElm);
    goog.log.info(goog.net.xpc.logger, "peer iframe created (" + iframeId + ")");
  }
  return iframeElm;
};
goog.net.xpc.CrossPageChannel.prototype.cleanUpIncompleteConnection_ = function() {
  if (this.peerWindowDeferred_) {
    this.peerWindowDeferred_.cancel();
    this.peerWindowDeferred_ = null;
  }
  this.deferredDeliveries_.length = 0;
  this.peerLoadHandler_.removeAll();
};
goog.net.xpc.CrossPageChannel.prototype.getPeerUri = function(opt_addCfgParam) {
  let peerUri = this.cfg_[goog.net.xpc.CfgFields.PEER_URI];
  if (typeof peerUri === "string") {
    peerUri = this.cfg_[goog.net.xpc.CfgFields.PEER_URI] = new goog.Uri(peerUri);
  }
  if (opt_addCfgParam !== false) {
    peerUri.setParameterValue("xpc", goog.json.serialize(this.getPeerConfiguration()));
  }
  return peerUri;
};
goog.net.xpc.CrossPageChannel.prototype.connect = function(opt_connectCb) {
  this.connectCb_ = opt_connectCb || goog.functions.UNDEFINED;
  if (this.state_ == goog.net.xpc.ChannelStates.CLOSED) {
    this.state_ = goog.net.xpc.ChannelStates.NOT_CONNECTED;
  }
  if (this.peerWindowDeferred_) {
    this.peerWindowDeferred_.addCallback(this.continueConnection_);
  } else {
    this.continueConnection_();
  }
};
goog.net.xpc.CrossPageChannel.prototype.continueConnection_ = function() {
  goog.log.info(goog.net.xpc.logger, "continueConnection_()");
  this.peerWindowDeferred_ = null;
  if (this.cfg_[goog.net.xpc.CfgFields.IFRAME_ID]) {
    this.iframeElement_ = this.domHelper_.getElement(this.cfg_[goog.net.xpc.CfgFields.IFRAME_ID]);
  }
  if (this.iframeElement_) {
    let winObj = this.iframeElement_.contentWindow;
    if (!winObj) {
      winObj = window.frames[this.cfg_[goog.net.xpc.CfgFields.IFRAME_ID]];
    }
    this.setPeerWindowObject(winObj);
  }
  if (!this.peerWindowObject_) {
    if (window == window.top) {
      throw new Error("CrossPageChannel: Can't connect, peer window-object not set.");
    } else {
      this.setPeerWindowObject(window.parent);
    }
  }
  this.createTransport_();
  this.transport_.connect();
  while (this.deferredDeliveries_.length > 0) {
    this.deferredDeliveries_.shift()();
  }
};
goog.net.xpc.CrossPageChannel.prototype.close = function() {
  this.cleanUpIncompleteConnection_();
  this.state_ = goog.net.xpc.ChannelStates.CLOSED;
  goog.dispose(this.transport_);
  this.transport_ = null;
  this.connectCb_ = null;
  goog.dispose(this.connectionDelay_);
  this.connectionDelay_ = null;
  goog.log.info(goog.net.xpc.logger, 'Channel "' + this.name + '" closed');
};
goog.net.xpc.CrossPageChannel.prototype.notifyConnected = function(opt_delay) {
  if (this.isConnected() || this.connectionDelay_ && this.connectionDelay_.isActive()) {
    return;
  }
  this.state_ = goog.net.xpc.ChannelStates.CONNECTED;
  goog.log.info(goog.net.xpc.logger, 'Channel "' + this.name + '" connected');
  goog.dispose(this.connectionDelay_);
  if (opt_delay !== undefined) {
    this.connectionDelay_ = new goog.async.Delay(this.connectCb_, opt_delay);
    this.connectionDelay_.start();
  } else {
    this.connectionDelay_ = null;
    this.connectCb_();
  }
};
goog.net.xpc.CrossPageChannel.prototype.notifyTransportError = function() {
  goog.log.info(goog.net.xpc.logger, "Transport Error");
  this.close();
};
goog.net.xpc.CrossPageChannel.prototype.send = function(serviceName, payload) {
  if (!this.isConnected()) {
    goog.log.error(goog.net.xpc.logger, "Can't send. Channel not connected.");
    return;
  }
  if (!this.isPeerAvailable()) {
    goog.log.error(goog.net.xpc.logger, "Peer has disappeared.");
    this.close();
    return;
  }
  if (goog.isObject(payload)) {
    payload = goog.json.serialize(payload);
  }
  this.transport_.send(this.escapeServiceName_(serviceName), payload);
};
goog.net.xpc.CrossPageChannel.prototype.xpcDeliver = function(serviceName, payload, opt_origin) {
  if (this.peerWindowDeferred_) {
    this.deferredDeliveries_.push(goog.bind(this.xpcDeliver, this, serviceName, payload, opt_origin));
    return;
  }
  if (!this.isMessageOriginAcceptable(opt_origin)) {
    goog.log.warning(goog.net.xpc.logger, 'Message received from unapproved origin "' + opt_origin + '" - rejected.');
    return;
  }
  if (this.isDisposed() || this.state_ == goog.net.xpc.ChannelStates.CLOSED) {
    goog.log.warning(goog.net.xpc.logger, "CrossPageChannel::xpcDeliver(): Channel closed.");
  } else if (!serviceName || serviceName == goog.net.xpc.TRANSPORT_SERVICE) {
    this.transport_.transportServiceHandler(payload);
  } else {
    if (this.isConnected()) {
      this.deliver(this.unescapeServiceName_(serviceName), payload);
    } else {
      goog.log.info(goog.net.xpc.logger, "CrossPageChannel::xpcDeliver(): Not connected.");
    }
  }
};
goog.net.xpc.CrossPageChannel.prototype.escapeServiceName_ = function(name) {
  if (goog.net.xpc.CrossPageChannel.TRANSPORT_SERVICE_ESCAPE_RE_.test(name)) {
    name = "%" + name;
  }
  return name.replace(/[%:|]/g, encodeURIComponent);
};
goog.net.xpc.CrossPageChannel.prototype.unescapeServiceName_ = function(name) {
  name = name.replace(/%[0-9a-f]{2}/gi, decodeURIComponent);
  if (goog.net.xpc.CrossPageChannel.TRANSPORT_SERVICE_UNESCAPE_RE_.test(name)) {
    return name.substring(1);
  } else {
    return name;
  }
};
goog.net.xpc.CrossPageChannel.prototype.getRole = function() {
  const role = this.cfg_[goog.net.xpc.CfgFields.ROLE];
  if (typeof role === "number") {
    return role;
  } else {
    return window.parent == this.peerWindowObject_ ? goog.net.xpc.CrossPageChannelRole.INNER : goog.net.xpc.CrossPageChannelRole.OUTER;
  }
};
goog.net.xpc.CrossPageChannel.prototype.updateChannelNameAndCatalog = function(name) {
  goog.log.fine(goog.net.xpc.logger, "changing channel name to " + name);
  delete goog.net.xpc.CrossPageChannel.channels[this.name];
  this.name = name;
  goog.net.xpc.CrossPageChannel.channels[name] = this;
};
goog.net.xpc.CrossPageChannel.prototype.isMessageOriginAcceptable = function(opt_origin) {
  const peerHostname = this.cfg_[goog.net.xpc.CfgFields.PEER_HOSTNAME];
  return goog.string.isEmptyOrWhitespace(goog.string.makeSafe(opt_origin)) || goog.string.isEmptyOrWhitespace(goog.string.makeSafe(peerHostname)) || opt_origin == this.cfg_[goog.net.xpc.CfgFields.PEER_HOSTNAME];
};
goog.net.xpc.CrossPageChannel.prototype.disposeInternal = function() {
  this.close();
  this.peerWindowObject_ = null;
  this.iframeElement_ = null;
  delete goog.net.xpc.CrossPageChannel.channels[this.name];
  goog.dispose(this.peerLoadHandler_);
  delete this.peerLoadHandler_;
  goog.net.xpc.CrossPageChannel.base(this, "disposeInternal");
};
goog.net.xpc.CrossPageChannel.disposeAll_ = function() {
  for (let name in goog.net.xpc.CrossPageChannel.channels) {
    goog.dispose(goog.net.xpc.CrossPageChannel.channels[name]);
  }
};
goog.net.xpc.CrossPageChannel.channels = {};
