/*TRANSPILED*//*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';
goog.provide("goog.messaging.AbstractChannel");
goog.require("goog.Disposable");
goog.require("goog.json");
goog.require("goog.log");
goog.require("goog.messaging.MessageChannel");
goog.messaging.AbstractChannel = function() {
  goog.messaging.AbstractChannel.base(this, "constructor");
  this.services_ = {};
};
goog.inherits(goog.messaging.AbstractChannel, goog.Disposable);
goog.messaging.AbstractChannel.prototype.defaultService_;
goog.messaging.AbstractChannel.prototype.logger = goog.log.getLogger("goog.messaging.AbstractChannel");
goog.messaging.AbstractChannel.prototype.connect = function(opt_connectCb) {
  if (opt_connectCb) {
    opt_connectCb();
  }
};
goog.messaging.AbstractChannel.prototype.isConnected = function() {
  return true;
};
goog.messaging.AbstractChannel.prototype.registerService = function(serviceName, callback, opt_objectPayload) {
  this.services_[serviceName] = {callback:callback, objectPayload:!!opt_objectPayload};
};
goog.messaging.AbstractChannel.prototype.registerDefaultService = function(callback) {
  this.defaultService_ = callback;
};
goog.messaging.AbstractChannel.prototype.send = goog.abstractMethod;
goog.messaging.AbstractChannel.prototype.deliver = function(serviceName, payload) {
  const service = this.getService(serviceName, payload);
  if (!service) {
    return;
  }
  const decodedPayload = this.decodePayload(serviceName, payload, service.objectPayload);
  if (decodedPayload != null) {
    service.callback(decodedPayload);
  }
};
goog.messaging.AbstractChannel.prototype.getService = function(serviceName, payload) {
  const service = this.services_[serviceName];
  if (service) {
    return service;
  } else if (this.defaultService_) {
    const callback = goog.partial(this.defaultService_, serviceName);
    const objectPayload = goog.isObject(payload);
    return {callback:callback, objectPayload:objectPayload};
  }
  goog.log.warning(this.logger, 'Unknown service name "' + serviceName + '"');
  return null;
};
goog.messaging.AbstractChannel.prototype.decodePayload = function(serviceName, payload, objectPayload) {
  if (objectPayload && typeof payload === "string") {
    try {
      return JSON.parse(payload);
    } catch (err) {
      goog.log.warning(this.logger, "Expected JSON payload for " + serviceName + ', was "' + payload + '"');
      return null;
    }
  } else if (!objectPayload && typeof payload !== "string") {
    return goog.json.serialize(payload);
  }
  return payload;
};
goog.messaging.AbstractChannel.prototype.disposeInternal = function() {
  goog.messaging.AbstractChannel.base(this, "disposeInternal");
  delete this.services_;
  delete this.defaultService_;
};
