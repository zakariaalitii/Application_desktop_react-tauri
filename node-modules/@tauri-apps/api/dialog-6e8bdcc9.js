import{_ as t,a as e}from"./tslib.es6-9bc0804d.js";import{i}from"./tauri-19998099.js";function o(o){return void 0===o&&(o={}),t(this,void 0,void 0,(function(){return e(this,(function(t){return"object"==typeof o&&Object.freeze(o),[2,i({__tauriModule:"Dialog",message:{cmd:"openDialog",options:o}})]}))}))}function n(o){return void 0===o&&(o={}),t(this,void 0,void 0,(function(){return e(this,(function(t){return"object"==typeof o&&Object.freeze(o),[2,i({__tauriModule:"Dialog",message:{cmd:"saveDialog",options:o}})]}))}))}function r(o,n){return t(this,void 0,void 0,(function(){var t;return e(this,(function(e){return[2,i({__tauriModule:"Dialog",message:{cmd:"messageDialog",message:o,title:null==(t="string"==typeof n?{title:n}:n)?void 0:t.title,type:null==t?void 0:t.type}})]}))}))}function s(o,n){return t(this,void 0,void 0,(function(){var t;return e(this,(function(e){return[2,i({__tauriModule:"Dialog",message:{cmd:"askDialog",message:o,title:null==(t="string"==typeof n?{title:n}:n)?void 0:t.title,type:null==t?void 0:t.type}})]}))}))}function u(o,n){return t(this,void 0,void 0,(function(){var t;return e(this,(function(e){return[2,i({__tauriModule:"Dialog",message:{cmd:"confirmDialog",message:o,title:null==(t="string"==typeof n?{title:n}:n)?void 0:t.title,type:null==t?void 0:t.type}})]}))}))}var a=Object.freeze({__proto__:null,open:o,save:n,message:r,ask:s,confirm:u});export{s as a,u as c,a as d,r as m,o,n as s};
