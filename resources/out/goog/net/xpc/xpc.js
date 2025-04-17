/*TRANSPILED*//*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';
goog.provide("goog.net.xpc");
goog.provide("goog.net.xpc.CfgFields");
goog.provide("goog.net.xpc.ChannelStates");
goog.provide("goog.net.xpc.TransportNames");
goog.provide("goog.net.xpc.TransportTypes");
goog.provide("goog.net.xpc.UriCfgFields");
goog.require("goog.log");
goog.net.xpc.TransportTypes = {UNDEFINED:0, NATIVE_MESSAGING:1,};
goog.net.xpc.TransportNames = {1:"NativeMessagingTransport",};
goog.net.xpc.CfgFields = {CHANNEL_NAME:"cn", AUTH_TOKEN:"at", REMOTE_AUTH_TOKEN:"rat", PEER_URI:"pu", IFRAME_ID:"ifrid", TRANSPORT:"tp", LOCAL_RELAY_URI:"lru", PEER_RELAY_URI:"pru", LOCAL_POLL_URI:"lpu", PEER_POLL_URI:"ppu", PEER_HOSTNAME:"ph", ONE_SIDED_HANDSHAKE:"osh", ROLE:"role", NATIVE_TRANSPORT_PROTOCOL_VERSION:"nativeProtocolVersion",};
goog.net.xpc.UriCfgFields = [goog.net.xpc.CfgFields.PEER_URI, goog.net.xpc.CfgFields.LOCAL_RELAY_URI, goog.net.xpc.CfgFields.PEER_RELAY_URI, goog.net.xpc.CfgFields.LOCAL_POLL_URI, goog.net.xpc.CfgFields.PEER_POLL_URI,];
goog.net.xpc.ChannelStates = {NOT_CONNECTED:1, CONNECTED:2, CLOSED:3,};
goog.net.xpc.TRANSPORT_SERVICE = "tp";
goog.net.xpc.SETUP = "SETUP";
goog.net.xpc.SETUP_NTPV2 = "SETUP_NTPV2";
goog.net.xpc.SETUP_ACK = "SETUP_ACK";
goog.net.xpc.SETUP_ACK_NTPV2 = "SETUP_ACK_NTPV2";
goog.net.xpc.getRandomString = function(length, opt_characters) {
  const chars = opt_characters || goog.net.xpc.randomStringCharacters_;
  const charsLength = chars.length;
  let s = "";
  while (length-- > 0) {
    s += chars.charAt(Math.floor(Math.random() * charsLength));
  }
  return s;
};
goog.net.xpc.randomStringCharacters_ = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
goog.net.xpc.logger = goog.log.getLogger("goog.net.xpc");
