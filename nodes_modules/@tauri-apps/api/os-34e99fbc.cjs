"use strict";var r=require("./tslib.es6-2b0ec40b.cjs"),e=require("./os-check-92914785.cjs"),t=require("./tauri-2adf13fc.cjs"),i=e.isWindows()?"\r\n":"\n";function n(){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(r){return[2,t.invokeTauriCommand({__tauriModule:"Os",message:{cmd:"platform"}})]}))}))}function o(){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(r){return[2,t.invokeTauriCommand({__tauriModule:"Os",message:{cmd:"version"}})]}))}))}function u(){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(r){return[2,t.invokeTauriCommand({__tauriModule:"Os",message:{cmd:"osType"}})]}))}))}function s(){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(r){return[2,t.invokeTauriCommand({__tauriModule:"Os",message:{cmd:"arch"}})]}))}))}function a(){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(r){return[2,t.invokeTauriCommand({__tauriModule:"Os",message:{cmd:"tempdir"}})]}))}))}var _=Object.freeze({__proto__:null,EOL:i,platform:n,version:o,type:u,arch:s,tempdir:a});exports.EOL=i,exports.arch=s,exports.os=_,exports.platform=n,exports.tempdir=a,exports.type=u,exports.version=o;