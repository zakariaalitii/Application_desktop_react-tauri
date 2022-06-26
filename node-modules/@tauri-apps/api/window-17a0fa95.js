import{c as t,_ as e,a as i,b as n}from"./tslib.es6-9bc0804d.js";import{i as o}from"./tauri-19998099.js";import{l as r,o as a,e as u}from"./event-41f00c56.js";var s,d=function(t,e){this.type="Logical",this.width=t,this.height=e},l=function(){function t(t,e){this.type="Physical",this.width=t,this.height=e}return t.prototype.toLogical=function(t){return new d(this.width/t,this.height/t)},t}(),c=function(t,e){this.type="Logical",this.x=t,this.y=e},h=function(){function t(t,e){this.type="Physical",this.x=t,this.y=e}return t.prototype.toLogical=function(t){return new c(this.x/t,this.y/t)},t}();function m(){return new v(window.__TAURI_METADATA__.__currentWindow.label,{skip:!0})}function p(){return window.__TAURI_METADATA__.__windows.map((function(t){return new v(t.label,{skip:!0})}))}!function(t){t[t.Critical=1]="Critical",t[t.Informational=2]="Informational"}(s||(s={}));var f,y=["tauri://created","tauri://error"],g=function(){function t(t){this.label=t,this.listeners=Object.create(null)}return t.prototype.listen=function(t,n){return e(this,void 0,void 0,(function(){var e=this;return i(this,(function(i){return this._handleTauriEvent(t,n)?[2,Promise.resolve((function(){var i=e.listeners[t];i.splice(i.indexOf(n),1)}))]:[2,r(t,this.label,n)]}))}))},t.prototype.once=function(t,n){return e(this,void 0,void 0,(function(){var e=this;return i(this,(function(i){return this._handleTauriEvent(t,n)?[2,Promise.resolve((function(){var i=e.listeners[t];i.splice(i.indexOf(n),1)}))]:[2,a(t,this.label,n)]}))}))},t.prototype.emit=function(t,n){return e(this,void 0,void 0,(function(){var e,o;return i(this,(function(i){if(y.includes(t)){for(e=0,o=this.listeners[t]||[];e<o.length;e++)(0,o[e])({event:t,id:-1,windowLabel:this.label,payload:n});return[2,Promise.resolve()]}return[2,u(t,this.label,n)]}))}))},t.prototype._handleTauriEvent=function(t,e){return!!y.includes(t)&&(t in this.listeners?this.listeners[t].push(e):this.listeners[t]=[e],!0)},t}(),_=function(n){function r(){return null!==n&&n.apply(this,arguments)||this}return t(r,n),r.prototype.scaleFactor=function(){return e(this,void 0,void 0,(function(){return i(this,(function(t){return[2,o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"scaleFactor"}}}})]}))}))},r.prototype.innerPosition=function(){return e(this,void 0,void 0,(function(){return i(this,(function(t){return[2,o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"innerPosition"}}}}).then((function(t){var e=t.x,i=t.y;return new h(e,i)}))]}))}))},r.prototype.outerPosition=function(){return e(this,void 0,void 0,(function(){return i(this,(function(t){return[2,o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"outerPosition"}}}}).then((function(t){var e=t.x,i=t.y;return new h(e,i)}))]}))}))},r.prototype.innerSize=function(){return e(this,void 0,void 0,(function(){return i(this,(function(t){return[2,o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"innerSize"}}}}).then((function(t){var e=t.width,i=t.height;return new l(e,i)}))]}))}))},r.prototype.outerSize=function(){return e(this,void 0,void 0,(function(){return i(this,(function(t){return[2,o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"outerSize"}}}}).then((function(t){var e=t.width,i=t.height;return new l(e,i)}))]}))}))},r.prototype.isFullscreen=function(){return e(this,void 0,void 0,(function(){return i(this,(function(t){return[2,o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isFullscreen"}}}})]}))}))},r.prototype.isMaximized=function(){return e(this,void 0,void 0,(function(){return i(this,(function(t){return[2,o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isMaximized"}}}})]}))}))},r.prototype.isDecorated=function(){return e(this,void 0,void 0,(function(){return i(this,(function(t){return[2,o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isDecorated"}}}})]}))}))},r.prototype.isResizable=function(){return e(this,void 0,void 0,(function(){return i(this,(function(t){return[2,o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isResizable"}}}})]}))}))},r.prototype.isVisible=function(){return e(this,void 0,void 0,(function(){return i(this,(function(t){return[2,o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isVisible"}}}})]}))}))},r.prototype.theme=function(){return e(this,void 0,void 0,(function(){return i(this,(function(t){return[2,o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"theme"}}}})]}))}))},r.prototype.center=function(){return e(this,void 0,void 0,(function(){return i(this,(function(t){return[2,o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"center"}}}})]}))}))},r.prototype.requestUserAttention=function(t){return e(this,void 0,void 0,(function(){var e;return i(this,(function(i){return e=null,t&&(e=t===s.Critical?{type:"Critical"}:{type:"Informational"}),[2,o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"requestUserAttention",payload:e}}}})]}))}))},r.prototype.setResizable=function(t){return e(this,void 0,void 0,(function(){return i(this,(function(e){return[2,o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setResizable",payload:t}}}})]}))}))},r.prototype.setTitle=function(t){return e(this,void 0,void 0,(function(){return i(this,(function(e){return[2,o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setTitle",payload:t}}}})]}))}))},r.prototype.maximize=function(){return e(this,void 0,void 0,(function(){return i(this,(function(t){return[2,o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"maximize"}}}})]}))}))},r.prototype.unmaximize=function(){return e(this,void 0,void 0,(function(){return i(this,(function(t){return[2,o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"unmaximize"}}}})]}))}))},r.prototype.toggleMaximize=function(){return e(this,void 0,void 0,(function(){return i(this,(function(t){return[2,o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"toggleMaximize"}}}})]}))}))},r.prototype.minimize=function(){return e(this,void 0,void 0,(function(){return i(this,(function(t){return[2,o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"minimize"}}}})]}))}))},r.prototype.unminimize=function(){return e(this,void 0,void 0,(function(){return i(this,(function(t){return[2,o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"unminimize"}}}})]}))}))},r.prototype.show=function(){return e(this,void 0,void 0,(function(){return i(this,(function(t){return[2,o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"show"}}}})]}))}))},r.prototype.hide=function(){return e(this,void 0,void 0,(function(){return i(this,(function(t){return[2,o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"hide"}}}})]}))}))},r.prototype.close=function(){return e(this,void 0,void 0,(function(){return i(this,(function(t){return[2,o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"close"}}}})]}))}))},r.prototype.setDecorations=function(t){return e(this,void 0,void 0,(function(){return i(this,(function(e){return[2,o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setDecorations",payload:t}}}})]}))}))},r.prototype.setAlwaysOnTop=function(t){return e(this,void 0,void 0,(function(){return i(this,(function(e){return[2,o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setAlwaysOnTop",payload:t}}}})]}))}))},r.prototype.setSize=function(t){return e(this,void 0,void 0,(function(){return i(this,(function(e){if(!t||"Logical"!==t.type&&"Physical"!==t.type)throw new Error("the `size` argument must be either a LogicalSize or a PhysicalSize instance");return[2,o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setSize",payload:{type:t.type,data:{width:t.width,height:t.height}}}}}})]}))}))},r.prototype.setMinSize=function(t){return e(this,void 0,void 0,(function(){return i(this,(function(e){if(t&&"Logical"!==t.type&&"Physical"!==t.type)throw new Error("the `size` argument must be either a LogicalSize or a PhysicalSize instance");return[2,o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setMinSize",payload:t?{type:t.type,data:{width:t.width,height:t.height}}:null}}}})]}))}))},r.prototype.setMaxSize=function(t){return e(this,void 0,void 0,(function(){return i(this,(function(e){if(t&&"Logical"!==t.type&&"Physical"!==t.type)throw new Error("the `size` argument must be either a LogicalSize or a PhysicalSize instance");return[2,o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setMaxSize",payload:t?{type:t.type,data:{width:t.width,height:t.height}}:null}}}})]}))}))},r.prototype.setPosition=function(t){return e(this,void 0,void 0,(function(){return i(this,(function(e){if(!t||"Logical"!==t.type&&"Physical"!==t.type)throw new Error("the `position` argument must be either a LogicalPosition or a PhysicalPosition instance");return[2,o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setPosition",payload:{type:t.type,data:{x:t.x,y:t.y}}}}}})]}))}))},r.prototype.setFullscreen=function(t){return e(this,void 0,void 0,(function(){return i(this,(function(e){return[2,o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setFullscreen",payload:t}}}})]}))}))},r.prototype.setFocus=function(){return e(this,void 0,void 0,(function(){return i(this,(function(t){return[2,o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setFocus"}}}})]}))}))},r.prototype.setIcon=function(t){return e(this,void 0,void 0,(function(){return i(this,(function(e){return[2,o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setIcon",payload:{icon:"string"==typeof t?t:Array.from(t)}}}}})]}))}))},r.prototype.setSkipTaskbar=function(t){return e(this,void 0,void 0,(function(){return i(this,(function(e){return[2,o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setSkipTaskbar",payload:t}}}})]}))}))},r.prototype.setCursorGrab=function(t){return e(this,void 0,void 0,(function(){return i(this,(function(e){return[2,o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setCursorGrab",payload:t}}}})]}))}))},r.prototype.setCursorVisible=function(t){return e(this,void 0,void 0,(function(){return i(this,(function(e){return[2,o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setCursorVisible",payload:t}}}})]}))}))},r.prototype.setCursorIcon=function(t){return e(this,void 0,void 0,(function(){return i(this,(function(e){return[2,o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setCursorIcon",payload:t}}}})]}))}))},r.prototype.setCursorPosition=function(t){return e(this,void 0,void 0,(function(){return i(this,(function(e){if(!t||"Logical"!==t.type&&"Physical"!==t.type)throw new Error("the `position` argument must be either a LogicalPosition or a PhysicalPosition instance");return[2,o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setCursorPosition",payload:{type:t.type,data:{x:t.x,y:t.y}}}}}})]}))}))},r.prototype.startDragging=function(){return e(this,void 0,void 0,(function(){return i(this,(function(t){return[2,o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"startDragging"}}}})]}))}))},r}(g),v=function(r){function a(t,a){void 0===a&&(a={});var u=r.call(this,t)||this;return(null==a?void 0:a.skip)||o({__tauriModule:"Window",message:{cmd:"createWebview",data:{options:n({label:t},a)}}}).then((function(){return e(u,void 0,void 0,(function(){return i(this,(function(t){return[2,this.emit("tauri://created")]}))}))})).catch((function(t){return e(u,void 0,void 0,(function(){return i(this,(function(e){return[2,this.emit("tauri://error",t)]}))}))})),u}return t(a,r),a.getByLabel=function(t){return p().some((function(e){return e.label===t}))?new a(t,{skip:!0}):null},a}(_);function b(){return e(this,void 0,void 0,(function(){return i(this,(function(t){return[2,o({__tauriModule:"Window",message:{cmd:"manage",data:{cmd:{type:"currentMonitor"}}}})]}))}))}function w(){return e(this,void 0,void 0,(function(){return i(this,(function(t){return[2,o({__tauriModule:"Window",message:{cmd:"manage",data:{cmd:{type:"primaryMonitor"}}}})]}))}))}function M(){return e(this,void 0,void 0,(function(){return i(this,(function(t){return[2,o({__tauriModule:"Window",message:{cmd:"manage",data:{cmd:{type:"availableMonitors"}}}})]}))}))}"__TAURI_METADATA__"in window?f=new v(window.__TAURI_METADATA__.__currentWindow.label,{skip:!0}):(console.warn('Could not find "window.__TAURI_METADATA__". The "appWindow" value will reference the "main" window label.\nNote that this is not an issue if running this frontend on a browser instead of a Tauri window.'),f=new v("main",{skip:!0}));var W=Object.freeze({__proto__:null,WebviewWindow:v,WebviewWindowHandle:g,WindowManager:_,getCurrent:m,getAll:p,get appWindow(){return f},LogicalSize:d,PhysicalSize:l,LogicalPosition:c,PhysicalPosition:h,get UserAttentionType(){return s},currentMonitor:b,primaryMonitor:w,availableMonitors:M});export{d as L,l as P,s as U,v as W,g as a,_ as b,p as c,f as d,c as e,h as f,m as g,b as h,M as i,w as p,W as w};
