"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./tslib.es6-2b0ec40b.cjs");exports.clearMocks=function(){delete window.__TAURI_IPC__,delete window.__TAURI_METADATA__},exports.mockIPC=function(r){var n=this;window.__TAURI_IPC__=function(t){return e.__awaiter(n,void 0,void 0,(function(){var n,_,o,c=t.cmd,a=t.callback,i=t.error,s=e.__rest(t,["cmd","callback","error"]);return e.__generator(this,(function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),_=(n=window)["_".concat(a)],[4,r(c,s)];case 1:return _.apply(n,[e.sent()]),[3,3];case 2:return o=e.sent(),window["_".concat(i)](o),[3,3];case 3:return[2]}}))}))}},exports.mockWindows=function(r){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];window.__TAURI_METADATA__={__windows:e.__spreadArray([r],n,!0).map((function(e){return{label:e}})),__currentWindow:{label:r}}};