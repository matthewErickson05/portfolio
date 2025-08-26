(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var zf={exports:{}},To={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yg;function Bx(){if(Yg)return To;Yg=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:u}}return To.Fragment=t,To.jsx=i,To.jsxs=i,To}var jg;function Fx(){return jg||(jg=1,zf.exports=Bx()),zf.exports}var Mt=Fx(),Bf={exports:{}},re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zg;function Hx(){if(Zg)return re;Zg=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.iterator;function S(N){return N===null||typeof N!="object"?null:(N=v&&N[v]||N["@@iterator"],typeof N=="function"?N:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,w={};function x(N,$,vt){this.props=N,this.context=$,this.refs=w,this.updater=vt||M}x.prototype.isReactComponent={},x.prototype.setState=function(N,$){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,$,"setState")},x.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function g(){}g.prototype=x.prototype;function L(N,$,vt){this.props=N,this.context=$,this.refs=w,this.updater=vt||M}var D=L.prototype=new g;D.constructor=L,T(D,x.prototype),D.isPureReactComponent=!0;var C=Array.isArray,I={H:null,A:null,T:null,S:null,V:null},z=Object.prototype.hasOwnProperty;function O(N,$,vt,xt,K,mt){return vt=mt.ref,{$$typeof:o,type:N,key:$,ref:vt!==void 0?vt:null,props:mt}}function X(N,$){return O(N.type,$,void 0,void 0,void 0,N.props)}function U(N){return typeof N=="object"&&N!==null&&N.$$typeof===o}function A(N){var $={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(vt){return $[vt]})}var H=/\/+/g;function tt(N,$){return typeof N=="object"&&N!==null&&N.key!=null?A(""+N.key):$.toString(36)}function at(){}function pt(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(at,at):(N.status="pending",N.then(function($){N.status==="pending"&&(N.status="fulfilled",N.value=$)},function($){N.status==="pending"&&(N.status="rejected",N.reason=$)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function ut(N,$,vt,xt,K){var mt=typeof N;(mt==="undefined"||mt==="boolean")&&(N=null);var Et=!1;if(N===null)Et=!0;else switch(mt){case"bigint":case"string":case"number":Et=!0;break;case"object":switch(N.$$typeof){case o:case t:Et=!0;break;case _:return Et=N._init,ut(Et(N._payload),$,vt,xt,K)}}if(Et)return K=K(N),Et=xt===""?"."+tt(N,0):xt,C(K)?(vt="",Et!=null&&(vt=Et.replace(H,"$&/")+"/"),ut(K,$,vt,"",function(le){return le})):K!=null&&(U(K)&&(K=X(K,vt+(K.key==null||N&&N.key===K.key?"":(""+K.key).replace(H,"$&/")+"/")+Et)),$.push(K)),1;Et=0;var Rt=xt===""?".":xt+":";if(C(N))for(var wt=0;wt<N.length;wt++)xt=N[wt],mt=Rt+tt(xt,wt),Et+=ut(xt,$,vt,mt,K);else if(wt=S(N),typeof wt=="function")for(N=wt.call(N),wt=0;!(xt=N.next()).done;)xt=xt.value,mt=Rt+tt(xt,wt++),Et+=ut(xt,$,vt,mt,K);else if(mt==="object"){if(typeof N.then=="function")return ut(pt(N),$,vt,xt,K);throw $=String(N),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return Et}function F(N,$,vt){if(N==null)return N;var xt=[],K=0;return ut(N,xt,"","",function(mt){return $.call(vt,mt,K++)}),xt}function j(N){if(N._status===-1){var $=N._result;$=$(),$.then(function(vt){(N._status===0||N._status===-1)&&(N._status=1,N._result=vt)},function(vt){(N._status===0||N._status===-1)&&(N._status=2,N._result=vt)}),N._status===-1&&(N._status=0,N._result=$)}if(N._status===1)return N._result.default;throw N._result}var W=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function St(){}return re.Children={map:F,forEach:function(N,$,vt){F(N,function(){$.apply(this,arguments)},vt)},count:function(N){var $=0;return F(N,function(){$++}),$},toArray:function(N){return F(N,function($){return $})||[]},only:function(N){if(!U(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},re.Component=x,re.Fragment=i,re.Profiler=l,re.PureComponent=L,re.StrictMode=s,re.Suspense=m,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,re.__COMPILER_RUNTIME={__proto__:null,c:function(N){return I.H.useMemoCache(N)}},re.cache=function(N){return function(){return N.apply(null,arguments)}},re.cloneElement=function(N,$,vt){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var xt=T({},N.props),K=N.key,mt=void 0;if($!=null)for(Et in $.ref!==void 0&&(mt=void 0),$.key!==void 0&&(K=""+$.key),$)!z.call($,Et)||Et==="key"||Et==="__self"||Et==="__source"||Et==="ref"&&$.ref===void 0||(xt[Et]=$[Et]);var Et=arguments.length-2;if(Et===1)xt.children=vt;else if(1<Et){for(var Rt=Array(Et),wt=0;wt<Et;wt++)Rt[wt]=arguments[wt+2];xt.children=Rt}return O(N.type,K,void 0,void 0,mt,xt)},re.createContext=function(N){return N={$$typeof:h,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:u,_context:N},N},re.createElement=function(N,$,vt){var xt,K={},mt=null;if($!=null)for(xt in $.key!==void 0&&(mt=""+$.key),$)z.call($,xt)&&xt!=="key"&&xt!=="__self"&&xt!=="__source"&&(K[xt]=$[xt]);var Et=arguments.length-2;if(Et===1)K.children=vt;else if(1<Et){for(var Rt=Array(Et),wt=0;wt<Et;wt++)Rt[wt]=arguments[wt+2];K.children=Rt}if(N&&N.defaultProps)for(xt in Et=N.defaultProps,Et)K[xt]===void 0&&(K[xt]=Et[xt]);return O(N,mt,void 0,void 0,null,K)},re.createRef=function(){return{current:null}},re.forwardRef=function(N){return{$$typeof:d,render:N}},re.isValidElement=U,re.lazy=function(N){return{$$typeof:_,_payload:{_status:-1,_result:N},_init:j}},re.memo=function(N,$){return{$$typeof:p,type:N,compare:$===void 0?null:$}},re.startTransition=function(N){var $=I.T,vt={};I.T=vt;try{var xt=N(),K=I.S;K!==null&&K(vt,xt),typeof xt=="object"&&xt!==null&&typeof xt.then=="function"&&xt.then(St,W)}catch(mt){W(mt)}finally{I.T=$}},re.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},re.use=function(N){return I.H.use(N)},re.useActionState=function(N,$,vt){return I.H.useActionState(N,$,vt)},re.useCallback=function(N,$){return I.H.useCallback(N,$)},re.useContext=function(N){return I.H.useContext(N)},re.useDebugValue=function(){},re.useDeferredValue=function(N,$){return I.H.useDeferredValue(N,$)},re.useEffect=function(N,$,vt){var xt=I.H;if(typeof vt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return xt.useEffect(N,$)},re.useId=function(){return I.H.useId()},re.useImperativeHandle=function(N,$,vt){return I.H.useImperativeHandle(N,$,vt)},re.useInsertionEffect=function(N,$){return I.H.useInsertionEffect(N,$)},re.useLayoutEffect=function(N,$){return I.H.useLayoutEffect(N,$)},re.useMemo=function(N,$){return I.H.useMemo(N,$)},re.useOptimistic=function(N,$){return I.H.useOptimistic(N,$)},re.useReducer=function(N,$,vt){return I.H.useReducer(N,$,vt)},re.useRef=function(N){return I.H.useRef(N)},re.useState=function(N){return I.H.useState(N)},re.useSyncExternalStore=function(N,$,vt){return I.H.useSyncExternalStore(N,$,vt)},re.useTransition=function(){return I.H.useTransition()},re.version="19.1.0",re}var Kg;function od(){return Kg||(Kg=1,Bf.exports=Hx()),Bf.exports}var ni=od(),Ff={exports:{}},bo={},Hf={exports:{}},Gf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qg;function Gx(){return Qg||(Qg=1,function(o){function t(F,j){var W=F.length;F.push(j);t:for(;0<W;){var St=W-1>>>1,N=F[St];if(0<l(N,j))F[St]=j,F[W]=N,W=St;else break t}}function i(F){return F.length===0?null:F[0]}function s(F){if(F.length===0)return null;var j=F[0],W=F.pop();if(W!==j){F[0]=W;t:for(var St=0,N=F.length,$=N>>>1;St<$;){var vt=2*(St+1)-1,xt=F[vt],K=vt+1,mt=F[K];if(0>l(xt,W))K<N&&0>l(mt,xt)?(F[St]=mt,F[K]=W,St=K):(F[St]=xt,F[vt]=W,St=vt);else if(K<N&&0>l(mt,W))F[St]=mt,F[K]=W,St=K;else break t}}return j}function l(F,j){var W=F.sortIndex-j.sortIndex;return W!==0?W:F.id-j.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],_=1,v=null,S=3,M=!1,T=!1,w=!1,x=!1,g=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function C(F){for(var j=i(p);j!==null;){if(j.callback===null)s(p);else if(j.startTime<=F)s(p),j.sortIndex=j.expirationTime,t(m,j);else break;j=i(p)}}function I(F){if(w=!1,C(F),!T)if(i(m)!==null)T=!0,z||(z=!0,tt());else{var j=i(p);j!==null&&ut(I,j.startTime-F)}}var z=!1,O=-1,X=5,U=-1;function A(){return x?!0:!(o.unstable_now()-U<X)}function H(){if(x=!1,z){var F=o.unstable_now();U=F;var j=!0;try{t:{T=!1,w&&(w=!1,L(O),O=-1),M=!0;var W=S;try{e:{for(C(F),v=i(m);v!==null&&!(v.expirationTime>F&&A());){var St=v.callback;if(typeof St=="function"){v.callback=null,S=v.priorityLevel;var N=St(v.expirationTime<=F);if(F=o.unstable_now(),typeof N=="function"){v.callback=N,C(F),j=!0;break e}v===i(m)&&s(m),C(F)}else s(m);v=i(m)}if(v!==null)j=!0;else{var $=i(p);$!==null&&ut(I,$.startTime-F),j=!1}}break t}finally{v=null,S=W,M=!1}j=void 0}}finally{j?tt():z=!1}}}var tt;if(typeof D=="function")tt=function(){D(H)};else if(typeof MessageChannel<"u"){var at=new MessageChannel,pt=at.port2;at.port1.onmessage=H,tt=function(){pt.postMessage(null)}}else tt=function(){g(H,0)};function ut(F,j){O=g(function(){F(o.unstable_now())},j)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(F){F.callback=null},o.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<F?Math.floor(1e3/F):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(F){switch(S){case 1:case 2:case 3:var j=3;break;default:j=S}var W=S;S=j;try{return F()}finally{S=W}},o.unstable_requestPaint=function(){x=!0},o.unstable_runWithPriority=function(F,j){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var W=S;S=F;try{return j()}finally{S=W}},o.unstable_scheduleCallback=function(F,j,W){var St=o.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?St+W:St):W=St,F){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=W+N,F={id:_++,callback:j,priorityLevel:F,startTime:W,expirationTime:N,sortIndex:-1},W>St?(F.sortIndex=W,t(p,F),i(m)===null&&F===i(p)&&(w?(L(O),O=-1):w=!0,ut(I,W-St))):(F.sortIndex=N,t(m,F),T||M||(T=!0,z||(z=!0,tt()))),F},o.unstable_shouldYield=A,o.unstable_wrapCallback=function(F){var j=S;return function(){var W=S;S=j;try{return F.apply(this,arguments)}finally{S=W}}}}(Gf)),Gf}var Jg;function Vx(){return Jg||(Jg=1,Hf.exports=Gx()),Hf.exports}var Vf={exports:{}},Cn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $g;function kx(){if($g)return Cn;$g=1;var o=od();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:_}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Cn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Cn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,_)},Cn.flushSync=function(m){var p=h.T,_=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=_,s.d.f()}},Cn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Cn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Cn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,v=d(_,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:S,fetchPriority:M}):_==="script"&&s.d.X(m,{crossOrigin:v,integrity:S,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Cn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Cn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,v=d(_,p.crossOrigin);s.d.L(m,_,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Cn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Cn.requestFormReset=function(m){s.d.r(m)},Cn.unstable_batchedUpdates=function(m,p){return m(p)},Cn.useFormState=function(m,p,_){return h.H.useFormState(m,p,_)},Cn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Cn.version="19.1.0",Cn}var t_;function Xx(){if(t_)return Vf.exports;t_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Vf.exports=kx(),Vf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e_;function Wx(){if(e_)return bo;e_=1;var o=Vx(),t=od(),i=Xx();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(u(e)!==e)throw Error(s(188))}function m(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return d(c),e;if(f===r)return d(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=f;else{for(var y=!1,b=c.child;b;){if(b===a){y=!0,a=c,r=f;break}if(b===r){y=!0,r=c,a=f;break}b=b.sibling}if(!y){for(b=f.child;b;){if(b===a){y=!0,a=f,r=c;break}if(b===r){y=!0,r=f,a=c;break}b=b.sibling}if(!y)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function p(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=p(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),L=Symbol.for("react.consumer"),D=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),A=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function tt(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var at=Symbol.for("react.client.reference");function pt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===at?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case x:return"Profiler";case w:return"StrictMode";case I:return"Suspense";case z:return"SuspenseList";case U:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case D:return(e.displayName||"Context")+".Provider";case L:return(e._context.displayName||"Context")+".Consumer";case C:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case O:return n=e.displayName||null,n!==null?n:pt(e.type)||"Memo";case X:n=e._payload,e=e._init;try{return pt(e(n))}catch{}}return null}var ut=Array.isArray,F=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},St=[],N=-1;function $(e){return{current:e}}function vt(e){0>N||(e.current=St[N],St[N]=null,N--)}function xt(e,n){N++,St[N]=e.current,e.current=n}var K=$(null),mt=$(null),Et=$(null),Rt=$(null);function wt(e,n){switch(xt(Et,n),xt(mt,e),xt(K,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?yg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=yg(n),e=Mg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}vt(K),xt(K,e)}function le(){vt(K),vt(mt),vt(Et)}function Qt(e){e.memoizedState!==null&&xt(Rt,e);var n=K.current,a=Mg(n,e.type);n!==a&&(xt(mt,e),xt(K,a))}function Ne(e){mt.current===e&&(vt(K),vt(mt)),Rt.current===e&&(vt(Rt),xo._currentValue=W)}var He=Object.prototype.hasOwnProperty,ve=o.unstable_scheduleCallback,G=o.unstable_cancelCallback,Sn=o.unstable_shouldYield,Me=o.unstable_requestPaint,pe=o.unstable_now,Vt=o.unstable_getCurrentPriorityLevel,xe=o.unstable_ImmediatePriority,jt=o.unstable_UserBlockingPriority,ae=o.unstable_NormalPriority,Je=o.unstable_LowPriority,P=o.unstable_IdlePriority,E=o.log,et=o.unstable_setDisableYieldValue,ft=null,dt=null;function lt(e){if(typeof E=="function"&&et(e),dt&&typeof dt.setStrictMode=="function")try{dt.setStrictMode(ft,e)}catch{}}var Pt=Math.clz32?Math.clz32:kt,Ut=Math.log,Gt=Math.LN2;function kt(e){return e>>>=0,e===0?32:31-(Ut(e)/Gt|0)|0}var yt=256,It=4194304;function qt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Yt(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var c=0,f=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var b=r&134217727;return b!==0?(r=b&~f,r!==0?c=qt(r):(y&=b,y!==0?c=qt(y):a||(a=b&~e,a!==0&&(c=qt(a))))):(b=r&~f,b!==0?c=qt(b):y!==0?c=qt(y):a||(a=r&~e,a!==0&&(c=qt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Ct(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ie(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function k(){var e=yt;return yt<<=1,(yt&4194048)===0&&(yt=256),e}function Lt(){var e=It;return It<<=1,(It&62914560)===0&&(It=4194304),e}function Tt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function zt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function At(e,n,a,r,c,f){var y=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var b=e.entanglements,B=e.expirationTimes,J=e.hiddenUpdates;for(a=y&~a;0<a;){var ct=31-Pt(a),gt=1<<ct;b[ct]=0,B[ct]=-1;var nt=J[ct];if(nt!==null)for(J[ct]=null,ct=0;ct<nt.length;ct++){var st=nt[ct];st!==null&&(st.lane&=-536870913)}a&=~gt}r!==0&&_t(e,r,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(y&~n))}function _t(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-Pt(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&4194090}function Ft(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-Pt(a),c=1<<r;c&n|e[r]&n&&(e[r]|=n),a&=~c}}function ne(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function De(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ee(){var e=j.p;return e!==0?e:(e=window.event,e===void 0?32:Gg(e.type))}function qn(e,n){var a=j.p;try{return j.p=e,n()}finally{j.p=a}}var dn=Math.random().toString(36).slice(2),rn="__reactFiber$"+dn,yn="__reactProps$"+dn,On="__reactContainer$"+dn,ja="__reactEvents$"+dn,Go="__reactListeners$"+dn,Vo="__reactHandles$"+dn,Za="__reactResources$"+dn,ca="__reactMarker$"+dn;function ua(e){delete e[rn],delete e[yn],delete e[ja],delete e[Go],delete e[Vo]}function Ni(e){var n=e[rn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[On]||a[rn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Ag(e);e!==null;){if(a=e[rn])return a;e=Ag(e)}return n}e=a,a=e.parentNode}return null}function Oi(e){if(e=e[rn]||e[On]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function Ka(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function fa(e){var n=e[Za];return n||(n=e[Za]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function en(e){e[ca]=!0}var ko=new Set,Xo={};function Pi(e,n){R(e,n),R(e+"Capture",n)}function R(e,n){for(Xo[e]=n,e=0;e<n.length;e++)ko.add(n[e])}var Y=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),rt={},ot={};function Z(e){return He.call(ot,e)?!0:He.call(rt,e)?!1:Y.test(e)?ot[e]=!0:(rt[e]=!0,!1)}function bt(e,n,a){if(Z(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Dt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Ot(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+r)}}var Bt,te;function Kt(e){if(Bt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Bt=n&&n[1]||"",te=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Bt+e+te}var Xt=!1;function ce(e,n){if(!e||Xt)return"";Xt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(st){var nt=st}Reflect.construct(e,[],gt)}else{try{gt.call()}catch(st){nt=st}e.call(gt.prototype)}}else{try{throw Error()}catch(st){nt=st}(gt=e())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(st){if(st&&nt&&typeof st.stack=="string")return[st.stack,nt.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),y=f[0],b=f[1];if(y&&b){var B=y.split(`
`),J=b.split(`
`);for(c=r=0;r<B.length&&!B[r].includes("DetermineComponentFrameRoot");)r++;for(;c<J.length&&!J[c].includes("DetermineComponentFrameRoot");)c++;if(r===B.length||c===J.length)for(r=B.length-1,c=J.length-1;1<=r&&0<=c&&B[r]!==J[c];)c--;for(;1<=r&&0<=c;r--,c--)if(B[r]!==J[c]){if(r!==1||c!==1)do if(r--,c--,0>c||B[r]!==J[c]){var ct=`
`+B[r].replace(" at new "," at ");return e.displayName&&ct.includes("<anonymous>")&&(ct=ct.replace("<anonymous>",e.displayName)),ct}while(1<=r&&0<=c);break}}}finally{Xt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Kt(a):""}function Ce(e){switch(e.tag){case 26:case 27:case 5:return Kt(e.type);case 16:return Kt("Lazy");case 13:return Kt("Suspense");case 19:return Kt("SuspenseList");case 0:case 15:return ce(e.type,!1);case 11:return ce(e.type.render,!1);case 1:return ce(e.type,!0);case 31:return Kt("Activity");default:return""}}function We(e){try{var n="";do n+=Ce(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function he(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function we(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Zt(e){var n=we(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(y){r=""+y,f.call(this,y)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return r},setValue:function(y){r=""+y},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Oe(e){e._valueTracker||(e._valueTracker=Zt(e))}function Se(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=we(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}function pn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ha=/[\n"\\]/g;function ke(e){return e.replace(ha,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ii(e,n,a,r,c,f,y,b){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),n!=null?y==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+he(n)):e.value!==""+he(n)&&(e.value=""+he(n)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),n!=null?An(e,y,he(n)):a!=null?An(e,y,he(a)):r!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+he(b):e.removeAttribute("name")}function Ge(e,n,a,r,c,f,y,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+he(a):"",n=n!=null?""+he(n):a,b||n===e.value||(e.value=n),e.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=b?e.checked:!!r,e.defaultChecked=!!r,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y)}function An(e,n,a){n==="number"&&pn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function on(e,n,a,r){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&r&&(e[a].defaultSelected=!0)}else{for(a=""+he(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,r&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function mn(e,n,a){if(n!=null&&(n=""+he(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+he(a):""}function Mn(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(ut(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=he(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r)}function yi(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var zi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function yd(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||zi.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Md(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&yd(e,c,r)}else for(var f in n)n.hasOwnProperty(f)&&yd(e,f,n[f])}function Pc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var I0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),z0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Wo(e){return z0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Ic=null;function zc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Cs=null,ws=null;function Ed(e){var n=Oi(e);if(n&&(e=n.stateNode)){var a=e[yn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Ii(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ke(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var c=r[yn]||null;if(!c)throw Error(s(90));Ii(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&Se(r)}break t;case"textarea":mn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&on(e,!!a.multiple,n,!1)}}}var Bc=!1;function Td(e,n,a){if(Bc)return e(n,a);Bc=!0;try{var r=e(n);return r}finally{if(Bc=!1,(Cs!==null||ws!==null)&&(Dl(),Cs&&(n=Cs,e=ws,ws=Cs=null,Ed(n),e)))for(n=0;n<e.length;n++)Ed(e[n])}}function Ur(e,n){var a=e.stateNode;if(a===null)return null;var r=a[yn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Bi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fc=!1;if(Bi)try{var Lr={};Object.defineProperty(Lr,"passive",{get:function(){Fc=!0}}),window.addEventListener("test",Lr,Lr),window.removeEventListener("test",Lr,Lr)}catch{Fc=!1}var da=null,Hc=null,qo=null;function bd(){if(qo)return qo;var e,n=Hc,a=n.length,r,c="value"in da?da.value:da.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var y=a-e;for(r=1;r<=y&&n[a-r]===c[f-r];r++);return qo=c.slice(e,1<r?1-r:void 0)}function Yo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function jo(){return!0}function Ad(){return!1}function Pn(e){function n(a,r,c,f,y){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=f,this.target=y,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(a=e[b],this[b]=a?a(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?jo:Ad,this.isPropagationStopped=Ad,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=jo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=jo)},persist:function(){},isPersistent:jo}),n}var Qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zo=Pn(Qa),Nr=_({},Qa,{view:0,detail:0}),B0=Pn(Nr),Gc,Vc,Or,Ko=_({},Nr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Or&&(Or&&e.type==="mousemove"?(Gc=e.screenX-Or.screenX,Vc=e.screenY-Or.screenY):Vc=Gc=0,Or=e),Gc)},movementY:function(e){return"movementY"in e?e.movementY:Vc}}),Rd=Pn(Ko),F0=_({},Ko,{dataTransfer:0}),H0=Pn(F0),G0=_({},Nr,{relatedTarget:0}),kc=Pn(G0),V0=_({},Qa,{animationName:0,elapsedTime:0,pseudoElement:0}),k0=Pn(V0),X0=_({},Qa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),W0=Pn(X0),q0=_({},Qa,{data:0}),Cd=Pn(q0),Y0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},j0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Z0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function K0(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Z0[e])?!!n[e]:!1}function Xc(){return K0}var Q0=_({},Nr,{key:function(e){if(e.key){var n=Y0[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Yo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?j0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xc,charCode:function(e){return e.type==="keypress"?Yo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Yo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),J0=Pn(Q0),$0=_({},Ko,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wd=Pn($0),tv=_({},Nr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xc}),ev=Pn(tv),nv=_({},Qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),iv=Pn(nv),av=_({},Ko,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),sv=Pn(av),rv=_({},Qa,{newState:0,oldState:0}),ov=Pn(rv),lv=[9,13,27,32],Wc=Bi&&"CompositionEvent"in window,Pr=null;Bi&&"documentMode"in document&&(Pr=document.documentMode);var cv=Bi&&"TextEvent"in window&&!Pr,Dd=Bi&&(!Wc||Pr&&8<Pr&&11>=Pr),Ud=" ",Ld=!1;function Nd(e,n){switch(e){case"keyup":return lv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Od(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ds=!1;function uv(e,n){switch(e){case"compositionend":return Od(n);case"keypress":return n.which!==32?null:(Ld=!0,Ud);case"textInput":return e=n.data,e===Ud&&Ld?null:e;default:return null}}function fv(e,n){if(Ds)return e==="compositionend"||!Wc&&Nd(e,n)?(e=bd(),qo=Hc=da=null,Ds=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Dd&&n.locale!=="ko"?null:n.data;default:return null}}var hv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pd(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!hv[e.type]:n==="textarea"}function Id(e,n,a,r){Cs?ws?ws.push(r):ws=[r]:Cs=r,n=Il(n,"onChange"),0<n.length&&(a=new Zo("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var Ir=null,zr=null;function dv(e){gg(e,0)}function Qo(e){var n=Ka(e);if(Se(n))return e}function zd(e,n){if(e==="change")return n}var Bd=!1;if(Bi){var qc;if(Bi){var Yc="oninput"in document;if(!Yc){var Fd=document.createElement("div");Fd.setAttribute("oninput","return;"),Yc=typeof Fd.oninput=="function"}qc=Yc}else qc=!1;Bd=qc&&(!document.documentMode||9<document.documentMode)}function Hd(){Ir&&(Ir.detachEvent("onpropertychange",Gd),zr=Ir=null)}function Gd(e){if(e.propertyName==="value"&&Qo(zr)){var n=[];Id(n,zr,e,zc(e)),Td(dv,n)}}function pv(e,n,a){e==="focusin"?(Hd(),Ir=n,zr=a,Ir.attachEvent("onpropertychange",Gd)):e==="focusout"&&Hd()}function mv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Qo(zr)}function gv(e,n){if(e==="click")return Qo(n)}function _v(e,n){if(e==="input"||e==="change")return Qo(n)}function vv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Yn=typeof Object.is=="function"?Object.is:vv;function Br(e,n){if(Yn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!He.call(n,c)||!Yn(e[c],n[c]))return!1}return!0}function Vd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function kd(e,n){var a=Vd(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Vd(a)}}function Xd(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Xd(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Wd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=pn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=pn(e.document)}return n}function jc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var xv=Bi&&"documentMode"in document&&11>=document.documentMode,Us=null,Zc=null,Fr=null,Kc=!1;function qd(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Kc||Us==null||Us!==pn(r)||(r=Us,"selectionStart"in r&&jc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Fr&&Br(Fr,r)||(Fr=r,r=Il(Zc,"onSelect"),0<r.length&&(n=new Zo("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=Us)))}function Ja(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Ls={animationend:Ja("Animation","AnimationEnd"),animationiteration:Ja("Animation","AnimationIteration"),animationstart:Ja("Animation","AnimationStart"),transitionrun:Ja("Transition","TransitionRun"),transitionstart:Ja("Transition","TransitionStart"),transitioncancel:Ja("Transition","TransitionCancel"),transitionend:Ja("Transition","TransitionEnd")},Qc={},Yd={};Bi&&(Yd=document.createElement("div").style,"AnimationEvent"in window||(delete Ls.animationend.animation,delete Ls.animationiteration.animation,delete Ls.animationstart.animation),"TransitionEvent"in window||delete Ls.transitionend.transition);function $a(e){if(Qc[e])return Qc[e];if(!Ls[e])return e;var n=Ls[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Yd)return Qc[e]=n[a];return e}var jd=$a("animationend"),Zd=$a("animationiteration"),Kd=$a("animationstart"),Sv=$a("transitionrun"),yv=$a("transitionstart"),Mv=$a("transitioncancel"),Qd=$a("transitionend"),Jd=new Map,Jc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Jc.push("scrollEnd");function hi(e,n){Jd.set(e,n),Pi(n,[e])}var $d=new WeakMap;function ai(e,n){if(typeof e=="object"&&e!==null){var a=$d.get(e);return a!==void 0?a:(n={value:e,source:n,stack:We(n)},$d.set(e,n),n)}return{value:e,source:n,stack:We(n)}}var si=[],Ns=0,$c=0;function Jo(){for(var e=Ns,n=$c=Ns=0;n<e;){var a=si[n];si[n++]=null;var r=si[n];si[n++]=null;var c=si[n];si[n++]=null;var f=si[n];if(si[n++]=null,r!==null&&c!==null){var y=r.pending;y===null?c.next=c:(c.next=y.next,y.next=c),r.pending=c}f!==0&&tp(a,c,f)}}function $o(e,n,a,r){si[Ns++]=e,si[Ns++]=n,si[Ns++]=a,si[Ns++]=r,$c|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function tu(e,n,a,r){return $o(e,n,a,r),tl(e)}function Os(e,n){return $o(e,null,null,n),tl(e)}function tp(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-Pt(a),e=f.hiddenUpdates,r=e[c],r===null?e[c]=[n]:r.push(n),n.lane=a|536870912),f):null}function tl(e){if(50<uo)throw uo=0,of=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Ps={};function Ev(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(e,n,a,r){return new Ev(e,n,a,r)}function eu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fi(e,n){var a=e.alternate;return a===null?(a=jn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function ep(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function el(e,n,a,r,c,f){var y=0;if(r=e,typeof e=="function")eu(e)&&(y=1);else if(typeof e=="string")y=bx(e,a,K.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case U:return e=jn(31,a,n,c),e.elementType=U,e.lanes=f,e;case T:return ts(a.children,c,f,n);case w:y=8,c|=24;break;case x:return e=jn(12,a,n,c|2),e.elementType=x,e.lanes=f,e;case I:return e=jn(13,a,n,c),e.elementType=I,e.lanes=f,e;case z:return e=jn(19,a,n,c),e.elementType=z,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case g:case D:y=10;break t;case L:y=9;break t;case C:y=11;break t;case O:y=14;break t;case X:y=16,r=null;break t}y=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=jn(y,a,n,c),n.elementType=e,n.type=r,n.lanes=f,n}function ts(e,n,a,r){return e=jn(7,e,r,n),e.lanes=a,e}function nu(e,n,a){return e=jn(6,e,null,n),e.lanes=a,e}function iu(e,n,a){return n=jn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Is=[],zs=0,nl=null,il=0,ri=[],oi=0,es=null,Hi=1,Gi="";function ns(e,n){Is[zs++]=il,Is[zs++]=nl,nl=e,il=n}function np(e,n,a){ri[oi++]=Hi,ri[oi++]=Gi,ri[oi++]=es,es=e;var r=Hi;e=Gi;var c=32-Pt(r)-1;r&=~(1<<c),a+=1;var f=32-Pt(n)+c;if(30<f){var y=c-c%5;f=(r&(1<<y)-1).toString(32),r>>=y,c-=y,Hi=1<<32-Pt(n)+c|a<<c|r,Gi=f+e}else Hi=1<<f|a<<c|r,Gi=e}function au(e){e.return!==null&&(ns(e,1),np(e,1,0))}function su(e){for(;e===nl;)nl=Is[--zs],Is[zs]=null,il=Is[--zs],Is[zs]=null;for(;e===es;)es=ri[--oi],ri[oi]=null,Gi=ri[--oi],ri[oi]=null,Hi=ri[--oi],ri[oi]=null}var Ln=null,je=null,Re=!1,is=null,Mi=!1,ru=Error(s(519));function as(e){var n=Error(s(418,""));throw Vr(ai(n,e)),ru}function ip(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[rn]=e,n[yn]=r,a){case"dialog":ge("cancel",n),ge("close",n);break;case"iframe":case"object":case"embed":ge("load",n);break;case"video":case"audio":for(a=0;a<ho.length;a++)ge(ho[a],n);break;case"source":ge("error",n);break;case"img":case"image":case"link":ge("error",n),ge("load",n);break;case"details":ge("toggle",n);break;case"input":ge("invalid",n),Ge(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),Oe(n);break;case"select":ge("invalid",n);break;case"textarea":ge("invalid",n),Mn(n,r.value,r.defaultValue,r.children),Oe(n)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||Sg(n.textContent,a)?(r.popover!=null&&(ge("beforetoggle",n),ge("toggle",n)),r.onScroll!=null&&ge("scroll",n),r.onScrollEnd!=null&&ge("scrollend",n),r.onClick!=null&&(n.onclick=zl),n=!0):n=!1,n||as(e)}function ap(e){for(Ln=e.return;Ln;)switch(Ln.tag){case 5:case 13:Mi=!1;return;case 27:case 3:Mi=!0;return;default:Ln=Ln.return}}function Hr(e){if(e!==Ln)return!1;if(!Re)return ap(e),Re=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Ef(e.type,e.memoizedProps)),a=!a),a&&je&&as(e),ap(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){je=pi(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}je=null}}else n===27?(n=je,wa(e.type)?(e=Rf,Rf=null,je=e):je=n):je=Ln?pi(e.stateNode.nextSibling):null;return!0}function Gr(){je=Ln=null,Re=!1}function sp(){var e=is;return e!==null&&(Bn===null?Bn=e:Bn.push.apply(Bn,e),is=null),e}function Vr(e){is===null?is=[e]:is.push(e)}var ou=$(null),ss=null,Vi=null;function pa(e,n,a){xt(ou,n._currentValue),n._currentValue=a}function ki(e){e._currentValue=ou.current,vt(ou)}function lu(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function cu(e,n,a,r){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var y=c.child;f=f.firstContext;t:for(;f!==null;){var b=f;f=c;for(var B=0;B<n.length;B++)if(b.context===n[B]){f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),lu(f.return,a,e),r||(y=null);break t}f=b.next}}else if(c.tag===18){if(y=c.return,y===null)throw Error(s(341));y.lanes|=a,f=y.alternate,f!==null&&(f.lanes|=a),lu(y,a,e),y=null}else y=c.child;if(y!==null)y.return=c;else for(y=c;y!==null;){if(y===e){y=null;break}if(c=y.sibling,c!==null){c.return=y.return,y=c;break}y=y.return}c=y}}function kr(e,n,a,r){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var y=c.alternate;if(y===null)throw Error(s(387));if(y=y.memoizedProps,y!==null){var b=c.type;Yn(c.pendingProps.value,y.value)||(e!==null?e.push(b):e=[b])}}else if(c===Rt.current){if(y=c.alternate,y===null)throw Error(s(387));y.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(xo):e=[xo])}c=c.return}e!==null&&cu(n,e,a,r),n.flags|=262144}function al(e){for(e=e.firstContext;e!==null;){if(!Yn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function rs(e){ss=e,Vi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Rn(e){return rp(ss,e)}function sl(e,n){return ss===null&&rs(e),rp(e,n)}function rp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Vi===null){if(e===null)throw Error(s(308));Vi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Vi=Vi.next=n;return a}var Tv=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},bv=o.unstable_scheduleCallback,Av=o.unstable_NormalPriority,ln={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function uu(){return{controller:new Tv,data:new Map,refCount:0}}function Xr(e){e.refCount--,e.refCount===0&&bv(Av,function(){e.controller.abort()})}var Wr=null,fu=0,Bs=0,Fs=null;function Rv(e,n){if(Wr===null){var a=Wr=[];fu=0,Bs=pf(),Fs={status:"pending",value:void 0,then:function(r){a.push(r)}}}return fu++,n.then(op,op),n}function op(){if(--fu===0&&Wr!==null){Fs!==null&&(Fs.status="fulfilled");var e=Wr;Wr=null,Bs=0,Fs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Cv(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var lp=F.S;F.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Rv(e,n),lp!==null&&lp(e,n)};var os=$(null);function hu(){var e=os.current;return e!==null?e:Xe.pooledCache}function rl(e,n){n===null?xt(os,os.current):xt(os,n.pool)}function cp(){var e=hu();return e===null?null:{parent:ln._currentValue,pool:e}}var qr=Error(s(460)),up=Error(s(474)),ol=Error(s(542)),du={then:function(){}};function fp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ll(){}function hp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ll,ll),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,pp(e),e;default:if(typeof n.status=="string")n.then(ll,ll);else{if(e=Xe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,pp(e),e}throw Yr=n,qr}}var Yr=null;function dp(){if(Yr===null)throw Error(s(459));var e=Yr;return Yr=null,e}function pp(e){if(e===qr||e===ol)throw Error(s(483))}var ma=!1;function pu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function mu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ga(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function _a(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Ue&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=tl(e),tp(e,null,a),n}return $o(e,r,n,a),tl(e)}function jr(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Ft(e,a)}}function gu(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=y:f=f.next=y,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var _u=!1;function Zr(){if(_u){var e=Fs;if(e!==null)throw e}}function Kr(e,n,a,r){_u=!1;var c=e.updateQueue;ma=!1;var f=c.firstBaseUpdate,y=c.lastBaseUpdate,b=c.shared.pending;if(b!==null){c.shared.pending=null;var B=b,J=B.next;B.next=null,y===null?f=J:y.next=J,y=B;var ct=e.alternate;ct!==null&&(ct=ct.updateQueue,b=ct.lastBaseUpdate,b!==y&&(b===null?ct.firstBaseUpdate=J:b.next=J,ct.lastBaseUpdate=B))}if(f!==null){var gt=c.baseState;y=0,ct=J=B=null,b=f;do{var nt=b.lane&-536870913,st=nt!==b.lane;if(st?(ye&nt)===nt:(r&nt)===nt){nt!==0&&nt===Bs&&(_u=!0),ct!==null&&(ct=ct.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var ee=e,Jt=b;nt=n;var ze=a;switch(Jt.tag){case 1:if(ee=Jt.payload,typeof ee=="function"){gt=ee.call(ze,gt,nt);break t}gt=ee;break t;case 3:ee.flags=ee.flags&-65537|128;case 0:if(ee=Jt.payload,nt=typeof ee=="function"?ee.call(ze,gt,nt):ee,nt==null)break t;gt=_({},gt,nt);break t;case 2:ma=!0}}nt=b.callback,nt!==null&&(e.flags|=64,st&&(e.flags|=8192),st=c.callbacks,st===null?c.callbacks=[nt]:st.push(nt))}else st={lane:nt,tag:b.tag,payload:b.payload,callback:b.callback,next:null},ct===null?(J=ct=st,B=gt):ct=ct.next=st,y|=nt;if(b=b.next,b===null){if(b=c.shared.pending,b===null)break;st=b,b=st.next,st.next=null,c.lastBaseUpdate=st,c.shared.pending=null}}while(!0);ct===null&&(B=gt),c.baseState=B,c.firstBaseUpdate=J,c.lastBaseUpdate=ct,f===null&&(c.shared.lanes=0),ba|=y,e.lanes=y,e.memoizedState=gt}}function mp(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function gp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)mp(a[e],n)}var Hs=$(null),cl=$(0);function _p(e,n){e=Ki,xt(cl,e),xt(Hs,n),Ki=e|n.baseLanes}function vu(){xt(cl,Ki),xt(Hs,Hs.current)}function xu(){Ki=cl.current,vt(Hs),vt(cl)}var va=0,fe=null,Pe=null,nn=null,ul=!1,Gs=!1,ls=!1,fl=0,Qr=0,Vs=null,wv=0;function $e(){throw Error(s(321))}function Su(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Yn(e[a],n[a]))return!1;return!0}function yu(e,n,a,r,c,f){return va=f,fe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,F.H=e===null||e.memoizedState===null?tm:em,ls=!1,f=a(r,c),ls=!1,Gs&&(f=xp(n,a,r,c)),vp(e),f}function vp(e){F.H=_l;var n=Pe!==null&&Pe.next!==null;if(va=0,nn=Pe=fe=null,ul=!1,Qr=0,Vs=null,n)throw Error(s(300));e===null||gn||(e=e.dependencies,e!==null&&al(e)&&(gn=!0))}function xp(e,n,a,r){fe=e;var c=0;do{if(Gs&&(Vs=null),Qr=0,Gs=!1,25<=c)throw Error(s(301));if(c+=1,nn=Pe=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}F.H=Iv,f=n(a,r)}while(Gs);return f}function Dv(){var e=F.H,n=e.useState()[0];return n=typeof n.then=="function"?Jr(n):n,e=e.useState()[0],(Pe!==null?Pe.memoizedState:null)!==e&&(fe.flags|=1024),n}function Mu(){var e=fl!==0;return fl=0,e}function Eu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Tu(e){if(ul){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}ul=!1}va=0,nn=Pe=fe=null,Gs=!1,Qr=fl=0,Vs=null}function In(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?fe.memoizedState=nn=e:nn=nn.next=e,nn}function an(){if(Pe===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=Pe.next;var n=nn===null?fe.memoizedState:nn.next;if(n!==null)nn=n,Pe=e;else{if(e===null)throw fe.alternate===null?Error(s(467)):Error(s(310));Pe=e,e={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},nn===null?fe.memoizedState=nn=e:nn=nn.next=e}return nn}function bu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Jr(e){var n=Qr;return Qr+=1,Vs===null&&(Vs=[]),e=hp(Vs,e,n),n=fe,(nn===null?n.memoizedState:nn.next)===null&&(n=n.alternate,F.H=n===null||n.memoizedState===null?tm:em),e}function hl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Jr(e);if(e.$$typeof===D)return Rn(e)}throw Error(s(438,String(e)))}function Au(e){var n=null,a=fe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=fe.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=bu(),fe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=A;return n.index++,a}function Xi(e,n){return typeof n=="function"?n(e):n}function dl(e){var n=an();return Ru(n,Pe,e)}function Ru(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=e.baseQueue,f=r.pending;if(f!==null){if(c!==null){var y=c.next;c.next=f.next,f.next=y}n.baseQueue=c=f,r.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var b=y=null,B=null,J=n,ct=!1;do{var gt=J.lane&-536870913;if(gt!==J.lane?(ye&gt)===gt:(va&gt)===gt){var nt=J.revertLane;if(nt===0)B!==null&&(B=B.next={lane:0,revertLane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),gt===Bs&&(ct=!0);else if((va&nt)===nt){J=J.next,nt===Bs&&(ct=!0);continue}else gt={lane:0,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},B===null?(b=B=gt,y=f):B=B.next=gt,fe.lanes|=nt,ba|=nt;gt=J.action,ls&&a(f,gt),f=J.hasEagerState?J.eagerState:a(f,gt)}else nt={lane:gt,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},B===null?(b=B=nt,y=f):B=B.next=nt,fe.lanes|=gt,ba|=gt;J=J.next}while(J!==null&&J!==n);if(B===null?y=f:B.next=b,!Yn(f,e.memoizedState)&&(gn=!0,ct&&(a=Fs,a!==null)))throw a;e.memoizedState=f,e.baseState=y,e.baseQueue=B,r.lastRenderedState=f}return c===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Cu(e){var n=an(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var y=c=c.next;do f=e(f,y.action),y=y.next;while(y!==c);Yn(f,n.memoizedState)||(gn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function Sp(e,n,a){var r=fe,c=an(),f=Re;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var y=!Yn((Pe||c).memoizedState,a);y&&(c.memoizedState=a,gn=!0),c=c.queue;var b=Ep.bind(null,r,c,e);if($r(2048,8,b,[e]),c.getSnapshot!==n||y||nn!==null&&nn.memoizedState.tag&1){if(r.flags|=2048,ks(9,pl(),Mp.bind(null,r,c,a,n),null),Xe===null)throw Error(s(349));f||(va&124)!==0||yp(r,n,a)}return a}function yp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=fe.updateQueue,n===null?(n=bu(),fe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Mp(e,n,a,r){n.value=a,n.getSnapshot=r,Tp(n)&&bp(e)}function Ep(e,n,a){return a(function(){Tp(n)&&bp(e)})}function Tp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Yn(e,a)}catch{return!0}}function bp(e){var n=Os(e,2);n!==null&&$n(n,e,2)}function wu(e){var n=In();if(typeof e=="function"){var a=e;if(e=a(),ls){lt(!0);try{a()}finally{lt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:e},n}function Ap(e,n,a,r){return e.baseState=a,Ru(e,Pe,typeof r=="function"?r:Xi)}function Uv(e,n,a,r,c){if(gl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){f.listeners.push(y)}};F.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,Rp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Rp(e,n){var a=n.action,r=n.payload,c=e.state;if(n.isTransition){var f=F.T,y={};F.T=y;try{var b=a(c,r),B=F.S;B!==null&&B(y,b),Cp(e,n,b)}catch(J){Du(e,n,J)}finally{F.T=f}}else try{f=a(c,r),Cp(e,n,f)}catch(J){Du(e,n,J)}}function Cp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){wp(e,n,r)},function(r){return Du(e,n,r)}):wp(e,n,a)}function wp(e,n,a){n.status="fulfilled",n.value=a,Dp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Rp(e,a)))}function Du(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,Dp(n),n=n.next;while(n!==r)}e.action=null}function Dp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Up(e,n){return n}function Lp(e,n){if(Re){var a=Xe.formState;if(a!==null){t:{var r=fe;if(Re){if(je){e:{for(var c=je,f=Mi;c.nodeType!==8;){if(!f){c=null;break e}if(c=pi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){je=pi(c.nextSibling),r=c.data==="F!";break t}}as(r)}r=!1}r&&(n=a[0])}}return a=In(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Up,lastRenderedState:n},a.queue=r,a=Qp.bind(null,fe,r),r.dispatch=a,r=wu(!1),f=Pu.bind(null,fe,!1,r.queue),r=In(),c={state:n,dispatch:null,action:e,pending:null},r.queue=c,a=Uv.bind(null,fe,c,f,a),c.dispatch=a,r.memoizedState=e,[n,a,!1]}function Np(e){var n=an();return Op(n,Pe,e)}function Op(e,n,a){if(n=Ru(e,n,Up)[0],e=dl(Xi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=Jr(n)}catch(y){throw y===qr?ol:y}else r=n;n=an();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(fe.flags|=2048,ks(9,pl(),Lv.bind(null,c,a),null)),[r,f,e]}function Lv(e,n){e.action=n}function Pp(e){var n=an(),a=Pe;if(a!==null)return Op(n,a,e);an(),n=n.memoizedState,a=an();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function ks(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=fe.updateQueue,n===null&&(n=bu(),fe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function pl(){return{destroy:void 0,resource:void 0}}function Ip(){return an().memoizedState}function ml(e,n,a,r){var c=In();r=r===void 0?null:r,fe.flags|=e,c.memoizedState=ks(1|n,pl(),a,r)}function $r(e,n,a,r){var c=an();r=r===void 0?null:r;var f=c.memoizedState.inst;Pe!==null&&r!==null&&Su(r,Pe.memoizedState.deps)?c.memoizedState=ks(n,f,a,r):(fe.flags|=e,c.memoizedState=ks(1|n,f,a,r))}function zp(e,n){ml(8390656,8,e,n)}function Bp(e,n){$r(2048,8,e,n)}function Fp(e,n){return $r(4,2,e,n)}function Hp(e,n){return $r(4,4,e,n)}function Gp(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Vp(e,n,a){a=a!=null?a.concat([e]):null,$r(4,4,Gp.bind(null,n,e),a)}function Uu(){}function kp(e,n){var a=an();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Su(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function Xp(e,n){var a=an();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Su(n,r[1]))return r[0];if(r=e(),ls){lt(!0);try{e()}finally{lt(!1)}}return a.memoizedState=[r,n],r}function Lu(e,n,a){return a===void 0||(va&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=Ym(),fe.lanes|=e,ba|=e,a)}function Wp(e,n,a,r){return Yn(a,n)?a:Hs.current!==null?(e=Lu(e,a,r),Yn(e,n)||(gn=!0),e):(va&42)===0?(gn=!0,e.memoizedState=a):(e=Ym(),fe.lanes|=e,ba|=e,n)}function qp(e,n,a,r,c){var f=j.p;j.p=f!==0&&8>f?f:8;var y=F.T,b={};F.T=b,Pu(e,!1,n,a);try{var B=c(),J=F.S;if(J!==null&&J(b,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var ct=Cv(B,r);to(e,n,ct,Jn(e))}else to(e,n,r,Jn(e))}catch(gt){to(e,n,{then:function(){},status:"rejected",reason:gt},Jn())}finally{j.p=f,F.T=y}}function Nv(){}function Nu(e,n,a,r){if(e.tag!==5)throw Error(s(476));var c=Yp(e).queue;qp(e,c,n,W,a===null?Nv:function(){return jp(e),a(r)})}function Yp(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:W},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function jp(e){var n=Yp(e).next.queue;to(e,n,{},Jn())}function Ou(){return Rn(xo)}function Zp(){return an().memoizedState}function Kp(){return an().memoizedState}function Ov(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Jn();e=ga(a);var r=_a(n,e,a);r!==null&&($n(r,n,a),jr(r,n,a)),n={cache:uu()},e.payload=n;return}n=n.return}}function Pv(e,n,a){var r=Jn();a={lane:r,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},gl(e)?Jp(n,a):(a=tu(e,n,a,r),a!==null&&($n(a,e,r),$p(a,n,r)))}function Qp(e,n,a){var r=Jn();to(e,n,a,r)}function to(e,n,a,r){var c={lane:r,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(gl(e))Jp(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var y=n.lastRenderedState,b=f(y,a);if(c.hasEagerState=!0,c.eagerState=b,Yn(b,y))return $o(e,n,c,0),Xe===null&&Jo(),!1}catch{}finally{}if(a=tu(e,n,c,r),a!==null)return $n(a,e,r),$p(a,n,r),!0}return!1}function Pu(e,n,a,r){if(r={lane:2,revertLane:pf(),action:r,hasEagerState:!1,eagerState:null,next:null},gl(e)){if(n)throw Error(s(479))}else n=tu(e,a,r,2),n!==null&&$n(n,e,2)}function gl(e){var n=e.alternate;return e===fe||n!==null&&n===fe}function Jp(e,n){Gs=ul=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function $p(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Ft(e,a)}}var _l={readContext:Rn,use:hl,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useLayoutEffect:$e,useInsertionEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useSyncExternalStore:$e,useId:$e,useHostTransitionStatus:$e,useFormState:$e,useActionState:$e,useOptimistic:$e,useMemoCache:$e,useCacheRefresh:$e},tm={readContext:Rn,use:hl,useCallback:function(e,n){return In().memoizedState=[e,n===void 0?null:n],e},useContext:Rn,useEffect:zp,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,ml(4194308,4,Gp.bind(null,n,e),a)},useLayoutEffect:function(e,n){return ml(4194308,4,e,n)},useInsertionEffect:function(e,n){ml(4,2,e,n)},useMemo:function(e,n){var a=In();n=n===void 0?null:n;var r=e();if(ls){lt(!0);try{e()}finally{lt(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=In();if(a!==void 0){var c=a(n);if(ls){lt(!0);try{a(n)}finally{lt(!1)}}}else c=n;return r.memoizedState=r.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},r.queue=e,e=e.dispatch=Pv.bind(null,fe,e),[r.memoizedState,e]},useRef:function(e){var n=In();return e={current:e},n.memoizedState=e},useState:function(e){e=wu(e);var n=e.queue,a=Qp.bind(null,fe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Uu,useDeferredValue:function(e,n){var a=In();return Lu(a,e,n)},useTransition:function(){var e=wu(!1);return e=qp.bind(null,fe,e.queue,!0,!1),In().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=fe,c=In();if(Re){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Xe===null)throw Error(s(349));(ye&124)!==0||yp(r,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,zp(Ep.bind(null,r,f,e),[e]),r.flags|=2048,ks(9,pl(),Mp.bind(null,r,f,a,n),null),a},useId:function(){var e=In(),n=Xe.identifierPrefix;if(Re){var a=Gi,r=Hi;a=(r&~(1<<32-Pt(r)-1)).toString(32)+a,n="«"+n+"R"+a,a=fl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=wv++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:Ou,useFormState:Lp,useActionState:Lp,useOptimistic:function(e){var n=In();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Pu.bind(null,fe,!0,a),a.dispatch=n,[e,n]},useMemoCache:Au,useCacheRefresh:function(){return In().memoizedState=Ov.bind(null,fe)}},em={readContext:Rn,use:hl,useCallback:kp,useContext:Rn,useEffect:Bp,useImperativeHandle:Vp,useInsertionEffect:Fp,useLayoutEffect:Hp,useMemo:Xp,useReducer:dl,useRef:Ip,useState:function(){return dl(Xi)},useDebugValue:Uu,useDeferredValue:function(e,n){var a=an();return Wp(a,Pe.memoizedState,e,n)},useTransition:function(){var e=dl(Xi)[0],n=an().memoizedState;return[typeof e=="boolean"?e:Jr(e),n]},useSyncExternalStore:Sp,useId:Zp,useHostTransitionStatus:Ou,useFormState:Np,useActionState:Np,useOptimistic:function(e,n){var a=an();return Ap(a,Pe,e,n)},useMemoCache:Au,useCacheRefresh:Kp},Iv={readContext:Rn,use:hl,useCallback:kp,useContext:Rn,useEffect:Bp,useImperativeHandle:Vp,useInsertionEffect:Fp,useLayoutEffect:Hp,useMemo:Xp,useReducer:Cu,useRef:Ip,useState:function(){return Cu(Xi)},useDebugValue:Uu,useDeferredValue:function(e,n){var a=an();return Pe===null?Lu(a,e,n):Wp(a,Pe.memoizedState,e,n)},useTransition:function(){var e=Cu(Xi)[0],n=an().memoizedState;return[typeof e=="boolean"?e:Jr(e),n]},useSyncExternalStore:Sp,useId:Zp,useHostTransitionStatus:Ou,useFormState:Pp,useActionState:Pp,useOptimistic:function(e,n){var a=an();return Pe!==null?Ap(a,Pe,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Au,useCacheRefresh:Kp},Xs=null,eo=0;function vl(e){var n=eo;return eo+=1,Xs===null&&(Xs=[]),hp(Xs,e,n)}function no(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function xl(e,n){throw n.$$typeof===v?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function nm(e){var n=e._init;return n(e._payload)}function im(e){function n(q,V){if(e){var Q=q.deletions;Q===null?(q.deletions=[V],q.flags|=16):Q.push(V)}}function a(q,V){if(!e)return null;for(;V!==null;)n(q,V),V=V.sibling;return null}function r(q){for(var V=new Map;q!==null;)q.key!==null?V.set(q.key,q):V.set(q.index,q),q=q.sibling;return V}function c(q,V){return q=Fi(q,V),q.index=0,q.sibling=null,q}function f(q,V,Q){return q.index=Q,e?(Q=q.alternate,Q!==null?(Q=Q.index,Q<V?(q.flags|=67108866,V):Q):(q.flags|=67108866,V)):(q.flags|=1048576,V)}function y(q){return e&&q.alternate===null&&(q.flags|=67108866),q}function b(q,V,Q,ht){return V===null||V.tag!==6?(V=nu(Q,q.mode,ht),V.return=q,V):(V=c(V,Q),V.return=q,V)}function B(q,V,Q,ht){var Ht=Q.type;return Ht===T?ct(q,V,Q.props.children,ht,Q.key):V!==null&&(V.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===X&&nm(Ht)===V.type)?(V=c(V,Q.props),no(V,Q),V.return=q,V):(V=el(Q.type,Q.key,Q.props,null,q.mode,ht),no(V,Q),V.return=q,V)}function J(q,V,Q,ht){return V===null||V.tag!==4||V.stateNode.containerInfo!==Q.containerInfo||V.stateNode.implementation!==Q.implementation?(V=iu(Q,q.mode,ht),V.return=q,V):(V=c(V,Q.children||[]),V.return=q,V)}function ct(q,V,Q,ht,Ht){return V===null||V.tag!==7?(V=ts(Q,q.mode,ht,Ht),V.return=q,V):(V=c(V,Q),V.return=q,V)}function gt(q,V,Q){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=nu(""+V,q.mode,Q),V.return=q,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case S:return Q=el(V.type,V.key,V.props,null,q.mode,Q),no(Q,V),Q.return=q,Q;case M:return V=iu(V,q.mode,Q),V.return=q,V;case X:var ht=V._init;return V=ht(V._payload),gt(q,V,Q)}if(ut(V)||tt(V))return V=ts(V,q.mode,Q,null),V.return=q,V;if(typeof V.then=="function")return gt(q,vl(V),Q);if(V.$$typeof===D)return gt(q,sl(q,V),Q);xl(q,V)}return null}function nt(q,V,Q,ht){var Ht=V!==null?V.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Ht!==null?null:b(q,V,""+Q,ht);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case S:return Q.key===Ht?B(q,V,Q,ht):null;case M:return Q.key===Ht?J(q,V,Q,ht):null;case X:return Ht=Q._init,Q=Ht(Q._payload),nt(q,V,Q,ht)}if(ut(Q)||tt(Q))return Ht!==null?null:ct(q,V,Q,ht,null);if(typeof Q.then=="function")return nt(q,V,vl(Q),ht);if(Q.$$typeof===D)return nt(q,V,sl(q,Q),ht);xl(q,Q)}return null}function st(q,V,Q,ht,Ht){if(typeof ht=="string"&&ht!==""||typeof ht=="number"||typeof ht=="bigint")return q=q.get(Q)||null,b(V,q,""+ht,Ht);if(typeof ht=="object"&&ht!==null){switch(ht.$$typeof){case S:return q=q.get(ht.key===null?Q:ht.key)||null,B(V,q,ht,Ht);case M:return q=q.get(ht.key===null?Q:ht.key)||null,J(V,q,ht,Ht);case X:var de=ht._init;return ht=de(ht._payload),st(q,V,Q,ht,Ht)}if(ut(ht)||tt(ht))return q=q.get(Q)||null,ct(V,q,ht,Ht,null);if(typeof ht.then=="function")return st(q,V,Q,vl(ht),Ht);if(ht.$$typeof===D)return st(q,V,Q,sl(V,ht),Ht);xl(V,ht)}return null}function ee(q,V,Q,ht){for(var Ht=null,de=null,Wt=V,$t=V=0,vn=null;Wt!==null&&$t<Q.length;$t++){Wt.index>$t?(vn=Wt,Wt=null):vn=Wt.sibling;var Te=nt(q,Wt,Q[$t],ht);if(Te===null){Wt===null&&(Wt=vn);break}e&&Wt&&Te.alternate===null&&n(q,Wt),V=f(Te,V,$t),de===null?Ht=Te:de.sibling=Te,de=Te,Wt=vn}if($t===Q.length)return a(q,Wt),Re&&ns(q,$t),Ht;if(Wt===null){for(;$t<Q.length;$t++)Wt=gt(q,Q[$t],ht),Wt!==null&&(V=f(Wt,V,$t),de===null?Ht=Wt:de.sibling=Wt,de=Wt);return Re&&ns(q,$t),Ht}for(Wt=r(Wt);$t<Q.length;$t++)vn=st(Wt,q,$t,Q[$t],ht),vn!==null&&(e&&vn.alternate!==null&&Wt.delete(vn.key===null?$t:vn.key),V=f(vn,V,$t),de===null?Ht=vn:de.sibling=vn,de=vn);return e&&Wt.forEach(function(Oa){return n(q,Oa)}),Re&&ns(q,$t),Ht}function Jt(q,V,Q,ht){if(Q==null)throw Error(s(151));for(var Ht=null,de=null,Wt=V,$t=V=0,vn=null,Te=Q.next();Wt!==null&&!Te.done;$t++,Te=Q.next()){Wt.index>$t?(vn=Wt,Wt=null):vn=Wt.sibling;var Oa=nt(q,Wt,Te.value,ht);if(Oa===null){Wt===null&&(Wt=vn);break}e&&Wt&&Oa.alternate===null&&n(q,Wt),V=f(Oa,V,$t),de===null?Ht=Oa:de.sibling=Oa,de=Oa,Wt=vn}if(Te.done)return a(q,Wt),Re&&ns(q,$t),Ht;if(Wt===null){for(;!Te.done;$t++,Te=Q.next())Te=gt(q,Te.value,ht),Te!==null&&(V=f(Te,V,$t),de===null?Ht=Te:de.sibling=Te,de=Te);return Re&&ns(q,$t),Ht}for(Wt=r(Wt);!Te.done;$t++,Te=Q.next())Te=st(Wt,q,$t,Te.value,ht),Te!==null&&(e&&Te.alternate!==null&&Wt.delete(Te.key===null?$t:Te.key),V=f(Te,V,$t),de===null?Ht=Te:de.sibling=Te,de=Te);return e&&Wt.forEach(function(zx){return n(q,zx)}),Re&&ns(q,$t),Ht}function ze(q,V,Q,ht){if(typeof Q=="object"&&Q!==null&&Q.type===T&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case S:t:{for(var Ht=Q.key;V!==null;){if(V.key===Ht){if(Ht=Q.type,Ht===T){if(V.tag===7){a(q,V.sibling),ht=c(V,Q.props.children),ht.return=q,q=ht;break t}}else if(V.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===X&&nm(Ht)===V.type){a(q,V.sibling),ht=c(V,Q.props),no(ht,Q),ht.return=q,q=ht;break t}a(q,V);break}else n(q,V);V=V.sibling}Q.type===T?(ht=ts(Q.props.children,q.mode,ht,Q.key),ht.return=q,q=ht):(ht=el(Q.type,Q.key,Q.props,null,q.mode,ht),no(ht,Q),ht.return=q,q=ht)}return y(q);case M:t:{for(Ht=Q.key;V!==null;){if(V.key===Ht)if(V.tag===4&&V.stateNode.containerInfo===Q.containerInfo&&V.stateNode.implementation===Q.implementation){a(q,V.sibling),ht=c(V,Q.children||[]),ht.return=q,q=ht;break t}else{a(q,V);break}else n(q,V);V=V.sibling}ht=iu(Q,q.mode,ht),ht.return=q,q=ht}return y(q);case X:return Ht=Q._init,Q=Ht(Q._payload),ze(q,V,Q,ht)}if(ut(Q))return ee(q,V,Q,ht);if(tt(Q)){if(Ht=tt(Q),typeof Ht!="function")throw Error(s(150));return Q=Ht.call(Q),Jt(q,V,Q,ht)}if(typeof Q.then=="function")return ze(q,V,vl(Q),ht);if(Q.$$typeof===D)return ze(q,V,sl(q,Q),ht);xl(q,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,V!==null&&V.tag===6?(a(q,V.sibling),ht=c(V,Q),ht.return=q,q=ht):(a(q,V),ht=nu(Q,q.mode,ht),ht.return=q,q=ht),y(q)):a(q,V)}return function(q,V,Q,ht){try{eo=0;var Ht=ze(q,V,Q,ht);return Xs=null,Ht}catch(Wt){if(Wt===qr||Wt===ol)throw Wt;var de=jn(29,Wt,null,q.mode);return de.lanes=ht,de.return=q,de}finally{}}}var Ws=im(!0),am=im(!1),li=$(null),Ei=null;function xa(e){var n=e.alternate;xt(cn,cn.current&1),xt(li,e),Ei===null&&(n===null||Hs.current!==null||n.memoizedState!==null)&&(Ei=e)}function sm(e){if(e.tag===22){if(xt(cn,cn.current),xt(li,e),Ei===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Ei=e)}}else Sa()}function Sa(){xt(cn,cn.current),xt(li,li.current)}function Wi(e){vt(li),Ei===e&&(Ei=null),vt(cn)}var cn=$(0);function Sl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Af(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Iu(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var zu={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=Jn(),c=ga(r);c.payload=n,a!=null&&(c.callback=a),n=_a(e,c,r),n!==null&&($n(n,e,r),jr(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=Jn(),c=ga(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=_a(e,c,r),n!==null&&($n(n,e,r),jr(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Jn(),r=ga(a);r.tag=2,n!=null&&(r.callback=n),n=_a(e,r,a),n!==null&&($n(n,e,a),jr(n,e,a))}};function rm(e,n,a,r,c,f,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,y):n.prototype&&n.prototype.isPureReactComponent?!Br(a,r)||!Br(c,f):!0}function om(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&zu.enqueueReplaceState(n,n.state,null)}function cs(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}var yl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function lm(e){yl(e)}function cm(e){console.error(e)}function um(e){yl(e)}function Ml(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function fm(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Bu(e,n,a){return a=ga(a),a.tag=3,a.payload={element:null},a.callback=function(){Ml(e,n)},a}function hm(e){return e=ga(e),e.tag=3,e}function dm(e,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;e.payload=function(){return c(f)},e.callback=function(){fm(n,a,r)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){fm(n,a,r),typeof c!="function"&&(Aa===null?Aa=new Set([this]):Aa.add(this));var b=r.stack;this.componentDidCatch(r.value,{componentStack:b!==null?b:""})})}function zv(e,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&kr(n,a,c,!0),a=li.current,a!==null){switch(a.tag){case 13:return Ei===null?cf():a.alternate===null&&Ze===0&&(Ze=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===du?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),ff(e,r,c)),!1;case 22:return a.flags|=65536,r===du?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),ff(e,r,c)),!1}throw Error(s(435,a.tag))}return ff(e,r,c),cf(),!1}if(Re)return n=li.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==ru&&(e=Error(s(422),{cause:r}),Vr(ai(e,a)))):(r!==ru&&(n=Error(s(423),{cause:r}),Vr(ai(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,r=ai(r,a),c=Bu(e.stateNode,r,c),gu(e,c),Ze!==4&&(Ze=2)),!1;var f=Error(s(520),{cause:r});if(f=ai(f,a),co===null?co=[f]:co.push(f),Ze!==4&&(Ze=2),n===null)return!0;r=ai(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=Bu(a.stateNode,r,e),gu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Aa===null||!Aa.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=hm(c),dm(c,e,a,r),gu(a,c),!1}a=a.return}while(a!==null);return!1}var pm=Error(s(461)),gn=!1;function En(e,n,a,r){n.child=e===null?am(n,null,a,r):Ws(n,e.child,a,r)}function mm(e,n,a,r,c){a=a.render;var f=n.ref;if("ref"in r){var y={};for(var b in r)b!=="ref"&&(y[b]=r[b])}else y=r;return rs(n),r=yu(e,n,a,y,f,c),b=Mu(),e!==null&&!gn?(Eu(e,n,c),qi(e,n,c)):(Re&&b&&au(n),n.flags|=1,En(e,n,r,c),n.child)}function gm(e,n,a,r,c){if(e===null){var f=a.type;return typeof f=="function"&&!eu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,_m(e,n,f,r,c)):(e=el(a.type,null,r,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!qu(e,c)){var y=f.memoizedProps;if(a=a.compare,a=a!==null?a:Br,a(y,r)&&e.ref===n.ref)return qi(e,n,c)}return n.flags|=1,e=Fi(f,r),e.ref=n.ref,e.return=n,n.child=e}function _m(e,n,a,r,c){if(e!==null){var f=e.memoizedProps;if(Br(f,r)&&e.ref===n.ref)if(gn=!1,n.pendingProps=r=f,qu(e,c))(e.flags&131072)!==0&&(gn=!0);else return n.lanes=e.lanes,qi(e,n,c)}return Fu(e,n,a,r,c)}function vm(e,n,a){var r=n.pendingProps,c=r.children,f=e!==null?e.memoizedState:null;if(r.mode==="hidden"){if((n.flags&128)!==0){if(r=f!==null?f.baseLanes|a:a,e!==null){for(c=n.child=e.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~r}else n.childLanes=0,n.child=null;return xm(e,n,r,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&rl(n,f!==null?f.cachePool:null),f!==null?_p(n,f):vu(),sm(n);else return n.lanes=n.childLanes=536870912,xm(e,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(rl(n,f.cachePool),_p(n,f),Sa(),n.memoizedState=null):(e!==null&&rl(n,null),vu(),Sa());return En(e,n,c,a),n.child}function xm(e,n,a,r){var c=hu();return c=c===null?null:{parent:ln._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},e!==null&&rl(n,null),vu(),sm(n),e!==null&&kr(e,n,r,!0),null}function El(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Fu(e,n,a,r,c){return rs(n),a=yu(e,n,a,r,void 0,c),r=Mu(),e!==null&&!gn?(Eu(e,n,c),qi(e,n,c)):(Re&&r&&au(n),n.flags|=1,En(e,n,a,c),n.child)}function Sm(e,n,a,r,c,f){return rs(n),n.updateQueue=null,a=xp(n,r,a,c),vp(e),r=Mu(),e!==null&&!gn?(Eu(e,n,f),qi(e,n,f)):(Re&&r&&au(n),n.flags|=1,En(e,n,a,f),n.child)}function ym(e,n,a,r,c){if(rs(n),n.stateNode===null){var f=Ps,y=a.contextType;typeof y=="object"&&y!==null&&(f=Rn(y)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=zu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},pu(n),y=a.contextType,f.context=typeof y=="object"&&y!==null?Rn(y):Ps,f.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(Iu(n,a,y,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(y=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),y!==f.state&&zu.enqueueReplaceState(f,f.state,null),Kr(n,r,f,c),Zr(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){f=n.stateNode;var b=n.memoizedProps,B=cs(a,b);f.props=B;var J=f.context,ct=a.contextType;y=Ps,typeof ct=="object"&&ct!==null&&(y=Rn(ct));var gt=a.getDerivedStateFromProps;ct=typeof gt=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,ct||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||J!==y)&&om(n,f,r,y),ma=!1;var nt=n.memoizedState;f.state=nt,Kr(n,r,f,c),Zr(),J=n.memoizedState,b||nt!==J||ma?(typeof gt=="function"&&(Iu(n,a,gt,r),J=n.memoizedState),(B=ma||rm(n,a,B,r,nt,J,y))?(ct||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=J),f.props=r,f.state=J,f.context=y,r=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,mu(e,n),y=n.memoizedProps,ct=cs(a,y),f.props=ct,gt=n.pendingProps,nt=f.context,J=a.contextType,B=Ps,typeof J=="object"&&J!==null&&(B=Rn(J)),b=a.getDerivedStateFromProps,(J=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(y!==gt||nt!==B)&&om(n,f,r,B),ma=!1,nt=n.memoizedState,f.state=nt,Kr(n,r,f,c),Zr();var st=n.memoizedState;y!==gt||nt!==st||ma||e!==null&&e.dependencies!==null&&al(e.dependencies)?(typeof b=="function"&&(Iu(n,a,b,r),st=n.memoizedState),(ct=ma||rm(n,a,ct,r,nt,st,B)||e!==null&&e.dependencies!==null&&al(e.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,st,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,st,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&nt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&nt===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=st),f.props=r,f.state=st,f.context=B,r=ct):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&nt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&nt===e.memoizedState||(n.flags|=1024),r=!1)}return f=r,El(e,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&r?(n.child=Ws(n,e.child,null,c),n.child=Ws(n,null,a,c)):En(e,n,a,c),n.memoizedState=f.state,e=n.child):e=qi(e,n,c),e}function Mm(e,n,a,r){return Gr(),n.flags|=256,En(e,n,a,r),n.child}var Hu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Gu(e){return{baseLanes:e,cachePool:cp()}}function Vu(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ci),e}function Em(e,n,a){var r=n.pendingProps,c=!1,f=(n.flags&128)!==0,y;if((y=f)||(y=e!==null&&e.memoizedState===null?!1:(cn.current&2)!==0),y&&(c=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,e===null){if(Re){if(c?xa(n):Sa(),Re){var b=je,B;if(B=b){t:{for(B=b,b=Mi;B.nodeType!==8;){if(!b){b=null;break t}if(B=pi(B.nextSibling),B===null){b=null;break t}}b=B}b!==null?(n.memoizedState={dehydrated:b,treeContext:es!==null?{id:Hi,overflow:Gi}:null,retryLane:536870912,hydrationErrors:null},B=jn(18,null,null,0),B.stateNode=b,B.return=n,n.child=B,Ln=n,je=null,B=!0):B=!1}B||as(n)}if(b=n.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return Af(b)?n.lanes=32:n.lanes=536870912,null;Wi(n)}return b=r.children,r=r.fallback,c?(Sa(),c=n.mode,b=Tl({mode:"hidden",children:b},c),r=ts(r,c,a,null),b.return=n,r.return=n,b.sibling=r,n.child=b,c=n.child,c.memoizedState=Gu(a),c.childLanes=Vu(e,y,a),n.memoizedState=Hu,r):(xa(n),ku(n,b))}if(B=e.memoizedState,B!==null&&(b=B.dehydrated,b!==null)){if(f)n.flags&256?(xa(n),n.flags&=-257,n=Xu(e,n,a)):n.memoizedState!==null?(Sa(),n.child=e.child,n.flags|=128,n=null):(Sa(),c=r.fallback,b=n.mode,r=Tl({mode:"visible",children:r.children},b),c=ts(c,b,a,null),c.flags|=2,r.return=n,c.return=n,r.sibling=c,n.child=r,Ws(n,e.child,null,a),r=n.child,r.memoizedState=Gu(a),r.childLanes=Vu(e,y,a),n.memoizedState=Hu,n=c);else if(xa(n),Af(b)){if(y=b.nextSibling&&b.nextSibling.dataset,y)var J=y.dgst;y=J,r=Error(s(419)),r.stack="",r.digest=y,Vr({value:r,source:null,stack:null}),n=Xu(e,n,a)}else if(gn||kr(e,n,a,!1),y=(a&e.childLanes)!==0,gn||y){if(y=Xe,y!==null&&(r=a&-a,r=(r&42)!==0?1:ne(r),r=(r&(y.suspendedLanes|a))!==0?0:r,r!==0&&r!==B.retryLane))throw B.retryLane=r,Os(e,r),$n(y,e,r),pm;b.data==="$?"||cf(),n=Xu(e,n,a)}else b.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=B.treeContext,je=pi(b.nextSibling),Ln=n,Re=!0,is=null,Mi=!1,e!==null&&(ri[oi++]=Hi,ri[oi++]=Gi,ri[oi++]=es,Hi=e.id,Gi=e.overflow,es=n),n=ku(n,r.children),n.flags|=4096);return n}return c?(Sa(),c=r.fallback,b=n.mode,B=e.child,J=B.sibling,r=Fi(B,{mode:"hidden",children:r.children}),r.subtreeFlags=B.subtreeFlags&65011712,J!==null?c=Fi(J,c):(c=ts(c,b,a,null),c.flags|=2),c.return=n,r.return=n,r.sibling=c,n.child=r,r=c,c=n.child,b=e.child.memoizedState,b===null?b=Gu(a):(B=b.cachePool,B!==null?(J=ln._currentValue,B=B.parent!==J?{parent:J,pool:J}:B):B=cp(),b={baseLanes:b.baseLanes|a,cachePool:B}),c.memoizedState=b,c.childLanes=Vu(e,y,a),n.memoizedState=Hu,r):(xa(n),a=e.child,e=a.sibling,a=Fi(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(y=n.deletions,y===null?(n.deletions=[e],n.flags|=16):y.push(e)),n.child=a,n.memoizedState=null,a)}function ku(e,n){return n=Tl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Tl(e,n){return e=jn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Xu(e,n,a){return Ws(n,e.child,null,a),e=ku(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Tm(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),lu(e.return,n,a)}function Wu(e,n,a,r,c){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=r,f.tail=a,f.tailMode=c)}function bm(e,n,a){var r=n.pendingProps,c=r.revealOrder,f=r.tail;if(En(e,n,r.children,a),r=cn.current,(r&2)!==0)r=r&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Tm(e,a,n);else if(e.tag===19)Tm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}switch(xt(cn,r),c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&Sl(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Wu(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&Sl(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}Wu(n,!0,a,null,f);break;case"together":Wu(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function qi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),ba|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(kr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Fi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Fi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function qu(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&al(e)))}function Bv(e,n,a){switch(n.tag){case 3:wt(n,n.stateNode.containerInfo),pa(n,ln,e.memoizedState.cache),Gr();break;case 27:case 5:Qt(n);break;case 4:wt(n,n.stateNode.containerInfo);break;case 10:pa(n,n.type,n.memoizedProps.value);break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(xa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Em(e,n,a):(xa(n),e=qi(e,n,a),e!==null?e.sibling:null);xa(n);break;case 19:var c=(e.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(kr(e,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return bm(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),xt(cn,cn.current),r)break;return null;case 22:case 23:return n.lanes=0,vm(e,n,a);case 24:pa(n,ln,e.memoizedState.cache)}return qi(e,n,a)}function Am(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)gn=!0;else{if(!qu(e,a)&&(n.flags&128)===0)return gn=!1,Bv(e,n,a);gn=(e.flags&131072)!==0}else gn=!1,Re&&(n.flags&1048576)!==0&&np(n,il,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var r=n.elementType,c=r._init;if(r=c(r._payload),n.type=r,typeof r=="function")eu(r)?(e=cs(r,e),n.tag=1,n=ym(null,n,r,e,a)):(n.tag=0,n=Fu(null,n,r,e,a));else{if(r!=null){if(c=r.$$typeof,c===C){n.tag=11,n=mm(null,n,r,e,a);break t}else if(c===O){n.tag=14,n=gm(null,n,r,e,a);break t}}throw n=pt(r)||r,Error(s(306,n,""))}}return n;case 0:return Fu(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=cs(r,n.pendingProps),ym(e,n,r,c,a);case 3:t:{if(wt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;c=f.element,mu(e,n),Kr(n,r,null,a);var y=n.memoizedState;if(r=y.cache,pa(n,ln,r),r!==f.cache&&cu(n,[ln],a,!0),Zr(),r=y.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Mm(e,n,r,a);break t}else if(r!==c){c=ai(Error(s(424)),n),Vr(c),n=Mm(e,n,r,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(je=pi(e.firstChild),Ln=n,Re=!0,is=null,Mi=!0,a=am(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Gr(),r===c){n=qi(e,n,a);break t}En(e,n,r,a)}n=n.child}return n;case 26:return El(e,n),e===null?(a=Dg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Re||(a=n.type,e=n.pendingProps,r=Bl(Et.current).createElement(a),r[rn]=n,r[yn]=e,bn(r,a,e),en(r),n.stateNode=r):n.memoizedState=Dg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Qt(n),e===null&&Re&&(r=n.stateNode=Rg(n.type,n.pendingProps,Et.current),Ln=n,Mi=!0,c=je,wa(n.type)?(Rf=c,je=pi(r.firstChild)):je=c),En(e,n,n.pendingProps.children,a),El(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Re&&((c=r=je)&&(r=hx(r,n.type,n.pendingProps,Mi),r!==null?(n.stateNode=r,Ln=n,je=pi(r.firstChild),Mi=!1,c=!0):c=!1),c||as(n)),Qt(n),c=n.type,f=n.pendingProps,y=e!==null?e.memoizedProps:null,r=f.children,Ef(c,f)?r=null:y!==null&&Ef(c,y)&&(n.flags|=32),n.memoizedState!==null&&(c=yu(e,n,Dv,null,null,a),xo._currentValue=c),El(e,n),En(e,n,r,a),n.child;case 6:return e===null&&Re&&((e=a=je)&&(a=dx(a,n.pendingProps,Mi),a!==null?(n.stateNode=a,Ln=n,je=null,e=!0):e=!1),e||as(n)),null;case 13:return Em(e,n,a);case 4:return wt(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Ws(n,null,r,a):En(e,n,r,a),n.child;case 11:return mm(e,n,n.type,n.pendingProps,a);case 7:return En(e,n,n.pendingProps,a),n.child;case 8:return En(e,n,n.pendingProps.children,a),n.child;case 12:return En(e,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,pa(n,n.type,r.value),En(e,n,r.children,a),n.child;case 9:return c=n.type._context,r=n.pendingProps.children,rs(n),c=Rn(c),r=r(c),n.flags|=1,En(e,n,r,a),n.child;case 14:return gm(e,n,n.type,n.pendingProps,a);case 15:return _m(e,n,n.type,n.pendingProps,a);case 19:return bm(e,n,a);case 31:return r=n.pendingProps,a=n.mode,r={mode:r.mode,children:r.children},e===null?(a=Tl(r,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Fi(e.child,r),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return vm(e,n,a);case 24:return rs(n),r=Rn(ln),e===null?(c=hu(),c===null&&(c=Xe,f=uu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:r,cache:c},pu(n),pa(n,ln,c)):((e.lanes&a)!==0&&(mu(e,n),Kr(n,null,null,a),Zr()),c=e.memoizedState,f=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),pa(n,ln,r)):(r=f.cache,pa(n,ln,r),r!==c.cache&&cu(n,[ln],a,!0))),En(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Yi(e){e.flags|=4}function Rm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Pg(n)){if(n=li.current,n!==null&&((ye&4194048)===ye?Ei!==null:(ye&62914560)!==ye&&(ye&536870912)===0||n!==Ei))throw Yr=du,up;e.flags|=8192}}function bl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Lt():536870912,e.lanes|=n,Zs|=n)}function io(e,n){if(!Re)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ye(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&65011712,r|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function Fv(e,n,a){var r=n.pendingProps;switch(su(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(n),null;case 1:return Ye(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),ki(ln),le(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Hr(n)?Yi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,sp())),Ye(n),null;case 26:return a=n.memoizedState,e===null?(Yi(n),a!==null?(Ye(n),Rm(n,a)):(Ye(n),n.flags&=-16777217)):a?a!==e.memoizedState?(Yi(n),Ye(n),Rm(n,a)):(Ye(n),n.flags&=-16777217):(e.memoizedProps!==r&&Yi(n),Ye(n),n.flags&=-16777217),null;case 27:Ne(n),a=Et.current;var c=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Yi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ye(n),null}e=K.current,Hr(n)?ip(n):(e=Rg(c,r,a),n.stateNode=e,Yi(n))}return Ye(n),null;case 5:if(Ne(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Yi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ye(n),null}if(e=K.current,Hr(n))ip(n);else{switch(c=Bl(Et.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof r.is=="string"?c.createElement("select",{is:r.is}):c.createElement("select"),r.multiple?e.multiple=!0:r.size&&(e.size=r.size);break;default:e=typeof r.is=="string"?c.createElement(a,{is:r.is}):c.createElement(a)}}e[rn]=n,e[yn]=r;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=e;t:switch(bn(e,a,r),a){case"button":case"input":case"select":case"textarea":e=!!r.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Yi(n)}}return Ye(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&Yi(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=Et.current,Hr(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,c=Ln,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}e[rn]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||Sg(e.nodeValue,a)),e||as(n)}else e=Bl(e).createTextNode(r),e[rn]=n,n.stateNode=e}return Ye(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Hr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[rn]=n}else Gr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ye(n),c=!1}else c=sp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Wi(n),n):(Wi(n),null)}if(Wi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=r!==null,e=e!==null&&e.memoizedState!==null,a){r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool);var f=null;r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==c&&(r.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),bl(n,n.updateQueue),Ye(n),null;case 4:return le(),e===null&&vf(n.stateNode.containerInfo),Ye(n),null;case 10:return ki(n.type),Ye(n),null;case 19:if(vt(cn),c=n.memoizedState,c===null)return Ye(n),null;if(r=(n.flags&128)!==0,f=c.rendering,f===null)if(r)io(c,!1);else{if(Ze!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Sl(e),f!==null){for(n.flags|=128,io(c,!1),e=f.updateQueue,n.updateQueue=e,bl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)ep(a,e),a=a.sibling;return xt(cn,cn.current&1|2),n.child}e=e.sibling}c.tail!==null&&pe()>Cl&&(n.flags|=128,r=!0,io(c,!1),n.lanes=4194304)}else{if(!r)if(e=Sl(f),e!==null){if(n.flags|=128,r=!0,e=e.updateQueue,n.updateQueue=e,bl(n,e),io(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!Re)return Ye(n),null}else 2*pe()-c.renderingStartTime>Cl&&a!==536870912&&(n.flags|=128,r=!0,io(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(e=c.last,e!==null?e.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=pe(),n.sibling=null,e=cn.current,xt(cn,r?e&1|2:e&1),n):(Ye(n),null);case 22:case 23:return Wi(n),xu(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Ye(n),n.subtreeFlags&6&&(n.flags|=8192)):Ye(n),a=n.updateQueue,a!==null&&bl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&vt(os),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ki(ln),Ye(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Hv(e,n){switch(su(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ki(ln),le(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Ne(n),null;case 13:if(Wi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Gr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return vt(cn),null;case 4:return le(),null;case 10:return ki(n.type),null;case 22:case 23:return Wi(n),xu(),e!==null&&vt(os),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ki(ln),null;case 25:return null;default:return null}}function Cm(e,n){switch(su(n),n.tag){case 3:ki(ln),le();break;case 26:case 27:case 5:Ne(n);break;case 4:le();break;case 13:Wi(n);break;case 19:vt(cn);break;case 10:ki(n.type);break;case 22:case 23:Wi(n),xu(),e!==null&&vt(os);break;case 24:ki(ln)}}function ao(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&e)===e){r=void 0;var f=a.create,y=a.inst;r=f(),y.destroy=r}a=a.next}while(a!==c)}}catch(b){Ve(n,n.return,b)}}function ya(e,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var f=c.next;r=f;do{if((r.tag&e)===e){var y=r.inst,b=y.destroy;if(b!==void 0){y.destroy=void 0,c=n;var B=a,J=b;try{J()}catch(ct){Ve(c,B,ct)}}}r=r.next}while(r!==f)}}catch(ct){Ve(n,n.return,ct)}}function wm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{gp(n,a)}catch(r){Ve(e,e.return,r)}}}function Dm(e,n,a){a.props=cs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){Ve(e,n,r)}}function so(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(c){Ve(e,n,c)}}function Ti(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){Ve(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ve(e,n,c)}else a.current=null}function Um(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){Ve(e,e.return,c)}}function Yu(e,n,a){try{var r=e.stateNode;ox(r,e.type,a,n),r[yn]=n}catch(c){Ve(e,e.return,c)}}function Lm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&wa(e.type)||e.tag===4}function ju(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Lm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&wa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zu(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=zl));else if(r!==4&&(r===27&&wa(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Zu(e,n,a),e=e.sibling;e!==null;)Zu(e,n,a),e=e.sibling}function Al(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(r!==4&&(r===27&&wa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Al(e,n,a),e=e.sibling;e!==null;)Al(e,n,a),e=e.sibling}function Nm(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);bn(n,r,a),n[rn]=e,n[yn]=a}catch(f){Ve(e,e.return,f)}}var ji=!1,tn=!1,Ku=!1,Om=typeof WeakSet=="function"?WeakSet:Set,_n=null;function Gv(e,n){if(e=e.containerInfo,yf=Xl,e=Wd(e),jc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var c=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var y=0,b=-1,B=-1,J=0,ct=0,gt=e,nt=null;e:for(;;){for(var st;gt!==a||c!==0&&gt.nodeType!==3||(b=y+c),gt!==f||r!==0&&gt.nodeType!==3||(B=y+r),gt.nodeType===3&&(y+=gt.nodeValue.length),(st=gt.firstChild)!==null;)nt=gt,gt=st;for(;;){if(gt===e)break e;if(nt===a&&++J===c&&(b=y),nt===f&&++ct===r&&(B=y),(st=gt.nextSibling)!==null)break;gt=nt,nt=gt.parentNode}gt=st}a=b===-1||B===-1?null:{start:b,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Mf={focusedElem:e,selectionRange:a},Xl=!1,_n=n;_n!==null;)if(n=_n,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,_n=e;else for(;_n!==null;){switch(n=_n,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var ee=cs(a.type,c,a.elementType===a.type);e=r.getSnapshotBeforeUpdate(ee,f),r.__reactInternalSnapshotBeforeUpdate=e}catch(Jt){Ve(a,a.return,Jt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)bf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":bf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,_n=e;break}_n=n.return}}function Pm(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:Ma(e,a),r&4&&ao(5,a);break;case 1:if(Ma(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(y){Ve(a,a.return,y)}else{var c=cs(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(y){Ve(a,a.return,y)}}r&64&&wm(a),r&512&&so(a,a.return);break;case 3:if(Ma(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{gp(e,n)}catch(y){Ve(a,a.return,y)}}break;case 27:n===null&&r&4&&Nm(a);case 26:case 5:Ma(e,a),n===null&&r&4&&Um(a),r&512&&so(a,a.return);break;case 12:Ma(e,a);break;case 13:Ma(e,a),r&4&&Bm(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Kv.bind(null,a),px(e,a))));break;case 22:if(r=a.memoizedState!==null||ji,!r){n=n!==null&&n.memoizedState!==null||tn,c=ji;var f=tn;ji=r,(tn=n)&&!f?Ea(e,a,(a.subtreeFlags&8772)!==0):Ma(e,a),ji=c,tn=f}break;case 30:break;default:Ma(e,a)}}function Im(e){var n=e.alternate;n!==null&&(e.alternate=null,Im(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&ua(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var qe=null,zn=!1;function Zi(e,n,a){for(a=a.child;a!==null;)zm(e,n,a),a=a.sibling}function zm(e,n,a){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(ft,a)}catch{}switch(a.tag){case 26:tn||Ti(a,n),Zi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:tn||Ti(a,n);var r=qe,c=zn;wa(a.type)&&(qe=a.stateNode,zn=!1),Zi(e,n,a),mo(a.stateNode),qe=r,zn=c;break;case 5:tn||Ti(a,n);case 6:if(r=qe,c=zn,qe=null,Zi(e,n,a),qe=r,zn=c,qe!==null)if(zn)try{(qe.nodeType===9?qe.body:qe.nodeName==="HTML"?qe.ownerDocument.body:qe).removeChild(a.stateNode)}catch(f){Ve(a,n,f)}else try{qe.removeChild(a.stateNode)}catch(f){Ve(a,n,f)}break;case 18:qe!==null&&(zn?(e=qe,bg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Eo(e)):bg(qe,a.stateNode));break;case 4:r=qe,c=zn,qe=a.stateNode.containerInfo,zn=!0,Zi(e,n,a),qe=r,zn=c;break;case 0:case 11:case 14:case 15:tn||ya(2,a,n),tn||ya(4,a,n),Zi(e,n,a);break;case 1:tn||(Ti(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&Dm(a,n,r)),Zi(e,n,a);break;case 21:Zi(e,n,a);break;case 22:tn=(r=tn)||a.memoizedState!==null,Zi(e,n,a),tn=r;break;default:Zi(e,n,a)}}function Bm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Eo(e)}catch(a){Ve(n,n.return,a)}}function Vv(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Om),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Om),n;default:throw Error(s(435,e.tag))}}function Qu(e,n){var a=Vv(e);n.forEach(function(r){var c=Qv.bind(null,e,r);a.has(r)||(a.add(r),r.then(c,c))})}function Zn(e,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r],f=e,y=n,b=y;t:for(;b!==null;){switch(b.tag){case 27:if(wa(b.type)){qe=b.stateNode,zn=!1;break t}break;case 5:qe=b.stateNode,zn=!1;break t;case 3:case 4:qe=b.stateNode.containerInfo,zn=!0;break t}b=b.return}if(qe===null)throw Error(s(160));zm(f,y,c),qe=null,zn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Fm(n,e),n=n.sibling}var di=null;function Fm(e,n){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Zn(n,e),Kn(e),r&4&&(ya(3,e,e.return),ao(3,e),ya(5,e,e.return));break;case 1:Zn(n,e),Kn(e),r&512&&(tn||a===null||Ti(a,a.return)),r&64&&ji&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var c=di;if(Zn(n,e),Kn(e),r&512&&(tn||a===null||Ti(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=e.memoizedState,a===null)if(r===null)if(e.stateNode===null){t:{r=e.type,a=e.memoizedProps,c=c.ownerDocument||c;e:switch(r){case"title":f=c.getElementsByTagName("title")[0],(!f||f[ca]||f[rn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(r),c.head.insertBefore(f,c.querySelector("head > title"))),bn(f,r,a),f[rn]=e,en(f),r=f;break t;case"link":var y=Ng("link","href",c).get(r+(a.href||""));if(y){for(var b=0;b<y.length;b++)if(f=y[b],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(b,1);break e}}f=c.createElement(r),bn(f,r,a),c.head.appendChild(f);break;case"meta":if(y=Ng("meta","content",c).get(r+(a.content||""))){for(b=0;b<y.length;b++)if(f=y[b],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(b,1);break e}}f=c.createElement(r),bn(f,r,a),c.head.appendChild(f);break;default:throw Error(s(468,r))}f[rn]=e,en(f),r=f}e.stateNode=r}else Og(c,e.type,e.stateNode);else e.stateNode=Lg(c,r,e.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?Og(c,e.type,e.stateNode):Lg(c,r,e.memoizedProps)):r===null&&e.stateNode!==null&&Yu(e,e.memoizedProps,a.memoizedProps)}break;case 27:Zn(n,e),Kn(e),r&512&&(tn||a===null||Ti(a,a.return)),a!==null&&r&4&&Yu(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Zn(n,e),Kn(e),r&512&&(tn||a===null||Ti(a,a.return)),e.flags&32){c=e.stateNode;try{yi(c,"")}catch(st){Ve(e,e.return,st)}}r&4&&e.stateNode!=null&&(c=e.memoizedProps,Yu(e,c,a!==null?a.memoizedProps:c)),r&1024&&(Ku=!0);break;case 6:if(Zn(n,e),Kn(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,a=e.stateNode;try{a.nodeValue=r}catch(st){Ve(e,e.return,st)}}break;case 3:if(Gl=null,c=di,di=Fl(n.containerInfo),Zn(n,e),di=c,Kn(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{Eo(n.containerInfo)}catch(st){Ve(e,e.return,st)}Ku&&(Ku=!1,Hm(e));break;case 4:r=di,di=Fl(e.stateNode.containerInfo),Zn(n,e),Kn(e),di=r;break;case 12:Zn(n,e),Kn(e);break;case 13:Zn(n,e),Kn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(af=pe()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Qu(e,r)));break;case 22:c=e.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,J=ji,ct=tn;if(ji=J||c,tn=ct||B,Zn(n,e),tn=ct,ji=J,Kn(e),r&8192)t:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||B||ji||tn||us(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,c)y=f.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{b=B.stateNode;var gt=B.memoizedProps.style,nt=gt!=null&&gt.hasOwnProperty("display")?gt.display:null;b.style.display=nt==null||typeof nt=="boolean"?"":(""+nt).trim()}}catch(st){Ve(B,B.return,st)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=c?"":B.memoizedProps}catch(st){Ve(B,B.return,st)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Qu(e,a))));break;case 19:Zn(n,e),Kn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Qu(e,r)));break;case 30:break;case 21:break;default:Zn(n,e),Kn(e)}}function Kn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(Lm(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,f=ju(e);Al(e,f,c);break;case 5:var y=a.stateNode;a.flags&32&&(yi(y,""),a.flags&=-33);var b=ju(e);Al(e,b,y);break;case 3:case 4:var B=a.stateNode.containerInfo,J=ju(e);Zu(e,J,B);break;default:throw Error(s(161))}}catch(ct){Ve(e,e.return,ct)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Hm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Hm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Ma(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Pm(e,n.alternate,n),n=n.sibling}function us(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:ya(4,n,n.return),us(n);break;case 1:Ti(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Dm(n,n.return,a),us(n);break;case 27:mo(n.stateNode);case 26:case 5:Ti(n,n.return),us(n);break;case 22:n.memoizedState===null&&us(n);break;case 30:us(n);break;default:us(n)}e=e.sibling}}function Ea(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,c=e,f=n,y=f.flags;switch(f.tag){case 0:case 11:case 15:Ea(c,f,a),ao(4,f);break;case 1:if(Ea(c,f,a),r=f,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(J){Ve(r,r.return,J)}if(r=f,c=r.updateQueue,c!==null){var b=r.stateNode;try{var B=c.shared.hiddenCallbacks;if(B!==null)for(c.shared.hiddenCallbacks=null,c=0;c<B.length;c++)mp(B[c],b)}catch(J){Ve(r,r.return,J)}}a&&y&64&&wm(f),so(f,f.return);break;case 27:Nm(f);case 26:case 5:Ea(c,f,a),a&&r===null&&y&4&&Um(f),so(f,f.return);break;case 12:Ea(c,f,a);break;case 13:Ea(c,f,a),a&&y&4&&Bm(c,f);break;case 22:f.memoizedState===null&&Ea(c,f,a),so(f,f.return);break;case 30:break;default:Ea(c,f,a)}n=n.sibling}}function Ju(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Xr(a))}function $u(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Xr(e))}function bi(e,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Gm(e,n,a,r),n=n.sibling}function Gm(e,n,a,r){var c=n.flags;switch(n.tag){case 0:case 11:case 15:bi(e,n,a,r),c&2048&&ao(9,n);break;case 1:bi(e,n,a,r);break;case 3:bi(e,n,a,r),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Xr(e)));break;case 12:if(c&2048){bi(e,n,a,r),e=n.stateNode;try{var f=n.memoizedProps,y=f.id,b=f.onPostCommit;typeof b=="function"&&b(y,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(B){Ve(n,n.return,B)}}else bi(e,n,a,r);break;case 13:bi(e,n,a,r);break;case 23:break;case 22:f=n.stateNode,y=n.alternate,n.memoizedState!==null?f._visibility&2?bi(e,n,a,r):ro(e,n):f._visibility&2?bi(e,n,a,r):(f._visibility|=2,qs(e,n,a,r,(n.subtreeFlags&10256)!==0)),c&2048&&Ju(y,n);break;case 24:bi(e,n,a,r),c&2048&&$u(n.alternate,n);break;default:bi(e,n,a,r)}}function qs(e,n,a,r,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,y=n,b=a,B=r,J=y.flags;switch(y.tag){case 0:case 11:case 15:qs(f,y,b,B,c),ao(8,y);break;case 23:break;case 22:var ct=y.stateNode;y.memoizedState!==null?ct._visibility&2?qs(f,y,b,B,c):ro(f,y):(ct._visibility|=2,qs(f,y,b,B,c)),c&&J&2048&&Ju(y.alternate,y);break;case 24:qs(f,y,b,B,c),c&&J&2048&&$u(y.alternate,y);break;default:qs(f,y,b,B,c)}n=n.sibling}}function ro(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,c=r.flags;switch(r.tag){case 22:ro(a,r),c&2048&&Ju(r.alternate,r);break;case 24:ro(a,r),c&2048&&$u(r.alternate,r);break;default:ro(a,r)}n=n.sibling}}var oo=8192;function Ys(e){if(e.subtreeFlags&oo)for(e=e.child;e!==null;)Vm(e),e=e.sibling}function Vm(e){switch(e.tag){case 26:Ys(e),e.flags&oo&&e.memoizedState!==null&&Rx(di,e.memoizedState,e.memoizedProps);break;case 5:Ys(e);break;case 3:case 4:var n=di;di=Fl(e.stateNode.containerInfo),Ys(e),di=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=oo,oo=16777216,Ys(e),oo=n):Ys(e));break;default:Ys(e)}}function km(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function lo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];_n=r,Wm(r,e)}km(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Xm(e),e=e.sibling}function Xm(e){switch(e.tag){case 0:case 11:case 15:lo(e),e.flags&2048&&ya(9,e,e.return);break;case 3:lo(e);break;case 12:lo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Rl(e)):lo(e);break;default:lo(e)}}function Rl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];_n=r,Wm(r,e)}km(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ya(8,n,n.return),Rl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Rl(n));break;default:Rl(n)}e=e.sibling}}function Wm(e,n){for(;_n!==null;){var a=_n;switch(a.tag){case 0:case 11:case 15:ya(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Xr(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,_n=r;else t:for(a=e;_n!==null;){r=_n;var c=r.sibling,f=r.return;if(Im(r),r===a){_n=null;break t}if(c!==null){c.return=f,_n=c;break t}_n=f}}}var kv={getCacheForType:function(e){var n=Rn(ln),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},Xv=typeof WeakMap=="function"?WeakMap:Map,Ue=0,Xe=null,me=null,ye=0,Le=0,Qn=null,Ta=!1,js=!1,tf=!1,Ki=0,Ze=0,ba=0,fs=0,ef=0,ci=0,Zs=0,co=null,Bn=null,nf=!1,af=0,Cl=1/0,wl=null,Aa=null,Tn=0,Ra=null,Ks=null,Qs=0,sf=0,rf=null,qm=null,uo=0,of=null;function Jn(){if((Ue&2)!==0&&ye!==0)return ye&-ye;if(F.T!==null){var e=Bs;return e!==0?e:pf()}return Ee()}function Ym(){ci===0&&(ci=(ye&536870912)===0||Re?k():536870912);var e=li.current;return e!==null&&(e.flags|=32),ci}function $n(e,n,a){(e===Xe&&(Le===2||Le===9)||e.cancelPendingCommit!==null)&&(Js(e,0),Ca(e,ye,ci,!1)),zt(e,a),((Ue&2)===0||e!==Xe)&&(e===Xe&&((Ue&2)===0&&(fs|=a),Ze===4&&Ca(e,ye,ci,!1)),Ai(e))}function jm(e,n,a){if((Ue&6)!==0)throw Error(s(327));var r=!a&&(n&124)===0&&(n&e.expiredLanes)===0||Ct(e,n),c=r?Yv(e,n):uf(e,n,!0),f=r;do{if(c===0){js&&!r&&Ca(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Wv(a)){c=uf(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;t:{var b=e;c=co;var B=b.current.memoizedState.isDehydrated;if(B&&(Js(b,y).flags|=256),y=uf(b,y,!1),y!==2){if(tf&&!B){b.errorRecoveryDisabledLanes|=f,fs|=f,c=4;break t}f=Bn,Bn=c,f!==null&&(Bn===null?Bn=f:Bn.push.apply(Bn,f))}c=y}if(f=!1,c!==2)continue}}if(c===1){Js(e,0),Ca(e,n,0,!0);break}t:{switch(r=e,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ca(r,n,ci,!Ta);break t;case 2:Bn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=af+300-pe(),10<c)){if(Ca(r,n,ci,!Ta),Yt(r,0,!0)!==0)break t;r.timeoutHandle=Eg(Zm.bind(null,r,a,Bn,wl,nf,n,ci,fs,Zs,Ta,f,2,-0,0),c);break t}Zm(r,a,Bn,wl,nf,n,ci,fs,Zs,Ta,f,0,-0,0)}}break}while(!0);Ai(e)}function Zm(e,n,a,r,c,f,y,b,B,J,ct,gt,nt,st){if(e.timeoutHandle=-1,gt=n.subtreeFlags,(gt&8192||(gt&16785408)===16785408)&&(vo={stylesheets:null,count:0,unsuspend:Ax},Vm(n),gt=Cx(),gt!==null)){e.cancelPendingCommit=gt(ng.bind(null,e,n,f,a,r,c,y,b,B,ct,1,nt,st)),Ca(e,f,y,!J);return}ng(e,n,f,a,r,c,y,b,B)}function Wv(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],f=c.getSnapshot;c=c.value;try{if(!Yn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ca(e,n,a,r){n&=~ef,n&=~fs,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var c=n;0<c;){var f=31-Pt(c),y=1<<f;r[f]=-1,c&=~y}a!==0&&_t(e,a,n)}function Dl(){return(Ue&6)===0?(fo(0),!1):!0}function lf(){if(me!==null){if(Le===0)var e=me.return;else e=me,Vi=ss=null,Tu(e),Xs=null,eo=0,e=me;for(;e!==null;)Cm(e.alternate,e),e=e.return;me=null}}function Js(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,cx(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),lf(),Xe=e,me=a=Fi(e.current,null),ye=n,Le=0,Qn=null,Ta=!1,js=Ct(e,n),tf=!1,Zs=ci=ef=fs=ba=Ze=0,Bn=co=null,nf=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var c=31-Pt(r),f=1<<c;n|=e[c],r&=~f}return Ki=n,Jo(),a}function Km(e,n){fe=null,F.H=_l,n===qr||n===ol?(n=dp(),Le=3):n===up?(n=dp(),Le=4):Le=n===pm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Qn=n,me===null&&(Ze=1,Ml(e,ai(n,e.current)))}function Qm(){var e=F.H;return F.H=_l,e===null?_l:e}function Jm(){var e=F.A;return F.A=kv,e}function cf(){Ze=4,Ta||(ye&4194048)!==ye&&li.current!==null||(js=!0),(ba&134217727)===0&&(fs&134217727)===0||Xe===null||Ca(Xe,ye,ci,!1)}function uf(e,n,a){var r=Ue;Ue|=2;var c=Qm(),f=Jm();(Xe!==e||ye!==n)&&(wl=null,Js(e,n)),n=!1;var y=Ze;t:do try{if(Le!==0&&me!==null){var b=me,B=Qn;switch(Le){case 8:lf(),y=6;break t;case 3:case 2:case 9:case 6:li.current===null&&(n=!0);var J=Le;if(Le=0,Qn=null,$s(e,b,B,J),a&&js){y=0;break t}break;default:J=Le,Le=0,Qn=null,$s(e,b,B,J)}}qv(),y=Ze;break}catch(ct){Km(e,ct)}while(!0);return n&&e.shellSuspendCounter++,Vi=ss=null,Ue=r,F.H=c,F.A=f,me===null&&(Xe=null,ye=0,Jo()),y}function qv(){for(;me!==null;)$m(me)}function Yv(e,n){var a=Ue;Ue|=2;var r=Qm(),c=Jm();Xe!==e||ye!==n?(wl=null,Cl=pe()+500,Js(e,n)):js=Ct(e,n);t:do try{if(Le!==0&&me!==null){n=me;var f=Qn;e:switch(Le){case 1:Le=0,Qn=null,$s(e,n,f,1);break;case 2:case 9:if(fp(f)){Le=0,Qn=null,tg(n);break}n=function(){Le!==2&&Le!==9||Xe!==e||(Le=7),Ai(e)},f.then(n,n);break t;case 3:Le=7;break t;case 4:Le=5;break t;case 7:fp(f)?(Le=0,Qn=null,tg(n)):(Le=0,Qn=null,$s(e,n,f,7));break;case 5:var y=null;switch(me.tag){case 26:y=me.memoizedState;case 5:case 27:var b=me;if(!y||Pg(y)){Le=0,Qn=null;var B=b.sibling;if(B!==null)me=B;else{var J=b.return;J!==null?(me=J,Ul(J)):me=null}break e}}Le=0,Qn=null,$s(e,n,f,5);break;case 6:Le=0,Qn=null,$s(e,n,f,6);break;case 8:lf(),Ze=6;break t;default:throw Error(s(462))}}jv();break}catch(ct){Km(e,ct)}while(!0);return Vi=ss=null,F.H=r,F.A=c,Ue=a,me!==null?0:(Xe=null,ye=0,Jo(),Ze)}function jv(){for(;me!==null&&!Sn();)$m(me)}function $m(e){var n=Am(e.alternate,e,Ki);e.memoizedProps=e.pendingProps,n===null?Ul(e):me=n}function tg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Sm(a,n,n.pendingProps,n.type,void 0,ye);break;case 11:n=Sm(a,n,n.pendingProps,n.type.render,n.ref,ye);break;case 5:Tu(n);default:Cm(a,n),n=me=ep(n,Ki),n=Am(a,n,Ki)}e.memoizedProps=e.pendingProps,n===null?Ul(e):me=n}function $s(e,n,a,r){Vi=ss=null,Tu(n),Xs=null,eo=0;var c=n.return;try{if(zv(e,c,n,a,ye)){Ze=1,Ml(e,ai(a,e.current)),me=null;return}}catch(f){if(c!==null)throw me=c,f;Ze=1,Ml(e,ai(a,e.current)),me=null;return}n.flags&32768?(Re||r===1?e=!0:js||(ye&536870912)!==0?e=!1:(Ta=e=!0,(r===2||r===9||r===3||r===6)&&(r=li.current,r!==null&&r.tag===13&&(r.flags|=16384))),eg(n,e)):Ul(n)}function Ul(e){var n=e;do{if((n.flags&32768)!==0){eg(n,Ta);return}e=n.return;var a=Fv(n.alternate,n,Ki);if(a!==null){me=a;return}if(n=n.sibling,n!==null){me=n;return}me=n=e}while(n!==null);Ze===0&&(Ze=5)}function eg(e,n){do{var a=Hv(e.alternate,e);if(a!==null){a.flags&=32767,me=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){me=e;return}me=e=a}while(e!==null);Ze=6,me=null}function ng(e,n,a,r,c,f,y,b,B){e.cancelPendingCommit=null;do Ll();while(Tn!==0);if((Ue&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=$c,At(e,a,f,y,b,B),e===Xe&&(me=Xe=null,ye=0),Ks=n,Ra=e,Qs=a,sf=f,rf=c,qm=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Jv(ae,function(){return og(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=F.T,F.T=null,c=j.p,j.p=2,y=Ue,Ue|=4;try{Gv(e,n,a)}finally{Ue=y,j.p=c,F.T=r}}Tn=1,ig(),ag(),sg()}}function ig(){if(Tn===1){Tn=0;var e=Ra,n=Ks,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=F.T,F.T=null;var r=j.p;j.p=2;var c=Ue;Ue|=4;try{Fm(n,e);var f=Mf,y=Wd(e.containerInfo),b=f.focusedElem,B=f.selectionRange;if(y!==b&&b&&b.ownerDocument&&Xd(b.ownerDocument.documentElement,b)){if(B!==null&&jc(b)){var J=B.start,ct=B.end;if(ct===void 0&&(ct=J),"selectionStart"in b)b.selectionStart=J,b.selectionEnd=Math.min(ct,b.value.length);else{var gt=b.ownerDocument||document,nt=gt&&gt.defaultView||window;if(nt.getSelection){var st=nt.getSelection(),ee=b.textContent.length,Jt=Math.min(B.start,ee),ze=B.end===void 0?Jt:Math.min(B.end,ee);!st.extend&&Jt>ze&&(y=ze,ze=Jt,Jt=y);var q=kd(b,Jt),V=kd(b,ze);if(q&&V&&(st.rangeCount!==1||st.anchorNode!==q.node||st.anchorOffset!==q.offset||st.focusNode!==V.node||st.focusOffset!==V.offset)){var Q=gt.createRange();Q.setStart(q.node,q.offset),st.removeAllRanges(),Jt>ze?(st.addRange(Q),st.extend(V.node,V.offset)):(Q.setEnd(V.node,V.offset),st.addRange(Q))}}}}for(gt=[],st=b;st=st.parentNode;)st.nodeType===1&&gt.push({element:st,left:st.scrollLeft,top:st.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<gt.length;b++){var ht=gt[b];ht.element.scrollLeft=ht.left,ht.element.scrollTop=ht.top}}Xl=!!yf,Mf=yf=null}finally{Ue=c,j.p=r,F.T=a}}e.current=n,Tn=2}}function ag(){if(Tn===2){Tn=0;var e=Ra,n=Ks,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=F.T,F.T=null;var r=j.p;j.p=2;var c=Ue;Ue|=4;try{Pm(e,n.alternate,n)}finally{Ue=c,j.p=r,F.T=a}}Tn=3}}function sg(){if(Tn===4||Tn===3){Tn=0,Me();var e=Ra,n=Ks,a=Qs,r=qm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Tn=5:(Tn=0,Ks=Ra=null,rg(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Aa=null),De(a),n=n.stateNode,dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(ft,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=F.T,c=j.p,j.p=2,F.T=null;try{for(var f=e.onRecoverableError,y=0;y<r.length;y++){var b=r[y];f(b.value,{componentStack:b.stack})}}finally{F.T=n,j.p=c}}(Qs&3)!==0&&Ll(),Ai(e),c=e.pendingLanes,(a&4194090)!==0&&(c&42)!==0?e===of?uo++:(uo=0,of=e):uo=0,fo(0)}}function rg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Xr(n)))}function Ll(e){return ig(),ag(),sg(),og()}function og(){if(Tn!==5)return!1;var e=Ra,n=sf;sf=0;var a=De(Qs),r=F.T,c=j.p;try{j.p=32>a?32:a,F.T=null,a=rf,rf=null;var f=Ra,y=Qs;if(Tn=0,Ks=Ra=null,Qs=0,(Ue&6)!==0)throw Error(s(331));var b=Ue;if(Ue|=4,Xm(f.current),Gm(f,f.current,y,a),Ue=b,fo(0,!1),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(ft,f)}catch{}return!0}finally{j.p=c,F.T=r,rg(e,n)}}function lg(e,n,a){n=ai(a,n),n=Bu(e.stateNode,n,2),e=_a(e,n,2),e!==null&&(zt(e,2),Ai(e))}function Ve(e,n,a){if(e.tag===3)lg(e,e,a);else for(;n!==null;){if(n.tag===3){lg(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Aa===null||!Aa.has(r))){e=ai(a,e),a=hm(2),r=_a(n,a,2),r!==null&&(dm(a,r,n,e),zt(r,2),Ai(r));break}}n=n.return}}function ff(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new Xv;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(tf=!0,c.add(a),e=Zv.bind(null,e,n,a),n.then(e,e))}function Zv(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Xe===e&&(ye&a)===a&&(Ze===4||Ze===3&&(ye&62914560)===ye&&300>pe()-af?(Ue&2)===0&&Js(e,0):ef|=a,Zs===ye&&(Zs=0)),Ai(e)}function cg(e,n){n===0&&(n=Lt()),e=Os(e,n),e!==null&&(zt(e,n),Ai(e))}function Kv(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),cg(e,a)}function Qv(e,n){var a=0;switch(e.tag){case 13:var r=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),cg(e,a)}function Jv(e,n){return ve(e,n)}var Nl=null,tr=null,hf=!1,Ol=!1,df=!1,hs=0;function Ai(e){e!==tr&&e.next===null&&(tr===null?Nl=tr=e:tr=tr.next=e),Ol=!0,hf||(hf=!0,tx())}function fo(e,n){if(!df&&Ol){df=!0;do for(var a=!1,r=Nl;r!==null;){if(e!==0){var c=r.pendingLanes;if(c===0)var f=0;else{var y=r.suspendedLanes,b=r.pingedLanes;f=(1<<31-Pt(42|e)+1)-1,f&=c&~(y&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,dg(r,f))}else f=ye,f=Yt(r,r===Xe?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Ct(r,f)||(a=!0,dg(r,f));r=r.next}while(a);df=!1}}function $v(){ug()}function ug(){Ol=hf=!1;var e=0;hs!==0&&(lx()&&(e=hs),hs=0);for(var n=pe(),a=null,r=Nl;r!==null;){var c=r.next,f=fg(r,n);f===0?(r.next=null,a===null?Nl=c:a.next=c,c===null&&(tr=a)):(a=r,(e!==0||(f&3)!==0)&&(Ol=!0)),r=c}fo(e)}function fg(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var y=31-Pt(f),b=1<<y,B=c[y];B===-1?((b&a)===0||(b&r)!==0)&&(c[y]=ie(b,n)):B<=n&&(e.expiredLanes|=b),f&=~b}if(n=Xe,a=ye,a=Yt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(Le===2||Le===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&G(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ct(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&G(r),De(a)){case 2:case 8:a=jt;break;case 32:a=ae;break;case 268435456:a=P;break;default:a=ae}return r=hg.bind(null,e),a=ve(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&G(r),e.callbackPriority=2,e.callbackNode=null,2}function hg(e,n){if(Tn!==0&&Tn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Ll()&&e.callbackNode!==a)return null;var r=ye;return r=Yt(e,e===Xe?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(jm(e,r,n),fg(e,pe()),e.callbackNode!=null&&e.callbackNode===a?hg.bind(null,e):null)}function dg(e,n){if(Ll())return null;jm(e,n,!0)}function tx(){ux(function(){(Ue&6)!==0?ve(xe,$v):ug()})}function pf(){return hs===0&&(hs=k()),hs}function pg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Wo(""+e)}function mg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function ex(e,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var f=pg((c[yn]||null).action),y=r.submitter;y&&(n=(n=y[yn]||null)?pg(n.formAction):y.getAttribute("formAction"),n!==null&&(f=n,y=null));var b=new Zo("action","action",null,r,c);e.push({event:b,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(hs!==0){var B=y?mg(c,y):new FormData(c);Nu(a,{pending:!0,data:B,method:c.method,action:f},null,B)}}else typeof f=="function"&&(b.preventDefault(),B=y?mg(c,y):new FormData(c),Nu(a,{pending:!0,data:B,method:c.method,action:f},f,B))},currentTarget:c}]})}}for(var mf=0;mf<Jc.length;mf++){var gf=Jc[mf],nx=gf.toLowerCase(),ix=gf[0].toUpperCase()+gf.slice(1);hi(nx,"on"+ix)}hi(jd,"onAnimationEnd"),hi(Zd,"onAnimationIteration"),hi(Kd,"onAnimationStart"),hi("dblclick","onDoubleClick"),hi("focusin","onFocus"),hi("focusout","onBlur"),hi(Sv,"onTransitionRun"),hi(yv,"onTransitionStart"),hi(Mv,"onTransitionCancel"),hi(Qd,"onTransitionEnd"),R("onMouseEnter",["mouseout","mouseover"]),R("onMouseLeave",["mouseout","mouseover"]),R("onPointerEnter",["pointerout","pointerover"]),R("onPointerLeave",["pointerout","pointerover"]),Pi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Pi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Pi("onBeforeInput",["compositionend","keypress","textInput","paste"]),Pi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Pi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Pi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ax=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ho));function gg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],c=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var y=r.length-1;0<=y;y--){var b=r[y],B=b.instance,J=b.currentTarget;if(b=b.listener,B!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=J;try{f(c)}catch(ct){yl(ct)}c.currentTarget=null,f=B}else for(y=0;y<r.length;y++){if(b=r[y],B=b.instance,J=b.currentTarget,b=b.listener,B!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=J;try{f(c)}catch(ct){yl(ct)}c.currentTarget=null,f=B}}}}function ge(e,n){var a=n[ja];a===void 0&&(a=n[ja]=new Set);var r=e+"__bubble";a.has(r)||(_g(n,e,2,!1),a.add(r))}function _f(e,n,a){var r=0;n&&(r|=4),_g(a,e,r,n)}var Pl="_reactListening"+Math.random().toString(36).slice(2);function vf(e){if(!e[Pl]){e[Pl]=!0,ko.forEach(function(a){a!=="selectionchange"&&(ax.has(a)||_f(a,!1,e),_f(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Pl]||(n[Pl]=!0,_f("selectionchange",!1,n))}}function _g(e,n,a,r){switch(Gg(n)){case 2:var c=Ux;break;case 8:c=Lx;break;default:c=Lf}a=c.bind(null,n,a,e),c=void 0,!Fc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function xf(e,n,a,r,c){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var y=r.tag;if(y===3||y===4){var b=r.stateNode.containerInfo;if(b===c)break;if(y===4)for(y=r.return;y!==null;){var B=y.tag;if((B===3||B===4)&&y.stateNode.containerInfo===c)return;y=y.return}for(;b!==null;){if(y=Ni(b),y===null)return;if(B=y.tag,B===5||B===6||B===26||B===27){r=f=y;continue t}b=b.parentNode}}r=r.return}Td(function(){var J=f,ct=zc(a),gt=[];t:{var nt=Jd.get(e);if(nt!==void 0){var st=Zo,ee=e;switch(e){case"keypress":if(Yo(a)===0)break t;case"keydown":case"keyup":st=J0;break;case"focusin":ee="focus",st=kc;break;case"focusout":ee="blur",st=kc;break;case"beforeblur":case"afterblur":st=kc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":st=Rd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":st=H0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":st=ev;break;case jd:case Zd:case Kd:st=k0;break;case Qd:st=iv;break;case"scroll":case"scrollend":st=B0;break;case"wheel":st=sv;break;case"copy":case"cut":case"paste":st=W0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":st=wd;break;case"toggle":case"beforetoggle":st=ov}var Jt=(n&4)!==0,ze=!Jt&&(e==="scroll"||e==="scrollend"),q=Jt?nt!==null?nt+"Capture":null:nt;Jt=[];for(var V=J,Q;V!==null;){var ht=V;if(Q=ht.stateNode,ht=ht.tag,ht!==5&&ht!==26&&ht!==27||Q===null||q===null||(ht=Ur(V,q),ht!=null&&Jt.push(po(V,ht,Q))),ze)break;V=V.return}0<Jt.length&&(nt=new st(nt,ee,null,a,ct),gt.push({event:nt,listeners:Jt}))}}if((n&7)===0){t:{if(nt=e==="mouseover"||e==="pointerover",st=e==="mouseout"||e==="pointerout",nt&&a!==Ic&&(ee=a.relatedTarget||a.fromElement)&&(Ni(ee)||ee[On]))break t;if((st||nt)&&(nt=ct.window===ct?ct:(nt=ct.ownerDocument)?nt.defaultView||nt.parentWindow:window,st?(ee=a.relatedTarget||a.toElement,st=J,ee=ee?Ni(ee):null,ee!==null&&(ze=u(ee),Jt=ee.tag,ee!==ze||Jt!==5&&Jt!==27&&Jt!==6)&&(ee=null)):(st=null,ee=J),st!==ee)){if(Jt=Rd,ht="onMouseLeave",q="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&(Jt=wd,ht="onPointerLeave",q="onPointerEnter",V="pointer"),ze=st==null?nt:Ka(st),Q=ee==null?nt:Ka(ee),nt=new Jt(ht,V+"leave",st,a,ct),nt.target=ze,nt.relatedTarget=Q,ht=null,Ni(ct)===J&&(Jt=new Jt(q,V+"enter",ee,a,ct),Jt.target=Q,Jt.relatedTarget=ze,ht=Jt),ze=ht,st&&ee)e:{for(Jt=st,q=ee,V=0,Q=Jt;Q;Q=er(Q))V++;for(Q=0,ht=q;ht;ht=er(ht))Q++;for(;0<V-Q;)Jt=er(Jt),V--;for(;0<Q-V;)q=er(q),Q--;for(;V--;){if(Jt===q||q!==null&&Jt===q.alternate)break e;Jt=er(Jt),q=er(q)}Jt=null}else Jt=null;st!==null&&vg(gt,nt,st,Jt,!1),ee!==null&&ze!==null&&vg(gt,ze,ee,Jt,!0)}}t:{if(nt=J?Ka(J):window,st=nt.nodeName&&nt.nodeName.toLowerCase(),st==="select"||st==="input"&&nt.type==="file")var Ht=zd;else if(Pd(nt))if(Bd)Ht=_v;else{Ht=mv;var de=pv}else st=nt.nodeName,!st||st.toLowerCase()!=="input"||nt.type!=="checkbox"&&nt.type!=="radio"?J&&Pc(J.elementType)&&(Ht=zd):Ht=gv;if(Ht&&(Ht=Ht(e,J))){Id(gt,Ht,a,ct);break t}de&&de(e,nt,J),e==="focusout"&&J&&nt.type==="number"&&J.memoizedProps.value!=null&&An(nt,"number",nt.value)}switch(de=J?Ka(J):window,e){case"focusin":(Pd(de)||de.contentEditable==="true")&&(Us=de,Zc=J,Fr=null);break;case"focusout":Fr=Zc=Us=null;break;case"mousedown":Kc=!0;break;case"contextmenu":case"mouseup":case"dragend":Kc=!1,qd(gt,a,ct);break;case"selectionchange":if(xv)break;case"keydown":case"keyup":qd(gt,a,ct)}var Wt;if(Wc)t:{switch(e){case"compositionstart":var $t="onCompositionStart";break t;case"compositionend":$t="onCompositionEnd";break t;case"compositionupdate":$t="onCompositionUpdate";break t}$t=void 0}else Ds?Nd(e,a)&&($t="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&($t="onCompositionStart");$t&&(Dd&&a.locale!=="ko"&&(Ds||$t!=="onCompositionStart"?$t==="onCompositionEnd"&&Ds&&(Wt=bd()):(da=ct,Hc="value"in da?da.value:da.textContent,Ds=!0)),de=Il(J,$t),0<de.length&&($t=new Cd($t,e,null,a,ct),gt.push({event:$t,listeners:de}),Wt?$t.data=Wt:(Wt=Od(a),Wt!==null&&($t.data=Wt)))),(Wt=cv?uv(e,a):fv(e,a))&&($t=Il(J,"onBeforeInput"),0<$t.length&&(de=new Cd("onBeforeInput","beforeinput",null,a,ct),gt.push({event:de,listeners:$t}),de.data=Wt)),ex(gt,e,J,a,ct)}gg(gt,n)})}function po(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Il(e,n){for(var a=n+"Capture",r=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Ur(e,a),c!=null&&r.unshift(po(e,c,f)),c=Ur(e,n),c!=null&&r.push(po(e,c,f))),e.tag===3)return r;e=e.return}return[]}function er(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function vg(e,n,a,r,c){for(var f=n._reactName,y=[];a!==null&&a!==r;){var b=a,B=b.alternate,J=b.stateNode;if(b=b.tag,B!==null&&B===r)break;b!==5&&b!==26&&b!==27||J===null||(B=J,c?(J=Ur(a,f),J!=null&&y.unshift(po(a,J,B))):c||(J=Ur(a,f),J!=null&&y.push(po(a,J,B)))),a=a.return}y.length!==0&&e.push({event:n,listeners:y})}var sx=/\r\n?/g,rx=/\u0000|\uFFFD/g;function xg(e){return(typeof e=="string"?e:""+e).replace(sx,`
`).replace(rx,"")}function Sg(e,n){return n=xg(n),xg(e)===n}function zl(){}function Ie(e,n,a,r,c,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||yi(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&yi(e,""+r);break;case"className":Dt(e,"class",r);break;case"tabIndex":Dt(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Dt(e,a,r);break;case"style":Md(e,r,f);break;case"data":if(n!=="object"){Dt(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Wo(""+r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ie(e,n,"name",c.name,c,null),Ie(e,n,"formEncType",c.formEncType,c,null),Ie(e,n,"formMethod",c.formMethod,c,null),Ie(e,n,"formTarget",c.formTarget,c,null)):(Ie(e,n,"encType",c.encType,c,null),Ie(e,n,"method",c.method,c,null),Ie(e,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Wo(""+r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=zl);break;case"onScroll":r!=null&&ge("scroll",e);break;case"onScrollEnd":r!=null&&ge("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=Wo(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""+r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":ge("beforetoggle",e),ge("toggle",e),bt(e,"popover",r);break;case"xlinkActuate":Ot(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Ot(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Ot(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Ot(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Ot(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Ot(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":bt(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=I0.get(a)||a,bt(e,a,r))}}function Sf(e,n,a,r,c,f){switch(a){case"style":Md(e,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof r=="string"?yi(e,r):(typeof r=="number"||typeof r=="bigint")&&yi(e,""+r);break;case"onScroll":r!=null&&ge("scroll",e);break;case"onScrollEnd":r!=null&&ge("scrollend",e);break;case"onClick":r!=null&&(e.onclick=zl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Xo.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[yn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof r=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,r,c);break t}a in e?e[a]=r:r===!0?e.setAttribute(a,""):bt(e,a,r)}}}function bn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",e),ge("load",e);var r=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var y=a[f];if(y!=null)switch(f){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ie(e,n,f,y,a,null)}}c&&Ie(e,n,"srcSet",a.srcSet,a,null),r&&Ie(e,n,"src",a.src,a,null);return;case"input":ge("invalid",e);var b=f=y=c=null,B=null,J=null;for(r in a)if(a.hasOwnProperty(r)){var ct=a[r];if(ct!=null)switch(r){case"name":c=ct;break;case"type":y=ct;break;case"checked":B=ct;break;case"defaultChecked":J=ct;break;case"value":f=ct;break;case"defaultValue":b=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(s(137,n));break;default:Ie(e,n,r,ct,a,null)}}Ge(e,f,b,B,J,y,c,!1),Oe(e);return;case"select":ge("invalid",e),r=y=f=null;for(c in a)if(a.hasOwnProperty(c)&&(b=a[c],b!=null))switch(c){case"value":f=b;break;case"defaultValue":y=b;break;case"multiple":r=b;default:Ie(e,n,c,b,a,null)}n=f,a=y,e.multiple=!!r,n!=null?on(e,!!r,n,!1):a!=null&&on(e,!!r,a,!0);return;case"textarea":ge("invalid",e),f=c=r=null;for(y in a)if(a.hasOwnProperty(y)&&(b=a[y],b!=null))switch(y){case"value":r=b;break;case"defaultValue":c=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:Ie(e,n,y,b,a,null)}Mn(e,r,c,f),Oe(e);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(r=a[B],r!=null))switch(B){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Ie(e,n,B,r,a,null)}return;case"dialog":ge("beforetoggle",e),ge("toggle",e),ge("cancel",e),ge("close",e);break;case"iframe":case"object":ge("load",e);break;case"video":case"audio":for(r=0;r<ho.length;r++)ge(ho[r],e);break;case"image":ge("error",e),ge("load",e);break;case"details":ge("toggle",e);break;case"embed":case"source":case"link":ge("error",e),ge("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(r=a[J],r!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ie(e,n,J,r,a,null)}return;default:if(Pc(n)){for(ct in a)a.hasOwnProperty(ct)&&(r=a[ct],r!==void 0&&Sf(e,n,ct,r,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(r=a[b],r!=null&&Ie(e,n,b,r,a,null))}function ox(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,y=null,b=null,B=null,J=null,ct=null;for(st in a){var gt=a[st];if(a.hasOwnProperty(st)&&gt!=null)switch(st){case"checked":break;case"value":break;case"defaultValue":B=gt;default:r.hasOwnProperty(st)||Ie(e,n,st,null,r,gt)}}for(var nt in r){var st=r[nt];if(gt=a[nt],r.hasOwnProperty(nt)&&(st!=null||gt!=null))switch(nt){case"type":f=st;break;case"name":c=st;break;case"checked":J=st;break;case"defaultChecked":ct=st;break;case"value":y=st;break;case"defaultValue":b=st;break;case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(s(137,n));break;default:st!==gt&&Ie(e,n,nt,st,r,gt)}}Ii(e,y,b,B,J,ct,f,c);return;case"select":st=y=b=nt=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":st=B;default:r.hasOwnProperty(f)||Ie(e,n,f,null,r,B)}for(c in r)if(f=r[c],B=a[c],r.hasOwnProperty(c)&&(f!=null||B!=null))switch(c){case"value":nt=f;break;case"defaultValue":b=f;break;case"multiple":y=f;default:f!==B&&Ie(e,n,c,f,r,B)}n=b,a=y,r=st,nt!=null?on(e,!!a,nt,!1):!!r!=!!a&&(n!=null?on(e,!!a,n,!0):on(e,!!a,a?[]:"",!1));return;case"textarea":st=nt=null;for(b in a)if(c=a[b],a.hasOwnProperty(b)&&c!=null&&!r.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Ie(e,n,b,null,r,c)}for(y in r)if(c=r[y],f=a[y],r.hasOwnProperty(y)&&(c!=null||f!=null))switch(y){case"value":nt=c;break;case"defaultValue":st=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&Ie(e,n,y,c,r,f)}mn(e,nt,st);return;case"option":for(var ee in a)if(nt=a[ee],a.hasOwnProperty(ee)&&nt!=null&&!r.hasOwnProperty(ee))switch(ee){case"selected":e.selected=!1;break;default:Ie(e,n,ee,null,r,nt)}for(B in r)if(nt=r[B],st=a[B],r.hasOwnProperty(B)&&nt!==st&&(nt!=null||st!=null))switch(B){case"selected":e.selected=nt&&typeof nt!="function"&&typeof nt!="symbol";break;default:Ie(e,n,B,nt,r,st)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Jt in a)nt=a[Jt],a.hasOwnProperty(Jt)&&nt!=null&&!r.hasOwnProperty(Jt)&&Ie(e,n,Jt,null,r,nt);for(J in r)if(nt=r[J],st=a[J],r.hasOwnProperty(J)&&nt!==st&&(nt!=null||st!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(s(137,n));break;default:Ie(e,n,J,nt,r,st)}return;default:if(Pc(n)){for(var ze in a)nt=a[ze],a.hasOwnProperty(ze)&&nt!==void 0&&!r.hasOwnProperty(ze)&&Sf(e,n,ze,void 0,r,nt);for(ct in r)nt=r[ct],st=a[ct],!r.hasOwnProperty(ct)||nt===st||nt===void 0&&st===void 0||Sf(e,n,ct,nt,r,st);return}}for(var q in a)nt=a[q],a.hasOwnProperty(q)&&nt!=null&&!r.hasOwnProperty(q)&&Ie(e,n,q,null,r,nt);for(gt in r)nt=r[gt],st=a[gt],!r.hasOwnProperty(gt)||nt===st||nt==null&&st==null||Ie(e,n,gt,nt,r,st)}var yf=null,Mf=null;function Bl(e){return e.nodeType===9?e:e.ownerDocument}function yg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Mg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Ef(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Tf=null;function lx(){var e=window.event;return e&&e.type==="popstate"?e===Tf?!1:(Tf=e,!0):(Tf=null,!1)}var Eg=typeof setTimeout=="function"?setTimeout:void 0,cx=typeof clearTimeout=="function"?clearTimeout:void 0,Tg=typeof Promise=="function"?Promise:void 0,ux=typeof queueMicrotask=="function"?queueMicrotask:typeof Tg<"u"?function(e){return Tg.resolve(null).then(e).catch(fx)}:Eg;function fx(e){setTimeout(function(){throw e})}function wa(e){return e==="head"}function bg(e,n){var a=n,r=0,c=0;do{var f=a.nextSibling;if(e.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<r&&8>r){a=r;var y=e.ownerDocument;if(a&1&&mo(y.documentElement),a&2&&mo(y.body),a&4)for(a=y.head,mo(a),y=a.firstChild;y;){var b=y.nextSibling,B=y.nodeName;y[ca]||B==="SCRIPT"||B==="STYLE"||B==="LINK"&&y.rel.toLowerCase()==="stylesheet"||a.removeChild(y),y=b}}if(c===0){e.removeChild(f),Eo(n);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:r=a.charCodeAt(0)-48;else r=0;a=f}while(a);Eo(n)}function bf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":bf(a),ua(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function hx(e,n,a,r){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[ca])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=pi(e.nextSibling),e===null)break}return null}function dx(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=pi(e.nextSibling),e===null))return null;return e}function Af(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function px(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function pi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Rf=null;function Ag(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function Rg(e,n,a){switch(n=Bl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function mo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);ua(e)}var ui=new Map,Cg=new Set;function Fl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Qi=j.d;j.d={f:mx,r:gx,D:_x,C:vx,L:xx,m:Sx,X:Mx,S:yx,M:Ex};function mx(){var e=Qi.f(),n=Dl();return e||n}function gx(e){var n=Oi(e);n!==null&&n.tag===5&&n.type==="form"?jp(n):Qi.r(e)}var nr=typeof document>"u"?null:document;function wg(e,n,a){var r=nr;if(r&&typeof n=="string"&&n){var c=ke(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Cg.has(c)||(Cg.add(c),e={rel:e,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),bn(n,"link",e),en(n),r.head.appendChild(n)))}}function _x(e){Qi.D(e),wg("dns-prefetch",e,null)}function vx(e,n){Qi.C(e,n),wg("preconnect",e,n)}function xx(e,n,a){Qi.L(e,n,a);var r=nr;if(r&&e&&n){var c='link[rel="preload"][as="'+ke(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+ke(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+ke(a.imageSizes)+'"]')):c+='[href="'+ke(e)+'"]';var f=c;switch(n){case"style":f=ir(e);break;case"script":f=ar(e)}ui.has(f)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ui.set(f,e),r.querySelector(c)!==null||n==="style"&&r.querySelector(go(f))||n==="script"&&r.querySelector(_o(f))||(n=r.createElement("link"),bn(n,"link",e),en(n),r.head.appendChild(n)))}}function Sx(e,n){Qi.m(e,n);var a=nr;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+ke(r)+'"][href="'+ke(e)+'"]',f=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ar(e)}if(!ui.has(f)&&(e=_({rel:"modulepreload",href:e},n),ui.set(f,e),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(_o(f)))return}r=a.createElement("link"),bn(r,"link",e),en(r),a.head.appendChild(r)}}}function yx(e,n,a){Qi.S(e,n,a);var r=nr;if(r&&e){var c=fa(r).hoistableStyles,f=ir(e);n=n||"default";var y=c.get(f);if(!y){var b={loading:0,preload:null};if(y=r.querySelector(go(f)))b.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ui.get(f))&&Cf(e,a);var B=y=r.createElement("link");en(B),bn(B,"link",e),B._p=new Promise(function(J,ct){B.onload=J,B.onerror=ct}),B.addEventListener("load",function(){b.loading|=1}),B.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Hl(y,n,r)}y={type:"stylesheet",instance:y,count:1,state:b},c.set(f,y)}}}function Mx(e,n){Qi.X(e,n);var a=nr;if(a&&e){var r=fa(a).hoistableScripts,c=ar(e),f=r.get(c);f||(f=a.querySelector(_o(c)),f||(e=_({src:e,async:!0},n),(n=ui.get(c))&&wf(e,n),f=a.createElement("script"),en(f),bn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function Ex(e,n){Qi.M(e,n);var a=nr;if(a&&e){var r=fa(a).hoistableScripts,c=ar(e),f=r.get(c);f||(f=a.querySelector(_o(c)),f||(e=_({src:e,async:!0,type:"module"},n),(n=ui.get(c))&&wf(e,n),f=a.createElement("script"),en(f),bn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function Dg(e,n,a,r){var c=(c=Et.current)?Fl(c):null;if(!c)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ir(a.href),a=fa(c).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ir(a.href);var f=fa(c).hoistableStyles,y=f.get(e);if(y||(c=c.ownerDocument||c,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,y),(f=c.querySelector(go(e)))&&!f._p&&(y.instance=f,y.state.loading=5),ui.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ui.set(e,a),f||Tx(c,e,a,y.state))),n&&r===null)throw Error(s(528,""));return y}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ar(a),a=fa(c).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function ir(e){return'href="'+ke(e)+'"'}function go(e){return'link[rel="stylesheet"]['+e+"]"}function Ug(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function Tx(e,n,a,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),bn(n,"link",a),en(n),e.head.appendChild(n))}function ar(e){return'[src="'+ke(e)+'"]'}function _o(e){return"script[async]"+e}function Lg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+ke(a.href)+'"]');if(r)return n.instance=r,en(r),r;var c=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),en(r),bn(r,"style",c),Hl(r,a.precedence,e),n.instance=r;case"stylesheet":c=ir(a.href);var f=e.querySelector(go(c));if(f)return n.state.loading|=4,n.instance=f,en(f),f;r=Ug(a),(c=ui.get(c))&&Cf(r,c),f=(e.ownerDocument||e).createElement("link"),en(f);var y=f;return y._p=new Promise(function(b,B){y.onload=b,y.onerror=B}),bn(f,"link",r),n.state.loading|=4,Hl(f,a.precedence,e),n.instance=f;case"script":return f=ar(a.src),(c=e.querySelector(_o(f)))?(n.instance=c,en(c),c):(r=a,(c=ui.get(f))&&(r=_({},a),wf(r,c)),e=e.ownerDocument||e,c=e.createElement("script"),en(c),bn(c,"link",r),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Hl(r,a.precedence,e));return n.instance}function Hl(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,f=c,y=0;y<r.length;y++){var b=r[y];if(b.dataset.precedence===n)f=b;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Cf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function wf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Gl=null;function Ng(e,n,a){if(Gl===null){var r=new Map,c=Gl=new Map;c.set(a,r)}else c=Gl,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[ca]||f[rn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var y=f.getAttribute(n)||"";y=e+y;var b=r.get(y);b?b.push(f):r.set(y,[f])}}return r}function Og(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function bx(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Pg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var vo=null;function Ax(){}function Rx(e,n,a){if(vo===null)throw Error(s(475));var r=vo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=ir(a.href),f=e.querySelector(go(c));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(r.count++,r=Vl.bind(r),e.then(r,r)),n.state.loading|=4,n.instance=f,en(f);return}f=e.ownerDocument||e,a=Ug(a),(c=ui.get(c))&&Cf(a,c),f=f.createElement("link"),en(f);var y=f;y._p=new Promise(function(b,B){y.onload=b,y.onerror=B}),bn(f,"link",a),n.instance=f}r.stylesheets===null&&(r.stylesheets=new Map),r.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(r.count++,n=Vl.bind(r),e.addEventListener("load",n),e.addEventListener("error",n))}}function Cx(){if(vo===null)throw Error(s(475));var e=vo;return e.stylesheets&&e.count===0&&Df(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&Df(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Vl(){if(this.count--,this.count===0){if(this.stylesheets)Df(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var kl=null;function Df(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,kl=new Map,n.forEach(wx,e),kl=null,Vl.call(e))}function wx(e,n){if(!(n.state.loading&4)){var a=kl.get(e);if(a)var r=a.get(null);else{a=new Map,kl.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var y=c[f];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),r=y)}r&&a.set(null,r)}c=n.instance,y=c.getAttribute("data-precedence"),f=a.get(y)||r,f===r&&a.set(null,c),a.set(y,c),this.count++,r=Vl.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var xo={$$typeof:D,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function Dx(e,n,a,r,c,f,y,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Tt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tt(0),this.hiddenUpdates=Tt(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function Ig(e,n,a,r,c,f,y,b,B,J,ct,gt){return e=new Dx(e,n,a,y,b,B,J,gt),n=1,f===!0&&(n|=24),f=jn(3,null,null,n),e.current=f,f.stateNode=e,n=uu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},pu(f),e}function zg(e){return e?(e=Ps,e):Ps}function Bg(e,n,a,r,c,f){c=zg(c),r.context===null?r.context=c:r.pendingContext=c,r=ga(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=_a(e,r,n),a!==null&&($n(a,e,n),jr(a,e,n))}function Fg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Uf(e,n){Fg(e,n),(e=e.alternate)&&Fg(e,n)}function Hg(e){if(e.tag===13){var n=Os(e,67108864);n!==null&&$n(n,e,67108864),Uf(e,67108864)}}var Xl=!0;function Ux(e,n,a,r){var c=F.T;F.T=null;var f=j.p;try{j.p=2,Lf(e,n,a,r)}finally{j.p=f,F.T=c}}function Lx(e,n,a,r){var c=F.T;F.T=null;var f=j.p;try{j.p=8,Lf(e,n,a,r)}finally{j.p=f,F.T=c}}function Lf(e,n,a,r){if(Xl){var c=Nf(r);if(c===null)xf(e,n,r,Wl,a),Vg(e,r);else if(Ox(c,e,n,a,r))r.stopPropagation();else if(Vg(e,r),n&4&&-1<Nx.indexOf(e)){for(;c!==null;){var f=Oi(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var y=qt(f.pendingLanes);if(y!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;y;){var B=1<<31-Pt(y);b.entanglements[1]|=B,y&=~B}Ai(f),(Ue&6)===0&&(Cl=pe()+500,fo(0))}}break;case 13:b=Os(f,2),b!==null&&$n(b,f,2),Dl(),Uf(f,2)}if(f=Nf(r),f===null&&xf(e,n,r,Wl,a),f===c)break;c=f}c!==null&&r.stopPropagation()}else xf(e,n,r,null,a)}}function Nf(e){return e=zc(e),Of(e)}var Wl=null;function Of(e){if(Wl=null,e=Ni(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Wl=e,null}function Gg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Vt()){case xe:return 2;case jt:return 8;case ae:case Je:return 32;case P:return 268435456;default:return 32}default:return 32}}var Pf=!1,Da=null,Ua=null,La=null,So=new Map,yo=new Map,Na=[],Nx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Vg(e,n){switch(e){case"focusin":case"focusout":Da=null;break;case"dragenter":case"dragleave":Ua=null;break;case"mouseover":case"mouseout":La=null;break;case"pointerover":case"pointerout":So.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":yo.delete(n.pointerId)}}function Mo(e,n,a,r,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Oi(n),n!==null&&Hg(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function Ox(e,n,a,r,c){switch(n){case"focusin":return Da=Mo(Da,e,n,a,r,c),!0;case"dragenter":return Ua=Mo(Ua,e,n,a,r,c),!0;case"mouseover":return La=Mo(La,e,n,a,r,c),!0;case"pointerover":var f=c.pointerId;return So.set(f,Mo(So.get(f)||null,e,n,a,r,c)),!0;case"gotpointercapture":return f=c.pointerId,yo.set(f,Mo(yo.get(f)||null,e,n,a,r,c)),!0}return!1}function kg(e){var n=Ni(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,qn(e.priority,function(){if(a.tag===13){var r=Jn();r=ne(r);var c=Os(a,r);c!==null&&$n(c,a,r),Uf(a,r)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ql(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Nf(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);Ic=r,a.target.dispatchEvent(r),Ic=null}else return n=Oi(a),n!==null&&Hg(n),e.blockedOn=a,!1;n.shift()}return!0}function Xg(e,n,a){ql(e)&&a.delete(n)}function Px(){Pf=!1,Da!==null&&ql(Da)&&(Da=null),Ua!==null&&ql(Ua)&&(Ua=null),La!==null&&ql(La)&&(La=null),So.forEach(Xg),yo.forEach(Xg)}function Yl(e,n){e.blockedOn===n&&(e.blockedOn=null,Pf||(Pf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Px)))}var jl=null;function Wg(e){jl!==e&&(jl=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){jl===e&&(jl=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],c=e[n+2];if(typeof r!="function"){if(Of(r||a)===null)continue;break}var f=Oi(a);f!==null&&(e.splice(n,3),n-=3,Nu(f,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function Eo(e){function n(B){return Yl(B,e)}Da!==null&&Yl(Da,e),Ua!==null&&Yl(Ua,e),La!==null&&Yl(La,e),So.forEach(n),yo.forEach(n);for(var a=0;a<Na.length;a++){var r=Na[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Na.length&&(a=Na[0],a.blockedOn===null);)kg(a),a.blockedOn===null&&Na.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],f=a[r+1],y=c[yn]||null;if(typeof f=="function")y||Wg(a);else if(y){var b=null;if(f&&f.hasAttribute("formAction")){if(c=f,y=f[yn]||null)b=y.formAction;else if(Of(c)!==null)continue}else b=y.action;typeof b=="function"?a[r+1]=b:(a.splice(r,3),r-=3),Wg(a)}}}function If(e){this._internalRoot=e}Zl.prototype.render=If.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=Jn();Bg(a,r,e,n,null,null)},Zl.prototype.unmount=If.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Bg(e.current,2,null,e,null,null),Dl(),n[On]=null}};function Zl(e){this._internalRoot=e}Zl.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ee();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Na.length&&n!==0&&n<Na[a].priority;a++);Na.splice(a,0,e),a===0&&kg(e)}};var qg=t.version;if(qg!=="19.1.0")throw Error(s(527,qg,"19.1.0"));j.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=m(n),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var Ix={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kl.isDisabled&&Kl.supportsFiber)try{ft=Kl.inject(Ix),dt=Kl}catch{}}return bo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",c=lm,f=cm,y=um,b=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(b=n.unstable_transitionCallbacks)),n=Ig(e,1,!1,null,null,a,r,c,f,y,b,null),e[On]=n.current,vf(e),new If(n)},bo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,c="",f=lm,y=cm,b=um,B=null,J=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(B=a.unstable_transitionCallbacks),a.formState!==void 0&&(J=a.formState)),n=Ig(e,1,!0,n,a??null,r,c,f,y,b,B,J),n.context=zg(null),a=n.current,r=Jn(),r=ne(r),c=ga(r),c.callback=null,_a(a,c,r),a=r,n.current.lanes=a,zt(n,a),Ai(n),e[On]=n.current,vf(e),new Zl(n)},bo.version="19.1.0",bo}var n_;function qx(){if(n_)return Ff.exports;n_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Ff.exports=Wx(),Ff.exports}var Yx=qx();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ld="178",yr={ROTATE:0,DOLLY:1,PAN:2},xr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},jx=0,i_=1,Zx=2,a0=1,Kx=2,aa=3,Wa=0,Xn=1,sa=2,ka=0,Mr=1,a_=2,s_=3,r_=4,Qx=5,Ss=100,Jx=101,$x=102,tS=103,eS=104,nS=200,iS=201,aS=202,sS=203,yh=204,Mh=205,rS=206,oS=207,lS=208,cS=209,uS=210,fS=211,hS=212,dS=213,pS=214,Eh=0,Th=1,bh=2,br=3,Ah=4,Rh=5,Ch=6,wh=7,s0=0,mS=1,gS=2,Xa=0,_S=1,vS=2,xS=3,SS=4,yS=5,MS=6,ES=7,r0=300,Ar=301,Rr=302,Dh=303,Uh=304,Uc=306,Lh=1e3,Ms=1001,Nh=1002,Si=1003,TS=1004,Ql=1005,Ci=1006,kf=1007,Es=1008,Ui=1009,o0=1010,l0=1011,Lo=1012,cd=1013,Ts=1014,ra=1015,Io=1016,ud=1017,fd=1018,No=1020,c0=35902,u0=1021,f0=1022,xi=1023,Oo=1026,Po=1027,h0=1028,hd=1029,d0=1030,dd=1031,pd=1033,Sc=33776,yc=33777,Mc=33778,Ec=33779,Oh=35840,Ph=35841,Ih=35842,zh=35843,Bh=36196,Fh=37492,Hh=37496,Gh=37808,Vh=37809,kh=37810,Xh=37811,Wh=37812,qh=37813,Yh=37814,jh=37815,Zh=37816,Kh=37817,Qh=37818,Jh=37819,$h=37820,td=37821,Tc=36492,ed=36494,nd=36495,p0=36283,id=36284,ad=36285,sd=36286,bS=3200,AS=3201,m0=0,RS=1,Va="",Vn="srgb",Cr="srgb-linear",Rc="linear",Be="srgb",sr=7680,o_=519,CS=512,wS=513,DS=514,g0=515,US=516,LS=517,NS=518,OS=519,l_=35044,c_="300 es",oa=2e3,Cc=2001;class Rs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,t);t.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bc=Math.PI/180,wc=180/Math.PI;function zo(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(wn[o&255]+wn[o>>8&255]+wn[o>>16&255]+wn[o>>24&255]+"-"+wn[t&255]+wn[t>>8&255]+"-"+wn[t>>16&15|64]+wn[t>>24&255]+"-"+wn[i&63|128]+wn[i>>8&255]+"-"+wn[i>>16&255]+wn[i>>24&255]+wn[s&255]+wn[s>>8&255]+wn[s>>16&255]+wn[s>>24&255]).toLowerCase()}function _e(o,t,i){return Math.max(t,Math.min(i,o))}function PS(o,t){return(o%t+t)%t}function Xf(o,t,i){return(1-i)*o+i*t}function Ao(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Fn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const IS={DEG2RAD:bc};class se{constructor(t=0,i=0){se.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=_e(this.x,t.x,i.x),this.y=_e(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=_e(this.x,t,i),this.y=_e(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_e(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(_e(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-t.x,h=this.y-t.y;return this.x=u*s-h*l+t.x,this.y=u*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class bs{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,u,h,d){let m=s[l+0],p=s[l+1],_=s[l+2],v=s[l+3];const S=u[h+0],M=u[h+1],T=u[h+2],w=u[h+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=_,t[i+3]=v;return}if(d===1){t[i+0]=S,t[i+1]=M,t[i+2]=T,t[i+3]=w;return}if(v!==w||m!==S||p!==M||_!==T){let x=1-d;const g=m*S+p*M+_*T+v*w,L=g>=0?1:-1,D=1-g*g;if(D>Number.EPSILON){const I=Math.sqrt(D),z=Math.atan2(I,g*L);x=Math.sin(x*z)/I,d=Math.sin(d*z)/I}const C=d*L;if(m=m*x+S*C,p=p*x+M*C,_=_*x+T*C,v=v*x+w*C,x===1-d){const I=1/Math.sqrt(m*m+p*p+_*_+v*v);m*=I,p*=I,_*=I,v*=I}}t[i]=m,t[i+1]=p,t[i+2]=_,t[i+3]=v}static multiplyQuaternionsFlat(t,i,s,l,u,h){const d=s[l],m=s[l+1],p=s[l+2],_=s[l+3],v=u[h],S=u[h+1],M=u[h+2],T=u[h+3];return t[i]=d*T+_*v+m*M-p*S,t[i+1]=m*T+_*S+p*v-d*M,t[i+2]=p*T+_*M+d*S-m*v,t[i+3]=_*T-d*v-m*S-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,u=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(s/2),_=d(l/2),v=d(u/2),S=m(s/2),M=m(l/2),T=m(u/2);switch(h){case"XYZ":this._x=S*_*v+p*M*T,this._y=p*M*v-S*_*T,this._z=p*_*T+S*M*v,this._w=p*_*v-S*M*T;break;case"YXZ":this._x=S*_*v+p*M*T,this._y=p*M*v-S*_*T,this._z=p*_*T-S*M*v,this._w=p*_*v+S*M*T;break;case"ZXY":this._x=S*_*v-p*M*T,this._y=p*M*v+S*_*T,this._z=p*_*T+S*M*v,this._w=p*_*v-S*M*T;break;case"ZYX":this._x=S*_*v-p*M*T,this._y=p*M*v+S*_*T,this._z=p*_*T-S*M*v,this._w=p*_*v+S*M*T;break;case"YZX":this._x=S*_*v+p*M*T,this._y=p*M*v+S*_*T,this._z=p*_*T-S*M*v,this._w=p*_*v-S*M*T;break;case"XZY":this._x=S*_*v-p*M*T,this._y=p*M*v-S*_*T,this._z=p*_*T+S*M*v,this._w=p*_*v+S*M*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],_=i[6],v=i[10],S=s+d+v;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(_-m)*M,this._y=(u-p)*M,this._z=(h-l)*M}else if(s>d&&s>v){const M=2*Math.sqrt(1+s-d-v);this._w=(_-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(u+p)/M}else if(d>v){const M=2*Math.sqrt(1+d-s-v);this._w=(u-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+_)/M}else{const M=2*Math.sqrt(1+v-s-d);this._w=(h-l)/M,this._x=(u+p)/M,this._y=(m+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,u=t._z,h=t._w,d=i._x,m=i._y,p=i._z,_=i._w;return this._x=s*_+h*d+l*p-u*m,this._y=l*_+h*m+u*d-s*p,this._z=u*_+h*p+s*m-l*d,this._w=h*_-s*d-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,u=this._z,h=this._w;let d=h*t._w+s*t._x+l*t._y+u*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=s,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*s+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),_=Math.atan2(p,d),v=Math.sin((1-i)*_)/p,S=Math.sin(i*_)/p;return this._w=h*v+this._w*S,this._x=s*v+this._x*S,this._y=l*v+this._y*S,this._z=u*v+this._z*S,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class it{constructor(t=0,i=0,s=0){it.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(u_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(u_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=t.elements,h=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,u=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*s),_=2*(d*i-u*l),v=2*(u*s-h*i);return this.x=i+m*p+h*v-d*_,this.y=s+m*_+d*p-u*v,this.z=l+m*v+u*_-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=_e(this.x,t.x,i.x),this.y=_e(this.y,t.y,i.y),this.z=_e(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=_e(this.x,t,i),this.y=_e(this.y,t,i),this.z=_e(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_e(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,u=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-s*m,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Wf.copy(this).projectOnVector(t),this.sub(Wf)}reflect(t){return this.sub(Wf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(_e(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wf=new it,u_=new bs;class oe{constructor(t,i,s,l,u,h,d,m,p){oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,h,d,m,p)}set(t,i,s,l,u,h,d,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=d,_[3]=i,_[4]=u,_[5]=m,_[6]=s,_[7]=h,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],_=s[4],v=s[7],S=s[2],M=s[5],T=s[8],w=l[0],x=l[3],g=l[6],L=l[1],D=l[4],C=l[7],I=l[2],z=l[5],O=l[8];return u[0]=h*w+d*L+m*I,u[3]=h*x+d*D+m*z,u[6]=h*g+d*C+m*O,u[1]=p*w+_*L+v*I,u[4]=p*x+_*D+v*z,u[7]=p*g+_*C+v*O,u[2]=S*w+M*L+T*I,u[5]=S*x+M*D+T*z,u[8]=S*g+M*C+T*O,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8];return i*h*_-i*d*p-s*u*_+s*d*m+l*u*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8],v=_*h-d*p,S=d*m-_*u,M=p*u-h*m,T=i*v+s*S+l*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/T;return t[0]=v*w,t[1]=(l*p-_*s)*w,t[2]=(d*s-l*h)*w,t[3]=S*w,t[4]=(_*i-l*m)*w,t[5]=(l*u-d*i)*w,t[6]=M*w,t[7]=(s*m-p*i)*w,t[8]=(h*i-s*u)*w,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(s*m,s*p,-s*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(qf.makeScale(t,i)),this}rotate(t){return this.premultiply(qf.makeRotation(-t)),this}translate(t,i){return this.premultiply(qf.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const qf=new oe;function _0(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Dc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function zS(){const o=Dc("canvas");return o.style.display="block",o}const f_={};function Er(o){o in f_||(f_[o]=!0,console.warn(o))}function BS(o,t,i){return new Promise(function(s,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}function FS(o){const t=o.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function HS(o){const t=o.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const h_=new oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),d_=new oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function GS(){const o={enabled:!0,workingColorSpace:Cr,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Be&&(l.r=la(l.r),l.g=la(l.g),l.b=la(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Be&&(l.r=Tr(l.r),l.g=Tr(l.g),l.b=Tr(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Va?Rc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Er("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Er("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Cr]:{primaries:t,whitePoint:s,transfer:Rc,toXYZ:h_,fromXYZ:d_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Vn},outputColorSpaceConfig:{drawingBufferColorSpace:Vn}},[Vn]:{primaries:t,whitePoint:s,transfer:Be,toXYZ:h_,fromXYZ:d_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Vn}}}),o}const be=GS();function la(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Tr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let rr;class VS{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{rr===void 0&&(rr=Dc("canvas")),rr.width=t.width,rr.height=t.height;const l=rr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=rr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Dc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=la(u[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(la(i[s]/255)*255):i[s]=la(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let kS=0;class md{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kS++}),this.uuid=zo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(Yf(l[h].image)):u.push(Yf(l[h]))}else u=Yf(l);s.url=u}return i||(t.images[this.uuid]=s),s}}function Yf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?VS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let XS=0;const jf=new it;class Wn extends Rs{constructor(t=Wn.DEFAULT_IMAGE,i=Wn.DEFAULT_MAPPING,s=Ms,l=Ms,u=Ci,h=Es,d=xi,m=Ui,p=Wn.DEFAULT_ANISOTROPY,_=Va){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:XS++}),this.uuid=zo(),this.name="",this.source=new md(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(jf).x}get height(){return this.source.getSize(jf).y}get depth(){return this.source.getSize(jf).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==r0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Lh:t.x=t.x-Math.floor(t.x);break;case Ms:t.x=t.x<0?0:1;break;case Nh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Lh:t.y=t.y-Math.floor(t.y);break;case Ms:t.y=t.y<0?0:1;break;case Nh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=r0;Wn.DEFAULT_ANISOTROPY=1;class Ke{constructor(t=0,i=0,s=0,l=1){Ke.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,u;const m=t.elements,p=m[0],_=m[4],v=m[8],S=m[1],M=m[5],T=m[9],w=m[2],x=m[6],g=m[10];if(Math.abs(_-S)<.01&&Math.abs(v-w)<.01&&Math.abs(T-x)<.01){if(Math.abs(_+S)<.1&&Math.abs(v+w)<.1&&Math.abs(T+x)<.1&&Math.abs(p+M+g-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const D=(p+1)/2,C=(M+1)/2,I=(g+1)/2,z=(_+S)/4,O=(v+w)/4,X=(T+x)/4;return D>C&&D>I?D<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(D),l=z/s,u=O/s):C>I?C<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(C),s=z/l,u=X/l):I<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(I),s=O/u,l=X/u),this.set(s,l,u,i),this}let L=Math.sqrt((x-T)*(x-T)+(v-w)*(v-w)+(S-_)*(S-_));return Math.abs(L)<.001&&(L=1),this.x=(x-T)/L,this.y=(v-w)/L,this.z=(S-_)/L,this.w=Math.acos((p+M+g-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=_e(this.x,t.x,i.x),this.y=_e(this.y,t.y,i.y),this.z=_e(this.z,t.z,i.z),this.w=_e(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=_e(this.x,t,i),this.y=_e(this.y,t,i),this.z=_e(this.z,t,i),this.w=_e(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_e(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class WS extends Rs{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ci,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new Ke(0,0,t,i),this.scissorTest=!1,this.viewport=new Ke(0,0,t,i);const l={width:t,height:i,depth:s.depth},u=new Wn(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Ci,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new md(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class As extends WS{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class v0 extends Wn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Si,this.minFilter=Si,this.wrapR=Ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class qS extends Wn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Si,this.minFilter=Si,this.wrapR=Ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bo{constructor(t=new it(1/0,1/0,1/0),i=new it(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(mi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(mi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=mi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,mi):mi.fromBufferAttribute(u,h),mi.applyMatrix4(t.matrixWorld),this.expandByPoint(mi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Jl.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Jl.copy(s.boundingBox)),Jl.applyMatrix4(t.matrixWorld),this.union(Jl)}const l=t.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,mi),mi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ro),$l.subVectors(this.max,Ro),or.subVectors(t.a,Ro),lr.subVectors(t.b,Ro),cr.subVectors(t.c,Ro),Pa.subVectors(lr,or),Ia.subVectors(cr,lr),ds.subVectors(or,cr);let i=[0,-Pa.z,Pa.y,0,-Ia.z,Ia.y,0,-ds.z,ds.y,Pa.z,0,-Pa.x,Ia.z,0,-Ia.x,ds.z,0,-ds.x,-Pa.y,Pa.x,0,-Ia.y,Ia.x,0,-ds.y,ds.x,0];return!Zf(i,or,lr,cr,$l)||(i=[1,0,0,0,1,0,0,0,1],!Zf(i,or,lr,cr,$l))?!1:(tc.crossVectors(Pa,Ia),i=[tc.x,tc.y,tc.z],Zf(i,or,lr,cr,$l))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,mi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(mi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ji),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ji=[new it,new it,new it,new it,new it,new it,new it,new it],mi=new it,Jl=new Bo,or=new it,lr=new it,cr=new it,Pa=new it,Ia=new it,ds=new it,Ro=new it,$l=new it,tc=new it,ps=new it;function Zf(o,t,i,s,l){for(let u=0,h=o.length-3;u<=h;u+=3){ps.fromArray(o,u);const d=l.x*Math.abs(ps.x)+l.y*Math.abs(ps.y)+l.z*Math.abs(ps.z),m=t.dot(ps),p=i.dot(ps),_=s.dot(ps);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const YS=new Bo,Co=new it,Kf=new it;class gd{constructor(t=new it,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):YS.setFromPoints(t).getCenter(s);let l=0;for(let u=0,h=t.length;u<h;u++)l=Math.max(l,s.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Co.subVectors(t,this.center);const i=Co.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Co,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Kf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Co.copy(t.center).add(Kf)),this.expandByPoint(Co.copy(t.center).sub(Kf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const $i=new it,Qf=new it,ec=new it,za=new it,Jf=new it,nc=new it,$f=new it;class x0{constructor(t=new it,i=new it(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,$i)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=$i.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):($i.copy(this.origin).addScaledVector(this.direction,i),$i.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Qf.copy(t).add(i).multiplyScalar(.5),ec.copy(i).sub(t).normalize(),za.copy(this.origin).sub(Qf);const u=t.distanceTo(i)*.5,h=-this.direction.dot(ec),d=za.dot(this.direction),m=-za.dot(ec),p=za.lengthSq(),_=Math.abs(1-h*h);let v,S,M,T;if(_>0)if(v=h*m-d,S=h*d-m,T=u*_,v>=0)if(S>=-T)if(S<=T){const w=1/_;v*=w,S*=w,M=v*(v+h*S+2*d)+S*(h*v+S+2*m)+p}else S=u,v=Math.max(0,-(h*S+d)),M=-v*v+S*(S+2*m)+p;else S=-u,v=Math.max(0,-(h*S+d)),M=-v*v+S*(S+2*m)+p;else S<=-T?(v=Math.max(0,-(-h*u+d)),S=v>0?-u:Math.min(Math.max(-u,-m),u),M=-v*v+S*(S+2*m)+p):S<=T?(v=0,S=Math.min(Math.max(-u,-m),u),M=S*(S+2*m)+p):(v=Math.max(0,-(h*u+d)),S=v>0?u:Math.min(Math.max(-u,-m),u),M=-v*v+S*(S+2*m)+p);else S=h>0?-u:u,v=Math.max(0,-(h*S+d)),M=-v*v+S*(S+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Qf).addScaledVector(ec,S),M}intersectSphere(t,i){$i.subVectors(t.center,this.origin);const s=$i.dot(this.direction),l=$i.dot($i)-s*s,u=t.radius*t.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,u,h,d,m;const p=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,S=this.origin;return p>=0?(s=(t.min.x-S.x)*p,l=(t.max.x-S.x)*p):(s=(t.max.x-S.x)*p,l=(t.min.x-S.x)*p),_>=0?(u=(t.min.y-S.y)*_,h=(t.max.y-S.y)*_):(u=(t.max.y-S.y)*_,h=(t.min.y-S.y)*_),s>h||u>l||((u>s||isNaN(s))&&(s=u),(h<l||isNaN(l))&&(l=h),v>=0?(d=(t.min.z-S.z)*v,m=(t.max.z-S.z)*v):(d=(t.max.z-S.z)*v,m=(t.min.z-S.z)*v),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,$i)!==null}intersectTriangle(t,i,s,l,u){Jf.subVectors(i,t),nc.subVectors(s,t),$f.crossVectors(Jf,nc);let h=this.direction.dot($f),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;za.subVectors(this.origin,t);const m=d*this.direction.dot(nc.crossVectors(za,nc));if(m<0)return null;const p=d*this.direction.dot(Jf.cross(za));if(p<0||m+p>h)return null;const _=-d*za.dot($f);return _<0?null:this.at(_/h,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qe{constructor(t,i,s,l,u,h,d,m,p,_,v,S,M,T,w,x){Qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,h,d,m,p,_,v,S,M,T,w,x)}set(t,i,s,l,u,h,d,m,p,_,v,S,M,T,w,x){const g=this.elements;return g[0]=t,g[4]=i,g[8]=s,g[12]=l,g[1]=u,g[5]=h,g[9]=d,g[13]=m,g[2]=p,g[6]=_,g[10]=v,g[14]=S,g[3]=M,g[7]=T,g[11]=w,g[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/ur.setFromMatrixColumn(t,0).length(),u=1/ur.setFromMatrixColumn(t,1).length(),h=1/ur.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,u=t.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),_=Math.cos(u),v=Math.sin(u);if(t.order==="XYZ"){const S=h*_,M=h*v,T=d*_,w=d*v;i[0]=m*_,i[4]=-m*v,i[8]=p,i[1]=M+T*p,i[5]=S-w*p,i[9]=-d*m,i[2]=w-S*p,i[6]=T+M*p,i[10]=h*m}else if(t.order==="YXZ"){const S=m*_,M=m*v,T=p*_,w=p*v;i[0]=S+w*d,i[4]=T*d-M,i[8]=h*p,i[1]=h*v,i[5]=h*_,i[9]=-d,i[2]=M*d-T,i[6]=w+S*d,i[10]=h*m}else if(t.order==="ZXY"){const S=m*_,M=m*v,T=p*_,w=p*v;i[0]=S-w*d,i[4]=-h*v,i[8]=T+M*d,i[1]=M+T*d,i[5]=h*_,i[9]=w-S*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const S=h*_,M=h*v,T=d*_,w=d*v;i[0]=m*_,i[4]=T*p-M,i[8]=S*p+w,i[1]=m*v,i[5]=w*p+S,i[9]=M*p-T,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const S=h*m,M=h*p,T=d*m,w=d*p;i[0]=m*_,i[4]=w-S*v,i[8]=T*v+M,i[1]=v,i[5]=h*_,i[9]=-d*_,i[2]=-p*_,i[6]=M*v+T,i[10]=S-w*v}else if(t.order==="XZY"){const S=h*m,M=h*p,T=d*m,w=d*p;i[0]=m*_,i[4]=-v,i[8]=p*_,i[1]=S*v+w,i[5]=h*_,i[9]=M*v-T,i[2]=T*v-M,i[6]=d*_,i[10]=w*v+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(jS,t,ZS)}lookAt(t,i,s){const l=this.elements;return ti.subVectors(t,i),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),Ba.crossVectors(s,ti),Ba.lengthSq()===0&&(Math.abs(s.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),Ba.crossVectors(s,ti)),Ba.normalize(),ic.crossVectors(ti,Ba),l[0]=Ba.x,l[4]=ic.x,l[8]=ti.x,l[1]=Ba.y,l[5]=ic.y,l[9]=ti.y,l[2]=Ba.z,l[6]=ic.z,l[10]=ti.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],_=s[1],v=s[5],S=s[9],M=s[13],T=s[2],w=s[6],x=s[10],g=s[14],L=s[3],D=s[7],C=s[11],I=s[15],z=l[0],O=l[4],X=l[8],U=l[12],A=l[1],H=l[5],tt=l[9],at=l[13],pt=l[2],ut=l[6],F=l[10],j=l[14],W=l[3],St=l[7],N=l[11],$=l[15];return u[0]=h*z+d*A+m*pt+p*W,u[4]=h*O+d*H+m*ut+p*St,u[8]=h*X+d*tt+m*F+p*N,u[12]=h*U+d*at+m*j+p*$,u[1]=_*z+v*A+S*pt+M*W,u[5]=_*O+v*H+S*ut+M*St,u[9]=_*X+v*tt+S*F+M*N,u[13]=_*U+v*at+S*j+M*$,u[2]=T*z+w*A+x*pt+g*W,u[6]=T*O+w*H+x*ut+g*St,u[10]=T*X+w*tt+x*F+g*N,u[14]=T*U+w*at+x*j+g*$,u[3]=L*z+D*A+C*pt+I*W,u[7]=L*O+D*H+C*ut+I*St,u[11]=L*X+D*tt+C*F+I*N,u[15]=L*U+D*at+C*j+I*$,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],u=t[12],h=t[1],d=t[5],m=t[9],p=t[13],_=t[2],v=t[6],S=t[10],M=t[14],T=t[3],w=t[7],x=t[11],g=t[15];return T*(+u*m*v-l*p*v-u*d*S+s*p*S+l*d*M-s*m*M)+w*(+i*m*M-i*p*S+u*h*S-l*h*M+l*p*_-u*m*_)+x*(+i*p*v-i*d*M-u*h*v+s*h*M+u*d*_-s*p*_)+g*(-l*d*_-i*m*v+i*d*S+l*h*v-s*h*S+s*m*_)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8],v=t[9],S=t[10],M=t[11],T=t[12],w=t[13],x=t[14],g=t[15],L=v*x*p-w*S*p+w*m*M-d*x*M-v*m*g+d*S*g,D=T*S*p-_*x*p-T*m*M+h*x*M+_*m*g-h*S*g,C=_*w*p-T*v*p+T*d*M-h*w*M-_*d*g+h*v*g,I=T*v*m-_*w*m-T*d*S+h*w*S+_*d*x-h*v*x,z=i*L+s*D+l*C+u*I;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/z;return t[0]=L*O,t[1]=(w*S*u-v*x*u-w*l*M+s*x*M+v*l*g-s*S*g)*O,t[2]=(d*x*u-w*m*u+w*l*p-s*x*p-d*l*g+s*m*g)*O,t[3]=(v*m*u-d*S*u-v*l*p+s*S*p+d*l*M-s*m*M)*O,t[4]=D*O,t[5]=(_*x*u-T*S*u+T*l*M-i*x*M-_*l*g+i*S*g)*O,t[6]=(T*m*u-h*x*u-T*l*p+i*x*p+h*l*g-i*m*g)*O,t[7]=(h*S*u-_*m*u+_*l*p-i*S*p-h*l*M+i*m*M)*O,t[8]=C*O,t[9]=(T*v*u-_*w*u-T*s*M+i*w*M+_*s*g-i*v*g)*O,t[10]=(h*w*u-T*d*u+T*s*p-i*w*p-h*s*g+i*d*g)*O,t[11]=(_*d*u-h*v*u-_*s*p+i*v*p+h*s*M-i*d*M)*O,t[12]=I*O,t[13]=(_*w*l-T*v*l+T*s*S-i*w*S-_*s*x+i*v*x)*O,t[14]=(T*d*l-h*w*l-T*s*m+i*w*m+h*s*x-i*d*x)*O,t[15]=(h*v*l-_*d*l+_*s*m-i*v*m-h*s*S+i*d*S)*O,this}scale(t){const i=this.elements,s=t.x,l=t.y,u=t.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,h=t.x,d=t.y,m=t.z,p=u*h,_=u*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+s,_*m-l*h,0,p*m-l*d,_*m+l*h,u*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,u,h){return this.set(1,s,u,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,_=h+h,v=d+d,S=u*p,M=u*_,T=u*v,w=h*_,x=h*v,g=d*v,L=m*p,D=m*_,C=m*v,I=s.x,z=s.y,O=s.z;return l[0]=(1-(w+g))*I,l[1]=(M+C)*I,l[2]=(T-D)*I,l[3]=0,l[4]=(M-C)*z,l[5]=(1-(S+g))*z,l[6]=(x+L)*z,l[7]=0,l[8]=(T+D)*O,l[9]=(x-L)*O,l[10]=(1-(S+w))*O,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let u=ur.set(l[0],l[1],l[2]).length();const h=ur.set(l[4],l[5],l[6]).length(),d=ur.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],gi.copy(this);const p=1/u,_=1/h,v=1/d;return gi.elements[0]*=p,gi.elements[1]*=p,gi.elements[2]*=p,gi.elements[4]*=_,gi.elements[5]*=_,gi.elements[6]*=_,gi.elements[8]*=v,gi.elements[9]*=v,gi.elements[10]*=v,i.setFromRotationMatrix(gi),s.x=u,s.y=h,s.z=d,this}makePerspective(t,i,s,l,u,h,d=oa){const m=this.elements,p=2*u/(i-t),_=2*u/(s-l),v=(i+t)/(i-t),S=(s+l)/(s-l);let M,T;if(d===oa)M=-(h+u)/(h-u),T=-2*h*u/(h-u);else if(d===Cc)M=-h/(h-u),T=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=_,m[9]=S,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=T,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,s,l,u,h,d=oa){const m=this.elements,p=1/(i-t),_=1/(s-l),v=1/(h-u),S=(i+t)*p,M=(s+l)*_;let T,w;if(d===oa)T=(h+u)*v,w=-2*v;else if(d===Cc)T=u*v,w=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-S,m[1]=0,m[5]=2*_,m[9]=0,m[13]=-M,m[2]=0,m[6]=0,m[10]=w,m[14]=-T,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const ur=new it,gi=new Qe,jS=new it(0,0,0),ZS=new it(1,1,1),Ba=new it,ic=new it,ti=new it,p_=new Qe,m_=new bs;class Li{constructor(t=0,i=0,s=0,l=Li.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],_=l[9],v=l[2],S=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(_e(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(_e(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-_e(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(_e(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-_e(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-_,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return p_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(p_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return m_.setFromEuler(this),this.setFromQuaternion(m_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Li.DEFAULT_ORDER="XYZ";class S0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let KS=0;const g_=new it,fr=new bs,ta=new Qe,ac=new it,wo=new it,QS=new it,JS=new bs,__=new it(1,0,0),v_=new it(0,1,0),x_=new it(0,0,1),S_={type:"added"},$S={type:"removed"},hr={type:"childadded",child:null},th={type:"childremoved",child:null};class Un extends Rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:KS++}),this.uuid=zo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Un.DEFAULT_UP.clone();const t=new it,i=new Li,s=new bs,l=new it(1,1,1);function u(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Qe},normalMatrix:{value:new oe}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=Un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new S0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return fr.setFromAxisAngle(t,i),this.quaternion.multiply(fr),this}rotateOnWorldAxis(t,i){return fr.setFromAxisAngle(t,i),this.quaternion.premultiply(fr),this}rotateX(t){return this.rotateOnAxis(__,t)}rotateY(t){return this.rotateOnAxis(v_,t)}rotateZ(t){return this.rotateOnAxis(x_,t)}translateOnAxis(t,i){return g_.copy(t).applyQuaternion(this.quaternion),this.position.add(g_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(__,t)}translateY(t){return this.translateOnAxis(v_,t)}translateZ(t){return this.translateOnAxis(x_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ta.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?ac.copy(t):ac.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ta.lookAt(wo,ac,this.up):ta.lookAt(ac,wo,this.up),this.quaternion.setFromRotationMatrix(ta),l&&(ta.extractRotation(l.matrixWorld),fr.setFromRotationMatrix(ta),this.quaternion.premultiply(fr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(S_),hr.child=t,this.dispatchEvent(hr),hr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent($S),th.child=t,this.dispatchEvent(th),th.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ta.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ta.multiply(t.parent.matrixWorld)),t.applyMatrix4(ta),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(S_),hr.child=t,this.dispatchEvent(hr),hr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,t,QS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,JS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const v=m[p];u(t.shapes,v)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(t.materials,this.material[m]));l.material=d}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),_=h(t.images),v=h(t.shapes),S=h(t.skeletons),M=h(t.animations),T=h(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),v.length>0&&(s.shapes=v),S.length>0&&(s.skeletons=S),M.length>0&&(s.animations=M),T.length>0&&(s.nodes=T)}return s.object=l,s;function h(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Un.DEFAULT_UP=new it(0,1,0);Un.DEFAULT_MATRIX_AUTO_UPDATE=!0;Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _i=new it,ea=new it,eh=new it,na=new it,dr=new it,pr=new it,y_=new it,nh=new it,ih=new it,ah=new it,sh=new Ke,rh=new Ke,oh=new Ke;class vi{constructor(t=new it,i=new it,s=new it){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),_i.subVectors(t,i),l.cross(_i);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,s,l,u){_i.subVectors(l,i),ea.subVectors(s,i),eh.subVectors(t,i);const h=_i.dot(_i),d=_i.dot(ea),m=_i.dot(eh),p=ea.dot(ea),_=ea.dot(eh),v=h*p-d*d;if(v===0)return u.set(0,0,0),null;const S=1/v,M=(p*m-d*_)*S,T=(h*_-d*m)*S;return u.set(1-M-T,T,M)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,na)===null?!1:na.x>=0&&na.y>=0&&na.x+na.y<=1}static getInterpolation(t,i,s,l,u,h,d,m){return this.getBarycoord(t,i,s,l,na)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,na.x),m.addScaledVector(h,na.y),m.addScaledVector(d,na.z),m)}static getInterpolatedAttribute(t,i,s,l,u,h){return sh.setScalar(0),rh.setScalar(0),oh.setScalar(0),sh.fromBufferAttribute(t,i),rh.fromBufferAttribute(t,s),oh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(sh,u.x),h.addScaledVector(rh,u.y),h.addScaledVector(oh,u.z),h}static isFrontFacing(t,i,s,l){return _i.subVectors(s,i),ea.subVectors(t,i),_i.cross(ea).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return _i.subVectors(this.c,this.b),ea.subVectors(this.a,this.b),_i.cross(ea).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return vi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return vi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,u){return vi.getInterpolation(t,this.a,this.b,this.c,i,s,l,u)}containsPoint(t){return vi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return vi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,u=this.c;let h,d;dr.subVectors(l,s),pr.subVectors(u,s),nh.subVectors(t,s);const m=dr.dot(nh),p=pr.dot(nh);if(m<=0&&p<=0)return i.copy(s);ih.subVectors(t,l);const _=dr.dot(ih),v=pr.dot(ih);if(_>=0&&v<=_)return i.copy(l);const S=m*v-_*p;if(S<=0&&m>=0&&_<=0)return h=m/(m-_),i.copy(s).addScaledVector(dr,h);ah.subVectors(t,u);const M=dr.dot(ah),T=pr.dot(ah);if(T>=0&&M<=T)return i.copy(u);const w=M*p-m*T;if(w<=0&&p>=0&&T<=0)return d=p/(p-T),i.copy(s).addScaledVector(pr,d);const x=_*T-M*v;if(x<=0&&v-_>=0&&M-T>=0)return y_.subVectors(u,l),d=(v-_)/(v-_+(M-T)),i.copy(l).addScaledVector(y_,d);const g=1/(x+w+S);return h=w*g,d=S*g,i.copy(s).addScaledVector(dr,h).addScaledVector(pr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const y0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fa={h:0,s:0,l:0},sc={h:0,s:0,l:0};function lh(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Ae{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Vn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,be.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=be.workingColorSpace){return this.r=t,this.g=i,this.b=s,be.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=be.workingColorSpace){if(t=PS(t,1),i=_e(i,0,1),s=_e(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,h=2*s-u;this.r=lh(h,u,t+1/3),this.g=lh(h,u,t),this.b=lh(h,u,t-1/3)}return be.colorSpaceToWorking(this,l),this}setStyle(t,i=Vn){function s(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Vn){const s=y0[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=la(t.r),this.g=la(t.g),this.b=la(t.b),this}copyLinearToSRGB(t){return this.r=Tr(t.r),this.g=Tr(t.g),this.b=Tr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Vn){return be.workingToColorSpace(Dn.copy(this),t),Math.round(_e(Dn.r*255,0,255))*65536+Math.round(_e(Dn.g*255,0,255))*256+Math.round(_e(Dn.b*255,0,255))}getHexString(t=Vn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=be.workingColorSpace){be.workingToColorSpace(Dn.copy(this),i);const s=Dn.r,l=Dn.g,u=Dn.b,h=Math.max(s,l,u),d=Math.min(s,l,u);let m,p;const _=(d+h)/2;if(d===h)m=0,p=0;else{const v=h-d;switch(p=_<=.5?v/(h+d):v/(2-h-d),h){case s:m=(l-u)/v+(l<u?6:0);break;case l:m=(u-s)/v+2;break;case u:m=(s-l)/v+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,i=be.workingColorSpace){return be.workingToColorSpace(Dn.copy(this),i),t.r=Dn.r,t.g=Dn.g,t.b=Dn.b,t}getStyle(t=Vn){be.workingToColorSpace(Dn.copy(this),t);const i=Dn.r,s=Dn.g,l=Dn.b;return t!==Vn?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Fa),this.setHSL(Fa.h+t,Fa.s+i,Fa.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Fa),t.getHSL(sc);const s=Xf(Fa.h,sc.h,i),l=Xf(Fa.s,sc.s,i),u=Xf(Fa.l,sc.l,i);return this.setHSL(s,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new Ae;Ae.NAMES=y0;let ty=0;class Fo extends Rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ty++}),this.uuid=zo(),this.name="",this.type="Material",this.blending=Mr,this.side=Wa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yh,this.blendDst=Mh,this.blendEquation=Ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ae(0,0,0),this.blendAlpha=0,this.depthFunc=br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=o_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sr,this.stencilZFail=sr,this.stencilZPass=sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Mr&&(s.blending=this.blending),this.side!==Wa&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==yh&&(s.blendSrc=this.blendSrc),this.blendDst!==Mh&&(s.blendDst=this.blendDst),this.blendEquation!==Ss&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==br&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==o_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==sr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==sr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==sr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(t.textures),h=l(t.images);u.length>0&&(s.textures=u),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class M0 extends Fo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.combine=s0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const sn=new it,rc=new se;let ey=0;class Di{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ey++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=l_,this.updateRanges=[],this.gpuType=ra,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)rc.fromBufferAttribute(this,i),rc.applyMatrix3(t),this.setXY(i,rc.x,rc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)sn.fromBufferAttribute(this,i),sn.applyMatrix3(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)sn.fromBufferAttribute(this,i),sn.applyMatrix4(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)sn.fromBufferAttribute(this,i),sn.applyNormalMatrix(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)sn.fromBufferAttribute(this,i),sn.transformDirection(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Ao(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Fn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Ao(i,this.array)),i}setX(t,i){return this.normalized&&(i=Fn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Ao(i,this.array)),i}setY(t,i){return this.normalized&&(i=Fn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Ao(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Fn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Ao(i,this.array)),i}setW(t,i){return this.normalized&&(i=Fn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Fn(i,this.array),s=Fn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Fn(i,this.array),s=Fn(s,this.array),l=Fn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,u){return t*=this.itemSize,this.normalized&&(i=Fn(i,this.array),s=Fn(s,this.array),l=Fn(l,this.array),u=Fn(u,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==l_&&(t.usage=this.usage),t}}class E0 extends Di{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class T0 extends Di{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class kn extends Di{constructor(t,i,s){super(new Float32Array(t),i,s)}}let ny=0;const fi=new Qe,ch=new Un,mr=new it,ei=new Bo,Do=new Bo,xn=new it;class Ya extends Rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ny++}),this.uuid=zo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(_0(t)?T0:E0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new oe().getNormalMatrix(t);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fi.makeRotationFromQuaternion(t),this.applyMatrix4(fi),this}rotateX(t){return fi.makeRotationX(t),this.applyMatrix4(fi),this}rotateY(t){return fi.makeRotationY(t),this.applyMatrix4(fi),this}rotateZ(t){return fi.makeRotationZ(t),this.applyMatrix4(fi),this}translate(t,i,s){return fi.makeTranslation(t,i,s),this.applyMatrix4(fi),this}scale(t,i,s){return fi.makeScale(t,i,s),this.applyMatrix4(fi),this}lookAt(t){return ch.lookAt(t),ch.updateMatrix(),this.applyMatrix4(ch.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mr).negate(),this.translate(mr.x,mr.y,mr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=t.length;l<u;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new kn(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new it(-1/0,-1/0,-1/0),new it(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];ei.setFromBufferAttribute(u),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gd);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new it,1/0);return}if(t){const s=this.boundingSphere.center;if(ei.setFromBufferAttribute(t),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Do.setFromBufferAttribute(d),this.morphTargetsRelative?(xn.addVectors(ei.min,Do.min),ei.expandByPoint(xn),xn.addVectors(ei.max,Do.max),ei.expandByPoint(xn)):(ei.expandByPoint(Do.min),ei.expandByPoint(Do.max))}ei.getCenter(s);let l=0;for(let u=0,h=t.count;u<h;u++)xn.fromBufferAttribute(t,u),l=Math.max(l,s.distanceToSquared(xn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)xn.fromBufferAttribute(d,p),m&&(mr.fromBufferAttribute(t,p),xn.add(mr)),l=Math.max(l,s.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Di(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let X=0;X<s.count;X++)d[X]=new it,m[X]=new it;const p=new it,_=new it,v=new it,S=new se,M=new se,T=new se,w=new it,x=new it;function g(X,U,A){p.fromBufferAttribute(s,X),_.fromBufferAttribute(s,U),v.fromBufferAttribute(s,A),S.fromBufferAttribute(u,X),M.fromBufferAttribute(u,U),T.fromBufferAttribute(u,A),_.sub(p),v.sub(p),M.sub(S),T.sub(S);const H=1/(M.x*T.y-T.x*M.y);isFinite(H)&&(w.copy(_).multiplyScalar(T.y).addScaledVector(v,-M.y).multiplyScalar(H),x.copy(v).multiplyScalar(M.x).addScaledVector(_,-T.x).multiplyScalar(H),d[X].add(w),d[U].add(w),d[A].add(w),m[X].add(x),m[U].add(x),m[A].add(x))}let L=this.groups;L.length===0&&(L=[{start:0,count:t.count}]);for(let X=0,U=L.length;X<U;++X){const A=L[X],H=A.start,tt=A.count;for(let at=H,pt=H+tt;at<pt;at+=3)g(t.getX(at+0),t.getX(at+1),t.getX(at+2))}const D=new it,C=new it,I=new it,z=new it;function O(X){I.fromBufferAttribute(l,X),z.copy(I);const U=d[X];D.copy(U),D.sub(I.multiplyScalar(I.dot(U))).normalize(),C.crossVectors(z,U);const H=C.dot(m[X])<0?-1:1;h.setXYZW(X,D.x,D.y,D.z,H)}for(let X=0,U=L.length;X<U;++X){const A=L[X],H=A.start,tt=A.count;for(let at=H,pt=H+tt;at<pt;at+=3)O(t.getX(at+0)),O(t.getX(at+1)),O(t.getX(at+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Di(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let S=0,M=s.count;S<M;S++)s.setXYZ(S,0,0,0);const l=new it,u=new it,h=new it,d=new it,m=new it,p=new it,_=new it,v=new it;if(t)for(let S=0,M=t.count;S<M;S+=3){const T=t.getX(S+0),w=t.getX(S+1),x=t.getX(S+2);l.fromBufferAttribute(i,T),u.fromBufferAttribute(i,w),h.fromBufferAttribute(i,x),_.subVectors(h,u),v.subVectors(l,u),_.cross(v),d.fromBufferAttribute(s,T),m.fromBufferAttribute(s,w),p.fromBufferAttribute(s,x),d.add(_),m.add(_),p.add(_),s.setXYZ(T,d.x,d.y,d.z),s.setXYZ(w,m.x,m.y,m.z),s.setXYZ(x,p.x,p.y,p.z)}else for(let S=0,M=i.count;S<M;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),_.subVectors(h,u),v.subVectors(l,u),_.cross(v),s.setXYZ(S+0,_.x,_.y,_.z),s.setXYZ(S+1,_.x,_.y,_.z),s.setXYZ(S+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)xn.fromBufferAttribute(t,i),xn.normalize(),t.setXYZ(i,xn.x,xn.y,xn.z)}toNonIndexed(){function t(d,m){const p=d.array,_=d.itemSize,v=d.normalized,S=new p.constructor(m.length*_);let M=0,T=0;for(let w=0,x=m.length;w<x;w++){d.isInterleavedBufferAttribute?M=m[w]*d.data.stride+d.offset:M=m[w]*_;for(let g=0;g<_;g++)S[T++]=p[M++]}return new Di(S,_,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ya,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let _=0,v=p.length;_<v;_++){const S=p[_],M=t(S,s);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let v=0,S=p.length;v<S;v++){const M=p[v];_.push(M.toJSON(t.data))}_.length>0&&(l[m]=_,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const u=t.morphAttributes;for(const p in u){const _=[],v=u[p];for(let S=0,M=v.length;S<M;S++)_.push(v[S].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,_=h.length;p<_;p++){const v=h[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const M_=new Qe,ms=new x0,oc=new gd,E_=new it,lc=new it,cc=new it,uc=new it,uh=new it,fc=new it,T_=new it,hc=new it;class wi extends Un{constructor(t=new Ya,i=new M0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(u&&d){fc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const _=d[m],v=u[m];_!==0&&(uh.fromBufferAttribute(v,t),h?fc.addScaledVector(uh,_):fc.addScaledVector(uh.sub(i),_))}i.add(fc)}return i}raycast(t,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),oc.copy(s.boundingSphere),oc.applyMatrix4(u),ms.copy(t.ray).recast(t.near),!(oc.containsPoint(ms.origin)===!1&&(ms.intersectSphere(oc,E_)===null||ms.origin.distanceToSquared(E_)>(t.far-t.near)**2))&&(M_.copy(u).invert(),ms.copy(t.ray).applyMatrix4(M_),!(s.boundingBox!==null&&ms.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,ms)))}_computeIntersections(t,i,s){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,_=u.attributes.uv1,v=u.attributes.normal,S=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(h))for(let T=0,w=S.length;T<w;T++){const x=S[T],g=h[x.materialIndex],L=Math.max(x.start,M.start),D=Math.min(d.count,Math.min(x.start+x.count,M.start+M.count));for(let C=L,I=D;C<I;C+=3){const z=d.getX(C),O=d.getX(C+1),X=d.getX(C+2);l=dc(this,g,t,s,p,_,v,z,O,X),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),w=Math.min(d.count,M.start+M.count);for(let x=T,g=w;x<g;x+=3){const L=d.getX(x),D=d.getX(x+1),C=d.getX(x+2);l=dc(this,h,t,s,p,_,v,L,D,C),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let T=0,w=S.length;T<w;T++){const x=S[T],g=h[x.materialIndex],L=Math.max(x.start,M.start),D=Math.min(m.count,Math.min(x.start+x.count,M.start+M.count));for(let C=L,I=D;C<I;C+=3){const z=C,O=C+1,X=C+2;l=dc(this,g,t,s,p,_,v,z,O,X),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),w=Math.min(m.count,M.start+M.count);for(let x=T,g=w;x<g;x+=3){const L=x,D=x+1,C=x+2;l=dc(this,h,t,s,p,_,v,L,D,C),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}}}function iy(o,t,i,s,l,u,h,d){let m;if(t.side===Xn?m=s.intersectTriangle(h,u,l,!0,d):m=s.intersectTriangle(l,u,h,t.side===Wa,d),m===null)return null;hc.copy(d),hc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(hc);return p<i.near||p>i.far?null:{distance:p,point:hc.clone(),object:o}}function dc(o,t,i,s,l,u,h,d,m,p){o.getVertexPosition(d,lc),o.getVertexPosition(m,cc),o.getVertexPosition(p,uc);const _=iy(o,t,i,s,lc,cc,uc,T_);if(_){const v=new it;vi.getBarycoord(T_,lc,cc,uc,v),l&&(_.uv=vi.getInterpolatedAttribute(l,d,m,p,v,new se)),u&&(_.uv1=vi.getInterpolatedAttribute(u,d,m,p,v,new se)),h&&(_.normal=vi.getInterpolatedAttribute(h,d,m,p,v,new it),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const S={a:d,b:m,c:p,normal:new it,materialIndex:0};vi.getNormal(lc,cc,uc,S.normal),_.face=S,_.barycoord=v}return _}class Ho extends Ya{constructor(t=1,i=1,s=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],_=[],v=[];let S=0,M=0;T("z","y","x",-1,-1,s,i,t,h,u,0),T("z","y","x",1,-1,s,i,-t,h,u,1),T("x","z","y",1,1,t,s,i,l,h,2),T("x","z","y",1,-1,t,s,-i,l,h,3),T("x","y","z",1,-1,t,i,s,l,u,4),T("x","y","z",-1,-1,t,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new kn(p,3)),this.setAttribute("normal",new kn(_,3)),this.setAttribute("uv",new kn(v,2));function T(w,x,g,L,D,C,I,z,O,X,U){const A=C/O,H=I/X,tt=C/2,at=I/2,pt=z/2,ut=O+1,F=X+1;let j=0,W=0;const St=new it;for(let N=0;N<F;N++){const $=N*H-at;for(let vt=0;vt<ut;vt++){const xt=vt*A-tt;St[w]=xt*L,St[x]=$*D,St[g]=pt,p.push(St.x,St.y,St.z),St[w]=0,St[x]=0,St[g]=z>0?1:-1,_.push(St.x,St.y,St.z),v.push(vt/O),v.push(1-N/X),j+=1}}for(let N=0;N<X;N++)for(let $=0;$<O;$++){const vt=S+$+ut*N,xt=S+$+ut*(N+1),K=S+($+1)+ut*(N+1),mt=S+($+1)+ut*N;m.push(vt,xt,mt),m.push(xt,K,mt),W+=6}d.addGroup(M,W,U),M+=W,S+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ho(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function wr(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Nn(o){const t={};for(let i=0;i<o.length;i++){const s=wr(o[i]);for(const l in s)t[l]=s[l]}return t}function ay(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function b0(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:be.workingColorSpace}const sy={clone:wr,merge:Nn};var ry=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,oy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qa extends Fo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ry,this.fragmentShader=oy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=wr(t.uniforms),this.uniformsGroups=ay(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class A0 extends Un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=oa}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ha=new it,b_=new se,A_=new se;class ii extends A0{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=wc*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(bc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return wc*2*Math.atan(Math.tan(bc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Ha.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ha.x,Ha.y).multiplyScalar(-t/Ha.z),Ha.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ha.x,Ha.y).multiplyScalar(-t/Ha.z)}getViewSize(t,i){return this.getViewBounds(t,b_,A_),i.subVectors(A_,b_)}setViewOffset(t,i,s,l,u,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(bc*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const gr=-90,_r=1;class ly extends Un{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ii(gr,_r,t,i);l.layers=this.layers,this.add(l);const u=new ii(gr,_r,t,i);u.layers=this.layers,this.add(u);const h=new ii(gr,_r,t,i);h.layers=this.layers,this.add(h);const d=new ii(gr,_r,t,i);d.layers=this.layers,this.add(d);const m=new ii(gr,_r,t,i);m.layers=this.layers,this.add(m);const p=new ii(gr,_r,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(t===oa)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Cc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,_]=this.children,v=t.getRenderTarget(),S=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,u),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=w,t.setRenderTarget(s,5,l),t.render(i,_),t.setRenderTarget(v,S,M),t.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class R0 extends Wn{constructor(t=[],i=Ar,s,l,u,h,d,m,p,_){super(t,i,s,l,u,h,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class cy extends As{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new R0(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Ho(5,5,5),u=new qa({name:"CubemapFromEquirect",uniforms:wr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Xn,blending:ka});u.uniforms.tEquirect.value=i;const h=new wi(l,u),d=i.minFilter;return i.minFilter===Es&&(i.minFilter=Ci),new ly(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const u=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(u)}}class pc extends Un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uy={type:"move"};class fh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new it,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new it),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new it,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new it),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const w of t.hand.values()){const x=i.getJointPose(w,s),g=this._getHandJoint(p,w);x!==null&&(g.matrix.fromArray(x.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=x.radius),g.visible=x!==null}const _=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],S=_.position.distanceTo(v.position),M=.02,T=.005;p.inputState.pinching&&S>M+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&S<=M-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(uy)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new pc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class fy extends Un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Li,this.environmentIntensity=1,this.environmentRotation=new Li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const hh=new it,hy=new it,dy=new oe;class Ga{constructor(t=new it(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=hh.subVectors(s,i).cross(hy.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(hh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(s,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||dy.getNormalMatrix(t),l=this.coplanarPoint(hh).applyMatrix4(t),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gs=new gd,py=new se(.5,.5),mc=new it;class _d{constructor(t=new Ga,i=new Ga,s=new Ga,l=new Ga,u=new Ga,h=new Ga){this.planes=[t,i,s,l,u,h]}set(t,i,s,l,u,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=oa){const s=this.planes,l=t.elements,u=l[0],h=l[1],d=l[2],m=l[3],p=l[4],_=l[5],v=l[6],S=l[7],M=l[8],T=l[9],w=l[10],x=l[11],g=l[12],L=l[13],D=l[14],C=l[15];if(s[0].setComponents(m-u,S-p,x-M,C-g).normalize(),s[1].setComponents(m+u,S+p,x+M,C+g).normalize(),s[2].setComponents(m+h,S+_,x+T,C+L).normalize(),s[3].setComponents(m-h,S-_,x-T,C-L).normalize(),s[4].setComponents(m-d,S-v,x-w,C-D).normalize(),i===oa)s[5].setComponents(m+d,S+v,x+w,C+D).normalize();else if(i===Cc)s[5].setComponents(d,v,w,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),gs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gs)}intersectsSprite(t){gs.center.set(0,0,0);const i=py.distanceTo(t.center);return gs.radius=.7071067811865476+i,gs.applyMatrix4(t.matrixWorld),this.intersectsSphere(gs)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(mc.x=l.normal.x>0?t.max.x:t.min.x,mc.y=l.normal.y>0?t.max.y:t.min.y,mc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(mc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class C0 extends Wn{constructor(t,i,s=Ts,l,u,h,d=Si,m=Si,p,_=Oo,v=1){if(_!==Oo&&_!==Po)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:t,height:i,depth:v};super(S,l,u,h,d,m,_,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new md(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Lc extends Ya{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const u=t/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,_=m+1,v=t/d,S=i/m,M=[],T=[],w=[],x=[];for(let g=0;g<_;g++){const L=g*S-h;for(let D=0;D<p;D++){const C=D*v-u;T.push(C,-L,0),w.push(0,0,1),x.push(D/d),x.push(1-g/m)}}for(let g=0;g<m;g++)for(let L=0;L<d;L++){const D=L+p*g,C=L+p*(g+1),I=L+1+p*(g+1),z=L+1+p*g;M.push(D,C,z),M.push(C,I,z)}this.setIndex(M),this.setAttribute("position",new kn(T,3)),this.setAttribute("normal",new kn(w,3)),this.setAttribute("uv",new kn(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lc(t.width,t.height,t.widthSegments,t.heightSegments)}}class my extends Fo{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=m0,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class gy extends Fo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class _y extends Fo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const R_={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(this.files[o]=t)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class vy{constructor(t,i,s){const l=this;let u=!1,h=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=s,this.itemStart=function(_){d++,u===!1&&l.onStart!==void 0&&l.onStart(_,h,d),u=!0},this.itemEnd=function(_){h++,l.onProgress!==void 0&&l.onProgress(_,h,d),h===d&&(u=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(_){l.onError!==void 0&&l.onError(_)},this.resolveURL=function(_){return m?m(_):_},this.setURLModifier=function(_){return m=_,this},this.addHandler=function(_,v){return p.push(_,v),this},this.removeHandler=function(_){const v=p.indexOf(_);return v!==-1&&p.splice(v,2),this},this.getHandler=function(_){for(let v=0,S=p.length;v<S;v+=2){const M=p[v],T=p[v+1];if(M.global&&(M.lastIndex=0),M.test(_))return T}return null}}}const xy=new vy;class vd{constructor(t){this.manager=t!==void 0?t:xy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){const s=this;return new Promise(function(l,u){s.load(t,l,i,u)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}vd.DEFAULT_MATERIAL_NAME="__DEFAULT";const ia={};class Sy extends Error{constructor(t,i){super(t),this.response=i}}class yy extends vd{constructor(t){super(t),this.mimeType="",this.responseType=""}load(t,i,s,l){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const u=R_.get(`file:${t}`);if(u!==void 0)return this.manager.itemStart(t),setTimeout(()=>{i&&i(u),this.manager.itemEnd(t)},0),u;if(ia[t]!==void 0){ia[t].push({onLoad:i,onProgress:s,onError:l});return}ia[t]=[],ia[t].push({onLoad:i,onProgress:s,onError:l});const h=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),d=this.mimeType,m=this.responseType;fetch(h).then(p=>{if(p.status===200||p.status===0){if(p.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||p.body===void 0||p.body.getReader===void 0)return p;const _=ia[t],v=p.body.getReader(),S=p.headers.get("X-File-Size")||p.headers.get("Content-Length"),M=S?parseInt(S):0,T=M!==0;let w=0;const x=new ReadableStream({start(g){L();function L(){v.read().then(({done:D,value:C})=>{if(D)g.close();else{w+=C.byteLength;const I=new ProgressEvent("progress",{lengthComputable:T,loaded:w,total:M});for(let z=0,O=_.length;z<O;z++){const X=_[z];X.onProgress&&X.onProgress(I)}g.enqueue(C),L()}},D=>{g.error(D)})}}});return new Response(x)}else throw new Sy(`fetch for "${p.url}" responded with ${p.status}: ${p.statusText}`,p)}).then(p=>{switch(m){case"arraybuffer":return p.arrayBuffer();case"blob":return p.blob();case"document":return p.text().then(_=>new DOMParser().parseFromString(_,d));case"json":return p.json();default:if(d==="")return p.text();{const v=/charset="?([^;"\s]*)"?/i.exec(d),S=v&&v[1]?v[1].toLowerCase():void 0,M=new TextDecoder(S);return p.arrayBuffer().then(T=>M.decode(T))}}}).then(p=>{R_.add(`file:${t}`,p);const _=ia[t];delete ia[t];for(let v=0,S=_.length;v<S;v++){const M=_[v];M.onLoad&&M.onLoad(p)}}).catch(p=>{const _=ia[t];if(_===void 0)throw this.manager.itemError(t),p;delete ia[t];for(let v=0,S=_.length;v<S;v++){const M=_[v];M.onError&&M.onError(p)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class w0 extends Un{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const dh=new Qe,C_=new it,w_=new it;class My{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new se(512,512),this.mapType=Ui,this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _d,this._frameExtents=new se(1,1),this._viewportCount=1,this._viewports=[new Ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;C_.setFromMatrixPosition(t.matrixWorld),i.position.copy(C_),w_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(w_),i.updateMatrixWorld(),dh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dh),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(dh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Ey extends My{constructor(){super(new ii(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const i=this.camera,s=wc*2*t.angle*this.focus,l=this.mapSize.width/this.mapSize.height*this.aspect,u=t.distance||i.far;(s!==i.fov||l!==i.aspect||u!==i.far)&&(i.fov=s,i.aspect=l,i.far=u,i.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Ty extends w0{constructor(t,i,s=0,l=Math.PI/3,u=0,h=2){super(t,i),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Un.DEFAULT_UP),this.updateMatrix(),this.target=new Un,this.distance=s,this.angle=l,this.penumbra=u,this.decay=h,this.map=null,this.shadow=new Ey}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class by extends A0{constructor(t=-1,i=1,s=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-t,h=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Ay extends w0{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ry extends ii{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class D_{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=_e(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(_e(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Cy extends Rs{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function U_(o,t,i,s){const l=wy(s);switch(i){case u0:return o*t;case h0:return o*t/l.components*l.byteLength;case hd:return o*t/l.components*l.byteLength;case d0:return o*t*2/l.components*l.byteLength;case dd:return o*t*2/l.components*l.byteLength;case f0:return o*t*3/l.components*l.byteLength;case xi:return o*t*4/l.components*l.byteLength;case pd:return o*t*4/l.components*l.byteLength;case Sc:case yc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Mc:case Ec:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Ph:case zh:return Math.max(o,16)*Math.max(t,8)/4;case Oh:case Ih:return Math.max(o,8)*Math.max(t,8)/2;case Bh:case Fh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Hh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Gh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Vh:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case kh:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Xh:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Wh:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case qh:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Yh:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case jh:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Zh:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Kh:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Qh:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Jh:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case $h:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case td:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Tc:case ed:case nd:return Math.ceil(o/4)*Math.ceil(t/4)*16;case p0:case id:return Math.ceil(o/4)*Math.ceil(t/4)*8;case ad:case sd:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function wy(o){switch(o){case Ui:case o0:return{byteLength:1,components:1};case Lo:case l0:case Io:return{byteLength:2,components:1};case ud:case fd:return{byteLength:2,components:4};case Ts:case cd:case ra:return{byteLength:4,components:1};case c0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ld}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ld);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function D0(){let o=null,t=!1,i=null,s=null;function l(u,h){i(u,h),s=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function Dy(o){const t=new WeakMap;function i(d,m){const p=d.array,_=d.usage,v=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,_),d.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function s(d,m,p){const _=m.array,v=m.updateRanges;if(o.bindBuffer(p,d),v.length===0)o.bufferSubData(p,0,_);else{v.sort((M,T)=>M.start-T.start);let S=0;for(let M=1;M<v.length;M++){const T=v[S],w=v[M];w.start<=T.start+T.count+1?T.count=Math.max(T.count,w.start+w.count-T.start):(++S,v[S]=w)}v.length=S+1;for(let M=0,T=v.length;M<T;M++){const w=v[M];o.bufferSubData(p,w.start*_.BYTES_PER_ELEMENT,_,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(o.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=t.get(d);(!_||_.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var Uy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ly=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ny=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Oy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Py=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Iy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,By=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Hy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ky=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Xy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Wy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,qy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Yy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ky=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Jy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$y=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,tM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,eM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,nM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,iM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,aM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,oM="gl_FragColor = linearToOutputTexel( gl_FragColor );",lM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,uM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,hM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,pM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_M=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,xM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,SM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,MM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,EM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,TM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,AM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,RM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,CM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,wM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,DM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,UM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,LM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,NM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,OM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,BM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,FM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,HM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,GM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,VM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,XM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,WM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,YM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ZM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,KM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,JM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$M=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,tE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,eE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,aE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,rE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,oE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,dE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,pE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,mE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_E=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,vE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,SE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ME=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,EE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,TE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,bE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,AE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,RE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,CE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,wE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const DE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,UE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,PE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,zE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,BE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,FE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,HE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,GE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,XE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,WE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ZE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,QE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,JE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$E=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,eT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,sT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ue={alphahash_fragment:Uy,alphahash_pars_fragment:Ly,alphamap_fragment:Ny,alphamap_pars_fragment:Oy,alphatest_fragment:Py,alphatest_pars_fragment:Iy,aomap_fragment:zy,aomap_pars_fragment:By,batching_pars_vertex:Fy,batching_vertex:Hy,begin_vertex:Gy,beginnormal_vertex:Vy,bsdfs:ky,iridescence_fragment:Xy,bumpmap_pars_fragment:Wy,clipping_planes_fragment:qy,clipping_planes_pars_fragment:Yy,clipping_planes_pars_vertex:jy,clipping_planes_vertex:Zy,color_fragment:Ky,color_pars_fragment:Qy,color_pars_vertex:Jy,color_vertex:$y,common:tM,cube_uv_reflection_fragment:eM,defaultnormal_vertex:nM,displacementmap_pars_vertex:iM,displacementmap_vertex:aM,emissivemap_fragment:sM,emissivemap_pars_fragment:rM,colorspace_fragment:oM,colorspace_pars_fragment:lM,envmap_fragment:cM,envmap_common_pars_fragment:uM,envmap_pars_fragment:fM,envmap_pars_vertex:hM,envmap_physical_pars_fragment:EM,envmap_vertex:dM,fog_vertex:pM,fog_pars_vertex:mM,fog_fragment:gM,fog_pars_fragment:_M,gradientmap_pars_fragment:vM,lightmap_pars_fragment:xM,lights_lambert_fragment:SM,lights_lambert_pars_fragment:yM,lights_pars_begin:MM,lights_toon_fragment:TM,lights_toon_pars_fragment:bM,lights_phong_fragment:AM,lights_phong_pars_fragment:RM,lights_physical_fragment:CM,lights_physical_pars_fragment:wM,lights_fragment_begin:DM,lights_fragment_maps:UM,lights_fragment_end:LM,logdepthbuf_fragment:NM,logdepthbuf_pars_fragment:OM,logdepthbuf_pars_vertex:PM,logdepthbuf_vertex:IM,map_fragment:zM,map_pars_fragment:BM,map_particle_fragment:FM,map_particle_pars_fragment:HM,metalnessmap_fragment:GM,metalnessmap_pars_fragment:VM,morphinstance_vertex:kM,morphcolor_vertex:XM,morphnormal_vertex:WM,morphtarget_pars_vertex:qM,morphtarget_vertex:YM,normal_fragment_begin:jM,normal_fragment_maps:ZM,normal_pars_fragment:KM,normal_pars_vertex:QM,normal_vertex:JM,normalmap_pars_fragment:$M,clearcoat_normal_fragment_begin:tE,clearcoat_normal_fragment_maps:eE,clearcoat_pars_fragment:nE,iridescence_pars_fragment:iE,opaque_fragment:aE,packing:sE,premultiplied_alpha_fragment:rE,project_vertex:oE,dithering_fragment:lE,dithering_pars_fragment:cE,roughnessmap_fragment:uE,roughnessmap_pars_fragment:fE,shadowmap_pars_fragment:hE,shadowmap_pars_vertex:dE,shadowmap_vertex:pE,shadowmask_pars_fragment:mE,skinbase_vertex:gE,skinning_pars_vertex:_E,skinning_vertex:vE,skinnormal_vertex:xE,specularmap_fragment:SE,specularmap_pars_fragment:yE,tonemapping_fragment:ME,tonemapping_pars_fragment:EE,transmission_fragment:TE,transmission_pars_fragment:bE,uv_pars_fragment:AE,uv_pars_vertex:RE,uv_vertex:CE,worldpos_vertex:wE,background_vert:DE,background_frag:UE,backgroundCube_vert:LE,backgroundCube_frag:NE,cube_vert:OE,cube_frag:PE,depth_vert:IE,depth_frag:zE,distanceRGBA_vert:BE,distanceRGBA_frag:FE,equirect_vert:HE,equirect_frag:GE,linedashed_vert:VE,linedashed_frag:kE,meshbasic_vert:XE,meshbasic_frag:WE,meshlambert_vert:qE,meshlambert_frag:YE,meshmatcap_vert:jE,meshmatcap_frag:ZE,meshnormal_vert:KE,meshnormal_frag:QE,meshphong_vert:JE,meshphong_frag:$E,meshphysical_vert:tT,meshphysical_frag:eT,meshtoon_vert:nT,meshtoon_frag:iT,points_vert:aT,points_frag:sT,shadow_vert:rT,shadow_frag:oT,sprite_vert:lT,sprite_frag:cT},Nt={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},Ri={basic:{uniforms:Nn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:Nn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Ae(0)}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:Nn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:Nn([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:Nn([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new Ae(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:Nn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:Nn([Nt.points,Nt.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:Nn([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:Nn([Nt.common,Nt.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:Nn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:Nn([Nt.sprite,Nt.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distanceRGBA:{uniforms:Nn([Nt.common,Nt.displacementmap,{referencePosition:{value:new it},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distanceRGBA_vert,fragmentShader:ue.distanceRGBA_frag},shadow:{uniforms:Nn([Nt.lights,Nt.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};Ri.physical={uniforms:Nn([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};const gc={r:0,b:0,g:0},_s=new Li,uT=new Qe;function fT(o,t,i,s,l,u,h){const d=new Ae(0);let m=u===!0?0:1,p,_,v=null,S=0,M=null;function T(D){let C=D.isScene===!0?D.background:null;return C&&C.isTexture&&(C=(D.backgroundBlurriness>0?i:t).get(C)),C}function w(D){let C=!1;const I=T(D);I===null?g(d,m):I&&I.isColor&&(g(I,1),C=!0);const z=o.xr.getEnvironmentBlendMode();z==="additive"?s.buffers.color.setClear(0,0,0,1,h):z==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||C)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function x(D,C){const I=T(C);I&&(I.isCubeTexture||I.mapping===Uc)?(_===void 0&&(_=new wi(new Ho(1,1,1),new qa({name:"BackgroundCubeMaterial",uniforms:wr(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(z,O,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),_s.copy(C.backgroundRotation),_s.x*=-1,_s.y*=-1,_s.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(_s.y*=-1,_s.z*=-1),_.material.uniforms.envMap.value=I,_.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(uT.makeRotationFromEuler(_s)),_.material.toneMapped=be.getTransfer(I.colorSpace)!==Be,(v!==I||S!==I.version||M!==o.toneMapping)&&(_.material.needsUpdate=!0,v=I,S=I.version,M=o.toneMapping),_.layers.enableAll(),D.unshift(_,_.geometry,_.material,0,0,null)):I&&I.isTexture&&(p===void 0&&(p=new wi(new Lc(2,2),new qa({name:"BackgroundMaterial",uniforms:wr(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:Wa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=I,p.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,p.material.toneMapped=be.getTransfer(I.colorSpace)!==Be,I.matrixAutoUpdate===!0&&I.updateMatrix(),p.material.uniforms.uvTransform.value.copy(I.matrix),(v!==I||S!==I.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,v=I,S=I.version,M=o.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null))}function g(D,C){D.getRGB(gc,b0(o)),s.buffers.color.setClear(gc.r,gc.g,gc.b,C,h)}function L(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(D,C=1){d.set(D),m=C,g(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(D){m=D,g(d,m)},render:w,addToRenderList:x,dispose:L}}function hT(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=S(null);let u=l,h=!1;function d(A,H,tt,at,pt){let ut=!1;const F=v(at,tt,H);u!==F&&(u=F,p(u.object)),ut=M(A,at,tt,pt),ut&&T(A,at,tt,pt),pt!==null&&t.update(pt,o.ELEMENT_ARRAY_BUFFER),(ut||h)&&(h=!1,C(A,H,tt,at),pt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(pt).buffer))}function m(){return o.createVertexArray()}function p(A){return o.bindVertexArray(A)}function _(A){return o.deleteVertexArray(A)}function v(A,H,tt){const at=tt.wireframe===!0;let pt=s[A.id];pt===void 0&&(pt={},s[A.id]=pt);let ut=pt[H.id];ut===void 0&&(ut={},pt[H.id]=ut);let F=ut[at];return F===void 0&&(F=S(m()),ut[at]=F),F}function S(A){const H=[],tt=[],at=[];for(let pt=0;pt<i;pt++)H[pt]=0,tt[pt]=0,at[pt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:tt,attributeDivisors:at,object:A,attributes:{},index:null}}function M(A,H,tt,at){const pt=u.attributes,ut=H.attributes;let F=0;const j=tt.getAttributes();for(const W in j)if(j[W].location>=0){const N=pt[W];let $=ut[W];if($===void 0&&(W==="instanceMatrix"&&A.instanceMatrix&&($=A.instanceMatrix),W==="instanceColor"&&A.instanceColor&&($=A.instanceColor)),N===void 0||N.attribute!==$||$&&N.data!==$.data)return!0;F++}return u.attributesNum!==F||u.index!==at}function T(A,H,tt,at){const pt={},ut=H.attributes;let F=0;const j=tt.getAttributes();for(const W in j)if(j[W].location>=0){let N=ut[W];N===void 0&&(W==="instanceMatrix"&&A.instanceMatrix&&(N=A.instanceMatrix),W==="instanceColor"&&A.instanceColor&&(N=A.instanceColor));const $={};$.attribute=N,N&&N.data&&($.data=N.data),pt[W]=$,F++}u.attributes=pt,u.attributesNum=F,u.index=at}function w(){const A=u.newAttributes;for(let H=0,tt=A.length;H<tt;H++)A[H]=0}function x(A){g(A,0)}function g(A,H){const tt=u.newAttributes,at=u.enabledAttributes,pt=u.attributeDivisors;tt[A]=1,at[A]===0&&(o.enableVertexAttribArray(A),at[A]=1),pt[A]!==H&&(o.vertexAttribDivisor(A,H),pt[A]=H)}function L(){const A=u.newAttributes,H=u.enabledAttributes;for(let tt=0,at=H.length;tt<at;tt++)H[tt]!==A[tt]&&(o.disableVertexAttribArray(tt),H[tt]=0)}function D(A,H,tt,at,pt,ut,F){F===!0?o.vertexAttribIPointer(A,H,tt,pt,ut):o.vertexAttribPointer(A,H,tt,at,pt,ut)}function C(A,H,tt,at){w();const pt=at.attributes,ut=tt.getAttributes(),F=H.defaultAttributeValues;for(const j in ut){const W=ut[j];if(W.location>=0){let St=pt[j];if(St===void 0&&(j==="instanceMatrix"&&A.instanceMatrix&&(St=A.instanceMatrix),j==="instanceColor"&&A.instanceColor&&(St=A.instanceColor)),St!==void 0){const N=St.normalized,$=St.itemSize,vt=t.get(St);if(vt===void 0)continue;const xt=vt.buffer,K=vt.type,mt=vt.bytesPerElement,Et=K===o.INT||K===o.UNSIGNED_INT||St.gpuType===cd;if(St.isInterleavedBufferAttribute){const Rt=St.data,wt=Rt.stride,le=St.offset;if(Rt.isInstancedInterleavedBuffer){for(let Qt=0;Qt<W.locationSize;Qt++)g(W.location+Qt,Rt.meshPerAttribute);A.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=Rt.meshPerAttribute*Rt.count)}else for(let Qt=0;Qt<W.locationSize;Qt++)x(W.location+Qt);o.bindBuffer(o.ARRAY_BUFFER,xt);for(let Qt=0;Qt<W.locationSize;Qt++)D(W.location+Qt,$/W.locationSize,K,N,wt*mt,(le+$/W.locationSize*Qt)*mt,Et)}else{if(St.isInstancedBufferAttribute){for(let Rt=0;Rt<W.locationSize;Rt++)g(W.location+Rt,St.meshPerAttribute);A.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let Rt=0;Rt<W.locationSize;Rt++)x(W.location+Rt);o.bindBuffer(o.ARRAY_BUFFER,xt);for(let Rt=0;Rt<W.locationSize;Rt++)D(W.location+Rt,$/W.locationSize,K,N,$*mt,$/W.locationSize*Rt*mt,Et)}}else if(F!==void 0){const N=F[j];if(N!==void 0)switch(N.length){case 2:o.vertexAttrib2fv(W.location,N);break;case 3:o.vertexAttrib3fv(W.location,N);break;case 4:o.vertexAttrib4fv(W.location,N);break;default:o.vertexAttrib1fv(W.location,N)}}}}L()}function I(){X();for(const A in s){const H=s[A];for(const tt in H){const at=H[tt];for(const pt in at)_(at[pt].object),delete at[pt];delete H[tt]}delete s[A]}}function z(A){if(s[A.id]===void 0)return;const H=s[A.id];for(const tt in H){const at=H[tt];for(const pt in at)_(at[pt].object),delete at[pt];delete H[tt]}delete s[A.id]}function O(A){for(const H in s){const tt=s[H];if(tt[A.id]===void 0)continue;const at=tt[A.id];for(const pt in at)_(at[pt].object),delete at[pt];delete tt[A.id]}}function X(){U(),h=!0,u!==l&&(u=l,p(u.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:X,resetDefaultState:U,dispose:I,releaseStatesOfGeometry:z,releaseStatesOfProgram:O,initAttributes:w,enableAttribute:x,disableUnusedAttributes:L}}function dT(o,t,i){let s;function l(p){s=p}function u(p,_){o.drawArrays(s,p,_),i.update(_,s,1)}function h(p,_,v){v!==0&&(o.drawArraysInstanced(s,p,_,v),i.update(_,s,v))}function d(p,_,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,_,0,v);let M=0;for(let T=0;T<v;T++)M+=_[T];i.update(M,s,1)}function m(p,_,v,S){if(v===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let T=0;T<p.length;T++)h(p[T],_[T],S[T]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,_,0,S,0,v);let T=0;for(let w=0;w<v;w++)T+=_[w]*S[w];i.update(T,s,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function pT(o,t,i,s){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const O=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(O){return!(O!==xi&&s.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const X=O===Io&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(O!==Ui&&s.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==ra&&!X)}function m(O){if(O==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const v=i.logarithmicDepthBuffer===!0,S=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_TEXTURE_SIZE),x=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),g=o.getParameter(o.MAX_VERTEX_ATTRIBS),L=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),D=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),I=T>0,z=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reverseDepthBuffer:S,maxTextures:M,maxVertexTextures:T,maxTextureSize:w,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:L,maxVaryings:D,maxFragmentUniforms:C,vertexTextures:I,maxSamples:z}}function mT(o){const t=this;let i=null,s=0,l=!1,u=!1;const h=new Ga,d=new oe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,S){const M=v.length!==0||S||s!==0||l;return l=S,s=v.length,M},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,S){i=_(v,S,0)},this.setState=function(v,S,M){const T=v.clippingPlanes,w=v.clipIntersection,x=v.clipShadows,g=o.get(v);if(!l||T===null||T.length===0||u&&!x)u?_(null):p();else{const L=u?0:s,D=L*4;let C=g.clippingState||null;m.value=C,C=_(T,S,D,M);for(let I=0;I!==D;++I)C[I]=i[I];g.clippingState=C,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=L}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(v,S,M,T){const w=v!==null?v.length:0;let x=null;if(w!==0){if(x=m.value,T!==!0||x===null){const g=M+w*4,L=S.matrixWorldInverse;d.getNormalMatrix(L),(x===null||x.length<g)&&(x=new Float32Array(g));for(let D=0,C=M;D!==w;++D,C+=4)h.copy(v[D]).applyMatrix4(L,d),h.normal.toArray(x,C),x[C+3]=h.constant}m.value=x,m.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,x}}function gT(o){let t=new WeakMap;function i(h,d){return d===Dh?h.mapping=Ar:d===Uh&&(h.mapping=Rr),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Dh||d===Uh)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new cy(m.height);return p.fromEquirectangularTexture(o,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(){t=new WeakMap}return{get:s,dispose:u}}const Sr=4,L_=[.125,.215,.35,.446,.526,.582],ys=20,ph=new by,N_=new Ae;let mh=null,gh=0,_h=0,vh=!1;const xs=(1+Math.sqrt(5))/2,vr=1/xs,O_=[new it(-xs,vr,0),new it(xs,vr,0),new it(-vr,0,xs),new it(vr,0,xs),new it(0,xs,-vr),new it(0,xs,vr),new it(-1,1,-1),new it(1,1,-1),new it(-1,1,1),new it(1,1,1)],_T=new it;class P_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100,u={}){const{size:h=256,position:d=_T}=u;mh=this._renderer.getRenderTarget(),gh=this._renderer.getActiveCubeFace(),_h=this._renderer.getActiveMipmapLevel(),vh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=B_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=z_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(mh,gh,_h),this._renderer.xr.enabled=vh,t.scissorTest=!1,_c(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Ar||t.mapping===Rr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),mh=this._renderer.getRenderTarget(),gh=this._renderer.getActiveCubeFace(),_h=this._renderer.getActiveMipmapLevel(),vh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Ci,minFilter:Ci,generateMipmaps:!1,type:Io,format:xi,colorSpace:Cr,depthBuffer:!1},l=I_(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=I_(t,i,s);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vT(u)),this._blurMaterial=xT(u,t,i)}return l}_compileMaterial(t){const i=new wi(this._lodPlanes[0],t);this._renderer.compile(i,ph)}_sceneToCubeUV(t,i,s,l,u){const m=new ii(90,1,i,s),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,S=v.autoClear,M=v.toneMapping;v.getClearColor(N_),v.toneMapping=Xa,v.autoClear=!1;const T=new M0({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1}),w=new wi(new Ho,T);let x=!1;const g=t.background;g?g.isColor&&(T.color.copy(g),t.background=null,x=!0):(T.color.copy(N_),x=!0);for(let L=0;L<6;L++){const D=L%3;D===0?(m.up.set(0,p[L],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+_[L],u.y,u.z)):D===1?(m.up.set(0,0,p[L]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+_[L],u.z)):(m.up.set(0,p[L],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+_[L]));const C=this._cubeSize;_c(l,D*C,L>2?C:0,C,C),v.setRenderTarget(l),x&&v.render(w,m),v.render(t,m)}w.geometry.dispose(),w.material.dispose(),v.toneMapping=M,v.autoClear=S,t.background=g}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Ar||t.mapping===Rr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=B_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=z_());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new wi(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=t;const m=this._cubeSize;_c(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,ph)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=O_[(l-u-1)%O_.length];this._blur(t,u-1,u,h,d)}i.autoClear=s}_blur(t,i,s,l,u){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",u),this._halfBlur(h,t,s,s,l,"longitudinal",u)}_halfBlur(t,i,s,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,v=new wi(this._lodPlanes[l],p),S=p.uniforms,M=this._sizeLods[s]-1,T=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*ys-1),w=u/T,x=isFinite(u)?1+Math.floor(_*w):ys;x>ys&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${ys}`);const g=[];let L=0;for(let O=0;O<ys;++O){const X=O/w,U=Math.exp(-X*X/2);g.push(U),O===0?L+=U:O<x&&(L+=2*U)}for(let O=0;O<g.length;O++)g[O]=g[O]/L;S.envMap.value=t.texture,S.samples.value=x,S.weights.value=g,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:D}=this;S.dTheta.value=T,S.mipInt.value=D-s;const C=this._sizeLods[l],I=3*C*(l>D-Sr?l-D+Sr:0),z=4*(this._cubeSize-C);_c(i,I,z,3*C,2*C),m.setRenderTarget(i),m.render(v,ph)}}function vT(o){const t=[],i=[],s=[];let l=o;const u=o-Sr+1+L_.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-Sr?m=L_[h-o+Sr-1]:h===0&&(m=0),s.push(m);const p=1/(d-2),_=-p,v=1+p,S=[_,_,v,_,v,v,_,_,v,v,_,v],M=6,T=6,w=3,x=2,g=1,L=new Float32Array(w*T*M),D=new Float32Array(x*T*M),C=new Float32Array(g*T*M);for(let z=0;z<M;z++){const O=z%3*2/3-1,X=z>2?0:-1,U=[O,X,0,O+2/3,X,0,O+2/3,X+1,0,O,X,0,O+2/3,X+1,0,O,X+1,0];L.set(U,w*T*z),D.set(S,x*T*z);const A=[z,z,z,z,z,z];C.set(A,g*T*z)}const I=new Ya;I.setAttribute("position",new Di(L,w)),I.setAttribute("uv",new Di(D,x)),I.setAttribute("faceIndex",new Di(C,g)),t.push(I),l>Sr&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function I_(o,t,i){const s=new As(o,t,i);return s.texture.mapping=Uc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function _c(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function xT(o,t,i){const s=new Float32Array(ys),l=new it(0,1,0);return new qa({name:"SphericalGaussianBlur",defines:{n:ys,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:xd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ka,depthTest:!1,depthWrite:!1})}function z_(){return new qa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ka,depthTest:!1,depthWrite:!1})}function B_(){return new qa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ka,depthTest:!1,depthWrite:!1})}function xd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ST(o){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===Dh||m===Uh,_=m===Ar||m===Rr;if(p||_){let v=t.get(d);const S=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new P_(o)),v=p?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),v.texture;if(v!==void 0)return v.texture;{const M=d.image;return p&&M&&M.height>0||_&&M&&l(M)?(i===null&&(i=new P_(o)),v=p?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function l(d){let m=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function yT(o){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Er("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function MT(o,t,i,s){const l={},u=new WeakMap;function h(v){const S=v.target;S.index!==null&&t.remove(S.index);for(const T in S.attributes)t.remove(S.attributes[T]);S.removeEventListener("dispose",h),delete l[S.id];const M=u.get(S);M&&(t.remove(M),u.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(v,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function m(v){const S=v.attributes;for(const M in S)t.update(S[M],o.ARRAY_BUFFER)}function p(v){const S=[],M=v.index,T=v.attributes.position;let w=0;if(M!==null){const L=M.array;w=M.version;for(let D=0,C=L.length;D<C;D+=3){const I=L[D+0],z=L[D+1],O=L[D+2];S.push(I,z,z,O,O,I)}}else if(T!==void 0){const L=T.array;w=T.version;for(let D=0,C=L.length/3-1;D<C;D+=3){const I=D+0,z=D+1,O=D+2;S.push(I,z,z,O,O,I)}}else return;const x=new(_0(S)?T0:E0)(S,1);x.version=w;const g=u.get(v);g&&t.remove(g),u.set(v,x)}function _(v){const S=u.get(v);if(S){const M=v.index;M!==null&&S.version<M.version&&p(v)}else p(v);return u.get(v)}return{get:d,update:m,getWireframeAttribute:_}}function ET(o,t,i){let s;function l(S){s=S}let u,h;function d(S){u=S.type,h=S.bytesPerElement}function m(S,M){o.drawElements(s,M,u,S*h),i.update(M,s,1)}function p(S,M,T){T!==0&&(o.drawElementsInstanced(s,M,u,S*h,T),i.update(M,s,T))}function _(S,M,T){if(T===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,u,S,0,T);let x=0;for(let g=0;g<T;g++)x+=M[g];i.update(x,s,1)}function v(S,M,T,w){if(T===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let g=0;g<S.length;g++)p(S[g]/h,M[g],w[g]);else{x.multiDrawElementsInstancedWEBGL(s,M,0,u,S,0,w,0,T);let g=0;for(let L=0;L<T;L++)g+=M[L]*w[L];i.update(g,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function TT(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function bT(o,t,i){const s=new WeakMap,l=new Ke;function u(h,d,m){const p=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=_!==void 0?_.length:0;let S=s.get(d);if(S===void 0||S.count!==v){let A=function(){X.dispose(),s.delete(d),d.removeEventListener("dispose",A)};var M=A;S!==void 0&&S.texture.dispose();const T=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,x=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],L=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let C=0;T===!0&&(C=1),w===!0&&(C=2),x===!0&&(C=3);let I=d.attributes.position.count*C,z=1;I>t.maxTextureSize&&(z=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const O=new Float32Array(I*z*4*v),X=new v0(O,I,z,v);X.type=ra,X.needsUpdate=!0;const U=C*4;for(let H=0;H<v;H++){const tt=g[H],at=L[H],pt=D[H],ut=I*z*4*H;for(let F=0;F<tt.count;F++){const j=F*U;T===!0&&(l.fromBufferAttribute(tt,F),O[ut+j+0]=l.x,O[ut+j+1]=l.y,O[ut+j+2]=l.z,O[ut+j+3]=0),w===!0&&(l.fromBufferAttribute(at,F),O[ut+j+4]=l.x,O[ut+j+5]=l.y,O[ut+j+6]=l.z,O[ut+j+7]=0),x===!0&&(l.fromBufferAttribute(pt,F),O[ut+j+8]=l.x,O[ut+j+9]=l.y,O[ut+j+10]=l.z,O[ut+j+11]=pt.itemSize===4?l.w:1)}}S={count:v,texture:X,size:new se(I,z)},s.set(d,S),d.addEventListener("dispose",A)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let T=0;for(let x=0;x<p.length;x++)T+=p[x];const w=d.morphTargetsRelative?1:1-T;m.getUniforms().setValue(o,"morphTargetBaseInfluence",w),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:u}}function AT(o,t,i,s){let l=new WeakMap;function u(m){const p=s.render.frame,_=m.geometry,v=t.get(m,_);if(l.get(v)!==p&&(t.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return v}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const U0=new Wn,F_=new C0(1,1),L0=new v0,N0=new qS,O0=new R0,H_=[],G_=[],V_=new Float32Array(16),k_=new Float32Array(9),X_=new Float32Array(4);function Dr(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let u=H_[l];if(u===void 0&&(u=new Float32Array(l),H_[l]=u),t!==0){s.toArray(u,0);for(let h=1,d=0;h!==t;++h)d+=i,o[h].toArray(u,d)}return u}function fn(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function hn(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function Nc(o,t){let i=G_[t];i===void 0&&(i=new Int32Array(t),G_[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function RT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function CT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(fn(i,t))return;o.uniform2fv(this.addr,t),hn(i,t)}}function wT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(fn(i,t))return;o.uniform3fv(this.addr,t),hn(i,t)}}function DT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(fn(i,t))return;o.uniform4fv(this.addr,t),hn(i,t)}}function UT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(fn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),hn(i,t)}else{if(fn(i,s))return;X_.set(s),o.uniformMatrix2fv(this.addr,!1,X_),hn(i,s)}}function LT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(fn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),hn(i,t)}else{if(fn(i,s))return;k_.set(s),o.uniformMatrix3fv(this.addr,!1,k_),hn(i,s)}}function NT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(fn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),hn(i,t)}else{if(fn(i,s))return;V_.set(s),o.uniformMatrix4fv(this.addr,!1,V_),hn(i,s)}}function OT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function PT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(fn(i,t))return;o.uniform2iv(this.addr,t),hn(i,t)}}function IT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(fn(i,t))return;o.uniform3iv(this.addr,t),hn(i,t)}}function zT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(fn(i,t))return;o.uniform4iv(this.addr,t),hn(i,t)}}function BT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function FT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(fn(i,t))return;o.uniform2uiv(this.addr,t),hn(i,t)}}function HT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(fn(i,t))return;o.uniform3uiv(this.addr,t),hn(i,t)}}function GT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(fn(i,t))return;o.uniform4uiv(this.addr,t),hn(i,t)}}function VT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(F_.compareFunction=g0,u=F_):u=U0,i.setTexture2D(t||u,l)}function kT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||N0,l)}function XT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||O0,l)}function WT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||L0,l)}function qT(o){switch(o){case 5126:return RT;case 35664:return CT;case 35665:return wT;case 35666:return DT;case 35674:return UT;case 35675:return LT;case 35676:return NT;case 5124:case 35670:return OT;case 35667:case 35671:return PT;case 35668:case 35672:return IT;case 35669:case 35673:return zT;case 5125:return BT;case 36294:return FT;case 36295:return HT;case 36296:return GT;case 35678:case 36198:case 36298:case 36306:case 35682:return VT;case 35679:case 36299:case 36307:return kT;case 35680:case 36300:case 36308:case 36293:return XT;case 36289:case 36303:case 36311:case 36292:return WT}}function YT(o,t){o.uniform1fv(this.addr,t)}function jT(o,t){const i=Dr(t,this.size,2);o.uniform2fv(this.addr,i)}function ZT(o,t){const i=Dr(t,this.size,3);o.uniform3fv(this.addr,i)}function KT(o,t){const i=Dr(t,this.size,4);o.uniform4fv(this.addr,i)}function QT(o,t){const i=Dr(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function JT(o,t){const i=Dr(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function $T(o,t){const i=Dr(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function tb(o,t){o.uniform1iv(this.addr,t)}function eb(o,t){o.uniform2iv(this.addr,t)}function nb(o,t){o.uniform3iv(this.addr,t)}function ib(o,t){o.uniform4iv(this.addr,t)}function ab(o,t){o.uniform1uiv(this.addr,t)}function sb(o,t){o.uniform2uiv(this.addr,t)}function rb(o,t){o.uniform3uiv(this.addr,t)}function ob(o,t){o.uniform4uiv(this.addr,t)}function lb(o,t,i){const s=this.cache,l=t.length,u=Nc(i,l);fn(s,u)||(o.uniform1iv(this.addr,u),hn(s,u));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||U0,u[h])}function cb(o,t,i){const s=this.cache,l=t.length,u=Nc(i,l);fn(s,u)||(o.uniform1iv(this.addr,u),hn(s,u));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||N0,u[h])}function ub(o,t,i){const s=this.cache,l=t.length,u=Nc(i,l);fn(s,u)||(o.uniform1iv(this.addr,u),hn(s,u));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||O0,u[h])}function fb(o,t,i){const s=this.cache,l=t.length,u=Nc(i,l);fn(s,u)||(o.uniform1iv(this.addr,u),hn(s,u));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||L0,u[h])}function hb(o){switch(o){case 5126:return YT;case 35664:return jT;case 35665:return ZT;case 35666:return KT;case 35674:return QT;case 35675:return JT;case 35676:return $T;case 5124:case 35670:return tb;case 35667:case 35671:return eb;case 35668:case 35672:return nb;case 35669:case 35673:return ib;case 5125:return ab;case 36294:return sb;case 36295:return rb;case 36296:return ob;case 35678:case 36198:case 36298:case 36306:case 35682:return lb;case 35679:case 36299:case 36307:return cb;case 35680:case 36300:case 36308:case 36293:return ub;case 36289:case 36303:case 36311:case 36292:return fb}}class db{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=qT(i.type)}}class pb{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=hb(i.type)}}class mb{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(t,i[d.id],s)}}}const xh=/(\w+)(\])?(\[|\.)?/g;function W_(o,t){o.seq.push(t),o.map[t.id]=t}function gb(o,t,i){const s=o.name,l=s.length;for(xh.lastIndex=0;;){const u=xh.exec(s),h=xh.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){W_(i,p===void 0?new db(d,o,t):new pb(d,o,t));break}else{let v=i.map[d];v===void 0&&(v=new mb(d),W_(i,v)),i=v}}}class Ac{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const u=t.getActiveUniform(i,l),h=t.getUniformLocation(i,u.name);gb(u,h,this)}}setValue(t,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,u=t.length;l!==u;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function q_(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const _b=37297;let vb=0;function xb(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let h=l;h<u;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const Y_=new oe;function Sb(o){be._getMatrix(Y_,be.workingColorSpace,o);const t=`mat3( ${Y_.elements.map(i=>i.toFixed(4))} )`;switch(be.getTransfer(o)){case Rc:return[t,"LinearTransferOETF"];case Be:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function j_(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),l=o.getShaderInfoLog(t).trim();if(s&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+xb(o.getShaderSource(t),h)}else return l}function yb(o,t){const i=Sb(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function Mb(o,t){let i;switch(t){case _S:i="Linear";break;case vS:i="Reinhard";break;case xS:i="Cineon";break;case SS:i="ACESFilmic";break;case MS:i="AgX";break;case ES:i="Neutral";break;case yS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const vc=new it;function Eb(){be.getLuminanceCoefficients(vc);const o=vc.x.toFixed(4),t=vc.y.toFixed(4),i=vc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Tb(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Uo).join(`
`)}function bb(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function Ab(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(t,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(t,h),locationSize:d}}return i}function Uo(o){return o!==""}function Z_(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function K_(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Rb=/^[ \t]*#include +<([\w\d./]+)>/gm;function rd(o){return o.replace(Rb,wb)}const Cb=new Map;function wb(o,t){let i=ue[t];if(i===void 0){const s=Cb.get(t);if(s!==void 0)i=ue[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return rd(i)}const Db=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Q_(o){return o.replace(Db,Ub)}function Ub(o,t,i,s){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function J_(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Lb(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===a0?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===Kx?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===aa&&(t="SHADOWMAP_TYPE_VSM"),t}function Nb(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Ar:case Rr:t="ENVMAP_TYPE_CUBE";break;case Uc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ob(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Rr:t="ENVMAP_MODE_REFRACTION";break}return t}function Pb(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case s0:t="ENVMAP_BLENDING_MULTIPLY";break;case mS:t="ENVMAP_BLENDING_MIX";break;case gS:t="ENVMAP_BLENDING_ADD";break}return t}function Ib(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function zb(o,t,i,s){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=Lb(i),p=Nb(i),_=Ob(i),v=Pb(i),S=Ib(i),M=Tb(i),T=bb(u),w=l.createProgram();let x,g,L=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Uo).join(`
`),x.length>0&&(x+=`
`),g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Uo).join(`
`),g.length>0&&(g+=`
`)):(x=[J_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Uo).join(`
`),g=[J_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+v:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Xa?"#define TONE_MAPPING":"",i.toneMapping!==Xa?ue.tonemapping_pars_fragment:"",i.toneMapping!==Xa?Mb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,yb("linearToOutputTexel",i.outputColorSpace),Eb(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Uo).join(`
`)),h=rd(h),h=Z_(h,i),h=K_(h,i),d=rd(d),d=Z_(d,i),d=K_(d,i),h=Q_(h),d=Q_(d),i.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,x=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",i.glslVersion===c_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===c_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const D=L+x+h,C=L+g+d,I=q_(l,l.VERTEX_SHADER,D),z=q_(l,l.FRAGMENT_SHADER,C);l.attachShader(w,I),l.attachShader(w,z),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function O(H){if(o.debug.checkShaderErrors){const tt=l.getProgramInfoLog(w).trim(),at=l.getShaderInfoLog(I).trim(),pt=l.getShaderInfoLog(z).trim();let ut=!0,F=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(ut=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,w,I,z);else{const j=j_(l,I,"vertex"),W=j_(l,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+tt+`
`+j+`
`+W)}else tt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",tt):(at===""||pt==="")&&(F=!1);F&&(H.diagnostics={runnable:ut,programLog:tt,vertexShader:{log:at,prefix:x},fragmentShader:{log:pt,prefix:g}})}l.deleteShader(I),l.deleteShader(z),X=new Ac(l,w),U=Ab(l,w)}let X;this.getUniforms=function(){return X===void 0&&O(this),X};let U;this.getAttributes=function(){return U===void 0&&O(this),U};let A=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=l.getProgramParameter(w,_b)),A},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=vb++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=I,this.fragmentShader=z,this}let Bb=0;class Fb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new Hb(t),i.set(t,s)),s}}class Hb{constructor(t){this.id=Bb++,this.code=t,this.usedTimes=0}}function Gb(o,t,i,s,l,u,h){const d=new S0,m=new Fb,p=new Set,_=[],v=l.logarithmicDepthBuffer,S=l.vertexTextures;let M=l.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(U){return p.add(U),U===0?"uv":`uv${U}`}function x(U,A,H,tt,at){const pt=tt.fog,ut=at.geometry,F=U.isMeshStandardMaterial?tt.environment:null,j=(U.isMeshStandardMaterial?i:t).get(U.envMap||F),W=j&&j.mapping===Uc?j.image.height:null,St=T[U.type];U.precision!==null&&(M=l.getMaxPrecision(U.precision),M!==U.precision&&console.warn("THREE.WebGLProgram.getParameters:",U.precision,"not supported, using",M,"instead."));const N=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,$=N!==void 0?N.length:0;let vt=0;ut.morphAttributes.position!==void 0&&(vt=1),ut.morphAttributes.normal!==void 0&&(vt=2),ut.morphAttributes.color!==void 0&&(vt=3);let xt,K,mt,Et;if(St){const Ee=Ri[St];xt=Ee.vertexShader,K=Ee.fragmentShader}else xt=U.vertexShader,K=U.fragmentShader,m.update(U),mt=m.getVertexShaderID(U),Et=m.getFragmentShaderID(U);const Rt=o.getRenderTarget(),wt=o.state.buffers.depth.getReversed(),le=at.isInstancedMesh===!0,Qt=at.isBatchedMesh===!0,Ne=!!U.map,He=!!U.matcap,ve=!!j,G=!!U.aoMap,Sn=!!U.lightMap,Me=!!U.bumpMap,pe=!!U.normalMap,Vt=!!U.displacementMap,xe=!!U.emissiveMap,jt=!!U.metalnessMap,ae=!!U.roughnessMap,Je=U.anisotropy>0,P=U.clearcoat>0,E=U.dispersion>0,et=U.iridescence>0,ft=U.sheen>0,dt=U.transmission>0,lt=Je&&!!U.anisotropyMap,Pt=P&&!!U.clearcoatMap,Ut=P&&!!U.clearcoatNormalMap,Gt=P&&!!U.clearcoatRoughnessMap,kt=et&&!!U.iridescenceMap,yt=et&&!!U.iridescenceThicknessMap,It=ft&&!!U.sheenColorMap,qt=ft&&!!U.sheenRoughnessMap,Yt=!!U.specularMap,Ct=!!U.specularColorMap,ie=!!U.specularIntensityMap,k=dt&&!!U.transmissionMap,Lt=dt&&!!U.thicknessMap,Tt=!!U.gradientMap,zt=!!U.alphaMap,At=U.alphaTest>0,_t=!!U.alphaHash,Ft=!!U.extensions;let ne=Xa;U.toneMapped&&(Rt===null||Rt.isXRRenderTarget===!0)&&(ne=o.toneMapping);const De={shaderID:St,shaderType:U.type,shaderName:U.name,vertexShader:xt,fragmentShader:K,defines:U.defines,customVertexShaderID:mt,customFragmentShaderID:Et,isRawShaderMaterial:U.isRawShaderMaterial===!0,glslVersion:U.glslVersion,precision:M,batching:Qt,batchingColor:Qt&&at._colorsTexture!==null,instancing:le,instancingColor:le&&at.instanceColor!==null,instancingMorph:le&&at.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:Rt===null?o.outputColorSpace:Rt.isXRRenderTarget===!0?Rt.texture.colorSpace:Cr,alphaToCoverage:!!U.alphaToCoverage,map:Ne,matcap:He,envMap:ve,envMapMode:ve&&j.mapping,envMapCubeUVHeight:W,aoMap:G,lightMap:Sn,bumpMap:Me,normalMap:pe,displacementMap:S&&Vt,emissiveMap:xe,normalMapObjectSpace:pe&&U.normalMapType===RS,normalMapTangentSpace:pe&&U.normalMapType===m0,metalnessMap:jt,roughnessMap:ae,anisotropy:Je,anisotropyMap:lt,clearcoat:P,clearcoatMap:Pt,clearcoatNormalMap:Ut,clearcoatRoughnessMap:Gt,dispersion:E,iridescence:et,iridescenceMap:kt,iridescenceThicknessMap:yt,sheen:ft,sheenColorMap:It,sheenRoughnessMap:qt,specularMap:Yt,specularColorMap:Ct,specularIntensityMap:ie,transmission:dt,transmissionMap:k,thicknessMap:Lt,gradientMap:Tt,opaque:U.transparent===!1&&U.blending===Mr&&U.alphaToCoverage===!1,alphaMap:zt,alphaTest:At,alphaHash:_t,combine:U.combine,mapUv:Ne&&w(U.map.channel),aoMapUv:G&&w(U.aoMap.channel),lightMapUv:Sn&&w(U.lightMap.channel),bumpMapUv:Me&&w(U.bumpMap.channel),normalMapUv:pe&&w(U.normalMap.channel),displacementMapUv:Vt&&w(U.displacementMap.channel),emissiveMapUv:xe&&w(U.emissiveMap.channel),metalnessMapUv:jt&&w(U.metalnessMap.channel),roughnessMapUv:ae&&w(U.roughnessMap.channel),anisotropyMapUv:lt&&w(U.anisotropyMap.channel),clearcoatMapUv:Pt&&w(U.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&w(U.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Gt&&w(U.clearcoatRoughnessMap.channel),iridescenceMapUv:kt&&w(U.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&w(U.iridescenceThicknessMap.channel),sheenColorMapUv:It&&w(U.sheenColorMap.channel),sheenRoughnessMapUv:qt&&w(U.sheenRoughnessMap.channel),specularMapUv:Yt&&w(U.specularMap.channel),specularColorMapUv:Ct&&w(U.specularColorMap.channel),specularIntensityMapUv:ie&&w(U.specularIntensityMap.channel),transmissionMapUv:k&&w(U.transmissionMap.channel),thicknessMapUv:Lt&&w(U.thicknessMap.channel),alphaMapUv:zt&&w(U.alphaMap.channel),vertexTangents:!!ut.attributes.tangent&&(pe||Je),vertexColors:U.vertexColors,vertexAlphas:U.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,pointsUvs:at.isPoints===!0&&!!ut.attributes.uv&&(Ne||zt),fog:!!pt,useFog:U.fog===!0,fogExp2:!!pt&&pt.isFogExp2,flatShading:U.flatShading===!0&&U.wireframe===!1,sizeAttenuation:U.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:wt,skinning:at.isSkinnedMesh===!0,morphTargets:ut.morphAttributes.position!==void 0,morphNormals:ut.morphAttributes.normal!==void 0,morphColors:ut.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:vt,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:U.dithering,shadowMapEnabled:o.shadowMap.enabled&&H.length>0,shadowMapType:o.shadowMap.type,toneMapping:ne,decodeVideoTexture:Ne&&U.map.isVideoTexture===!0&&be.getTransfer(U.map.colorSpace)===Be,decodeVideoTextureEmissive:xe&&U.emissiveMap.isVideoTexture===!0&&be.getTransfer(U.emissiveMap.colorSpace)===Be,premultipliedAlpha:U.premultipliedAlpha,doubleSided:U.side===sa,flipSided:U.side===Xn,useDepthPacking:U.depthPacking>=0,depthPacking:U.depthPacking||0,index0AttributeName:U.index0AttributeName,extensionClipCullDistance:Ft&&U.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&U.extensions.multiDraw===!0||Qt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:U.customProgramCacheKey()};return De.vertexUv1s=p.has(1),De.vertexUv2s=p.has(2),De.vertexUv3s=p.has(3),p.clear(),De}function g(U){const A=[];if(U.shaderID?A.push(U.shaderID):(A.push(U.customVertexShaderID),A.push(U.customFragmentShaderID)),U.defines!==void 0)for(const H in U.defines)A.push(H),A.push(U.defines[H]);return U.isRawShaderMaterial===!1&&(L(A,U),D(A,U),A.push(o.outputColorSpace)),A.push(U.customProgramCacheKey),A.join()}function L(U,A){U.push(A.precision),U.push(A.outputColorSpace),U.push(A.envMapMode),U.push(A.envMapCubeUVHeight),U.push(A.mapUv),U.push(A.alphaMapUv),U.push(A.lightMapUv),U.push(A.aoMapUv),U.push(A.bumpMapUv),U.push(A.normalMapUv),U.push(A.displacementMapUv),U.push(A.emissiveMapUv),U.push(A.metalnessMapUv),U.push(A.roughnessMapUv),U.push(A.anisotropyMapUv),U.push(A.clearcoatMapUv),U.push(A.clearcoatNormalMapUv),U.push(A.clearcoatRoughnessMapUv),U.push(A.iridescenceMapUv),U.push(A.iridescenceThicknessMapUv),U.push(A.sheenColorMapUv),U.push(A.sheenRoughnessMapUv),U.push(A.specularMapUv),U.push(A.specularColorMapUv),U.push(A.specularIntensityMapUv),U.push(A.transmissionMapUv),U.push(A.thicknessMapUv),U.push(A.combine),U.push(A.fogExp2),U.push(A.sizeAttenuation),U.push(A.morphTargetsCount),U.push(A.morphAttributeCount),U.push(A.numDirLights),U.push(A.numPointLights),U.push(A.numSpotLights),U.push(A.numSpotLightMaps),U.push(A.numHemiLights),U.push(A.numRectAreaLights),U.push(A.numDirLightShadows),U.push(A.numPointLightShadows),U.push(A.numSpotLightShadows),U.push(A.numSpotLightShadowsWithMaps),U.push(A.numLightProbes),U.push(A.shadowMapType),U.push(A.toneMapping),U.push(A.numClippingPlanes),U.push(A.numClipIntersection),U.push(A.depthPacking)}function D(U,A){d.disableAll(),A.supportsVertexTextures&&d.enable(0),A.instancing&&d.enable(1),A.instancingColor&&d.enable(2),A.instancingMorph&&d.enable(3),A.matcap&&d.enable(4),A.envMap&&d.enable(5),A.normalMapObjectSpace&&d.enable(6),A.normalMapTangentSpace&&d.enable(7),A.clearcoat&&d.enable(8),A.iridescence&&d.enable(9),A.alphaTest&&d.enable(10),A.vertexColors&&d.enable(11),A.vertexAlphas&&d.enable(12),A.vertexUv1s&&d.enable(13),A.vertexUv2s&&d.enable(14),A.vertexUv3s&&d.enable(15),A.vertexTangents&&d.enable(16),A.anisotropy&&d.enable(17),A.alphaHash&&d.enable(18),A.batching&&d.enable(19),A.dispersion&&d.enable(20),A.batchingColor&&d.enable(21),A.gradientMap&&d.enable(22),U.push(d.mask),d.disableAll(),A.fog&&d.enable(0),A.useFog&&d.enable(1),A.flatShading&&d.enable(2),A.logarithmicDepthBuffer&&d.enable(3),A.reverseDepthBuffer&&d.enable(4),A.skinning&&d.enable(5),A.morphTargets&&d.enable(6),A.morphNormals&&d.enable(7),A.morphColors&&d.enable(8),A.premultipliedAlpha&&d.enable(9),A.shadowMapEnabled&&d.enable(10),A.doubleSided&&d.enable(11),A.flipSided&&d.enable(12),A.useDepthPacking&&d.enable(13),A.dithering&&d.enable(14),A.transmission&&d.enable(15),A.sheen&&d.enable(16),A.opaque&&d.enable(17),A.pointsUvs&&d.enable(18),A.decodeVideoTexture&&d.enable(19),A.decodeVideoTextureEmissive&&d.enable(20),A.alphaToCoverage&&d.enable(21),U.push(d.mask)}function C(U){const A=T[U.type];let H;if(A){const tt=Ri[A];H=sy.clone(tt.uniforms)}else H=U.uniforms;return H}function I(U,A){let H;for(let tt=0,at=_.length;tt<at;tt++){const pt=_[tt];if(pt.cacheKey===A){H=pt,++H.usedTimes;break}}return H===void 0&&(H=new zb(o,A,U,u),_.push(H)),H}function z(U){if(--U.usedTimes===0){const A=_.indexOf(U);_[A]=_[_.length-1],_.pop(),U.destroy()}}function O(U){m.remove(U)}function X(){m.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:C,acquireProgram:I,releaseProgram:z,releaseShaderCache:O,programs:_,dispose:X}}function Vb(){let o=new WeakMap;function t(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function u(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:u}}function kb(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function $_(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function t0(){const o=[];let t=0;const i=[],s=[],l=[];function u(){t=0,i.length=0,s.length=0,l.length=0}function h(v,S,M,T,w,x){let g=o[t];return g===void 0?(g={id:v.id,object:v,geometry:S,material:M,groupOrder:T,renderOrder:v.renderOrder,z:w,group:x},o[t]=g):(g.id=v.id,g.object=v,g.geometry=S,g.material=M,g.groupOrder=T,g.renderOrder=v.renderOrder,g.z=w,g.group=x),t++,g}function d(v,S,M,T,w,x){const g=h(v,S,M,T,w,x);M.transmission>0?s.push(g):M.transparent===!0?l.push(g):i.push(g)}function m(v,S,M,T,w,x){const g=h(v,S,M,T,w,x);M.transmission>0?s.unshift(g):M.transparent===!0?l.unshift(g):i.unshift(g)}function p(v,S){i.length>1&&i.sort(v||kb),s.length>1&&s.sort(S||$_),l.length>1&&l.sort(S||$_)}function _(){for(let v=t,S=o.length;v<S;v++){const M=o[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:d,unshift:m,finish:_,sort:p}}function Xb(){let o=new WeakMap;function t(s,l){const u=o.get(s);let h;return u===void 0?(h=new t0,o.set(s,[h])):l>=u.length?(h=new t0,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function Wb(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new it,color:new Ae};break;case"SpotLight":i={position:new it,direction:new it,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new it,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":i={direction:new it,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":i={color:new Ae,position:new it,halfWidth:new it,halfHeight:new it};break}return o[t.id]=i,i}}}function qb(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let Yb=0;function jb(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function Zb(o){const t=new Wb,i=qb(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new it);const l=new it,u=new Qe,h=new Qe;function d(p){let _=0,v=0,S=0;for(let U=0;U<9;U++)s.probe[U].set(0,0,0);let M=0,T=0,w=0,x=0,g=0,L=0,D=0,C=0,I=0,z=0,O=0;p.sort(jb);for(let U=0,A=p.length;U<A;U++){const H=p[U],tt=H.color,at=H.intensity,pt=H.distance,ut=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)_+=tt.r*at,v+=tt.g*at,S+=tt.b*at;else if(H.isLightProbe){for(let F=0;F<9;F++)s.probe[F].addScaledVector(H.sh.coefficients[F],at);O++}else if(H.isDirectionalLight){const F=t.get(H);if(F.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const j=H.shadow,W=i.get(H);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,s.directionalShadow[M]=W,s.directionalShadowMap[M]=ut,s.directionalShadowMatrix[M]=H.shadow.matrix,L++}s.directional[M]=F,M++}else if(H.isSpotLight){const F=t.get(H);F.position.setFromMatrixPosition(H.matrixWorld),F.color.copy(tt).multiplyScalar(at),F.distance=pt,F.coneCos=Math.cos(H.angle),F.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),F.decay=H.decay,s.spot[w]=F;const j=H.shadow;if(H.map&&(s.spotLightMap[I]=H.map,I++,j.updateMatrices(H),H.castShadow&&z++),s.spotLightMatrix[w]=j.matrix,H.castShadow){const W=i.get(H);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,s.spotShadow[w]=W,s.spotShadowMap[w]=ut,C++}w++}else if(H.isRectAreaLight){const F=t.get(H);F.color.copy(tt).multiplyScalar(at),F.halfWidth.set(H.width*.5,0,0),F.halfHeight.set(0,H.height*.5,0),s.rectArea[x]=F,x++}else if(H.isPointLight){const F=t.get(H);if(F.color.copy(H.color).multiplyScalar(H.intensity),F.distance=H.distance,F.decay=H.decay,H.castShadow){const j=H.shadow,W=i.get(H);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,W.shadowCameraNear=j.camera.near,W.shadowCameraFar=j.camera.far,s.pointShadow[T]=W,s.pointShadowMap[T]=ut,s.pointShadowMatrix[T]=H.shadow.matrix,D++}s.point[T]=F,T++}else if(H.isHemisphereLight){const F=t.get(H);F.skyColor.copy(H.color).multiplyScalar(at),F.groundColor.copy(H.groundColor).multiplyScalar(at),s.hemi[g]=F,g++}}x>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Nt.LTC_FLOAT_1,s.rectAreaLTC2=Nt.LTC_FLOAT_2):(s.rectAreaLTC1=Nt.LTC_HALF_1,s.rectAreaLTC2=Nt.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=v,s.ambient[2]=S;const X=s.hash;(X.directionalLength!==M||X.pointLength!==T||X.spotLength!==w||X.rectAreaLength!==x||X.hemiLength!==g||X.numDirectionalShadows!==L||X.numPointShadows!==D||X.numSpotShadows!==C||X.numSpotMaps!==I||X.numLightProbes!==O)&&(s.directional.length=M,s.spot.length=w,s.rectArea.length=x,s.point.length=T,s.hemi.length=g,s.directionalShadow.length=L,s.directionalShadowMap.length=L,s.pointShadow.length=D,s.pointShadowMap.length=D,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=L,s.pointShadowMatrix.length=D,s.spotLightMatrix.length=C+I-z,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=z,s.numLightProbes=O,X.directionalLength=M,X.pointLength=T,X.spotLength=w,X.rectAreaLength=x,X.hemiLength=g,X.numDirectionalShadows=L,X.numPointShadows=D,X.numSpotShadows=C,X.numSpotMaps=I,X.numLightProbes=O,s.version=Yb++)}function m(p,_){let v=0,S=0,M=0,T=0,w=0;const x=_.matrixWorldInverse;for(let g=0,L=p.length;g<L;g++){const D=p[g];if(D.isDirectionalLight){const C=s.directional[v];C.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(x),v++}else if(D.isSpotLight){const C=s.spot[M];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(x),C.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(x),M++}else if(D.isRectAreaLight){const C=s.rectArea[T];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(x),h.identity(),u.copy(D.matrixWorld),u.premultiply(x),h.extractRotation(u),C.halfWidth.set(D.width*.5,0,0),C.halfHeight.set(0,D.height*.5,0),C.halfWidth.applyMatrix4(h),C.halfHeight.applyMatrix4(h),T++}else if(D.isPointLight){const C=s.point[S];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(x),S++}else if(D.isHemisphereLight){const C=s.hemi[w];C.direction.setFromMatrixPosition(D.matrixWorld),C.direction.transformDirection(x),w++}}}return{setup:d,setupView:m,state:s}}function e0(o){const t=new Zb(o),i=[],s=[];function l(_){p.camera=_,i.length=0,s.length=0}function u(_){i.push(_)}function h(_){s.push(_)}function d(){t.setup(i)}function m(_){t.setupView(i,_)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function Kb(o){let t=new WeakMap;function i(l,u=0){const h=t.get(l);let d;return h===void 0?(d=new e0(o),t.set(l,[d])):u>=h.length?(d=new e0(o),h.push(d)):d=h[u],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const Qb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function $b(o,t,i){let s=new _d;const l=new se,u=new se,h=new Ke,d=new gy({depthPacking:AS}),m=new _y,p={},_=i.maxTextureSize,v={[Wa]:Xn,[Xn]:Wa,[sa]:sa},S=new qa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:Qb,fragmentShader:Jb}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const T=new Ya;T.setAttribute("position",new Di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new wi(T,S),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=a0;let g=this.type;this.render=function(z,O,X){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||z.length===0)return;const U=o.getRenderTarget(),A=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),tt=o.state;tt.setBlending(ka),tt.buffers.color.setClear(1,1,1,1),tt.buffers.depth.setTest(!0),tt.setScissorTest(!1);const at=g!==aa&&this.type===aa,pt=g===aa&&this.type!==aa;for(let ut=0,F=z.length;ut<F;ut++){const j=z[ut],W=j.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;l.copy(W.mapSize);const St=W.getFrameExtents();if(l.multiply(St),u.copy(W.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(u.x=Math.floor(_/St.x),l.x=u.x*St.x,W.mapSize.x=u.x),l.y>_&&(u.y=Math.floor(_/St.y),l.y=u.y*St.y,W.mapSize.y=u.y)),W.map===null||at===!0||pt===!0){const $=this.type!==aa?{minFilter:Si,magFilter:Si}:{};W.map!==null&&W.map.dispose(),W.map=new As(l.x,l.y,$),W.map.texture.name=j.name+".shadowMap",W.camera.updateProjectionMatrix()}o.setRenderTarget(W.map),o.clear();const N=W.getViewportCount();for(let $=0;$<N;$++){const vt=W.getViewport($);h.set(u.x*vt.x,u.y*vt.y,u.x*vt.z,u.y*vt.w),tt.viewport(h),W.updateMatrices(j,$),s=W.getFrustum(),C(O,X,W.camera,j,this.type)}W.isPointLightShadow!==!0&&this.type===aa&&L(W,X),W.needsUpdate=!1}g=this.type,x.needsUpdate=!1,o.setRenderTarget(U,A,H)};function L(z,O){const X=t.update(w);S.defines.VSM_SAMPLES!==z.blurSamples&&(S.defines.VSM_SAMPLES=z.blurSamples,M.defines.VSM_SAMPLES=z.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new As(l.x,l.y)),S.uniforms.shadow_pass.value=z.map.texture,S.uniforms.resolution.value=z.mapSize,S.uniforms.radius.value=z.radius,o.setRenderTarget(z.mapPass),o.clear(),o.renderBufferDirect(O,null,X,S,w,null),M.uniforms.shadow_pass.value=z.mapPass.texture,M.uniforms.resolution.value=z.mapSize,M.uniforms.radius.value=z.radius,o.setRenderTarget(z.map),o.clear(),o.renderBufferDirect(O,null,X,M,w,null)}function D(z,O,X,U){let A=null;const H=X.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(H!==void 0)A=H;else if(A=X.isPointLight===!0?m:d,o.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const tt=A.uuid,at=O.uuid;let pt=p[tt];pt===void 0&&(pt={},p[tt]=pt);let ut=pt[at];ut===void 0&&(ut=A.clone(),pt[at]=ut,O.addEventListener("dispose",I)),A=ut}if(A.visible=O.visible,A.wireframe=O.wireframe,U===aa?A.side=O.shadowSide!==null?O.shadowSide:O.side:A.side=O.shadowSide!==null?O.shadowSide:v[O.side],A.alphaMap=O.alphaMap,A.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,A.map=O.map,A.clipShadows=O.clipShadows,A.clippingPlanes=O.clippingPlanes,A.clipIntersection=O.clipIntersection,A.displacementMap=O.displacementMap,A.displacementScale=O.displacementScale,A.displacementBias=O.displacementBias,A.wireframeLinewidth=O.wireframeLinewidth,A.linewidth=O.linewidth,X.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const tt=o.properties.get(A);tt.light=X}return A}function C(z,O,X,U,A){if(z.visible===!1)return;if(z.layers.test(O.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&A===aa)&&(!z.frustumCulled||s.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,z.matrixWorld);const at=t.update(z),pt=z.material;if(Array.isArray(pt)){const ut=at.groups;for(let F=0,j=ut.length;F<j;F++){const W=ut[F],St=pt[W.materialIndex];if(St&&St.visible){const N=D(z,St,U,A);z.onBeforeShadow(o,z,O,X,at,N,W),o.renderBufferDirect(X,null,at,N,z,W),z.onAfterShadow(o,z,O,X,at,N,W)}}}else if(pt.visible){const ut=D(z,pt,U,A);z.onBeforeShadow(o,z,O,X,at,ut,null),o.renderBufferDirect(X,null,at,ut,z,null),z.onAfterShadow(o,z,O,X,at,ut,null)}}const tt=z.children;for(let at=0,pt=tt.length;at<pt;at++)C(tt[at],O,X,U,A)}function I(z){z.target.removeEventListener("dispose",I);for(const X in p){const U=p[X],A=z.target.uuid;A in U&&(U[A].dispose(),delete U[A])}}}const tA={[Eh]:Th,[bh]:Ch,[Ah]:wh,[br]:Rh,[Th]:Eh,[Ch]:bh,[wh]:Ah,[Rh]:br};function eA(o,t){function i(){let k=!1;const Lt=new Ke;let Tt=null;const zt=new Ke(0,0,0,0);return{setMask:function(At){Tt!==At&&!k&&(o.colorMask(At,At,At,At),Tt=At)},setLocked:function(At){k=At},setClear:function(At,_t,Ft,ne,De){De===!0&&(At*=ne,_t*=ne,Ft*=ne),Lt.set(At,_t,Ft,ne),zt.equals(Lt)===!1&&(o.clearColor(At,_t,Ft,ne),zt.copy(Lt))},reset:function(){k=!1,Tt=null,zt.set(-1,0,0,0)}}}function s(){let k=!1,Lt=!1,Tt=null,zt=null,At=null;return{setReversed:function(_t){if(Lt!==_t){const Ft=t.get("EXT_clip_control");_t?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),Lt=_t;const ne=At;At=null,this.setClear(ne)}},getReversed:function(){return Lt},setTest:function(_t){_t?Rt(o.DEPTH_TEST):wt(o.DEPTH_TEST)},setMask:function(_t){Tt!==_t&&!k&&(o.depthMask(_t),Tt=_t)},setFunc:function(_t){if(Lt&&(_t=tA[_t]),zt!==_t){switch(_t){case Eh:o.depthFunc(o.NEVER);break;case Th:o.depthFunc(o.ALWAYS);break;case bh:o.depthFunc(o.LESS);break;case br:o.depthFunc(o.LEQUAL);break;case Ah:o.depthFunc(o.EQUAL);break;case Rh:o.depthFunc(o.GEQUAL);break;case Ch:o.depthFunc(o.GREATER);break;case wh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}zt=_t}},setLocked:function(_t){k=_t},setClear:function(_t){At!==_t&&(Lt&&(_t=1-_t),o.clearDepth(_t),At=_t)},reset:function(){k=!1,Tt=null,zt=null,At=null,Lt=!1}}}function l(){let k=!1,Lt=null,Tt=null,zt=null,At=null,_t=null,Ft=null,ne=null,De=null;return{setTest:function(Ee){k||(Ee?Rt(o.STENCIL_TEST):wt(o.STENCIL_TEST))},setMask:function(Ee){Lt!==Ee&&!k&&(o.stencilMask(Ee),Lt=Ee)},setFunc:function(Ee,qn,dn){(Tt!==Ee||zt!==qn||At!==dn)&&(o.stencilFunc(Ee,qn,dn),Tt=Ee,zt=qn,At=dn)},setOp:function(Ee,qn,dn){(_t!==Ee||Ft!==qn||ne!==dn)&&(o.stencilOp(Ee,qn,dn),_t=Ee,Ft=qn,ne=dn)},setLocked:function(Ee){k=Ee},setClear:function(Ee){De!==Ee&&(o.clearStencil(Ee),De=Ee)},reset:function(){k=!1,Lt=null,Tt=null,zt=null,At=null,_t=null,Ft=null,ne=null,De=null}}}const u=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let _={},v={},S=new WeakMap,M=[],T=null,w=!1,x=null,g=null,L=null,D=null,C=null,I=null,z=null,O=new Ae(0,0,0),X=0,U=!1,A=null,H=null,tt=null,at=null,pt=null;const ut=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,j=0;const W=o.getParameter(o.VERSION);W.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(W)[1]),F=j>=1):W.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),F=j>=2);let St=null,N={};const $=o.getParameter(o.SCISSOR_BOX),vt=o.getParameter(o.VIEWPORT),xt=new Ke().fromArray($),K=new Ke().fromArray(vt);function mt(k,Lt,Tt,zt){const At=new Uint8Array(4),_t=o.createTexture();o.bindTexture(k,_t),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ft=0;Ft<Tt;Ft++)k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?o.texImage3D(Lt,0,o.RGBA,1,1,zt,0,o.RGBA,o.UNSIGNED_BYTE,At):o.texImage2D(Lt+Ft,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,At);return _t}const Et={};Et[o.TEXTURE_2D]=mt(o.TEXTURE_2D,o.TEXTURE_2D,1),Et[o.TEXTURE_CUBE_MAP]=mt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Et[o.TEXTURE_2D_ARRAY]=mt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Et[o.TEXTURE_3D]=mt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),Rt(o.DEPTH_TEST),h.setFunc(br),Me(!1),pe(i_),Rt(o.CULL_FACE),G(ka);function Rt(k){_[k]!==!0&&(o.enable(k),_[k]=!0)}function wt(k){_[k]!==!1&&(o.disable(k),_[k]=!1)}function le(k,Lt){return v[k]!==Lt?(o.bindFramebuffer(k,Lt),v[k]=Lt,k===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Lt),k===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Lt),!0):!1}function Qt(k,Lt){let Tt=M,zt=!1;if(k){Tt=S.get(Lt),Tt===void 0&&(Tt=[],S.set(Lt,Tt));const At=k.textures;if(Tt.length!==At.length||Tt[0]!==o.COLOR_ATTACHMENT0){for(let _t=0,Ft=At.length;_t<Ft;_t++)Tt[_t]=o.COLOR_ATTACHMENT0+_t;Tt.length=At.length,zt=!0}}else Tt[0]!==o.BACK&&(Tt[0]=o.BACK,zt=!0);zt&&o.drawBuffers(Tt)}function Ne(k){return T!==k?(o.useProgram(k),T=k,!0):!1}const He={[Ss]:o.FUNC_ADD,[Jx]:o.FUNC_SUBTRACT,[$x]:o.FUNC_REVERSE_SUBTRACT};He[tS]=o.MIN,He[eS]=o.MAX;const ve={[nS]:o.ZERO,[iS]:o.ONE,[aS]:o.SRC_COLOR,[yh]:o.SRC_ALPHA,[uS]:o.SRC_ALPHA_SATURATE,[lS]:o.DST_COLOR,[rS]:o.DST_ALPHA,[sS]:o.ONE_MINUS_SRC_COLOR,[Mh]:o.ONE_MINUS_SRC_ALPHA,[cS]:o.ONE_MINUS_DST_COLOR,[oS]:o.ONE_MINUS_DST_ALPHA,[fS]:o.CONSTANT_COLOR,[hS]:o.ONE_MINUS_CONSTANT_COLOR,[dS]:o.CONSTANT_ALPHA,[pS]:o.ONE_MINUS_CONSTANT_ALPHA};function G(k,Lt,Tt,zt,At,_t,Ft,ne,De,Ee){if(k===ka){w===!0&&(wt(o.BLEND),w=!1);return}if(w===!1&&(Rt(o.BLEND),w=!0),k!==Qx){if(k!==x||Ee!==U){if((g!==Ss||C!==Ss)&&(o.blendEquation(o.FUNC_ADD),g=Ss,C=Ss),Ee)switch(k){case Mr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case a_:o.blendFunc(o.ONE,o.ONE);break;case s_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case r_:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Mr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case a_:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case s_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case r_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}L=null,D=null,I=null,z=null,O.set(0,0,0),X=0,x=k,U=Ee}return}At=At||Lt,_t=_t||Tt,Ft=Ft||zt,(Lt!==g||At!==C)&&(o.blendEquationSeparate(He[Lt],He[At]),g=Lt,C=At),(Tt!==L||zt!==D||_t!==I||Ft!==z)&&(o.blendFuncSeparate(ve[Tt],ve[zt],ve[_t],ve[Ft]),L=Tt,D=zt,I=_t,z=Ft),(ne.equals(O)===!1||De!==X)&&(o.blendColor(ne.r,ne.g,ne.b,De),O.copy(ne),X=De),x=k,U=!1}function Sn(k,Lt){k.side===sa?wt(o.CULL_FACE):Rt(o.CULL_FACE);let Tt=k.side===Xn;Lt&&(Tt=!Tt),Me(Tt),k.blending===Mr&&k.transparent===!1?G(ka):G(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),u.setMask(k.colorWrite);const zt=k.stencilWrite;d.setTest(zt),zt&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),xe(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Rt(o.SAMPLE_ALPHA_TO_COVERAGE):wt(o.SAMPLE_ALPHA_TO_COVERAGE)}function Me(k){A!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),A=k)}function pe(k){k!==jx?(Rt(o.CULL_FACE),k!==H&&(k===i_?o.cullFace(o.BACK):k===Zx?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):wt(o.CULL_FACE),H=k}function Vt(k){k!==tt&&(F&&o.lineWidth(k),tt=k)}function xe(k,Lt,Tt){k?(Rt(o.POLYGON_OFFSET_FILL),(at!==Lt||pt!==Tt)&&(o.polygonOffset(Lt,Tt),at=Lt,pt=Tt)):wt(o.POLYGON_OFFSET_FILL)}function jt(k){k?Rt(o.SCISSOR_TEST):wt(o.SCISSOR_TEST)}function ae(k){k===void 0&&(k=o.TEXTURE0+ut-1),St!==k&&(o.activeTexture(k),St=k)}function Je(k,Lt,Tt){Tt===void 0&&(St===null?Tt=o.TEXTURE0+ut-1:Tt=St);let zt=N[Tt];zt===void 0&&(zt={type:void 0,texture:void 0},N[Tt]=zt),(zt.type!==k||zt.texture!==Lt)&&(St!==Tt&&(o.activeTexture(Tt),St=Tt),o.bindTexture(k,Lt||Et[k]),zt.type=k,zt.texture=Lt)}function P(){const k=N[St];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function et(){try{o.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ft(){try{o.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function dt(){try{o.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function lt(){try{o.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pt(){try{o.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ut(){try{o.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Gt(){try{o.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function kt(){try{o.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function yt(){try{o.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function It(k){xt.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),xt.copy(k))}function qt(k){K.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),K.copy(k))}function Yt(k,Lt){let Tt=p.get(Lt);Tt===void 0&&(Tt=new WeakMap,p.set(Lt,Tt));let zt=Tt.get(k);zt===void 0&&(zt=o.getUniformBlockIndex(Lt,k.name),Tt.set(k,zt))}function Ct(k,Lt){const zt=p.get(Lt).get(k);m.get(Lt)!==zt&&(o.uniformBlockBinding(Lt,zt,k.__bindingPointIndex),m.set(Lt,zt))}function ie(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},St=null,N={},v={},S=new WeakMap,M=[],T=null,w=!1,x=null,g=null,L=null,D=null,C=null,I=null,z=null,O=new Ae(0,0,0),X=0,U=!1,A=null,H=null,tt=null,at=null,pt=null,xt.set(0,0,o.canvas.width,o.canvas.height),K.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:Rt,disable:wt,bindFramebuffer:le,drawBuffers:Qt,useProgram:Ne,setBlending:G,setMaterial:Sn,setFlipSided:Me,setCullFace:pe,setLineWidth:Vt,setPolygonOffset:xe,setScissorTest:jt,activeTexture:ae,bindTexture:Je,unbindTexture:P,compressedTexImage2D:E,compressedTexImage3D:et,texImage2D:kt,texImage3D:yt,updateUBOMapping:Yt,uniformBlockBinding:Ct,texStorage2D:Ut,texStorage3D:Gt,texSubImage2D:ft,texSubImage3D:dt,compressedTexSubImage2D:lt,compressedTexSubImage3D:Pt,scissor:It,viewport:qt,reset:ie}}function nA(o,t,i,s,l,u,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new se,_=new WeakMap;let v;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(P,E){return M?new OffscreenCanvas(P,E):Dc("canvas")}function w(P,E,et){let ft=1;const dt=Je(P);if((dt.width>et||dt.height>et)&&(ft=et/Math.max(dt.width,dt.height)),ft<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const lt=Math.floor(ft*dt.width),Pt=Math.floor(ft*dt.height);v===void 0&&(v=T(lt,Pt));const Ut=E?T(lt,Pt):v;return Ut.width=lt,Ut.height=Pt,Ut.getContext("2d").drawImage(P,0,0,lt,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+dt.width+"x"+dt.height+") to ("+lt+"x"+Pt+")."),Ut}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+dt.width+"x"+dt.height+")."),P;return P}function x(P){return P.generateMipmaps}function g(P){o.generateMipmap(P)}function L(P){return P.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?o.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function D(P,E,et,ft,dt=!1){if(P!==null){if(o[P]!==void 0)return o[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let lt=E;if(E===o.RED&&(et===o.FLOAT&&(lt=o.R32F),et===o.HALF_FLOAT&&(lt=o.R16F),et===o.UNSIGNED_BYTE&&(lt=o.R8)),E===o.RED_INTEGER&&(et===o.UNSIGNED_BYTE&&(lt=o.R8UI),et===o.UNSIGNED_SHORT&&(lt=o.R16UI),et===o.UNSIGNED_INT&&(lt=o.R32UI),et===o.BYTE&&(lt=o.R8I),et===o.SHORT&&(lt=o.R16I),et===o.INT&&(lt=o.R32I)),E===o.RG&&(et===o.FLOAT&&(lt=o.RG32F),et===o.HALF_FLOAT&&(lt=o.RG16F),et===o.UNSIGNED_BYTE&&(lt=o.RG8)),E===o.RG_INTEGER&&(et===o.UNSIGNED_BYTE&&(lt=o.RG8UI),et===o.UNSIGNED_SHORT&&(lt=o.RG16UI),et===o.UNSIGNED_INT&&(lt=o.RG32UI),et===o.BYTE&&(lt=o.RG8I),et===o.SHORT&&(lt=o.RG16I),et===o.INT&&(lt=o.RG32I)),E===o.RGB_INTEGER&&(et===o.UNSIGNED_BYTE&&(lt=o.RGB8UI),et===o.UNSIGNED_SHORT&&(lt=o.RGB16UI),et===o.UNSIGNED_INT&&(lt=o.RGB32UI),et===o.BYTE&&(lt=o.RGB8I),et===o.SHORT&&(lt=o.RGB16I),et===o.INT&&(lt=o.RGB32I)),E===o.RGBA_INTEGER&&(et===o.UNSIGNED_BYTE&&(lt=o.RGBA8UI),et===o.UNSIGNED_SHORT&&(lt=o.RGBA16UI),et===o.UNSIGNED_INT&&(lt=o.RGBA32UI),et===o.BYTE&&(lt=o.RGBA8I),et===o.SHORT&&(lt=o.RGBA16I),et===o.INT&&(lt=o.RGBA32I)),E===o.RGB&&et===o.UNSIGNED_INT_5_9_9_9_REV&&(lt=o.RGB9_E5),E===o.RGBA){const Pt=dt?Rc:be.getTransfer(ft);et===o.FLOAT&&(lt=o.RGBA32F),et===o.HALF_FLOAT&&(lt=o.RGBA16F),et===o.UNSIGNED_BYTE&&(lt=Pt===Be?o.SRGB8_ALPHA8:o.RGBA8),et===o.UNSIGNED_SHORT_4_4_4_4&&(lt=o.RGBA4),et===o.UNSIGNED_SHORT_5_5_5_1&&(lt=o.RGB5_A1)}return(lt===o.R16F||lt===o.R32F||lt===o.RG16F||lt===o.RG32F||lt===o.RGBA16F||lt===o.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function C(P,E){let et;return P?E===null||E===Ts||E===No?et=o.DEPTH24_STENCIL8:E===ra?et=o.DEPTH32F_STENCIL8:E===Lo&&(et=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ts||E===No?et=o.DEPTH_COMPONENT24:E===ra?et=o.DEPTH_COMPONENT32F:E===Lo&&(et=o.DEPTH_COMPONENT16),et}function I(P,E){return x(P)===!0||P.isFramebufferTexture&&P.minFilter!==Si&&P.minFilter!==Ci?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function z(P){const E=P.target;E.removeEventListener("dispose",z),X(E),E.isVideoTexture&&_.delete(E)}function O(P){const E=P.target;E.removeEventListener("dispose",O),A(E)}function X(P){const E=s.get(P);if(E.__webglInit===void 0)return;const et=P.source,ft=S.get(et);if(ft){const dt=ft[E.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&U(P),Object.keys(ft).length===0&&S.delete(et)}s.remove(P)}function U(P){const E=s.get(P);o.deleteTexture(E.__webglTexture);const et=P.source,ft=S.get(et);delete ft[E.__cacheKey],h.memory.textures--}function A(P){const E=s.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),s.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray(E.__webglFramebuffer[ft]))for(let dt=0;dt<E.__webglFramebuffer[ft].length;dt++)o.deleteFramebuffer(E.__webglFramebuffer[ft][dt]);else o.deleteFramebuffer(E.__webglFramebuffer[ft]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[ft])}else{if(Array.isArray(E.__webglFramebuffer))for(let ft=0;ft<E.__webglFramebuffer.length;ft++)o.deleteFramebuffer(E.__webglFramebuffer[ft]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ft=0;ft<E.__webglColorRenderbuffer.length;ft++)E.__webglColorRenderbuffer[ft]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[ft]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const et=P.textures;for(let ft=0,dt=et.length;ft<dt;ft++){const lt=s.get(et[ft]);lt.__webglTexture&&(o.deleteTexture(lt.__webglTexture),h.memory.textures--),s.remove(et[ft])}s.remove(P)}let H=0;function tt(){H=0}function at(){const P=H;return P>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l.maxTextures),H+=1,P}function pt(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function ut(P,E){const et=s.get(P);if(P.isVideoTexture&&jt(P),P.isRenderTargetTexture===!1&&P.version>0&&et.__version!==P.version){const ft=P.image;if(ft===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Et(et,P,E);return}}i.bindTexture(o.TEXTURE_2D,et.__webglTexture,o.TEXTURE0+E)}function F(P,E){const et=s.get(P);if(P.version>0&&et.__version!==P.version){Et(et,P,E);return}i.bindTexture(o.TEXTURE_2D_ARRAY,et.__webglTexture,o.TEXTURE0+E)}function j(P,E){const et=s.get(P);if(P.version>0&&et.__version!==P.version){Et(et,P,E);return}i.bindTexture(o.TEXTURE_3D,et.__webglTexture,o.TEXTURE0+E)}function W(P,E){const et=s.get(P);if(P.version>0&&et.__version!==P.version){Rt(et,P,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,et.__webglTexture,o.TEXTURE0+E)}const St={[Lh]:o.REPEAT,[Ms]:o.CLAMP_TO_EDGE,[Nh]:o.MIRRORED_REPEAT},N={[Si]:o.NEAREST,[TS]:o.NEAREST_MIPMAP_NEAREST,[Ql]:o.NEAREST_MIPMAP_LINEAR,[Ci]:o.LINEAR,[kf]:o.LINEAR_MIPMAP_NEAREST,[Es]:o.LINEAR_MIPMAP_LINEAR},$={[CS]:o.NEVER,[OS]:o.ALWAYS,[wS]:o.LESS,[g0]:o.LEQUAL,[DS]:o.EQUAL,[NS]:o.GEQUAL,[US]:o.GREATER,[LS]:o.NOTEQUAL};function vt(P,E){if(E.type===ra&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Ci||E.magFilter===kf||E.magFilter===Ql||E.magFilter===Es||E.minFilter===Ci||E.minFilter===kf||E.minFilter===Ql||E.minFilter===Es)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(P,o.TEXTURE_WRAP_S,St[E.wrapS]),o.texParameteri(P,o.TEXTURE_WRAP_T,St[E.wrapT]),(P===o.TEXTURE_3D||P===o.TEXTURE_2D_ARRAY)&&o.texParameteri(P,o.TEXTURE_WRAP_R,St[E.wrapR]),o.texParameteri(P,o.TEXTURE_MAG_FILTER,N[E.magFilter]),o.texParameteri(P,o.TEXTURE_MIN_FILTER,N[E.minFilter]),E.compareFunction&&(o.texParameteri(P,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(P,o.TEXTURE_COMPARE_FUNC,$[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Si||E.minFilter!==Ql&&E.minFilter!==Es||E.type===ra&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const et=t.get("EXT_texture_filter_anisotropic");o.texParameterf(P,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function xt(P,E){let et=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",z));const ft=E.source;let dt=S.get(ft);dt===void 0&&(dt={},S.set(ft,dt));const lt=pt(E);if(lt!==P.__cacheKey){dt[lt]===void 0&&(dt[lt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,et=!0),dt[lt].usedTimes++;const Pt=dt[P.__cacheKey];Pt!==void 0&&(dt[P.__cacheKey].usedTimes--,Pt.usedTimes===0&&U(E)),P.__cacheKey=lt,P.__webglTexture=dt[lt].texture}return et}function K(P,E,et){return Math.floor(Math.floor(P/et)/E)}function mt(P,E,et,ft){const lt=P.updateRanges;if(lt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,et,ft,E.data);else{lt.sort((yt,It)=>yt.start-It.start);let Pt=0;for(let yt=1;yt<lt.length;yt++){const It=lt[Pt],qt=lt[yt],Yt=It.start+It.count,Ct=K(qt.start,E.width,4),ie=K(It.start,E.width,4);qt.start<=Yt+1&&Ct===ie&&K(qt.start+qt.count-1,E.width,4)===Ct?It.count=Math.max(It.count,qt.start+qt.count-It.start):(++Pt,lt[Pt]=qt)}lt.length=Pt+1;const Ut=o.getParameter(o.UNPACK_ROW_LENGTH),Gt=o.getParameter(o.UNPACK_SKIP_PIXELS),kt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let yt=0,It=lt.length;yt<It;yt++){const qt=lt[yt],Yt=Math.floor(qt.start/4),Ct=Math.ceil(qt.count/4),ie=Yt%E.width,k=Math.floor(Yt/E.width),Lt=Ct,Tt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ie),o.pixelStorei(o.UNPACK_SKIP_ROWS,k),i.texSubImage2D(o.TEXTURE_2D,0,ie,k,Lt,Tt,et,ft,E.data)}P.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ut),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Gt),o.pixelStorei(o.UNPACK_SKIP_ROWS,kt)}}function Et(P,E,et){let ft=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ft=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ft=o.TEXTURE_3D);const dt=xt(P,E),lt=E.source;i.bindTexture(ft,P.__webglTexture,o.TEXTURE0+et);const Pt=s.get(lt);if(lt.version!==Pt.__version||dt===!0){i.activeTexture(o.TEXTURE0+et);const Ut=be.getPrimaries(be.workingColorSpace),Gt=E.colorSpace===Va?null:be.getPrimaries(E.colorSpace),kt=E.colorSpace===Va||Ut===Gt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);let yt=w(E.image,!1,l.maxTextureSize);yt=ae(E,yt);const It=u.convert(E.format,E.colorSpace),qt=u.convert(E.type);let Yt=D(E.internalFormat,It,qt,E.colorSpace,E.isVideoTexture);vt(ft,E);let Ct;const ie=E.mipmaps,k=E.isVideoTexture!==!0,Lt=Pt.__version===void 0||dt===!0,Tt=lt.dataReady,zt=I(E,yt);if(E.isDepthTexture)Yt=C(E.format===Po,E.type),Lt&&(k?i.texStorage2D(o.TEXTURE_2D,1,Yt,yt.width,yt.height):i.texImage2D(o.TEXTURE_2D,0,Yt,yt.width,yt.height,0,It,qt,null));else if(E.isDataTexture)if(ie.length>0){k&&Lt&&i.texStorage2D(o.TEXTURE_2D,zt,Yt,ie[0].width,ie[0].height);for(let At=0,_t=ie.length;At<_t;At++)Ct=ie[At],k?Tt&&i.texSubImage2D(o.TEXTURE_2D,At,0,0,Ct.width,Ct.height,It,qt,Ct.data):i.texImage2D(o.TEXTURE_2D,At,Yt,Ct.width,Ct.height,0,It,qt,Ct.data);E.generateMipmaps=!1}else k?(Lt&&i.texStorage2D(o.TEXTURE_2D,zt,Yt,yt.width,yt.height),Tt&&mt(E,yt,It,qt)):i.texImage2D(o.TEXTURE_2D,0,Yt,yt.width,yt.height,0,It,qt,yt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){k&&Lt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,zt,Yt,ie[0].width,ie[0].height,yt.depth);for(let At=0,_t=ie.length;At<_t;At++)if(Ct=ie[At],E.format!==xi)if(It!==null)if(k){if(Tt)if(E.layerUpdates.size>0){const Ft=U_(Ct.width,Ct.height,E.format,E.type);for(const ne of E.layerUpdates){const De=Ct.data.subarray(ne*Ft/Ct.data.BYTES_PER_ELEMENT,(ne+1)*Ft/Ct.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,At,0,0,ne,Ct.width,Ct.height,1,It,De)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,At,0,0,0,Ct.width,Ct.height,yt.depth,It,Ct.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,At,Yt,Ct.width,Ct.height,yt.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Tt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,At,0,0,0,Ct.width,Ct.height,yt.depth,It,qt,Ct.data):i.texImage3D(o.TEXTURE_2D_ARRAY,At,Yt,Ct.width,Ct.height,yt.depth,0,It,qt,Ct.data)}else{k&&Lt&&i.texStorage2D(o.TEXTURE_2D,zt,Yt,ie[0].width,ie[0].height);for(let At=0,_t=ie.length;At<_t;At++)Ct=ie[At],E.format!==xi?It!==null?k?Tt&&i.compressedTexSubImage2D(o.TEXTURE_2D,At,0,0,Ct.width,Ct.height,It,Ct.data):i.compressedTexImage2D(o.TEXTURE_2D,At,Yt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Tt&&i.texSubImage2D(o.TEXTURE_2D,At,0,0,Ct.width,Ct.height,It,qt,Ct.data):i.texImage2D(o.TEXTURE_2D,At,Yt,Ct.width,Ct.height,0,It,qt,Ct.data)}else if(E.isDataArrayTexture)if(k){if(Lt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,zt,Yt,yt.width,yt.height,yt.depth),Tt)if(E.layerUpdates.size>0){const At=U_(yt.width,yt.height,E.format,E.type);for(const _t of E.layerUpdates){const Ft=yt.data.subarray(_t*At/yt.data.BYTES_PER_ELEMENT,(_t+1)*At/yt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_t,yt.width,yt.height,1,It,qt,Ft)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,It,qt,yt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Yt,yt.width,yt.height,yt.depth,0,It,qt,yt.data);else if(E.isData3DTexture)k?(Lt&&i.texStorage3D(o.TEXTURE_3D,zt,Yt,yt.width,yt.height,yt.depth),Tt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,It,qt,yt.data)):i.texImage3D(o.TEXTURE_3D,0,Yt,yt.width,yt.height,yt.depth,0,It,qt,yt.data);else if(E.isFramebufferTexture){if(Lt)if(k)i.texStorage2D(o.TEXTURE_2D,zt,Yt,yt.width,yt.height);else{let At=yt.width,_t=yt.height;for(let Ft=0;Ft<zt;Ft++)i.texImage2D(o.TEXTURE_2D,Ft,Yt,At,_t,0,It,qt,null),At>>=1,_t>>=1}}else if(ie.length>0){if(k&&Lt){const At=Je(ie[0]);i.texStorage2D(o.TEXTURE_2D,zt,Yt,At.width,At.height)}for(let At=0,_t=ie.length;At<_t;At++)Ct=ie[At],k?Tt&&i.texSubImage2D(o.TEXTURE_2D,At,0,0,It,qt,Ct):i.texImage2D(o.TEXTURE_2D,At,Yt,It,qt,Ct);E.generateMipmaps=!1}else if(k){if(Lt){const At=Je(yt);i.texStorage2D(o.TEXTURE_2D,zt,Yt,At.width,At.height)}Tt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,It,qt,yt)}else i.texImage2D(o.TEXTURE_2D,0,Yt,It,qt,yt);x(E)&&g(ft),Pt.__version=lt.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function Rt(P,E,et){if(E.image.length!==6)return;const ft=xt(P,E),dt=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,P.__webglTexture,o.TEXTURE0+et);const lt=s.get(dt);if(dt.version!==lt.__version||ft===!0){i.activeTexture(o.TEXTURE0+et);const Pt=be.getPrimaries(be.workingColorSpace),Ut=E.colorSpace===Va?null:be.getPrimaries(E.colorSpace),Gt=E.colorSpace===Va||Pt===Ut?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);const kt=E.isCompressedTexture||E.image[0].isCompressedTexture,yt=E.image[0]&&E.image[0].isDataTexture,It=[];for(let _t=0;_t<6;_t++)!kt&&!yt?It[_t]=w(E.image[_t],!0,l.maxCubemapSize):It[_t]=yt?E.image[_t].image:E.image[_t],It[_t]=ae(E,It[_t]);const qt=It[0],Yt=u.convert(E.format,E.colorSpace),Ct=u.convert(E.type),ie=D(E.internalFormat,Yt,Ct,E.colorSpace),k=E.isVideoTexture!==!0,Lt=lt.__version===void 0||ft===!0,Tt=dt.dataReady;let zt=I(E,qt);vt(o.TEXTURE_CUBE_MAP,E);let At;if(kt){k&&Lt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,zt,ie,qt.width,qt.height);for(let _t=0;_t<6;_t++){At=It[_t].mipmaps;for(let Ft=0;Ft<At.length;Ft++){const ne=At[Ft];E.format!==xi?Yt!==null?k?Tt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft,0,0,ne.width,ne.height,Yt,ne.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft,ie,ne.width,ne.height,0,ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft,0,0,ne.width,ne.height,Yt,Ct,ne.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft,ie,ne.width,ne.height,0,Yt,Ct,ne.data)}}}else{if(At=E.mipmaps,k&&Lt){At.length>0&&zt++;const _t=Je(It[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,zt,ie,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(yt){k?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,It[_t].width,It[_t].height,Yt,Ct,It[_t].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ie,It[_t].width,It[_t].height,0,Yt,Ct,It[_t].data);for(let Ft=0;Ft<At.length;Ft++){const De=At[Ft].image[_t].image;k?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft+1,0,0,De.width,De.height,Yt,Ct,De.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft+1,ie,De.width,De.height,0,Yt,Ct,De.data)}}else{k?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Yt,Ct,It[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ie,Yt,Ct,It[_t]);for(let Ft=0;Ft<At.length;Ft++){const ne=At[Ft];k?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft+1,0,0,Yt,Ct,ne.image[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft+1,ie,Yt,Ct,ne.image[_t])}}}x(E)&&g(o.TEXTURE_CUBE_MAP),lt.__version=dt.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function wt(P,E,et,ft,dt,lt){const Pt=u.convert(et.format,et.colorSpace),Ut=u.convert(et.type),Gt=D(et.internalFormat,Pt,Ut,et.colorSpace),kt=s.get(E),yt=s.get(et);if(yt.__renderTarget=E,!kt.__hasExternalTextures){const It=Math.max(1,E.width>>lt),qt=Math.max(1,E.height>>lt);dt===o.TEXTURE_3D||dt===o.TEXTURE_2D_ARRAY?i.texImage3D(dt,lt,Gt,It,qt,E.depth,0,Pt,Ut,null):i.texImage2D(dt,lt,Gt,It,qt,0,Pt,Ut,null)}i.bindFramebuffer(o.FRAMEBUFFER,P),xe(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ft,dt,yt.__webglTexture,0,Vt(E)):(dt===o.TEXTURE_2D||dt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ft,dt,yt.__webglTexture,lt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function le(P,E,et){if(o.bindRenderbuffer(o.RENDERBUFFER,P),E.depthBuffer){const ft=E.depthTexture,dt=ft&&ft.isDepthTexture?ft.type:null,lt=C(E.stencilBuffer,dt),Pt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ut=Vt(E);xe(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ut,lt,E.width,E.height):et?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ut,lt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,lt,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Pt,o.RENDERBUFFER,P)}else{const ft=E.textures;for(let dt=0;dt<ft.length;dt++){const lt=ft[dt],Pt=u.convert(lt.format,lt.colorSpace),Ut=u.convert(lt.type),Gt=D(lt.internalFormat,Pt,Ut,lt.colorSpace),kt=Vt(E);et&&xe(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,kt,Gt,E.width,E.height):xe(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,kt,Gt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Gt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Qt(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ft=s.get(E.depthTexture);ft.__renderTarget=E,(!ft.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ut(E.depthTexture,0);const dt=ft.__webglTexture,lt=Vt(E);if(E.depthTexture.format===Oo)xe(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,dt,0,lt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,dt,0);else if(E.depthTexture.format===Po)xe(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,dt,0,lt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,dt,0);else throw new Error("Unknown depthTexture format")}function Ne(P){const E=s.get(P),et=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const ft=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ft){const dt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ft.removeEventListener("dispose",dt)};ft.addEventListener("dispose",dt),E.__depthDisposeCallback=dt}E.__boundDepthTexture=ft}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");const ft=P.texture.mipmaps;ft&&ft.length>0?Qt(E.__webglFramebuffer[0],P):Qt(E.__webglFramebuffer,P)}else if(et){E.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[ft]),E.__webglDepthbuffer[ft]===void 0)E.__webglDepthbuffer[ft]=o.createRenderbuffer(),le(E.__webglDepthbuffer[ft],P,!1);else{const dt=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,lt=E.__webglDepthbuffer[ft];o.bindRenderbuffer(o.RENDERBUFFER,lt),o.framebufferRenderbuffer(o.FRAMEBUFFER,dt,o.RENDERBUFFER,lt)}}else{const ft=P.texture.mipmaps;if(ft&&ft.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),le(E.__webglDepthbuffer,P,!1);else{const dt=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,lt=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,lt),o.framebufferRenderbuffer(o.FRAMEBUFFER,dt,o.RENDERBUFFER,lt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function He(P,E,et){const ft=s.get(P);E!==void 0&&wt(ft.__webglFramebuffer,P,P.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),et!==void 0&&Ne(P)}function ve(P){const E=P.texture,et=s.get(P),ft=s.get(E);P.addEventListener("dispose",O);const dt=P.textures,lt=P.isWebGLCubeRenderTarget===!0,Pt=dt.length>1;if(Pt||(ft.__webglTexture===void 0&&(ft.__webglTexture=o.createTexture()),ft.__version=E.version,h.memory.textures++),lt){et.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(E.mipmaps&&E.mipmaps.length>0){et.__webglFramebuffer[Ut]=[];for(let Gt=0;Gt<E.mipmaps.length;Gt++)et.__webglFramebuffer[Ut][Gt]=o.createFramebuffer()}else et.__webglFramebuffer[Ut]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){et.__webglFramebuffer=[];for(let Ut=0;Ut<E.mipmaps.length;Ut++)et.__webglFramebuffer[Ut]=o.createFramebuffer()}else et.__webglFramebuffer=o.createFramebuffer();if(Pt)for(let Ut=0,Gt=dt.length;Ut<Gt;Ut++){const kt=s.get(dt[Ut]);kt.__webglTexture===void 0&&(kt.__webglTexture=o.createTexture(),h.memory.textures++)}if(P.samples>0&&xe(P)===!1){et.__webglMultisampledFramebuffer=o.createFramebuffer(),et.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let Ut=0;Ut<dt.length;Ut++){const Gt=dt[Ut];et.__webglColorRenderbuffer[Ut]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,et.__webglColorRenderbuffer[Ut]);const kt=u.convert(Gt.format,Gt.colorSpace),yt=u.convert(Gt.type),It=D(Gt.internalFormat,kt,yt,Gt.colorSpace,P.isXRRenderTarget===!0),qt=Vt(P);o.renderbufferStorageMultisample(o.RENDERBUFFER,qt,It,P.width,P.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ut,o.RENDERBUFFER,et.__webglColorRenderbuffer[Ut])}o.bindRenderbuffer(o.RENDERBUFFER,null),P.depthBuffer&&(et.__webglDepthRenderbuffer=o.createRenderbuffer(),le(et.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(lt){i.bindTexture(o.TEXTURE_CUBE_MAP,ft.__webglTexture),vt(o.TEXTURE_CUBE_MAP,E);for(let Ut=0;Ut<6;Ut++)if(E.mipmaps&&E.mipmaps.length>0)for(let Gt=0;Gt<E.mipmaps.length;Gt++)wt(et.__webglFramebuffer[Ut][Gt],P,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,Gt);else wt(et.__webglFramebuffer[Ut],P,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);x(E)&&g(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Pt){for(let Ut=0,Gt=dt.length;Ut<Gt;Ut++){const kt=dt[Ut],yt=s.get(kt);i.bindTexture(o.TEXTURE_2D,yt.__webglTexture),vt(o.TEXTURE_2D,kt),wt(et.__webglFramebuffer,P,kt,o.COLOR_ATTACHMENT0+Ut,o.TEXTURE_2D,0),x(kt)&&g(o.TEXTURE_2D)}i.unbindTexture()}else{let Ut=o.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ut=P.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ut,ft.__webglTexture),vt(Ut,E),E.mipmaps&&E.mipmaps.length>0)for(let Gt=0;Gt<E.mipmaps.length;Gt++)wt(et.__webglFramebuffer[Gt],P,E,o.COLOR_ATTACHMENT0,Ut,Gt);else wt(et.__webglFramebuffer,P,E,o.COLOR_ATTACHMENT0,Ut,0);x(E)&&g(Ut),i.unbindTexture()}P.depthBuffer&&Ne(P)}function G(P){const E=P.textures;for(let et=0,ft=E.length;et<ft;et++){const dt=E[et];if(x(dt)){const lt=L(P),Pt=s.get(dt).__webglTexture;i.bindTexture(lt,Pt),g(lt),i.unbindTexture()}}}const Sn=[],Me=[];function pe(P){if(P.samples>0){if(xe(P)===!1){const E=P.textures,et=P.width,ft=P.height;let dt=o.COLOR_BUFFER_BIT;const lt=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Pt=s.get(P),Ut=E.length>1;if(Ut)for(let kt=0;kt<E.length;kt++)i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+kt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+kt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer);const Gt=P.texture.mipmaps;Gt&&Gt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let kt=0;kt<E.length;kt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(dt|=o.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(dt|=o.STENCIL_BUFFER_BIT)),Ut){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Pt.__webglColorRenderbuffer[kt]);const yt=s.get(E[kt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,yt,0)}o.blitFramebuffer(0,0,et,ft,0,0,et,ft,dt,o.NEAREST),m===!0&&(Sn.length=0,Me.length=0,Sn.push(o.COLOR_ATTACHMENT0+kt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Sn.push(lt),Me.push(lt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Me)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Sn))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ut)for(let kt=0;kt<E.length;kt++){i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+kt,o.RENDERBUFFER,Pt.__webglColorRenderbuffer[kt]);const yt=s.get(E[kt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+kt,o.TEXTURE_2D,yt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&m){const E=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function Vt(P){return Math.min(l.maxSamples,P.samples)}function xe(P){const E=s.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function jt(P){const E=h.render.frame;_.get(P)!==E&&(_.set(P,E),P.update())}function ae(P,E){const et=P.colorSpace,ft=P.format,dt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||et!==Cr&&et!==Va&&(be.getTransfer(et)===Be?(ft!==xi||dt!==Ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),E}function Je(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(p.width=P.naturalWidth||P.width,p.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(p.width=P.displayWidth,p.height=P.displayHeight):(p.width=P.width,p.height=P.height),p}this.allocateTextureUnit=at,this.resetTextureUnits=tt,this.setTexture2D=ut,this.setTexture2DArray=F,this.setTexture3D=j,this.setTextureCube=W,this.rebindTextures=He,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=xe}function iA(o,t){function i(s,l=Va){let u;const h=be.getTransfer(l);if(s===Ui)return o.UNSIGNED_BYTE;if(s===ud)return o.UNSIGNED_SHORT_4_4_4_4;if(s===fd)return o.UNSIGNED_SHORT_5_5_5_1;if(s===c0)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===o0)return o.BYTE;if(s===l0)return o.SHORT;if(s===Lo)return o.UNSIGNED_SHORT;if(s===cd)return o.INT;if(s===Ts)return o.UNSIGNED_INT;if(s===ra)return o.FLOAT;if(s===Io)return o.HALF_FLOAT;if(s===u0)return o.ALPHA;if(s===f0)return o.RGB;if(s===xi)return o.RGBA;if(s===Oo)return o.DEPTH_COMPONENT;if(s===Po)return o.DEPTH_STENCIL;if(s===h0)return o.RED;if(s===hd)return o.RED_INTEGER;if(s===d0)return o.RG;if(s===dd)return o.RG_INTEGER;if(s===pd)return o.RGBA_INTEGER;if(s===Sc||s===yc||s===Mc||s===Ec)if(h===Be)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===Sc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===yc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Mc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ec)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===Sc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===yc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Mc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ec)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Oh||s===Ph||s===Ih||s===zh)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===Oh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ph)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ih)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===zh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Bh||s===Fh||s===Hh)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(s===Bh||s===Fh)return h===Be?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===Hh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Gh||s===Vh||s===kh||s===Xh||s===Wh||s===qh||s===Yh||s===jh||s===Zh||s===Kh||s===Qh||s===Jh||s===$h||s===td)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(s===Gh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Vh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===kh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Xh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Wh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===qh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Yh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===jh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Zh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Kh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Qh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Jh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===$h)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===td)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Tc||s===ed||s===nd)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(s===Tc)return h===Be?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ed)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===nd)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===p0||s===id||s===ad||s===sd)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(s===Tc)return u.COMPRESSED_RED_RGTC1_EXT;if(s===id)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ad)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===sd)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===No?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const aA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class rA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,s){if(this.texture===null){const l=new Wn,u=t.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==s.depthNear||i.depthFar!==s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new qa({vertexShader:aA,fragmentShader:sA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new wi(new Lc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class oA extends Rs{constructor(t,i){super();const s=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,_=null,v=null,S=null,M=null,T=null;const w=new rA,x=i.getContextAttributes();let g=null,L=null;const D=[],C=[],I=new se;let z=null;const O=new ii;O.viewport=new Ke;const X=new ii;X.viewport=new Ke;const U=[O,X],A=new Ry;let H=null,tt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let mt=D[K];return mt===void 0&&(mt=new fh,D[K]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(K){let mt=D[K];return mt===void 0&&(mt=new fh,D[K]=mt),mt.getGripSpace()},this.getHand=function(K){let mt=D[K];return mt===void 0&&(mt=new fh,D[K]=mt),mt.getHandSpace()};function at(K){const mt=C.indexOf(K.inputSource);if(mt===-1)return;const Et=D[mt];Et!==void 0&&(Et.update(K.inputSource,K.frame,p||h),Et.dispatchEvent({type:K.type,data:K.inputSource}))}function pt(){l.removeEventListener("select",at),l.removeEventListener("selectstart",at),l.removeEventListener("selectend",at),l.removeEventListener("squeeze",at),l.removeEventListener("squeezestart",at),l.removeEventListener("squeezeend",at),l.removeEventListener("end",pt),l.removeEventListener("inputsourceschange",ut);for(let K=0;K<D.length;K++){const mt=C[K];mt!==null&&(C[K]=null,D[K].disconnect(mt))}H=null,tt=null,w.reset(),t.setRenderTarget(g),M=null,S=null,v=null,l=null,L=null,xt.stop(),s.isPresenting=!1,t.setPixelRatio(z),t.setSize(I.width,I.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){u=K,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){d=K,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(K){p=K},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return v},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(K){if(l=K,l!==null){if(g=t.getRenderTarget(),l.addEventListener("select",at),l.addEventListener("selectstart",at),l.addEventListener("selectend",at),l.addEventListener("squeeze",at),l.addEventListener("squeezestart",at),l.addEventListener("squeezeend",at),l.addEventListener("end",pt),l.addEventListener("inputsourceschange",ut),x.xrCompatible!==!0&&await i.makeXRCompatible(),z=t.getPixelRatio(),t.getSize(I),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Et=null,Rt=null,wt=null;x.depth&&(wt=x.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Et=x.stencil?Po:Oo,Rt=x.stencil?No:Ts);const le={colorFormat:i.RGBA8,depthFormat:wt,scaleFactor:u};v=new XRWebGLBinding(l,i),S=v.createProjectionLayer(le),l.updateRenderState({layers:[S]}),t.setPixelRatio(1),t.setSize(S.textureWidth,S.textureHeight,!1),L=new As(S.textureWidth,S.textureHeight,{format:xi,type:Ui,depthTexture:new C0(S.textureWidth,S.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const Et={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,Et),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),L=new As(M.framebufferWidth,M.framebufferHeight,{format:xi,type:Ui,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),xt.setContext(l),xt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function ut(K){for(let mt=0;mt<K.removed.length;mt++){const Et=K.removed[mt],Rt=C.indexOf(Et);Rt>=0&&(C[Rt]=null,D[Rt].disconnect(Et))}for(let mt=0;mt<K.added.length;mt++){const Et=K.added[mt];let Rt=C.indexOf(Et);if(Rt===-1){for(let le=0;le<D.length;le++)if(le>=C.length){C.push(Et),Rt=le;break}else if(C[le]===null){C[le]=Et,Rt=le;break}if(Rt===-1)break}const wt=D[Rt];wt&&wt.connect(Et)}}const F=new it,j=new it;function W(K,mt,Et){F.setFromMatrixPosition(mt.matrixWorld),j.setFromMatrixPosition(Et.matrixWorld);const Rt=F.distanceTo(j),wt=mt.projectionMatrix.elements,le=Et.projectionMatrix.elements,Qt=wt[14]/(wt[10]-1),Ne=wt[14]/(wt[10]+1),He=(wt[9]+1)/wt[5],ve=(wt[9]-1)/wt[5],G=(wt[8]-1)/wt[0],Sn=(le[8]+1)/le[0],Me=Qt*G,pe=Qt*Sn,Vt=Rt/(-G+Sn),xe=Vt*-G;if(mt.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(xe),K.translateZ(Vt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),wt[10]===-1)K.projectionMatrix.copy(mt.projectionMatrix),K.projectionMatrixInverse.copy(mt.projectionMatrixInverse);else{const jt=Qt+Vt,ae=Ne+Vt,Je=Me-xe,P=pe+(Rt-xe),E=He*Ne/ae*jt,et=ve*Ne/ae*jt;K.projectionMatrix.makePerspective(Je,P,E,et,jt,ae),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function St(K,mt){mt===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(mt.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(l===null)return;let mt=K.near,Et=K.far;w.texture!==null&&(w.depthNear>0&&(mt=w.depthNear),w.depthFar>0&&(Et=w.depthFar)),A.near=X.near=O.near=mt,A.far=X.far=O.far=Et,(H!==A.near||tt!==A.far)&&(l.updateRenderState({depthNear:A.near,depthFar:A.far}),H=A.near,tt=A.far),O.layers.mask=K.layers.mask|2,X.layers.mask=K.layers.mask|4,A.layers.mask=O.layers.mask|X.layers.mask;const Rt=K.parent,wt=A.cameras;St(A,Rt);for(let le=0;le<wt.length;le++)St(wt[le],Rt);wt.length===2?W(A,O,X):A.projectionMatrix.copy(O.projectionMatrix),N(K,A,Rt)};function N(K,mt,Et){Et===null?K.matrix.copy(mt.matrixWorld):(K.matrix.copy(Et.matrixWorld),K.matrix.invert(),K.matrix.multiply(mt.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(mt.projectionMatrix),K.projectionMatrixInverse.copy(mt.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=wc*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(S===null&&M===null))return m},this.setFoveation=function(K){m=K,S!==null&&(S.fixedFoveation=K),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=K)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(A)};let $=null;function vt(K,mt){if(_=mt.getViewerPose(p||h),T=mt,_!==null){const Et=_.views;M!==null&&(t.setRenderTargetFramebuffer(L,M.framebuffer),t.setRenderTarget(L));let Rt=!1;Et.length!==A.cameras.length&&(A.cameras.length=0,Rt=!0);for(let Qt=0;Qt<Et.length;Qt++){const Ne=Et[Qt];let He=null;if(M!==null)He=M.getViewport(Ne);else{const G=v.getViewSubImage(S,Ne);He=G.viewport,Qt===0&&(t.setRenderTargetTextures(L,G.colorTexture,G.depthStencilTexture),t.setRenderTarget(L))}let ve=U[Qt];ve===void 0&&(ve=new ii,ve.layers.enable(Qt),ve.viewport=new Ke,U[Qt]=ve),ve.matrix.fromArray(Ne.transform.matrix),ve.matrix.decompose(ve.position,ve.quaternion,ve.scale),ve.projectionMatrix.fromArray(Ne.projectionMatrix),ve.projectionMatrixInverse.copy(ve.projectionMatrix).invert(),ve.viewport.set(He.x,He.y,He.width,He.height),Qt===0&&(A.matrix.copy(ve.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),Rt===!0&&A.cameras.push(ve)}const wt=l.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&v){const Qt=v.getDepthInformation(Et[0]);Qt&&Qt.isValid&&Qt.texture&&w.init(t,Qt,l.renderState)}}for(let Et=0;Et<D.length;Et++){const Rt=C[Et],wt=D[Et];Rt!==null&&wt!==void 0&&wt.update(Rt,mt,p||h)}$&&$(K,mt),mt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:mt}),T=null}const xt=new D0;xt.setAnimationLoop(vt),this.setAnimationLoop=function(K){$=K},this.dispose=function(){}}}const vs=new Li,lA=new Qe;function cA(o,t){function i(x,g){x.matrixAutoUpdate===!0&&x.updateMatrix(),g.value.copy(x.matrix)}function s(x,g){g.color.getRGB(x.fogColor.value,b0(o)),g.isFog?(x.fogNear.value=g.near,x.fogFar.value=g.far):g.isFogExp2&&(x.fogDensity.value=g.density)}function l(x,g,L,D,C){g.isMeshBasicMaterial||g.isMeshLambertMaterial?u(x,g):g.isMeshToonMaterial?(u(x,g),v(x,g)):g.isMeshPhongMaterial?(u(x,g),_(x,g)):g.isMeshStandardMaterial?(u(x,g),S(x,g),g.isMeshPhysicalMaterial&&M(x,g,C)):g.isMeshMatcapMaterial?(u(x,g),T(x,g)):g.isMeshDepthMaterial?u(x,g):g.isMeshDistanceMaterial?(u(x,g),w(x,g)):g.isMeshNormalMaterial?u(x,g):g.isLineBasicMaterial?(h(x,g),g.isLineDashedMaterial&&d(x,g)):g.isPointsMaterial?m(x,g,L,D):g.isSpriteMaterial?p(x,g):g.isShadowMaterial?(x.color.value.copy(g.color),x.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function u(x,g){x.opacity.value=g.opacity,g.color&&x.diffuse.value.copy(g.color),g.emissive&&x.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(x.map.value=g.map,i(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,i(g.alphaMap,x.alphaMapTransform)),g.bumpMap&&(x.bumpMap.value=g.bumpMap,i(g.bumpMap,x.bumpMapTransform),x.bumpScale.value=g.bumpScale,g.side===Xn&&(x.bumpScale.value*=-1)),g.normalMap&&(x.normalMap.value=g.normalMap,i(g.normalMap,x.normalMapTransform),x.normalScale.value.copy(g.normalScale),g.side===Xn&&x.normalScale.value.negate()),g.displacementMap&&(x.displacementMap.value=g.displacementMap,i(g.displacementMap,x.displacementMapTransform),x.displacementScale.value=g.displacementScale,x.displacementBias.value=g.displacementBias),g.emissiveMap&&(x.emissiveMap.value=g.emissiveMap,i(g.emissiveMap,x.emissiveMapTransform)),g.specularMap&&(x.specularMap.value=g.specularMap,i(g.specularMap,x.specularMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest);const L=t.get(g),D=L.envMap,C=L.envMapRotation;D&&(x.envMap.value=D,vs.copy(C),vs.x*=-1,vs.y*=-1,vs.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),x.envMapRotation.value.setFromMatrix4(lA.makeRotationFromEuler(vs)),x.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=g.reflectivity,x.ior.value=g.ior,x.refractionRatio.value=g.refractionRatio),g.lightMap&&(x.lightMap.value=g.lightMap,x.lightMapIntensity.value=g.lightMapIntensity,i(g.lightMap,x.lightMapTransform)),g.aoMap&&(x.aoMap.value=g.aoMap,x.aoMapIntensity.value=g.aoMapIntensity,i(g.aoMap,x.aoMapTransform))}function h(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,g.map&&(x.map.value=g.map,i(g.map,x.mapTransform))}function d(x,g){x.dashSize.value=g.dashSize,x.totalSize.value=g.dashSize+g.gapSize,x.scale.value=g.scale}function m(x,g,L,D){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.size.value=g.size*L,x.scale.value=D*.5,g.map&&(x.map.value=g.map,i(g.map,x.uvTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,i(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function p(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.rotation.value=g.rotation,g.map&&(x.map.value=g.map,i(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,i(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function _(x,g){x.specular.value.copy(g.specular),x.shininess.value=Math.max(g.shininess,1e-4)}function v(x,g){g.gradientMap&&(x.gradientMap.value=g.gradientMap)}function S(x,g){x.metalness.value=g.metalness,g.metalnessMap&&(x.metalnessMap.value=g.metalnessMap,i(g.metalnessMap,x.metalnessMapTransform)),x.roughness.value=g.roughness,g.roughnessMap&&(x.roughnessMap.value=g.roughnessMap,i(g.roughnessMap,x.roughnessMapTransform)),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)}function M(x,g,L){x.ior.value=g.ior,g.sheen>0&&(x.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),x.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(x.sheenColorMap.value=g.sheenColorMap,i(g.sheenColorMap,x.sheenColorMapTransform)),g.sheenRoughnessMap&&(x.sheenRoughnessMap.value=g.sheenRoughnessMap,i(g.sheenRoughnessMap,x.sheenRoughnessMapTransform))),g.clearcoat>0&&(x.clearcoat.value=g.clearcoat,x.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(x.clearcoatMap.value=g.clearcoatMap,i(g.clearcoatMap,x.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,i(g.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(x.clearcoatNormalMap.value=g.clearcoatNormalMap,i(g.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Xn&&x.clearcoatNormalScale.value.negate())),g.dispersion>0&&(x.dispersion.value=g.dispersion),g.iridescence>0&&(x.iridescence.value=g.iridescence,x.iridescenceIOR.value=g.iridescenceIOR,x.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(x.iridescenceMap.value=g.iridescenceMap,i(g.iridescenceMap,x.iridescenceMapTransform)),g.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=g.iridescenceThicknessMap,i(g.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),g.transmission>0&&(x.transmission.value=g.transmission,x.transmissionSamplerMap.value=L.texture,x.transmissionSamplerSize.value.set(L.width,L.height),g.transmissionMap&&(x.transmissionMap.value=g.transmissionMap,i(g.transmissionMap,x.transmissionMapTransform)),x.thickness.value=g.thickness,g.thicknessMap&&(x.thicknessMap.value=g.thicknessMap,i(g.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=g.attenuationDistance,x.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(x.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(x.anisotropyMap.value=g.anisotropyMap,i(g.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=g.specularIntensity,x.specularColor.value.copy(g.specularColor),g.specularColorMap&&(x.specularColorMap.value=g.specularColorMap,i(g.specularColorMap,x.specularColorMapTransform)),g.specularIntensityMap&&(x.specularIntensityMap.value=g.specularIntensityMap,i(g.specularIntensityMap,x.specularIntensityMapTransform))}function T(x,g){g.matcap&&(x.matcap.value=g.matcap)}function w(x,g){const L=t.get(g).light;x.referencePosition.value.setFromMatrixPosition(L.matrixWorld),x.nearDistance.value=L.shadow.camera.near,x.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function uA(o,t,i,s){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(L,D){const C=D.program;s.uniformBlockBinding(L,C)}function p(L,D){let C=l[L.id];C===void 0&&(T(L),C=_(L),l[L.id]=C,L.addEventListener("dispose",x));const I=D.program;s.updateUBOMapping(L,I);const z=t.render.frame;u[L.id]!==z&&(S(L),u[L.id]=z)}function _(L){const D=v();L.__bindingPointIndex=D;const C=o.createBuffer(),I=L.__size,z=L.usage;return o.bindBuffer(o.UNIFORM_BUFFER,C),o.bufferData(o.UNIFORM_BUFFER,I,z),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,D,C),C}function v(){for(let L=0;L<d;L++)if(h.indexOf(L)===-1)return h.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(L){const D=l[L.id],C=L.uniforms,I=L.__cache;o.bindBuffer(o.UNIFORM_BUFFER,D);for(let z=0,O=C.length;z<O;z++){const X=Array.isArray(C[z])?C[z]:[C[z]];for(let U=0,A=X.length;U<A;U++){const H=X[U];if(M(H,z,U,I)===!0){const tt=H.__offset,at=Array.isArray(H.value)?H.value:[H.value];let pt=0;for(let ut=0;ut<at.length;ut++){const F=at[ut],j=w(F);typeof F=="number"||typeof F=="boolean"?(H.__data[0]=F,o.bufferSubData(o.UNIFORM_BUFFER,tt+pt,H.__data)):F.isMatrix3?(H.__data[0]=F.elements[0],H.__data[1]=F.elements[1],H.__data[2]=F.elements[2],H.__data[3]=0,H.__data[4]=F.elements[3],H.__data[5]=F.elements[4],H.__data[6]=F.elements[5],H.__data[7]=0,H.__data[8]=F.elements[6],H.__data[9]=F.elements[7],H.__data[10]=F.elements[8],H.__data[11]=0):(F.toArray(H.__data,pt),pt+=j.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,tt,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(L,D,C,I){const z=L.value,O=D+"_"+C;if(I[O]===void 0)return typeof z=="number"||typeof z=="boolean"?I[O]=z:I[O]=z.clone(),!0;{const X=I[O];if(typeof z=="number"||typeof z=="boolean"){if(X!==z)return I[O]=z,!0}else if(X.equals(z)===!1)return X.copy(z),!0}return!1}function T(L){const D=L.uniforms;let C=0;const I=16;for(let O=0,X=D.length;O<X;O++){const U=Array.isArray(D[O])?D[O]:[D[O]];for(let A=0,H=U.length;A<H;A++){const tt=U[A],at=Array.isArray(tt.value)?tt.value:[tt.value];for(let pt=0,ut=at.length;pt<ut;pt++){const F=at[pt],j=w(F),W=C%I,St=W%j.boundary,N=W+St;C+=St,N!==0&&I-N<j.storage&&(C+=I-N),tt.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),tt.__offset=C,C+=j.storage}}}const z=C%I;return z>0&&(C+=I-z),L.__size=C,L.__cache={},this}function w(L){const D={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(D.boundary=4,D.storage=4):L.isVector2?(D.boundary=8,D.storage=8):L.isVector3||L.isColor?(D.boundary=16,D.storage=12):L.isVector4?(D.boundary=16,D.storage=16):L.isMatrix3?(D.boundary=48,D.storage=48):L.isMatrix4?(D.boundary=64,D.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),D}function x(L){const D=L.target;D.removeEventListener("dispose",x);const C=h.indexOf(D.__bindingPointIndex);h.splice(C,1),o.deleteBuffer(l[D.id]),delete l[D.id],delete u[D.id]}function g(){for(const L in l)o.deleteBuffer(l[L]);h=[],l={},u={}}return{bind:m,update:p,dispose:g}}class fA{constructor(t={}){const{canvas:i=zS(),context:s=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:S=!1}=t;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=h;const T=new Uint32Array(4),w=new Int32Array(4);let x=null,g=null;const L=[],D=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let I=!1;this._outputColorSpace=Vn;let z=0,O=0,X=null,U=-1,A=null;const H=new Ke,tt=new Ke;let at=null;const pt=new Ae(0);let ut=0,F=i.width,j=i.height,W=1,St=null,N=null;const $=new Ke(0,0,F,j),vt=new Ke(0,0,F,j);let xt=!1;const K=new _d;let mt=!1,Et=!1;const Rt=new Qe,wt=new Qe,le=new it,Qt=new Ke,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let He=!1;function ve(){return X===null?W:1}let G=s;function Sn(R,Y){return i.getContext(R,Y)}try{const R={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${ld}`),i.addEventListener("webglcontextlost",zt,!1),i.addEventListener("webglcontextrestored",At,!1),i.addEventListener("webglcontextcreationerror",_t,!1),G===null){const Y="webgl2";if(G=Sn(Y,R),G===null)throw Sn(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Me,pe,Vt,xe,jt,ae,Je,P,E,et,ft,dt,lt,Pt,Ut,Gt,kt,yt,It,qt,Yt,Ct,ie,k;function Lt(){Me=new yT(G),Me.init(),Ct=new iA(G,Me),pe=new pT(G,Me,t,Ct),Vt=new eA(G,Me),pe.reverseDepthBuffer&&S&&Vt.buffers.depth.setReversed(!0),xe=new TT(G),jt=new Vb,ae=new nA(G,Me,Vt,jt,pe,Ct,xe),Je=new gT(C),P=new ST(C),E=new Dy(G),ie=new hT(G,E),et=new MT(G,E,xe,ie),ft=new AT(G,et,E,xe),It=new bT(G,pe,ae),Gt=new mT(jt),dt=new Gb(C,Je,P,Me,pe,ie,Gt),lt=new cA(C,jt),Pt=new Xb,Ut=new Kb(Me),yt=new fT(C,Je,P,Vt,ft,M,m),kt=new $b(C,ft,pe),k=new uA(G,xe,pe,Vt),qt=new dT(G,Me,xe),Yt=new ET(G,Me,xe),xe.programs=dt.programs,C.capabilities=pe,C.extensions=Me,C.properties=jt,C.renderLists=Pt,C.shadowMap=kt,C.state=Vt,C.info=xe}Lt();const Tt=new oA(C,G);this.xr=Tt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const R=Me.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Me.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(R){R!==void 0&&(W=R,this.setSize(F,j,!1))},this.getSize=function(R){return R.set(F,j)},this.setSize=function(R,Y,rt=!0){if(Tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=R,j=Y,i.width=Math.floor(R*W),i.height=Math.floor(Y*W),rt===!0&&(i.style.width=R+"px",i.style.height=Y+"px"),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(F*W,j*W).floor()},this.setDrawingBufferSize=function(R,Y,rt){F=R,j=Y,W=rt,i.width=Math.floor(R*rt),i.height=Math.floor(Y*rt),this.setViewport(0,0,R,Y)},this.getCurrentViewport=function(R){return R.copy(H)},this.getViewport=function(R){return R.copy($)},this.setViewport=function(R,Y,rt,ot){R.isVector4?$.set(R.x,R.y,R.z,R.w):$.set(R,Y,rt,ot),Vt.viewport(H.copy($).multiplyScalar(W).round())},this.getScissor=function(R){return R.copy(vt)},this.setScissor=function(R,Y,rt,ot){R.isVector4?vt.set(R.x,R.y,R.z,R.w):vt.set(R,Y,rt,ot),Vt.scissor(tt.copy(vt).multiplyScalar(W).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(R){Vt.setScissorTest(xt=R)},this.setOpaqueSort=function(R){St=R},this.setTransparentSort=function(R){N=R},this.getClearColor=function(R){return R.copy(yt.getClearColor())},this.setClearColor=function(){yt.setClearColor(...arguments)},this.getClearAlpha=function(){return yt.getClearAlpha()},this.setClearAlpha=function(){yt.setClearAlpha(...arguments)},this.clear=function(R=!0,Y=!0,rt=!0){let ot=0;if(R){let Z=!1;if(X!==null){const bt=X.texture.format;Z=bt===pd||bt===dd||bt===hd}if(Z){const bt=X.texture.type,Dt=bt===Ui||bt===Ts||bt===Lo||bt===No||bt===ud||bt===fd,Ot=yt.getClearColor(),Bt=yt.getClearAlpha(),te=Ot.r,Kt=Ot.g,Xt=Ot.b;Dt?(T[0]=te,T[1]=Kt,T[2]=Xt,T[3]=Bt,G.clearBufferuiv(G.COLOR,0,T)):(w[0]=te,w[1]=Kt,w[2]=Xt,w[3]=Bt,G.clearBufferiv(G.COLOR,0,w))}else ot|=G.COLOR_BUFFER_BIT}Y&&(ot|=G.DEPTH_BUFFER_BIT),rt&&(ot|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",zt,!1),i.removeEventListener("webglcontextrestored",At,!1),i.removeEventListener("webglcontextcreationerror",_t,!1),yt.dispose(),Pt.dispose(),Ut.dispose(),jt.dispose(),Je.dispose(),P.dispose(),ft.dispose(),ie.dispose(),k.dispose(),dt.dispose(),Tt.dispose(),Tt.removeEventListener("sessionstart",rn),Tt.removeEventListener("sessionend",yn),On.stop()};function zt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function At(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const R=xe.autoReset,Y=kt.enabled,rt=kt.autoUpdate,ot=kt.needsUpdate,Z=kt.type;Lt(),xe.autoReset=R,kt.enabled=Y,kt.autoUpdate=rt,kt.needsUpdate=ot,kt.type=Z}function _t(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ft(R){const Y=R.target;Y.removeEventListener("dispose",Ft),ne(Y)}function ne(R){De(R),jt.remove(R)}function De(R){const Y=jt.get(R).programs;Y!==void 0&&(Y.forEach(function(rt){dt.releaseProgram(rt)}),R.isShaderMaterial&&dt.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,rt,ot,Z,bt){Y===null&&(Y=Ne);const Dt=Z.isMesh&&Z.matrixWorld.determinant()<0,Ot=Ka(R,Y,rt,ot,Z);Vt.setMaterial(ot,Dt);let Bt=rt.index,te=1;if(ot.wireframe===!0){if(Bt=et.getWireframeAttribute(rt),Bt===void 0)return;te=2}const Kt=rt.drawRange,Xt=rt.attributes.position;let ce=Kt.start*te,Ce=(Kt.start+Kt.count)*te;bt!==null&&(ce=Math.max(ce,bt.start*te),Ce=Math.min(Ce,(bt.start+bt.count)*te)),Bt!==null?(ce=Math.max(ce,0),Ce=Math.min(Ce,Bt.count)):Xt!=null&&(ce=Math.max(ce,0),Ce=Math.min(Ce,Xt.count));const We=Ce-ce;if(We<0||We===1/0)return;ie.setup(Z,ot,Ot,rt,Bt);let he,we=qt;if(Bt!==null&&(he=E.get(Bt),we=Yt,we.setIndex(he)),Z.isMesh)ot.wireframe===!0?(Vt.setLineWidth(ot.wireframeLinewidth*ve()),we.setMode(G.LINES)):we.setMode(G.TRIANGLES);else if(Z.isLine){let Zt=ot.linewidth;Zt===void 0&&(Zt=1),Vt.setLineWidth(Zt*ve()),Z.isLineSegments?we.setMode(G.LINES):Z.isLineLoop?we.setMode(G.LINE_LOOP):we.setMode(G.LINE_STRIP)}else Z.isPoints?we.setMode(G.POINTS):Z.isSprite&&we.setMode(G.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Er("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),we.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(Me.get("WEBGL_multi_draw"))we.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Zt=Z._multiDrawStarts,Oe=Z._multiDrawCounts,Se=Z._multiDrawCount,pn=Bt?E.get(Bt).bytesPerElement:1,ha=jt.get(ot).currentProgram.getUniforms();for(let ke=0;ke<Se;ke++)ha.setValue(G,"_gl_DrawID",ke),we.render(Zt[ke]/pn,Oe[ke])}else if(Z.isInstancedMesh)we.renderInstances(ce,We,Z.count);else if(rt.isInstancedBufferGeometry){const Zt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Oe=Math.min(rt.instanceCount,Zt);we.renderInstances(ce,We,Oe)}else we.render(ce,We)};function Ee(R,Y,rt){R.transparent===!0&&R.side===sa&&R.forceSinglePass===!1?(R.side=Xn,R.needsUpdate=!0,ua(R,Y,rt),R.side=Wa,R.needsUpdate=!0,ua(R,Y,rt),R.side=sa):ua(R,Y,rt)}this.compile=function(R,Y,rt=null){rt===null&&(rt=R),g=Ut.get(rt),g.init(Y),D.push(g),rt.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(g.pushLight(Z),Z.castShadow&&g.pushShadow(Z))}),R!==rt&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(g.pushLight(Z),Z.castShadow&&g.pushShadow(Z))}),g.setupLights();const ot=new Set;return R.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const bt=Z.material;if(bt)if(Array.isArray(bt))for(let Dt=0;Dt<bt.length;Dt++){const Ot=bt[Dt];Ee(Ot,rt,Z),ot.add(Ot)}else Ee(bt,rt,Z),ot.add(bt)}),g=D.pop(),ot},this.compileAsync=function(R,Y,rt=null){const ot=this.compile(R,Y,rt);return new Promise(Z=>{function bt(){if(ot.forEach(function(Dt){jt.get(Dt).currentProgram.isReady()&&ot.delete(Dt)}),ot.size===0){Z(R);return}setTimeout(bt,10)}Me.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let qn=null;function dn(R){qn&&qn(R)}function rn(){On.stop()}function yn(){On.start()}const On=new D0;On.setAnimationLoop(dn),typeof self<"u"&&On.setContext(self),this.setAnimationLoop=function(R){qn=R,Tt.setAnimationLoop(R),R===null?On.stop():On.start()},Tt.addEventListener("sessionstart",rn),Tt.addEventListener("sessionend",yn),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Tt.enabled===!0&&Tt.isPresenting===!0&&(Tt.cameraAutoUpdate===!0&&Tt.updateCamera(Y),Y=Tt.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,Y,X),g=Ut.get(R,D.length),g.init(Y),D.push(g),wt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),K.setFromProjectionMatrix(wt),Et=this.localClippingEnabled,mt=Gt.init(this.clippingPlanes,Et),x=Pt.get(R,L.length),x.init(),L.push(x),Tt.enabled===!0&&Tt.isPresenting===!0){const bt=C.xr.getDepthSensingMesh();bt!==null&&ja(bt,Y,-1/0,C.sortObjects)}ja(R,Y,0,C.sortObjects),x.finish(),C.sortObjects===!0&&x.sort(St,N),He=Tt.enabled===!1||Tt.isPresenting===!1||Tt.hasDepthSensing()===!1,He&&yt.addToRenderList(x,R),this.info.render.frame++,mt===!0&&Gt.beginShadows();const rt=g.state.shadowsArray;kt.render(rt,R,Y),mt===!0&&Gt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ot=x.opaque,Z=x.transmissive;if(g.setupLights(),Y.isArrayCamera){const bt=Y.cameras;if(Z.length>0)for(let Dt=0,Ot=bt.length;Dt<Ot;Dt++){const Bt=bt[Dt];Vo(ot,Z,R,Bt)}He&&yt.render(R);for(let Dt=0,Ot=bt.length;Dt<Ot;Dt++){const Bt=bt[Dt];Go(x,R,Bt,Bt.viewport)}}else Z.length>0&&Vo(ot,Z,R,Y),He&&yt.render(R),Go(x,R,Y);X!==null&&O===0&&(ae.updateMultisampleRenderTarget(X),ae.updateRenderTargetMipmap(X)),R.isScene===!0&&R.onAfterRender(C,R,Y),ie.resetDefaultState(),U=-1,A=null,D.pop(),D.length>0?(g=D[D.length-1],mt===!0&&Gt.setGlobalState(C.clippingPlanes,g.state.camera)):g=null,L.pop(),L.length>0?x=L[L.length-1]:x=null};function ja(R,Y,rt,ot){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)rt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||K.intersectsSprite(R)){ot&&Qt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(wt);const Dt=ft.update(R),Ot=R.material;Ot.visible&&x.push(R,Dt,Ot,rt,Qt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||K.intersectsObject(R))){const Dt=ft.update(R),Ot=R.material;if(ot&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Qt.copy(R.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),Qt.copy(Dt.boundingSphere.center)),Qt.applyMatrix4(R.matrixWorld).applyMatrix4(wt)),Array.isArray(Ot)){const Bt=Dt.groups;for(let te=0,Kt=Bt.length;te<Kt;te++){const Xt=Bt[te],ce=Ot[Xt.materialIndex];ce&&ce.visible&&x.push(R,Dt,ce,rt,Qt.z,Xt)}}else Ot.visible&&x.push(R,Dt,Ot,rt,Qt.z,null)}}const bt=R.children;for(let Dt=0,Ot=bt.length;Dt<Ot;Dt++)ja(bt[Dt],Y,rt,ot)}function Go(R,Y,rt,ot){const Z=R.opaque,bt=R.transmissive,Dt=R.transparent;g.setupLightsView(rt),mt===!0&&Gt.setGlobalState(C.clippingPlanes,rt),ot&&Vt.viewport(H.copy(ot)),Z.length>0&&Za(Z,Y,rt),bt.length>0&&Za(bt,Y,rt),Dt.length>0&&Za(Dt,Y,rt),Vt.buffers.depth.setTest(!0),Vt.buffers.depth.setMask(!0),Vt.buffers.color.setMask(!0),Vt.setPolygonOffset(!1)}function Vo(R,Y,rt,ot){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[ot.id]===void 0&&(g.state.transmissionRenderTarget[ot.id]=new As(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")||Me.has("EXT_color_buffer_float")?Io:Ui,minFilter:Es,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:be.workingColorSpace}));const bt=g.state.transmissionRenderTarget[ot.id],Dt=ot.viewport||H;bt.setSize(Dt.z*C.transmissionResolutionScale,Dt.w*C.transmissionResolutionScale);const Ot=C.getRenderTarget(),Bt=C.getActiveCubeFace(),te=C.getActiveMipmapLevel();C.setRenderTarget(bt),C.getClearColor(pt),ut=C.getClearAlpha(),ut<1&&C.setClearColor(16777215,.5),C.clear(),He&&yt.render(rt);const Kt=C.toneMapping;C.toneMapping=Xa;const Xt=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),g.setupLightsView(ot),mt===!0&&Gt.setGlobalState(C.clippingPlanes,ot),Za(R,rt,ot),ae.updateMultisampleRenderTarget(bt),ae.updateRenderTargetMipmap(bt),Me.has("WEBGL_multisampled_render_to_texture")===!1){let ce=!1;for(let Ce=0,We=Y.length;Ce<We;Ce++){const he=Y[Ce],we=he.object,Zt=he.geometry,Oe=he.material,Se=he.group;if(Oe.side===sa&&we.layers.test(ot.layers)){const pn=Oe.side;Oe.side=Xn,Oe.needsUpdate=!0,ca(we,rt,ot,Zt,Oe,Se),Oe.side=pn,Oe.needsUpdate=!0,ce=!0}}ce===!0&&(ae.updateMultisampleRenderTarget(bt),ae.updateRenderTargetMipmap(bt))}C.setRenderTarget(Ot,Bt,te),C.setClearColor(pt,ut),Xt!==void 0&&(ot.viewport=Xt),C.toneMapping=Kt}function Za(R,Y,rt){const ot=Y.isScene===!0?Y.overrideMaterial:null;for(let Z=0,bt=R.length;Z<bt;Z++){const Dt=R[Z],Ot=Dt.object,Bt=Dt.geometry,te=Dt.group;let Kt=Dt.material;Kt.allowOverride===!0&&ot!==null&&(Kt=ot),Ot.layers.test(rt.layers)&&ca(Ot,Y,rt,Bt,Kt,te)}}function ca(R,Y,rt,ot,Z,bt){R.onBeforeRender(C,Y,rt,ot,Z,bt),R.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(C,Y,rt,ot,R,bt),Z.transparent===!0&&Z.side===sa&&Z.forceSinglePass===!1?(Z.side=Xn,Z.needsUpdate=!0,C.renderBufferDirect(rt,Y,ot,Z,R,bt),Z.side=Wa,Z.needsUpdate=!0,C.renderBufferDirect(rt,Y,ot,Z,R,bt),Z.side=sa):C.renderBufferDirect(rt,Y,ot,Z,R,bt),R.onAfterRender(C,Y,rt,ot,Z,bt)}function ua(R,Y,rt){Y.isScene!==!0&&(Y=Ne);const ot=jt.get(R),Z=g.state.lights,bt=g.state.shadowsArray,Dt=Z.state.version,Ot=dt.getParameters(R,Z.state,bt,Y,rt),Bt=dt.getProgramCacheKey(Ot);let te=ot.programs;ot.environment=R.isMeshStandardMaterial?Y.environment:null,ot.fog=Y.fog,ot.envMap=(R.isMeshStandardMaterial?P:Je).get(R.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,te===void 0&&(R.addEventListener("dispose",Ft),te=new Map,ot.programs=te);let Kt=te.get(Bt);if(Kt!==void 0){if(ot.currentProgram===Kt&&ot.lightsStateVersion===Dt)return Oi(R,Ot),Kt}else Ot.uniforms=dt.getUniforms(R),R.onBeforeCompile(Ot,C),Kt=dt.acquireProgram(Ot,Bt),te.set(Bt,Kt),ot.uniforms=Ot.uniforms;const Xt=ot.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Xt.clippingPlanes=Gt.uniform),Oi(R,Ot),ot.needsLights=en(R),ot.lightsStateVersion=Dt,ot.needsLights&&(Xt.ambientLightColor.value=Z.state.ambient,Xt.lightProbe.value=Z.state.probe,Xt.directionalLights.value=Z.state.directional,Xt.directionalLightShadows.value=Z.state.directionalShadow,Xt.spotLights.value=Z.state.spot,Xt.spotLightShadows.value=Z.state.spotShadow,Xt.rectAreaLights.value=Z.state.rectArea,Xt.ltc_1.value=Z.state.rectAreaLTC1,Xt.ltc_2.value=Z.state.rectAreaLTC2,Xt.pointLights.value=Z.state.point,Xt.pointLightShadows.value=Z.state.pointShadow,Xt.hemisphereLights.value=Z.state.hemi,Xt.directionalShadowMap.value=Z.state.directionalShadowMap,Xt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Xt.spotShadowMap.value=Z.state.spotShadowMap,Xt.spotLightMatrix.value=Z.state.spotLightMatrix,Xt.spotLightMap.value=Z.state.spotLightMap,Xt.pointShadowMap.value=Z.state.pointShadowMap,Xt.pointShadowMatrix.value=Z.state.pointShadowMatrix),ot.currentProgram=Kt,ot.uniformsList=null,Kt}function Ni(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=Ac.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function Oi(R,Y){const rt=jt.get(R);rt.outputColorSpace=Y.outputColorSpace,rt.batching=Y.batching,rt.batchingColor=Y.batchingColor,rt.instancing=Y.instancing,rt.instancingColor=Y.instancingColor,rt.instancingMorph=Y.instancingMorph,rt.skinning=Y.skinning,rt.morphTargets=Y.morphTargets,rt.morphNormals=Y.morphNormals,rt.morphColors=Y.morphColors,rt.morphTargetsCount=Y.morphTargetsCount,rt.numClippingPlanes=Y.numClippingPlanes,rt.numIntersection=Y.numClipIntersection,rt.vertexAlphas=Y.vertexAlphas,rt.vertexTangents=Y.vertexTangents,rt.toneMapping=Y.toneMapping}function Ka(R,Y,rt,ot,Z){Y.isScene!==!0&&(Y=Ne),ae.resetTextureUnits();const bt=Y.fog,Dt=ot.isMeshStandardMaterial?Y.environment:null,Ot=X===null?C.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Cr,Bt=(ot.isMeshStandardMaterial?P:Je).get(ot.envMap||Dt),te=ot.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,Kt=!!rt.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),Xt=!!rt.morphAttributes.position,ce=!!rt.morphAttributes.normal,Ce=!!rt.morphAttributes.color;let We=Xa;ot.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(We=C.toneMapping);const he=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,we=he!==void 0?he.length:0,Zt=jt.get(ot),Oe=g.state.lights;if(mt===!0&&(Et===!0||R!==A)){const mn=R===A&&ot.id===U;Gt.setState(ot,R,mn)}let Se=!1;ot.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==Oe.state.version||Zt.outputColorSpace!==Ot||Z.isBatchedMesh&&Zt.batching===!1||!Z.isBatchedMesh&&Zt.batching===!0||Z.isBatchedMesh&&Zt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Zt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Zt.instancing===!1||!Z.isInstancedMesh&&Zt.instancing===!0||Z.isSkinnedMesh&&Zt.skinning===!1||!Z.isSkinnedMesh&&Zt.skinning===!0||Z.isInstancedMesh&&Zt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Zt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Zt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Zt.instancingMorph===!1&&Z.morphTexture!==null||Zt.envMap!==Bt||ot.fog===!0&&Zt.fog!==bt||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==Gt.numPlanes||Zt.numIntersection!==Gt.numIntersection)||Zt.vertexAlphas!==te||Zt.vertexTangents!==Kt||Zt.morphTargets!==Xt||Zt.morphNormals!==ce||Zt.morphColors!==Ce||Zt.toneMapping!==We||Zt.morphTargetsCount!==we)&&(Se=!0):(Se=!0,Zt.__version=ot.version);let pn=Zt.currentProgram;Se===!0&&(pn=ua(ot,Y,Z));let ha=!1,ke=!1,Ii=!1;const Ge=pn.getUniforms(),An=Zt.uniforms;if(Vt.useProgram(pn.program)&&(ha=!0,ke=!0,Ii=!0),ot.id!==U&&(U=ot.id,ke=!0),ha||A!==R){Vt.buffers.depth.getReversed()?(Rt.copy(R.projectionMatrix),FS(Rt),HS(Rt),Ge.setValue(G,"projectionMatrix",Rt)):Ge.setValue(G,"projectionMatrix",R.projectionMatrix),Ge.setValue(G,"viewMatrix",R.matrixWorldInverse);const Mn=Ge.map.cameraPosition;Mn!==void 0&&Mn.setValue(G,le.setFromMatrixPosition(R.matrixWorld)),pe.logarithmicDepthBuffer&&Ge.setValue(G,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&Ge.setValue(G,"isOrthographic",R.isOrthographicCamera===!0),A!==R&&(A=R,ke=!0,Ii=!0)}if(Z.isSkinnedMesh){Ge.setOptional(G,Z,"bindMatrix"),Ge.setOptional(G,Z,"bindMatrixInverse");const mn=Z.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),Ge.setValue(G,"boneTexture",mn.boneTexture,ae))}Z.isBatchedMesh&&(Ge.setOptional(G,Z,"batchingTexture"),Ge.setValue(G,"batchingTexture",Z._matricesTexture,ae),Ge.setOptional(G,Z,"batchingIdTexture"),Ge.setValue(G,"batchingIdTexture",Z._indirectTexture,ae),Ge.setOptional(G,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Ge.setValue(G,"batchingColorTexture",Z._colorsTexture,ae));const on=rt.morphAttributes;if((on.position!==void 0||on.normal!==void 0||on.color!==void 0)&&It.update(Z,rt,pn),(ke||Zt.receiveShadow!==Z.receiveShadow)&&(Zt.receiveShadow=Z.receiveShadow,Ge.setValue(G,"receiveShadow",Z.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(An.envMap.value=Bt,An.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&Y.environment!==null&&(An.envMapIntensity.value=Y.environmentIntensity),ke&&(Ge.setValue(G,"toneMappingExposure",C.toneMappingExposure),Zt.needsLights&&fa(An,Ii),bt&&ot.fog===!0&&lt.refreshFogUniforms(An,bt),lt.refreshMaterialUniforms(An,ot,W,j,g.state.transmissionRenderTarget[R.id]),Ac.upload(G,Ni(Zt),An,ae)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(Ac.upload(G,Ni(Zt),An,ae),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&Ge.setValue(G,"center",Z.center),Ge.setValue(G,"modelViewMatrix",Z.modelViewMatrix),Ge.setValue(G,"normalMatrix",Z.normalMatrix),Ge.setValue(G,"modelMatrix",Z.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const mn=ot.uniformsGroups;for(let Mn=0,yi=mn.length;Mn<yi;Mn++){const zi=mn[Mn];k.update(zi,pn),k.bind(zi,pn)}}return pn}function fa(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function en(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(R,Y,rt){const ot=jt.get(R);ot.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),jt.get(R.texture).__webglTexture=Y,jt.get(R.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:rt,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Y){const rt=jt.get(R);rt.__webglFramebuffer=Y,rt.__useDefaultFramebuffer=Y===void 0};const ko=G.createFramebuffer();this.setRenderTarget=function(R,Y=0,rt=0){X=R,z=Y,O=rt;let ot=!0,Z=null,bt=!1,Dt=!1;if(R){const Bt=jt.get(R);if(Bt.__useDefaultFramebuffer!==void 0)Vt.bindFramebuffer(G.FRAMEBUFFER,null),ot=!1;else if(Bt.__webglFramebuffer===void 0)ae.setupRenderTarget(R);else if(Bt.__hasExternalTextures)ae.rebindTextures(R,jt.get(R.texture).__webglTexture,jt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Xt=R.depthTexture;if(Bt.__boundDepthTexture!==Xt){if(Xt!==null&&jt.has(Xt)&&(R.width!==Xt.image.width||R.height!==Xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ae.setupDepthRenderbuffer(R)}}const te=R.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(Dt=!0);const Kt=jt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Kt[Y])?Z=Kt[Y][rt]:Z=Kt[Y],bt=!0):R.samples>0&&ae.useMultisampledRTT(R)===!1?Z=jt.get(R).__webglMultisampledFramebuffer:Array.isArray(Kt)?Z=Kt[rt]:Z=Kt,H.copy(R.viewport),tt.copy(R.scissor),at=R.scissorTest}else H.copy($).multiplyScalar(W).floor(),tt.copy(vt).multiplyScalar(W).floor(),at=xt;if(rt!==0&&(Z=ko),Vt.bindFramebuffer(G.FRAMEBUFFER,Z)&&ot&&Vt.drawBuffers(R,Z),Vt.viewport(H),Vt.scissor(tt),Vt.setScissorTest(at),bt){const Bt=jt.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Bt.__webglTexture,rt)}else if(Dt){const Bt=jt.get(R.texture),te=Y;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,Bt.__webglTexture,rt,te)}else if(R!==null&&rt!==0){const Bt=jt.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Bt.__webglTexture,rt)}U=-1},this.readRenderTargetPixels=function(R,Y,rt,ot,Z,bt,Dt,Ot=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=jt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Dt!==void 0&&(Bt=Bt[Dt]),Bt){Vt.bindFramebuffer(G.FRAMEBUFFER,Bt);try{const te=R.textures[Ot],Kt=te.format,Xt=te.type;if(!pe.textureFormatReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pe.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-ot&&rt>=0&&rt<=R.height-Z&&(R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ot),G.readPixels(Y,rt,ot,Z,Ct.convert(Kt),Ct.convert(Xt),bt))}finally{const te=X!==null?jt.get(X).__webglFramebuffer:null;Vt.bindFramebuffer(G.FRAMEBUFFER,te)}}},this.readRenderTargetPixelsAsync=async function(R,Y,rt,ot,Z,bt,Dt,Ot=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=jt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Dt!==void 0&&(Bt=Bt[Dt]),Bt)if(Y>=0&&Y<=R.width-ot&&rt>=0&&rt<=R.height-Z){Vt.bindFramebuffer(G.FRAMEBUFFER,Bt);const te=R.textures[Ot],Kt=te.format,Xt=te.type;if(!pe.textureFormatReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pe.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ce=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,ce),G.bufferData(G.PIXEL_PACK_BUFFER,bt.byteLength,G.STREAM_READ),R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ot),G.readPixels(Y,rt,ot,Z,Ct.convert(Kt),Ct.convert(Xt),0);const Ce=X!==null?jt.get(X).__webglFramebuffer:null;Vt.bindFramebuffer(G.FRAMEBUFFER,Ce);const We=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await BS(G,We,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,ce),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,bt),G.deleteBuffer(ce),G.deleteSync(We),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Y=null,rt=0){const ot=Math.pow(2,-rt),Z=Math.floor(R.image.width*ot),bt=Math.floor(R.image.height*ot),Dt=Y!==null?Y.x:0,Ot=Y!==null?Y.y:0;ae.setTexture2D(R,0),G.copyTexSubImage2D(G.TEXTURE_2D,rt,0,0,Dt,Ot,Z,bt),Vt.unbindTexture()};const Xo=G.createFramebuffer(),Pi=G.createFramebuffer();this.copyTextureToTexture=function(R,Y,rt=null,ot=null,Z=0,bt=null){bt===null&&(Z!==0?(Er("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),bt=Z,Z=0):bt=0);let Dt,Ot,Bt,te,Kt,Xt,ce,Ce,We;const he=R.isCompressedTexture?R.mipmaps[bt]:R.image;if(rt!==null)Dt=rt.max.x-rt.min.x,Ot=rt.max.y-rt.min.y,Bt=rt.isBox3?rt.max.z-rt.min.z:1,te=rt.min.x,Kt=rt.min.y,Xt=rt.isBox3?rt.min.z:0;else{const on=Math.pow(2,-Z);Dt=Math.floor(he.width*on),Ot=Math.floor(he.height*on),R.isDataArrayTexture?Bt=he.depth:R.isData3DTexture?Bt=Math.floor(he.depth*on):Bt=1,te=0,Kt=0,Xt=0}ot!==null?(ce=ot.x,Ce=ot.y,We=ot.z):(ce=0,Ce=0,We=0);const we=Ct.convert(Y.format),Zt=Ct.convert(Y.type);let Oe;Y.isData3DTexture?(ae.setTexture3D(Y,0),Oe=G.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(ae.setTexture2DArray(Y,0),Oe=G.TEXTURE_2D_ARRAY):(ae.setTexture2D(Y,0),Oe=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Y.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Y.unpackAlignment);const Se=G.getParameter(G.UNPACK_ROW_LENGTH),pn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),ha=G.getParameter(G.UNPACK_SKIP_PIXELS),ke=G.getParameter(G.UNPACK_SKIP_ROWS),Ii=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,he.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,he.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,te),G.pixelStorei(G.UNPACK_SKIP_ROWS,Kt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Xt);const Ge=R.isDataArrayTexture||R.isData3DTexture,An=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){const on=jt.get(R),mn=jt.get(Y),Mn=jt.get(on.__renderTarget),yi=jt.get(mn.__renderTarget);Vt.bindFramebuffer(G.READ_FRAMEBUFFER,Mn.__webglFramebuffer),Vt.bindFramebuffer(G.DRAW_FRAMEBUFFER,yi.__webglFramebuffer);for(let zi=0;zi<Bt;zi++)Ge&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,jt.get(R).__webglTexture,Z,Xt+zi),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,jt.get(Y).__webglTexture,bt,We+zi)),G.blitFramebuffer(te,Kt,Dt,Ot,ce,Ce,Dt,Ot,G.DEPTH_BUFFER_BIT,G.NEAREST);Vt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Vt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Z!==0||R.isRenderTargetTexture||jt.has(R)){const on=jt.get(R),mn=jt.get(Y);Vt.bindFramebuffer(G.READ_FRAMEBUFFER,Xo),Vt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Pi);for(let Mn=0;Mn<Bt;Mn++)Ge?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,on.__webglTexture,Z,Xt+Mn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,on.__webglTexture,Z),An?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,mn.__webglTexture,bt,We+Mn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,mn.__webglTexture,bt),Z!==0?G.blitFramebuffer(te,Kt,Dt,Ot,ce,Ce,Dt,Ot,G.COLOR_BUFFER_BIT,G.NEAREST):An?G.copyTexSubImage3D(Oe,bt,ce,Ce,We+Mn,te,Kt,Dt,Ot):G.copyTexSubImage2D(Oe,bt,ce,Ce,te,Kt,Dt,Ot);Vt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Vt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else An?R.isDataTexture||R.isData3DTexture?G.texSubImage3D(Oe,bt,ce,Ce,We,Dt,Ot,Bt,we,Zt,he.data):Y.isCompressedArrayTexture?G.compressedTexSubImage3D(Oe,bt,ce,Ce,We,Dt,Ot,Bt,we,he.data):G.texSubImage3D(Oe,bt,ce,Ce,We,Dt,Ot,Bt,we,Zt,he):R.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,bt,ce,Ce,Dt,Ot,we,Zt,he.data):R.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,bt,ce,Ce,he.width,he.height,we,he.data):G.texSubImage2D(G.TEXTURE_2D,bt,ce,Ce,Dt,Ot,we,Zt,he);G.pixelStorei(G.UNPACK_ROW_LENGTH,Se),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,pn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,ha),G.pixelStorei(G.UNPACK_SKIP_ROWS,ke),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Ii),bt===0&&Y.generateMipmaps&&G.generateMipmap(Oe),Vt.unbindTexture()},this.copyTextureToTexture3D=function(R,Y,rt=null,ot=null,Z=0){return Er('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,Y,rt,ot,Z)},this.initRenderTarget=function(R){jt.get(R).__webglFramebuffer===void 0&&ae.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ae.setTextureCube(R,0):R.isData3DTexture?ae.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ae.setTexture2DArray(R,0):ae.setTexture2D(R,0),Vt.unbindTexture()},this.resetState=function(){z=0,O=0,X=null,Vt.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=be._getDrawingBufferColorSpace(t),i.unpackColorSpace=be._getUnpackColorSpace()}}class hA{constructor(t,i=" .:-=+*#%@",s={}){const l=s.resolution||.15,u=s.scale||1,h=s.color||!1,d=s.alpha||!1,m=s.block||!1,p=s.invert||!1,_=s.strResolution||"low";let v,S;const M=document.createElement("div");M.style.cursor="default";const T=document.createElement("table");M.appendChild(T);let w,x,g;this.setSize=function(tt,at){v=tt,S=at,t.setSize(tt,at),L()},this.render=function(tt,at){t.render(tt,at),H(T)},this.domElement=M;function L(){w=Math.floor(v*l),x=Math.floor(S*l),I.width=w,I.height=x,g=t.domElement,g.style.backgroundColor&&(T.rows[0].cells[0].style.backgroundColor=g.style.backgroundColor,T.rows[0].cells[0].style.color=g.style.color),T.cellSpacing="0",T.cellPadding="0";const tt=T.style;tt.whiteSpace="pre",tt.margin="0px",tt.padding="0px",tt.letterSpacing=A+"px",tt.fontFamily=D,tt.fontSize=X+"px",tt.lineHeight=U+"px",tt.textAlign="left",tt.textDecoration="none"}const D="courier new, monospace",C=t.domElement,I=document.createElement("canvas");if(!I.getContext)return;const z=I.getContext("2d");if(!z.getImageData)return;let O;if(i)O=i.split("");else{const tt=" .,:;i1tfLCG08@".split(""),at=" CGO08@".split("");O=h?at:tt}const X=2/l*u,U=2/l*u;let A=0;if(_=="low")switch(u){case 1:A=-1;break;case 2:case 3:A=-2.1;break;case 4:A=-3.1;break;case 5:A=-4.15;break}if(_=="medium")switch(u){case 1:A=0;break;case 2:A=-1;break;case 3:A=-1.04;break;case 4:case 5:A=-2.1;break}if(_=="high")switch(u){case 1:case 2:A=0;break;case 3:case 4:case 5:A=-1;break}function H(tt){z.clearRect(0,0,w,x),z.drawImage(C,0,0,w,x);const at=z.getImageData(0,0,w,x).data;let pt="";for(let ut=0;ut<x;ut+=2){for(let F=0;F<w;F++){const j=(ut*w+F)*4,W=at[j],St=at[j+1],N=at[j+2],$=at[j+3];let vt,xt;xt=(.3*W+.59*St+.11*N)/255,$==0&&(xt=1),vt=Math.floor((1-xt)*(O.length-1)),p&&(vt=O.length-vt-1);let K=O[vt];(K===void 0||K==" ")&&(K="&nbsp;"),h?pt+="<span style='color:rgb("+W+","+St+","+N+");"+(m?"background-color:rgb("+W+","+St+","+N+");":"")+(d?"opacity:"+$/255+";":"")+"'>"+K+"</span>":pt+=K}pt+="<br/>"}tt.innerHTML=`<tr><td style="display:block;width:${v}px;height:${S}px;overflow:hidden">${pt}</td></tr>`}}}const Hn=new Ae;class dA extends vd{constructor(t){super(t),this.propertyNameMapping={},this.customPropertyMapping={}}load(t,i,s,l){const u=this,h=new yy(this.manager);h.setPath(this.path),h.setResponseType("arraybuffer"),h.setRequestHeader(this.requestHeader),h.setWithCredentials(this.withCredentials),h.load(t,function(d){try{i(u.parse(d))}catch(m){l?l(m):console.error(m),u.manager.itemError(t)}},s,l)}setPropertyNameMapping(t){this.propertyNameMapping=t}setCustomPropertyNameMapping(t){this.customPropertyMapping=t}parse(t){function i(x,g=0){const L=/^ply([\s\S]*)end_header(\r\n|\r|\n)/;let D="";const C=L.exec(x);C!==null&&(D=C[1]);const I={comments:[],elements:[],headerLength:g,objInfo:""},z=D.split(/\r\n|\r|\n/);let O;function X(U,A){const H={type:U[0]};return H.type==="list"?(H.name=U[3],H.countType=U[1],H.itemType=U[2]):H.name=U[1],H.name in A&&(H.name=A[H.name]),H}for(let U=0;U<z.length;U++){let A=z[U];if(A=A.trim(),A==="")continue;const H=A.split(/\s+/),tt=H.shift();switch(A=H.join(" "),tt){case"format":I.format=H[0],I.version=H[1];break;case"comment":I.comments.push(A);break;case"element":O!==void 0&&I.elements.push(O),O={},O.name=H[0],O.count=parseInt(H[1]),O.properties=[];break;case"property":O.properties.push(X(H,w.propertyNameMapping));break;case"obj_info":I.objInfo=A;break;default:console.log("unhandled",tt,H)}}return O!==void 0&&I.elements.push(O),I}function s(x,g){switch(g){case"char":case"uchar":case"short":case"ushort":case"int":case"uint":case"int8":case"uint8":case"int16":case"uint16":case"int32":case"uint32":return parseInt(x);case"float":case"double":case"float32":case"float64":return parseFloat(x)}}function l(x,g){const L={};for(let D=0;D<x.length;D++){if(g.empty())return null;if(x[D].type==="list"){const C=[],I=s(g.next(),x[D].countType);for(let z=0;z<I;z++){if(g.empty())return null;C.push(s(g.next(),x[D].itemType))}L[x[D].name]=C}else L[x[D].name]=s(g.next(),x[D].type)}return L}function u(){const x={indices:[],vertices:[],normals:[],uvs:[],faceVertexUvs:[],colors:[],faceVertexColors:[]};for(const g of Object.keys(w.customPropertyMapping))x[g]=[];return x}function h(x){const g=x.map(D=>D.name);function L(D){for(let C=0,I=D.length;C<I;C++){const z=D[C];if(g.includes(z))return z}return null}return{attrX:L(["x","px","posx"])||"x",attrY:L(["y","py","posy"])||"y",attrZ:L(["z","pz","posz"])||"z",attrNX:L(["nx","normalx"]),attrNY:L(["ny","normaly"]),attrNZ:L(["nz","normalz"]),attrS:L(["s","u","texture_u","tx"]),attrT:L(["t","v","texture_v","ty"]),attrR:L(["red","diffuse_red","r","diffuse_r"]),attrG:L(["green","diffuse_green","g","diffuse_g"]),attrB:L(["blue","diffuse_blue","b","diffuse_b"])}}function d(x,g){const L=u(),D=/end_header\s+(\S[\s\S]*\S|\S)\s*$/;let C,I;(I=D.exec(x))!==null?C=I[1].split(/\s+/):C=[];const z=new pA(C);t:for(let O=0;O<g.elements.length;O++){const X=g.elements[O],U=h(X.properties);for(let A=0;A<X.count;A++){const H=l(X.properties,z);if(!H)break t;p(L,X.name,H,U)}}return m(L)}function m(x){let g=new Ya;x.indices.length>0&&g.setIndex(x.indices),g.setAttribute("position",new kn(x.vertices,3)),x.normals.length>0&&g.setAttribute("normal",new kn(x.normals,3)),x.uvs.length>0&&g.setAttribute("uv",new kn(x.uvs,2)),x.colors.length>0&&g.setAttribute("color",new kn(x.colors,3)),(x.faceVertexUvs.length>0||x.faceVertexColors.length>0)&&(g=g.toNonIndexed(),x.faceVertexUvs.length>0&&g.setAttribute("uv",new kn(x.faceVertexUvs,2)),x.faceVertexColors.length>0&&g.setAttribute("color",new kn(x.faceVertexColors,3)));for(const L of Object.keys(w.customPropertyMapping))x[L].length>0&&g.setAttribute(L,new kn(x[L],w.customPropertyMapping[L].length));return g.computeBoundingSphere(),g}function p(x,g,L,D){if(g==="vertex"){x.vertices.push(L[D.attrX],L[D.attrY],L[D.attrZ]),D.attrNX!==null&&D.attrNY!==null&&D.attrNZ!==null&&x.normals.push(L[D.attrNX],L[D.attrNY],L[D.attrNZ]),D.attrS!==null&&D.attrT!==null&&x.uvs.push(L[D.attrS],L[D.attrT]),D.attrR!==null&&D.attrG!==null&&D.attrB!==null&&(Hn.setRGB(L[D.attrR]/255,L[D.attrG]/255,L[D.attrB]/255,Vn),x.colors.push(Hn.r,Hn.g,Hn.b));for(const C of Object.keys(w.customPropertyMapping))for(const I of w.customPropertyMapping[C])x[C].push(L[I])}else if(g==="face"){const C=L.vertex_indices||L.vertex_index,I=L.texcoord;C.length===3?(x.indices.push(C[0],C[1],C[2]),I&&I.length===6&&(x.faceVertexUvs.push(I[0],I[1]),x.faceVertexUvs.push(I[2],I[3]),x.faceVertexUvs.push(I[4],I[5]))):C.length===4&&(x.indices.push(C[0],C[1],C[3]),x.indices.push(C[1],C[2],C[3])),D.attrR!==null&&D.attrG!==null&&D.attrB!==null&&(Hn.setRGB(L[D.attrR]/255,L[D.attrG]/255,L[D.attrB]/255,Vn),x.faceVertexColors.push(Hn.r,Hn.g,Hn.b),x.faceVertexColors.push(Hn.r,Hn.g,Hn.b),x.faceVertexColors.push(Hn.r,Hn.g,Hn.b))}}function _(x,g){const L={};let D=0;for(let C=0;C<g.length;C++){const I=g[C],z=I.valueReader;if(I.type==="list"){const O=[],X=I.countReader.read(x+D);D+=I.countReader.size;for(let U=0;U<X;U++)O.push(z.read(x+D)),D+=z.size;L[I.name]=O}else L[I.name]=z.read(x+D),D+=z.size}return[L,D]}function v(x,g,L){function D(C,I,z){switch(I){case"int8":case"char":return{read:O=>C.getInt8(O),size:1};case"uint8":case"uchar":return{read:O=>C.getUint8(O),size:1};case"int16":case"short":return{read:O=>C.getInt16(O,z),size:2};case"uint16":case"ushort":return{read:O=>C.getUint16(O,z),size:2};case"int32":case"int":return{read:O=>C.getInt32(O,z),size:4};case"uint32":case"uint":return{read:O=>C.getUint32(O,z),size:4};case"float32":case"float":return{read:O=>C.getFloat32(O,z),size:4};case"float64":case"double":return{read:O=>C.getFloat64(O,z),size:8}}}for(let C=0,I=x.length;C<I;C++){const z=x[C];z.type==="list"?(z.countReader=D(g,z.countType,L),z.valueReader=D(g,z.itemType,L)):z.valueReader=D(g,z.type,L)}}function S(x,g){const L=u(),D=g.format==="binary_little_endian",C=new DataView(x,g.headerLength);let I,z=0;for(let O=0;O<g.elements.length;O++){const X=g.elements[O],U=X.properties,A=h(U);v(U,C,D);for(let H=0;H<X.count;H++){I=_(z,U),z+=I[1];const tt=I[0];p(L,X.name,tt,A)}}return m(L)}function M(x){let g=0,L=!0,D="";const C=[],I=new TextDecoder().decode(x.subarray(0,5)),z=/^ply\r\n/.test(I);do{const O=String.fromCharCode(x[g++]);O!==`
`&&O!=="\r"?D+=O:(D==="end_header"&&(L=!1),D!==""&&(C.push(D),D=""))}while(L&&g<x.length);return z===!0&&g++,{headerText:C.join("\r")+"\r",headerLength:g}}let T;const w=this;if(t instanceof ArrayBuffer){const x=new Uint8Array(t),{headerText:g,headerLength:L}=M(x),D=i(g,L);if(D.format==="ascii"){const C=new TextDecoder().decode(x);T=d(C,D)}else T=S(t,D)}else T=d(t,i(t));return T}}class pA{constructor(t){this.arr=t,this.i=0}empty(){return this.i>=this.arr.length}next(){return this.arr[this.i++]}}const n0={type:"change"},Sd={type:"start"},P0={type:"end"},xc=new x0,i0=new Ga,mA=Math.cos(70*IS.DEG2RAD),un=new it,Gn=2*Math.PI,Fe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Sh=1e-6;class gA extends Cy{constructor(t,i=null){super(t,i),this.state=Fe.NONE,this.target=new it,this.cursor=new it,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:yr.ROTATE,MIDDLE:yr.DOLLY,RIGHT:yr.PAN},this.touches={ONE:xr.ROTATE,TWO:xr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new it,this._lastQuaternion=new bs,this._lastTargetPosition=new it,this._quat=new bs().setFromUnitVectors(t.up,new it(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new D_,this._sphericalDelta=new D_,this._scale=1,this._panOffset=new it,this._rotateStart=new se,this._rotateEnd=new se,this._rotateDelta=new se,this._panStart=new se,this._panEnd=new se,this._panDelta=new se,this._dollyStart=new se,this._dollyEnd=new se,this._dollyDelta=new se,this._dollyDirection=new it,this._mouse=new se,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=vA.bind(this),this._onPointerDown=_A.bind(this),this._onPointerUp=xA.bind(this),this._onContextMenu=AA.bind(this),this._onMouseWheel=MA.bind(this),this._onKeyDown=EA.bind(this),this._onTouchStart=TA.bind(this),this._onTouchMove=bA.bind(this),this._onMouseDown=SA.bind(this),this._onMouseMove=yA.bind(this),this._interceptControlDown=RA.bind(this),this._interceptControlUp=CA.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(n0),this.update(),this.state=Fe.NONE}update(t=null){const i=this.object.position;un.copy(i).sub(this.target),un.applyQuaternion(this._quat),this._spherical.setFromVector3(un),this.autoRotate&&this.state===Fe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Gn:s>Math.PI&&(s-=Gn),l<-Math.PI?l+=Gn:l>Math.PI&&(l-=Gn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let u=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),u=h!=this._spherical.radius}if(un.setFromSpherical(this._spherical),un.applyQuaternion(this._quatInverse),i.copy(this.target).add(un),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=un.length();h=this._clampDistance(d*this._scale);const m=d-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),u=!!m}else if(this.object.isOrthographicCamera){const d=new it(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),u=m!==this.object.zoom;const p=new it(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=un.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(xc.origin.copy(this.object.position),xc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(xc.direction))<mA?this.object.lookAt(this.target):(i0.setFromNormalAndCoplanarPoint(this.object.up,this.target),xc.intersectPlane(i0,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),u=!0)}return this._scale=1,this._performCursorZoom=!1,u||this._lastPosition.distanceToSquared(this.object.position)>Sh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Sh||this._lastTargetPosition.distanceToSquared(this.target)>Sh?(this.dispatchEvent(n0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Gn/60*this.autoRotateSpeed*t:Gn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){un.setFromMatrixColumn(i,0),un.multiplyScalar(-t),this._panOffset.add(un)}_panUp(t,i){this.screenSpacePanning===!0?un.setFromMatrixColumn(i,1):(un.setFromMatrixColumn(i,0),un.crossVectors(this.object.up,un)),un.multiplyScalar(t),this._panOffset.add(un)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;un.copy(l).sub(this.target);let u=un.length();u*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*u/s.clientHeight,this.object.matrix),this._panUp(2*i*u/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,u=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(u/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Gn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Gn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,u=Math.sqrt(s*s+l*l);this._dollyStart.set(0,u)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),u=.5*(t.pageY+s.y);this._rotateEnd.set(l,u)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Gn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Gn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,u=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,u),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new se,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function _A(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function vA(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function xA(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(P0),this.state=Fe.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function SA(o){let t;switch(o.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case yr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=Fe.DOLLY;break;case yr.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Fe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Fe.ROTATE}break;case yr.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Fe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Fe.PAN}break;default:this.state=Fe.NONE}this.state!==Fe.NONE&&this.dispatchEvent(Sd)}function yA(o){switch(this.state){case Fe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case Fe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case Fe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function MA(o){this.enabled===!1||this.enableZoom===!1||this.state!==Fe.NONE||(o.preventDefault(),this.dispatchEvent(Sd),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(P0))}function EA(o){this.enabled!==!1&&this._handleKeyDown(o)}function TA(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case xr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=Fe.TOUCH_ROTATE;break;case xr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=Fe.TOUCH_PAN;break;default:this.state=Fe.NONE}break;case 2:switch(this.touches.TWO){case xr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=Fe.TOUCH_DOLLY_PAN;break;case xr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=Fe.TOUCH_DOLLY_ROTATE;break;default:this.state=Fe.NONE}break;default:this.state=Fe.NONE}this.state!==Fe.NONE&&this.dispatchEvent(Sd)}function bA(o){switch(this._trackPointer(o),this.state){case Fe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case Fe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case Fe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case Fe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=Fe.NONE}}function AA(o){this.enabled!==!1&&o.preventDefault()}function RA(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function CA(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function wA(){const o=ni.useRef();return ni.useEffect(()=>{const t=new fy,i=o.current.offsetWidth,s=o.current.offsetHeight,l=new ii(50,i/s,1,1e3);l.position.y=50,l.position.z=550;const u=new fA({antialias:!0});u.setSize(i,s),u.outputEncoding=void 0;const h=new hA(u," .'`^,:;Il!i>~+_?][}{1)(|8%B@$",{invert:!0});h.setSize(i,s),h.domElement.style.color="lightgreen",o.current.appendChild(h.domElement);const d=new Ay(16777215,.5);d.castShadow=!0,t.add(d);const m=new Ty(16777215,1);m.castShadow=!0,m.position.set(0,64,32),t.add(m);let p;new dA().load("/trynewMed_resHead.ply",T=>{T.computeBoundingBox();const w=new it;T.boundingBox.getCenter(w),T.translate(-w.x,-w.y,-w.z),console.log(T.attributes);const x=new my({vertexColors:!0});p=new wi(T,x),p.rotation.x+=149,p.rotation.z+=135,t.add(p)});const v=new gA(l,h.domElement);v.enableZoom=!1,v.enablePan=!1;const S=()=>{p&&(p.rotation.z+=.01),v.update(),h.render(t,l),window.requestAnimationFrame(S)};S();const M=()=>{const T=o.current.offsetWidth,w=o.current.offsetHeight;l.aspect=T/w,l.updateProjectionMatrix(),u.setSize(T,w),h.setSize(T,w)};return window.addEventListener("resize",M),()=>{window.addEventListener("resize",M),h.domElement.parentNode&&h.domElement.parentNode.removeChild(h.domElement)}},[]),Mt.jsx("div",{ref:o,className:"ascii-container",style:{width:"60vw",height:"90vh",position:"relative"}})}function DA(){const[o,t]=ni.useState(""),i=`MATT
ERICKSON`;return ni.useEffect(()=>{let s=0;const l=setInterval(()=>{t(i.slice(0,s)),s++,s>i.length&&(clearInterval(l),setTimeout(()=>{t(""),s=0;const u=setInterval(()=>{t(i.slice(0,s)),s++,s>i.length&&clearInterval(u)},150)},3e3))},150);return()=>clearInterval(l)},[]),Mt.jsxs("div",{children:[Mt.jsx("style",{children:`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}),Mt.jsxs("div",{style:{fontFamily:"Poppins, Sans serif, Bold",fontSize:"6rem",background:"black",padding:"20px",margin:0,position:"relative"},children:[Mt.jsxs("div",{style:{visibility:"hidden",whiteSpace:"pre-line"},children:["MATT",`
`,"ERICKSON"]}),Mt.jsxs("h1",{style:{position:"absolute",top:"20px",left:"20px",color:"lightgreen",whiteSpace:"pre-line",fontSize:"6rem",margin:0},children:[o,Mt.jsx("span",{style:{animation:"blink 1s infinite",color:"lightgreen"},children:"|"})]})]})]})}function UA(){return Mt.jsx("div",{className:"navbar",children:Mt.jsx("div",{className:"scrolling-links",children:Mt.jsxs("span",{children:[Mt.jsx("a",{href:"https://github.com/matthewErickson05",target:"_blank",rel:"noopener noreferrer",children:"GitHub"})," • ",Mt.jsx("a",{href:"https://linkedin.com/in/matteri404",target:"_blank",rel:"noopener noreferrer",children:"LinkedIn"})," • ",Mt.jsx("a",{href:"https://strava.app.link/Vrs6y3tB9Vb",target:"_blank",rel:"noopener noreferrer",children:"Strava"})]})})})}function Oc({text:o,fontSize:t="2rem",color:i="lightgreen",delay:s=100,startDelay:l=0,showCursor:u=!0,className:h=""}){const[d,m]=ni.useState(""),[p,_]=ni.useState(!1),[v,S]=ni.useState(!1),M=ni.useRef(null);return ni.useEffect(()=>{const T=new IntersectionObserver(([w])=>{w.isIntersecting&&!v&&_(!0)},{threshold:.3,rootMargin:"0px 0px -100px 0px"});return M.current&&T.observe(M.current),()=>{M.current&&T.unobserve(M.current)}},[v]),ni.useEffect(()=>{if(p&&!v){const T=setTimeout(()=>{let w=0;const x=setInterval(()=>{m(o.slice(0,w)),w++,w>o.length&&(clearInterval(x),S(!0))},s)},l);return()=>clearTimeout(T)}},[p,v,o,s,l]),Mt.jsxs("div",{ref:M,children:[Mt.jsx("style",{children:`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}),Mt.jsxs("div",{className:`scroll-typewriter ${h}`,children:[Mt.jsx("div",{style:{visibility:"hidden",whiteSpace:"pre-line",fontFamily:"Poppins, sans-serif",fontSize:t},children:o}),Mt.jsxs("div",{style:{position:"absolute",top:0,left:0,color:i,whiteSpace:"pre-line",fontSize:t,fontFamily:"Poppins, sans-serif",margin:0},children:[d,u&&Mt.jsx("span",{style:{animation:v?"blink 1s infinite":"none",color:i,opacity:v?1:0},children:"|"})]})]})]})}const LA="/portfolio/assets/portfolio_pic_1-Dgmc94pg.jpg",NA="/portfolio/assets/portfolio_pic_2-DIq2Zn4G.JPG",OA="/portfolio/assets/portfolio_pic_3-Cgibag50.jpg",PA="/portfolio/assets/portfolio_pic_4-C0-KmJfZ.jpg",IA=()=>{const[o,t]=ni.useState(0),i=[LA,NA,OA,PA],s=()=>{t(h=>h===i.length-1?0:h+1)},l=()=>{t(h=>h===0?i.length-1:h-1)},u=h=>{t(h)};return Mt.jsx("section",{className:"about-section",children:Mt.jsx("div",{className:"about-container",children:Mt.jsxs("div",{className:"about-content",children:[Mt.jsxs("div",{className:"carousel-container",children:[Mt.jsxs("div",{className:"carousel",children:[Mt.jsx("button",{className:"carousel-btn prev-btn",onClick:l,children:"‹"}),Mt.jsx("div",{className:"carousel-track-container",children:Mt.jsx("div",{className:"carousel-track",style:{transform:`translateX(-${o*100}%)`},children:i.map((h,d)=>Mt.jsx("div",{className:"carousel-slide",children:Mt.jsx("img",{src:h,alt:`About me ${d+1}`,className:"carousel-image"})},d))})}),Mt.jsx("button",{className:"carousel-btn next-btn",onClick:s,children:"›"})]}),Mt.jsx("div",{className:"carousel-indicators",children:i.map((h,d)=>Mt.jsx("button",{className:`indicator ${d===o?"active":""}`,onClick:()=>u(d)},d))})]}),Mt.jsxs("div",{className:"bio-container",children:[Mt.jsx(Oc,{text:"About Me",fontSize:"3rem",color:"lightgreen",delay:100,startDelay:200,className:"about-title-typewriter"}),Mt.jsxs("div",{className:"bio-text",children:[Mt.jsx("p",{children:"Hey! I'm Matt, a third-year computer science student at Georgia Tech. I love building, being creative with my solutions, and exploring the modern frontier of computing."}),Mt.jsx("p",{children:"When I'm not coding, I love spending time with friends and family, playing sports, traveling, and music. I try to learn new things as much as possible and put myself in uncomfortable situations!"}),Mt.jsx("p",{children:"I'm always excited to connect with fellow developers and collaborate on interesting projects. Feel free to reach out if you'd like to chat!"})]})]})]})})})},zA=()=>Mt.jsx("section",{className:"featured-project-section",children:Mt.jsxs("div",{className:"featured-project-container",children:[Mt.jsx(Oc,{text:"Featured Project",fontSize:"3rem",color:"lightgreen",delay:120,startDelay:300,className:"featured-project-title-typewriter"}),Mt.jsx("div",{className:"project-description",children:Mt.jsx("p",{children:`As an avid window seat sitter, I always hate when the other side of the plane gets the better views than me. I decided to combat this by creating this minimum viable product for a window seat chooser. Using react, javascript, a flightaware api and healthy amount of linear algeba I built this app to detect visible landmarks at points throughout your flight and ignore non-visible landmarks, i.e. you can't see the Statue of Liberty from 30k feet. It then calculates which side to sit on for the best view. I'm working on a new feature that would detect if a sunrise or sunset was visible. I built this project quickly because I really believe in the design philosophy of "make it exist first, then make it great". Now that it exists I can iterate and add more creative UI, and improve error handling!`})}),Mt.jsx("div",{className:"video-container",children:Mt.jsxs("video",{className:"project-video",controls:!0,poster:"/Window_seat_cover.png",children:[Mt.jsx("source",{src:"/Window-Seat-MVP video.mp4",type:"video/mp4"}),"Your browser does not support the video tag."]})})]})}),BA=()=>{const[o,t]=ni.useState(null),i=[["React",2.7,2.8,"technical"],["JavaScript",3.5,2.65,"technical"],["Python",3.7,2.7,"technical"],["Node.js",2,1.7,"technical"],["Three.js",1.5,2,"technical"],["CSS/HTML",3.57,3.1,"technical"],["Git",3.05,3.6,"technical"],["SQL",2.56,2.73,"technical"],["Java",3.31,2.47,"technical"],["MongoDB",2.2,1.9,"technical"],["Android Studio",1.5,0,"technical"],["Apache Maven",3,1,"technical"],["Terraform",2.3,1,"technical"],["Azure SDK",2.6,1,"technical"],[" C ",2.5,.3,"technical"],["Leadership",3.2,3.5,"interpersonal"],["Communication",3.8,4,"interpersonal"],["Teamwork",2.8,3.8,"interpersonal"],["Problem Solving",3.8,3.8,"interpersonal"],["Presentation",3,2.5,"interpersonal"],["Mentoring",1,1,"interpersonal"],["Data Structures",3.2,3,"concept"],["Algorithms",3,2.8,"concept"],["System Design",2.5,2.2,"concept"],["UI/UX Design",2.8,3,"concept"],["Agile/Scrum",2.5,.75,"concept"],["Machine Learning",2,0,"concept"],["User Requirements Engineering",3.8,.6,"concept"]],s=d=>{switch(d){case"technical":return"#00ff7f";case"interpersonal":return"#00bfff";case"concept":return"#ffd700";default:return"#ffffff"}},l=(d,m)=>{const p=window.innerWidth*.8*.85,_=window.innerHeight*.8*.75,v=80,S=v+d/4*(p-2*v),M=_-v-m/4*(_-2*v);return{x:S,y:M}},u=window.innerWidth*.8,h=window.innerHeight*.8;return Mt.jsx("section",{className:"skills-section",children:Mt.jsxs("div",{className:"skills-container",children:[Mt.jsx(Oc,{text:"Skills & Expertise",fontSize:"3rem",color:"lightgreen",delay:100,startDelay:300,className:"skills-title-typewriter"}),Mt.jsx("div",{className:"skills-description",children:Mt.jsx("p",{children:"I believe skills should be measured not just by mastery level, but by how frequently they're applied. This chart maps my expertise across both dimensions - showing which skills I've truly mastered through consistent use versus those I'm still developing. The intersection of knowledge and practice reveals where my strongest capabilities lie and guides my continued growth as a developer."})}),Mt.jsxs("div",{className:"chart-container",children:[Mt.jsxs("svg",{width:u,height:h,className:"skills-chart",children:[Mt.jsx("rect",{x:"80",y:"80",width:u-160,height:h-160,fill:"rgba(255,255,255,0.05)",rx:"10"}),[1,2,3].map(d=>Mt.jsxs("g",{children:[Mt.jsx("line",{x1:80+d*(u-160)/4,y1:"80",x2:80+d*(u-160)/4,y2:h-80,stroke:"rgba(255,255,255,0.1)",strokeWidth:"1"}),Mt.jsx("line",{x1:"80",y1:80+d*(h-160)/4,x2:u-80,y2:80+d*(h-160)/4,stroke:"rgba(255,255,255,0.1)",strokeWidth:"1"})]},d)),Mt.jsx("line",{x1:"80",y1:h-80,x2:u-80,y2:h-80,stroke:"#ffffff",strokeWidth:"2"}),Mt.jsx("line",{x1:"80",y1:"80",x2:"80",y2:h-80,stroke:"#ffffff",strokeWidth:"2"}),["Beginner","Learning","Proficient","Advanced","Expert"].map((d,m)=>Mt.jsx("text",{x:80+m*(u-160)/4,y:h-50,fill:"#ffffff",textAnchor:"middle",fontSize:"14",children:d},m)),["Class Only","Work Only","Use Frequently","Everyday"].map((d,m)=>Mt.jsx("text",{x:"60",y:h-80-(m+1)*(h-160)/4,fill:"#ffffff",textAnchor:"middle",fontSize:"12",children:d},m)),Mt.jsx("text",{x:u/2,y:h-20,fill:"#ffffff",textAnchor:"middle",fontSize:"18",fontWeight:"bold",children:"Mastery Level"}),Mt.jsx("text",{x:"30",y:h/2,fill:"#ffffff",textAnchor:"middle",fontSize:"18",fontWeight:"bold",transform:`rotate(-90 30 ${h/2})`,children:"Usage Frequency"}),i.map((d,m)=>{const[p,_,v,S]=d,M=l(_,v),T=o===m;return Mt.jsxs("g",{children:[Mt.jsx("rect",{x:M.x-p.length*4,y:M.y-12,width:p.length*8,height:"24",fill:s(S),stroke:"rgba(255,255,255,0.3)",strokeWidth:"2",rx:"12",className:"skill-button",onMouseEnter:()=>t(m),onMouseLeave:()=>t(null),style:{cursor:"pointer",transition:"all 0.3s ease",transform:T?"scale(1.1)":"scale(1)",transformOrigin:"center"}}),Mt.jsx("text",{x:M.x,y:M.y+4,fill:"#000000",textAnchor:"middle",fontSize:"12",fontWeight:"bold",fontFamily:"'Poppins', sans-serif",onMouseEnter:()=>t(m),onMouseLeave:()=>t(null),style:{cursor:"pointer",transition:"all 0.3s ease",transform:T?"scale(1.1)":"scale(1)",transformOrigin:"center"},children:p})]},m)})]}),Mt.jsxs("div",{className:"chart-legend",children:[Mt.jsxs("div",{className:"legend-item",children:[Mt.jsx("div",{className:"legend-color",style:{backgroundColor:"#00ff7f"}}),Mt.jsx("span",{children:"Technical Skills"})]}),Mt.jsxs("div",{className:"legend-item",children:[Mt.jsx("div",{className:"legend-color",style:{backgroundColor:"#00bfff"}}),Mt.jsx("span",{children:"Interpersonal Skills"})]}),Mt.jsxs("div",{className:"legend-item",children:[Mt.jsx("div",{className:"legend-color",style:{backgroundColor:"#ffd700"}}),Mt.jsx("span",{children:"Concepts"})]})]})]})]})})},FA=()=>{const o=()=>{const t="/Updated_SWE_Resume_7-30.pdf",i=document.createElement("a");i.href=t,i.download="Matt_Erickson_Resume.pdf",document.body.appendChild(i),i.click(),document.body.removeChild(i)};return Mt.jsx("section",{className:"thank-you-section",children:Mt.jsxs("div",{className:"thank-you-container",children:[Mt.jsx(Oc,{text:"Thanks!",fontSize:"3rem",color:"lightgreen",delay:120,startDelay:400,className:"thank-you-title-typewriter"}),Mt.jsxs("div",{className:"contact-info",children:[Mt.jsx("div",{className:"email-container",children:Mt.jsx("a",{href:"mailto:your.email@example.com",className:"email-link",children:"mterickson404@gmail.com"})}),Mt.jsxs("button",{onClick:o,className:"resume-download-btn",children:[Mt.jsx("span",{className:"btn-text",children:"Download Resume"}),Mt.jsx("span",{className:"btn-icon",children:"⬇"})]})]})]})})};function HA(){return Mt.jsxs("div",{className:"App",children:[Mt.jsx("section",{className:"landing-section",children:Mt.jsx("div",{className:"landing-container",children:Mt.jsxs("div",{className:"landing-content",children:[Mt.jsx(UA,{}),Mt.jsxs("div",{className:"text-content",children:[Mt.jsx(DA,{}),Mt.jsx("div",{className:"subtitle",children:"Georgia Tech"})]}),Mt.jsx("div",{className:"model-content",children:Mt.jsx(wA,{})})]})})}),Mt.jsx(IA,{}),Mt.jsx(zA,{}),Mt.jsx(BA,{}),Mt.jsx(FA,{})]})}Yx.createRoot(document.getElementById("root")).render(Mt.jsx(ni.StrictMode,{children:Mt.jsx(HA,{})}));
