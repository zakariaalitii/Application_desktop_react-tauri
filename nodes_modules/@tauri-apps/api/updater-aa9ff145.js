import{_ as t,a as n}from"./tslib.es6-9bc0804d.js";import{l as o,e as a,o as r}from"./event-4f5dbe80.js";function i(){return t(this,void 0,void 0,(function(){function t(){r&&r(),r=void 0}var r;return n(this,(function(n){return[2,new Promise((function(n,i){o("tauri://update-status",(function(o){var a;(a=null==o?void 0:o.payload).error?(t(),i(a.error)):"DONE"===a.status&&(t(),n())})).then((function(t){r=t})).catch((function(n){throw t(),n})),a("tauri://update-install").catch((function(n){throw t(),n}))}))]}))}))}function u(){return t(this,void 0,void 0,(function(){function t(){i&&i(),i=void 0}var i;return n(this,(function(n){return[2,new Promise((function(n,u){r("tauri://update-available",(function(o){var a;a=null==o?void 0:o.payload,t(),n({manifest:a,shouldUpdate:!0})})).catch((function(n){throw t(),n})),o("tauri://update-status",(function(o){var a;(a=null==o?void 0:o.payload).error?(t(),u(a.error)):"UPTODATE"===a.status&&(t(),n({shouldUpdate:!1}))})).then((function(t){i=t})).catch((function(n){throw t(),n})),a("tauri://update").catch((function(n){throw t(),n}))}))]}))}))}var e=Object.freeze({__proto__:null,installUpdate:i,checkUpdate:u});export{u as c,i,e as u};
