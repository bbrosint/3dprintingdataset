(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function va(n,e){const t=Object.create(null),i=n.split(",");for(let r=0;r<i.length;r++)t[i[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}function ya(n){if(Ie(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=lt(i)?a1(i):ya(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(lt(n))return n;if(nt(n))return n}}const r1=/;(?![^(]*\))/g,s1=/:([^]+)/,o1=/\/\*.*?\*\//gs;function a1(n){const e={};return n.replace(o1,"").split(r1).forEach(t=>{if(t){const i=t.split(s1);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Qe(n){let e="";if(lt(n))e=n;else if(Ie(n))for(let t=0;t<n.length;t++){const i=Qe(n[t]);i&&(e+=i+" ")}else if(nt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const l1="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",c1=va(l1);function du(n){return!!n||n===""}const si=n=>lt(n)?n:n==null?"":Ie(n)||nt(n)&&(n.toString===_u||!Fe(n.toString))?JSON.stringify(n,pu,2):String(n),pu=(n,e)=>e&&e.__v_isRef?pu(n,e.value):ji(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r])=>(t[`${i} =>`]=r,t),{})}:mu(e)?{[`Set(${e.size})`]:[...e.values()]}:nt(e)&&!Ie(e)&&!xu(e)?String(e):e,tt={},Xi=[],rn=()=>{},u1=()=>!1,f1=/^on[^a-z]/,Ns=n=>f1.test(n),Ma=n=>n.startsWith("onUpdate:"),At=Object.assign,ba=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},h1=Object.prototype.hasOwnProperty,Ge=(n,e)=>h1.call(n,e),Ie=Array.isArray,ji=n=>Os(n)==="[object Map]",mu=n=>Os(n)==="[object Set]",Fe=n=>typeof n=="function",lt=n=>typeof n=="string",Sa=n=>typeof n=="symbol",nt=n=>n!==null&&typeof n=="object",gu=n=>nt(n)&&Fe(n.then)&&Fe(n.catch),_u=Object.prototype.toString,Os=n=>_u.call(n),d1=n=>Os(n).slice(8,-1),xu=n=>Os(n)==="[object Object]",wa=n=>lt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,ys=va(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Us=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},p1=/-(\w)/g,mn=Us(n=>n.replace(p1,(e,t)=>t?t.toUpperCase():"")),m1=/\B([A-Z])/g,Si=Us(n=>n.replace(m1,"-$1").toLowerCase()),zs=Us(n=>n.charAt(0).toUpperCase()+n.slice(1)),io=Us(n=>n?`on${zs(n)}`:""),Pr=(n,e)=>!Object.is(n,e),ro=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},Ts=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},vu=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Qa;const g1=()=>Qa||(Qa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let un;class _1{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=un,!e&&un&&(this.index=(un.scopes||(un.scopes=[])).push(this)-1)}run(e){if(this.active){const t=un;try{return un=this,e()}finally{un=t}}}on(){un=this}off(){un=this.parent}stop(e){if(this.active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}}}function x1(n,e=un){e&&e.active&&e.effects.push(n)}const Ea=n=>{const e=new Set(n);return e.w=0,e.n=0,e},yu=n=>(n.w&Yn)>0,Mu=n=>(n.n&Yn)>0,v1=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=Yn},y1=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const r=e[i];yu(r)&&!Mu(r)?r.delete(n):e[t++]=r,r.w&=~Yn,r.n&=~Yn}e.length=t}},$o=new WeakMap;let Mr=0,Yn=1;const Zo=30;let Qt;const pi=Symbol(""),Jo=Symbol("");class Ta{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,x1(this,i)}run(){if(!this.active)return this.fn();let e=Qt,t=qn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Qt,Qt=this,qn=!0,Yn=1<<++Mr,Mr<=Zo?v1(this):el(this),this.fn()}finally{Mr<=Zo&&y1(this),Yn=1<<--Mr,Qt=this.parent,qn=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Qt===this?this.deferStop=!0:this.active&&(el(this),this.onStop&&this.onStop(),this.active=!1)}}function el(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let qn=!0;const bu=[];function cr(){bu.push(qn),qn=!1}function ur(){const n=bu.pop();qn=n===void 0?!0:n}function Ht(n,e,t){if(qn&&Qt){let i=$o.get(n);i||$o.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=Ea()),Su(r)}}function Su(n,e){let t=!1;Mr<=Zo?Mu(n)||(n.n|=Yn,t=!yu(n)):t=!n.has(Qt),t&&(n.add(Qt),Qt.deps.push(n))}function Pn(n,e,t,i,r,s){const o=$o.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Ie(n)){const l=vu(i);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Ie(n)?wa(t)&&a.push(o.get("length")):(a.push(o.get(pi)),ji(n)&&a.push(o.get(Jo)));break;case"delete":Ie(n)||(a.push(o.get(pi)),ji(n)&&a.push(o.get(Jo)));break;case"set":ji(n)&&a.push(o.get(pi));break}if(a.length===1)a[0]&&Qo(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Qo(Ea(l))}}function Qo(n,e){const t=Ie(n)?n:[...n];for(const i of t)i.computed&&tl(i);for(const i of t)i.computed||tl(i)}function tl(n,e){(n!==Qt||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const M1=va("__proto__,__v_isRef,__isVue"),wu=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Sa)),b1=Ca(),S1=Ca(!1,!0),w1=Ca(!0),nl=E1();function E1(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=Ye(this);for(let s=0,o=this.length;s<o;s++)Ht(i,"get",s+"");const r=i[e](...t);return r===-1||r===!1?i[e](...t.map(Ye)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){cr();const i=Ye(this)[e].apply(this,t);return ur(),i}}),n}function Ca(n=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!n;if(r==="__v_isReadonly")return n;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(n?e?V1:Lu:e?Au:Cu).get(i))return i;const o=Ie(i);if(!n&&o&&Ge(nl,r))return Reflect.get(nl,r,s);const a=Reflect.get(i,r,s);return(Sa(r)?wu.has(r):M1(r))||(n||Ht(i,"get",r),e)?a:yt(a)?o&&wa(r)?a:a.value:nt(a)?n?Pu(a):Vr(a):a}}const T1=Eu(),C1=Eu(!0);function Eu(n=!1){return function(t,i,r,s){let o=t[i];if(Qi(o)&&yt(o)&&!yt(r))return!1;if(!n&&(!Cs(r)&&!Qi(r)&&(o=Ye(o),r=Ye(r)),!Ie(t)&&yt(o)&&!yt(r)))return o.value=r,!0;const a=Ie(t)&&wa(i)?Number(i)<t.length:Ge(t,i),l=Reflect.set(t,i,r,s);return t===Ye(s)&&(a?Pr(r,o)&&Pn(t,"set",i,r):Pn(t,"add",i,r)),l}}function A1(n,e){const t=Ge(n,e);n[e];const i=Reflect.deleteProperty(n,e);return i&&t&&Pn(n,"delete",e,void 0),i}function L1(n,e){const t=Reflect.has(n,e);return(!Sa(e)||!wu.has(e))&&Ht(n,"has",e),t}function P1(n){return Ht(n,"iterate",Ie(n)?"length":pi),Reflect.ownKeys(n)}const Tu={get:b1,set:T1,deleteProperty:A1,has:L1,ownKeys:P1},R1={get:w1,set(n,e){return!0},deleteProperty(n,e){return!0}},D1=At({},Tu,{get:S1,set:C1}),Aa=n=>n,Bs=n=>Reflect.getPrototypeOf(n);function Xr(n,e,t=!1,i=!1){n=n.__v_raw;const r=Ye(n),s=Ye(e);t||(e!==s&&Ht(r,"get",e),Ht(r,"get",s));const{has:o}=Bs(r),a=i?Aa:t?Ra:Rr;if(o.call(r,e))return a(n.get(e));if(o.call(r,s))return a(n.get(s));n!==r&&n.get(e)}function jr(n,e=!1){const t=this.__v_raw,i=Ye(t),r=Ye(n);return e||(n!==r&&Ht(i,"has",n),Ht(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function Yr(n,e=!1){return n=n.__v_raw,!e&&Ht(Ye(n),"iterate",pi),Reflect.get(n,"size",n)}function il(n){n=Ye(n);const e=Ye(this);return Bs(e).has.call(e,n)||(e.add(n),Pn(e,"add",n,n)),this}function rl(n,e){e=Ye(e);const t=Ye(this),{has:i,get:r}=Bs(t);let s=i.call(t,n);s||(n=Ye(n),s=i.call(t,n));const o=r.call(t,n);return t.set(n,e),s?Pr(e,o)&&Pn(t,"set",n,e):Pn(t,"add",n,e),this}function sl(n){const e=Ye(this),{has:t,get:i}=Bs(e);let r=t.call(e,n);r||(n=Ye(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&Pn(e,"delete",n,void 0),s}function ol(){const n=Ye(this),e=n.size!==0,t=n.clear();return e&&Pn(n,"clear",void 0,void 0),t}function Kr(n,e){return function(i,r){const s=this,o=s.__v_raw,a=Ye(o),l=e?Aa:n?Ra:Rr;return!n&&Ht(a,"iterate",pi),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function $r(n,e,t){return function(...i){const r=this.__v_raw,s=Ye(r),o=ji(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?Aa:e?Ra:Rr;return!e&&Ht(s,"iterate",l?Jo:pi),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Dn(n){return function(...e){return n==="delete"?!1:this}}function I1(){const n={get(s){return Xr(this,s)},get size(){return Yr(this)},has:jr,add:il,set:rl,delete:sl,clear:ol,forEach:Kr(!1,!1)},e={get(s){return Xr(this,s,!1,!0)},get size(){return Yr(this)},has:jr,add:il,set:rl,delete:sl,clear:ol,forEach:Kr(!1,!0)},t={get(s){return Xr(this,s,!0)},get size(){return Yr(this,!0)},has(s){return jr.call(this,s,!0)},add:Dn("add"),set:Dn("set"),delete:Dn("delete"),clear:Dn("clear"),forEach:Kr(!0,!1)},i={get(s){return Xr(this,s,!0,!0)},get size(){return Yr(this,!0)},has(s){return jr.call(this,s,!0)},add:Dn("add"),set:Dn("set"),delete:Dn("delete"),clear:Dn("clear"),forEach:Kr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=$r(s,!1,!1),t[s]=$r(s,!0,!1),e[s]=$r(s,!1,!0),i[s]=$r(s,!0,!0)}),[n,t,e,i]}const[F1,N1,O1,U1]=I1();function La(n,e){const t=e?n?U1:O1:n?N1:F1;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Ge(t,r)&&r in i?t:i,r,s)}const z1={get:La(!1,!1)},B1={get:La(!1,!0)},k1={get:La(!0,!1)},Cu=new WeakMap,Au=new WeakMap,Lu=new WeakMap,V1=new WeakMap;function H1(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function G1(n){return n.__v_skip||!Object.isExtensible(n)?0:H1(d1(n))}function Vr(n){return Qi(n)?n:Pa(n,!1,Tu,z1,Cu)}function W1(n){return Pa(n,!1,D1,B1,Au)}function Pu(n){return Pa(n,!0,R1,k1,Lu)}function Pa(n,e,t,i,r){if(!nt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const o=G1(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function Yi(n){return Qi(n)?Yi(n.__v_raw):!!(n&&n.__v_isReactive)}function Qi(n){return!!(n&&n.__v_isReadonly)}function Cs(n){return!!(n&&n.__v_isShallow)}function Ru(n){return Yi(n)||Qi(n)}function Ye(n){const e=n&&n.__v_raw;return e?Ye(e):n}function Du(n){return Ts(n,"__v_skip",!0),n}const Rr=n=>nt(n)?Vr(n):n,Ra=n=>nt(n)?Pu(n):n;function Iu(n){qn&&Qt&&(n=Ye(n),Su(n.dep||(n.dep=Ea())))}function Fu(n,e){n=Ye(n),n.dep&&Qo(n.dep)}function yt(n){return!!(n&&n.__v_isRef===!0)}function Pt(n){return Nu(n,!1)}function q1(n){return Nu(n,!0)}function Nu(n,e){return yt(n)?n:new X1(n,e)}class X1{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ye(e),this._value=t?e:Rr(e)}get value(){return Iu(this),this._value}set value(e){const t=this.__v_isShallow||Cs(e)||Qi(e);e=t?e:Ye(e),Pr(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Rr(e),Fu(this))}}function Ki(n){return yt(n)?n.value:n}const j1={get:(n,e,t)=>Ki(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return yt(r)&&!yt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Ou(n){return Yi(n)?n:new Proxy(n,j1)}var Uu;class Y1{constructor(e,t,i,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[Uu]=!1,this._dirty=!0,this.effect=new Ta(e,()=>{this._dirty||(this._dirty=!0,Fu(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=Ye(this);return Iu(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Uu="__v_isReadonly";function K1(n,e,t=!1){let i,r;const s=Fe(n);return s?(i=n,r=rn):(i=n.get,r=n.set),new Y1(i,r,s||!r,t)}function Xn(n,e,t,i){let r;try{r=i?n(...i):n()}catch(s){ks(s,e,t)}return r}function sn(n,e,t,i){if(Fe(n)){const s=Xn(n,e,t,i);return s&&gu(s)&&s.catch(o=>{ks(o,e,t)}),s}const r=[];for(let s=0;s<n.length;s++)r.push(sn(n[s],e,t,i));return r}function ks(n,e,t,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Xn(l,null,10,[n,o,a]);return}}$1(n,t,r,i)}function $1(n,e,t,i=!0){console.error(n)}let Dr=!1,ea=!1;const vt=[];let pn=0;const $i=[];let En=null,ci=0;const zu=Promise.resolve();let Da=null;function Bu(n){const e=Da||zu;return n?e.then(this?n.bind(this):n):e}function Z1(n){let e=pn+1,t=vt.length;for(;e<t;){const i=e+t>>>1;Ir(vt[i])<n?e=i+1:t=i}return e}function Ia(n){(!vt.length||!vt.includes(n,Dr&&n.allowRecurse?pn+1:pn))&&(n.id==null?vt.push(n):vt.splice(Z1(n.id),0,n),ku())}function ku(){!Dr&&!ea&&(ea=!0,Da=zu.then(Hu))}function J1(n){const e=vt.indexOf(n);e>pn&&vt.splice(e,1)}function Q1(n){Ie(n)?$i.push(...n):(!En||!En.includes(n,n.allowRecurse?ci+1:ci))&&$i.push(n),ku()}function al(n,e=Dr?pn+1:0){for(;e<vt.length;e++){const t=vt[e];t&&t.pre&&(vt.splice(e,1),e--,t())}}function Vu(n){if($i.length){const e=[...new Set($i)];if($i.length=0,En){En.push(...e);return}for(En=e,En.sort((t,i)=>Ir(t)-Ir(i)),ci=0;ci<En.length;ci++)En[ci]();En=null,ci=0}}const Ir=n=>n.id==null?1/0:n.id,eh=(n,e)=>{const t=Ir(n)-Ir(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function Hu(n){ea=!1,Dr=!0,vt.sort(eh);const e=rn;try{for(pn=0;pn<vt.length;pn++){const t=vt[pn];t&&t.active!==!1&&Xn(t,null,14)}}finally{pn=0,vt.length=0,Vu(),Dr=!1,Da=null,(vt.length||$i.length)&&Hu()}}function th(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||tt;let r=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=i[u]||tt;h&&(r=t.map(m=>lt(m)?m.trim():m)),f&&(r=t.map(vu))}let a,l=i[a=io(e)]||i[a=io(mn(e))];!l&&s&&(l=i[a=io(Si(e))]),l&&sn(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,sn(c,n,6,r)}}function Gu(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Fe(n)){const l=c=>{const u=Gu(c,e,!0);u&&(a=!0,At(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(nt(n)&&i.set(n,null),null):(Ie(s)?s.forEach(l=>o[l]=null):At(o,s),nt(n)&&i.set(n,o),o)}function Vs(n,e){return!n||!Ns(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ge(n,e[0].toLowerCase()+e.slice(1))||Ge(n,Si(e))||Ge(n,e))}let Ct=null,Hs=null;function As(n){const e=Ct;return Ct=n,Hs=n&&n.type.__scopeId||null,e}function v5(n){Hs=n}function y5(){Hs=null}function Wu(n,e=Ct,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&_l(-1);const s=As(e);let o;try{o=n(...r)}finally{As(s),i._d&&_l(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function so(n){const{type:e,vnode:t,proxy:i,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:m,ctx:g,inheritAttrs:p}=n;let d,_;const w=As(n);try{if(t.shapeFlag&4){const v=r||i;d=hn(u.call(v,v,f,s,m,h,g)),_=l}else{const v=e;d=hn(v.length>1?v(s,{attrs:l,slots:a,emit:c}):v(s,null)),_=e.props?l:nh(l)}}catch(v){Cr.length=0,ks(v,n,1),d=Mt(Kn)}let M=d;if(_&&p!==!1){const v=Object.keys(_),{shapeFlag:E}=M;v.length&&E&7&&(o&&v.some(Ma)&&(_=ih(_,o)),M=er(M,_))}return t.dirs&&(M=er(M),M.dirs=M.dirs?M.dirs.concat(t.dirs):t.dirs),t.transition&&(M.transition=t.transition),d=M,As(w),d}const nh=n=>{let e;for(const t in n)(t==="class"||t==="style"||Ns(t))&&((e||(e={}))[t]=n[t]);return e},ih=(n,e)=>{const t={};for(const i in n)(!Ma(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function rh(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?ll(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!Vs(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?ll(i,o,c):!0:!!o;return!1}function ll(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!Vs(t,s))return!0}return!1}function sh({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const oh=n=>n.__isSuspense;function ah(n,e){e&&e.pendingBranch?Ie(n)?e.effects.push(...n):e.effects.push(n):Q1(n)}function Ms(n,e){if(gt){let t=gt.provides;const i=gt.parent&&gt.parent.provides;i===t&&(t=gt.provides=Object.create(i)),t[n]=e}}function on(n,e,t=!1){const i=gt||Ct;if(i){const r=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Fe(e)?e.call(i.proxy):e}}const Zr={};function bs(n,e,t){return qu(n,e,t)}function qu(n,e,{immediate:t,deep:i,flush:r,onTrack:s,onTrigger:o}=tt){const a=gt;let l,c=!1,u=!1;if(yt(n)?(l=()=>n.value,c=Cs(n)):Yi(n)?(l=()=>n,i=!0):Ie(n)?(u=!0,c=n.some(M=>Yi(M)||Cs(M)),l=()=>n.map(M=>{if(yt(M))return M.value;if(Yi(M))return Wi(M);if(Fe(M))return Xn(M,a,2)})):Fe(n)?e?l=()=>Xn(n,a,2):l=()=>{if(!(a&&a.isUnmounted))return f&&f(),sn(n,a,3,[h])}:l=rn,e&&i){const M=l;l=()=>Wi(M())}let f,h=M=>{f=_.onStop=()=>{Xn(M,a,4)}},m;if(Ur)if(h=rn,e?t&&sn(e,a,3,[l(),u?[]:void 0,h]):l(),r==="sync"){const M=Jh();m=M.__watcherHandles||(M.__watcherHandles=[])}else return rn;let g=u?new Array(n.length).fill(Zr):Zr;const p=()=>{if(!!_.active)if(e){const M=_.run();(i||c||(u?M.some((v,E)=>Pr(v,g[E])):Pr(M,g)))&&(f&&f(),sn(e,a,3,[M,g===Zr?void 0:u&&g[0]===Zr?[]:g,h]),g=M)}else _.run()};p.allowRecurse=!!e;let d;r==="sync"?d=p:r==="post"?d=()=>Lt(p,a&&a.suspense):(p.pre=!0,a&&(p.id=a.uid),d=()=>Ia(p));const _=new Ta(l,d);e?t?p():g=_.run():r==="post"?Lt(_.run.bind(_),a&&a.suspense):_.run();const w=()=>{_.stop(),a&&a.scope&&ba(a.scope.effects,_)};return m&&m.push(w),w}function lh(n,e,t){const i=this.proxy,r=lt(n)?n.includes(".")?Xu(i,n):()=>i[n]:n.bind(i,i);let s;Fe(e)?s=e:(s=e.handler,t=e);const o=gt;tr(this);const a=qu(r,s.bind(i),t);return o?tr(o):mi(),a}function Xu(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}function Wi(n,e){if(!nt(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),yt(n))Wi(n.value,e);else if(Ie(n))for(let t=0;t<n.length;t++)Wi(n[t],e);else if(mu(n)||ji(n))n.forEach(t=>{Wi(t,e)});else if(xu(n))for(const t in n)Wi(n[t],e);return n}function Hr(n){return Fe(n)?{setup:n,name:n.name}:n}const Er=n=>!!n.type.__asyncLoader,ju=n=>n.type.__isKeepAlive;function ch(n,e){Yu(n,"a",e)}function uh(n,e){Yu(n,"da",e)}function Yu(n,e,t=gt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Gs(e,i,t),t){let r=t.parent;for(;r&&r.parent;)ju(r.parent.vnode)&&fh(i,e,t,r),r=r.parent}}function fh(n,e,t,i){const r=Gs(e,n,i,!0);Ku(()=>{ba(i[e],r)},t)}function Gs(n,e,t=gt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;cr(),tr(t);const a=sn(e,t,n,o);return mi(),ur(),a});return i?r.unshift(s):r.push(s),s}}const Rn=n=>(e,t=gt)=>(!Ur||n==="sp")&&Gs(n,(...i)=>e(...i),t),Fa=Rn("bm"),Na=Rn("m"),hh=Rn("bu"),dh=Rn("u"),ph=Rn("bum"),Ku=Rn("um"),mh=Rn("sp"),gh=Rn("rtg"),_h=Rn("rtc");function xh(n,e=gt){Gs("ec",n,e)}function ei(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(cr(),sn(l,t,8,[n.el,a,n,e]),ur())}}const $u="components";function Fr(n,e){return yh($u,n,!0,e)||n}const vh=Symbol();function yh(n,e,t=!0,i=!1){const r=Ct||gt;if(r){const s=r.type;if(n===$u){const a=Kh(s,!1);if(a&&(a===e||a===mn(e)||a===zs(mn(e))))return s}const o=cl(r[n]||s[n],e)||cl(r.appContext[n],e);return!o&&i?s:o}}function cl(n,e){return n&&(n[e]||n[mn(e)]||n[zs(mn(e))])}function ta(n,e,t,i){let r;const s=t&&t[i];if(Ie(n)||lt(n)){r=new Array(n.length);for(let o=0,a=n.length;o<a;o++)r[o]=e(n[o],o,void 0,s&&s[o])}else if(typeof n=="number"){r=new Array(n);for(let o=0;o<n;o++)r[o]=e(o+1,o,void 0,s&&s[o])}else if(nt(n))if(n[Symbol.iterator])r=Array.from(n,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(n);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(n[c],c,a,s&&s[a])}}else r=[];return t&&(t[i]=r),r}function ul(n,e,t={},i,r){if(Ct.isCE||Ct.parent&&Er(Ct.parent)&&Ct.parent.isCE)return e!=="default"&&(t.name=e),Mt("slot",t,i&&i());let s=n[e];s&&s._c&&(s._d=!1),je();const o=s&&Zu(s(t)),a=Or(Tt,{key:t.key||o&&o.key||`_${e}`},o||(i?i():[]),o&&n._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function Zu(n){return n.some(e=>Ps(e)?!(e.type===Kn||e.type===Tt&&!Zu(e.children)):!0)?n:null}const na=n=>n?cf(n)?Ba(n)||n.proxy:na(n.parent):null,Tr=At(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>na(n.parent),$root:n=>na(n.root),$emit:n=>n.emit,$options:n=>Oa(n),$forceUpdate:n=>n.f||(n.f=()=>Ia(n.update)),$nextTick:n=>n.n||(n.n=Bu.bind(n.proxy)),$watch:n=>lh.bind(n)}),oo=(n,e)=>n!==tt&&!n.__isScriptSetup&&Ge(n,e),Mh={get({_:n},e){const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(oo(i,e))return o[e]=1,i[e];if(r!==tt&&Ge(r,e))return o[e]=2,r[e];if((c=n.propsOptions[0])&&Ge(c,e))return o[e]=3,s[e];if(t!==tt&&Ge(t,e))return o[e]=4,t[e];ia&&(o[e]=0)}}const u=Tr[e];let f,h;if(u)return e==="$attrs"&&Ht(n,"get",e),u(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==tt&&Ge(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,Ge(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return oo(r,e)?(r[e]=t,!0):i!==tt&&Ge(i,e)?(i[e]=t,!0):Ge(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==tt&&Ge(n,o)||oo(e,o)||(a=s[0])&&Ge(a,o)||Ge(i,o)||Ge(Tr,o)||Ge(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Ge(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};let ia=!0;function bh(n){const e=Oa(n),t=n.proxy,i=n.ctx;ia=!1,e.beforeCreate&&fl(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:m,updated:g,activated:p,deactivated:d,beforeDestroy:_,beforeUnmount:w,destroyed:M,unmounted:v,render:E,renderTracked:P,renderTriggered:U,errorCaptured:y,serverPrefetch:L,expose:F,inheritAttrs:Q,components:he,directives:j,filters:B}=e;if(c&&Sh(c,i,null,n.appContext.config.unwrapInjectedRef),o)for(const $ in o){const G=o[$];Fe(G)&&(i[$]=G.bind(t))}if(r){const $=r.call(t,t);nt($)&&(n.data=Vr($))}if(ia=!0,s)for(const $ in s){const G=s[$],fe=Fe(G)?G.bind(t,t):Fe(G.get)?G.get.bind(t,t):rn,le=!Fe(G)&&Fe(G.set)?G.set.bind(t):rn,Y=jt({get:fe,set:le});Object.defineProperty(i,$,{enumerable:!0,configurable:!0,get:()=>Y.value,set:W=>Y.value=W})}if(a)for(const $ in a)Ju(a[$],i,t,$);if(l){const $=Fe(l)?l.call(t):l;Reflect.ownKeys($).forEach(G=>{Ms(G,$[G])})}u&&fl(u,n,"c");function ne($,G){Ie(G)?G.forEach(fe=>$(fe.bind(t))):G&&$(G.bind(t))}if(ne(Fa,f),ne(Na,h),ne(hh,m),ne(dh,g),ne(ch,p),ne(uh,d),ne(xh,y),ne(_h,P),ne(gh,U),ne(ph,w),ne(Ku,v),ne(mh,L),Ie(F))if(F.length){const $=n.exposed||(n.exposed={});F.forEach(G=>{Object.defineProperty($,G,{get:()=>t[G],set:fe=>t[G]=fe})})}else n.exposed||(n.exposed={});E&&n.render===rn&&(n.render=E),Q!=null&&(n.inheritAttrs=Q),he&&(n.components=he),j&&(n.directives=j)}function Sh(n,e,t=rn,i=!1){Ie(n)&&(n=ra(n));for(const r in n){const s=n[r];let o;nt(s)?"default"in s?o=on(s.from||r,s.default,!0):o=on(s.from||r):o=on(s),yt(o)&&i?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function fl(n,e,t){sn(Ie(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Ju(n,e,t,i){const r=i.includes(".")?Xu(t,i):()=>t[i];if(lt(n)){const s=e[n];Fe(s)&&bs(r,s)}else if(Fe(n))bs(r,n.bind(t));else if(nt(n))if(Ie(n))n.forEach(s=>Ju(s,e,t,i));else{const s=Fe(n.handler)?n.handler.bind(t):e[n.handler];Fe(s)&&bs(r,s,n)}}function Oa(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Ls(l,c,o,!0)),Ls(l,e,o)),nt(e)&&s.set(e,l),l}function Ls(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Ls(n,s,t,!0),r&&r.forEach(o=>Ls(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=wh[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const wh={data:hl,props:oi,emits:oi,methods:oi,computed:oi,beforeCreate:wt,created:wt,beforeMount:wt,mounted:wt,beforeUpdate:wt,updated:wt,beforeDestroy:wt,beforeUnmount:wt,destroyed:wt,unmounted:wt,activated:wt,deactivated:wt,errorCaptured:wt,serverPrefetch:wt,components:oi,directives:oi,watch:Th,provide:hl,inject:Eh};function hl(n,e){return e?n?function(){return At(Fe(n)?n.call(this,this):n,Fe(e)?e.call(this,this):e)}:e:n}function Eh(n,e){return oi(ra(n),ra(e))}function ra(n){if(Ie(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function wt(n,e){return n?[...new Set([].concat(n,e))]:e}function oi(n,e){return n?At(At(Object.create(null),n),e):e}function Th(n,e){if(!n)return e;if(!e)return n;const t=At(Object.create(null),n);for(const i in e)t[i]=wt(n[i],e[i]);return t}function Ch(n,e,t,i=!1){const r={},s={};Ts(s,qs,1),n.propsDefaults=Object.create(null),Qu(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:W1(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Ah(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=Ye(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Vs(n.emitsOptions,h))continue;const m=e[h];if(l)if(Ge(s,h))m!==s[h]&&(s[h]=m,c=!0);else{const g=mn(h);r[g]=sa(l,a,g,m,n,!1)}else m!==s[h]&&(s[h]=m,c=!0)}}}else{Qu(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!Ge(e,f)&&((u=Si(f))===f||!Ge(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=sa(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!Ge(e,f)&&!0)&&(delete s[f],c=!0)}c&&Pn(n,"set","$attrs")}function Qu(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(ys(l))continue;const c=e[l];let u;r&&Ge(r,u=mn(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:Vs(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=Ye(t),c=a||tt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=sa(r,l,f,c[f],n,!Ge(c,f))}}return o}function sa(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=Ge(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&Fe(l)){const{propsDefaults:c}=r;t in c?i=c[t]:(tr(r),i=c[t]=l.call(null,e),mi())}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Si(t))&&(i=!0))}return i}function ef(n,e,t=!1){const i=e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Fe(n)){const u=f=>{l=!0;const[h,m]=ef(f,e,!0);At(o,h),m&&a.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return nt(n)&&i.set(n,Xi),Xi;if(Ie(s))for(let u=0;u<s.length;u++){const f=mn(s[u]);dl(f)&&(o[f]=tt)}else if(s)for(const u in s){const f=mn(u);if(dl(f)){const h=s[u],m=o[f]=Ie(h)||Fe(h)?{type:h}:Object.assign({},h);if(m){const g=gl(Boolean,m.type),p=gl(String,m.type);m[0]=g>-1,m[1]=p<0||g<p,(g>-1||Ge(m,"default"))&&a.push(f)}}}const c=[o,a];return nt(n)&&i.set(n,c),c}function dl(n){return n[0]!=="$"}function pl(n){const e=n&&n.toString().match(/^\s*function (\w+)/);return e?e[1]:n===null?"null":""}function ml(n,e){return pl(n)===pl(e)}function gl(n,e){return Ie(e)?e.findIndex(t=>ml(t,n)):Fe(e)&&ml(e,n)?0:-1}const tf=n=>n[0]==="_"||n==="$stable",Ua=n=>Ie(n)?n.map(hn):[hn(n)],Lh=(n,e,t)=>{if(e._n)return e;const i=Wu((...r)=>Ua(e(...r)),t);return i._c=!1,i},nf=(n,e,t)=>{const i=n._ctx;for(const r in n){if(tf(r))continue;const s=n[r];if(Fe(s))e[r]=Lh(r,s,i);else if(s!=null){const o=Ua(s);e[r]=()=>o}}},rf=(n,e)=>{const t=Ua(e);n.slots.default=()=>t},Ph=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=Ye(e),Ts(e,"_",t)):nf(e,n.slots={})}else n.slots={},e&&rf(n,e);Ts(n.slots,qs,1)},Rh=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=tt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(At(r,e),!t&&a===1&&delete r._):(s=!e.$stable,nf(e,r)),o=e}else e&&(rf(n,e),o={default:1});if(s)for(const a in r)!tf(a)&&!(a in o)&&delete r[a]};function sf(){return{app:null,config:{isNativeTag:u1,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Dh=0;function Ih(n,e){return function(i,r=null){Fe(i)||(i=Object.assign({},i)),r!=null&&!nt(r)&&(r=null);const s=sf(),o=new Set;let a=!1;const l=s.app={_uid:Dh++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Qh,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&Fe(c.install)?(o.add(c),c.install(l,...u)):Fe(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!a){const h=Mt(i,r);return h.appContext=s,u&&e?e(h,c):n(h,c,f),a=!0,l._container=c,c.__vue_app__=l,Ba(h.component)||h.component.proxy}},unmount(){a&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function oa(n,e,t,i,r=!1){if(Ie(n)){n.forEach((h,m)=>oa(h,e&&(Ie(e)?e[m]:e),t,i,r));return}if(Er(i)&&!r)return;const s=i.shapeFlag&4?Ba(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===tt?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(lt(c)?(u[c]=null,Ge(f,c)&&(f[c]=null)):yt(c)&&(c.value=null)),Fe(l))Xn(l,a,12,[o,u]);else{const h=lt(l),m=yt(l);if(h||m){const g=()=>{if(n.f){const p=h?Ge(f,l)?f[l]:u[l]:l.value;r?Ie(p)&&ba(p,s):Ie(p)?p.includes(s)||p.push(s):h?(u[l]=[s],Ge(f,l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else h?(u[l]=o,Ge(f,l)&&(f[l]=o)):m&&(l.value=o,n.k&&(u[n.k]=o))};o?(g.id=-1,Lt(g,t)):g()}}}const Lt=ah;function Fh(n){return Nh(n)}function Nh(n,e){const t=g1();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:m=rn,insertStaticContent:g}=n,p=(S,C,H,q=null,Z=null,ce=null,de=!1,se=null,pe=!!C.dynamicChildren)=>{if(S===C)return;S&&!mr(S,C)&&(q=ae(S),W(S,Z,ce,!0),S=null),C.patchFlag===-2&&(pe=!1,C.dynamicChildren=null);const{type:oe,ref:b,shapeFlag:x}=C;switch(oe){case Ws:d(S,C,H,q);break;case Kn:_(S,C,H,q);break;case ao:S==null&&w(C,H,q,de);break;case Tt:he(S,C,H,q,Z,ce,de,se,pe);break;default:x&1?E(S,C,H,q,Z,ce,de,se,pe):x&6?j(S,C,H,q,Z,ce,de,se,pe):(x&64||x&128)&&oe.process(S,C,H,q,Z,ce,de,se,pe,ve)}b!=null&&Z&&oa(b,S&&S.ref,ce,C||S,!C)},d=(S,C,H,q)=>{if(S==null)i(C.el=a(C.children),H,q);else{const Z=C.el=S.el;C.children!==S.children&&c(Z,C.children)}},_=(S,C,H,q)=>{S==null?i(C.el=l(C.children||""),H,q):C.el=S.el},w=(S,C,H,q)=>{[S.el,S.anchor]=g(S.children,C,H,q,S.el,S.anchor)},M=({el:S,anchor:C},H,q)=>{let Z;for(;S&&S!==C;)Z=h(S),i(S,H,q),S=Z;i(C,H,q)},v=({el:S,anchor:C})=>{let H;for(;S&&S!==C;)H=h(S),r(S),S=H;r(C)},E=(S,C,H,q,Z,ce,de,se,pe)=>{de=de||C.type==="svg",S==null?P(C,H,q,Z,ce,de,se,pe):L(S,C,Z,ce,de,se,pe)},P=(S,C,H,q,Z,ce,de,se)=>{let pe,oe;const{type:b,props:x,shapeFlag:N,transition:X,dirs:ee}=S;if(pe=S.el=o(S.type,ce,x&&x.is,x),N&8?u(pe,S.children):N&16&&y(S.children,pe,null,q,Z,ce&&b!=="foreignObject",de,se),ee&&ei(S,null,q,"created"),x){for(const Me in x)Me!=="value"&&!ys(Me)&&s(pe,Me,null,x[Me],ce,S.children,q,Z,R);"value"in x&&s(pe,"value",null,x.value),(oe=x.onVnodeBeforeMount)&&ln(oe,q,S)}U(pe,S,S.scopeId,de,q),ee&&ei(S,null,q,"beforeMount");const ue=(!Z||Z&&!Z.pendingBranch)&&X&&!X.persisted;ue&&X.beforeEnter(pe),i(pe,C,H),((oe=x&&x.onVnodeMounted)||ue||ee)&&Lt(()=>{oe&&ln(oe,q,S),ue&&X.enter(pe),ee&&ei(S,null,q,"mounted")},Z)},U=(S,C,H,q,Z)=>{if(H&&m(S,H),q)for(let ce=0;ce<q.length;ce++)m(S,q[ce]);if(Z){let ce=Z.subTree;if(C===ce){const de=Z.vnode;U(S,de,de.scopeId,de.slotScopeIds,Z.parent)}}},y=(S,C,H,q,Z,ce,de,se,pe=0)=>{for(let oe=pe;oe<S.length;oe++){const b=S[oe]=se?Hn(S[oe]):hn(S[oe]);p(null,b,C,H,q,Z,ce,de,se)}},L=(S,C,H,q,Z,ce,de)=>{const se=C.el=S.el;let{patchFlag:pe,dynamicChildren:oe,dirs:b}=C;pe|=S.patchFlag&16;const x=S.props||tt,N=C.props||tt;let X;H&&ti(H,!1),(X=N.onVnodeBeforeUpdate)&&ln(X,H,C,S),b&&ei(C,S,H,"beforeUpdate"),H&&ti(H,!0);const ee=Z&&C.type!=="foreignObject";if(oe?F(S.dynamicChildren,oe,se,H,q,ee,ce):de||G(S,C,se,null,H,q,ee,ce,!1),pe>0){if(pe&16)Q(se,C,x,N,H,q,Z);else if(pe&2&&x.class!==N.class&&s(se,"class",null,N.class,Z),pe&4&&s(se,"style",x.style,N.style,Z),pe&8){const ue=C.dynamicProps;for(let Me=0;Me<ue.length;Me++){const A=ue[Me],O=x[A],be=N[A];(be!==O||A==="value")&&s(se,A,O,be,Z,S.children,H,q,R)}}pe&1&&S.children!==C.children&&u(se,C.children)}else!de&&oe==null&&Q(se,C,x,N,H,q,Z);((X=N.onVnodeUpdated)||b)&&Lt(()=>{X&&ln(X,H,C,S),b&&ei(C,S,H,"updated")},q)},F=(S,C,H,q,Z,ce,de)=>{for(let se=0;se<C.length;se++){const pe=S[se],oe=C[se],b=pe.el&&(pe.type===Tt||!mr(pe,oe)||pe.shapeFlag&70)?f(pe.el):H;p(pe,oe,b,null,q,Z,ce,de,!0)}},Q=(S,C,H,q,Z,ce,de)=>{if(H!==q){if(H!==tt)for(const se in H)!ys(se)&&!(se in q)&&s(S,se,H[se],null,de,C.children,Z,ce,R);for(const se in q){if(ys(se))continue;const pe=q[se],oe=H[se];pe!==oe&&se!=="value"&&s(S,se,oe,pe,de,C.children,Z,ce,R)}"value"in q&&s(S,"value",H.value,q.value)}},he=(S,C,H,q,Z,ce,de,se,pe)=>{const oe=C.el=S?S.el:a(""),b=C.anchor=S?S.anchor:a("");let{patchFlag:x,dynamicChildren:N,slotScopeIds:X}=C;X&&(se=se?se.concat(X):X),S==null?(i(oe,H,q),i(b,H,q),y(C.children,H,b,Z,ce,de,se,pe)):x>0&&x&64&&N&&S.dynamicChildren?(F(S.dynamicChildren,N,H,Z,ce,de,se),(C.key!=null||Z&&C===Z.subTree)&&of(S,C,!0)):G(S,C,H,b,Z,ce,de,se,pe)},j=(S,C,H,q,Z,ce,de,se,pe)=>{C.slotScopeIds=se,S==null?C.shapeFlag&512?Z.ctx.activate(C,H,q,de,pe):B(C,H,q,Z,ce,de,pe):K(S,C,pe)},B=(S,C,H,q,Z,ce,de)=>{const se=S.component=Wh(S,q,Z);if(ju(S)&&(se.ctx.renderer=ve),qh(se),se.asyncDep){if(Z&&Z.registerDep(se,ne),!S.el){const pe=se.subTree=Mt(Kn);_(null,pe,C,H)}return}ne(se,S,C,H,Z,ce,de)},K=(S,C,H)=>{const q=C.component=S.component;if(rh(S,C,H))if(q.asyncDep&&!q.asyncResolved){$(q,C,H);return}else q.next=C,J1(q.update),q.update();else C.el=S.el,q.vnode=C},ne=(S,C,H,q,Z,ce,de)=>{const se=()=>{if(S.isMounted){let{next:b,bu:x,u:N,parent:X,vnode:ee}=S,ue=b,Me;ti(S,!1),b?(b.el=ee.el,$(S,b,de)):b=ee,x&&ro(x),(Me=b.props&&b.props.onVnodeBeforeUpdate)&&ln(Me,X,b,ee),ti(S,!0);const A=so(S),O=S.subTree;S.subTree=A,p(O,A,f(O.el),ae(O),S,Z,ce),b.el=A.el,ue===null&&sh(S,A.el),N&&Lt(N,Z),(Me=b.props&&b.props.onVnodeUpdated)&&Lt(()=>ln(Me,X,b,ee),Z)}else{let b;const{el:x,props:N}=C,{bm:X,m:ee,parent:ue}=S,Me=Er(C);if(ti(S,!1),X&&ro(X),!Me&&(b=N&&N.onVnodeBeforeMount)&&ln(b,ue,C),ti(S,!0),x&&Ee){const A=()=>{S.subTree=so(S),Ee(x,S.subTree,S,Z,null)};Me?C.type.__asyncLoader().then(()=>!S.isUnmounted&&A()):A()}else{const A=S.subTree=so(S);p(null,A,H,q,S,Z,ce),C.el=A.el}if(ee&&Lt(ee,Z),!Me&&(b=N&&N.onVnodeMounted)){const A=C;Lt(()=>ln(b,ue,A),Z)}(C.shapeFlag&256||ue&&Er(ue.vnode)&&ue.vnode.shapeFlag&256)&&S.a&&Lt(S.a,Z),S.isMounted=!0,C=H=q=null}},pe=S.effect=new Ta(se,()=>Ia(oe),S.scope),oe=S.update=()=>pe.run();oe.id=S.uid,ti(S,!0),oe()},$=(S,C,H)=>{C.component=S;const q=S.vnode.props;S.vnode=C,S.next=null,Ah(S,C.props,q,H),Rh(S,C.children,H),cr(),al(),ur()},G=(S,C,H,q,Z,ce,de,se,pe=!1)=>{const oe=S&&S.children,b=S?S.shapeFlag:0,x=C.children,{patchFlag:N,shapeFlag:X}=C;if(N>0){if(N&128){le(oe,x,H,q,Z,ce,de,se,pe);return}else if(N&256){fe(oe,x,H,q,Z,ce,de,se,pe);return}}X&8?(b&16&&R(oe,Z,ce),x!==oe&&u(H,x)):b&16?X&16?le(oe,x,H,q,Z,ce,de,se,pe):R(oe,Z,ce,!0):(b&8&&u(H,""),X&16&&y(x,H,q,Z,ce,de,se,pe))},fe=(S,C,H,q,Z,ce,de,se,pe)=>{S=S||Xi,C=C||Xi;const oe=S.length,b=C.length,x=Math.min(oe,b);let N;for(N=0;N<x;N++){const X=C[N]=pe?Hn(C[N]):hn(C[N]);p(S[N],X,H,null,Z,ce,de,se,pe)}oe>b?R(S,Z,ce,!0,!1,x):y(C,H,q,Z,ce,de,se,pe,x)},le=(S,C,H,q,Z,ce,de,se,pe)=>{let oe=0;const b=C.length;let x=S.length-1,N=b-1;for(;oe<=x&&oe<=N;){const X=S[oe],ee=C[oe]=pe?Hn(C[oe]):hn(C[oe]);if(mr(X,ee))p(X,ee,H,null,Z,ce,de,se,pe);else break;oe++}for(;oe<=x&&oe<=N;){const X=S[x],ee=C[N]=pe?Hn(C[N]):hn(C[N]);if(mr(X,ee))p(X,ee,H,null,Z,ce,de,se,pe);else break;x--,N--}if(oe>x){if(oe<=N){const X=N+1,ee=X<b?C[X].el:q;for(;oe<=N;)p(null,C[oe]=pe?Hn(C[oe]):hn(C[oe]),H,ee,Z,ce,de,se,pe),oe++}}else if(oe>N)for(;oe<=x;)W(S[oe],Z,ce,!0),oe++;else{const X=oe,ee=oe,ue=new Map;for(oe=ee;oe<=N;oe++){const we=C[oe]=pe?Hn(C[oe]):hn(C[oe]);we.key!=null&&ue.set(we.key,oe)}let Me,A=0;const O=N-ee+1;let be=!1,Te=0;const Se=new Array(O);for(oe=0;oe<O;oe++)Se[oe]=0;for(oe=X;oe<=x;oe++){const we=S[oe];if(A>=O){W(we,Z,ce,!0);continue}let Re;if(we.key!=null)Re=ue.get(we.key);else for(Me=ee;Me<=N;Me++)if(Se[Me-ee]===0&&mr(we,C[Me])){Re=Me;break}Re===void 0?W(we,Z,ce,!0):(Se[Re-ee]=oe+1,Re>=Te?Te=Re:be=!0,p(we,C[Re],H,null,Z,ce,de,se,pe),A++)}const Ae=be?Oh(Se):Xi;for(Me=Ae.length-1,oe=O-1;oe>=0;oe--){const we=ee+oe,Re=C[we],ze=we+1<b?C[we+1].el:q;Se[oe]===0?p(null,Re,H,ze,Z,ce,de,se,pe):be&&(Me<0||oe!==Ae[Me]?Y(Re,H,ze,2):Me--)}}},Y=(S,C,H,q,Z=null)=>{const{el:ce,type:de,transition:se,children:pe,shapeFlag:oe}=S;if(oe&6){Y(S.component.subTree,C,H,q);return}if(oe&128){S.suspense.move(C,H,q);return}if(oe&64){de.move(S,C,H,ve);return}if(de===Tt){i(ce,C,H);for(let x=0;x<pe.length;x++)Y(pe[x],C,H,q);i(S.anchor,C,H);return}if(de===ao){M(S,C,H);return}if(q!==2&&oe&1&&se)if(q===0)se.beforeEnter(ce),i(ce,C,H),Lt(()=>se.enter(ce),Z);else{const{leave:x,delayLeave:N,afterLeave:X}=se,ee=()=>i(ce,C,H),ue=()=>{x(ce,()=>{ee(),X&&X()})};N?N(ce,ee,ue):ue()}else i(ce,C,H)},W=(S,C,H,q=!1,Z=!1)=>{const{type:ce,props:de,ref:se,children:pe,dynamicChildren:oe,shapeFlag:b,patchFlag:x,dirs:N}=S;if(se!=null&&oa(se,null,H,S,!0),b&256){C.ctx.deactivate(S);return}const X=b&1&&N,ee=!Er(S);let ue;if(ee&&(ue=de&&de.onVnodeBeforeUnmount)&&ln(ue,C,S),b&6)I(S.component,H,q);else{if(b&128){S.suspense.unmount(H,q);return}X&&ei(S,null,C,"beforeUnmount"),b&64?S.type.remove(S,C,H,Z,ve,q):oe&&(ce!==Tt||x>0&&x&64)?R(oe,C,H,!1,!0):(ce===Tt&&x&384||!Z&&b&16)&&R(pe,C,H),q&&xe(S)}(ee&&(ue=de&&de.onVnodeUnmounted)||X)&&Lt(()=>{ue&&ln(ue,C,S),X&&ei(S,null,C,"unmounted")},H)},xe=S=>{const{type:C,el:H,anchor:q,transition:Z}=S;if(C===Tt){ge(H,q);return}if(C===ao){v(S);return}const ce=()=>{r(H),Z&&!Z.persisted&&Z.afterLeave&&Z.afterLeave()};if(S.shapeFlag&1&&Z&&!Z.persisted){const{leave:de,delayLeave:se}=Z,pe=()=>de(H,ce);se?se(S.el,ce,pe):pe()}else ce()},ge=(S,C)=>{let H;for(;S!==C;)H=h(S),r(S),S=H;r(C)},I=(S,C,H)=>{const{bum:q,scope:Z,update:ce,subTree:de,um:se}=S;q&&ro(q),Z.stop(),ce&&(ce.active=!1,W(de,S,C,H)),se&&Lt(se,C),Lt(()=>{S.isUnmounted=!0},C),C&&C.pendingBranch&&!C.isUnmounted&&S.asyncDep&&!S.asyncResolved&&S.suspenseId===C.pendingId&&(C.deps--,C.deps===0&&C.resolve())},R=(S,C,H,q=!1,Z=!1,ce=0)=>{for(let de=ce;de<S.length;de++)W(S[de],C,H,q,Z)},ae=S=>S.shapeFlag&6?ae(S.component.subTree):S.shapeFlag&128?S.suspense.next():h(S.anchor||S.el),re=(S,C,H)=>{S==null?C._vnode&&W(C._vnode,null,null,!0):p(C._vnode||null,S,C,null,null,null,H),al(),Vu(),C._vnode=S},ve={p,um:W,m:Y,r:xe,mt:B,mc:y,pc:G,pbc:F,n:ae,o:n};let _e,Ee;return e&&([_e,Ee]=e(ve)),{render:re,hydrate:_e,createApp:Ih(re,_e)}}function ti({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function of(n,e,t=!1){const i=n.children,r=e.children;if(Ie(i)&&Ie(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Hn(r[s]),a.el=o.el),t||of(o,a)),a.type===Ws&&(a.el=o.el)}}function Oh(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const Uh=n=>n.__isTeleport,Tt=Symbol(void 0),Ws=Symbol(void 0),Kn=Symbol(void 0),ao=Symbol(void 0),Cr=[];let nn=null;function je(n=!1){Cr.push(nn=n?null:[])}function zh(){Cr.pop(),nn=Cr[Cr.length-1]||null}let Nr=1;function _l(n){Nr+=n}function af(n){return n.dynamicChildren=Nr>0?nn||Xi:null,zh(),Nr>0&&nn&&nn.push(n),n}function Ze(n,e,t,i,r,s){return af(Cn(n,e,t,i,r,s,!0))}function Or(n,e,t,i,r){return af(Mt(n,e,t,i,r,!0))}function Ps(n){return n?n.__v_isVNode===!0:!1}function mr(n,e){return n.type===e.type&&n.key===e.key}const qs="__vInternal",lf=({key:n})=>n!=null?n:null,Ss=({ref:n,ref_key:e,ref_for:t})=>n!=null?lt(n)||yt(n)||Fe(n)?{i:Ct,r:n,k:e,f:!!t}:n:null;function Cn(n,e=null,t=null,i=0,r=null,s=n===Tt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&lf(e),ref:e&&Ss(e),scopeId:Hs,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ct};return a?(za(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=lt(t)?8:16),Nr>0&&!o&&nn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&nn.push(l),l}const Mt=Bh;function Bh(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===vh)&&(n=Kn),Ps(n)){const a=er(n,e,!0);return t&&za(a,t),Nr>0&&!s&&nn&&(a.shapeFlag&6?nn[nn.indexOf(n)]=a:nn.push(a)),a.patchFlag|=-2,a}if($h(n)&&(n=n.__vccOpts),e){e=kh(e);let{class:a,style:l}=e;a&&!lt(a)&&(e.class=Qe(a)),nt(l)&&(Ru(l)&&!Ie(l)&&(l=At({},l)),e.style=ya(l))}const o=lt(n)?1:oh(n)?128:Uh(n)?64:nt(n)?4:Fe(n)?2:0;return Cn(n,e,t,i,r,o,s,!0)}function kh(n){return n?Ru(n)||qs in n?At({},n):n:null}function er(n,e,t=!1){const{props:i,ref:r,patchFlag:s,children:o}=n,a=e?Vh(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:a,key:a&&lf(a),ref:e&&e.ref?t&&r?Ie(r)?r.concat(Ss(e)):[r,Ss(e)]:Ss(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Tt?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&er(n.ssContent),ssFallback:n.ssFallback&&er(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx}}function Rs(n=" ",e=0){return Mt(Ws,null,n,e)}function In(n="",e=!1){return e?(je(),Or(Kn,null,n)):Mt(Kn,null,n)}function hn(n){return n==null||typeof n=="boolean"?Mt(Kn):Ie(n)?Mt(Tt,null,n.slice()):typeof n=="object"?Hn(n):Mt(Ws,null,String(n))}function Hn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:er(n)}function za(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ie(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),za(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(qs in e)?e._ctx=Ct:r===3&&Ct&&(Ct.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Fe(e)?(e={default:e,_ctx:Ct},t=32):(e=String(e),i&64?(t=16,e=[Rs(e)]):t=8);n.children=e,n.shapeFlag|=t}function Vh(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Qe([e.class,i.class]));else if(r==="style")e.style=ya([e.style,i.style]);else if(Ns(r)){const s=e[r],o=i[r];o&&s!==o&&!(Ie(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function ln(n,e,t,i=null){sn(n,e,7,[t,i])}const Hh=sf();let Gh=0;function Wh(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Hh,s={uid:Gh++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new _1(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ef(i,r),emitsOptions:Gu(i,r),emit:null,emitted:null,propsDefaults:tt,inheritAttrs:i.inheritAttrs,ctx:tt,data:tt,props:tt,attrs:tt,slots:tt,refs:tt,setupState:tt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=th.bind(null,s),n.ce&&n.ce(s),s}let gt=null;const tr=n=>{gt=n,n.scope.on()},mi=()=>{gt&&gt.scope.off(),gt=null};function cf(n){return n.vnode.shapeFlag&4}let Ur=!1;function qh(n,e=!1){Ur=e;const{props:t,children:i}=n.vnode,r=cf(n);Ch(n,t,r,e),Ph(n,i);const s=r?Xh(n,e):void 0;return Ur=!1,s}function Xh(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=Du(new Proxy(n.ctx,Mh));const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?Yh(n):null;tr(n),cr();const s=Xn(i,n,0,[n.props,r]);if(ur(),mi(),gu(s)){if(s.then(mi,mi),e)return s.then(o=>{xl(n,o,e)}).catch(o=>{ks(o,n,0)});n.asyncDep=s}else xl(n,s,e)}else uf(n,e)}function xl(n,e,t){Fe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:nt(e)&&(n.setupState=Ou(e)),uf(n,t)}let vl;function uf(n,e,t){const i=n.type;if(!n.render){if(!e&&vl&&!i.render){const r=i.template||Oa(n).template;if(r){const{isCustomElement:s,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=At(At({isCustomElement:s,delimiters:a},o),l);i.render=vl(r,c)}}n.render=i.render||rn}tr(n),cr(),bh(n),ur(),mi()}function jh(n){return new Proxy(n.attrs,{get(e,t){return Ht(n,"get","$attrs"),e[t]}})}function Yh(n){const e=i=>{n.exposed=i||{}};let t;return{get attrs(){return t||(t=jh(n))},slots:n.slots,emit:n.emit,expose:e}}function Ba(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Ou(Du(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Tr)return Tr[t](n)},has(e,t){return t in e||t in Tr}}))}function Kh(n,e=!0){return Fe(n)?n.displayName||n.name:n.name||e&&n.__name}function $h(n){return Fe(n)&&"__vccOpts"in n}const jt=(n,e)=>K1(n,e,Ur);function ff(n,e,t){const i=arguments.length;return i===2?nt(e)&&!Ie(e)?Ps(e)?Mt(n,null,[e]):Mt(n,e):Mt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Ps(t)&&(t=[t]),Mt(n,e,t))}const Zh=Symbol(""),Jh=()=>on(Zh),Qh="3.2.45",ed="http://www.w3.org/2000/svg",ui=typeof document<"u"?document:null,yl=ui&&ui.createElement("template"),td={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e?ui.createElementNS(ed,n):ui.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>ui.createTextNode(n),createComment:n=>ui.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ui.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{yl.innerHTML=i?`<svg>${n}</svg>`:n;const a=yl.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function nd(n,e,t){const i=n._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function id(n,e,t){const i=n.style,r=lt(t);if(t&&!r){for(const s in t)aa(i,s,t[s]);if(e&&!lt(e))for(const s in e)t[s]==null&&aa(i,s,"")}else{const s=i.display;r?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(i.display=s)}}const Ml=/\s*!important$/;function aa(n,e,t){if(Ie(t))t.forEach(i=>aa(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=rd(n,e);Ml.test(t)?n.setProperty(Si(i),t.replace(Ml,""),"important"):n[i]=t}}const bl=["Webkit","Moz","ms"],lo={};function rd(n,e){const t=lo[e];if(t)return t;let i=mn(e);if(i!=="filter"&&i in n)return lo[e]=i;i=zs(i);for(let r=0;r<bl.length;r++){const s=bl[r]+i;if(s in n)return lo[e]=s}return e}const Sl="http://www.w3.org/1999/xlink";function sd(n,e,t,i,r){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(Sl,e.slice(6,e.length)):n.setAttributeNS(Sl,e,t);else{const s=c1(e);t==null||s&&!du(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function od(n,e,t,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),n[e]=t==null?"":t;return}if(e==="value"&&n.tagName!=="PROGRESS"&&!n.tagName.includes("-")){n._value=t;const l=t==null?"":t;(n.value!==l||n.tagName==="OPTION")&&(n.value=l),t==null&&n.removeAttribute(e);return}let a=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=du(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(e)}function ad(n,e,t,i){n.addEventListener(e,t,i)}function ld(n,e,t,i){n.removeEventListener(e,t,i)}function cd(n,e,t,i,r=null){const s=n._vei||(n._vei={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=ud(e);if(i){const c=s[e]=dd(i,r);ad(n,a,c,l)}else o&&(ld(n,a,o,l),s[e]=void 0)}}const wl=/(?:Once|Passive|Capture)$/;function ud(n){let e;if(wl.test(n)){e={};let i;for(;i=n.match(wl);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Si(n.slice(2)),e]}let co=0;const fd=Promise.resolve(),hd=()=>co||(fd.then(()=>co=0),co=Date.now());function dd(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;sn(pd(i,t.value),e,5,[i])};return t.value=n,t.attached=hd(),t}function pd(n,e){if(Ie(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const El=/^on[a-z]/,md=(n,e,t,i,r=!1,s,o,a,l)=>{e==="class"?nd(n,i,r):e==="style"?id(n,t,i):Ns(e)?Ma(e)||cd(n,e,t,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):gd(n,e,i,r))?od(n,e,i,s,o,a,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),sd(n,e,i,r))};function gd(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&El.test(e)&&Fe(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||El.test(e)&&lt(t)?!1:e in n}const _d={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},cn=(n,e)=>t=>{if(!("key"in t))return;const i=Si(t.key);if(e.some(r=>r===i||_d[r]===i))return n(t)},xd=At({patchProp:md},td);let Tl;function vd(){return Tl||(Tl=Fh(xd))}const yd=(...n)=>{const e=vd().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Md(i);if(!r)return;const s=e._component;!Fe(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Md(n){return lt(n)?document.querySelector(n):n}var bd=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t};const Sd={data(){return{innerValue:1}},props:{modelValue:{type:Number},pageCount:{type:Number,required:!0},initialPage:{type:Number,default:1},forcePage:{type:Number},clickHandler:{type:Function,default:()=>{}},pageRange:{type:Number,default:3},marginPages:{type:Number,default:1},prevText:{type:String,default:"Prev"},nextText:{type:String,default:"Next"},breakViewText:{type:String,default:"\u2026"},containerClass:{type:String,default:"pagination"},pageClass:{type:String,default:"page-item"},pageLinkClass:{type:String,default:"page-link"},prevClass:{type:String,default:"page-item"},prevLinkClass:{type:String,default:"page-link"},nextClass:{type:String,default:"page-item"},nextLinkClass:{type:String,default:"page-link"},breakViewClass:{type:String},breakViewLinkClass:{type:String},activeClass:{type:String,default:"active"},disabledClass:{type:String,default:"disabled"},noLiSurround:{type:Boolean,default:!1},firstLastButton:{type:Boolean,default:!1},firstButtonText:{type:String,default:"First"},lastButtonText:{type:String,default:"Last"},hidePrevNext:{type:Boolean,default:!1}},computed:{selected:{get:function(){return this.modelValue||this.innerValue},set:function(n){this.innerValue=n}},pages:function(){let n={};if(this.pageCount<=this.pageRange)for(let e=0;e<this.pageCount;e++){let t={index:e,content:e+1,selected:e===this.selected-1};n[e]=t}else{const e=Math.floor(this.pageRange/2);let t=o=>{let a={index:o,content:o+1,selected:o===this.selected-1};n[o]=a},i=o=>{let a={disabled:!0,breakView:!0};n[o]=a};for(let o=0;o<this.marginPages;o++)t(o);let r=0;this.selected-e>0&&(r=this.selected-1-e);let s=r+this.pageRange-1;s>=this.pageCount&&(s=this.pageCount-1,r=s-this.pageRange+1);for(let o=r;o<=s&&o<=this.pageCount-1;o++)t(o);r>this.marginPages&&i(r-1),s+1<this.pageCount-this.marginPages&&i(s+1);for(let o=this.pageCount-1;o>=this.pageCount-this.marginPages;o--)t(o)}return n}},methods:{handlePageSelected(n){this.selected!==n&&(this.innerValue=n,this.$emit("update:modelValue",n),this.clickHandler(n))},prevPage(){this.selected<=1||this.handlePageSelected(this.selected-1)},nextPage(){this.selected>=this.pageCount||this.handlePageSelected(this.selected+1)},firstPageSelected(){return this.selected===1},lastPageSelected(){return this.selected===this.pageCount||this.pageCount===0},selectFirstPage(){this.selected<=1||this.handlePageSelected(1)},selectLastPage(){this.selected>=this.pageCount||this.handlePageSelected(this.pageCount)}},beforeMount(){this.innerValue=this.initialPage},beforeUpdate(){this.forcePage!==void 0&&this.forcePage!==this.selected&&(this.selected=this.forcePage)}},wd=["tabindex","innerHTML"],Ed=["tabindex","innerHTML"],Td=["onClick","onKeyup"],Cd=["tabindex","innerHTML"],Ad=["tabindex","innerHTML"],Ld=["innerHTML"],Pd=["innerHTML"],Rd=["onClick","onKeyup"],Dd=["innerHTML"],Id=["innerHTML"];function Fd(n,e,t,i,r,s){return t.noLiSurround?(je(),Ze("div",{key:1,class:Qe(t.containerClass)},[t.firstLastButton?(je(),Ze("a",{key:0,onClick:e[8]||(e[8]=o=>s.selectFirstPage()),onKeyup:e[9]||(e[9]=cn(o=>s.selectFirstPage(),["enter"])),class:Qe([t.pageLinkClass,s.firstPageSelected()?t.disabledClass:""]),tabindex:"0",innerHTML:t.firstButtonText},null,42,Ld)):In("",!0),s.firstPageSelected()&&t.hidePrevNext?In("",!0):(je(),Ze("a",{key:1,onClick:e[10]||(e[10]=o=>s.prevPage()),onKeyup:e[11]||(e[11]=cn(o=>s.prevPage(),["enter"])),class:Qe([t.prevLinkClass,s.firstPageSelected()?t.disabledClass:""]),tabindex:"0",innerHTML:t.prevText},null,42,Pd)),(je(!0),Ze(Tt,null,ta(s.pages,o=>(je(),Ze(Tt,null,[o.breakView?(je(),Ze("a",{key:o.index,class:Qe([t.pageLinkClass,t.breakViewLinkClass,o.disabled?t.disabledClass:""]),tabindex:"0"},[ul(n.$slots,"breakViewContent",{},()=>[Rs(si(t.breakViewText),1)])],2)):o.disabled?(je(),Ze("a",{key:o.index,class:Qe([t.pageLinkClass,o.selected?t.activeClass:"",t.disabledClass]),tabindex:"0"},si(o.content),3)):(je(),Ze("a",{key:o.index,onClick:a=>s.handlePageSelected(o.index+1),onKeyup:cn(a=>s.handlePageSelected(o.index+1),["enter"]),class:Qe([t.pageLinkClass,o.selected?t.activeClass:""]),tabindex:"0"},si(o.content),43,Rd))],64))),256)),s.lastPageSelected()&&t.hidePrevNext?In("",!0):(je(),Ze("a",{key:2,onClick:e[12]||(e[12]=o=>s.nextPage()),onKeyup:e[13]||(e[13]=cn(o=>s.nextPage(),["enter"])),class:Qe([t.nextLinkClass,s.lastPageSelected()?t.disabledClass:""]),tabindex:"0",innerHTML:t.nextText},null,42,Dd)),t.firstLastButton?(je(),Ze("a",{key:3,onClick:e[14]||(e[14]=o=>s.selectLastPage()),onKeyup:e[15]||(e[15]=cn(o=>s.selectLastPage(),["enter"])),class:Qe([t.pageLinkClass,s.lastPageSelected()?t.disabledClass:""]),tabindex:"0",innerHTML:t.lastButtonText},null,42,Id)):In("",!0)],2)):(je(),Ze("ul",{key:0,class:Qe(t.containerClass)},[t.firstLastButton?(je(),Ze("li",{key:0,class:Qe([t.pageClass,s.firstPageSelected()?t.disabledClass:""])},[Cn("a",{onClick:e[0]||(e[0]=o=>s.selectFirstPage()),onKeyup:e[1]||(e[1]=cn(o=>s.selectFirstPage(),["enter"])),class:Qe(t.pageLinkClass),tabindex:s.firstPageSelected()?-1:0,innerHTML:t.firstButtonText},null,42,wd)],2)):In("",!0),s.firstPageSelected()&&t.hidePrevNext?In("",!0):(je(),Ze("li",{key:1,class:Qe([t.prevClass,s.firstPageSelected()?t.disabledClass:""])},[Cn("a",{onClick:e[2]||(e[2]=o=>s.prevPage()),onKeyup:e[3]||(e[3]=cn(o=>s.prevPage(),["enter"])),class:Qe(t.prevLinkClass),tabindex:s.firstPageSelected()?-1:0,innerHTML:t.prevText},null,42,Ed)],2)),(je(!0),Ze(Tt,null,ta(s.pages,o=>(je(),Ze("li",{key:o.index,class:Qe([t.pageClass,o.selected?t.activeClass:"",o.disabled?t.disabledClass:"",o.breakView?t.breakViewClass:""])},[o.breakView?(je(),Ze("a",{key:0,class:Qe([t.pageLinkClass,t.breakViewLinkClass]),tabindex:"0"},[ul(n.$slots,"breakViewContent",{},()=>[Rs(si(t.breakViewText),1)])],2)):o.disabled?(je(),Ze("a",{key:1,class:Qe(t.pageLinkClass),tabindex:"0"},si(o.content),3)):(je(),Ze("a",{key:2,onClick:a=>s.handlePageSelected(o.index+1),onKeyup:cn(a=>s.handlePageSelected(o.index+1),["enter"]),class:Qe(t.pageLinkClass),tabindex:"0"},si(o.content),43,Td))],2))),128)),s.lastPageSelected()&&t.hidePrevNext?In("",!0):(je(),Ze("li",{key:2,class:Qe([t.nextClass,s.lastPageSelected()?t.disabledClass:""])},[Cn("a",{onClick:e[4]||(e[4]=o=>s.nextPage()),onKeyup:e[5]||(e[5]=cn(o=>s.nextPage(),["enter"])),class:Qe(t.nextLinkClass),tabindex:s.lastPageSelected()?-1:0,innerHTML:t.nextText},null,42,Cd)],2)),t.firstLastButton?(je(),Ze("li",{key:3,class:Qe([t.pageClass,s.lastPageSelected()?t.disabledClass:""])},[Cn("a",{onClick:e[6]||(e[6]=o=>s.selectLastPage()),onKeyup:e[7]||(e[7]=cn(o=>s.selectLastPage(),["enter"])),class:Qe(t.pageLinkClass),tabindex:s.lastPageSelected()?-1:0,innerHTML:t.lastButtonText},null,42,Ad)],2)):In("",!0)],2))}var hf=bd(Sd,[["render",Fd]]);const Xs=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},Nd=Hr({name:"App"});function Od(n,e,t,i,r,s){const o=Fr("router-view");return je(),Or(o)}const Ud=Xs(Nd,[["render",Od]]),zd="modulepreload",Bd=function(n){return"/3dprintingdataset/"+n},Cl={},Al=function(e,t,i){if(!t||t.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(t.map(s=>{if(s=Bd(s),s in Cl)return;Cl[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!i)for(let u=r.length-1;u>=0;u--){const f=r[u];if(f.href===s&&(!o||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":zd,o||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),o)return new Promise((u,f)=>{c.addEventListener("load",u),c.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Hi=typeof window<"u";function kd(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const Ke=Object.assign;function uo(n,e){const t={};for(const i in e){const r=e[i];t[i]=an(r)?r.map(n):n(r)}return t}const Ar=()=>{},an=Array.isArray,Vd=/\/$/,Hd=n=>n.replace(Vd,"");function fo(n,e,t="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=n(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=Xd(i!=null?i:e,t),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:o}}function Gd(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Ll(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function Wd(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&nr(e.matched[i],t.matched[r])&&df(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function nr(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function df(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!qd(n[t],e[t]))return!1;return!0}function qd(n,e){return an(n)?Pl(n,e):an(e)?Pl(e,n):n===e}function Pl(n,e){return an(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function Xd(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/");let r=t.length-1,s,o;for(s=0;s<i.length;s++)if(o=i[s],o!==".")if(o==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+i.slice(s-(s===i.length?1:0)).join("/")}var zr;(function(n){n.pop="pop",n.push="push"})(zr||(zr={}));var Lr;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Lr||(Lr={}));function jd(n){if(!n)if(Hi){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Hd(n)}const Yd=/^[^#]+#/;function Kd(n,e){return n.replace(Yd,"#")+e}function $d(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const js=()=>({left:window.pageXOffset,top:window.pageYOffset});function Zd(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=$d(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Rl(n,e){return(history.state?history.state.position-e:-1)+n}const la=new Map;function Jd(n,e){la.set(n,e)}function Qd(n){const e=la.get(n);return la.delete(n),e}let e0=()=>location.protocol+"//"+location.host;function pf(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let a=r.includes(n.slice(s))?n.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),Ll(l,"")}return Ll(t,n)+i+r}function t0(n,e,t,i){let r=[],s=[],o=null;const a=({state:h})=>{const m=pf(n,location),g=t.value,p=e.value;let d=0;if(h){if(t.value=m,e.value=h,o&&o===g){o=null;return}d=p?h.position-p.position:0}else i(m);r.forEach(_=>{_(t.value,g,{delta:d,type:zr.pop,direction:d?d>0?Lr.forward:Lr.back:Lr.unknown})})};function l(){o=t.value}function c(h){r.push(h);const m=()=>{const g=r.indexOf(h);g>-1&&r.splice(g,1)};return s.push(m),m}function u(){const{history:h}=window;!h.state||h.replaceState(Ke({},h.state,{scroll:js()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:f}}function Dl(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?js():null}}function n0(n){const{history:e,location:t}=window,i={value:pf(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=n.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:e0()+n+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(m){console.error(m),t[u?"replace":"assign"](h)}}function o(l,c){const u=Ke({},e.state,Dl(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=Ke({},r.value,e.state,{forward:l,scroll:js()});s(u.current,u,!0);const f=Ke({},Dl(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function i0(n){n=jd(n);const e=n0(n),t=t0(n,e.state,e.location,e.replace);function i(s,o=!0){o||t.pauseListeners(),history.go(s)}const r=Ke({location:"",base:n,go:i,createHref:Kd.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function r0(n){return typeof n=="string"||n&&typeof n=="object"}function mf(n){return typeof n=="string"||typeof n=="symbol"}const Fn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},gf=Symbol("");var Il;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Il||(Il={}));function ir(n,e){return Ke(new Error,{type:n,[gf]:!0},e)}function xn(n,e){return n instanceof Error&&gf in n&&(e==null||!!(n.type&e))}const Fl="[^/]+?",s0={sensitive:!1,strict:!1,start:!0,end:!0},o0=/[.+*?^${}()[\]/\\]/g;function a0(n,e){const t=Ke({},s0,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const h=c[f];let m=40+(t.sensitive?.25:0);if(h.type===0)f||(r+="/"),r+=h.value.replace(o0,"\\$&"),m+=40;else if(h.type===1){const{value:g,repeatable:p,optional:d,regexp:_}=h;s.push({name:g,repeatable:p,optional:d});const w=_||Fl;if(w!==Fl){m+=10;try{new RegExp(`(${w})`)}catch(v){throw new Error(`Invalid custom RegExp for param "${g}" (${w}): `+v.message)}}let M=p?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;f||(M=d&&c.length<2?`(?:/${M})`:"/"+M),d&&(M+="?"),r+=M,m+=20,d&&(m+=-8),p&&(m+=-20),w===".*"&&(m+=-50)}u.push(m)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const m=u[h]||"",g=s[h-1];f[g.name]=m&&g.repeatable?m.split("/"):m}return f}function l(c){let u="",f=!1;for(const h of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const m of h)if(m.type===0)u+=m.value;else if(m.type===1){const{value:g,repeatable:p,optional:d}=m,_=g in c?c[g]:"";if(an(_)&&!p)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const w=an(_)?_.join("/"):_;if(!w)if(d)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=w}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function l0(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===40+40?-1:1:n.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function c0(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=l0(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(Nl(i))return 1;if(Nl(r))return-1}return r.length-i.length}function Nl(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const u0={type:0,value:""},f0=/[a-zA-Z0-9_]/;function h0(n){if(!n)return[[]];if(n==="/")return[[u0]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(m){throw new Error(`ERR (${t})/"${c}": ${m}`)}let t=0,i=t;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){!c||(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),t=1):h();break;case 4:h(),t=i;break;case 1:l==="("?t=2:f0.test(l)?h():(f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function d0(n,e,t){const i=a0(h0(n.path),t),r=Ke(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function p0(n,e){const t=[],i=new Map;e=zl({strict:!1,end:!0,sensitive:!1},e);function r(u){return i.get(u)}function s(u,f,h){const m=!h,g=m0(u);g.aliasOf=h&&h.record;const p=zl(e,u),d=[g];if("alias"in u){const M=typeof u.alias=="string"?[u.alias]:u.alias;for(const v of M)d.push(Ke({},g,{components:h?h.record.components:g.components,path:v,aliasOf:h?h.record:g}))}let _,w;for(const M of d){const{path:v}=M;if(f&&v[0]!=="/"){const E=f.record.path,P=E[E.length-1]==="/"?"":"/";M.path=f.record.path+(v&&P+v)}if(_=d0(M,f,p),h?h.alias.push(_):(w=w||_,w!==_&&w.alias.push(_),m&&u.name&&!Ul(_)&&o(u.name)),g.children){const E=g.children;for(let P=0;P<E.length;P++)s(E[P],_,h&&h.children[P])}h=h||_,(_.record.components&&Object.keys(_.record.components).length||_.record.name||_.record.redirect)&&l(_)}return w?()=>{o(w)}:Ar}function o(u){if(mf(u)){const f=i.get(u);f&&(i.delete(u),t.splice(t.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=t.indexOf(u);f>-1&&(t.splice(f,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return t}function l(u){let f=0;for(;f<t.length&&c0(u,t[f])>=0&&(u.record.path!==t[f].record.path||!_f(u,t[f]));)f++;t.splice(f,0,u),u.record.name&&!Ul(u)&&i.set(u.record.name,u)}function c(u,f){let h,m={},g,p;if("name"in u&&u.name){if(h=i.get(u.name),!h)throw ir(1,{location:u});p=h.record.name,m=Ke(Ol(f.params,h.keys.filter(w=>!w.optional).map(w=>w.name)),u.params&&Ol(u.params,h.keys.map(w=>w.name))),g=h.stringify(m)}else if("path"in u)g=u.path,h=t.find(w=>w.re.test(g)),h&&(m=h.parse(g),p=h.record.name);else{if(h=f.name?i.get(f.name):t.find(w=>w.re.test(f.path)),!h)throw ir(1,{location:u,currentLocation:f});p=h.record.name,m=Ke({},f.params,u.params),g=h.stringify(m)}const d=[];let _=h;for(;_;)d.unshift(_.record),_=_.parent;return{name:p,path:g,params:m,matched:d,meta:_0(d)}}return n.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Ol(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function m0(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:g0(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function g0(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="boolean"?t:t[i];return e}function Ul(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function _0(n){return n.reduce((e,t)=>Ke(e,t.meta),{})}function zl(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function _f(n,e){return e.children.some(t=>t===n||_f(n,t))}const xf=/#/g,x0=/&/g,v0=/\//g,y0=/=/g,M0=/\?/g,vf=/\+/g,b0=/%5B/g,S0=/%5D/g,yf=/%5E/g,w0=/%60/g,Mf=/%7B/g,E0=/%7C/g,bf=/%7D/g,T0=/%20/g;function ka(n){return encodeURI(""+n).replace(E0,"|").replace(b0,"[").replace(S0,"]")}function C0(n){return ka(n).replace(Mf,"{").replace(bf,"}").replace(yf,"^")}function ca(n){return ka(n).replace(vf,"%2B").replace(T0,"+").replace(xf,"%23").replace(x0,"%26").replace(w0,"`").replace(Mf,"{").replace(bf,"}").replace(yf,"^")}function A0(n){return ca(n).replace(y0,"%3D")}function L0(n){return ka(n).replace(xf,"%23").replace(M0,"%3F")}function P0(n){return n==null?"":L0(n).replace(v0,"%2F")}function Ds(n){try{return decodeURIComponent(""+n)}catch{}return""+n}function R0(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(vf," "),o=s.indexOf("="),a=Ds(o<0?s:s.slice(0,o)),l=o<0?null:Ds(s.slice(o+1));if(a in e){let c=e[a];an(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Bl(n){let e="";for(let t in n){const i=n[t];if(t=A0(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(an(i)?i.map(s=>s&&ca(s)):[i&&ca(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function D0(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=an(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const I0=Symbol(""),kl=Symbol(""),Ys=Symbol(""),Va=Symbol(""),ua=Symbol("");function gr(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n,reset:t}}function Gn(n,e,t,i,r){const s=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const l=f=>{f===!1?a(ir(4,{from:t,to:e})):f instanceof Error?a(f):r0(f)?a(ir(2,{from:e,to:f})):(s&&i.enterCallbacks[r]===s&&typeof f=="function"&&s.push(f),o())},c=n.call(i&&i.instances[r],e,t,l);let u=Promise.resolve(c);n.length<3&&(u=u.then(l)),u.catch(f=>a(f))})}function ho(n,e,t,i){const r=[];for(const s of n)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(F0(a)){const c=(a.__vccOpts||a)[e];c&&r.push(Gn(c,t,i,s,o))}else{let l=a();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=kd(c)?c.default:c;s.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&Gn(h,t,i,s,o)()}))}}return r}function F0(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function Vl(n){const e=on(Ys),t=on(Va),i=jt(()=>e.resolve(Ki(n.to))),r=jt(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const h=f.findIndex(nr.bind(null,u));if(h>-1)return h;const m=Hl(l[c-2]);return c>1&&Hl(u)===m&&f[f.length-1].path!==m?f.findIndex(nr.bind(null,l[c-2])):h}),s=jt(()=>r.value>-1&&z0(t.params,i.value.params)),o=jt(()=>r.value>-1&&r.value===t.matched.length-1&&df(t.params,i.value.params));function a(l={}){return U0(l)?e[Ki(n.replace)?"replace":"push"](Ki(n.to)).catch(Ar):Promise.resolve()}return{route:i,href:jt(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}const N0=Hr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Vl,setup(n,{slots:e}){const t=Vr(Vl(n)),{options:i}=on(Ys),r=jt(()=>({[Gl(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[Gl(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return n.custom?s:ff("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),O0=N0;function U0(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function z0(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!an(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function Hl(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Gl=(n,e,t)=>n!=null?n:e!=null?e:t,B0=Hr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=on(ua),r=jt(()=>n.route||i.value),s=on(kl,0),o=jt(()=>{let c=Ki(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=jt(()=>r.value.matched[o.value]);Ms(kl,jt(()=>o.value+1)),Ms(I0,a),Ms(ua,r);const l=Pt();return bs(()=>[l.value,a.value,n.name],([c,u,f],[h,m,g])=>{u&&(u.instances[f]=c,m&&m!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),c&&u&&(!m||!nr(u,m)||!h)&&(u.enterCallbacks[f]||[]).forEach(p=>p(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,f=a.value,h=f&&f.components[u];if(!h)return Wl(t.default,{Component:h,route:c});const m=f.props[u],g=m?m===!0?c.params:typeof m=="function"?m(c):m:null,d=ff(h,Ke({},g,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Wl(t.default,{Component:d,route:c})||d}}});function Wl(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const k0=B0;function V0(n){const e=p0(n.routes,n),t=n.parseQuery||R0,i=n.stringifyQuery||Bl,r=n.history,s=gr(),o=gr(),a=gr(),l=q1(Fn);let c=Fn;Hi&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=uo.bind(null,I=>""+I),f=uo.bind(null,P0),h=uo.bind(null,Ds);function m(I,R){let ae,re;return mf(I)?(ae=e.getRecordMatcher(I),re=R):re=I,e.addRoute(re,ae)}function g(I){const R=e.getRecordMatcher(I);R&&e.removeRoute(R)}function p(){return e.getRoutes().map(I=>I.record)}function d(I){return!!e.getRecordMatcher(I)}function _(I,R){if(R=Ke({},R||l.value),typeof I=="string"){const S=fo(t,I,R.path),C=e.resolve({path:S.path},R),H=r.createHref(S.fullPath);return Ke(S,C,{params:h(C.params),hash:Ds(S.hash),redirectedFrom:void 0,href:H})}let ae;if("path"in I)ae=Ke({},I,{path:fo(t,I.path,R.path).path});else{const S=Ke({},I.params);for(const C in S)S[C]==null&&delete S[C];ae=Ke({},I,{params:f(I.params)}),R.params=f(R.params)}const re=e.resolve(ae,R),ve=I.hash||"";re.params=u(h(re.params));const _e=Gd(i,Ke({},I,{hash:C0(ve),path:re.path})),Ee=r.createHref(_e);return Ke({fullPath:_e,hash:ve,query:i===Bl?D0(I.query):I.query||{}},re,{redirectedFrom:void 0,href:Ee})}function w(I){return typeof I=="string"?fo(t,I,l.value.path):Ke({},I)}function M(I,R){if(c!==I)return ir(8,{from:R,to:I})}function v(I){return U(I)}function E(I){return v(Ke(w(I),{replace:!0}))}function P(I){const R=I.matched[I.matched.length-1];if(R&&R.redirect){const{redirect:ae}=R;let re=typeof ae=="function"?ae(I):ae;return typeof re=="string"&&(re=re.includes("?")||re.includes("#")?re=w(re):{path:re},re.params={}),Ke({query:I.query,hash:I.hash,params:"path"in re?{}:I.params},re)}}function U(I,R){const ae=c=_(I),re=l.value,ve=I.state,_e=I.force,Ee=I.replace===!0,S=P(ae);if(S)return U(Ke(w(S),{state:typeof S=="object"?Ke({},ve,S.state):ve,force:_e,replace:Ee}),R||ae);const C=ae;C.redirectedFrom=R;let H;return!_e&&Wd(i,re,ae)&&(H=ir(16,{to:C,from:re}),le(re,re,!0,!1)),(H?Promise.resolve(H):L(C,re)).catch(q=>xn(q)?xn(q,2)?q:fe(q):$(q,C,re)).then(q=>{if(q){if(xn(q,2))return U(Ke({replace:Ee},w(q.to),{state:typeof q.to=="object"?Ke({},ve,q.to.state):ve,force:_e}),R||C)}else q=Q(C,re,!0,Ee,ve);return F(C,re,q),q})}function y(I,R){const ae=M(I,R);return ae?Promise.reject(ae):Promise.resolve()}function L(I,R){let ae;const[re,ve,_e]=H0(I,R);ae=ho(re.reverse(),"beforeRouteLeave",I,R);for(const S of re)S.leaveGuards.forEach(C=>{ae.push(Gn(C,I,R))});const Ee=y.bind(null,I,R);return ae.push(Ee),Ei(ae).then(()=>{ae=[];for(const S of s.list())ae.push(Gn(S,I,R));return ae.push(Ee),Ei(ae)}).then(()=>{ae=ho(ve,"beforeRouteUpdate",I,R);for(const S of ve)S.updateGuards.forEach(C=>{ae.push(Gn(C,I,R))});return ae.push(Ee),Ei(ae)}).then(()=>{ae=[];for(const S of I.matched)if(S.beforeEnter&&!R.matched.includes(S))if(an(S.beforeEnter))for(const C of S.beforeEnter)ae.push(Gn(C,I,R));else ae.push(Gn(S.beforeEnter,I,R));return ae.push(Ee),Ei(ae)}).then(()=>(I.matched.forEach(S=>S.enterCallbacks={}),ae=ho(_e,"beforeRouteEnter",I,R),ae.push(Ee),Ei(ae))).then(()=>{ae=[];for(const S of o.list())ae.push(Gn(S,I,R));return ae.push(Ee),Ei(ae)}).catch(S=>xn(S,8)?S:Promise.reject(S))}function F(I,R,ae){for(const re of a.list())re(I,R,ae)}function Q(I,R,ae,re,ve){const _e=M(I,R);if(_e)return _e;const Ee=R===Fn,S=Hi?history.state:{};ae&&(re||Ee?r.replace(I.fullPath,Ke({scroll:Ee&&S&&S.scroll},ve)):r.push(I.fullPath,ve)),l.value=I,le(I,R,ae,Ee),fe()}let he;function j(){he||(he=r.listen((I,R,ae)=>{if(!ge.listening)return;const re=_(I),ve=P(re);if(ve){U(Ke(ve,{replace:!0}),re).catch(Ar);return}c=re;const _e=l.value;Hi&&Jd(Rl(_e.fullPath,ae.delta),js()),L(re,_e).catch(Ee=>xn(Ee,12)?Ee:xn(Ee,2)?(U(Ee.to,re).then(S=>{xn(S,20)&&!ae.delta&&ae.type===zr.pop&&r.go(-1,!1)}).catch(Ar),Promise.reject()):(ae.delta&&r.go(-ae.delta,!1),$(Ee,re,_e))).then(Ee=>{Ee=Ee||Q(re,_e,!1),Ee&&(ae.delta&&!xn(Ee,8)?r.go(-ae.delta,!1):ae.type===zr.pop&&xn(Ee,20)&&r.go(-1,!1)),F(re,_e,Ee)}).catch(Ar)}))}let B=gr(),K=gr(),ne;function $(I,R,ae){fe(I);const re=K.list();return re.length?re.forEach(ve=>ve(I,R,ae)):console.error(I),Promise.reject(I)}function G(){return ne&&l.value!==Fn?Promise.resolve():new Promise((I,R)=>{B.add([I,R])})}function fe(I){return ne||(ne=!I,j(),B.list().forEach(([R,ae])=>I?ae(I):R()),B.reset()),I}function le(I,R,ae,re){const{scrollBehavior:ve}=n;if(!Hi||!ve)return Promise.resolve();const _e=!ae&&Qd(Rl(I.fullPath,0))||(re||!ae)&&history.state&&history.state.scroll||null;return Bu().then(()=>ve(I,R,_e)).then(Ee=>Ee&&Zd(Ee)).catch(Ee=>$(Ee,I,R))}const Y=I=>r.go(I);let W;const xe=new Set,ge={currentRoute:l,listening:!0,addRoute:m,removeRoute:g,hasRoute:d,getRoutes:p,resolve:_,options:n,push:v,replace:E,go:Y,back:()=>Y(-1),forward:()=>Y(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:K.add,isReady:G,install(I){const R=this;I.component("RouterLink",O0),I.component("RouterView",k0),I.config.globalProperties.$router=R,Object.defineProperty(I.config.globalProperties,"$route",{enumerable:!0,get:()=>Ki(l)}),Hi&&!W&&l.value===Fn&&(W=!0,v(r.location).catch(ve=>{}));const ae={};for(const ve in Fn)ae[ve]=jt(()=>l.value[ve]);I.provide(Ys,R),I.provide(Va,Vr(ae)),I.provide(ua,l);const re=I.unmount;xe.add(I),I.unmount=function(){xe.delete(I),xe.size<1&&(c=Fn,he&&he(),he=null,l.value=Fn,W=!1,ne=!1),re()}}};return ge}function Ei(n){return n.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function H0(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(n.matched.find(c=>nr(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>nr(c,l))||r.push(l))}return[t,i,r]}function G0(){return on(Ys)}function W0(){return on(Va)}/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ha="147",Ti={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ci={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},q0=0,ql=1,X0=2,Sf=1,wf=2,br=3,rr=0,Yt=1,Wn=2,jn=0,Zi=1,Xl=2,jl=3,Yl=4,j0=5,Gi=100,Y0=101,K0=102,Kl=103,$l=104,$0=200,Z0=201,J0=202,Q0=203,Ef=204,Tf=205,ep=206,tp=207,np=208,ip=209,rp=210,sp=0,op=1,ap=2,fa=3,lp=4,cp=5,up=6,fp=7,Ga=0,hp=1,dp=2,Ln=0,pp=1,mp=2,gp=3,_p=4,xp=5,Cf=300,sr=301,or=302,ha=303,da=304,Ks=306,pa=1e3,en=1001,ma=1002,Rt=1003,Zl=1004,Jl=1005,qt=1006,vp=1007,$s=1008,xi=1009,yp=1010,Mp=1011,Af=1012,bp=1013,hi=1014,di=1015,Br=1016,Sp=1017,wp=1018,Ji=1020,Ep=1021,Tp=1022,tn=1023,Cp=1024,Ap=1025,gi=1026,ar=1027,Lp=1028,Pp=1029,Rp=1030,Dp=1031,Ip=1033,po=33776,mo=33777,go=33778,_o=33779,Ql=35840,ec=35841,tc=35842,nc=35843,Fp=36196,ic=37492,rc=37496,sc=37808,oc=37809,ac=37810,lc=37811,cc=37812,uc=37813,fc=37814,hc=37815,dc=37816,pc=37817,mc=37818,gc=37819,_c=37820,xc=37821,vc=36492,vi=3e3,et=3001,Np=3200,Op=3201,Lf=0,Up=1,fn="srgb",kr="srgb-linear",xo=7680,zp=519,yc=35044,Mc="300 es",ga=1035;class wi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vo=Math.PI/180,bc=180/Math.PI;function Gr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xt[n&255]+xt[n>>8&255]+xt[n>>16&255]+xt[n>>24&255]+"-"+xt[e&255]+xt[e>>8&255]+"-"+xt[e>>16&15|64]+xt[e>>24&255]+"-"+xt[t&63|128]+xt[t>>8&255]+"-"+xt[t>>16&255]+xt[t>>24&255]+xt[i&255]+xt[i>>8&255]+xt[i>>16&255]+xt[i>>24&255]).toLowerCase()}function Dt(n,e,t){return Math.max(e,Math.min(t,n))}function Bp(n,e){return(n%e+e)%e}function yo(n,e,t){return(1-t)*n+t*e}function Sc(n){return(n&n-1)===0&&n!==0}function _a(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Jr(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ot(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Oe{constructor(e=0,t=0){Oe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bt{constructor(){Bt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],m=i[5],g=i[8],p=r[0],d=r[3],_=r[6],w=r[1],M=r[4],v=r[7],E=r[2],P=r[5],U=r[8];return s[0]=o*p+a*w+l*E,s[3]=o*d+a*M+l*P,s[6]=o*_+a*v+l*U,s[1]=c*p+u*w+f*E,s[4]=c*d+u*M+f*P,s[7]=c*_+u*v+f*U,s[2]=h*p+m*w+g*E,s[5]=h*d+m*M+g*P,s[8]=h*_+m*v+g*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,m=c*s-o*l,g=t*f+i*h+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return e[0]=f*p,e[1]=(r*c-u*i)*p,e[2]=(a*i-r*o)*p,e[3]=h*p,e[4]=(u*t-r*l)*p,e[5]=(r*s-a*t)*p,e[6]=m*p,e[7]=(i*l-c*t)*p,e[8]=(o*t-i*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Mo.makeScale(e,t)),this}rotate(e){return this.premultiply(Mo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Mo.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Mo=new Bt;function Pf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Is(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function _i(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ws(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const bo={[fn]:{[kr]:_i},[kr]:{[fn]:ws}},St={legacyMode:!0,get workingColorSpace(){return kr},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.legacyMode||e===t||!e||!t)return n;if(bo[e]&&bo[e][t]!==void 0){const i=bo[e][t];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},Rf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},at={r:0,g:0,b:0},$t={h:0,s:0,l:0},Qr={h:0,s:0,l:0};function So(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function es(n,e){return e.r=n.r,e.g=n.g,e.b=n.b,e}class We{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=St.workingColorSpace){return this.r=e,this.g=t,this.b=i,St.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=St.workingColorSpace){if(e=Bp(e,1),t=Dt(t,0,1),i=Dt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=So(o,s,e+1/3),this.g=So(o,s,e),this.b=So(o,s,e-1/3)}return St.toWorkingColorSpace(this,r),this}setStyle(e,t=fn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,St.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,St.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return i(s[4]),this.setHSL(l,c,u,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,St.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,St.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=fn){const i=Rf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_i(e.r),this.g=_i(e.g),this.b=_i(e.b),this}copyLinearToSRGB(e){return this.r=ws(e.r),this.g=ws(e.g),this.b=ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fn){return St.fromWorkingColorSpace(es(this,at),e),Dt(at.r*255,0,255)<<16^Dt(at.g*255,0,255)<<8^Dt(at.b*255,0,255)<<0}getHexString(e=fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=St.workingColorSpace){St.fromWorkingColorSpace(es(this,at),t);const i=at.r,r=at.g,s=at.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=St.workingColorSpace){return St.fromWorkingColorSpace(es(this,at),t),e.r=at.r,e.g=at.g,e.b=at.b,e}getStyle(e=fn){return St.fromWorkingColorSpace(es(this,at),e),e!==fn?`color(${e} ${at.r} ${at.g} ${at.b})`:`rgb(${at.r*255|0},${at.g*255|0},${at.b*255|0})`}offsetHSL(e,t,i){return this.getHSL($t),$t.h+=e,$t.s+=t,$t.l+=i,this.setHSL($t.h,$t.s,$t.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL($t),e.getHSL(Qr);const i=yo($t.h,Qr.h,t),r=yo($t.s,Qr.s,t),s=yo($t.l,Qr.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}We.NAMES=Rf;let Ai;class Df{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ai===void 0&&(Ai=Is("canvas")),Ai.width=e.width,Ai.height=e.height;const i=Ai.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ai}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Is("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=_i(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(_i(t[i]/255)*255):t[i]=_i(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class If{constructor(e=null){this.isSource=!0,this.uuid=Gr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(wo(r[o].image)):s.push(wo(r[o]))}else s=wo(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function wo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Df.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kp=0;class kt extends wi{constructor(e=kt.DEFAULT_IMAGE,t=kt.DEFAULT_MAPPING,i=en,r=en,s=qt,o=$s,a=tn,l=xi,c=kt.DEFAULT_ANISOTROPY,u=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=Gr(),this.name="",this.source=new If(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pa:e.x=e.x-Math.floor(e.x);break;case en:e.x=e.x<0?0:1;break;case ma:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pa:e.y=e.y-Math.floor(e.y);break;case en:e.y=e.y<0?0:1;break;case ma:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=Cf;kt.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,t=0,i=0,r=1){pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],m=l[5],g=l[9],p=l[2],d=l[6],_=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-p)<.01&&Math.abs(g-d)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+p)<.1&&Math.abs(g+d)<.1&&Math.abs(c+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,v=(m+1)/2,E=(_+1)/2,P=(u+h)/4,U=(f+p)/4,y=(g+d)/4;return M>v&&M>E?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=P/i,s=U/i):v>E?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=P/r,s=y/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=U/s,r=y/s),this.set(i,r,s,t),this}let w=Math.sqrt((d-g)*(d-g)+(f-p)*(f-p)+(h-u)*(h-u));return Math.abs(w)<.001&&(w=1),this.x=(d-g)/w,this.y=(f-p)/w,this.z=(h-u)/w,this.w=Math.acos((c+m+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yi extends wi{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new kt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:qt,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new If(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ff extends kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=en,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vp extends kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=en,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mi{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],m=s[o+1],g=s[o+2],p=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=m,e[t+2]=g,e[t+3]=p;return}if(f!==p||l!==h||c!==m||u!==g){let d=1-a;const _=l*h+c*m+u*g+f*p,w=_>=0?1:-1,M=1-_*_;if(M>Number.EPSILON){const E=Math.sqrt(M),P=Math.atan2(E,_*w);d=Math.sin(d*P)/E,a=Math.sin(a*P)/E}const v=a*w;if(l=l*d+h*v,c=c*d+m*v,u=u*d+g*v,f=f*d+p*v,d===1-a){const E=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=E,c*=E,u*=E,f*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*m-c*h,e[t+1]=l*g+u*h+c*f-a*m,e[t+2]=c*g+u*m+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),m=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f-h*m*g;break;case"YXZ":this._x=h*u*f+c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f+h*m*g;break;case"ZXY":this._x=h*u*f-c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f-h*m*g;break;case"ZYX":this._x=h*u*f-c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f+h*m*g;break;case"YZX":this._x=h*u*f+c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f-h*m*g;break;case"XZY":this._x=h*u*f-c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*r-a*i,u=l*i+a*t-s*r,f=l*r+s*i-o*t,h=-s*t-o*i-a*r;return this.x=c*l+h*-s+u*-a-f*-o,this.y=u*l+h*-o+f*-s-c*-a,this.z=f*l+h*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Eo.copy(this).projectOnVector(e),this.sub(Eo)}reflect(e){return this.sub(Eo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Eo=new z,wc=new Mi;class Wr{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],h=e[l+2];u<t&&(t=u),f<i&&(i=f),h<r&&(r=h),u>s&&(s=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),h=e.getZ(l);u<t&&(t=u),f<i&&(i=f),h<r&&(r=h),u>s&&(s=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ni.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)ni.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(ni)}else i.boundingBox===null&&i.computeBoundingBox(),To.copy(i.boundingBox),To.applyMatrix4(e.matrixWorld),this.union(To);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ni),ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_r),ts.subVectors(this.max,_r),Li.subVectors(e.a,_r),Pi.subVectors(e.b,_r),Ri.subVectors(e.c,_r),Nn.subVectors(Pi,Li),On.subVectors(Ri,Pi),ii.subVectors(Li,Ri);let t=[0,-Nn.z,Nn.y,0,-On.z,On.y,0,-ii.z,ii.y,Nn.z,0,-Nn.x,On.z,0,-On.x,ii.z,0,-ii.x,-Nn.y,Nn.x,0,-On.y,On.x,0,-ii.y,ii.x,0];return!Co(t,Li,Pi,Ri,ts)||(t=[1,0,0,0,1,0,0,0,1],!Co(t,Li,Pi,Ri,ts))?!1:(ns.crossVectors(Nn,On),t=[ns.x,ns.y,ns.z],Co(t,Li,Pi,Ri,ts))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return ni.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(ni).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const vn=[new z,new z,new z,new z,new z,new z,new z,new z],ni=new z,To=new Wr,Li=new z,Pi=new z,Ri=new z,Nn=new z,On=new z,ii=new z,_r=new z,ts=new z,ns=new z,ri=new z;function Co(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){ri.fromArray(n,s);const a=r.x*Math.abs(ri.x)+r.y*Math.abs(ri.y)+r.z*Math.abs(ri.z),l=e.dot(ri),c=t.dot(ri),u=i.dot(ri);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Hp=new Wr,xr=new z,Ao=new z;class Zs{constructor(e=new z,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Hp.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xr.subVectors(e,this.center);const t=xr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(xr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ao.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xr.copy(e.center).add(Ao)),this.expandByPoint(xr.copy(e.center).sub(Ao))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yn=new z,Lo=new z,is=new z,Un=new z,Po=new z,rs=new z,Ro=new z;class Nf{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yn.copy(this.direction).multiplyScalar(t).add(this.origin),yn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Lo.copy(e).add(t).multiplyScalar(.5),is.copy(t).sub(e).normalize(),Un.copy(this.origin).sub(Lo);const s=e.distanceTo(t)*.5,o=-this.direction.dot(is),a=Un.dot(this.direction),l=-Un.dot(is),c=Un.lengthSq(),u=Math.abs(1-o*o);let f,h,m,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const p=1/u;f*=p,h*=p,m=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(f).add(this.origin),r&&r.copy(is).multiplyScalar(h).add(Lo),m}intersectSphere(e,t){yn.subVectors(e.center,this.origin);const i=yn.dot(this.direction),r=yn.dot(yn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,yn)!==null}intersectTriangle(e,t,i,r,s){Po.subVectors(t,e),rs.subVectors(i,e),Ro.crossVectors(Po,rs);let o=this.direction.dot(Ro),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Un.subVectors(this.origin,e);const l=a*this.direction.dot(rs.crossVectors(Un,rs));if(l<0)return null;const c=a*this.direction.dot(Po.cross(Un));if(c<0||l+c>o)return null;const u=-a*Un.dot(Ro);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,s,o,a,l,c,u,f,h,m,g,p,d){const _=this.elements;return _[0]=e,_[4]=t,_[8]=i,_[12]=r,_[1]=s,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=f,_[14]=h,_[3]=m,_[7]=g,_[11]=p,_[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Di.setFromMatrixColumn(e,0).length(),s=1/Di.setFromMatrixColumn(e,1).length(),o=1/Di.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,m=o*f,g=a*u,p=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+g*c,t[5]=h-p*c,t[9]=-a*l,t[2]=p-h*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,m=l*f,g=c*u,p=c*f;t[0]=h+p*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=p+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,m=l*f,g=c*u,p=c*f;t[0]=h-p*a,t[4]=-o*f,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=p-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,m=o*f,g=a*u,p=a*f;t[0]=l*u,t[4]=g*c-m,t[8]=h*c+p,t[1]=l*f,t[5]=p*c+h,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*c,g=a*l,p=a*c;t[0]=l*u,t[4]=p-h*f,t[8]=g*f+m,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*f+g,t[10]=h-p*f}else if(e.order==="XZY"){const h=o*l,m=o*c,g=a*l,p=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+p,t[5]=o*u,t[9]=m*f-g,t[2]=g*f-m,t[6]=a*u,t[10]=p*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gp,e,Wp)}lookAt(e,t,i){const r=this.elements;return Ut.subVectors(e,t),Ut.lengthSq()===0&&(Ut.z=1),Ut.normalize(),zn.crossVectors(i,Ut),zn.lengthSq()===0&&(Math.abs(i.z)===1?Ut.x+=1e-4:Ut.z+=1e-4,Ut.normalize(),zn.crossVectors(i,Ut)),zn.normalize(),ss.crossVectors(Ut,zn),r[0]=zn.x,r[4]=ss.x,r[8]=Ut.x,r[1]=zn.y,r[5]=ss.y,r[9]=Ut.y,r[2]=zn.z,r[6]=ss.z,r[10]=Ut.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],m=i[13],g=i[2],p=i[6],d=i[10],_=i[14],w=i[3],M=i[7],v=i[11],E=i[15],P=r[0],U=r[4],y=r[8],L=r[12],F=r[1],Q=r[5],he=r[9],j=r[13],B=r[2],K=r[6],ne=r[10],$=r[14],G=r[3],fe=r[7],le=r[11],Y=r[15];return s[0]=o*P+a*F+l*B+c*G,s[4]=o*U+a*Q+l*K+c*fe,s[8]=o*y+a*he+l*ne+c*le,s[12]=o*L+a*j+l*$+c*Y,s[1]=u*P+f*F+h*B+m*G,s[5]=u*U+f*Q+h*K+m*fe,s[9]=u*y+f*he+h*ne+m*le,s[13]=u*L+f*j+h*$+m*Y,s[2]=g*P+p*F+d*B+_*G,s[6]=g*U+p*Q+d*K+_*fe,s[10]=g*y+p*he+d*ne+_*le,s[14]=g*L+p*j+d*$+_*Y,s[3]=w*P+M*F+v*B+E*G,s[7]=w*U+M*Q+v*K+E*fe,s[11]=w*y+M*he+v*ne+E*le,s[15]=w*L+M*j+v*$+E*Y,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],m=e[14],g=e[3],p=e[7],d=e[11],_=e[15];return g*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*m-i*l*m)+p*(+t*l*m-t*c*h+s*o*h-r*o*m+r*c*u-s*l*u)+d*(+t*c*f-t*a*m-s*o*f+i*o*m+s*a*u-i*c*u)+_*(-r*a*u-t*l*f+t*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],m=e[11],g=e[12],p=e[13],d=e[14],_=e[15],w=f*d*c-p*h*c+p*l*m-a*d*m-f*l*_+a*h*_,M=g*h*c-u*d*c-g*l*m+o*d*m+u*l*_-o*h*_,v=u*p*c-g*f*c+g*a*m-o*p*m-u*a*_+o*f*_,E=g*f*l-u*p*l-g*a*h+o*p*h+u*a*d-o*f*d,P=t*w+i*M+r*v+s*E;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/P;return e[0]=w*U,e[1]=(p*h*s-f*d*s-p*r*m+i*d*m+f*r*_-i*h*_)*U,e[2]=(a*d*s-p*l*s+p*r*c-i*d*c-a*r*_+i*l*_)*U,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*m-i*l*m)*U,e[4]=M*U,e[5]=(u*d*s-g*h*s+g*r*m-t*d*m-u*r*_+t*h*_)*U,e[6]=(g*l*s-o*d*s-g*r*c+t*d*c+o*r*_-t*l*_)*U,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*m+t*l*m)*U,e[8]=v*U,e[9]=(g*f*s-u*p*s-g*i*m+t*p*m+u*i*_-t*f*_)*U,e[10]=(o*p*s-g*a*s+g*i*c-t*p*c-o*i*_+t*a*_)*U,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*m-t*a*m)*U,e[12]=E*U,e[13]=(u*p*r-g*f*r+g*i*h-t*p*h-u*i*d+t*f*d)*U,e[14]=(g*a*r-o*p*r-g*i*l+t*p*l+o*i*d-t*a*d)*U,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*h+t*a*h)*U,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,m=s*u,g=s*f,p=o*u,d=o*f,_=a*f,w=l*c,M=l*u,v=l*f,E=i.x,P=i.y,U=i.z;return r[0]=(1-(p+_))*E,r[1]=(m+v)*E,r[2]=(g-M)*E,r[3]=0,r[4]=(m-v)*P,r[5]=(1-(h+_))*P,r[6]=(d+w)*P,r[7]=0,r[8]=(g+M)*U,r[9]=(d-w)*U,r[10]=(1-(h+p))*U,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Di.set(r[0],r[1],r[2]).length();const o=Di.set(r[4],r[5],r[6]).length(),a=Di.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Zt.copy(this);const c=1/s,u=1/o,f=1/a;return Zt.elements[0]*=c,Zt.elements[1]*=c,Zt.elements[2]*=c,Zt.elements[4]*=u,Zt.elements[5]*=u,Zt.elements[6]*=u,Zt.elements[8]*=f,Zt.elements[9]*=f,Zt.elements[10]*=f,t.setFromRotationMatrix(Zt),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o){const a=this.elements,l=2*s/(t-e),c=2*s/(i-r),u=(t+e)/(t-e),f=(i+r)/(i-r),h=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,s,o){const a=this.elements,l=1/(t-e),c=1/(i-r),u=1/(o-s),f=(t+e)*l,h=(i+r)*c,m=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Di=new z,Zt=new ot,Gp=new z(0,0,0),Wp=new z(1,1,1),zn=new z,ss=new z,Ut=new z,Ec=new ot,Tc=new Mi;class fr{constructor(e=0,t=0,i=0,r=fr.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Dt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ec.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ec,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Tc.setFromEuler(this),this.setFromQuaternion(Tc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}fr.DefaultOrder="XYZ";fr.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Of{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qp=0;const Cc=new z,Ii=new Mi,Mn=new ot,os=new z,vr=new z,Xp=new z,jp=new Mi,Ac=new z(1,0,0),Lc=new z(0,1,0),Pc=new z(0,0,1),Yp={type:"added"},Rc={type:"removed"};class mt extends wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=Gr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mt.DefaultUp.clone();const e=new z,t=new fr,i=new Mi,r=new z(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ot},normalMatrix:{value:new Bt}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=mt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=mt.DefaultMatrixWorldAutoUpdate,this.layers=new Of,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ii.setFromAxisAngle(e,t),this.quaternion.multiply(Ii),this}rotateOnWorldAxis(e,t){return Ii.setFromAxisAngle(e,t),this.quaternion.premultiply(Ii),this}rotateX(e){return this.rotateOnAxis(Ac,e)}rotateY(e){return this.rotateOnAxis(Lc,e)}rotateZ(e){return this.rotateOnAxis(Pc,e)}translateOnAxis(e,t){return Cc.copy(e).applyQuaternion(this.quaternion),this.position.add(Cc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ac,e)}translateY(e){return this.translateOnAxis(Lc,e)}translateZ(e){return this.translateOnAxis(Pc,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?os.copy(e):os.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(vr,os,this.up):Mn.lookAt(os,vr,this.up),this.quaternion.setFromRotationMatrix(Mn),r&&(Mn.extractRotation(r.matrixWorld),Ii.setFromRotationMatrix(Mn),this.quaternion.premultiply(Ii.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Yp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Rc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Rc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,e,Xp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,jp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}mt.DefaultUp=new z(0,1,0);mt.DefaultMatrixAutoUpdate=!0;mt.DefaultMatrixWorldAutoUpdate=!0;const Jt=new z,bn=new z,Do=new z,Sn=new z,Fi=new z,Ni=new z,Dc=new z,Io=new z,Fo=new z,No=new z;class Tn{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Jt.subVectors(e,t),r.cross(Jt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Jt.subVectors(r,t),bn.subVectors(i,t),Do.subVectors(e,t);const o=Jt.dot(Jt),a=Jt.dot(bn),l=Jt.dot(Do),c=bn.dot(bn),u=bn.dot(Do),f=o*c-a*a;if(f===0)return s.set(-2,-1,-1);const h=1/f,m=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Sn),Sn.x>=0&&Sn.y>=0&&Sn.x+Sn.y<=1}static getUV(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Sn),l.set(0,0),l.addScaledVector(s,Sn.x),l.addScaledVector(o,Sn.y),l.addScaledVector(a,Sn.z),l}static isFrontFacing(e,t,i,r){return Jt.subVectors(i,t),bn.subVectors(e,t),Jt.cross(bn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jt.subVectors(this.c,this.b),bn.subVectors(this.a,this.b),Jt.cross(bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Tn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Tn.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Fi.subVectors(r,i),Ni.subVectors(s,i),Io.subVectors(e,i);const l=Fi.dot(Io),c=Ni.dot(Io);if(l<=0&&c<=0)return t.copy(i);Fo.subVectors(e,r);const u=Fi.dot(Fo),f=Ni.dot(Fo);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Fi,o);No.subVectors(e,s);const m=Fi.dot(No),g=Ni.dot(No);if(g>=0&&m<=g)return t.copy(s);const p=m*c-l*g;if(p<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Ni,a);const d=u*g-m*f;if(d<=0&&f-u>=0&&m-g>=0)return Dc.subVectors(s,r),a=(f-u)/(f-u+(m-g)),t.copy(r).addScaledVector(Dc,a);const _=1/(d+p+h);return o=p*_,a=h*_,t.copy(i).addScaledVector(Fi,o).addScaledVector(Ni,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Kp=0;class hr extends wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=Gr(),this.name="",this.type="Material",this.blending=Zi,this.side=rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Ef,this.blendDst=Tf,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=fa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xo,this.stencilZFail=xo,this.stencilZPass=xo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Zi&&(i.blending=this.blending),this.side!==rr&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Uf extends hr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ga,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const st=new z,as=new Oe;class Vt{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=yc,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)as.fromBufferAttribute(this,t),as.applyMatrix3(e),this.setXY(t,as.x,as.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)st.fromBufferAttribute(this,t),st.applyMatrix3(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)st.fromBufferAttribute(this,t),st.applyMatrix4(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)st.fromBufferAttribute(this,t),st.applyNormalMatrix(e),this.setXYZ(t,st.x,st.y,st.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)st.fromBufferAttribute(this,t),st.transformDirection(e),this.setXYZ(t,st.x,st.y,st.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Jr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Jr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Jr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Jr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),r=Ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),r=Ot(r,this.array),s=Ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class zf extends Vt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Bf extends Vt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class It extends Vt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let $p=0;const Wt=new ot,Oo=new mt,Oi=new z,zt=new Wr,yr=new Wr,dt=new z;class Kt extends wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=Gr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pf(e)?Bf:zf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Bt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wt.makeRotationFromQuaternion(e),this.applyMatrix4(Wt),this}rotateX(e){return Wt.makeRotationX(e),this.applyMatrix4(Wt),this}rotateY(e){return Wt.makeRotationY(e),this.applyMatrix4(Wt),this}rotateZ(e){return Wt.makeRotationZ(e),this.applyMatrix4(Wt),this}translate(e,t,i){return Wt.makeTranslation(e,t,i),this.applyMatrix4(Wt),this}scale(e,t,i){return Wt.makeScale(e,t,i),this.applyMatrix4(Wt),this}lookAt(e){return Oo.lookAt(e),Oo.updateMatrix(),this.applyMatrix4(Oo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oi).negate(),this.translate(Oi.x,Oi.y,Oi.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new It(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];zt.setFromBufferAttribute(s),this.morphTargetsRelative?(dt.addVectors(this.boundingBox.min,zt.min),this.boundingBox.expandByPoint(dt),dt.addVectors(this.boundingBox.max,zt.max),this.boundingBox.expandByPoint(dt)):(this.boundingBox.expandByPoint(zt.min),this.boundingBox.expandByPoint(zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(zt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];yr.setFromBufferAttribute(a),this.morphTargetsRelative?(dt.addVectors(zt.min,yr.min),zt.expandByPoint(dt),dt.addVectors(zt.max,yr.max),zt.expandByPoint(dt)):(zt.expandByPoint(yr.min),zt.expandByPoint(yr.max))}zt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)dt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(dt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)dt.fromBufferAttribute(a,c),l&&(Oi.fromBufferAttribute(e,c),dt.add(Oi)),r=Math.max(r,i.distanceToSquared(dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let F=0;F<a;F++)c[F]=new z,u[F]=new z;const f=new z,h=new z,m=new z,g=new Oe,p=new Oe,d=new Oe,_=new z,w=new z;function M(F,Q,he){f.fromArray(r,F*3),h.fromArray(r,Q*3),m.fromArray(r,he*3),g.fromArray(o,F*2),p.fromArray(o,Q*2),d.fromArray(o,he*2),h.sub(f),m.sub(f),p.sub(g),d.sub(g);const j=1/(p.x*d.y-d.x*p.y);!isFinite(j)||(_.copy(h).multiplyScalar(d.y).addScaledVector(m,-p.y).multiplyScalar(j),w.copy(m).multiplyScalar(p.x).addScaledVector(h,-d.x).multiplyScalar(j),c[F].add(_),c[Q].add(_),c[he].add(_),u[F].add(w),u[Q].add(w),u[he].add(w))}let v=this.groups;v.length===0&&(v=[{start:0,count:i.length}]);for(let F=0,Q=v.length;F<Q;++F){const he=v[F],j=he.start,B=he.count;for(let K=j,ne=j+B;K<ne;K+=3)M(i[K+0],i[K+1],i[K+2])}const E=new z,P=new z,U=new z,y=new z;function L(F){U.fromArray(s,F*3),y.copy(U);const Q=c[F];E.copy(Q),E.sub(U.multiplyScalar(U.dot(Q))).normalize(),P.crossVectors(y,Q);const j=P.dot(u[F])<0?-1:1;l[F*4]=E.x,l[F*4+1]=E.y,l[F*4+2]=E.z,l[F*4+3]=j}for(let F=0,Q=v.length;F<Q;++F){const he=v[F],j=he.start,B=he.count;for(let K=j,ne=j+B;K<ne;K+=3)L(i[K+0]),L(i[K+1]),L(i[K+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Vt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new z,s=new z,o=new z,a=new z,l=new z,c=new z,u=new z,f=new z;if(e)for(let h=0,m=e.count;h<m;h+=3){const g=e.getX(h+0),p=e.getX(h+1),d=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,p),o.fromBufferAttribute(t,d),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,p),c.fromBufferAttribute(i,d),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(d,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)dt.fromBufferAttribute(e,t),dt.normalize(),e.setXYZ(t,dt.x,dt.y,dt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let m=0,g=0;for(let p=0,d=l.length;p<d;p++){a.isInterleavedBufferAttribute?m=l[p]*a.data.stride+a.offset:m=l[p]*u;for(let _=0;_<u;_++)h[g++]=c[m++]}return new Vt(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Kt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],m=e(h,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ic=new ot,Ui=new Nf,Uo=new Zs,Bn=new z,kn=new z,Vn=new z,zo=new z,Bo=new z,ko=new z,ls=new z,cs=new z,us=new z,fs=new Oe,hs=new Oe,ds=new Oe,Vo=new z,ps=new z;class An extends mt{constructor(e=new Kt,t=new Uf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Uo.copy(i.boundingSphere),Uo.applyMatrix4(s),e.ray.intersectsSphere(Uo)===!1)||(Ic.copy(s).invert(),Ui.copy(e.ray).applyMatrix4(Ic),i.boundingBox!==null&&Ui.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,c=i.morphAttributes.position,u=i.morphTargetsRelative,f=i.attributes.uv,h=i.attributes.uv2,m=i.groups,g=i.drawRange;if(a!==null)if(Array.isArray(r))for(let p=0,d=m.length;p<d;p++){const _=m[p],w=r[_.materialIndex],M=Math.max(_.start,g.start),v=Math.min(a.count,Math.min(_.start+_.count,g.start+g.count));for(let E=M,P=v;E<P;E+=3){const U=a.getX(E),y=a.getX(E+1),L=a.getX(E+2);o=ms(this,w,e,Ui,l,c,u,f,h,U,y,L),o&&(o.faceIndex=Math.floor(E/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const p=Math.max(0,g.start),d=Math.min(a.count,g.start+g.count);for(let _=p,w=d;_<w;_+=3){const M=a.getX(_),v=a.getX(_+1),E=a.getX(_+2);o=ms(this,r,e,Ui,l,c,u,f,h,M,v,E),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let p=0,d=m.length;p<d;p++){const _=m[p],w=r[_.materialIndex],M=Math.max(_.start,g.start),v=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let E=M,P=v;E<P;E+=3){const U=E,y=E+1,L=E+2;o=ms(this,w,e,Ui,l,c,u,f,h,U,y,L),o&&(o.faceIndex=Math.floor(E/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const p=Math.max(0,g.start),d=Math.min(l.count,g.start+g.count);for(let _=p,w=d;_<w;_+=3){const M=_,v=_+1,E=_+2;o=ms(this,r,e,Ui,l,c,u,f,h,M,v,E),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}}}function Zp(n,e,t,i,r,s,o,a){let l;if(e.side===Yt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side!==Wn,a),l===null)return null;ps.copy(a),ps.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ps);return c<t.near||c>t.far?null:{distance:c,point:ps.clone(),object:n}}function ms(n,e,t,i,r,s,o,a,l,c,u,f){Bn.fromBufferAttribute(r,c),kn.fromBufferAttribute(r,u),Vn.fromBufferAttribute(r,f);const h=n.morphTargetInfluences;if(s&&h){ls.set(0,0,0),cs.set(0,0,0),us.set(0,0,0);for(let g=0,p=s.length;g<p;g++){const d=h[g],_=s[g];d!==0&&(zo.fromBufferAttribute(_,c),Bo.fromBufferAttribute(_,u),ko.fromBufferAttribute(_,f),o?(ls.addScaledVector(zo,d),cs.addScaledVector(Bo,d),us.addScaledVector(ko,d)):(ls.addScaledVector(zo.sub(Bn),d),cs.addScaledVector(Bo.sub(kn),d),us.addScaledVector(ko.sub(Vn),d)))}Bn.add(ls),kn.add(cs),Vn.add(us)}n.isSkinnedMesh&&(n.boneTransform(c,Bn),n.boneTransform(u,kn),n.boneTransform(f,Vn));const m=Zp(n,e,t,i,Bn,kn,Vn,Vo);if(m){a&&(fs.fromBufferAttribute(a,c),hs.fromBufferAttribute(a,u),ds.fromBufferAttribute(a,f),m.uv=Tn.getUV(Vo,Bn,kn,Vn,fs,hs,ds,new Oe)),l&&(fs.fromBufferAttribute(l,c),hs.fromBufferAttribute(l,u),ds.fromBufferAttribute(l,f),m.uv2=Tn.getUV(Vo,Bn,kn,Vn,fs,hs,ds,new Oe));const g={a:c,b:u,c:f,normal:new z,materialIndex:0};Tn.getNormal(Bn,kn,Vn,g.normal),m.face=g}return m}class qr extends Kt{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,m=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new It(c,3)),this.setAttribute("normal",new It(u,3)),this.setAttribute("uv",new It(f,2));function g(p,d,_,w,M,v,E,P,U,y,L){const F=v/U,Q=E/y,he=v/2,j=E/2,B=P/2,K=U+1,ne=y+1;let $=0,G=0;const fe=new z;for(let le=0;le<ne;le++){const Y=le*Q-j;for(let W=0;W<K;W++){const xe=W*F-he;fe[p]=xe*w,fe[d]=Y*M,fe[_]=B,c.push(fe.x,fe.y,fe.z),fe[p]=0,fe[d]=0,fe[_]=P>0?1:-1,u.push(fe.x,fe.y,fe.z),f.push(W/U),f.push(1-le/y),$+=1}}for(let le=0;le<y;le++)for(let Y=0;Y<U;Y++){const W=h+Y+K*le,xe=h+Y+K*(le+1),ge=h+(Y+1)+K*(le+1),I=h+(Y+1)+K*le;l.push(W,xe,I),l.push(xe,ge,I),G+=6}a.addGroup(m,G,L),m+=G,h+=$}}static fromJSON(e){return new qr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function lr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Et(n){const e={};for(let t=0;t<n.length;t++){const i=lr(n[t]);for(const r in i)e[r]=i[r]}return e}function Jp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function kf(n){return n.getRenderTarget()===null&&n.outputEncoding===et?fn:kr}const Qp={clone:lr,merge:Et};var e3=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,t3=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bi extends hr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=e3,this.fragmentShader=t3,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=lr(e.uniforms),this.uniformsGroups=Jp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Vf extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Xt extends Vf{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=bc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bc*2*Math.atan(Math.tan(vo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(vo*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const zi=-90,Bi=1;class n3 extends mt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new Xt(zi,Bi,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new Xt(zi,Bi,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new Xt(zi,Bi,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new Xt(zi,Bi,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new Xt(zi,Bi,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Xt(zi,Bi,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=Ln,e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class Hf extends kt{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:sr,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class i3 extends yi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Hf(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new qr(5,5,5),s=new bi({name:"CubemapFromEquirect",uniforms:lr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Yt,blending:jn});s.uniforms.tEquirect.value=t;const o=new An(r,s),a=t.minFilter;return t.minFilter===$s&&(t.minFilter=qt),new n3(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Ho=new z,r3=new z,s3=new Bt;class ai{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ho.subVectors(i,t).cross(r3.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(Ho),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||s3.getNormalMatrix(e),r=this.coplanarPoint(Ho).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ki=new Zs,gs=new z;class Wa{constructor(e=new ai,t=new ai,i=new ai,r=new ai,s=new ai,o=new ai){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],c=i[5],u=i[6],f=i[7],h=i[8],m=i[9],g=i[10],p=i[11],d=i[12],_=i[13],w=i[14],M=i[15];return t[0].setComponents(a-r,f-l,p-h,M-d).normalize(),t[1].setComponents(a+r,f+l,p+h,M+d).normalize(),t[2].setComponents(a+s,f+c,p+m,M+_).normalize(),t[3].setComponents(a-s,f-c,p-m,M-_).normalize(),t[4].setComponents(a-o,f-u,p-g,M-w).normalize(),t[5].setComponents(a+o,f+u,p+g,M+w).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(ki)}intersectsSprite(e){return ki.center.set(0,0,0),ki.radius=.7071067811865476,ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(gs.x=r.normal.x>0?e.max.x:e.min.x,gs.y=r.normal.y>0?e.max.y:e.min.y,gs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(gs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Gf(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function o3(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,h=c.usage,m=n.createBuffer();n.bindBuffer(u,m),n.bufferData(u,f,h),c.onUploadCallback();let g;if(f instanceof Float32Array)g=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(f instanceof Int16Array)g=5122;else if(f instanceof Uint32Array)g=5125;else if(f instanceof Int32Array)g=5124;else if(f instanceof Int8Array)g=5120;else if(f instanceof Uint8Array)g=5121;else if(f instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const h=u.array,m=u.updateRange;n.bindBuffer(f,c),m.count===-1?n.bufferSubData(f,0,h):(t?n.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):n.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:o,remove:a,update:l}}class qa extends Kt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,m=[],g=[],p=[],d=[];for(let _=0;_<u;_++){const w=_*h-o;for(let M=0;M<c;M++){const v=M*f-s;g.push(v,-w,0),p.push(0,0,1),d.push(M/a),d.push(1-_/l)}}for(let _=0;_<l;_++)for(let w=0;w<a;w++){const M=w+c*_,v=w+c*(_+1),E=w+1+c*(_+1),P=w+1+c*_;m.push(M,v,P),m.push(v,E,P)}this.setIndex(m),this.setAttribute("position",new It(g,3)),this.setAttribute("normal",new It(p,3)),this.setAttribute("uv",new It(d,2))}static fromJSON(e){return new qa(e.width,e.height,e.widthSegments,e.heightSegments)}}var a3=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,l3=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,c3=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,u3=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,f3=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,h3=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,d3="vec3 transformed = vec3( position );",p3=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,m3=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,g3=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,_3=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,x3=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,v3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,y3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,M3=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,b3=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,S3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,w3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,E3=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,T3=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,C3=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,A3=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,L3=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,P3=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,R3=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,D3=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,I3="gl_FragColor = linearToOutputTexel( gl_FragColor );",F3=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,N3=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,O3=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,U3=`#ifdef USE_ENVMAP
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
#endif`,z3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,B3=`#ifdef USE_ENVMAP
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
#endif`,k3=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,V3=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,H3=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,G3=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,W3=`#ifdef USE_GRADIENTMAP
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
}`,q3=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,X3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,j3=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Y3=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,K3=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,$3=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Z3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,J3=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Q3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,e2=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,t2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,n2=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,i2=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,r2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,s2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,o2=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,a2=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l2=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,c2=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,u2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,f2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,h2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,d2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,p2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,m2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,g2=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,x2=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,v2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,y2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,M2=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,b2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,S2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,E2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,T2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,C2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,A2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,L2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,P2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,R2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,D2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,I2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,F2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,N2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,O2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,U2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,z2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,B2=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,k2=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
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
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,V2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,H2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,G2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,W2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,q2=`#ifdef USE_SKINNING
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
#endif`,X2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,j2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Y2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,K2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Z2=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,J2=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Q2=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,em=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,tm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,nm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,im=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,rm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,om=`uniform sampler2D t2D;
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
	#include <encodings_fragment>
}`,am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,um=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,fm=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,hm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,dm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,pm=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,_m=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vm=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,ym=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,bm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,wm=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Em=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Tm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Cm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Am=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Pm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Dm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Im=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,Fm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nm=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Om=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Um=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,zm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ne={alphamap_fragment:a3,alphamap_pars_fragment:l3,alphatest_fragment:c3,alphatest_pars_fragment:u3,aomap_fragment:f3,aomap_pars_fragment:h3,begin_vertex:d3,beginnormal_vertex:p3,bsdfs:m3,iridescence_fragment:g3,bumpmap_pars_fragment:_3,clipping_planes_fragment:x3,clipping_planes_pars_fragment:v3,clipping_planes_pars_vertex:y3,clipping_planes_vertex:M3,color_fragment:b3,color_pars_fragment:S3,color_pars_vertex:w3,color_vertex:E3,common:T3,cube_uv_reflection_fragment:C3,defaultnormal_vertex:A3,displacementmap_pars_vertex:L3,displacementmap_vertex:P3,emissivemap_fragment:R3,emissivemap_pars_fragment:D3,encodings_fragment:I3,encodings_pars_fragment:F3,envmap_fragment:N3,envmap_common_pars_fragment:O3,envmap_pars_fragment:U3,envmap_pars_vertex:z3,envmap_physical_pars_fragment:$3,envmap_vertex:B3,fog_vertex:k3,fog_pars_vertex:V3,fog_fragment:H3,fog_pars_fragment:G3,gradientmap_pars_fragment:W3,lightmap_fragment:q3,lightmap_pars_fragment:X3,lights_lambert_fragment:j3,lights_lambert_pars_fragment:Y3,lights_pars_begin:K3,lights_toon_fragment:Z3,lights_toon_pars_fragment:J3,lights_phong_fragment:Q3,lights_phong_pars_fragment:e2,lights_physical_fragment:t2,lights_physical_pars_fragment:n2,lights_fragment_begin:i2,lights_fragment_maps:r2,lights_fragment_end:s2,logdepthbuf_fragment:o2,logdepthbuf_pars_fragment:a2,logdepthbuf_pars_vertex:l2,logdepthbuf_vertex:c2,map_fragment:u2,map_pars_fragment:f2,map_particle_fragment:h2,map_particle_pars_fragment:d2,metalnessmap_fragment:p2,metalnessmap_pars_fragment:m2,morphcolor_vertex:g2,morphnormal_vertex:_2,morphtarget_pars_vertex:x2,morphtarget_vertex:v2,normal_fragment_begin:y2,normal_fragment_maps:M2,normal_pars_fragment:b2,normal_pars_vertex:S2,normal_vertex:w2,normalmap_pars_fragment:E2,clearcoat_normal_fragment_begin:T2,clearcoat_normal_fragment_maps:C2,clearcoat_pars_fragment:A2,iridescence_pars_fragment:L2,output_fragment:P2,packing:R2,premultiplied_alpha_fragment:D2,project_vertex:I2,dithering_fragment:F2,dithering_pars_fragment:N2,roughnessmap_fragment:O2,roughnessmap_pars_fragment:U2,shadowmap_pars_fragment:z2,shadowmap_pars_vertex:B2,shadowmap_vertex:k2,shadowmask_pars_fragment:V2,skinbase_vertex:H2,skinning_pars_vertex:G2,skinning_vertex:W2,skinnormal_vertex:q2,specularmap_fragment:X2,specularmap_pars_fragment:j2,tonemapping_fragment:Y2,tonemapping_pars_fragment:K2,transmission_fragment:$2,transmission_pars_fragment:Z2,uv_pars_fragment:J2,uv_pars_vertex:Q2,uv_vertex:em,uv2_pars_fragment:tm,uv2_pars_vertex:nm,uv2_vertex:im,worldpos_vertex:rm,background_vert:sm,background_frag:om,backgroundCube_vert:am,backgroundCube_frag:lm,cube_vert:cm,cube_frag:um,depth_vert:fm,depth_frag:hm,distanceRGBA_vert:dm,distanceRGBA_frag:pm,equirect_vert:mm,equirect_frag:gm,linedashed_vert:_m,linedashed_frag:xm,meshbasic_vert:vm,meshbasic_frag:ym,meshlambert_vert:Mm,meshlambert_frag:bm,meshmatcap_vert:Sm,meshmatcap_frag:wm,meshnormal_vert:Em,meshnormal_frag:Tm,meshphong_vert:Cm,meshphong_frag:Am,meshphysical_vert:Lm,meshphysical_frag:Pm,meshtoon_vert:Rm,meshtoon_frag:Dm,points_vert:Im,points_frag:Fm,shadow_vert:Nm,shadow_frag:Om,sprite_vert:Um,sprite_frag:zm},ye={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Bt},uv2Transform:{value:new Bt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Bt}}},dn={basic:{uniforms:Et([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:Et([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new We(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:Et([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:Et([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:Et([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new We(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:Et([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:Et([ye.points,ye.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:Et([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:Et([ye.common,ye.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:Et([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:Et([ye.sprite,ye.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:Et([ye.common,ye.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:Et([ye.lights,ye.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};dn.physical={uniforms:Et([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const _s={r:0,b:0,g:0};function Bm(n,e,t,i,r,s,o){const a=new We(0);let l=s===!0?0:1,c,u,f=null,h=0,m=null;function g(d,_){let w=!1,M=_.isScene===!0?_.background:null;M&&M.isTexture&&(M=(_.backgroundBlurriness>0?t:e).get(M));const v=n.xr,E=v.getSession&&v.getSession();E&&E.environmentBlendMode==="additive"&&(M=null),M===null?p(a,l):M&&M.isColor&&(p(M,1),w=!0),(n.autoClear||w)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),M&&(M.isCubeTexture||M.mapping===Ks)?(u===void 0&&(u=new An(new qr(1,1,1),new bi({name:"BackgroundCubeMaterial",uniforms:lr(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,U,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,(f!==M||h!==M.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=M,h=M.version,m=n.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new An(new qa(2,2),new bi({name:"BackgroundMaterial",uniforms:lr(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:rr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||h!==M.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=M,h=M.version,m=n.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null))}function p(d,_){d.getRGB(_s,kf(n)),i.buffers.color.setClear(_s.r,_s.g,_s.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(d,_=1){a.set(d),l=_,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(d){l=d,p(a,l)},render:g}}function km(n,e,t,i){const r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=d(null);let c=l,u=!1;function f(B,K,ne,$,G){let fe=!1;if(o){const le=p($,ne,K);c!==le&&(c=le,m(c.object)),fe=_(B,$,ne,G),fe&&w(B,$,ne,G)}else{const le=K.wireframe===!0;(c.geometry!==$.id||c.program!==ne.id||c.wireframe!==le)&&(c.geometry=$.id,c.program=ne.id,c.wireframe=le,fe=!0)}G!==null&&t.update(G,34963),(fe||u)&&(u=!1,y(B,K,ne,$),G!==null&&n.bindBuffer(34963,t.get(G).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(B){return i.isWebGL2?n.bindVertexArray(B):s.bindVertexArrayOES(B)}function g(B){return i.isWebGL2?n.deleteVertexArray(B):s.deleteVertexArrayOES(B)}function p(B,K,ne){const $=ne.wireframe===!0;let G=a[B.id];G===void 0&&(G={},a[B.id]=G);let fe=G[K.id];fe===void 0&&(fe={},G[K.id]=fe);let le=fe[$];return le===void 0&&(le=d(h()),fe[$]=le),le}function d(B){const K=[],ne=[],$=[];for(let G=0;G<r;G++)K[G]=0,ne[G]=0,$[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:ne,attributeDivisors:$,object:B,attributes:{},index:null}}function _(B,K,ne,$){const G=c.attributes,fe=K.attributes;let le=0;const Y=ne.getAttributes();for(const W in Y)if(Y[W].location>=0){const ge=G[W];let I=fe[W];if(I===void 0&&(W==="instanceMatrix"&&B.instanceMatrix&&(I=B.instanceMatrix),W==="instanceColor"&&B.instanceColor&&(I=B.instanceColor)),ge===void 0||ge.attribute!==I||I&&ge.data!==I.data)return!0;le++}return c.attributesNum!==le||c.index!==$}function w(B,K,ne,$){const G={},fe=K.attributes;let le=0;const Y=ne.getAttributes();for(const W in Y)if(Y[W].location>=0){let ge=fe[W];ge===void 0&&(W==="instanceMatrix"&&B.instanceMatrix&&(ge=B.instanceMatrix),W==="instanceColor"&&B.instanceColor&&(ge=B.instanceColor));const I={};I.attribute=ge,ge&&ge.data&&(I.data=ge.data),G[W]=I,le++}c.attributes=G,c.attributesNum=le,c.index=$}function M(){const B=c.newAttributes;for(let K=0,ne=B.length;K<ne;K++)B[K]=0}function v(B){E(B,0)}function E(B,K){const ne=c.newAttributes,$=c.enabledAttributes,G=c.attributeDivisors;ne[B]=1,$[B]===0&&(n.enableVertexAttribArray(B),$[B]=1),G[B]!==K&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](B,K),G[B]=K)}function P(){const B=c.newAttributes,K=c.enabledAttributes;for(let ne=0,$=K.length;ne<$;ne++)K[ne]!==B[ne]&&(n.disableVertexAttribArray(ne),K[ne]=0)}function U(B,K,ne,$,G,fe){i.isWebGL2===!0&&(ne===5124||ne===5125)?n.vertexAttribIPointer(B,K,ne,G,fe):n.vertexAttribPointer(B,K,ne,$,G,fe)}function y(B,K,ne,$){if(i.isWebGL2===!1&&(B.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const G=$.attributes,fe=ne.getAttributes(),le=K.defaultAttributeValues;for(const Y in fe){const W=fe[Y];if(W.location>=0){let xe=G[Y];if(xe===void 0&&(Y==="instanceMatrix"&&B.instanceMatrix&&(xe=B.instanceMatrix),Y==="instanceColor"&&B.instanceColor&&(xe=B.instanceColor)),xe!==void 0){const ge=xe.normalized,I=xe.itemSize,R=t.get(xe);if(R===void 0)continue;const ae=R.buffer,re=R.type,ve=R.bytesPerElement;if(xe.isInterleavedBufferAttribute){const _e=xe.data,Ee=_e.stride,S=xe.offset;if(_e.isInstancedInterleavedBuffer){for(let C=0;C<W.locationSize;C++)E(W.location+C,_e.meshPerAttribute);B.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let C=0;C<W.locationSize;C++)v(W.location+C);n.bindBuffer(34962,ae);for(let C=0;C<W.locationSize;C++)U(W.location+C,I/W.locationSize,re,ge,Ee*ve,(S+I/W.locationSize*C)*ve)}else{if(xe.isInstancedBufferAttribute){for(let _e=0;_e<W.locationSize;_e++)E(W.location+_e,xe.meshPerAttribute);B.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let _e=0;_e<W.locationSize;_e++)v(W.location+_e);n.bindBuffer(34962,ae);for(let _e=0;_e<W.locationSize;_e++)U(W.location+_e,I/W.locationSize,re,ge,I*ve,I/W.locationSize*_e*ve)}}else if(le!==void 0){const ge=le[Y];if(ge!==void 0)switch(ge.length){case 2:n.vertexAttrib2fv(W.location,ge);break;case 3:n.vertexAttrib3fv(W.location,ge);break;case 4:n.vertexAttrib4fv(W.location,ge);break;default:n.vertexAttrib1fv(W.location,ge)}}}}P()}function L(){he();for(const B in a){const K=a[B];for(const ne in K){const $=K[ne];for(const G in $)g($[G].object),delete $[G];delete K[ne]}delete a[B]}}function F(B){if(a[B.id]===void 0)return;const K=a[B.id];for(const ne in K){const $=K[ne];for(const G in $)g($[G].object),delete $[G];delete K[ne]}delete a[B.id]}function Q(B){for(const K in a){const ne=a[K];if(ne[B.id]===void 0)continue;const $=ne[B.id];for(const G in $)g($[G].object),delete $[G];delete ne[B.id]}}function he(){j(),u=!0,c!==l&&(c=l,m(c.object))}function j(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:he,resetDefaultState:j,dispose:L,releaseStatesOfGeometry:F,releaseStatesOfProgram:Q,initAttributes:M,enableAttribute:v,disableUnusedAttributes:P}}function Vm(n,e,t,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,m;if(r)h=n,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](s,c,u,f),t.update(u,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function Hm(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(U){if(U==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";U="mediump"}return U==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&n instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(34930),h=n.getParameter(35660),m=n.getParameter(3379),g=n.getParameter(34076),p=n.getParameter(34921),d=n.getParameter(36347),_=n.getParameter(36348),w=n.getParameter(36349),M=h>0,v=o||e.has("OES_texture_float"),E=M&&v,P=o?n.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:d,maxVaryings:_,maxFragmentUniforms:w,vertexTextures:M,floatFragmentTextures:v,floatVertexTextures:E,maxSamples:P}}function Gm(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new ai,a=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h,m){const g=f.length!==0||h||i!==0||r;return r=h,t=u(f,m,0),i=f.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(f,h,m){const g=f.clippingPlanes,p=f.clipIntersection,d=f.clipShadows,_=n.get(f);if(!r||g===null||g.length===0||s&&!d)s?u(null):c();else{const w=s?0:i,M=w*4;let v=_.clippingState||null;l.value=v,v=u(g,h,M,m);for(let E=0;E!==M;++E)v[E]=t[E];_.clippingState=v,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,m,g){const p=f!==null?f.length:0;let d=null;if(p!==0){if(d=l.value,g!==!0||d===null){const _=m+p*4,w=h.matrixWorldInverse;a.getNormalMatrix(w),(d===null||d.length<_)&&(d=new Float32Array(_));for(let M=0,v=m;M!==p;++M,v+=4)o.copy(f[M]).applyMatrix4(w,a),o.normal.toArray(d,v),d[v+3]=o.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,d}}function Wm(n){let e=new WeakMap;function t(o,a){return a===ha?o.mapping=sr:a===da&&(o.mapping=or),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===ha||a===da)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new i3(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Wf extends Vf{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const qi=4,Fc=[.125,.215,.35,.446,.526,.582],fi=20,Go=new Wf,Nc=new We;let Wo=null;const li=(1+Math.sqrt(5))/2,Vi=1/li,Oc=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,li,Vi),new z(0,li,-Vi),new z(Vi,0,li),new z(-Vi,0,li),new z(li,Vi,0),new z(-li,Vi,0)];class Uc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Wo=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wo),e.scissorTest=!1,xs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===sr||e.mapping===or?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wo=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:qt,minFilter:qt,generateMipmaps:!1,type:Br,format:tn,encoding:vi,depthBuffer:!1},r=zc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zc(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qm(s)),this._blurMaterial=Xm(s,e,t)}return r}_compileMaterial(e){const t=new An(this._lodPlanes[0],e);this._renderer.compile(t,Go)}_sceneToCubeUV(e,t,i,r){const a=new Xt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Nc),u.toneMapping=Ln,u.autoClear=!1;const m=new Uf({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1}),g=new An(new qr,m);let p=!1;const d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,p=!0):(m.color.copy(Nc),p=!0);for(let _=0;_<6;_++){const w=_%3;w===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):w===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const M=this._cubeSize;xs(r,w*M,_>2?M:0,M,M),u.setRenderTarget(r),p&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=d}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===sr||e.mapping===or;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=kc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bc());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new An(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;xs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Go)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Oc[(r-1)%Oc.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new An(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*fi-1),p=s/g,d=isFinite(s)?1+Math.floor(u*p):fi;d>fi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${fi}`);const _=[];let w=0;for(let U=0;U<fi;++U){const y=U/p,L=Math.exp(-y*y/2);_.push(L),U===0?w+=L:U<d&&(w+=2*L)}for(let U=0;U<_.length;U++)_[U]=_[U]/w;h.envMap.value=e.texture,h.samples.value=d,h.weights.value=_,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:M}=this;h.dTheta.value=g,h.mipInt.value=M-i;const v=this._sizeLods[r],E=3*v*(r>M-qi?r-M+qi:0),P=4*(this._cubeSize-v);xs(t,E,P,3*v,2*v),l.setRenderTarget(t),l.render(f,Go)}}function qm(n){const e=[],t=[],i=[];let r=n;const s=n-qi+1+Fc.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-qi?l=Fc[o-n+qi-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,g=6,p=3,d=2,_=1,w=new Float32Array(p*g*m),M=new Float32Array(d*g*m),v=new Float32Array(_*g*m);for(let P=0;P<m;P++){const U=P%3*2/3-1,y=P>2?0:-1,L=[U,y,0,U+2/3,y,0,U+2/3,y+1,0,U,y,0,U+2/3,y+1,0,U,y+1,0];w.set(L,p*g*P),M.set(h,d*g*P);const F=[P,P,P,P,P,P];v.set(F,_*g*P)}const E=new Kt;E.setAttribute("position",new Vt(w,p)),E.setAttribute("uv",new Vt(M,d)),E.setAttribute("faceIndex",new Vt(v,_)),e.push(E),r>qi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function zc(n,e,t){const i=new yi(n,e,t);return i.texture.mapping=Ks,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function xs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Xm(n,e,t){const i=new Float32Array(fi),r=new z(0,1,0);return new bi({name:"SphericalGaussianBlur",defines:{n:fi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Xa(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Bc(){return new bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xa(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function kc(){return new bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Xa(){return`

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
	`}function jm(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===ha||l===da,u=l===sr||l===or;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new Uc(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new Uc(n));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Ym(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Km(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],34962);const m=f.morphAttributes;for(const g in m){const p=m[g];for(let d=0,_=p.length;d<_;d++)e.update(p[d],34962)}}function c(f){const h=[],m=f.index,g=f.attributes.position;let p=0;if(m!==null){const w=m.array;p=m.version;for(let M=0,v=w.length;M<v;M+=3){const E=w[M+0],P=w[M+1],U=w[M+2];h.push(E,P,P,U,U,E)}}else{const w=g.array;p=g.version;for(let M=0,v=w.length/3-1;M<v;M+=3){const E=M+0,P=M+1,U=M+2;h.push(E,P,P,U,U,E)}}const d=new(Pf(h)?Bf:zf)(h,1);d.version=p;const _=s.get(f);_&&e.remove(_),s.set(f,d)}function u(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function $m(n,e,t,i){const r=i.isWebGL2;let s;function o(h){s=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,m){n.drawElements(s,m,a,h*l),t.update(m,s,1)}function f(h,m,g){if(g===0)return;let p,d;if(r)p=n,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](s,m,a,h*l,g),t.update(m,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function Zm(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Jm(n,e){return n[0]-e[0]}function Qm(n,e){return Math.abs(e[1])-Math.abs(n[1])}function e4(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new pt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f,h){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=g!==void 0?g.length:0;let d=s.get(u);if(d===void 0||d.count!==p){let K=function(){j.dispose(),s.delete(u),u.removeEventListener("dispose",K)};d!==void 0&&d.texture.dispose();const M=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,P=u.morphAttributes.position||[],U=u.morphAttributes.normal||[],y=u.morphAttributes.color||[];let L=0;M===!0&&(L=1),v===!0&&(L=2),E===!0&&(L=3);let F=u.attributes.position.count*L,Q=1;F>e.maxTextureSize&&(Q=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const he=new Float32Array(F*Q*4*p),j=new Ff(he,F,Q,p);j.type=di,j.needsUpdate=!0;const B=L*4;for(let ne=0;ne<p;ne++){const $=P[ne],G=U[ne],fe=y[ne],le=F*Q*4*ne;for(let Y=0;Y<$.count;Y++){const W=Y*B;M===!0&&(o.fromBufferAttribute($,Y),he[le+W+0]=o.x,he[le+W+1]=o.y,he[le+W+2]=o.z,he[le+W+3]=0),v===!0&&(o.fromBufferAttribute(G,Y),he[le+W+4]=o.x,he[le+W+5]=o.y,he[le+W+6]=o.z,he[le+W+7]=0),E===!0&&(o.fromBufferAttribute(fe,Y),he[le+W+8]=o.x,he[le+W+9]=o.y,he[le+W+10]=o.z,he[le+W+11]=fe.itemSize===4?o.w:1)}}d={count:p,texture:j,size:new Oe(F,Q)},s.set(u,d),u.addEventListener("dispose",K)}let _=0;for(let M=0;M<m.length;M++)_+=m[M];const w=u.morphTargetsRelative?1:1-_;h.getUniforms().setValue(n,"morphTargetBaseInfluence",w),h.getUniforms().setValue(n,"morphTargetInfluences",m),h.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}else{const g=m===void 0?0:m.length;let p=i[u.id];if(p===void 0||p.length!==g){p=[];for(let v=0;v<g;v++)p[v]=[v,0];i[u.id]=p}for(let v=0;v<g;v++){const E=p[v];E[0]=v,E[1]=m[v]}p.sort(Qm);for(let v=0;v<8;v++)v<g&&p[v][1]?(a[v][0]=p[v][0],a[v][1]=p[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(Jm);const d=u.morphAttributes.position,_=u.morphAttributes.normal;let w=0;for(let v=0;v<8;v++){const E=a[v],P=E[0],U=E[1];P!==Number.MAX_SAFE_INTEGER&&U?(d&&u.getAttribute("morphTarget"+v)!==d[P]&&u.setAttribute("morphTarget"+v,d[P]),_&&u.getAttribute("morphNormal"+v)!==_[P]&&u.setAttribute("morphNormal"+v,_[P]),r[v]=U,w+=U):(d&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),_&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),r[v]=0)}const M=u.morphTargetsRelative?1:1-w;h.getUniforms().setValue(n,"morphTargetBaseInfluence",M),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function t4(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);return r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const qf=new kt,Xf=new Ff,jf=new Vp,Yf=new Hf,Vc=[],Hc=[],Gc=new Float32Array(16),Wc=new Float32Array(9),qc=new Float32Array(4);function dr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Vc[r];if(s===void 0&&(s=new Float32Array(r),Vc[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function ct(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function ut(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Js(n,e){let t=Hc[e];t===void 0&&(t=new Int32Array(e),Hc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function n4(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function i4(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;n.uniform2fv(this.addr,e),ut(t,e)}}function r4(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ct(t,e))return;n.uniform3fv(this.addr,e),ut(t,e)}}function s4(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;n.uniform4fv(this.addr,e),ut(t,e)}}function o4(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ct(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),ut(t,e)}else{if(ct(t,i))return;qc.set(i),n.uniformMatrix2fv(this.addr,!1,qc),ut(t,i)}}function a4(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ct(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),ut(t,e)}else{if(ct(t,i))return;Wc.set(i),n.uniformMatrix3fv(this.addr,!1,Wc),ut(t,i)}}function l4(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ct(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),ut(t,e)}else{if(ct(t,i))return;Gc.set(i),n.uniformMatrix4fv(this.addr,!1,Gc),ut(t,i)}}function c4(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function u4(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;n.uniform2iv(this.addr,e),ut(t,e)}}function f4(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ct(t,e))return;n.uniform3iv(this.addr,e),ut(t,e)}}function h4(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;n.uniform4iv(this.addr,e),ut(t,e)}}function d4(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function p4(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;n.uniform2uiv(this.addr,e),ut(t,e)}}function m4(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ct(t,e))return;n.uniform3uiv(this.addr,e),ut(t,e)}}function g4(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;n.uniform4uiv(this.addr,e),ut(t,e)}}function _4(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||qf,r)}function x4(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||jf,r)}function v4(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Yf,r)}function y4(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Xf,r)}function M4(n){switch(n){case 5126:return n4;case 35664:return i4;case 35665:return r4;case 35666:return s4;case 35674:return o4;case 35675:return a4;case 35676:return l4;case 5124:case 35670:return c4;case 35667:case 35671:return u4;case 35668:case 35672:return f4;case 35669:case 35673:return h4;case 5125:return d4;case 36294:return p4;case 36295:return m4;case 36296:return g4;case 35678:case 36198:case 36298:case 36306:case 35682:return _4;case 35679:case 36299:case 36307:return x4;case 35680:case 36300:case 36308:case 36293:return v4;case 36289:case 36303:case 36311:case 36292:return y4}}function b4(n,e){n.uniform1fv(this.addr,e)}function S4(n,e){const t=dr(e,this.size,2);n.uniform2fv(this.addr,t)}function w4(n,e){const t=dr(e,this.size,3);n.uniform3fv(this.addr,t)}function E4(n,e){const t=dr(e,this.size,4);n.uniform4fv(this.addr,t)}function T4(n,e){const t=dr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function C4(n,e){const t=dr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function A4(n,e){const t=dr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function L4(n,e){n.uniform1iv(this.addr,e)}function P4(n,e){n.uniform2iv(this.addr,e)}function R4(n,e){n.uniform3iv(this.addr,e)}function D4(n,e){n.uniform4iv(this.addr,e)}function I4(n,e){n.uniform1uiv(this.addr,e)}function F4(n,e){n.uniform2uiv(this.addr,e)}function N4(n,e){n.uniform3uiv(this.addr,e)}function O4(n,e){n.uniform4uiv(this.addr,e)}function U4(n,e,t){const i=this.cache,r=e.length,s=Js(t,r);ct(i,s)||(n.uniform1iv(this.addr,s),ut(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||qf,s[o])}function z4(n,e,t){const i=this.cache,r=e.length,s=Js(t,r);ct(i,s)||(n.uniform1iv(this.addr,s),ut(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||jf,s[o])}function B4(n,e,t){const i=this.cache,r=e.length,s=Js(t,r);ct(i,s)||(n.uniform1iv(this.addr,s),ut(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Yf,s[o])}function k4(n,e,t){const i=this.cache,r=e.length,s=Js(t,r);ct(i,s)||(n.uniform1iv(this.addr,s),ut(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Xf,s[o])}function V4(n){switch(n){case 5126:return b4;case 35664:return S4;case 35665:return w4;case 35666:return E4;case 35674:return T4;case 35675:return C4;case 35676:return A4;case 5124:case 35670:return L4;case 35667:case 35671:return P4;case 35668:case 35672:return R4;case 35669:case 35673:return D4;case 5125:return I4;case 36294:return F4;case 36295:return N4;case 36296:return O4;case 35678:case 36198:case 36298:case 36306:case 35682:return U4;case 35679:case 36299:case 36307:return z4;case 35680:case 36300:case 36308:case 36293:return B4;case 36289:case 36303:case 36311:case 36292:return k4}}class H4{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=M4(t.type)}}class G4{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=V4(t.type)}}class W4{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const qo=/(\w+)(\])?(\[|\.)?/g;function Xc(n,e){n.seq.push(e),n.map[e.id]=e}function q4(n,e,t){const i=n.name,r=i.length;for(qo.lastIndex=0;;){const s=qo.exec(i),o=qo.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Xc(t,c===void 0?new H4(a,n,e):new G4(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new W4(a),Xc(t,f)),t=f}}}class Es{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);q4(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function jc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let X4=0;function j4(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function Y4(n){switch(n){case vi:return["Linear","( value )"];case et:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function Yc(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+j4(n.getShaderSource(e),o)}else return r}function K4(n,e){const t=Y4(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function $4(n,e){let t;switch(e){case pp:t="Linear";break;case mp:t="Reinhard";break;case gp:t="OptimizedCineon";break;case _p:t="ACESFilmic";break;case xp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Z4(n){return[n.extensionDerivatives||!!n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Sr).join(`
`)}function J4(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Q4(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Sr(n){return n!==""}function Kc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $c(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const e6=/^[ \t]*#include +<([\w\d./]+)>/gm;function xa(n){return n.replace(e6,t6)}function t6(n,e){const t=Ne[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return xa(t)}const n6=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zc(n){return n.replace(n6,i6)}function i6(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Jc(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function r6(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Sf?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===wf?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===br&&(e="SHADOWMAP_TYPE_VSM"),e}function s6(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case sr:case or:e="ENVMAP_TYPE_CUBE";break;case Ks:e="ENVMAP_TYPE_CUBE_UV";break}return e}function o6(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case or:e="ENVMAP_MODE_REFRACTION";break}return e}function a6(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ga:e="ENVMAP_BLENDING_MULTIPLY";break;case hp:e="ENVMAP_BLENDING_MIX";break;case dp:e="ENVMAP_BLENDING_ADD";break}return e}function l6(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function c6(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=r6(t),c=s6(t),u=o6(t),f=a6(t),h=l6(t),m=t.isWebGL2?"":Z4(t),g=J4(s),p=r.createProgram();let d,_,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[g].filter(Sr).join(`
`),d.length>0&&(d+=`
`),_=[m,g].filter(Sr).join(`
`),_.length>0&&(_+=`
`)):(d=[Jc(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sr).join(`
`),_=[m,Jc(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ln?"#define TONE_MAPPING":"",t.toneMapping!==Ln?Ne.tonemapping_pars_fragment:"",t.toneMapping!==Ln?$4("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ne.encodings_pars_fragment,K4("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Sr).join(`
`)),o=xa(o),o=Kc(o,t),o=$c(o,t),a=xa(a),a=Kc(a,t),a=$c(a,t),o=Zc(o),a=Zc(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,_=["#define varying in",t.glslVersion===Mc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Mc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const M=w+d+o,v=w+_+a,E=jc(r,35633,M),P=jc(r,35632,v);if(r.attachShader(p,E),r.attachShader(p,P),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p),n.debug.checkShaderErrors){const L=r.getProgramInfoLog(p).trim(),F=r.getShaderInfoLog(E).trim(),Q=r.getShaderInfoLog(P).trim();let he=!0,j=!0;if(r.getProgramParameter(p,35714)===!1){he=!1;const B=Yc(r,E,"vertex"),K=Yc(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,35715)+`

Program Info Log: `+L+`
`+B+`
`+K)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(F===""||Q==="")&&(j=!1);j&&(this.diagnostics={runnable:he,programLog:L,vertexShader:{log:F,prefix:d},fragmentShader:{log:Q,prefix:_}})}r.deleteShader(E),r.deleteShader(P);let U;this.getUniforms=function(){return U===void 0&&(U=new Es(r,p)),U};let y;return this.getAttributes=function(){return y===void 0&&(y=Q4(r,p)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=X4++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=E,this.fragmentShader=P,this}let u6=0;class f6{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new h6(e),t.set(e,i)),i}}class h6{constructor(e){this.id=u6++,this.code=e,this.usedTimes=0}}function d6(n,e,t,i,r,s,o){const a=new Of,l=new f6,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y,L,F,Q,he){const j=Q.fog,B=he.geometry,K=y.isMeshStandardMaterial?Q.environment:null,ne=(y.isMeshStandardMaterial?t:e).get(y.envMap||K),$=!!ne&&ne.mapping===Ks?ne.image.height:null,G=g[y.type];y.precision!==null&&(m=r.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const fe=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,le=fe!==void 0?fe.length:0;let Y=0;B.morphAttributes.position!==void 0&&(Y=1),B.morphAttributes.normal!==void 0&&(Y=2),B.morphAttributes.color!==void 0&&(Y=3);let W,xe,ge,I;if(G){const Ee=dn[G];W=Ee.vertexShader,xe=Ee.fragmentShader}else W=y.vertexShader,xe=y.fragmentShader,l.update(y),ge=l.getVertexShaderID(y),I=l.getFragmentShaderID(y);const R=n.getRenderTarget(),ae=y.alphaTest>0,re=y.clearcoat>0,ve=y.iridescence>0;return{isWebGL2:u,shaderID:G,shaderName:y.type,vertexShader:W,fragmentShader:xe,defines:y.defines,customVertexShaderID:ge,customFragmentShaderID:I,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,instancing:he.isInstancedMesh===!0,instancingColor:he.isInstancedMesh===!0&&he.instanceColor!==null,supportsVertexTextures:h,outputEncoding:R===null?n.outputEncoding:R.isXRRenderTarget===!0?R.texture.encoding:vi,map:!!y.map,matcap:!!y.matcap,envMap:!!ne,envMapMode:ne&&ne.mapping,envMapCubeUVHeight:$,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===Up,tangentSpaceNormalMap:y.normalMapType===Lf,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===et,clearcoat:re,clearcoatMap:re&&!!y.clearcoatMap,clearcoatRoughnessMap:re&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:re&&!!y.clearcoatNormalMap,iridescence:ve,iridescenceMap:ve&&!!y.iridescenceMap,iridescenceThicknessMap:ve&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===Zi,alphaMap:!!y.alphaMap,alphaTest:ae,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!B.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||y.transmission>0||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||y.sheen>0||!!y.sheenColorMap||!!y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!j,useFog:y.fog===!0,fogExp2:j&&j.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:f,skinning:he.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:Y,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:y.toneMapped?n.toneMapping:Ln,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Wn,flipSided:y.side===Yt,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function d(y){const L=[];if(y.shaderID?L.push(y.shaderID):(L.push(y.customVertexShaderID),L.push(y.customFragmentShaderID)),y.defines!==void 0)for(const F in y.defines)L.push(F),L.push(y.defines[F]);return y.isRawShaderMaterial===!1&&(_(L,y),w(L,y),L.push(n.outputEncoding)),L.push(y.customProgramCacheKey),L.join()}function _(y,L){y.push(L.precision),y.push(L.outputEncoding),y.push(L.envMapMode),y.push(L.envMapCubeUVHeight),y.push(L.combine),y.push(L.vertexUvs),y.push(L.fogExp2),y.push(L.sizeAttenuation),y.push(L.morphTargetsCount),y.push(L.morphAttributeCount),y.push(L.numDirLights),y.push(L.numPointLights),y.push(L.numSpotLights),y.push(L.numSpotLightMaps),y.push(L.numHemiLights),y.push(L.numRectAreaLights),y.push(L.numDirLightShadows),y.push(L.numPointLightShadows),y.push(L.numSpotLightShadows),y.push(L.numSpotLightShadowsWithMaps),y.push(L.shadowMapType),y.push(L.toneMapping),y.push(L.numClippingPlanes),y.push(L.numClipIntersection),y.push(L.depthPacking)}function w(y,L){a.disableAll(),L.isWebGL2&&a.enable(0),L.supportsVertexTextures&&a.enable(1),L.instancing&&a.enable(2),L.instancingColor&&a.enable(3),L.map&&a.enable(4),L.matcap&&a.enable(5),L.envMap&&a.enable(6),L.lightMap&&a.enable(7),L.aoMap&&a.enable(8),L.emissiveMap&&a.enable(9),L.bumpMap&&a.enable(10),L.normalMap&&a.enable(11),L.objectSpaceNormalMap&&a.enable(12),L.tangentSpaceNormalMap&&a.enable(13),L.clearcoat&&a.enable(14),L.clearcoatMap&&a.enable(15),L.clearcoatRoughnessMap&&a.enable(16),L.clearcoatNormalMap&&a.enable(17),L.iridescence&&a.enable(18),L.iridescenceMap&&a.enable(19),L.iridescenceThicknessMap&&a.enable(20),L.displacementMap&&a.enable(21),L.specularMap&&a.enable(22),L.roughnessMap&&a.enable(23),L.metalnessMap&&a.enable(24),L.gradientMap&&a.enable(25),L.alphaMap&&a.enable(26),L.alphaTest&&a.enable(27),L.vertexColors&&a.enable(28),L.vertexAlphas&&a.enable(29),L.vertexUvs&&a.enable(30),L.vertexTangents&&a.enable(31),L.uvsVertexOnly&&a.enable(32),y.push(a.mask),a.disableAll(),L.fog&&a.enable(0),L.useFog&&a.enable(1),L.flatShading&&a.enable(2),L.logarithmicDepthBuffer&&a.enable(3),L.skinning&&a.enable(4),L.morphTargets&&a.enable(5),L.morphNormals&&a.enable(6),L.morphColors&&a.enable(7),L.premultipliedAlpha&&a.enable(8),L.shadowMapEnabled&&a.enable(9),L.physicallyCorrectLights&&a.enable(10),L.doubleSided&&a.enable(11),L.flipSided&&a.enable(12),L.useDepthPacking&&a.enable(13),L.dithering&&a.enable(14),L.specularIntensityMap&&a.enable(15),L.specularColorMap&&a.enable(16),L.transmission&&a.enable(17),L.transmissionMap&&a.enable(18),L.thicknessMap&&a.enable(19),L.sheen&&a.enable(20),L.sheenColorMap&&a.enable(21),L.sheenRoughnessMap&&a.enable(22),L.decodeVideoTexture&&a.enable(23),L.opaque&&a.enable(24),y.push(a.mask)}function M(y){const L=g[y.type];let F;if(L){const Q=dn[L];F=Qp.clone(Q.uniforms)}else F=y.uniforms;return F}function v(y,L){let F;for(let Q=0,he=c.length;Q<he;Q++){const j=c[Q];if(j.cacheKey===L){F=j,++F.usedTimes;break}}return F===void 0&&(F=new c6(n,L,y,s),c.push(F)),F}function E(y){if(--y.usedTimes===0){const L=c.indexOf(y);c[L]=c[c.length-1],c.pop(),y.destroy()}}function P(y){l.remove(y)}function U(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:M,acquireProgram:v,releaseProgram:E,releaseShaderCache:P,programs:c,dispose:U}}function p6(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function m6(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Qc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function eu(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,m,g,p,d){let _=n[e];return _===void 0?(_={id:f.id,object:f,geometry:h,material:m,groupOrder:g,renderOrder:f.renderOrder,z:p,group:d},n[e]=_):(_.id=f.id,_.object=f,_.geometry=h,_.material=m,_.groupOrder=g,_.renderOrder=f.renderOrder,_.z=p,_.group=d),e++,_}function a(f,h,m,g,p,d){const _=o(f,h,m,g,p,d);m.transmission>0?i.push(_):m.transparent===!0?r.push(_):t.push(_)}function l(f,h,m,g,p,d){const _=o(f,h,m,g,p,d);m.transmission>0?i.unshift(_):m.transparent===!0?r.unshift(_):t.unshift(_)}function c(f,h){t.length>1&&t.sort(f||m6),i.length>1&&i.sort(h||Qc),r.length>1&&r.sort(h||Qc)}function u(){for(let f=e,h=n.length;f<h;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function g6(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new eu,n.set(i,[o])):r>=s.length?(o=new eu,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function _6(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new We};break;case"SpotLight":t={position:new z,direction:new z,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new z,halfWidth:new z,halfHeight:new z};break}return n[e.id]=t,t}}}function x6(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let v6=0;function y6(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function M6(n,e){const t=new _6,i=x6(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new z);const s=new z,o=new ot,a=new ot;function l(u,f){let h=0,m=0,g=0;for(let Q=0;Q<9;Q++)r.probe[Q].set(0,0,0);let p=0,d=0,_=0,w=0,M=0,v=0,E=0,P=0,U=0,y=0;u.sort(y6);const L=f!==!0?Math.PI:1;for(let Q=0,he=u.length;Q<he;Q++){const j=u[Q],B=j.color,K=j.intensity,ne=j.distance,$=j.shadow&&j.shadow.map?j.shadow.map.texture:null;if(j.isAmbientLight)h+=B.r*K*L,m+=B.g*K*L,g+=B.b*K*L;else if(j.isLightProbe)for(let G=0;G<9;G++)r.probe[G].addScaledVector(j.sh.coefficients[G],K);else if(j.isDirectionalLight){const G=t.get(j);if(G.color.copy(j.color).multiplyScalar(j.intensity*L),j.castShadow){const fe=j.shadow,le=i.get(j);le.shadowBias=fe.bias,le.shadowNormalBias=fe.normalBias,le.shadowRadius=fe.radius,le.shadowMapSize=fe.mapSize,r.directionalShadow[p]=le,r.directionalShadowMap[p]=$,r.directionalShadowMatrix[p]=j.shadow.matrix,v++}r.directional[p]=G,p++}else if(j.isSpotLight){const G=t.get(j);G.position.setFromMatrixPosition(j.matrixWorld),G.color.copy(B).multiplyScalar(K*L),G.distance=ne,G.coneCos=Math.cos(j.angle),G.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),G.decay=j.decay,r.spot[_]=G;const fe=j.shadow;if(j.map&&(r.spotLightMap[U]=j.map,U++,fe.updateMatrices(j),j.castShadow&&y++),r.spotLightMatrix[_]=fe.matrix,j.castShadow){const le=i.get(j);le.shadowBias=fe.bias,le.shadowNormalBias=fe.normalBias,le.shadowRadius=fe.radius,le.shadowMapSize=fe.mapSize,r.spotShadow[_]=le,r.spotShadowMap[_]=$,P++}_++}else if(j.isRectAreaLight){const G=t.get(j);G.color.copy(B).multiplyScalar(K),G.halfWidth.set(j.width*.5,0,0),G.halfHeight.set(0,j.height*.5,0),r.rectArea[w]=G,w++}else if(j.isPointLight){const G=t.get(j);if(G.color.copy(j.color).multiplyScalar(j.intensity*L),G.distance=j.distance,G.decay=j.decay,j.castShadow){const fe=j.shadow,le=i.get(j);le.shadowBias=fe.bias,le.shadowNormalBias=fe.normalBias,le.shadowRadius=fe.radius,le.shadowMapSize=fe.mapSize,le.shadowCameraNear=fe.camera.near,le.shadowCameraFar=fe.camera.far,r.pointShadow[d]=le,r.pointShadowMap[d]=$,r.pointShadowMatrix[d]=j.shadow.matrix,E++}r.point[d]=G,d++}else if(j.isHemisphereLight){const G=t.get(j);G.skyColor.copy(j.color).multiplyScalar(K*L),G.groundColor.copy(j.groundColor).multiplyScalar(K*L),r.hemi[M]=G,M++}}w>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ye.LTC_FLOAT_1,r.rectAreaLTC2=ye.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ye.LTC_HALF_1,r.rectAreaLTC2=ye.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=g;const F=r.hash;(F.directionalLength!==p||F.pointLength!==d||F.spotLength!==_||F.rectAreaLength!==w||F.hemiLength!==M||F.numDirectionalShadows!==v||F.numPointShadows!==E||F.numSpotShadows!==P||F.numSpotMaps!==U)&&(r.directional.length=p,r.spot.length=_,r.rectArea.length=w,r.point.length=d,r.hemi.length=M,r.directionalShadow.length=v,r.directionalShadowMap.length=v,r.pointShadow.length=E,r.pointShadowMap.length=E,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=v,r.pointShadowMatrix.length=E,r.spotLightMatrix.length=P+U-y,r.spotLightMap.length=U,r.numSpotLightShadowsWithMaps=y,F.directionalLength=p,F.pointLength=d,F.spotLength=_,F.rectAreaLength=w,F.hemiLength=M,F.numDirectionalShadows=v,F.numPointShadows=E,F.numSpotShadows=P,F.numSpotMaps=U,r.version=v6++)}function c(u,f){let h=0,m=0,g=0,p=0,d=0;const _=f.matrixWorldInverse;for(let w=0,M=u.length;w<M;w++){const v=u[w];if(v.isDirectionalLight){const E=r.directional[h];E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(_),h++}else if(v.isSpotLight){const E=r.spot[g];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(_),E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(_),g++}else if(v.isRectAreaLight){const E=r.rectArea[p];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(_),a.identity(),o.copy(v.matrixWorld),o.premultiply(_),a.extractRotation(o),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),p++}else if(v.isPointLight){const E=r.point[m];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(_),m++}else if(v.isHemisphereLight){const E=r.hemi[d];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(_),d++}}}return{setup:l,setupView:c,state:r}}function tu(n,e){const t=new M6(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function b6(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new tu(n,e),t.set(s,[l])):o>=a.length?(l=new tu(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class S6 extends hr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Np,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class w6 extends hr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new z,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const E6=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,T6=`uniform sampler2D shadow_pass;
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
}`;function C6(n,e,t){let i=new Wa;const r=new Oe,s=new Oe,o=new pt,a=new S6({depthPacking:Op}),l=new w6,c={},u=t.maxTextureSize,f={0:Yt,1:rr,2:Wn},h=new bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:E6,fragmentShader:T6}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new Kt;g.setAttribute("position",new Vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new An(g,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sf,this.render=function(v,E,P){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||v.length===0)return;const U=n.getRenderTarget(),y=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),F=n.state;F.setBlending(jn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);for(let Q=0,he=v.length;Q<he;Q++){const j=v[Q],B=j.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const K=B.getFrameExtents();if(r.multiply(K),s.copy(B.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/K.x),r.x=s.x*K.x,B.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/K.y),r.y=s.y*K.y,B.mapSize.y=s.y)),B.map===null){const $=this.type!==br?{minFilter:Rt,magFilter:Rt}:{};B.map=new yi(r.x,r.y,$),B.map.texture.name=j.name+".shadowMap",B.camera.updateProjectionMatrix()}n.setRenderTarget(B.map),n.clear();const ne=B.getViewportCount();for(let $=0;$<ne;$++){const G=B.getViewport($);o.set(s.x*G.x,s.y*G.y,s.x*G.z,s.y*G.w),F.viewport(o),B.updateMatrices(j,$),i=B.getFrustum(),M(E,P,B.camera,j,this.type)}B.isPointLightShadow!==!0&&this.type===br&&_(B,P),B.needsUpdate=!1}d.needsUpdate=!1,n.setRenderTarget(U,y,L)};function _(v,E){const P=e.update(p);h.defines.VSM_SAMPLES!==v.blurSamples&&(h.defines.VSM_SAMPLES=v.blurSamples,m.defines.VSM_SAMPLES=v.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new yi(r.x,r.y)),h.uniforms.shadow_pass.value=v.map.texture,h.uniforms.resolution.value=v.mapSize,h.uniforms.radius.value=v.radius,n.setRenderTarget(v.mapPass),n.clear(),n.renderBufferDirect(E,null,P,h,p,null),m.uniforms.shadow_pass.value=v.mapPass.texture,m.uniforms.resolution.value=v.mapSize,m.uniforms.radius.value=v.radius,n.setRenderTarget(v.map),n.clear(),n.renderBufferDirect(E,null,P,m,p,null)}function w(v,E,P,U,y,L){let F=null;const Q=P.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(Q!==void 0?F=Q:F=P.isPointLight===!0?l:a,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const he=F.uuid,j=E.uuid;let B=c[he];B===void 0&&(B={},c[he]=B);let K=B[j];K===void 0&&(K=F.clone(),B[j]=K),F=K}return F.visible=E.visible,F.wireframe=E.wireframe,L===br?F.side=E.shadowSide!==null?E.shadowSide:E.side:F.side=E.shadowSide!==null?E.shadowSide:f[E.side],F.alphaMap=E.alphaMap,F.alphaTest=E.alphaTest,F.map=E.map,F.clipShadows=E.clipShadows,F.clippingPlanes=E.clippingPlanes,F.clipIntersection=E.clipIntersection,F.displacementMap=E.displacementMap,F.displacementScale=E.displacementScale,F.displacementBias=E.displacementBias,F.wireframeLinewidth=E.wireframeLinewidth,F.linewidth=E.linewidth,P.isPointLight===!0&&F.isMeshDistanceMaterial===!0&&(F.referencePosition.setFromMatrixPosition(P.matrixWorld),F.nearDistance=U,F.farDistance=y),F}function M(v,E,P,U,y){if(v.visible===!1)return;if(v.layers.test(E.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&y===br)&&(!v.frustumCulled||i.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,v.matrixWorld);const Q=e.update(v),he=v.material;if(Array.isArray(he)){const j=Q.groups;for(let B=0,K=j.length;B<K;B++){const ne=j[B],$=he[ne.materialIndex];if($&&$.visible){const G=w(v,$,U,P.near,P.far,y);n.renderBufferDirect(P,null,Q,G,v,ne)}}}else if(he.visible){const j=w(v,he,U,P.near,P.far,y);n.renderBufferDirect(P,null,Q,j,v,null)}}const F=v.children;for(let Q=0,he=F.length;Q<he;Q++)M(F[Q],E,P,U,y)}}function A6(n,e,t){const i=t.isWebGL2;function r(){let D=!1;const te=new pt;let me=null;const Ce=new pt(0,0,0,0);return{setMask:function(Le){me!==Le&&!D&&(n.colorMask(Le,Le,Le,Le),me=Le)},setLocked:function(Le){D=Le},setClear:function(Le,Xe,ft,_t,$n){$n===!0&&(Le*=_t,Xe*=_t,ft*=_t),te.set(Le,Xe,ft,_t),Ce.equals(te)===!1&&(n.clearColor(Le,Xe,ft,_t),Ce.copy(te))},reset:function(){D=!1,me=null,Ce.set(-1,0,0,0)}}}function s(){let D=!1,te=null,me=null,Ce=null;return{setTest:function(Le){Le?ae(2929):re(2929)},setMask:function(Le){te!==Le&&!D&&(n.depthMask(Le),te=Le)},setFunc:function(Le){if(me!==Le){switch(Le){case sp:n.depthFunc(512);break;case op:n.depthFunc(519);break;case ap:n.depthFunc(513);break;case fa:n.depthFunc(515);break;case lp:n.depthFunc(514);break;case cp:n.depthFunc(518);break;case up:n.depthFunc(516);break;case fp:n.depthFunc(517);break;default:n.depthFunc(515)}me=Le}},setLocked:function(Le){D=Le},setClear:function(Le){Ce!==Le&&(n.clearDepth(Le),Ce=Le)},reset:function(){D=!1,te=null,me=null,Ce=null}}}function o(){let D=!1,te=null,me=null,Ce=null,Le=null,Xe=null,ft=null,_t=null,$n=null;return{setTest:function(Je){D||(Je?ae(2960):re(2960))},setMask:function(Je){te!==Je&&!D&&(n.stencilMask(Je),te=Je)},setFunc:function(Je,gn,Gt){(me!==Je||Ce!==gn||Le!==Gt)&&(n.stencilFunc(Je,gn,Gt),me=Je,Ce=gn,Le=Gt)},setOp:function(Je,gn,Gt){(Xe!==Je||ft!==gn||_t!==Gt)&&(n.stencilOp(Je,gn,Gt),Xe=Je,ft=gn,_t=Gt)},setLocked:function(Je){D=Je},setClear:function(Je){$n!==Je&&(n.clearStencil(Je),$n=Je)},reset:function(){D=!1,te=null,me=null,Ce=null,Le=null,Xe=null,ft=null,_t=null,$n=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,f=new WeakMap;let h={},m={},g=new WeakMap,p=[],d=null,_=!1,w=null,M=null,v=null,E=null,P=null,U=null,y=null,L=!1,F=null,Q=null,he=null,j=null,B=null;const K=n.getParameter(35661);let ne=!1,$=0;const G=n.getParameter(7938);G.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(G)[1]),ne=$>=1):G.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),ne=$>=2);let fe=null,le={};const Y=n.getParameter(3088),W=n.getParameter(2978),xe=new pt().fromArray(Y),ge=new pt().fromArray(W);function I(D,te,me){const Ce=new Uint8Array(4),Le=n.createTexture();n.bindTexture(D,Le),n.texParameteri(D,10241,9728),n.texParameteri(D,10240,9728);for(let Xe=0;Xe<me;Xe++)n.texImage2D(te+Xe,0,6408,1,1,0,6408,5121,Ce);return Le}const R={};R[3553]=I(3553,3553,1),R[34067]=I(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ae(2929),l.setFunc(fa),Z(!1),ce(ql),ae(2884),H(jn);function ae(D){h[D]!==!0&&(n.enable(D),h[D]=!0)}function re(D){h[D]!==!1&&(n.disable(D),h[D]=!1)}function ve(D,te){return m[D]!==te?(n.bindFramebuffer(D,te),m[D]=te,i&&(D===36009&&(m[36160]=te),D===36160&&(m[36009]=te)),!0):!1}function _e(D,te){let me=p,Ce=!1;if(D)if(me=g.get(te),me===void 0&&(me=[],g.set(te,me)),D.isWebGLMultipleRenderTargets){const Le=D.texture;if(me.length!==Le.length||me[0]!==36064){for(let Xe=0,ft=Le.length;Xe<ft;Xe++)me[Xe]=36064+Xe;me.length=Le.length,Ce=!0}}else me[0]!==36064&&(me[0]=36064,Ce=!0);else me[0]!==1029&&(me[0]=1029,Ce=!0);Ce&&(t.isWebGL2?n.drawBuffers(me):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(me))}function Ee(D){return d!==D?(n.useProgram(D),d=D,!0):!1}const S={[Gi]:32774,[Y0]:32778,[K0]:32779};if(i)S[Kl]=32775,S[$l]=32776;else{const D=e.get("EXT_blend_minmax");D!==null&&(S[Kl]=D.MIN_EXT,S[$l]=D.MAX_EXT)}const C={[$0]:0,[Z0]:1,[J0]:768,[Ef]:770,[rp]:776,[np]:774,[ep]:772,[Q0]:769,[Tf]:771,[ip]:775,[tp]:773};function H(D,te,me,Ce,Le,Xe,ft,_t){if(D===jn){_===!0&&(re(3042),_=!1);return}if(_===!1&&(ae(3042),_=!0),D!==j0){if(D!==w||_t!==L){if((M!==Gi||P!==Gi)&&(n.blendEquation(32774),M=Gi,P=Gi),_t)switch(D){case Zi:n.blendFuncSeparate(1,771,1,771);break;case Xl:n.blendFunc(1,1);break;case jl:n.blendFuncSeparate(0,769,0,1);break;case Yl:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Zi:n.blendFuncSeparate(770,771,1,771);break;case Xl:n.blendFunc(770,1);break;case jl:n.blendFuncSeparate(0,769,0,1);break;case Yl:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}v=null,E=null,U=null,y=null,w=D,L=_t}return}Le=Le||te,Xe=Xe||me,ft=ft||Ce,(te!==M||Le!==P)&&(n.blendEquationSeparate(S[te],S[Le]),M=te,P=Le),(me!==v||Ce!==E||Xe!==U||ft!==y)&&(n.blendFuncSeparate(C[me],C[Ce],C[Xe],C[ft]),v=me,E=Ce,U=Xe,y=ft),w=D,L=!1}function q(D,te){D.side===Wn?re(2884):ae(2884);let me=D.side===Yt;te&&(me=!me),Z(me),D.blending===Zi&&D.transparent===!1?H(jn):H(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);const Ce=D.stencilWrite;c.setTest(Ce),Ce&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),se(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ae(32926):re(32926)}function Z(D){F!==D&&(D?n.frontFace(2304):n.frontFace(2305),F=D)}function ce(D){D!==q0?(ae(2884),D!==Q&&(D===ql?n.cullFace(1029):D===X0?n.cullFace(1028):n.cullFace(1032))):re(2884),Q=D}function de(D){D!==he&&(ne&&n.lineWidth(D),he=D)}function se(D,te,me){D?(ae(32823),(j!==te||B!==me)&&(n.polygonOffset(te,me),j=te,B=me)):re(32823)}function pe(D){D?ae(3089):re(3089)}function oe(D){D===void 0&&(D=33984+K-1),fe!==D&&(n.activeTexture(D),fe=D)}function b(D,te,me){me===void 0&&(fe===null?me=33984+K-1:me=fe);let Ce=le[me];Ce===void 0&&(Ce={type:void 0,texture:void 0},le[me]=Ce),(Ce.type!==D||Ce.texture!==te)&&(fe!==me&&(n.activeTexture(me),fe=me),n.bindTexture(D,te||R[D]),Ce.type=D,Ce.texture=te)}function x(){const D=le[fe];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function N(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function X(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ue(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Me(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function A(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function O(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function be(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Te(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ae(D){xe.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),xe.copy(D))}function we(D){ge.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),ge.copy(D))}function Re(D,te){let me=f.get(te);me===void 0&&(me=new WeakMap,f.set(te,me));let Ce=me.get(D);Ce===void 0&&(Ce=n.getUniformBlockIndex(te,D.name),me.set(D,Ce))}function ze(D,te){const Ce=f.get(te).get(D);u.get(D)!==Ce&&(n.uniformBlockBinding(te,Ce,D.__bindingPointIndex),u.set(D,Ce))}function $e(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},fe=null,le={},m={},g=new WeakMap,p=[],d=null,_=!1,w=null,M=null,v=null,E=null,P=null,U=null,y=null,L=!1,F=null,Q=null,he=null,j=null,B=null,xe.set(0,0,n.canvas.width,n.canvas.height),ge.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ae,disable:re,bindFramebuffer:ve,drawBuffers:_e,useProgram:Ee,setBlending:H,setMaterial:q,setFlipSided:Z,setCullFace:ce,setLineWidth:de,setPolygonOffset:se,setScissorTest:pe,activeTexture:oe,bindTexture:b,unbindTexture:x,compressedTexImage2D:N,compressedTexImage3D:X,texImage2D:Te,texImage3D:Se,updateUBOMapping:Re,uniformBlockBinding:ze,texStorage2D:O,texStorage3D:be,texSubImage2D:ee,texSubImage3D:ue,compressedTexSubImage2D:Me,compressedTexSubImage3D:A,scissor:Ae,viewport:we,reset:$e}}function L6(n,e,t,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(b,x){return _?new OffscreenCanvas(b,x):Is("canvas")}function M(b,x,N,X){let ee=1;if((b.width>X||b.height>X)&&(ee=X/Math.max(b.width,b.height)),ee<1||x===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const ue=x?_a:Math.floor,Me=ue(ee*b.width),A=ue(ee*b.height);p===void 0&&(p=w(Me,A));const O=N?w(Me,A):p;return O.width=Me,O.height=A,O.getContext("2d").drawImage(b,0,0,Me,A),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+Me+"x"+A+")."),O}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function v(b){return Sc(b.width)&&Sc(b.height)}function E(b){return a?!1:b.wrapS!==en||b.wrapT!==en||b.minFilter!==Rt&&b.minFilter!==qt}function P(b,x){return b.generateMipmaps&&x&&b.minFilter!==Rt&&b.minFilter!==qt}function U(b){n.generateMipmap(b)}function y(b,x,N,X,ee=!1){if(a===!1)return x;if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ue=x;return x===6403&&(N===5126&&(ue=33326),N===5131&&(ue=33325),N===5121&&(ue=33321)),x===33319&&(N===5126&&(ue=33328),N===5131&&(ue=33327),N===5121&&(ue=33323)),x===6408&&(N===5126&&(ue=34836),N===5131&&(ue=34842),N===5121&&(ue=X===et&&ee===!1?35907:32856),N===32819&&(ue=32854),N===32820&&(ue=32855)),(ue===33325||ue===33326||ue===33327||ue===33328||ue===34842||ue===34836)&&e.get("EXT_color_buffer_float"),ue}function L(b,x,N){return P(b,N)===!0||b.isFramebufferTexture&&b.minFilter!==Rt&&b.minFilter!==qt?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function F(b){return b===Rt||b===Zl||b===Jl?9728:9729}function Q(b){const x=b.target;x.removeEventListener("dispose",Q),j(x),x.isVideoTexture&&g.delete(x)}function he(b){const x=b.target;x.removeEventListener("dispose",he),K(x)}function j(b){const x=i.get(b);if(x.__webglInit===void 0)return;const N=b.source,X=d.get(N);if(X){const ee=X[x.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&B(b),Object.keys(X).length===0&&d.delete(N)}i.remove(b)}function B(b){const x=i.get(b);n.deleteTexture(x.__webglTexture);const N=b.source,X=d.get(N);delete X[x.__cacheKey],o.memory.textures--}function K(b){const x=b.texture,N=i.get(b),X=i.get(x);if(X.__webglTexture!==void 0&&(n.deleteTexture(X.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++)n.deleteFramebuffer(N.__webglFramebuffer[ee]),N.__webglDepthbuffer&&n.deleteRenderbuffer(N.__webglDepthbuffer[ee]);else{if(n.deleteFramebuffer(N.__webglFramebuffer),N.__webglDepthbuffer&&n.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&n.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let ee=0;ee<N.__webglColorRenderbuffer.length;ee++)N.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(N.__webglColorRenderbuffer[ee]);N.__webglDepthRenderbuffer&&n.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let ee=0,ue=x.length;ee<ue;ee++){const Me=i.get(x[ee]);Me.__webglTexture&&(n.deleteTexture(Me.__webglTexture),o.memory.textures--),i.remove(x[ee])}i.remove(x),i.remove(b)}let ne=0;function $(){ne=0}function G(){const b=ne;return b>=l&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+l),ne+=1,b}function fe(b){const x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.encoding),x.join()}function le(b,x){const N=i.get(b);if(b.isVideoTexture&&pe(b),b.isRenderTargetTexture===!1&&b.version>0&&N.__version!==b.version){const X=b.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(N,b,x);return}}t.bindTexture(3553,N.__webglTexture,33984+x)}function Y(b,x){const N=i.get(b);if(b.version>0&&N.__version!==b.version){re(N,b,x);return}t.bindTexture(35866,N.__webglTexture,33984+x)}function W(b,x){const N=i.get(b);if(b.version>0&&N.__version!==b.version){re(N,b,x);return}t.bindTexture(32879,N.__webglTexture,33984+x)}function xe(b,x){const N=i.get(b);if(b.version>0&&N.__version!==b.version){ve(N,b,x);return}t.bindTexture(34067,N.__webglTexture,33984+x)}const ge={[pa]:10497,[en]:33071,[ma]:33648},I={[Rt]:9728,[Zl]:9984,[Jl]:9986,[qt]:9729,[vp]:9985,[$s]:9987};function R(b,x,N){if(N?(n.texParameteri(b,10242,ge[x.wrapS]),n.texParameteri(b,10243,ge[x.wrapT]),(b===32879||b===35866)&&n.texParameteri(b,32882,ge[x.wrapR]),n.texParameteri(b,10240,I[x.magFilter]),n.texParameteri(b,10241,I[x.minFilter])):(n.texParameteri(b,10242,33071),n.texParameteri(b,10243,33071),(b===32879||b===35866)&&n.texParameteri(b,32882,33071),(x.wrapS!==en||x.wrapT!==en)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(b,10240,F(x.magFilter)),n.texParameteri(b,10241,F(x.minFilter)),x.minFilter!==Rt&&x.minFilter!==qt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const X=e.get("EXT_texture_filter_anisotropic");if(x.type===di&&e.has("OES_texture_float_linear")===!1||a===!1&&x.type===Br&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||i.get(x).__currentAnisotropy)&&(n.texParameterf(b,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy)}}function ae(b,x){let N=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",Q));const X=x.source;let ee=d.get(X);ee===void 0&&(ee={},d.set(X,ee));const ue=fe(x);if(ue!==b.__cacheKey){ee[ue]===void 0&&(ee[ue]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,N=!0),ee[ue].usedTimes++;const Me=ee[b.__cacheKey];Me!==void 0&&(ee[b.__cacheKey].usedTimes--,Me.usedTimes===0&&B(x)),b.__cacheKey=ue,b.__webglTexture=ee[ue].texture}return N}function re(b,x,N){let X=3553;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(X=35866),x.isData3DTexture&&(X=32879);const ee=ae(b,x),ue=x.source;t.bindTexture(X,b.__webglTexture,33984+N);const Me=i.get(ue);if(ue.version!==Me.__version||ee===!0){t.activeTexture(33984+N),n.pixelStorei(37440,x.flipY),n.pixelStorei(37441,x.premultiplyAlpha),n.pixelStorei(3317,x.unpackAlignment),n.pixelStorei(37443,0);const A=E(x)&&v(x.image)===!1;let O=M(x.image,A,!1,u);O=oe(x,O);const be=v(O)||a,Te=s.convert(x.format,x.encoding);let Se=s.convert(x.type),Ae=y(x.internalFormat,Te,Se,x.encoding,x.isVideoTexture);R(X,x,be);let we;const Re=x.mipmaps,ze=a&&x.isVideoTexture!==!0,$e=Me.__version===void 0||ee===!0,D=L(x,O,be);if(x.isDepthTexture)Ae=6402,a?x.type===di?Ae=36012:x.type===hi?Ae=33190:x.type===Ji?Ae=35056:Ae=33189:x.type===di&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===gi&&Ae===6402&&x.type!==Af&&x.type!==hi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=hi,Se=s.convert(x.type)),x.format===ar&&Ae===6402&&(Ae=34041,x.type!==Ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Ji,Se=s.convert(x.type))),$e&&(ze?t.texStorage2D(3553,1,Ae,O.width,O.height):t.texImage2D(3553,0,Ae,O.width,O.height,0,Te,Se,null));else if(x.isDataTexture)if(Re.length>0&&be){ze&&$e&&t.texStorage2D(3553,D,Ae,Re[0].width,Re[0].height);for(let te=0,me=Re.length;te<me;te++)we=Re[te],ze?t.texSubImage2D(3553,te,0,0,we.width,we.height,Te,Se,we.data):t.texImage2D(3553,te,Ae,we.width,we.height,0,Te,Se,we.data);x.generateMipmaps=!1}else ze?($e&&t.texStorage2D(3553,D,Ae,O.width,O.height),t.texSubImage2D(3553,0,0,0,O.width,O.height,Te,Se,O.data)):t.texImage2D(3553,0,Ae,O.width,O.height,0,Te,Se,O.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){ze&&$e&&t.texStorage3D(35866,D,Ae,Re[0].width,Re[0].height,O.depth);for(let te=0,me=Re.length;te<me;te++)we=Re[te],x.format!==tn?Te!==null?ze?t.compressedTexSubImage3D(35866,te,0,0,0,we.width,we.height,O.depth,Te,we.data,0,0):t.compressedTexImage3D(35866,te,Ae,we.width,we.height,O.depth,0,we.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?t.texSubImage3D(35866,te,0,0,0,we.width,we.height,O.depth,Te,Se,we.data):t.texImage3D(35866,te,Ae,we.width,we.height,O.depth,0,Te,Se,we.data)}else{ze&&$e&&t.texStorage2D(3553,D,Ae,Re[0].width,Re[0].height);for(let te=0,me=Re.length;te<me;te++)we=Re[te],x.format!==tn?Te!==null?ze?t.compressedTexSubImage2D(3553,te,0,0,we.width,we.height,Te,we.data):t.compressedTexImage2D(3553,te,Ae,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?t.texSubImage2D(3553,te,0,0,we.width,we.height,Te,Se,we.data):t.texImage2D(3553,te,Ae,we.width,we.height,0,Te,Se,we.data)}else if(x.isDataArrayTexture)ze?($e&&t.texStorage3D(35866,D,Ae,O.width,O.height,O.depth),t.texSubImage3D(35866,0,0,0,0,O.width,O.height,O.depth,Te,Se,O.data)):t.texImage3D(35866,0,Ae,O.width,O.height,O.depth,0,Te,Se,O.data);else if(x.isData3DTexture)ze?($e&&t.texStorage3D(32879,D,Ae,O.width,O.height,O.depth),t.texSubImage3D(32879,0,0,0,0,O.width,O.height,O.depth,Te,Se,O.data)):t.texImage3D(32879,0,Ae,O.width,O.height,O.depth,0,Te,Se,O.data);else if(x.isFramebufferTexture){if($e)if(ze)t.texStorage2D(3553,D,Ae,O.width,O.height);else{let te=O.width,me=O.height;for(let Ce=0;Ce<D;Ce++)t.texImage2D(3553,Ce,Ae,te,me,0,Te,Se,null),te>>=1,me>>=1}}else if(Re.length>0&&be){ze&&$e&&t.texStorage2D(3553,D,Ae,Re[0].width,Re[0].height);for(let te=0,me=Re.length;te<me;te++)we=Re[te],ze?t.texSubImage2D(3553,te,0,0,Te,Se,we):t.texImage2D(3553,te,Ae,Te,Se,we);x.generateMipmaps=!1}else ze?($e&&t.texStorage2D(3553,D,Ae,O.width,O.height),t.texSubImage2D(3553,0,0,0,Te,Se,O)):t.texImage2D(3553,0,Ae,Te,Se,O);P(x,be)&&U(X),Me.__version=ue.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function ve(b,x,N){if(x.image.length!==6)return;const X=ae(b,x),ee=x.source;t.bindTexture(34067,b.__webglTexture,33984+N);const ue=i.get(ee);if(ee.version!==ue.__version||X===!0){t.activeTexture(33984+N),n.pixelStorei(37440,x.flipY),n.pixelStorei(37441,x.premultiplyAlpha),n.pixelStorei(3317,x.unpackAlignment),n.pixelStorei(37443,0);const Me=x.isCompressedTexture||x.image[0].isCompressedTexture,A=x.image[0]&&x.image[0].isDataTexture,O=[];for(let te=0;te<6;te++)!Me&&!A?O[te]=M(x.image[te],!1,!0,c):O[te]=A?x.image[te].image:x.image[te],O[te]=oe(x,O[te]);const be=O[0],Te=v(be)||a,Se=s.convert(x.format,x.encoding),Ae=s.convert(x.type),we=y(x.internalFormat,Se,Ae,x.encoding),Re=a&&x.isVideoTexture!==!0,ze=ue.__version===void 0||X===!0;let $e=L(x,be,Te);R(34067,x,Te);let D;if(Me){Re&&ze&&t.texStorage2D(34067,$e,we,be.width,be.height);for(let te=0;te<6;te++){D=O[te].mipmaps;for(let me=0;me<D.length;me++){const Ce=D[me];x.format!==tn?Se!==null?Re?t.compressedTexSubImage2D(34069+te,me,0,0,Ce.width,Ce.height,Se,Ce.data):t.compressedTexImage2D(34069+te,me,we,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?t.texSubImage2D(34069+te,me,0,0,Ce.width,Ce.height,Se,Ae,Ce.data):t.texImage2D(34069+te,me,we,Ce.width,Ce.height,0,Se,Ae,Ce.data)}}}else{D=x.mipmaps,Re&&ze&&(D.length>0&&$e++,t.texStorage2D(34067,$e,we,O[0].width,O[0].height));for(let te=0;te<6;te++)if(A){Re?t.texSubImage2D(34069+te,0,0,0,O[te].width,O[te].height,Se,Ae,O[te].data):t.texImage2D(34069+te,0,we,O[te].width,O[te].height,0,Se,Ae,O[te].data);for(let me=0;me<D.length;me++){const Le=D[me].image[te].image;Re?t.texSubImage2D(34069+te,me+1,0,0,Le.width,Le.height,Se,Ae,Le.data):t.texImage2D(34069+te,me+1,we,Le.width,Le.height,0,Se,Ae,Le.data)}}else{Re?t.texSubImage2D(34069+te,0,0,0,Se,Ae,O[te]):t.texImage2D(34069+te,0,we,Se,Ae,O[te]);for(let me=0;me<D.length;me++){const Ce=D[me];Re?t.texSubImage2D(34069+te,me+1,0,0,Se,Ae,Ce.image[te]):t.texImage2D(34069+te,me+1,we,Se,Ae,Ce.image[te])}}}P(x,Te)&&U(34067),ue.__version=ee.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function _e(b,x,N,X,ee){const ue=s.convert(N.format,N.encoding),Me=s.convert(N.type),A=y(N.internalFormat,ue,Me,N.encoding);i.get(x).__hasExternalTextures||(ee===32879||ee===35866?t.texImage3D(ee,0,A,x.width,x.height,x.depth,0,ue,Me,null):t.texImage2D(ee,0,A,x.width,x.height,0,ue,Me,null)),t.bindFramebuffer(36160,b),se(x)?h.framebufferTexture2DMultisampleEXT(36160,X,ee,i.get(N).__webglTexture,0,de(x)):(ee===3553||ee>=34069&&ee<=34074)&&n.framebufferTexture2D(36160,X,ee,i.get(N).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ee(b,x,N){if(n.bindRenderbuffer(36161,b),x.depthBuffer&&!x.stencilBuffer){let X=33189;if(N||se(x)){const ee=x.depthTexture;ee&&ee.isDepthTexture&&(ee.type===di?X=36012:ee.type===hi&&(X=33190));const ue=de(x);se(x)?h.renderbufferStorageMultisampleEXT(36161,ue,X,x.width,x.height):n.renderbufferStorageMultisample(36161,ue,X,x.width,x.height)}else n.renderbufferStorage(36161,X,x.width,x.height);n.framebufferRenderbuffer(36160,36096,36161,b)}else if(x.depthBuffer&&x.stencilBuffer){const X=de(x);N&&se(x)===!1?n.renderbufferStorageMultisample(36161,X,35056,x.width,x.height):se(x)?h.renderbufferStorageMultisampleEXT(36161,X,35056,x.width,x.height):n.renderbufferStorage(36161,34041,x.width,x.height),n.framebufferRenderbuffer(36160,33306,36161,b)}else{const X=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let ee=0;ee<X.length;ee++){const ue=X[ee],Me=s.convert(ue.format,ue.encoding),A=s.convert(ue.type),O=y(ue.internalFormat,Me,A,ue.encoding),be=de(x);N&&se(x)===!1?n.renderbufferStorageMultisample(36161,be,O,x.width,x.height):se(x)?h.renderbufferStorageMultisampleEXT(36161,be,O,x.width,x.height):n.renderbufferStorage(36161,O,x.width,x.height)}}n.bindRenderbuffer(36161,null)}function S(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),le(x.depthTexture,0);const X=i.get(x.depthTexture).__webglTexture,ee=de(x);if(x.depthTexture.format===gi)se(x)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,X,0,ee):n.framebufferTexture2D(36160,36096,3553,X,0);else if(x.depthTexture.format===ar)se(x)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,X,0,ee):n.framebufferTexture2D(36160,33306,3553,X,0);else throw new Error("Unknown depthTexture format")}function C(b){const x=i.get(b),N=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");S(x.__webglFramebuffer,b)}else if(N){x.__webglDepthbuffer=[];for(let X=0;X<6;X++)t.bindFramebuffer(36160,x.__webglFramebuffer[X]),x.__webglDepthbuffer[X]=n.createRenderbuffer(),Ee(x.__webglDepthbuffer[X],b,!1)}else t.bindFramebuffer(36160,x.__webglFramebuffer),x.__webglDepthbuffer=n.createRenderbuffer(),Ee(x.__webglDepthbuffer,b,!1);t.bindFramebuffer(36160,null)}function H(b,x,N){const X=i.get(b);x!==void 0&&_e(X.__webglFramebuffer,b,b.texture,36064,3553),N!==void 0&&C(b)}function q(b){const x=b.texture,N=i.get(b),X=i.get(x);b.addEventListener("dispose",he),b.isWebGLMultipleRenderTargets!==!0&&(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=x.version,o.memory.textures++);const ee=b.isWebGLCubeRenderTarget===!0,ue=b.isWebGLMultipleRenderTargets===!0,Me=v(b)||a;if(ee){N.__webglFramebuffer=[];for(let A=0;A<6;A++)N.__webglFramebuffer[A]=n.createFramebuffer()}else{if(N.__webglFramebuffer=n.createFramebuffer(),ue)if(r.drawBuffers){const A=b.texture;for(let O=0,be=A.length;O<be;O++){const Te=i.get(A[O]);Te.__webglTexture===void 0&&(Te.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&se(b)===!1){const A=ue?x:[x];N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,N.__webglMultisampledFramebuffer);for(let O=0;O<A.length;O++){const be=A[O];N.__webglColorRenderbuffer[O]=n.createRenderbuffer(),n.bindRenderbuffer(36161,N.__webglColorRenderbuffer[O]);const Te=s.convert(be.format,be.encoding),Se=s.convert(be.type),Ae=y(be.internalFormat,Te,Se,be.encoding,b.isXRRenderTarget===!0),we=de(b);n.renderbufferStorageMultisample(36161,we,Ae,b.width,b.height),n.framebufferRenderbuffer(36160,36064+O,36161,N.__webglColorRenderbuffer[O])}n.bindRenderbuffer(36161,null),b.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),Ee(N.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(36160,null)}}if(ee){t.bindTexture(34067,X.__webglTexture),R(34067,x,Me);for(let A=0;A<6;A++)_e(N.__webglFramebuffer[A],b,x,36064,34069+A);P(x,Me)&&U(34067),t.unbindTexture()}else if(ue){const A=b.texture;for(let O=0,be=A.length;O<be;O++){const Te=A[O],Se=i.get(Te);t.bindTexture(3553,Se.__webglTexture),R(3553,Te,Me),_e(N.__webglFramebuffer,b,Te,36064+O,3553),P(Te,Me)&&U(3553)}t.unbindTexture()}else{let A=3553;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?A=b.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(A,X.__webglTexture),R(A,x,Me),_e(N.__webglFramebuffer,b,x,36064,A),P(x,Me)&&U(A),t.unbindTexture()}b.depthBuffer&&C(b)}function Z(b){const x=v(b)||a,N=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let X=0,ee=N.length;X<ee;X++){const ue=N[X];if(P(ue,x)){const Me=b.isWebGLCubeRenderTarget?34067:3553,A=i.get(ue).__webglTexture;t.bindTexture(Me,A),U(Me),t.unbindTexture()}}}function ce(b){if(a&&b.samples>0&&se(b)===!1){const x=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],N=b.width,X=b.height;let ee=16384;const ue=[],Me=b.stencilBuffer?33306:36096,A=i.get(b),O=b.isWebGLMultipleRenderTargets===!0;if(O)for(let be=0;be<x.length;be++)t.bindFramebuffer(36160,A.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+be,36161,null),t.bindFramebuffer(36160,A.__webglFramebuffer),n.framebufferTexture2D(36009,36064+be,3553,null,0);t.bindFramebuffer(36008,A.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,A.__webglFramebuffer);for(let be=0;be<x.length;be++){ue.push(36064+be),b.depthBuffer&&ue.push(Me);const Te=A.__ignoreDepthValues!==void 0?A.__ignoreDepthValues:!1;if(Te===!1&&(b.depthBuffer&&(ee|=256),b.stencilBuffer&&(ee|=1024)),O&&n.framebufferRenderbuffer(36008,36064,36161,A.__webglColorRenderbuffer[be]),Te===!0&&(n.invalidateFramebuffer(36008,[Me]),n.invalidateFramebuffer(36009,[Me])),O){const Se=i.get(x[be]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,Se,0)}n.blitFramebuffer(0,0,N,X,0,0,N,X,ee,9728),m&&n.invalidateFramebuffer(36008,ue)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),O)for(let be=0;be<x.length;be++){t.bindFramebuffer(36160,A.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+be,36161,A.__webglColorRenderbuffer[be]);const Te=i.get(x[be]).__webglTexture;t.bindFramebuffer(36160,A.__webglFramebuffer),n.framebufferTexture2D(36009,36064+be,3553,Te,0)}t.bindFramebuffer(36009,A.__webglMultisampledFramebuffer)}}function de(b){return Math.min(f,b.samples)}function se(b){const x=i.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function pe(b){const x=o.render.frame;g.get(b)!==x&&(g.set(b,x),b.update())}function oe(b,x){const N=b.encoding,X=b.format,ee=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===ga||N!==vi&&(N===et?a===!1?e.has("EXT_sRGB")===!0&&X===tn?(b.format=ga,b.minFilter=qt,b.generateMipmaps=!1):x=Df.sRGBToLinear(x):(X!==tn||ee!==xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",N)),x}this.allocateTextureUnit=G,this.resetTextureUnits=$,this.setTexture2D=le,this.setTexture2DArray=Y,this.setTexture3D=W,this.setTextureCube=xe,this.rebindTextures=H,this.setupRenderTarget=q,this.updateRenderTargetMipmap=Z,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=C,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=se}function P6(n,e,t){const i=t.isWebGL2;function r(s,o=null){let a;if(s===xi)return 5121;if(s===Sp)return 32819;if(s===wp)return 32820;if(s===yp)return 5120;if(s===Mp)return 5122;if(s===Af)return 5123;if(s===bp)return 5124;if(s===hi)return 5125;if(s===di)return 5126;if(s===Br)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Ep)return 6406;if(s===tn)return 6408;if(s===Cp)return 6409;if(s===Ap)return 6410;if(s===gi)return 6402;if(s===ar)return 34041;if(s===Tp)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===ga)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Lp)return 6403;if(s===Pp)return 36244;if(s===Rp)return 33319;if(s===Dp)return 33320;if(s===Ip)return 36249;if(s===po||s===mo||s===go||s===_o)if(o===et)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===po)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===mo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===go)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===_o)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===po)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===mo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===go)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===_o)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ql||s===ec||s===tc||s===nc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Ql)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ec)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===tc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===nc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Fp)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ic||s===rc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===ic)return o===et?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===rc)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===sc||s===oc||s===ac||s===lc||s===cc||s===uc||s===fc||s===hc||s===dc||s===pc||s===mc||s===gc||s===_c||s===xc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===sc)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===oc)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ac)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===lc)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===cc)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===uc)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===fc)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===hc)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===dc)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===pc)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===mc)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===gc)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===_c)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===xc)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===vc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===vc)return o===et?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Ji?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class R6 extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class wr extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const D6={type:"move"};class Xo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const p of e.hand.values()){const d=t.getJointPose(p,i),_=this._getHandJoint(c,p);d!==null&&(_.matrix.fromArray(d.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=d.radius),_.visible=d!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,g=.005;c.inputState.pinching&&h>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(D6)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new wr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class I6 extends kt{constructor(e,t,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:gi,u!==gi&&u!==ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===gi&&(i=hi),i===void 0&&u===ar&&(i=Ji),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Rt,this.minFilter=l!==void 0?l:Rt,this.flipY=!1,this.generateMipmaps=!1}}class F6 extends wi{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=null,c=null,u=null,f=null,h=null,m=null;const g=t.getContextAttributes();let p=null,d=null;const _=[],w=[],M=new Set,v=new Map,E=new Xt;E.layers.enable(1),E.viewport=new pt;const P=new Xt;P.layers.enable(2),P.viewport=new pt;const U=[E,P],y=new R6;y.layers.enable(1),y.layers.enable(2);let L=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let W=_[Y];return W===void 0&&(W=new Xo,_[Y]=W),W.getTargetRaySpace()},this.getControllerGrip=function(Y){let W=_[Y];return W===void 0&&(W=new Xo,_[Y]=W),W.getGripSpace()},this.getHand=function(Y){let W=_[Y];return W===void 0&&(W=new Xo,_[Y]=W),W.getHandSpace()};function Q(Y){const W=w.indexOf(Y.inputSource);if(W===-1)return;const xe=_[W];xe!==void 0&&xe.dispatchEvent({type:Y.type,data:Y.inputSource})}function he(){r.removeEventListener("select",Q),r.removeEventListener("selectstart",Q),r.removeEventListener("selectend",Q),r.removeEventListener("squeeze",Q),r.removeEventListener("squeezestart",Q),r.removeEventListener("squeezeend",Q),r.removeEventListener("end",he),r.removeEventListener("inputsourceschange",j);for(let Y=0;Y<_.length;Y++){const W=w[Y];W!==null&&(w[Y]=null,_[Y].disconnect(W))}L=null,F=null,e.setRenderTarget(p),h=null,f=null,u=null,r=null,d=null,le.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",Q),r.addEventListener("selectstart",Q),r.addEventListener("selectend",Q),r.addEventListener("squeeze",Q),r.addEventListener("squeezestart",Q),r.addEventListener("squeezeend",Q),r.addEventListener("end",he),r.addEventListener("inputsourceschange",j),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const W={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,W),r.updateRenderState({baseLayer:h}),d=new yi(h.framebufferWidth,h.framebufferHeight,{format:tn,type:xi,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let W=null,xe=null,ge=null;g.depth&&(ge=g.stencil?35056:33190,W=g.stencil?ar:gi,xe=g.stencil?Ji:hi);const I={colorFormat:32856,depthFormat:ge,scaleFactor:s};u=new XRWebGLBinding(r,t),f=u.createProjectionLayer(I),r.updateRenderState({layers:[f]}),d=new yi(f.textureWidth,f.textureHeight,{format:tn,type:xi,depthTexture:new I6(f.textureWidth,f.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const R=e.properties.get(d);R.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await r.requestReferenceSpace(a),le.setContext(r),le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function j(Y){for(let W=0;W<Y.removed.length;W++){const xe=Y.removed[W],ge=w.indexOf(xe);ge>=0&&(w[ge]=null,_[ge].disconnect(xe))}for(let W=0;W<Y.added.length;W++){const xe=Y.added[W];let ge=w.indexOf(xe);if(ge===-1){for(let R=0;R<_.length;R++)if(R>=w.length){w.push(xe),ge=R;break}else if(w[R]===null){w[R]=xe,ge=R;break}if(ge===-1)break}const I=_[ge];I&&I.connect(xe)}}const B=new z,K=new z;function ne(Y,W,xe){B.setFromMatrixPosition(W.matrixWorld),K.setFromMatrixPosition(xe.matrixWorld);const ge=B.distanceTo(K),I=W.projectionMatrix.elements,R=xe.projectionMatrix.elements,ae=I[14]/(I[10]-1),re=I[14]/(I[10]+1),ve=(I[9]+1)/I[5],_e=(I[9]-1)/I[5],Ee=(I[8]-1)/I[0],S=(R[8]+1)/R[0],C=ae*Ee,H=ae*S,q=ge/(-Ee+S),Z=q*-Ee;W.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Z),Y.translateZ(q),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const ce=ae+q,de=re+q,se=C-Z,pe=H+(ge-Z),oe=ve*re/de*ce,b=_e*re/de*ce;Y.projectionMatrix.makePerspective(se,pe,oe,b,ce,de)}function $(Y,W){W===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(W.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;y.near=P.near=E.near=Y.near,y.far=P.far=E.far=Y.far,(L!==y.near||F!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),L=y.near,F=y.far);const W=Y.parent,xe=y.cameras;$(y,W);for(let I=0;I<xe.length;I++)$(xe[I],W);y.matrixWorld.decompose(y.position,y.quaternion,y.scale),Y.matrix.copy(y.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale);const ge=Y.children;for(let I=0,R=ge.length;I<R;I++)ge[I].updateMatrixWorld(!0);xe.length===2?ne(y,E,P):y.projectionMatrix.copy(E.projectionMatrix)},this.getCamera=function(){return y},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(Y){f!==null&&(f.fixedFoveation=Y),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=Y)},this.getPlanes=function(){return M};let G=null;function fe(Y,W){if(c=W.getViewerPose(l||o),m=W,c!==null){const xe=c.views;h!==null&&(e.setRenderTargetFramebuffer(d,h.framebuffer),e.setRenderTarget(d));let ge=!1;xe.length!==y.cameras.length&&(y.cameras.length=0,ge=!0);for(let I=0;I<xe.length;I++){const R=xe[I];let ae=null;if(h!==null)ae=h.getViewport(R);else{const ve=u.getViewSubImage(f,R);ae=ve.viewport,I===0&&(e.setRenderTargetTextures(d,ve.colorTexture,f.ignoreDepthValues?void 0:ve.depthStencilTexture),e.setRenderTarget(d))}let re=U[I];re===void 0&&(re=new Xt,re.layers.enable(I),re.viewport=new pt,U[I]=re),re.matrix.fromArray(R.transform.matrix),re.projectionMatrix.fromArray(R.projectionMatrix),re.viewport.set(ae.x,ae.y,ae.width,ae.height),I===0&&y.matrix.copy(re.matrix),ge===!0&&y.cameras.push(re)}}for(let xe=0;xe<_.length;xe++){const ge=w[xe],I=_[xe];ge!==null&&I!==void 0&&I.update(ge,W,l||o)}if(G&&G(Y,W),W.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:W.detectedPlanes});let xe=null;for(const ge of M)W.detectedPlanes.has(ge)||(xe===null&&(xe=[]),xe.push(ge));if(xe!==null)for(const ge of xe)M.delete(ge),v.delete(ge),i.dispatchEvent({type:"planeremoved",data:ge});for(const ge of W.detectedPlanes)if(!M.has(ge))M.add(ge),v.set(ge,W.lastChangedTime),i.dispatchEvent({type:"planeadded",data:ge});else{const I=v.get(ge);ge.lastChangedTime>I&&(v.set(ge,ge.lastChangedTime),i.dispatchEvent({type:"planechanged",data:ge}))}}m=null}const le=new Gf;le.setAnimationLoop(fe),this.setAnimationLoop=function(Y){G=Y},this.dispose=function(){}}}function N6(n,e){function t(p,d){d.color.getRGB(p.fogColor.value,kf(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function i(p,d,_,w,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),u(p,d)):d.isMeshPhongMaterial?(r(p,d),c(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&h(p,d,M)):d.isMeshMatcapMaterial?(r(p,d),m(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),g(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(s(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?a(p,d,_,w):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.bumpMap&&(p.bumpMap.value=d.bumpMap,p.bumpScale.value=d.bumpScale,d.side===Yt&&(p.bumpScale.value*=-1)),d.displacementMap&&(p.displacementMap.value=d.displacementMap,p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap),d.normalMap&&(p.normalMap.value=d.normalMap,p.normalScale.value.copy(d.normalScale),d.side===Yt&&p.normalScale.value.negate()),d.specularMap&&(p.specularMap.value=d.specularMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const _=e.get(d).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const v=n.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*v}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity);let w;d.map?w=d.map:d.specularMap?w=d.specularMap:d.displacementMap?w=d.displacementMap:d.normalMap?w=d.normalMap:d.bumpMap?w=d.bumpMap:d.roughnessMap?w=d.roughnessMap:d.metalnessMap?w=d.metalnessMap:d.alphaMap?w=d.alphaMap:d.emissiveMap?w=d.emissiveMap:d.clearcoatMap?w=d.clearcoatMap:d.clearcoatNormalMap?w=d.clearcoatNormalMap:d.clearcoatRoughnessMap?w=d.clearcoatRoughnessMap:d.iridescenceMap?w=d.iridescenceMap:d.iridescenceThicknessMap?w=d.iridescenceThicknessMap:d.specularIntensityMap?w=d.specularIntensityMap:d.specularColorMap?w=d.specularColorMap:d.transmissionMap?w=d.transmissionMap:d.thicknessMap?w=d.thicknessMap:d.sheenColorMap?w=d.sheenColorMap:d.sheenRoughnessMap&&(w=d.sheenRoughnessMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),p.uvTransform.value.copy(w.matrix));let M;d.aoMap?M=d.aoMap:d.lightMap&&(M=d.lightMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),p.uv2Transform.value.copy(M.matrix))}function s(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function a(p,d,_,w){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*_,p.scale.value=w*.5,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let M;d.map?M=d.map:d.alphaMap&&(M=d.alphaMap),M!==void 0&&(M.matrixAutoUpdate===!0&&M.updateMatrix(),p.uvTransform.value.copy(M.matrix))}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let _;d.map?_=d.map:d.alphaMap&&(_=d.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function c(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.roughness.value=d.roughness,p.metalness.value=d.metalness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function h(p,d,_){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),p.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===Yt&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap)}function m(p,d){d.matcap&&(p.matcap.value=d.matcap)}function g(p,d){p.referencePosition.value.copy(d.referencePosition),p.nearDistance.value=d.nearDistance,p.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function O6(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(35375):0;function l(w,M){const v=M.program;i.uniformBlockBinding(w,v)}function c(w,M){let v=r[w.id];v===void 0&&(g(w),v=u(w),r[w.id]=v,w.addEventListener("dispose",d));const E=M.program;i.updateUBOMapping(w,E);const P=e.render.frame;s[w.id]!==P&&(h(w),s[w.id]=P)}function u(w){const M=f();w.__bindingPointIndex=M;const v=n.createBuffer(),E=w.__size,P=w.usage;return n.bindBuffer(35345,v),n.bufferData(35345,E,P),n.bindBuffer(35345,null),n.bindBufferBase(35345,M,v),v}function f(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(w){const M=r[w.id],v=w.uniforms,E=w.__cache;n.bindBuffer(35345,M);for(let P=0,U=v.length;P<U;P++){const y=v[P];if(m(y,P,E)===!0){const L=y.value,F=y.__offset;typeof L=="number"?(y.__data[0]=L,n.bufferSubData(35345,F,y.__data)):(y.value.isMatrix3?(y.__data[0]=y.value.elements[0],y.__data[1]=y.value.elements[1],y.__data[2]=y.value.elements[2],y.__data[3]=y.value.elements[0],y.__data[4]=y.value.elements[3],y.__data[5]=y.value.elements[4],y.__data[6]=y.value.elements[5],y.__data[7]=y.value.elements[0],y.__data[8]=y.value.elements[6],y.__data[9]=y.value.elements[7],y.__data[10]=y.value.elements[8],y.__data[11]=y.value.elements[0]):L.toArray(y.__data),n.bufferSubData(35345,F,y.__data))}}n.bindBuffer(35345,null)}function m(w,M,v){const E=w.value;if(v[M]===void 0)return typeof E=="number"?v[M]=E:v[M]=E.clone(),!0;if(typeof E=="number"){if(v[M]!==E)return v[M]=E,!0}else{const P=v[M];if(P.equals(E)===!1)return P.copy(E),!0}return!1}function g(w){const M=w.uniforms;let v=0;const E=16;let P=0;for(let U=0,y=M.length;U<y;U++){const L=M[U],F=p(L);if(L.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=v,U>0){P=v%E;const Q=E-P;P!==0&&Q-F.boundary<0&&(v+=E-P,L.__offset=v)}v+=F.storage}return P=v%E,P>0&&(v+=E-P),w.__size=v,w.__cache={},this}function p(w){const M=w.value,v={boundary:0,storage:0};return typeof M=="number"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function d(w){const M=w.target;M.removeEventListener("dispose",d);const v=o.indexOf(M.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function _(){for(const w in r)n.deleteBuffer(r[w]);o=[],r={},s={}}return{bind:l,update:c,dispose:_}}function U6(){const n=Is("canvas");return n.style.display="block",n}function Kf(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:U6(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,s=n.antialias!==void 0?n.antialias:!1,o=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,a=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",c=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=n.alpha!==void 0?n.alpha:!1;let f=null,h=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=vi,this.physicallyCorrectLights=!1,this.toneMapping=Ln,this.toneMappingExposure=1;const p=this;let d=!1,_=0,w=0,M=null,v=-1,E=null;const P=new pt,U=new pt;let y=null,L=e.width,F=e.height,Q=1,he=null,j=null;const B=new pt(0,0,L,F),K=new pt(0,0,L,F);let ne=!1;const $=new Wa;let G=!1,fe=!1,le=null;const Y=new ot,W=new Oe,xe=new z,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function I(){return M===null?Q:1}let R=t;function ae(T,V){for(let J=0;J<T.length;J++){const k=T[J],ie=e.getContext(k,V);if(ie!==null)return ie}return null}try{const T={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ha}`),e.addEventListener("webglcontextlost",Ae,!1),e.addEventListener("webglcontextrestored",we,!1),e.addEventListener("webglcontextcreationerror",Re,!1),R===null){const V=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&V.shift(),R=ae(V,T),R===null)throw ae(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}R.getShaderPrecisionFormat===void 0&&(R.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let re,ve,_e,Ee,S,C,H,q,Z,ce,de,se,pe,oe,b,x,N,X,ee,ue,Me,A,O,be;function Te(){re=new Ym(R),ve=new Hm(R,re,n),re.init(ve),A=new P6(R,re,ve),_e=new A6(R,re,ve),Ee=new Zm,S=new p6,C=new L6(R,re,_e,S,ve,A,Ee),H=new Wm(p),q=new jm(p),Z=new o3(R,ve),O=new km(R,re,Z,ve),ce=new Km(R,Z,Ee,O),de=new t4(R,ce,Z,Ee),ee=new e4(R,ve,C),x=new Gm(S),se=new d6(p,H,q,re,ve,O,x),pe=new N6(p,S),oe=new g6,b=new b6(re,ve),X=new Bm(p,H,q,_e,de,u,o),N=new C6(p,de,ve),be=new O6(R,Ee,ve,_e),ue=new Vm(R,re,Ee,ve),Me=new $m(R,re,Ee,ve),Ee.programs=se.programs,p.capabilities=ve,p.extensions=re,p.properties=S,p.renderLists=oe,p.shadowMap=N,p.state=_e,p.info=Ee}Te();const Se=new F6(p,R);this.xr=Se,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const T=re.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=re.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(T){T!==void 0&&(Q=T,this.setSize(L,F,!1))},this.getSize=function(T){return T.set(L,F)},this.setSize=function(T,V,J){if(Se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=T,F=V,e.width=Math.floor(T*Q),e.height=Math.floor(V*Q),J!==!1&&(e.style.width=T+"px",e.style.height=V+"px"),this.setViewport(0,0,T,V)},this.getDrawingBufferSize=function(T){return T.set(L*Q,F*Q).floor()},this.setDrawingBufferSize=function(T,V,J){L=T,F=V,Q=J,e.width=Math.floor(T*J),e.height=Math.floor(V*J),this.setViewport(0,0,T,V)},this.getCurrentViewport=function(T){return T.copy(P)},this.getViewport=function(T){return T.copy(B)},this.setViewport=function(T,V,J,k){T.isVector4?B.set(T.x,T.y,T.z,T.w):B.set(T,V,J,k),_e.viewport(P.copy(B).multiplyScalar(Q).floor())},this.getScissor=function(T){return T.copy(K)},this.setScissor=function(T,V,J,k){T.isVector4?K.set(T.x,T.y,T.z,T.w):K.set(T,V,J,k),_e.scissor(U.copy(K).multiplyScalar(Q).floor())},this.getScissorTest=function(){return ne},this.setScissorTest=function(T){_e.setScissorTest(ne=T)},this.setOpaqueSort=function(T){he=T},this.setTransparentSort=function(T){j=T},this.getClearColor=function(T){return T.copy(X.getClearColor())},this.setClearColor=function(){X.setClearColor.apply(X,arguments)},this.getClearAlpha=function(){return X.getClearAlpha()},this.setClearAlpha=function(){X.setClearAlpha.apply(X,arguments)},this.clear=function(T=!0,V=!0,J=!0){let k=0;T&&(k|=16384),V&&(k|=256),J&&(k|=1024),R.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ae,!1),e.removeEventListener("webglcontextrestored",we,!1),e.removeEventListener("webglcontextcreationerror",Re,!1),oe.dispose(),b.dispose(),S.dispose(),H.dispose(),q.dispose(),de.dispose(),O.dispose(),be.dispose(),se.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",Ce),Se.removeEventListener("sessionend",Le),le&&(le.dispose(),le=null),Xe.stop()};function Ae(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const T=Ee.autoReset,V=N.enabled,J=N.autoUpdate,k=N.needsUpdate,ie=N.type;Te(),Ee.autoReset=T,N.enabled=V,N.autoUpdate=J,N.needsUpdate=k,N.type=ie}function Re(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ze(T){const V=T.target;V.removeEventListener("dispose",ze),$e(V)}function $e(T){D(T),S.remove(T)}function D(T){const V=S.get(T).programs;V!==void 0&&(V.forEach(function(J){se.releaseProgram(J)}),T.isShaderMaterial&&se.releaseShaderCache(T))}this.renderBufferDirect=function(T,V,J,k,ie,Pe){V===null&&(V=ge);const De=ie.isMesh&&ie.matrixWorld.determinant()<0,Ue=e1(T,V,J,k,ie);_e.setMaterial(k,De);let Be=J.index,qe=1;k.wireframe===!0&&(Be=ce.getWireframeAttribute(J),qe=2);const ke=J.drawRange,Ve=J.attributes.position;let it=ke.start*qe,Ft=(ke.start+ke.count)*qe;Pe!==null&&(it=Math.max(it,Pe.start*qe),Ft=Math.min(Ft,(Pe.start+Pe.count)*qe)),Be!==null?(it=Math.max(it,0),Ft=Math.min(Ft,Be.count)):Ve!=null&&(it=Math.max(it,0),Ft=Math.min(Ft,Ve.count));const _n=Ft-it;if(_n<0||_n===1/0)return;O.setup(ie,k,Ue,J,Be);let Zn,rt=ue;if(Be!==null&&(Zn=Z.get(Be),rt=Me,rt.setIndex(Zn)),ie.isMesh)k.wireframe===!0?(_e.setLineWidth(k.wireframeLinewidth*I()),rt.setMode(1)):rt.setMode(4);else if(ie.isLine){let He=k.linewidth;He===void 0&&(He=1),_e.setLineWidth(He*I()),ie.isLineSegments?rt.setMode(1):ie.isLineLoop?rt.setMode(2):rt.setMode(3)}else ie.isPoints?rt.setMode(0):ie.isSprite&&rt.setMode(4);if(ie.isInstancedMesh)rt.renderInstances(it,_n,ie.count);else if(J.isInstancedBufferGeometry){const He=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Qs=Math.min(J.instanceCount,He);rt.renderInstances(it,_n,Qs)}else rt.render(it,_n)},this.compile=function(T,V){function J(k,ie,Pe){k.transparent===!0&&k.side===Wn?(k.side=Yt,k.needsUpdate=!0,Gt(k,ie,Pe),k.side=rr,k.needsUpdate=!0,Gt(k,ie,Pe),k.side=Wn):Gt(k,ie,Pe)}h=b.get(T),h.init(),g.push(h),T.traverseVisible(function(k){k.isLight&&k.layers.test(V.layers)&&(h.pushLight(k),k.castShadow&&h.pushShadow(k))}),h.setupLights(p.physicallyCorrectLights),T.traverse(function(k){const ie=k.material;if(ie)if(Array.isArray(ie))for(let Pe=0;Pe<ie.length;Pe++){const De=ie[Pe];J(De,T,k)}else J(ie,T,k)}),g.pop(),h=null};let te=null;function me(T){te&&te(T)}function Ce(){Xe.stop()}function Le(){Xe.start()}const Xe=new Gf;Xe.setAnimationLoop(me),typeof self<"u"&&Xe.setContext(self),this.setAnimationLoop=function(T){te=T,Se.setAnimationLoop(T),T===null?Xe.stop():Xe.start()},Se.addEventListener("sessionstart",Ce),Se.addEventListener("sessionend",Le),this.render=function(T,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(V),V=Se.getCamera()),T.isScene===!0&&T.onBeforeRender(p,T,V,M),h=b.get(T,g.length),h.init(),g.push(h),Y.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),$.setFromProjectionMatrix(Y),fe=this.localClippingEnabled,G=x.init(this.clippingPlanes,fe,V),f=oe.get(T,m.length),f.init(),m.push(f),ft(T,V,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(he,j),G===!0&&x.beginShadows();const J=h.state.shadowsArray;if(N.render(J,T,V),G===!0&&x.endShadows(),this.info.autoReset===!0&&this.info.reset(),X.render(f,T),h.setupLights(p.physicallyCorrectLights),V.isArrayCamera){const k=V.cameras;for(let ie=0,Pe=k.length;ie<Pe;ie++){const De=k[ie];_t(f,T,De,De.viewport)}}else _t(f,T,V);M!==null&&(C.updateMultisampleRenderTarget(M),C.updateRenderTargetMipmap(M)),T.isScene===!0&&T.onAfterRender(p,T,V),O.resetDefaultState(),v=-1,E=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function ft(T,V,J,k){if(T.visible===!1)return;if(T.layers.test(V.layers)){if(T.isGroup)J=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(V);else if(T.isLight)h.pushLight(T),T.castShadow&&h.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||$.intersectsSprite(T)){k&&xe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Y);const De=de.update(T),Ue=T.material;Ue.visible&&f.push(T,De,Ue,J,xe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==Ee.render.frame&&(T.skeleton.update(),T.skeleton.frame=Ee.render.frame),!T.frustumCulled||$.intersectsObject(T))){k&&xe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Y);const De=de.update(T),Ue=T.material;if(Array.isArray(Ue)){const Be=De.groups;for(let qe=0,ke=Be.length;qe<ke;qe++){const Ve=Be[qe],it=Ue[Ve.materialIndex];it&&it.visible&&f.push(T,De,it,J,xe.z,Ve)}}else Ue.visible&&f.push(T,De,Ue,J,xe.z,null)}}const Pe=T.children;for(let De=0,Ue=Pe.length;De<Ue;De++)ft(Pe[De],V,J,k)}function _t(T,V,J,k){const ie=T.opaque,Pe=T.transmissive,De=T.transparent;h.setupLightsView(J),Pe.length>0&&$n(ie,V,J),k&&_e.viewport(P.copy(k)),ie.length>0&&Je(ie,V,J),Pe.length>0&&Je(Pe,V,J),De.length>0&&Je(De,V,J),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function $n(T,V,J){const k=ve.isWebGL2;le===null&&(le=new yi(1,1,{generateMipmaps:!0,type:re.has("EXT_color_buffer_half_float")?Br:xi,minFilter:$s,samples:k&&s===!0?4:0})),p.getDrawingBufferSize(W),k?le.setSize(W.x,W.y):le.setSize(_a(W.x),_a(W.y));const ie=p.getRenderTarget();p.setRenderTarget(le),p.clear();const Pe=p.toneMapping;p.toneMapping=Ln,Je(T,V,J),p.toneMapping=Pe,C.updateMultisampleRenderTarget(le),C.updateRenderTargetMipmap(le),p.setRenderTarget(ie)}function Je(T,V,J){const k=V.isScene===!0?V.overrideMaterial:null;for(let ie=0,Pe=T.length;ie<Pe;ie++){const De=T[ie],Ue=De.object,Be=De.geometry,qe=k===null?De.material:k,ke=De.group;Ue.layers.test(J.layers)&&gn(Ue,V,J,Be,qe,ke)}}function gn(T,V,J,k,ie,Pe){T.onBeforeRender(p,V,J,k,ie,Pe),T.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),ie.onBeforeRender(p,V,J,k,T,Pe),ie.transparent===!0&&ie.side===Wn?(ie.side=Yt,ie.needsUpdate=!0,p.renderBufferDirect(J,V,k,ie,T,Pe),ie.side=rr,ie.needsUpdate=!0,p.renderBufferDirect(J,V,k,ie,T,Pe),ie.side=Wn):p.renderBufferDirect(J,V,k,ie,T,Pe),T.onAfterRender(p,V,J,k,ie,Pe)}function Gt(T,V,J){V.isScene!==!0&&(V=ge);const k=S.get(T),ie=h.state.lights,Pe=h.state.shadowsArray,De=ie.state.version,Ue=se.getParameters(T,ie.state,Pe,V,J),Be=se.getProgramCacheKey(Ue);let qe=k.programs;k.environment=T.isMeshStandardMaterial?V.environment:null,k.fog=V.fog,k.envMap=(T.isMeshStandardMaterial?q:H).get(T.envMap||k.environment),qe===void 0&&(T.addEventListener("dispose",ze),qe=new Map,k.programs=qe);let ke=qe.get(Be);if(ke!==void 0){if(k.currentProgram===ke&&k.lightsStateVersion===De)return $a(T,Ue),ke}else Ue.uniforms=se.getUniforms(T),T.onBuild(J,Ue,p),T.onBeforeCompile(Ue,p),ke=se.acquireProgram(Ue,Be),qe.set(Be,ke),k.uniforms=Ue.uniforms;const Ve=k.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ve.clippingPlanes=x.uniform),$a(T,Ue),k.needsLights=n1(T),k.lightsStateVersion=De,k.needsLights&&(Ve.ambientLightColor.value=ie.state.ambient,Ve.lightProbe.value=ie.state.probe,Ve.directionalLights.value=ie.state.directional,Ve.directionalLightShadows.value=ie.state.directionalShadow,Ve.spotLights.value=ie.state.spot,Ve.spotLightShadows.value=ie.state.spotShadow,Ve.rectAreaLights.value=ie.state.rectArea,Ve.ltc_1.value=ie.state.rectAreaLTC1,Ve.ltc_2.value=ie.state.rectAreaLTC2,Ve.pointLights.value=ie.state.point,Ve.pointLightShadows.value=ie.state.pointShadow,Ve.hemisphereLights.value=ie.state.hemi,Ve.directionalShadowMap.value=ie.state.directionalShadowMap,Ve.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,Ve.spotShadowMap.value=ie.state.spotShadowMap,Ve.spotLightMatrix.value=ie.state.spotLightMatrix,Ve.spotLightMap.value=ie.state.spotLightMap,Ve.pointShadowMap.value=ie.state.pointShadowMap,Ve.pointShadowMatrix.value=ie.state.pointShadowMatrix);const it=ke.getUniforms(),Ft=Es.seqWithValue(it.seq,Ve);return k.currentProgram=ke,k.uniformsList=Ft,ke}function $a(T,V){const J=S.get(T);J.outputEncoding=V.outputEncoding,J.instancing=V.instancing,J.skinning=V.skinning,J.morphTargets=V.morphTargets,J.morphNormals=V.morphNormals,J.morphColors=V.morphColors,J.morphTargetsCount=V.morphTargetsCount,J.numClippingPlanes=V.numClippingPlanes,J.numIntersection=V.numClipIntersection,J.vertexAlphas=V.vertexAlphas,J.vertexTangents=V.vertexTangents,J.toneMapping=V.toneMapping}function e1(T,V,J,k,ie){V.isScene!==!0&&(V=ge),C.resetTextureUnits();const Pe=V.fog,De=k.isMeshStandardMaterial?V.environment:null,Ue=M===null?p.outputEncoding:M.isXRRenderTarget===!0?M.texture.encoding:vi,Be=(k.isMeshStandardMaterial?q:H).get(k.envMap||De),qe=k.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,ke=!!k.normalMap&&!!J.attributes.tangent,Ve=!!J.morphAttributes.position,it=!!J.morphAttributes.normal,Ft=!!J.morphAttributes.color,_n=k.toneMapped?p.toneMapping:Ln,Zn=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,rt=Zn!==void 0?Zn.length:0,He=S.get(k),Qs=h.state.lights;if(G===!0&&(fe===!0||T!==E)){const Nt=T===E&&k.id===v;x.setState(k,T,Nt)}let ht=!1;k.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Qs.state.version||He.outputEncoding!==Ue||ie.isInstancedMesh&&He.instancing===!1||!ie.isInstancedMesh&&He.instancing===!0||ie.isSkinnedMesh&&He.skinning===!1||!ie.isSkinnedMesh&&He.skinning===!0||He.envMap!==Be||k.fog===!0&&He.fog!==Pe||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==x.numPlanes||He.numIntersection!==x.numIntersection)||He.vertexAlphas!==qe||He.vertexTangents!==ke||He.morphTargets!==Ve||He.morphNormals!==it||He.morphColors!==Ft||He.toneMapping!==_n||ve.isWebGL2===!0&&He.morphTargetsCount!==rt)&&(ht=!0):(ht=!0,He.__version=k.version);let Jn=He.currentProgram;ht===!0&&(Jn=Gt(k,V,ie));let Za=!1,pr=!1,eo=!1;const bt=Jn.getUniforms(),Qn=He.uniforms;if(_e.useProgram(Jn.program)&&(Za=!0,pr=!0,eo=!0),k.id!==v&&(v=k.id,pr=!0),Za||E!==T){if(bt.setValue(R,"projectionMatrix",T.projectionMatrix),ve.logarithmicDepthBuffer&&bt.setValue(R,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),E!==T&&(E=T,pr=!0,eo=!0),k.isShaderMaterial||k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshStandardMaterial||k.envMap){const Nt=bt.map.cameraPosition;Nt!==void 0&&Nt.setValue(R,xe.setFromMatrixPosition(T.matrixWorld))}(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&bt.setValue(R,"isOrthographic",T.isOrthographicCamera===!0),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial||k.isShadowMaterial||ie.isSkinnedMesh)&&bt.setValue(R,"viewMatrix",T.matrixWorldInverse)}if(ie.isSkinnedMesh){bt.setOptional(R,ie,"bindMatrix"),bt.setOptional(R,ie,"bindMatrixInverse");const Nt=ie.skeleton;Nt&&(ve.floatVertexTextures?(Nt.boneTexture===null&&Nt.computeBoneTexture(),bt.setValue(R,"boneTexture",Nt.boneTexture,C),bt.setValue(R,"boneTextureSize",Nt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const to=J.morphAttributes;if((to.position!==void 0||to.normal!==void 0||to.color!==void 0&&ve.isWebGL2===!0)&&ee.update(ie,J,k,Jn),(pr||He.receiveShadow!==ie.receiveShadow)&&(He.receiveShadow=ie.receiveShadow,bt.setValue(R,"receiveShadow",ie.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Qn.envMap.value=Be,Qn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),pr&&(bt.setValue(R,"toneMappingExposure",p.toneMappingExposure),He.needsLights&&t1(Qn,eo),Pe&&k.fog===!0&&pe.refreshFogUniforms(Qn,Pe),pe.refreshMaterialUniforms(Qn,k,Q,F,le),Es.upload(R,He.uniformsList,Qn,C)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Es.upload(R,He.uniformsList,Qn,C),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&bt.setValue(R,"center",ie.center),bt.setValue(R,"modelViewMatrix",ie.modelViewMatrix),bt.setValue(R,"normalMatrix",ie.normalMatrix),bt.setValue(R,"modelMatrix",ie.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Nt=k.uniformsGroups;for(let no=0,i1=Nt.length;no<i1;no++)if(ve.isWebGL2){const Ja=Nt[no];be.update(Ja,Jn),be.bind(Ja,Jn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Jn}function t1(T,V){T.ambientLightColor.needsUpdate=V,T.lightProbe.needsUpdate=V,T.directionalLights.needsUpdate=V,T.directionalLightShadows.needsUpdate=V,T.pointLights.needsUpdate=V,T.pointLightShadows.needsUpdate=V,T.spotLights.needsUpdate=V,T.spotLightShadows.needsUpdate=V,T.rectAreaLights.needsUpdate=V,T.hemisphereLights.needsUpdate=V}function n1(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(T,V,J){S.get(T.texture).__webglTexture=V,S.get(T.depthTexture).__webglTexture=J;const k=S.get(T);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=J===void 0,k.__autoAllocateDepthBuffer||re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,V){const J=S.get(T);J.__webglFramebuffer=V,J.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(T,V=0,J=0){M=T,_=V,w=J;let k=!0,ie=null,Pe=!1,De=!1;if(T){const Be=S.get(T);Be.__useDefaultFramebuffer!==void 0?(_e.bindFramebuffer(36160,null),k=!1):Be.__webglFramebuffer===void 0?C.setupRenderTarget(T):Be.__hasExternalTextures&&C.rebindTextures(T,S.get(T.texture).__webglTexture,S.get(T.depthTexture).__webglTexture);const qe=T.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(De=!0);const ke=S.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(ie=ke[V],Pe=!0):ve.isWebGL2&&T.samples>0&&C.useMultisampledRTT(T)===!1?ie=S.get(T).__webglMultisampledFramebuffer:ie=ke,P.copy(T.viewport),U.copy(T.scissor),y=T.scissorTest}else P.copy(B).multiplyScalar(Q).floor(),U.copy(K).multiplyScalar(Q).floor(),y=ne;if(_e.bindFramebuffer(36160,ie)&&ve.drawBuffers&&k&&_e.drawBuffers(T,ie),_e.viewport(P),_e.scissor(U),_e.setScissorTest(y),Pe){const Be=S.get(T.texture);R.framebufferTexture2D(36160,36064,34069+V,Be.__webglTexture,J)}else if(De){const Be=S.get(T.texture),qe=V||0;R.framebufferTextureLayer(36160,36064,Be.__webglTexture,J||0,qe)}v=-1},this.readRenderTargetPixels=function(T,V,J,k,ie,Pe,De){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=S.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&De!==void 0&&(Ue=Ue[De]),Ue){_e.bindFramebuffer(36160,Ue);try{const Be=T.texture,qe=Be.format,ke=Be.type;if(qe!==tn&&A.convert(qe)!==R.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ve=ke===Br&&(re.has("EXT_color_buffer_half_float")||ve.isWebGL2&&re.has("EXT_color_buffer_float"));if(ke!==xi&&A.convert(ke)!==R.getParameter(35738)&&!(ke===di&&(ve.isWebGL2||re.has("OES_texture_float")||re.has("WEBGL_color_buffer_float")))&&!Ve){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=T.width-k&&J>=0&&J<=T.height-ie&&R.readPixels(V,J,k,ie,A.convert(qe),A.convert(ke),Pe)}finally{const Be=M!==null?S.get(M).__webglFramebuffer:null;_e.bindFramebuffer(36160,Be)}}},this.copyFramebufferToTexture=function(T,V,J=0){const k=Math.pow(2,-J),ie=Math.floor(V.image.width*k),Pe=Math.floor(V.image.height*k);C.setTexture2D(V,0),R.copyTexSubImage2D(3553,J,0,0,T.x,T.y,ie,Pe),_e.unbindTexture()},this.copyTextureToTexture=function(T,V,J,k=0){const ie=V.image.width,Pe=V.image.height,De=A.convert(J.format),Ue=A.convert(J.type);C.setTexture2D(J,0),R.pixelStorei(37440,J.flipY),R.pixelStorei(37441,J.premultiplyAlpha),R.pixelStorei(3317,J.unpackAlignment),V.isDataTexture?R.texSubImage2D(3553,k,T.x,T.y,ie,Pe,De,Ue,V.image.data):V.isCompressedTexture?R.compressedTexSubImage2D(3553,k,T.x,T.y,V.mipmaps[0].width,V.mipmaps[0].height,De,V.mipmaps[0].data):R.texSubImage2D(3553,k,T.x,T.y,De,Ue,V.image),k===0&&J.generateMipmaps&&R.generateMipmap(3553),_e.unbindTexture()},this.copyTextureToTexture3D=function(T,V,J,k,ie=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Pe=T.max.x-T.min.x+1,De=T.max.y-T.min.y+1,Ue=T.max.z-T.min.z+1,Be=A.convert(k.format),qe=A.convert(k.type);let ke;if(k.isData3DTexture)C.setTexture3D(k,0),ke=32879;else if(k.isDataArrayTexture)C.setTexture2DArray(k,0),ke=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(37440,k.flipY),R.pixelStorei(37441,k.premultiplyAlpha),R.pixelStorei(3317,k.unpackAlignment);const Ve=R.getParameter(3314),it=R.getParameter(32878),Ft=R.getParameter(3316),_n=R.getParameter(3315),Zn=R.getParameter(32877),rt=J.isCompressedTexture?J.mipmaps[0]:J.image;R.pixelStorei(3314,rt.width),R.pixelStorei(32878,rt.height),R.pixelStorei(3316,T.min.x),R.pixelStorei(3315,T.min.y),R.pixelStorei(32877,T.min.z),J.isDataTexture||J.isData3DTexture?R.texSubImage3D(ke,ie,V.x,V.y,V.z,Pe,De,Ue,Be,qe,rt.data):J.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),R.compressedTexSubImage3D(ke,ie,V.x,V.y,V.z,Pe,De,Ue,Be,rt.data)):R.texSubImage3D(ke,ie,V.x,V.y,V.z,Pe,De,Ue,Be,qe,rt),R.pixelStorei(3314,Ve),R.pixelStorei(32878,it),R.pixelStorei(3316,Ft),R.pixelStorei(3315,_n),R.pixelStorei(32877,Zn),ie===0&&k.generateMipmaps&&R.generateMipmap(ke),_e.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?C.setTextureCube(T,0):T.isData3DTexture?C.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?C.setTexture2DArray(T,0):C.setTexture2D(T,0),_e.unbindTexture()},this.resetState=function(){_=0,w=0,M=null,_e.reset(),O.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class z6 extends Kf{}z6.prototype.isWebGL1Renderer=!0;class ja{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new We(e),this.near=t,this.far=i}clone(){return new ja(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}class B6 extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Fs extends hr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new We(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const nu=new z,iu=new z,ru=new ot,jo=new Nf,vs=new Zs;class k6 extends mt{constructor(e=new Kt,t=new Fs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)nu.fromBufferAttribute(t,r-1),iu.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=nu.distanceTo(iu);e.setAttribute("lineDistance",new It(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),vs.copy(i.boundingSphere),vs.applyMatrix4(r),vs.radius+=s,e.ray.intersectsSphere(vs)===!1)return;ru.copy(r).invert(),jo.copy(e.ray).applyMatrix4(ru);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new z,u=new z,f=new z,h=new z,m=this.isLineSegments?2:1,g=i.index,d=i.attributes.position;if(g!==null){const _=Math.max(0,o.start),w=Math.min(g.count,o.start+o.count);for(let M=_,v=w-1;M<v;M+=m){const E=g.getX(M),P=g.getX(M+1);if(c.fromBufferAttribute(d,E),u.fromBufferAttribute(d,P),jo.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const y=e.ray.origin.distanceTo(h);y<e.near||y>e.far||t.push({distance:y,point:f.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,o.start),w=Math.min(d.count,o.start+o.count);for(let M=_,v=w-1;M<v;M+=m){if(c.fromBufferAttribute(d,M),u.fromBufferAttribute(d,M+1),jo.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(h);P<e.near||P>e.far||t.push({distance:P,point:f.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const su=new z,ou=new z;class $f extends k6{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)su.fromBufferAttribute(t,r),ou.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+su.distanceTo(ou);e.setAttribute("lineDistance",new It(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class V6 extends hr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new We(16777215),this.specular=new We(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lf,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ga,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const au={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class H6{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const m=c[f],g=c[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const G6=new H6;class Ya{constructor(e){this.manager=e!==void 0?e:G6,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const wn={};class W6 extends Error{constructor(e,t){super(e),this.response=t}}class Zf extends Ya{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=au.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(wn[e]!==void 0){wn[e].push({onLoad:t,onProgress:i,onError:r});return}wn[e]=[],wn[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=wn[e],f=c.body.getReader(),h=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),m=h?parseInt(h):0,g=m!==0;let p=0;const d=new ReadableStream({start(_){w();function w(){f.read().then(({done:M,value:v})=>{if(M)_.close();else{p+=v.byteLength;const E=new ProgressEvent("progress",{lengthComputable:g,loaded:p,total:m});for(let P=0,U=u.length;P<U;P++){const y=u[P];y.onProgress&&y.onProgress(E)}_.enqueue(v),w()}})}}});return new Response(d)}else throw new W6(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,m=new TextDecoder(h);return c.arrayBuffer().then(g=>m.decode(g))}}}).then(c=>{au.add(e,c);const u=wn[e];delete wn[e];for(let f=0,h=u.length;f<h;f++){const m=u[f];m.onLoad&&m.onLoad(c)}}).catch(c=>{const u=wn[e];if(u===void 0)throw this.manager.itemError(e),c;delete wn[e];for(let f=0,h=u.length;f<h;f++){const m=u[f];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Jf extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class q6 extends Jf{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(mt.DefaultUp),this.updateMatrix(),this.groundColor=new We(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Yo=new ot,lu=new z,cu=new z;class X6{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wa,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;lu.setFromMatrixPosition(e.matrixWorld),t.position.copy(lu),cu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(cu),t.updateMatrixWorld(),Yo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Yo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class j6 extends X6{constructor(){super(new Wf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Y6 extends Jf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mt.DefaultUp),this.updateMatrix(),this.target=new mt,this.shadow=new j6}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class K6{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class uu{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Dt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class $6 extends $f{constructor(e=10,t=10,i=4473924,r=8947848){i=new We(i),r=new We(r);const s=t/2,o=e/t,a=e/2,l=[],c=[];for(let h=0,m=0,g=-a;h<=t;h++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const p=h===s?i:r;p.toArray(c,m),m+=3,p.toArray(c,m),m+=3,p.toArray(c,m),m+=3,p.toArray(c,m),m+=3}const u=new Kt;u.setAttribute("position",new It(l,3)),u.setAttribute("color",new It(c,3));const f=new Fs({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ha}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ha);const Z6={baseurl:"https://eu2.contabostorage.com/73b9e3dd7afc4541ad8d89088d6821f2:dataset/",thingi10kurl:"https://ten-thousand-models.appspot.com/detail.html?file_id="},Qf={urls:Z6},fu={type:"change"},Ko={type:"start"},hu={type:"end"};class J6 extends wi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ti.ROTATE,MIDDLE:Ti.DOLLY,RIGHT:Ti.PAN},this.touches={ONE:Ci.ROTATE,TWO:Ci.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(A){A.addEventListener("keydown",oe),this._domElementKeyEvents=A},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(fu),i.update(),s=r.NONE},this.update=function(){const A=new z,O=new Mi().setFromUnitVectors(e.up,new z(0,1,0)),be=O.clone().invert(),Te=new z,Se=new Mi,Ae=2*Math.PI;return function(){const Re=i.object.position;A.copy(Re).sub(i.target),A.applyQuaternion(O),a.setFromVector3(A),i.autoRotate&&s===r.NONE&&L(U()),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let ze=i.minAzimuthAngle,$e=i.maxAzimuthAngle;return isFinite(ze)&&isFinite($e)&&(ze<-Math.PI?ze+=Ae:ze>Math.PI&&(ze-=Ae),$e<-Math.PI?$e+=Ae:$e>Math.PI&&($e-=Ae),ze<=$e?a.theta=Math.max(ze,Math.min($e,a.theta)):a.theta=a.theta>(ze+$e)/2?Math.max(ze,a.theta):Math.min($e,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(i.minDistance,Math.min(i.maxDistance,a.radius)),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),A.setFromSpherical(a),A.applyQuaternion(be),Re.copy(i.target).add(A),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,f||Te.distanceToSquared(i.object.position)>o||8*(1-Se.dot(i.object.quaternion))>o?(i.dispatchEvent(fu),Te.copy(i.object.position),Se.copy(i.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",N),i.domElement.removeEventListener("pointerdown",H),i.domElement.removeEventListener("pointercancel",ce),i.domElement.removeEventListener("wheel",pe),i.domElement.removeEventListener("pointermove",q),i.domElement.removeEventListener("pointerup",Z),i._domElementKeyEvents!==null&&i._domElementKeyEvents.removeEventListener("keydown",oe)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new uu,l=new uu;let c=1;const u=new z;let f=!1;const h=new Oe,m=new Oe,g=new Oe,p=new Oe,d=new Oe,_=new Oe,w=new Oe,M=new Oe,v=new Oe,E=[],P={};function U(){return 2*Math.PI/60/60*i.autoRotateSpeed}function y(){return Math.pow(.95,i.zoomSpeed)}function L(A){l.theta-=A}function F(A){l.phi-=A}const Q=function(){const A=new z;return function(be,Te){A.setFromMatrixColumn(Te,0),A.multiplyScalar(-be),u.add(A)}}(),he=function(){const A=new z;return function(be,Te){i.screenSpacePanning===!0?A.setFromMatrixColumn(Te,1):(A.setFromMatrixColumn(Te,0),A.crossVectors(i.object.up,A)),A.multiplyScalar(be),u.add(A)}}(),j=function(){const A=new z;return function(be,Te){const Se=i.domElement;if(i.object.isPerspectiveCamera){const Ae=i.object.position;A.copy(Ae).sub(i.target);let we=A.length();we*=Math.tan(i.object.fov/2*Math.PI/180),Q(2*be*we/Se.clientHeight,i.object.matrix),he(2*Te*we/Se.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(Q(be*(i.object.right-i.object.left)/i.object.zoom/Se.clientWidth,i.object.matrix),he(Te*(i.object.top-i.object.bottom)/i.object.zoom/Se.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function B(A){i.object.isPerspectiveCamera?c/=A:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*A)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function K(A){i.object.isPerspectiveCamera?c*=A:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/A)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ne(A){h.set(A.clientX,A.clientY)}function $(A){w.set(A.clientX,A.clientY)}function G(A){p.set(A.clientX,A.clientY)}function fe(A){m.set(A.clientX,A.clientY),g.subVectors(m,h).multiplyScalar(i.rotateSpeed);const O=i.domElement;L(2*Math.PI*g.x/O.clientHeight),F(2*Math.PI*g.y/O.clientHeight),h.copy(m),i.update()}function le(A){M.set(A.clientX,A.clientY),v.subVectors(M,w),v.y>0?B(y()):v.y<0&&K(y()),w.copy(M),i.update()}function Y(A){d.set(A.clientX,A.clientY),_.subVectors(d,p).multiplyScalar(i.panSpeed),j(_.x,_.y),p.copy(d),i.update()}function W(A){A.deltaY<0?K(y()):A.deltaY>0&&B(y()),i.update()}function xe(A){let O=!1;switch(A.code){case i.keys.UP:A.ctrlKey||A.metaKey||A.shiftKey?F(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):j(0,i.keyPanSpeed),O=!0;break;case i.keys.BOTTOM:A.ctrlKey||A.metaKey||A.shiftKey?F(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):j(0,-i.keyPanSpeed),O=!0;break;case i.keys.LEFT:A.ctrlKey||A.metaKey||A.shiftKey?L(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):j(i.keyPanSpeed,0),O=!0;break;case i.keys.RIGHT:A.ctrlKey||A.metaKey||A.shiftKey?L(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):j(-i.keyPanSpeed,0),O=!0;break}O&&(A.preventDefault(),i.update())}function ge(){if(E.length===1)h.set(E[0].pageX,E[0].pageY);else{const A=.5*(E[0].pageX+E[1].pageX),O=.5*(E[0].pageY+E[1].pageY);h.set(A,O)}}function I(){if(E.length===1)p.set(E[0].pageX,E[0].pageY);else{const A=.5*(E[0].pageX+E[1].pageX),O=.5*(E[0].pageY+E[1].pageY);p.set(A,O)}}function R(){const A=E[0].pageX-E[1].pageX,O=E[0].pageY-E[1].pageY,be=Math.sqrt(A*A+O*O);w.set(0,be)}function ae(){i.enableZoom&&R(),i.enablePan&&I()}function re(){i.enableZoom&&R(),i.enableRotate&&ge()}function ve(A){if(E.length==1)m.set(A.pageX,A.pageY);else{const be=Me(A),Te=.5*(A.pageX+be.x),Se=.5*(A.pageY+be.y);m.set(Te,Se)}g.subVectors(m,h).multiplyScalar(i.rotateSpeed);const O=i.domElement;L(2*Math.PI*g.x/O.clientHeight),F(2*Math.PI*g.y/O.clientHeight),h.copy(m)}function _e(A){if(E.length===1)d.set(A.pageX,A.pageY);else{const O=Me(A),be=.5*(A.pageX+O.x),Te=.5*(A.pageY+O.y);d.set(be,Te)}_.subVectors(d,p).multiplyScalar(i.panSpeed),j(_.x,_.y),p.copy(d)}function Ee(A){const O=Me(A),be=A.pageX-O.x,Te=A.pageY-O.y,Se=Math.sqrt(be*be+Te*Te);M.set(0,Se),v.set(0,Math.pow(M.y/w.y,i.zoomSpeed)),B(v.y),w.copy(M)}function S(A){i.enableZoom&&Ee(A),i.enablePan&&_e(A)}function C(A){i.enableZoom&&Ee(A),i.enableRotate&&ve(A)}function H(A){i.enabled!==!1&&(E.length===0&&(i.domElement.setPointerCapture(A.pointerId),i.domElement.addEventListener("pointermove",q),i.domElement.addEventListener("pointerup",Z)),X(A),A.pointerType==="touch"?b(A):de(A))}function q(A){i.enabled!==!1&&(A.pointerType==="touch"?x(A):se(A))}function Z(A){ee(A),E.length===0&&(i.domElement.releasePointerCapture(A.pointerId),i.domElement.removeEventListener("pointermove",q),i.domElement.removeEventListener("pointerup",Z)),i.dispatchEvent(hu),s=r.NONE}function ce(A){ee(A)}function de(A){let O;switch(A.button){case 0:O=i.mouseButtons.LEFT;break;case 1:O=i.mouseButtons.MIDDLE;break;case 2:O=i.mouseButtons.RIGHT;break;default:O=-1}switch(O){case Ti.DOLLY:if(i.enableZoom===!1)return;$(A),s=r.DOLLY;break;case Ti.ROTATE:if(A.ctrlKey||A.metaKey||A.shiftKey){if(i.enablePan===!1)return;G(A),s=r.PAN}else{if(i.enableRotate===!1)return;ne(A),s=r.ROTATE}break;case Ti.PAN:if(A.ctrlKey||A.metaKey||A.shiftKey){if(i.enableRotate===!1)return;ne(A),s=r.ROTATE}else{if(i.enablePan===!1)return;G(A),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Ko)}function se(A){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;fe(A);break;case r.DOLLY:if(i.enableZoom===!1)return;le(A);break;case r.PAN:if(i.enablePan===!1)return;Y(A);break}}function pe(A){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(A.preventDefault(),i.dispatchEvent(Ko),W(A),i.dispatchEvent(hu))}function oe(A){i.enabled===!1||i.enablePan===!1||xe(A)}function b(A){switch(ue(A),E.length){case 1:switch(i.touches.ONE){case Ci.ROTATE:if(i.enableRotate===!1)return;ge(),s=r.TOUCH_ROTATE;break;case Ci.PAN:if(i.enablePan===!1)return;I(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Ci.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;ae(),s=r.TOUCH_DOLLY_PAN;break;case Ci.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;re(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Ko)}function x(A){switch(ue(A),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;ve(A),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;_e(A),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;S(A),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;C(A),i.update();break;default:s=r.NONE}}function N(A){i.enabled!==!1&&A.preventDefault()}function X(A){E.push(A)}function ee(A){delete P[A.pointerId];for(let O=0;O<E.length;O++)if(E[O].pointerId==A.pointerId){E.splice(O,1);return}}function ue(A){let O=P[A.pointerId];O===void 0&&(O=new Oe,P[A.pointerId]=O),O.set(A.pageX,A.pageY)}function Me(A){const O=A.pointerId===E[0].pointerId?E[1]:E[0];return P[O.pointerId]}i.domElement.addEventListener("contextmenu",N),i.domElement.addEventListener("pointerdown",H),i.domElement.addEventListener("pointercancel",ce),i.domElement.addEventListener("wheel",pe,{passive:!1}),this.update()}}class Q6 extends Ya{constructor(e){super(e)}load(e,t,i,r){const s=this,o=new Zf(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(s.parse(a))}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},i,r)}parse(e){function t(c){const u=new DataView(c),f=32/8*3+32/8*3*3+16/8,h=u.getUint32(80,!0);if(80+32/8+h*f===u.byteLength)return!0;const g=[115,111,108,105,100];for(let p=0;p<5;p++)if(i(g,u,p))return!1;return!0}function i(c,u,f){for(let h=0,m=c.length;h<m;h++)if(c[h]!==u.getUint8(f+h))return!1;return!0}function r(c){const u=new DataView(c),f=u.getUint32(80,!0);let h,m,g,p=!1,d,_,w,M,v;for(let F=0;F<80-10;F++)u.getUint32(F,!1)==1129270351&&u.getUint8(F+4)==82&&u.getUint8(F+5)==61&&(p=!0,d=new Float32Array(f*3*3),_=u.getUint8(F+6)/255,w=u.getUint8(F+7)/255,M=u.getUint8(F+8)/255,v=u.getUint8(F+9)/255);const E=84,P=12*4+2,U=new Kt,y=new Float32Array(f*3*3),L=new Float32Array(f*3*3);for(let F=0;F<f;F++){const Q=E+F*P,he=u.getFloat32(Q,!0),j=u.getFloat32(Q+4,!0),B=u.getFloat32(Q+8,!0);if(p){const K=u.getUint16(Q+48,!0);(K&32768)===0?(h=(K&31)/31,m=(K>>5&31)/31,g=(K>>10&31)/31):(h=_,m=w,g=M)}for(let K=1;K<=3;K++){const ne=Q+K*12,$=F*3*3+(K-1)*3;y[$]=u.getFloat32(ne,!0),y[$+1]=u.getFloat32(ne+4,!0),y[$+2]=u.getFloat32(ne+8,!0),L[$]=he,L[$+1]=j,L[$+2]=B,p&&(d[$]=h,d[$+1]=m,d[$+2]=g)}}return U.setAttribute("position",new Vt(y,3)),U.setAttribute("normal",new Vt(L,3)),p&&(U.setAttribute("color",new Vt(d,3)),U.hasColors=!0,U.alpha=v),U}function s(c){const u=new Kt,f=/solid([\s\S]*?)endsolid/g,h=/facet([\s\S]*?)endfacet/g;let m=0;const g=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,p=new RegExp("vertex"+g+g+g,"g"),d=new RegExp("normal"+g+g+g,"g"),_=[],w=[],M=new z;let v,E=0,P=0,U=0;for(;(v=f.exec(c))!==null;){P=U;const y=v[0];for(;(v=h.exec(y))!==null;){let Q=0,he=0;const j=v[0];for(;(v=d.exec(j))!==null;)M.x=parseFloat(v[1]),M.y=parseFloat(v[2]),M.z=parseFloat(v[3]),he++;for(;(v=p.exec(j))!==null;)_.push(parseFloat(v[1]),parseFloat(v[2]),parseFloat(v[3])),w.push(M.x,M.y,M.z),Q++,U++;he!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+m),Q!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+m),m++}const L=P,F=U-P;u.addGroup(L,F,E),E++}return u.setAttribute("position",new It(_,3)),u.setAttribute("normal",new It(w,3)),u}function o(c){return typeof c!="string"?K6.decodeText(new Uint8Array(c)):c}function a(c){if(typeof c=="string"){const u=new Uint8Array(c.length);for(let f=0;f<c.length;f++)u[f]=c.charCodeAt(f)&255;return u.buffer||u}else return c}const l=a(e);return t(l)?r(l):s(o(e))}}class e5 extends Ya{constructor(e){super(e),this.splitLayer=!1}load(e,t,i,r){const s=this,o=new Zf(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(a){try{t(s.parse(a))}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},i,r)}parse(e){let t={x:0,y:0,z:0,e:0,f:0,extruding:!1,relative:!1};const i=[];let r;const s=new Fs({color:16711680});s.name="path";const o=new Fs({color:65280});o.name="extruded";function a(g){r={vertex:[],pathVertex:[],z:g.z},i.push(r)}function l(g,p){r===void 0&&a(g),t.extruding?(r.vertex.push(g.x,g.y,g.z),r.vertex.push(p.x,p.y,p.z)):(r.pathVertex.push(g.x,g.y,g.z),r.pathVertex.push(p.x,p.y,p.z))}function c(g,p){return t.relative?p:p-g}function u(g,p){return t.relative?g+p:p}const f=e.replace(/;.+/g,"").split(`
`);for(let g=0;g<f.length;g++){const p=f[g].split(" "),d=p[0].toUpperCase(),_={};if(p.splice(1).forEach(function(w){if(w[0]!==void 0){const M=w[0].toLowerCase(),v=parseFloat(w.substring(1));_[M]=v}}),d==="G0"||d==="G1"){const w={x:_.x!==void 0?u(t.x,_.x):t.x,y:_.y!==void 0?u(t.y,_.y):t.y,z:_.z!==void 0?u(t.z,_.z):t.z,e:_.e!==void 0?u(t.e,_.e):t.e,f:_.f!==void 0?u(t.f,_.f):t.f};c(t.e,w.e)>0&&(t.extruding=c(t.e,w.e)>0,(r==null||w.z!=r.z)&&a(w)),l(t,w),t=w}else if(!(d==="G2"||d==="G3")){if(d==="G90")t.relative=!1;else if(d==="G91")t.relative=!0;else if(d==="G92"){const w=t;w.x=_.x!==void 0?_.x:w.x,w.y=_.y!==void 0?_.y:w.y,w.z=_.z!==void 0?_.z:w.z,w.e=_.e!==void 0?_.e:w.e}}}function h(g,p,d){const _=new Kt;_.setAttribute("position",new It(g,3));const w=new $f(_,p?o:s);w.name="layer"+d,m.add(w)}const m=new wr;if(m.name="gcode",this.splitLayer)for(let g=0;g<i.length;g++){const p=i[g];h(p.vertex,!0,g),h(p.pathVertex,!1,g)}else{const g=[],p=[];for(let d=0;d<i.length;d++){const _=i[d],w=_.vertex,M=_.pathVertex;for(let v=0;v<w.length;v++)g.push(w[v]);for(let v=0;v<M.length;v++)p.push(M[v])}h(g,!0,i.length),h(p,!1,i.length)}return m.quaternion.setFromEuler(new fr(-Math.PI/2,0,0)),m}}const t5=Hr({name:"ThreeDView",props:["modelNr","materialBaseColor","fileName","type","animateRotate"],setup(n){const e=Pt(null),t=Qf.urls.baseurl;return Fa(async()=>{e.value=n.fileName}),Na(async()=>{let i,r,s,o;new z(0,0,0);function a(g,p,d,_,w){const M=new Y6(_,w);M.position.set(g,p,d),s.add(M),M.castShadow=!0;const v=1;M.shadow.camera.left=-v,M.shadow.camera.right=v,M.shadow.camera.top=v,M.shadow.camera.bottom=-v,M.shadow.camera.near=1,M.shadow.camera.far=4,M.shadow.bias=-.002}s=new B6,s.background=new We(16777215),s.fog=new ja(16777215,100,220),r=new Xt(75,2,.1,1e3),r.position.x=25,r.position.y=100,r.position.z=110;let l=new Q6;n.type!="stl"&&(r.position.x=-20,r.position.y=60,r.position.z=120,l=new e5);let c=n.modelNr+"/"+n.fileName;const u=t;l.load(u+c,function(g){const p=new V6({color:n.materialBaseColor,specular:12248998,shininess:200});let d=g;n.type=="stl"?(g.boundingBox===null&&g.computeBoundingBox(),d=new An(g,p),d.rotation.set(-Math.PI/2,0,0),d.position.set(0,Math.abs(g.boundingBox.min.z)*.5,0),d.castShadow=!0,d.receiveShadow=!0):(d.position.set(-110,0,108),d.castShadow=!0,d.receiveShadow=!0),d.scale.set(.5,.5,.5),s.add(d)}),i=document.getElementById(e.value),o=new Kf({antialias:!0}),o.setPixelRatio(window.devicePixelRatio),o.outputEncoding=et,o.shadowMap.enabled=!0,o.shadowMap.type=wf,i.appendChild(o.domElement),o.setClearColor(0,0),s.add(new q6(4469555,1118498)),a(1,1,1,16777215,1.35),a(.5,1,-1,16777108,1);const f=new J6(r,o.domElement);f.maxDistance=150,f.enableDamping=!0,n.animateRotate&&(f.enableRotate=!0,f.rotateSpeed=.5,f.autoRotate=!0,f.autoRotateSpeed=.5),f.target=new z(-18,-10,-15);const h=new $6(220,10,10066329,11119017);s.add(h);const m=()=>{requestAnimationFrame(m);const g=i.clientWidth,p=i.clientHeight;r.aspect=i.clientWidth/i.clientHeight,r.updateProjectionMatrix(),o.setSize(g,p),f.update(),o.render(s,r)};m()}),{containerID:e}}}),n5=["id"];function i5(n,e,t,i,r,s){return je(),Ze("div",{id:n.containerID},null,8,n5)}const r5=Xs(t5,[["render",i5],["__scopeId","data-v-e28a476f"]]);const s5={name:"ListItem",props:["modelNumbers","pageNumber"],setup(n){const e=Pt(Qf.urls.thingi10kurl),t=Pt(n.modelNumbers),i=Pt(n.pageNumber);function r(){for(var s="0123456789ABCDEF",o="#",a=0;a<6;a++)o+=s[[Math.round(Math.random()*6)]];return o}return{pageNumber:i,modelNumbers:t,getRandomColor:r,thingyURLPath:e}},components:{ThreeDView:r5}},o5={class:"view-desc-container"},a5={class:"container-content"},l5=["title","href"];function c5(n,e,t,i,r,s){const o=Fr("ThreeDView"),a=Fr("router-link");return je(),Ze("div",o5,[(je(!0),Ze(Tt,null,ta(i.modelNumbers,l=>(je(),Ze("div",a5,[Mt(o,{class:"three-d-view",modelNr:l,materialBaseColor:i.getRandomColor(),fileName:l+"_m.stl",type:"stl",animateRotate:"1"},null,8,["modelNr","materialBaseColor","fileName"]),Mt(a,{class:"desc-item",to:{name:"detail",query:{no:l,from:i.pageNumber}}},{default:Wu(()=>[Rs(si(l),1)]),_:2},1032,["to"]),Cn("a",{class:"desc-item",title:l+" @ thingi10k",target:"_blank",href:i.thingyURLPath+l},"@thingi10k",8,l5)]))),256))])}const u5=Xs(s5,[["render",c5],["__scopeId","data-v-f1b67011"]]),f5=["74450","71764","39010","1681184","500100","136639","83597","1312961","109087","54161","247069","1120778","472151","80609","972835","591224","1517923","1146724","250401","77945","36082","68459","40349","122796","83598","178199","135066","135676","99272","462515","464843","56590","702402","97170","96954","89417","73133","1120764","931884","91378","72600","65643","289685","91115","71387","1147240","325189","260543","72191","67223","301923","67927","619670","103824","66377","779080","92417","41271","138039","233189","47979","236922","65755","96123","170180","69965","110374","1344057","72215","50658","1315844","73453","70565","527582","248188","203298","167107","567028","116879","110908","69902","261582","697223","1492345","81162","45517","60276","82057","129916","39640","204393","87657","135079","472158","894836","70833","52862","472183","37328","93549","66376","42962","68500","280282","108319","55353","81262","80940","76054","1502911","180689","51352","472201","97866","48945","622000","103285","49160","238418","91142","58939","1411692","462524","140547","97660","1509867","110980","72657","107545","217024","442389","498713","80938","110906","78222","97431","106040","39768","86242","1722408","260105","1313801","286158","76200","49163","41104","90277","67982","37890","217026","103142","72609","365170","81082","402963","1313542","47774","1436275","269120","1059579","217029","814760","96957","1146168","159693","1158269","151376","65633","1681182","190248","138179","393207","139733","248170","153963","59936","129987","59750","40607","289682","233197","85790","472032","84781","642502","703557","331795","45619","79787","1036473","50450","50659","55772","162330","287448","1158267","81202","106950","132059","43548","64983","248169","375259","72096","66483","118675","208728","61585","650178","80604","1535139","1527408","162861","76198","527554","734279","1758046","255237","1099672","1099668","579371","1088142","80764","331806","1036658","104968","1088224","237630","227387","54468","57256","85113","51508","104640","53122","1275114","814666","98765","318843","375240","40991","81568","65402","129982","87393","269123","129992","1158268","94144","124249","1036657","106610","1481523","1063944","472054","314589","130979","71266","1080330","80945","65281","48944","409624","100040","858852","343541","105859","40184","99899","53048","1129073","118678","54725","591211","399567","40602","1396892","104737","57416","1490844","129909","1088279","237739","139646","116069","57420","271300","1313545","500095","59748","38292","264707","43748","59942","697219","64316","96471","129109","131727","1356652","96966","138180","75662","95180","110934","47097","91390","79851","405888","78027","42707","789074","69264","1722417","472093","38495","462527","122866","1435440","1146184","62414","366725","472149","635749","364253","84640","130046","124034","101620","929564","424211","333704","133568","488050","888456","67121","186555","39180","366724","39869","185292","1706470","55584","39749","137229","229602","325159","59081","38110","53885","36374","52136","530425","43851","195697","591249","132062","103358","135792","73428","567032","94676","69128","270395","702384","153960","46261","41704","61432","47565","126545","132055","70748","849723","188019","816586","53882","719337","39498","110027","200961","44382","107068","42040","225939","65618","89541","780018","94886","186553","101865","702418","73339","108619","53117","265204","77017","94018","38494","148764","242231","76716","1088213","472065","73077","96781","213388","763716","384574","656709","84612","64574","259180","1066897","40009","113685","1312970","103357","96727","110723","276938","46462","250041","56539","656071","57177","464844","76897","58035","97595","69107","244778","357806","110950","240292","318044","41458","1087138","376244","97430","75282","135459","97493","81268","113891","110781","41928","56639","79443","496673","60223","135214","270455","1315839","76391","122351","78481","42633","129924","1505022","551019","866925","243015","75654","668057","46780","1120779","395055","257593","239188","929557","1458684","108322","110910","40836","416682","67551","1411686","248190","67709","77929","40741","95427","1036467","242559","233970","677339","137976","838511","81635","108517","548878","59492","1620063","996805","110907","145365","1312969","1012236","135364","76710","314001","125066","38642","129896","1207668","118909","145507","80361","93129","110031","45561","1509868","80352","226568","41109","87660","95426","129914","92116","44395","288355","76906","127891","83720","1207649","90433","996795","82663","95663","185290","1772591","60172","257597","223730","65004","236145","41075","74780","91141","314590","74152","102537","52409","521421","200005","52073","60515","500118","40835","252784","237632","147729","1411168","228303","200684","595269","270940","225972","91457","996810","51643","92614","64579","129891","87183","98659","442384","827772","1512169","97859","1716281","375258","36086","44040","1341744","54228","53835","88615","68659","1356633","55052","112940","121869","86593","49888","111404","68434","1165782","762595","1505135","51654","108579","271871","125381","472099","67497","229604","81131","94664","1153643","325157","402111","64194","57897","326896","760497","40550","99865","111170","118033","53884","931882","996812","84319","1600245","681062","267486","331335","128057","199820","38635","66378","214479","92820","37095","200696","270399","387871","106839","472042","99029","1203191","102625","99468","61431","301919","110707","74153","1007406","53242","39806","82539","111622","117647","237644","289672","326895","68501","816594","78968","81307","86236","40118","75283","500119","567037","39927","276681","679615","353736","859656","118916","84320","51349","110444","399561","77949","100727","200009","1036317","1451897","1037020","74599","317215","76966","114029","84758","38492","502010","919995","464848","1582430","366727","108199","168075","375252","104787","93497","139737","72203","65642","97488","57937","373704","58933","186200","1454017","702387","51141","649193","648236","85797","697196","548862","1288650","117949","48554","80177","471997","73081","636813","49424","139934","43584","98937","39642","244779","669965","472204","225949","163764","289661","366956","84616","521416","929559","54621","84619","40449","91943","343550","165847","135804","116290","270322","449999","107069","579370","37880","238422","91342","270394","153966","242232","1396886","42942","128350","458126","51335","1126616","73986","200079","220653","1453582","503412","1063853","138205","360074","325085","471998","1146164","94145","1017015","72000","84990","122550","206494","113343","46459","1063856","996796","97659","116079","472173","113417","1207655","70948","1312966","88857","428602","76541","41465","87396","57085","79357","73184","1582419","37962","79729","48559","1484067","40632","60604","940039","63474","188018","69399","81260","48943","569947","129685","131091","39729","61459","472069","84620","126820","46541","129927","293454","80937","260539","76948","441716","76143","215845","1053391","996816","269801","793565","116866","1228193","63467","113908","77935","500107","107438","196123","38293","503411","118297","96772","110928","1207670","1313554","46260","68381","591239","95794","593079","80441","98656","170991","702405","641143","754638","472085","88628","55659","59766","102794","42250","116066","548865","101330","237629","314592","1451901","398303","1646872","73153","613009","77912","101558","71710","50308","360075","100036","77343","39928","635746","366279","472122","68646","113889","1496712","87659","271302","97473","59125","45364","113906","59756","68203","1129075","796150","1527409","113422","1015402","109926","91638","289681","58111","37881","98096","90275","80610","71712","100045","366254","106789","1312950","81203","491062","70923","74890","48028","66640","80756","106788","45341","239180","47732","199814","203289","1396904","1120770","1708614","431936","996814","162092","472055","152776","40585","37886","58877","35269","601645","75845","108339","674846","474360","1041419","130075","833874","500090","129978","95498","199524","472175","88024","121396","100032","471987","1356636","472112","1396903","454346","1176416","57658","81090","37227","50656","635747","39499","58886","84917","101632","91351","74500","37221","74452","39461","125947","289650","697229","95810","54215","67928","1028707","42192","131372","314439","70836","1505029","43551","271303","69988","41521","89634","39123","1005284","750987","132435","70921","40363","619567","51333","91139","1312957","697230","58390","118908","204391","441709","702399","388629","43663","225946","94732","472035","787646","763725","37622","209086","57812","116063","92060","226772","205450","71988","41090","100281","318043","95417","44494","97515","331782","110202","44399","49419","371103","69170","127261","838516","37091","96956","208726","71919","1356648","103082","1158266","357816","44912","472152","1017016","109773","97176","91023","472165","43387","49220","1016024","44000","237643","96778","42974","904507","622001","741532","67891","186201","37861","591222","56497","1097847","39929","106838","509316","97167","100330","56891","132447","579055","99775","1211693","265730","95416","472131","71264","51355","69697","95429","1621241","472104","72094","54230","471992","702409","682292","68679","518086","270454","161718","41308","80751","77340","40116","75699","203280","214675","201962","43545","60458","196196","94216","128584","1036653","76682","472197","1681119","59229","518081","475828","107391","36371","124038","801729","231207","58261","75097","669971","74157","76205","343537","73739","82471","376243","464842","1228199","1722411","83550","204957","76277","372053","372057","80561","41080","702406","88626","263200","55956","669970","135810","1485510","51450","63447","66784","888457","162284","93107","69940","289649","384086","76206","81207","91204","91394","407638","1458671","61200","39639","91474","78671","225950","496671","124039","887959","69131","38291","36088","75121","40877","894835","80765","501153","526843","124532","562346","52075","75992","126285","104187","1722423","203281","38318","98019","44102","248187","110955","237737","674845","42194","59082","65142","39638","301932","72333","117423","45568","472143","43394","44061","365370","472124","1146197","368891","81081","259165","48915","88381","135803","97589","92946","61765","940383","472154","39028","78350","80442","856335","55352","331747","77474","237631","288446","79185","43388","79093","472058","472140","343534","51638","105867","117951","779964","56982","84737","985161","68510","230923","60813","814657","1088214","383021","49886","331749","138178","87521","591232","1064680","133079","702390","360076","741526","222747","73866","91340","111624","82257","57463","462532","338196","45945","102626","518035","298588","472111","91944","58011","527631","388632","67983","958477","281459","100322","48949","130964","55427","39107","105696","562343","37879","225978","395607","1592666","47098","60278","509320","115053","75270","267657","98651","89420","1075458","60866","1131601","125068","1600247","41509","89416","72317","462523","136636","996813","472108","914678","99895","199663","46025","79200","343543","86241","40584","204953","546448","567034","135789","1450318","940045","93554","1021167","98672","139429","852184","38637","1582382","98797","44188","441715","1620056","677342","237626","68249","91285","105693","318045","265474","522979","1146191","518036","38497","39246","116870","42727","40923","37653","39358","1313553","200691","41714","70061","44065","72227","472182","1043461","72321","39507","472109","914683","1312975","966906","372601","112932","466329","46790","79254","60700","105866","83416","82407","1005291","61181","509315","409631","77342","178202","107436","49887","343529","56892","856326","70369","45413","239182","635745","167113","100678","1088056","1037027","72606","472061","67994","129867","129917","58168","41486","63769","236171","815481","931885","233199","224829","249519","107008","76477","91281","39644","104647","1158264","289671","1417961","84622","255239","110912","49417","375236","53581","37747","405823","204477","1750622","550964","196189","906186","331802","131438","82378","472049","1722409","255648","41927","239184","377227","77951","204394","723900","208719","208547","40985","72658","82722","225954","441722","1716277","56735","931901","37323","248192","472189","347938","93427","93882","89535","66678","58938","191968","37746","74492","51660","136397","285368","70829","92066","108337","51509","132420","1083355","996800","90430","200689","271869","789069","68372","40008","1422546","1481222","45409","82058","138185","73134","112916","940037","186545","106779","37276","567029","71160","118921","124041","1582396","117019","98653","44396","37992","740640","168078","77472","74804","84511","1396888","214904","375276","208725","116294","93540","110009","83647","78538","1287883","1582398","441712","52134","1368074","49089","130015","40067","81590","75659","196121","84931","201961","130973","213385","833873","61196","42325","1344058","45803","39160","73427","498431","81267","124614","100478","80650","472041","319831","47094","1179044","1681118","763398","388630","1005290","186202","76204","360072","32770","50741","49257","1582401","98571","116875","1021166","77596","128001","331785","71379","73443","960066","1273628","92157","40443","54137","40993","233198","1322465","1582394","48131","63445","641144","133374","190249","47088","89523","1458686","886948","199666","108452","682289","208730","674848","1036468","75988","121404","289662","62989","186544","270400","129931","472057","425318","41493","81112","901214","81163","100030","1772543","263994","200077","1706456","93070","91352","472157","45122","128911","1458701","1623064","298593","642501","237640","100349","1037028","1005266","40926","46265","37989","110780","75361","132560","639929","472046","99907","1706467","67331","623170","65641","43850","94147","1215418","121398","908460","104582","1322464","47775","130016","39585","450413","233336","570154","69945","63055","338509","92059","42156","97908","106620","280283","129110","1215417","60262","103537","93370","496389","60246","138191","1088054","636795","74461","111878","73161","1536353","313882","96771","41081","72666","239183","46463","61039","105804","42943","1382601","688366","331794","132425","66108","53750","96472","93069","472174","129928","289679","48030","113862","89449","104606","111403","1681235","470186","132204","52581","441725","158250","95433","331804","81083","76712","74641","67821","214676","37750","60265","1717684","190402","1344056","104403","1581203","859651","462528","354371","190415","188496","99866","95434","375255","1207660","50307","325062","409625","48479","233194","49382","69729","67924","132061","72016","84978","1349593","1601763","71263","229598","110028","518080","1482990","42631","130960","106778","136236","567042","1417957","1436276","64764","1344055","48132","1207669","97686","48558","132450","1174408","92151","118301","762587","75653","96653","118768","74659","551075","488048","237624","294160","43390","97507","39497","41939","740392","486343","1368059","67991","1313534","67888","77336","100340","1536354","501150","601642","501152","97594","61195","46474","94059","953786","236147","79194","374397","1663773","139765","428604","42545","84131","77169","72217","856336","100500","1087141","1602764","71566","75279","65443","74447","46665","1620055","285376","43665","994070","68656","1220293","1411688","105220","51884","71623","285369","37266","994014","711139","1124376","80752","78253","93101","442387","62572","129892","76778","331801","1088138","52734","82379","121535","187279","159696","98940","68742","316358","111011","1099671","1146196","859654","1706465","762598","71711","1158261","159694","208248","58238","97591","301064","301934","94477","115061","518083","96086","61767","472103","98671","93074","1527417","112540","42501","54212","64710","719790","399563","128058","51703","1174395","112855","350275","1018275","92067","104511","124707","206319","213390","42708","61418","78251","1472696","47733","88720","452786","128065","1417959","77932","97171","1037023","1315841","449816","1344039","567033","92415","37280","38035","89474","1120772","534903","122200","153377","428173","1356645","100343","472199","1505037","636812","462517","1146185","100077","88855","1082149","100035","263990","59751","518087","53520","446788","472153","1440463","384085","521600","96662","222689","100887","390065","81133","1501548","162331","70380","901213","293455","113341","78023","73086","81223","40990","76051","75142","278154","57069","81110","74242","95774","84736","1706462","423069","39892","994068","77920","593084","58874","1396910","591236","208732","128914","71692","1356649","96306","115066","844208","58055","75269","462511","84641","71693","97128","102294","56496","785454","500087","331796","132449","1063864","71164","1207657","88148","110047","48338","1233195","237623","51909","69696","771609","79810","107392","289669","956446","61192","1207651","331770","373702","1629496","40846","136635","71161","635755","66480","130788","56483","734961","48552","859652","289677","40888","37568","69165","222697","472127","76106","498459","55448","225970","115069","39087","76055","1722415","850628","96076","233187","673086","415278","145501","53449","106611","490704","95431","838521","96564","1344061","40982","130975","116878","1315836","85758","73410","75984","285606","45618","118306","1706468","65942","472146","137977","500110","42897","1368071","52858","1582415","611684","80942","125064","51326","789795","107067","591230","70060","75991","72602","46529","80087","39647","92422","42268","919989","1005282","44508","109576","62587","331805","756805","59559","47567","69325","500104","82059","87688","849720","72607","208727","168076","425319","611679","39245","64992","850629","70023","91341","100339","789083","1275117","1126609","57080","301930","78299","44059","85112","1681239","72361","205449","68380","75658","96545","839724","51359","74454","105414","67984","366253","52565","135805","108327","38741","390936","68595","472045","472196","331762","301922","52251","252614","405889","543707","135456","636802","501149","222687","500114","74944","1764652","153368","106705","422369","76756","260540","1120763","99269","90794","904506","1126618","1312956","40282","931888","44629","129936","97729","58876","486860","55276","112825","212094","641141","96047","1344052","48342","79937","72158","702426","95795","301886","75549","697209","55577","41178","79958","81085","650185","71165","472014","263992","40992","118923","702401","138193","93073","85546","37267","59301","741531","51317","67885","75114","1619332","69090","472118","113864","1036311","159695","113861","107202","1351747","82170","116293","55573","118676","250402","94058","180692","47850","87429","237183","110716","85882","53118","805914","112826","252637","331756","138186","1315842","39142","145504","75993","110042","94215","68215","122126","42386","591214","1432741","47568","1036315","185293","1228196","1396885","804293","325171","130001","1088137","69351","94668","112921","65583","239181","609436","42733","94155","109015","138187","289659","85799","917938","95775","51010","118295","41077","72224","50411","81308","613006","797993","1745354","162336","95502","106100","1063863","61374","40119","232368","48699","442383","762604","1176417","127196","80360","1005281","1743321","1051670","178201","139430","827641","42636","63502","548877","81263","59560","42945","39572","1207650","68504","89266","51350","42839","431937","110782","58112","37223","162283","48420","115070","48124","299216","60099","129925","51474","82377","50428","52054","301804","53241","88147","906184","107295","96450","591247","39759","145500","84993","134631","63461","112534","277703","95185","93703","988105","520644","120786","133275","49421","1716285","1224386","70838","1179042","98576","86056","70840","1698946","77014","153100","188499","83024","1600249","109109","65616","306466","885948","47926","101953","75977","61256","518082","69880","74642","267659","39166","760498","66566","237736","762599","47845","61193","1572114","200369","106786","95187","53438","1335002","1582418","789073","105805","1489596","343530","98664","56264","325188","40920","762592","100507","458129","91469","82069","71156","472059","49546","697222","103737","98567","109132","46583","43296","1411701","78024","548876","39085","98517","904477","289665","127889","51358","80758","129920","73783","409627","95486","1088217","1036393","112544","1505023","1017013","109118","42836","186547","285365","71389","81181","163738","845352","852620","43391","399562","799439","59707","257600","106785","39370","200078","1356637","128485","217031","95422","288802","118905","1211689","138201","298592","112564","598330","789085","669968","423818","77832","93072","38297","38465","105803","69108","850630","71995","204956","108617","103286","601646","741529","226773","89519","57714","78295","100682","1417955","127275","1009280","49889","37322","92817","76724","135219","375080","763718","69265","939889","112941","1066898","462529","119829","131020","114438","91458","464845","51490","55581","99901","100831","65779","100331","1044251","377228","1146170","69547","53886","124368","269121","78351","257592","271867","486700","856330","73737","50740","99912","217020","95423","347582","93866","1514497","140534","97173","72318","104929","43399","57255","147463","57181","60273","260538","126283","51511","54227","69404","44503","441726","84757","124042","115060","914672","80746","121122","239190","73158","91419","149614","204267","472062","1505034","48339","91945","904510","51648","95796","110801","1313538","48354","1120760","80363","135701","110373","574283","91606","190252","472172","1451899","828024","92837","44710","41360","1368067","1176423","357802","63465","95411","202263","251163","72226","42575","817295","77916","79956","44314","83167","79960","99910","1582429","116068","77335","57418","90287","81254","856328","1458678","472071","125102","81084","57083","112543","237735","301889","296806","1614064","1036650","68216","370886","53091","66129","331763","69660","472012","81124","996806","916992","63449","45411","834449","43960","112535","973981","98478","43650","762591","723832","45135","296808","248189","441711","70834","621999","1514495","130030","95037","56098","90282","57082","93884","98546","75360","62987","76894","243313","39891","1458697","91007","110173","61792","44041","93108","100073","42211","110378","500093","60267","72330","125067","564455","1064115","375278","470464","73435","68654","42333","1581202","134613","43978","449906","74150","99469","1313544","82537","567038","129789","39381","486785","331765","46528","1224384","591245","144422","85774","702395","804296","222783","940414","96131","110725","91147","72211","462542","582285","630796","131605","301065","63054","650183","124362","1432660","225971","1088139","110703","200692","1417953","97588","488051","40906","116893","375249","124360","126813","42365","201511","474822","39643","59749","998022","500098","741527","700906","1083352","68813","1458673","136638","74495","81151","214247","125071","702427","72601","723898","233335","41940","69928","814661","762609","116072","70049","1582412","112856","153961","65394","54229","78327","98764","110792","37211","39462","1146180","756802","1207665","71990","1566090","97674","37213","38562","84943","67785","60716","919985","49415","83814","43386","242225","215846","966908","734278","91350","44027","136023","1005271","46810","50881","106777","54471","165115","519509","472193","384575","75116","101214","62860","44398","511803","188500","779998","100730","1505025","364268","51015","126660","250142","83692","103826","462516","1450323","51807","396751","78944","762586","42155","104969","136935","157581","100033","72668","1582391","162892","1228197","58167","64989","108771","130976","138188","567035","56934","93553","90688","129288","70830","237633","849721","331783","162893","77958","139623","301928","1481537","1129083","75493","498461","669967","741525","934258","405822","121400","59753","1063860","131730","82740","1312960","471990","110711","996802","409633","649538","67817","226771","40011","1458698","44098","79936","100071","116065","497978","98625","635750","57942","247674","740391","1582434","48045","543708","124533","331809","79940","108338","425600","400235","1233193","472162","548875","117003","80410","120787","117952","1458682","288352","190399","591220","906185","270396","325075","75103","295749","455436","1088055","68246","76053","85540","132428","214248","289655","1628448","44899","133086","217030","67923","53749","95420","40845","60268","73157","51016","51017","93842","94017","145496","789088","81208","591218","39360","1620064","105558","50430","611682","97593","60170","472180","39182","191078","94733","100827","60941","67566","741528","1312973","52139","55401","314440","1344048","237638","59494","331808","109458","363052","39025","208731","69088","62100","42370","145497","113958","929556","1422545","281460","80084","441710","1722424","118294","51351","42035","1344046","1505024","69257","59375","785455","91124","50879","55354","39549","63516","996815","267484","888462","551020","232912","856333","383022","293819","425345","548863","110834","702404","69091","58009","101956","103044","50098","250397","51911","39181","79774","58010","407639","53920","88564","188505","1088141","325192","151450","1450321","85886","636804","472100","97805","148454","1464288","977256","202265","111587","81129","86238","1716279","40052","130443","39922","43959","167114","70371","79073","83650","81140","510031","39550","55038","123353","37065","1344051","37786","1411697","133582","135216","75986","65758","1130078","976645","550808","101170","503409","325010","591233","44908","135455","908835","73738","821369","55095","167110","72223","49374","65559","74932","190250","39208","1064682","421639","1501549","105864","1368057","39050","73089","200080","81215","60565","135493","69685","373703","109344","105857","50737","63452","77190","1185140","69951","83677","51649","68511","762607","40886","697206","135807","73135","80086","591238","1620057","99900","1312951","472161","1054518","635753","368889","1088225","888461","161091","121868","313877","106039","94241","75147","105688","233337","931892","293453","472119","43594","116880","49376","1582378","723891","347936","103355","91521","37969","127193","462547","1535138","69917","242237","68649","53159","214482","409636","147736","42025","113342","90223","591227","39870","103354","701637","49418","189519","53125","1017014","51014","100640","69975","191072","37303","83715","145328","97126","766374","301916","914675","100646","165845","1652976","84929","84914","252636","289668","61198","1083349","80908","509314","1582409","65150","93130","224503","518089","69169","1063857","472205","1519467","66952","202264","1312952","87398","697224","697211","124185","58124","1005285","1395585","72228","103519","372059","110371","37744","94734","252632","89913","797992","50739","331327","226160","96637","96583","69976","199665","133084","110357","87345","232914","1356639","44704","302939","688369","225948","518029","1063854","331105","509318","81877","71997","619568","41092","102296","366932","74933","1038442","500116","132432","779994","1458685","976646","780000","49890","86163","688370","36075","843549","42634","240291","500112","60269","471985","91610","533694","472024","529449","107437","472094","73473","1228624","186556","278456","1706477","297759","325057","472063","92068","42186","148457","747837","1450322","90225","135793","1036400","472009","196209","441707","1423014","76901","278455","1582435","78325","40876","498454","1396909","45620","98412","67929","462546","814667","69915","756871","593386","343536","1344044","95495","64891","70823","347935","98009","100336","462534","71166","113134","190253","289654","1467362","97177","260222","1458700","1028706","994012","1005267","100681","101881","129923","441719","96046","777040","161094","38639","225962","101955","73162","281375","1005268","105925","54674","105762","441713","257587","44804","39946","43932","47748","841122","1558696","314441","140511","75650","52147","39463","40662","264000","257595","331813","42330","60222","92420","289687","204392","1064679","42986","41105","1053376","462543","472155","384098","289676","285366","77016","384373","206318","83676","1411695","69406","53754","1436278","50270","57332","103283","591237","473603","242222","77513","83005","627213","42576","762603","129908","1222709","76681","1458695","96590","472159","1313550","60328","68335","161438","98012","93366","940384","250395","852087","73154","110721","130037","87825","1344040","73933","762602","134543","113127","1315833","85580","639930","97179","95778","375264","100644","162334","98763","1600244","58052","703558","72324","63450","375244","118656","49544","1211691","110718","242224","70944","191964","296802","96075","130003","55093","51354","132421","503410","115065","1620062","46244","931877","1005288","289667","372114","55031","1716284","153370","1146178","472191","1211692","535202","518088","71158","48029","118303","99467","611676","63053","285603","94082","37789","66482","789082","104646","90792","888464","1146173","124534","81147","137707","1312949","196126","44900","1148096","76057","358287","281376","60364","1706466","442388","96661","931876","83649","69089","1382600","472123","789801","261583","95487","71565","110722","91146","126542","509308","113855","1514903","45133","59226","762600","39496","76898","40915","1315831","72669","331757","135073","96067","50247","96549","118293","104294","104930","472186","103141","65414","39371","1452675","1036466","535201","138208","93704","313884","49208","252786","41108","1452672","37229","109138","46543","429307","37283","1489676","78954","1120761","593381","138581","1231078","111588","91012","204951","216761","472077","51357","108328","843548","1146171","844209","118296","73155","472169","269119","168074","238635","133991","97130","914676","51331","101951","73336","100728","56485","441717","114013","45613","697602","135777","112919","611675","68648","1038438","1582376","1074637","67993","472060","1396900","248185","59061","110710","103815","697201","87520","1501550","83204","66125","75946","170134","83490","62570","87430","441618","217015","215993","102068","135221","60584","80766","145502","57680","55280","331786","237628","230909","201957","45514","102295","39678","232911","70832","39202","99904","81776","441714","125393","1411700","88380","1582387","186554","462530","98479","222695","423819","1273629","103085","225960","86250","388568","856331","122352","70559","45809","113865","75665","1582404","860049","55536","64991","1053874","362965","70044","1146193","204959","91207","56803","107445","112776","105799","243016","129918","85699","838514","375256","92125","116060","931887","117018","130980","81636","1517910","79279","44100","73863","97731","61761","101089","82236","296801","62593","188506","129107","117004","1489600","51476","958475","40900","83716","44874","98668","118714","46264","71381","78028","1626828","50283","44057","102308","216762","669972","53519","91658","834601","1073930","42224","103284","255657","56093","116999","39950","1681234","44111","388565","56105","222694","98923","133077","44950","39355","128373","996803","1224383","1716275","39361","204396","472195","43385","225963","1036428","472188","325079","113000","668418","199664","106782","126286","1158265","79556","91942","70370","77458","82664","405826","177009","168908","110713","134609","50736","461115","60844","325161","373701","116077","904481","162337","288801","1146188","65149","44622","472028","46519","71162","104509","105336","53888","1722414","834595","700908","168907","107910","123958","289690","1063858","93881","1064467","331745","799434","112917","39179","43582","40312","702425","135460","39009","251402","693474","101250","41705","91353","325191","71265","226684","914681","1313200","87370","90791","237642","106370","65611","44234","112918","68647","87719","206495","131980","1558738","996801","43989","58392","510029","1129081","940382","77171","49874","501148","1085684","76904","894834","697228","66484","40361","126196","46840","57079","236144","106780","472116","61633","42328","37215","1228191","39347","267490","1312964","1399418","1582439","104432","325077","405884","940041","1417962","252640","316606","858854","838001","69984","225973","1417963","370885","1423085","1018279","60918","40359","60861","51347","55660","123811","498430","932611","72879","56592","39445","1063851","77844","105662","57656","79939","1063862","135220","1233194","400238","132445","409629","95412","203284","84916","474824","63788","69057","56526","263226","726664","278458","271873","94148","370217","200965","1013014","500096","93067","1224388","462541","84512","325066","75232","69403","1582414","101634","76678","1681120","74458","71622","44739","110909","138189","64821","188503","48335","325086","225974","697225","762588","1231076","619675","40843","98351","42709","116062","51323","77597","47564","90951","195686","1146181","1079827","779965","132562","53432","269443","77919","472040","43437","241234","702203","37179","1508788","289692","103816","257591","64990","197005","238414","315359","43769","277710","200010","37766","331769","161092","40608","39893","69693","43690","68812","71992","77011","133994","65401","138196","1053875","1056913","763721","1772295","76719","37864","289674","263199","145503","233186","76684","49385","85245","289664","108331","135071","50114","37887","110787","58732","86648","126284","112419","466802","281374","1223317","90359","257583","227616","98662","90283","71390","214256","47875","215992","73192","1505031","931879","1036320","97124","916991","1716274","57467","110213","449818","78733","521424","108578","40986","129287","117010","702204","103145","821368","145495","143966","293818","1460441","723899","278459","46017","97156","650187","1722421","1458681","799433","86233","43859","40893","69883","91112","53406","1582431","73164","187281","61759","39369","91138","280753","247070","1582433","1207671","109091","96542","113418","481225","93128","1389867","1028708","260056","79959","1036462","69986","687408","375251","51330","636810","81370","1582413","129988","69694","79957","958473","80760","472192","41732","47854","462539","373706","331778","46262","789797","501146","109090","548864","69978","130441","740253","360009","223146","1093600","424212","73266","115051","472150","43549","458127","91206","248193","369988","914679","130968","95499","85114","188497","79184","138557","232910","42892","97489","237635","375262","91205","471995","134618","1036395","1129084","82183","61242","82326","73085","59546","51705","76947","42291","1772294","1036652","76680","375246","276931","1452669","72611","64824","1716283","255497","55578","1129086","752189","498432","68662","926939","121401","83718","53126","227615","66773","40746","1150177","1344037","931902","860050","100733","1559370","96914","1313533","285602","38558","472148","56499","914686","240293","1356647","416683","124375","1382596","472089","97164","437348","372054","97658","192039","1065032","96074","108010","105863","69705","238413","90736","214252","488049","72337","100346","1384322","814679","500091","48341","271878","472198","1396889","57084","124367","127253","51139","1508790","1772309","187543","267487","73867","91145","222140","289689","87687","500105","66112","40017","136385","98794","271866","97734","107066","116075","130961","1213332","591225","260542","1458674","472016","533695","228302","278461","1120773","74496","79239","95798","331799","55572","42324","111599","57422","50489","233195","117150","471988","84915","98325","1458689","318844","325174","43011","111009","849728","65608","48503","866924","43780","96458","42975","252683","73342","119052","1080515","101168","108620","77013","69910","50650","132436","862678","1489589","940043","53429","93338","88578","375265","163763","97629","130967","124186","1706472","81148","40994","314000","503408","1505134","65588","399566","315033","65301","314588","510026","362398","71493","63244","91452","236142","1750620","38753","1582411","41997","526844","51642","451676","472047","117526","111402","641145","90207","104559","1146165","106559","110207","1038444","353686","162338","42881","53439","60816","86127","122947","346287","116862","636796","471288","45090","75667","97187","271864","225969","314750","37326","78348","44060","69899","472144","102610","331791","56103","94146","145419","94019","49256","132423","87151","611551","53404","54755","37967","527584","51334","260224","77948","70057","48270","259164","642503","110375","61457","370988","212098","48421","105861","619569","200966","985716","90440","94149","441708","110836","474825","88953","60682","56621","85534","789080","72101","116295","112545","641140","409632","1356638","128915","1120771","199818","39152","903533","43553","45009","110370","59769","958474","95494","59767","112420","190247","43849","224504","37365","108616","50305","70374","386839","87519","931874","95808","91025","331803","1004825","548873","1174396","77934","1120765","59127","114437","148293","134619","815484","1706469","50108","39751","37743","59440","370889","69987","241232","81214","88616","495918","1454387","136243","548868","68251","68416","51701","121395","501154","102249","80904","94458","72671","49528","96773","235726","196124","387872","1288652","65619","92833","932613","1315835","1519470","238636","41082","89422","439140","117428","44397","1037025","41154","64329","200687","321050","815482","1582385","1307399","135771","87662","1716276","95801","90434","123354","70379","106840","441720","94203","649540","376252","37627","428605","1508789","129937","61201","65591","437347","1005586","43392","375245","94143","472164","472026","308214","1207656","988104","366957","79954","162399","49378","46648","81150","1038433","1519471","82325","914674","99813","54757","789794","260221","83004","37765","77461","375243","288351","63277","1312954","133989","331349","472086","702389","117020","50882","132054","570009","472053","116291","57428","76908","80759","1053374","42323","108482","1396898","92961","130972","1088051","723893","89855","1614063","1255206","44037","1016001","77021","74468","166277","125386","112834","260054","134612","51639","60862","57468","282141","124709","881800","73736","58012","1313543","73764","399560","88614","486342","87077","331753","223731","229953","1146179","63403","68415","178226","472139","57312","948116","1312965","95807","225967","1706459","458130","96757","1005587","65564","73865","461110","1312974","1368066","44016","57179","1452681","726665","100643","1228194","697210","73269","45404","112925","67890","521602","650181","551021","93237","51637","168928","706738","255241","163739","518095","567039","582284","57330","44400","763720","267660","257596","52053","115064","162332","43554","107586","1452678","331744","96544","224108","55921","138102","106037","106781","151365","45030","821370","229331","51328","1095210","108613","98969","55134","69701","196195","301066","1036319","81265","1088280","80655","132434","66479","63535","1181081","60880","47877","1411698","1344043","723896","111021","331780","1327299","313917","360073","959829","94158","43994","697203","462514","1600248","73412","636800","60814","399559","939892","58394","129975","78976","693469","110699","82392","65584","229956","61461","112857","91347","73486","39124","43389","112833","153101","162890","960065","72329","53466","80354","1018273","95316","472167","314442","103144","110796","76679","70368","1698947","226677","53124","87391","1129085","97909","112930","931881","40360","37745","904505","39924","99894","54136","170185","271877","236159","105335","405825","39106","111240","75663","61085","668419","118302","40179","301933","52861","222698","42882","69981","109575","72093","225966","41984","188402","441728","96654","107587","849726","48355","57140","1146192","894828","135059","168080","67122","45515","51653","71554","54467","71392","314748","1037151","90286","69548","225957","94662","110353","650179","113221","103087","51640","122390","67786","118904","42961","611678","39880","73782","252635","93716","479930","186543","289663","37569","200082","196211","37788","110995","162333","73090","521603","1582425","112854","77944","72189","108785","51140","249521","65143","1087135","53435","64576","472011","83678","95782","702423","104188","734281","636815","65522","790253","57713","916909","59704","135215","82892","177007","1582406","49742","1458687","1095207","99944","1356653","95413","500097","1207664","472017","1681122","118037","45137","134705","84621","780019","736024","1458676","271304","548879","61413","1307397","550807","138183","1211688","688362","442390","46602","500117","71760","112920","45138","78736","235725","518079","48346","167108","70068","1501591","40066","101397","37404","95500","66481","1681116","63871","1036318","331752","494999","186549","1452674","1099667","278457","331772","815483","73446","700904","106787","462525","472022","276939","67334","52410","894831","1501590","108521","527583","54679","375247","190401","40298","314969","135457","331768","48133","69534","1514500","115059","101952","93883","313880","1436273","1224387","180694","100027","152773","108446","60435","358257","66375","124035","1207663","129929","38636","45616","827640","38094","815480","206038","95763","1344045","1582383","1099670","138054","91144","296807","249522","39878","65504","702407","115062","92421","259007","42817","858851","50652","362964","79202","41111","109923","390916","1095208","113868","428607","97256","61319","68706","239193","37506","215990","363535","79076","71155","87601","100173","73858","129898","59408","259838","71709","1514493","94479","929562","39159","40583","409634","118882","70837","40172","68250","41106","134630","64578","1368054","157174","894833","75496","72613","215844","77476","434512","49038","70835","502009","356580","129912","53757","822070","91120","62747","96473","789078","167109","325175","372112","56988","191963","1313535","611681","1614065","84810","73156","466263","488047","1036403","75062","98006","1207652","472019","44633","257881","104639","66121","44110","39649","122868","953787","376258","109374","233338","102037","58007","48942","267666","38493","1146199","281458","63448","100075","130206","49885","1366134","55136","303903","44011","1344053","1371988","331775","702388","87603","627441","314003","58708","82056","60270","1356650","40631","873822","40989","228304","51348","636799","118305","44910","117523","61668","399564","57353","682290","293137","52411","83646","1179043","510028","313609","51321","462014","70564","331764","693470","45617","81266","471989","69349","1620054","83255","86235","192042","400237","107149","153369","83491","1623063","80557","45612","37329","51641","301917","1514905","73075","270321","100029","940381","68653","73464","40311","69220","472156","90432","81310","98163","132056","472177","1315834","1005286","1409877","280285","72896","627211","804298","100282","117007","1017019","249523","78735","174365","444375","73082","196187","214255","60511","95503","68334","45333","520648","80178","185719","81210","70059","97940","153852","375269","400236","282598","116080","80367","45328","44921","85798","73417","579056","82891","518038","621685","94665","50405","59333","55040","103742","509309","390933","39158","90064","49423","888455","39926","276933","904480","601643","669979","84642","49899","63785","188498","40447","111875","509317","225959","91607","293987","105348","95811","557386","1344060","60517","98936","931873","60568","112539","75915","39345","59941","80939","260055","112999","91024","71154","113340","375253","68651","1307396","77927","67893","56117","1458688","82668","74459","270323","51510","110132","91734","72095","43190","45939","255238","78970","237182","128913","50306","91355","93713","1146166","1458683","1458699","78329","100345","858853","838515","122308","85379","56956","107543","302390","1356640","1312971","229599","376260","113867","103455","96077","636814","271876","45408","40358","1007405","56482","178197","51329","71159","66902","100679","1041418","697202","95776","69931","49317","112866","84698","37284","39298","518031","1535134","363825","267662","375275","314591","41909","51319","72948","1368075","93075","636808","1207593","43664","78618","1176420","402964","250739","91113","200969","57587","69979","424213","105687","103538","97172","71277","74681","187285","1146162","39460","1018274","462510","58982","200007","94490","780047","112928","78319","69167","1681115","51910","91657","99776","138197","49529","1451900","1417958","472034","78894","94150","178196","357854","98938","77475","75623","472137","37888","97912","40987","90151","40636","46458","1016856","914673","1017018","472070","71157","158248","78896","75057","904472","386838","471994","76899","112333","697207","1417965","693473","332164","96130","81292","54431","422367","108335","200973","1458696","122349","97730","162100","985343","83688","126197","77796","114020","1252876","375248","697208","134624","771610","123303","1179045","904508","52733","343553","94153","1396907","226679","225976","209796","51473","238421","1422547","1087144","265732","632185","214253","57991","69261","225956","200212","102257","697220","904476","548869","518033","789796","104738","98925","97788","375266","331748","92964","238415","76715","816584","95812","135673","96753","100026","1722420","338910","940044","1505018","1582408","78322","69977","110204","789077","101619","147499","58564","1312963","81121","482910","1288649","96373","472013","57421","756803","71391","69242","203290","37731","91392","162285","669963","301798","78946","838520","286162","702412","472029","124336","270938","1417960","394203","125069","75810","548870","74934","1772312","1382595","128640","40841","74455","51142","196190","472084","77185","45513","204397","105690","1215157","919993","55963","906891","858857","129915","472087","635748","39108","106833","777037","84020","79193","40085","214246","70372","375280","57356","61197","91749","462520","53889","100423","55554","268657","215991","84023","237738","472106","1458692","129910","79241","1095209","112835","42432","1093140","200003","762594","1572508","479931","503407","347926","375239","91026","859653","399899","191369","1454014","134611","641146","129932","668421","88581","37416","199819","138207","591244","67285","97162","132438","40261","42237","591250","78533","68661","496670","168905","74107","43766","462518","170135","61762","972829","80941","191967","109375","134636","1505032","91590","136394","38496","73183","1527416","451870","472136","103081","1181082","45611","79188","70022","41107","67855","195700","106337","99265","276937","100072","255522","92880","1099669","175914","919988","734963","206492","73084","82803","37137","40844","157812","69168","53748","213384","1772593","904474","39349","375268","115733","627212","1706463","248395","697194","40663","44063","472097","127249","110211","65144","76905","229954","1181083","34783","79353","75088","100894","74767","789800","71331","113887","131090","85860","118307","75068","92878","96139","814678","1454018","60583","1017011","346290","368148","58306","535629","1329186","834600","90788","509319","280280","80357","232909","243836","113419","112931","120792","113890","52863","283361","131604","409635","385609","99267","57354","42372","1455630","78352","1582400","38261","93109","72212","78218","108313","42637","112922","271872","270397","138056","236143","271875","67925","84022","225941","93936","496388","388628","79518","471986","105695","99908","95777","1004827","118682","96658","123794","613010","112865","108332","472002","225945","57355","331334","195682","1064469","39372","72610","45132","461878","80355","1601406","703556","56266","466340","68197","57070","1071710","500094","242305","81290","591223","446787","622002","1018278","128329","101954","1378611","57854","42734","89802","51806","93989","298586","91143","996799","81454","96550","44104","71920","132448","636797","110715","97174","52070","78224","196193","914490","518037","110720","509310","46579","1015841","94900","104431","793564","39165","472098","593083","406859","1411694","1396899","289653","91455","229606","1417956","72347","204952","687430","66870","72326","72323","82237","124369","38631","193955","548871","104512","68718","61435","74462","42963","71987","472105","230153","1411687","201958","69537","69707","740393","258879","929563","80368","196207","1146186","191966","80657","79190","815475","204243","135218","301931","311332","65757","1036398","199662","78220","1382599","214480","1382598","1164424","90088","462536","75118","55585","203344","69259","150242","1722425","1053377","1620061","39923","1663774","104563","1435439","280279","75979","81363","44379","498974","89911","67564","86849","81878","343544","591219","126544","38091","255069","85111","91918","49422","888463","56108","99992","65609","48555","71163","90281","1207667","52860","472096","331771","75894","65033","311329","100323","36092","233963","47984","87344","674847","360006","343546","135077","55262","197882","38646","100506","57419","804295","852175","1047981","693468","68339","75655","40614","285605","994069","84021","134623","80414","1120776","799438","77939","101332","1368061","65610","702413","462522","472184","94126","42331","110802","92118","82667","462533","77477","97490","593082","343549","68509","80748","127243","131453","135075","203169","462538","109014","372602","255496","827639","101902","131601","153964","69549","816587","94887","106327","208741","591221","58069","1158262","1489593","1315845","58395","222692","500101","103821","108518","1120762","55583","1395582","1387346","48352","75657","103148","40362","79861","815477","77525","51362","108000","45550","97432","1458706","1600250","73432","200076","37335","67524","735907","41087","354668","472179","70064","57896","39505","136393","44042","237742","42293","96282","702397","1288648","762608","88384","313883","325170","60271","73700","73152","856332","636817","46763","1005292","370517","1582379","60848","125882","472121","99897","124836","325194","1582416","376235","1368068","1535135","222690","43189","129907","93556","49548","593383","518030","59376","591235","167111","222782","73430","49377","289686","118289","58021","130014","51647","131602","65002","91140","134621","163740","1207661","83855","96481","39879","462540","43860","112536","74470","679618","269118","711199","1411693","1181084","118298","1329184","37282","96963","99906","96780","96777","1458680","471290","56096","386841","1005289","697612","44951","280281","101556","331766","1088053","61083","1095211","409626","1336194","113956","93957","55922","82395","919984","43188","1422991","42179","40509","132536","250400","77940","89448","1053378","225977","145331","78227","472117","109414","49901","135671","449998","124361","99264","82055","366255","189403","226639","1582428","113866","94484","65587","117000","96455","135363","1120769","1088215","43858","428603","1053568","271865","72603","331329","128336","1514494","51700","1038443","1743322","1505026","1129082","591213","98939","41110","1582384","170133","95489","44315","1120774","98017","64988","1411702","76728","1146175","200083","200688","163760","162898","72798","46527","76056","104421","53430","51316","325087","105860","243017","97911","75231","138203","41466","37402","75277","472082","762601","73877","789089","82063","94667","40921","88382","252175","1224385","55039","65395","1681123","280278","72097","92835","804297","439142","94990","57908","97161","360007","91354","238423","39157","97590","103207","72582","69109","858855","331338","70942","59706","472008","46461","83229","1005275","203282","53119","404958","364256","49794","56954","76255","42046","58113","118288","98020","325172","92155","1504272","1130077","229959","1356642","522320","37863","49543","70043","225958","428606","113858","59299","697227","38641","208722","75117","80516","58054","619537","416684","145329","57809","162862","669966","682288","97596","270393","96269","108340","98413","96752","295746","128076","62592","331348","222688","641138","96483","225961","613007","49420","37883","702417","1126615","217017","314586","89421","69164","236146","74126","1315843","1439537","168906","56537","72604","498456","888452","1120775","838003","103086","500088","482916","350276","914682","60554","942119","1207672","401467","103196","111623","98657","56534","103211","99275","37285","55092","55928","1452670","442385","87296","1396902","241233","389250","91735","289673","958478","405883","814680","79182","636807","914677","388566","226770","112541","38559","1423009","839722","1356107","91588","37991","44901","1291011","200011","115532","1750623","303901","187284","331798","56047","108293","217027","132057","123471","81182","84930","471996","1001931","52069","736023","85887","519507","1681121","43636","388569","1620053","53890","357557","226633","135753","96965","1451898","376519","789799","76903","996797","110794","1066901","118920","1082231","789798","114077","295747","237740","286987","88991","369099","37772","91123","134601","77918","1043436","76291","205448","263999","135677","472043","84942","37332","96132","37972","756872","510030","225965","550198","97166","1706474","58735","1282328","90980","294010","42880","278460","85493","96579","95430","76683","130031","37304","1450319","68934","60512","130057","39447","39573","168077","39443","82324","1582397","472067","94639","289646","95497","130442","77245","83651","799437","53405","49383","39646","103194","98660","89451","82536","43995","61757","1005278","112778","63405","285608","91280","88580","84986","49166","93365","61258","932610","56524","109176","66964","276932","94731","267095","96073","94888","59709","67919","100344","200967","116891","102255","1228198","1176422","360070","763724","1582426","904473","1307398","72001","138202","57500","1036656","85069","38464","208367","856325","80104","375260","1455661","59771","100680","125872","1344047","97939","166279","102309","58072","94488","61764","45412","62880","1382593","79195","1005287","288349","88383","1489597","59126","55178","139764","130962","1120780","82256","64577","71329","95425","110905","131326","92949","56104","319832","472147","89415","70058","163021","225937","265473","697205","101331","471983","116287","188495","472171","1517911","964933","38096","70614","1103939","54624","325187","91915","356074","78211","69171","87343","756873","131329","252653","929560","81919","53433","136235","1368052","1176419","118287","37225","285607","73268","107554","1717686","89528","73083","1700791","257598","242560","375065","70067","494997","225968","521599","214249","118681","186552","163758","472178","83023","44902","500102","71330","518032","52140","677341","293817","34785","462548","63466","94084","132446","103287","99896","55574","88654","94016","67926","762584","252638","76475","106841","472820","817294","1312953","492895","99276","128558","90280","1582420","285610","97248","59495","908189","94492","60260","257178","117014","472203","90443","59230","888459","57469","107007","111552","249518","250392","110038","81936","1483720","41929","68655","49743","60845","81264","472080","472102","94015","75959","99983","238638","229605","51797","153102","1356635","90248","343556","99898","75098","130449","56637","498455","84623","122691","567036","145508","73876","237646","1038446","129911","39011","196122","91684","1088218","697217","472135","1176424","51404","1517909","518094","509311","280284","74449","1514900","110358","1223672","84162","518084","55094","44819","229596","80769","263989","110172","669969","50725","521601","134633","346288","424214","41937","1051179","91312","47087","53431","697192","45139","94157","520647","89450","39163","1018276","105858","94481","521418","40848","98480","1516886","115063","77280","1329185","51013","54627","343542","127151","225354","40660","888454","72087","954132","76230","674844","69266","79187","95476","118657","91454","68658","96574","1088216","41359","54470","57827","98330","1620066","103197","112997","533453","472206","186546","311320","1005270","73998","124040","109572","611683","94085","104301","1005276","73414","53090","74457","96770","58879","90279","162575","41086","199660","91904","90226","82660","71261","1368069","85440","1018295","1458690","63558","118032","79935","41083","209087","260537","72599","80209","472129","72780","1015842","189404","548859","73088","325195","611680","265729","44903","1368073","55575","118299","99902","109021","111261","70563","203285","763723","91122","1514502","423820","331337","372058","78298","90441","725415","107390","62415","55439","39648","131971","1158263","271868","63942","77922","1722418","77020","723901","95414","43439","72665","1458669","763714","422370","128484","69730","1322469","62288","117524","83721","42844","472145","1063859","777039","1505020","103146","90224","100639","135462","1722412","693471","124374","366249","375273","102485","40450","1044252","59849","204954","804300","601647","276936","1368058","369989","94140","140545","101333","94736","195685","229607","439141","110203","49852","815474","839694","636805","113001","38295","331792","59323","92832","619534","81762","97169","65278","1037021","124372","48557","79020","243014","44374","1341745","1450317","132433","331746","132444","1066896","39442","203288","372535","794006","89538","1458703","92763","84024","1065031","81152","72608","314438","1146190","106558","697221","73444","235653","72286","84918","1069352","59715","763719","118677","1490843","804299","112831","99903","108329","48551","54758","46522","100046","79201","93071","200081","1275116","233188","37621","67985","295750","89518","102038","1509643","98018","87602","80768","521425","42332","52137","44001","59747","42638","57331","34784","1508791","43655","72605","47095","77462","97168","132429","104401","296803","50113","313876","98572","49167","41339","118680","1452676","77921","54756","375267","472037","1368063","51491","591243","1063865","86324","126195","94139","120788","1356644","519510","67120","69689","464960","269125","138092","43689","52563","409637","1513803","242579","38095","1501546","123302","138204","623172","301924","70375","60916","98767","370518","96538","1120777","37361","96543","966907","111625","1146169","270401","109130","139767","1368070","496669","53800","1382597","90358","39925","132430","342378","42652","97160","78663","80597","65526","278153","79427","788566","1483721","63424","740247","40922","50880","47687","679616","132053","350277","958471","363533","762597","104400","338508","85430","1582421","84997","110714","78226","1514902","65754","72100","41098","178194","636818","75275","42045","42629","1458694","117950","129890","63943","1778123","51353","233334","116051","827775","72015","1382602","65586","57423","112542","366252","375274","85770","186548","51492","81080","593384","96775","81369","1146189","619539","100642","789075","777041","116872","239191","40281","110445","472005","250042","124043","1095206","503947","368622","53949","1064681","289648","375257","45814","1454389","265591","89517","1228189","77917","1582403","530429","97478","96547","325084","74267","510032","80757","518093","95435","472006","116070","43747","129973","53467","96967","136405","814673","267663","1681237","388482","39026","293452","1454016","1501544","1207659","58734","52564","804301","59228","92981","57800","69930","37620","1313532","72107","368890","36091","243266","37928","108321","47096","931886","87355","189520","135790","1146172","67523","110457","48620","1722410","112537","789071","110356","91224","225951","1582410","90431","168909","74497","1368056","520646","59752","568153","225947","906183","925244","551074","37749","1005279","97513","203217","1001930","814669","39084","44375","61393","110372","100139","75092","75096","904479","73338","37825","700903","1458693","68370","97503","80755","1341427","697757","838519","44062","1519469","56933","48950","74381","119830","1146176","894829","591217","73784","111013","242223","1566089","1535137","750988","375237","464846","61760","204960","252785","80761","47852","1745353","65644","81259","98196","95418","301915","616339","95436","472033","1582407","1582405","85116","72870","112423","471287","1307400","472113","296804","43993","56636","931880","437375","75113","790182","996807","86239","83003","136640","129871","191079","63451","105120","136074","216763","779995","46774","105338","472114","1581200","1582380","122354","956669","472079","194884","370883","1039823","94482","96160","98795","79850","931878","1129078","1489592","99478","1017012","84508","1016874","230152","1312962","314587","51475","39029","1681117","700905","702419","196208","93364","113653","80358","331754","849725","111048","1005277","441723","940038","89539","1417966","39368","1458672","69983","84625","153948","87689","100388","96582","195683","96453","314749","1458702","263993","498979","236173","58961","101187","270456","894830","63556","57106","99812","101342","73335","497513","277709","138253","350274","177008","62991","84033","116074","827773","48123","105875","1396890","991313","1472695","93151","101550","56106","358353","37012","472023","97512","122551","104404","697212","88053","97492","128559","195684","1458668","1083350","93097","1505033","88566","43852","57659","136404","343551","240280","286886","100606","1020669","40176","50112","63497","79186","50738","101582","44624","331700","122482","500099","289670","1036312","42041","97657","80159","56265","472128","343538","91060","57357","1489590","500109","196192","39012","1037022","81209","66783","167064","196127","44498","239186","84042","331784","425322","548872","186550","1005269","81206","472187","165154","39344","50240","76573","168904","73429","217022","736124","1344041","203287","477975","472025","163762","84618","1505017","116876","75994","51009","850627","1176418","96548","641142","1047980","1085685","242233","1581199","83256","462519","57909","95779","77166","129051","72881","92064","619671","83642","139655","1489595","89221","375250","814663","110911","124370","45136","92119","97254","77926","47925","669962","95783","472056","513157","38157","474823","838000","762589","593388","180693","81567","279669","42999","96779","135074","57254","117005","250396","333705","91589","239187","131249","395051","138192","129108","41140","56109","84626","96065","135078","63057","472021","472138","237636","789079","218729","1344038","122870","124373","91223","67408","702424","62287","939887","125514","52135","167069","49161","888460","102028","46012","470465","96069","1620068","107909","1038432","71768","343552","1582432","1005273","92881","498458","113225","152775","116873","1582374","69056","496672","48416","84977","543706","68371","118317","814757","299291","821371","395053","44998","91013","1126613","423825","92960","472194","88572","78738","309919","97413","91611","91338","59764","1452673","57253","68645","325158","1582402","94154","301887","1505036","40666","103212","747838","76207","108884","101647","186558","101560","1582375","91118","635754","1716280","255068","462513","422368","148292","472166","815485","55580","107544","113957","117948","66611","45562","797990","686055","241235","45007","1417954","98655","225940","1411696","461112","1231077","398304","636816","70922","1519468","75090","44917","1093114","158249","1341743","48947","313879","97942","271301","135065","124526","87863","591212","636819","1582377","43546","64575","117011","40984","357788","1075456","41938","73416","80366","40842","40847","195698","38294","1582417","1706464","83577","86379","55561","83719","60101","289666","79136","41926","56498","1087134","814762","60274","78979","567030","187991","121399","931872","61669","226685","87431","366958","1458670","124358","1131717","139763","387223","1356641","53120","118914","61755","548861","66486","54162","60275","60514","61394","63052","1582388","762975","58439","43987","81149","815478","130042","105330","203286","61134","1047582","1228195","65582","226775","255658","43988","186551","40988","852088","375261","40356","1461200","42329","73020","134603","929561","60266","110205","81109","135062","135222","89914","1706460","84321","84975","1344050","60683","229955","48336","388627","994072","1120766","39086","187283","1772289","301885","1005280","199661","839723","239189","204958","38564","1368076","145363","1081358","76202","447333","71989","87432","115068","363534","416558","1514906","74155","956447","126281","375081","96675","131105","325023","621686","1582393","37415","108334","1228200","702398","76708","1038435","222693","269126","95800","1706471","472176","702421","65605","496800","662071","1036399","526814","116867","65585","472072","53836","80433","200690","257590","958470","92963","97597","97661","48495","37865","40659","101341","1716286","1036651","59227","116067","1004826","186203","88577","263997","1514496","41079","896329","332810","1452680","472004","472001","723890","375279","477479","138200","1083351","98934","244777","91754","331797","43555","49848","101633","64957","75106","87718","254558","129894","52562","186560","68719","38781","1455628","81227","78535","1592665","77938","462526","500103","247515","42840","69402","80356","109459","1036401","135730","1536355","129895","471984","112777","265592","74730","209795","61434","103143","133776","60507","54472","1064655","39444","112927","996798","994013","66639","63422","135806","76199","80364","56953","77931","214250","75115","38498","48760","48940","55429","135072","702422","98021","74690","1646897","1582422","39677","48345","462521","931891","81137","72869","96955","1088052","82526","225953","681051","129922","91393","238419","131969","37011","81291","92956","107434","368623","246494","591248","789086","97165","98669","51651","1411689","958476","232915","1207654","195680","95496","77508","472107","804294","37965","591215","98649","286160","265590","178200","101085","52072","76723","70839","66965","39890","723831","51325","91117","95825","92152","74600","101548","73163","61463","95809","212137","650180","557388","331758","593380","94142","71763","37384","82394","1013015","97787","95002","112798","69085","79961","1083354","56630","472125","226954","1558739","593382","111626","42226","55363","278155","65285","102248","108330","1514901","462549","41357","351479","1454388","1223673","73470","72760","105382","501151","162863","301929","267667","138101","101648","65141","325193","237627","1315832","106681","472003","61320","1422542","75656","1628455","118034","579053","92668","67005","1489591","131733","325156","66485","1368053","52058","124708","129930","1384321","50704","718339","1038441","1148449","119247","73337","269127","259008","762590","196138","108292","1312959","118899","364269","37327","1368062","311322","1147177","73100","50649","131723","331755","939888","101338","85659","238637","278141","70114","932612","76902","110998","100028","60253","117682","60863","235279","54226","104644","38296","202267","1036313","1315837","77930","41484","83852","99836","405886","81122","71461","331807","814668","449817","263996","130971","58393","130088","232916","479928","107100","68933","42326","66638","104510","76192","162335","39930","97732","79428","313444","203218","36372","374398","63234","161459","94475","1066899","43096","288609","102375","1600246","288350","83429","105413","548874","1055250","940042","103042","87674","94156","50272","98350","311331","130977","1411691","723897","82776","135365","1063852","75976","92372","77019","1063866","112421","129111","105692","80603","72190","123472","213889","86848","96915","780079","263198","229958","42043","482738","1126612","269117","1652975","343555","797991","1083348","40194","1207666","74151","49547","69702","55557","622004","814660","104402","98195","496387","84987","53142","37274","56095","74439","1288651","247516","44380","43393","95404","135465","1396901","67608","110719","71307","116896","65400","37785","56099","1514499","1454015","110030","1207658","97854","93543","520645","98352","55277","472130","109925","914685","82036","84030","117525","91408","37330","167850","271874","1582437","702396","448013","446789","217018","1722413","1036655","241231","118895","1038445","51494","55410","130049","76052","472126","1017020","88565","226674","148452","679617","1097848","919992","406449","472010","94669","931889","100342","780015","509313","940047","1120767","94078","702411","60277","62571","472020","69267","65399","1344049","940046","1382594","59770","1716273","1041448","200683","311328","521422","132349","105559","1344059","48876","65615","132442","650186","472076","226774","238417","222781","61583","38557","45044","1315838","1389866","229601","63709","702386","39247","1628449","1344042","548860","474712","125070","472007","1505019","723892","441617","1455627","180690","99905","69078","58266","1722422","240294","48956","1230687","92952","129986","500120","105226","130969","50657","42941","57945","228070","125892","472202","206462","461109","208810","87397","138093","375254","40448","301927","98654","73265","51324","109131","1313552","636811","1126614","98665","500115","1129077","130032","331332","236148","41275","227388","1535136","1582392","285604","105924","1129818","43999","940048","106783","59080","85152","51318","49900","78660","1176415","1102667","66478","75101","73978","1452668","41930","72419","39769","130061","108336","200006","79197","186204","132426","213387","107439","118290","232913","94677","635752","939893","41925","69985","100034","814761","195696","1706457","51809","38640","65562","229603","91339","103356","90979","81261","364254","993954","67889","56638","914816","76714","71262","145499","500086","136024","93150","113863","325173","69980","53427","110026","73248","43149","1088140","97910","99943","113128","344820","77943","257589","313878","697226","996811","343531","1324574","205624","88152","314751","199659","69079","87522","509312","815476","99909","85881","50653","40357","63614","118683","94674","61635","1777452","931875","222691","1356634","65612","82397","49902","79938","1505136","107294","71999","70046","37287","289688","84130","289675","388570","202266","96454","82469","119051","61082","233196","79955","376245","1458705","668056","378053","1207662","37966","92482","46647","280654","347932","75851","57081","192041","43868","91659","48224","60171","929558","80370","248186","79183","942120","635751","41729","387222","200074","531010","73868","79177","849724","395054","117139","288353","45410","80175","636801","1399249","630797","75989","133276","76907","1396908","130017","118309","53755","734960","195196","472075","212134","563452","360068","80359","702385","49871","343533","47089","49380","54625","239192","471999","105686","80085","261762","107046","174325","41970","124535","472141","113999","90276","958469","46649","111010","112998","71722","75095","110785","120790","1396894","226683","66345","1059578","81309","91655","94192","72327","124363","106884","98796","472074","132441","1582389","372055","105691","56795","79196","39495","77933","471991","104645","42606","51297","472160","1582438","71041","188504","636806","123043","1395584","186541","472068","90273","1174397","462535","1646931","136523","62286","437349","734280","196188","49545","153957","1004824","1312972","252631","1688588","68455","296805","814677","75443","1017010","46928","50081","87599","111959","60304","1693696","388631","60550","39637","269122","70069","42823","1600243","916993","106725","45512","404959","74543","1036394","619538","96456","700907","41091","56094","113420","91656","224026","214251","492896","128439","83002","120628","283342","479927","348502","120477","1417964","653930","116076","1681183","213887","103441","331336","264708","92156","122715","76538","269997","441718","92065","289652","212138","72332","196130","75357","449819","225935","37787","132422","697215","389251","67858","48954","65561","1005283","1458677","301888","109729","86164","55426","131500","69268","187280","37868","83815","331347","472200","514852","237181","61199","83006","780014","521303","838512","188501","269129","358064","101864","121118","111876","106842","68730","58051","71761","73179","37331","62992","49891","100471","38009","518090","36090","105865","111399","649539","44948","215386","162282","37866","472088","1582395","77168","94884","93702","110131","697216","49318","74660","106557","96657","233333","1223674","106368","366250","69405","40051","39295","1080516","95409","423816","1397588","1146195","101636","840364","70024","64444","472132","486859","52141","52071","780017","175915","57178","71762","41985","46245","59285","51322","96066","73445","331781","89912","190698","218731","519511","96776","90435","127316","86160","430857","67550","49741","127214","1339228","111873","98518","111006","740249","567041","78794","56486","206317","96071","1063855","81221","153956","91752","325025","48368","51360","1129076","325065","71462","201960","1501545","42327","112548","1146261","1277085","42042","105174","780460","1129074","257594","36069","1396905","697214","1706479","49379","133993","77015","72225","1036396","121397","200697","1706478","105862","472181","115601","1146187","105637","514853","200695","472051","494998","116078","697204","48556","110029","1582381","367343","497995","1522954","75660","170179","1037024","1722419","131374","38638","331779","81132","69352","99911","98976","540324","1313551","48417","779966","87366","213389","49375","37217","41969","48553","579369","68199","849731","931890","814658","383023","44740","82380","45813","48031","260541","921796","301925","203860","343547","105103","187996","650184","110795","779993","331045","99982","301918","51454","1043471","921797","100641","233192","75059","78659","311327","270398","87075","107071","442391","1223675","54820","331750","55556","161093","375241","111046","68814","289658","905407","375263","70831","76755","360069","129979","721775","1396893","59497","41713","1516887","165846","98714","161025","132431","500089","373705","116064","44504","286985","42632","286986","46460","129906","822697","42841","112996","200964","57464","225952","37885","106146","1064683","73400","92836","1036309","331326","1396906","90687","940040","104513","1017017","567026","343554","1489599","112926","151370","267658","343535","106683","37358","472190","108147","57657","73160","370887","779999","200962","111551","135461","39459","191081","267784","75652","68256","100031","39150","521420","200008","65003","1490842","176193","63462","75181","37841","498714","331812","636809","233193","289691","250143","579054","97474","548867","994071","129289","1494102","1501547","206431","919986","242236","281457","939890","479929","103825","1038434","37111","42500","101974","77950","622003","286159","67050","904478","42435","375271","46054","858856","97494","56484","688364","257599","917937","40601","116871","472031","55932","271305","360067","1458691","1437919","1005272","702420","779996","70373","1050061","1156747","41246","237634","70562","636794","313881","577765","98658","395052","42468","129872","118893","83022","101339","89542","1130082","73932","133992","40171","108312","285364","187992","153098","149307","48941","238420","1275115","94675","44949","37278","89525","57191","65904","92414","702394","83835","101249","462512","136403","119831","1536356","243018","1053397","201959","53434","72581","479926","448014","1341742","135674","87394","331751","64121","118035","96068","376257","79828","1066900","39353","44623","1174398","46526","95444","196194","50651","204955","462544","60513","76685","200963","196191","641139","822698","844207","98165","127890","677340","68254","409630","762605","110803","72002","1482988","110025","231944","65606","591216","85826","79192","39645","71996","75124","131376","98663","472163","252634","1037029","47851","1037019","51652","397011","70746","248191","78895","53121","110044","122201","126282","734962","375277","90429","91006","1368072","105761","87395","442382","76713","86240","49416","60843","88156","39752","169526","1075457","73409","702393","249520","70558","52055","59052","1038436","85110","107558","250393","108618","1312958","58053","1582427","65604","42940","39730","72363","462509","462531","61460","693566","61384","116292","124036","82323","105765","96639","60745","208723","217025","116877","1063861","1452677","102066","85800","68935","39296","110837","68454","59297","762606","129919","89418","331800","238416","79191","87043","425320","49316","1085686","530426","116863","96408","213888","53428","682291","99736","70045","269124","1329188","122350","1514904","78323","37730","61136","276935","274379","97843","70377","119867","367344","233722","138199","98008","135808","725416","1079828","76539","577766","472185","44447","68807","325067","85549","62526","48367","76579","1051178","212135","93068","40296","41085","134622","77937","168079","41272","37286","815486","285367","38554","46540","81951","178195","111629","58070","958480","72381","100335","838518","67989","136167","69166","816585","42863","709758","73869","36373","81130","123044","138195","441616","723895","1041432","1315840","271870","110709","1533028","557384","75893","79741","124682","59708","48419","908459","593385","1439534","472115","789070","72960","51452","65444","81141","286161","102793","103817","702414","145065","567031","69982","56500","1458679","128344","973980","885246","76540","49162","495000","167112","44952","1036471","1473393","839690","1582390","83694","52970","521419","111416","101337","856327","47569","1065030","350273","55440","985160","56804","132440","81269","57910","1514498","73448","1231075","375281","39168","462537","78328","702392","42898","785453","521423","77319","226769","1146174","72014","119241","77936","838517","63245","238639","61433","149305","132058","119918","500108","688363","472090","719791","1356651","1591710","135064","73340","132424","472073","99183","1036316","53858","418349","95098","667995","99270","472078","447330","73101","257588","64573","78324","914684","67990","593387","186199","39579","55278","42044","72612","1505021","325080","58878","1315830","1228190","65603","71994","267664","59760","73431","39967","441724","37010","68743","108858","104445","702400","1036310","101213","89527","357739","59758","144106","458128","53123","134617","135675","131328","133078","42290","1481223","37325","110209","79189","77925","1716282","1287882","151360","44058","100729","65614","112531","87721","40117","919987","39109","472168","218730","270939","51011","208247","472092","492897","76572","37004","50309","1396897","111008","105326","45008","828022","72670","472091","500092","84032","37748","60516","51320","364897","1093113","1368064","69092","51453","83770","208720","472048","550809","472044","75359","61395","289678","52074","837999","239185","497408","101635","1051177","47076","94737","112546","852089","314002","73471","75661","1037026","502011","288354","131725","94240","405891","1129080","814659","91284","1036464","79361","472083","697213","42821","56979","105171","93545","41089","96307","97514","191965","41216","44064","130974","42193","84614","114255","112853","42721","313875","226669","90437","702403","59079","814671","128482","65509","60264","178340","49869","47566","200685","370993","65617","289651","289683","82177","153959","301805","84624","378036","69058","85495","1088281","472030","108341","43287","472101","107041","1436277","1706476","777038","100815","186542","73271","41141","55657","61084","56029","40010","1450243","331701","51012","67516","816583","54759","38112","65756","129899","108451","904475","233191","67856","68458","46024","40892","919994","67992","472095","797989","124037","257586","49384","186559","1038439","94152","106831","41084","277704","130978","56535","49883","81366","178193","366361","112929","101340","269800","96755","123045","113125","122347","135672","100638","109136","425601","1432740","82468","372056","208267","1706461","65607","203983","697218","121394","500106","71046","109088","55559","229960","208718","1482989","55558","80365","1582386","1174394","636798","472081","1344054","1452679","325083","376259","804302","96656","38645","52138","62454","441727","71316","1083353","290506","270392","233332","112852","500113","1312955","368149","37093","55914","1624039","120756","636803","1722406","255495","237741","285609","958479","1233192","75135","591231","44106","113869","98935","75651","78661","43397","39534","236241","87720","789072","113126","263998","73934","75622","449997","71380","591241","240290","247402","693472","822696","252633","38644","81111","95985","249524","1706458","1527410","688367","289660","48223","96659","252119","95410","370212","208724","591246","472000","135217","56101","39636","52857","84510","91751","1211690","1681236","76900","135458","98016","39641","293457","178192","45811","212136","904509","84617","39635","464847","96541","56107","366726","814682","77947","1109707","97511","50274","1706475","1411690","91119","77463","1320334","188403","958472","244780","375270","49860","92944","270453","51451","120791","87690","238618","267661","1411699","1411169","1036402","204961","78026","44025","250398","100070","762610","58020","325022","44038","49333","789081","81145","331328","71383","112532","131720","95419","42322","611677","109730","70561","70065","98666","471289","81637","1228192","65560","109772","63506","72348","518091","49105","39993","118304","87392","60100","591234","814665","56955","138095","229600","59710","79852","39164","44381","81211","94486","107402","405887","110919","95428","1103938","842507","91946","78737","488046","39359","80369","90442","153951","188502","95813","98535","89163","77941","929555","91453","425363","42998","225936","49867","57811","472036","38416","109089","96457","388571","65634","200694","166280","842651","1312968","185291","195699","187282","37288","77928","1172870","96660","1489594","97175","200693","673783","303902","111394","102041","70378","565653","222696","762593","623171","74471","124371","89895","263225","49315","849727","73068","225955","80750","100732","161461","74448","84756","52412","213386","161717","45169","120789","118292","217019","815479","68382","55560","650182","132563","108693","132427","1489598","1505027","78534","265728","149255","1582399","1036392","1450320","996809","1436274","1153645","59128","591242","122309","72214","48340","113421","37751","1581201","1146183","98667","203283","462545","301921","67857","59705","313873","250767","1396911","58008","38111","42036","686056","91472","91917","51472","894832","100645","217016","343548","518092","301926","99933","518085","472027","112530","72320","57810","80105","59703","49998","90247","44096","77344","230349","972830","591240","353684","93743","132060","59083","75947","49549","971425","68248","118679","37219","88579","135757","472134","62990","678267","106784","104442","42822","43853","43552","96078","535691","71382","73236","88379","130013","472015","472133","80020","1582424","47918","77167","70376","129889","370884","115067","789084","269128","65282","47251","127152","723894","1087143","85550","1464289","994063","55428","474713","72216","57429","282026","59197","95797","105685","107148","131383","472038","110717","1120768","129926","325155","702391","211915","461111","789076","75122","257585","44384","703800","472120","49884","39441","113344","70066","70381","106830","69172","217028","442386","95421","498457","65563","88567","849729","43651","48013","92834","111388","130036","37968","301920","63557","46542","53092","567027","814675","814670","138194","38087","103289","112230","437350","200075","96964","134637","1458675","221686","38643","1207653","68731","247517","95799","263995","439143","95488","38290","756806","73177","905406","72947","55570","105636","409628","518039","500111","560534","97163","212133","425321","100037","85538","73785","57948","93547","1582436","111400","95432","386846","43547","447334","1535140","208632","106090","91032","161026","591226","518034","60927","99864","71991","93557","762596","780046","84615","229957","931883","196125","1036654","89540","90889","70943","71260","67986","68435","1075455","346289","314437","116073","51332","1411685","48418","115054","74494","68255","81368","206493","38066","92418","447331","856334","1681124","1273630","1053375","75848","73474","740251","688365","1764653","70869","37366","55506","67987","106619","92413","848343","1458704","398259","1559483","136634","125877","567040","69896","43208","68247","114014","200004","799435","50410","130986","59158","110786","145330","51808","80353","175194","914680","105230","611538","208721","40195","72213","849722","669978","71691","233190","1129079","42936","95315","37009","1368055","270324","94738","100047","60955","61194","92896","97941","250394","59196","71328","116890","74154","60847","472142","60261","54469","59757","591228","69932","107389","565652","45370","835848","1038440","40661","37272","75133","1432739","63423","472064","139645","145352","814664","93551","325076","69950","384087","204962","196210","191077","72598","901212","128483","186557","128351","57993","1036429","550810","77946","859655","73413","37275","1231079","123787","601644","366248","472050","663109","498460","95099","90439","97599","985159","48415","471993","1146177","780016","120755","81589","81528","49861","104290","67792","110793","46263","1628454","472052","102250","1146260","669964","57180","271550","37964","67988","375242","1176421","214481","217023","37003","56527","180691","115423","57053","472018","48951","424215","65778","1396891","83166","107440","288447","649541","118099","472039","817293","39027","65279","75119","88568","37289","1582423","368147","200968","51327","60094","311321","153968","653931","255172","591229","56523","42944","153943","163761","58733","110201","225943","318918","96070","236172","108005","76581","84639","107070","919991","97733","119238"],h5={models:f5};const d5=Hr({name:"HomeView",setup(){const n=W0(),e=G0(),t=Pt("page-"),i=Pt(null),r=Pt(15),s=Pt(12),o=Pt(0),a=Pt(0),l=Pt([]),c=Pt(1),u=Pt(!1);Fa(async()=>{if(n.query.p)try{c.value=parseInt(n.query.p)}catch{}i.value=h5.models,o.value=Math.ceil(i.value.length/r.value),f(c.value)}),Na(async()=>{});function f(h){if(a.value!=h){const m=(h-1)*r.value,g=m+r.value;l.value=i.value.slice(m,g),u.value=!u.value,a.value=h,e.push({name:"home",query:{p:h}})}}return{activePage:a,initialPage:c,maxDisplayPages:s,paginationIDStr:t,rerenderModels:u,pageModels:l,numPages:o,modelsPerPage:r,modelIndex:i,getPageModels:f}},components:{ListItem:u5,Paginate:hf}}),p5={class:"general-container"},m5=Cn("h1",null,"3D Printing Dataset",-1);function g5(n,e,t,i,r,s){const o=Fr("ListItem"),a=Fr("paginate");return je(),Ze("main",null,[Cn("div",p5,[m5,(je(),Or(o,{modelNumbers:n.pageModels,key:n.rerenderModels,pageNumber:n.activePage},null,8,["modelNumbers","pageNumber"])),(je(),Or(a,{key:n.initialPage,"page-count":n.numPages,"page-range":10,"margin-pages":3,"initial-page":n.initialPage,"click-handler":n.getPageModels,"prev-text":"\u276E","next-text":"\u276F","container-class":"pagination","page-class":"page-item","active-class":"page-active","page-link-class":"page-link","no-li-surround":!0},null,8,["page-count","initial-page","click-handler"]))])])}const _5=Xs(d5,[["render",g5]]),x5=V0({history:i0("/3dprintingdataset/"),routes:[{path:"/",name:"home",query:{p:0},component:_5},{path:"/detail",name:"detail",query:{no:0,from:0},component:()=>Al(()=>import("./DetailView.263dc6f3.js"),["assets/DetailView.263dc6f3.js","assets/DetailView.2849c09e.css"])},{path:"/single-detail",name:"single-detail",query:{no:0,type:"stl",size:"s"},component:()=>Al(()=>import("./SingleDetailView.9da0e964.js"),["assets/SingleDetailView.9da0e964.js","assets/SingleDetailView.49b1a5b1.css"])}]});const Ka=yd(Ud);Ka.use(x5);Ka.use(hf);Ka.mount("#app");export{Tt as F,r5 as T,Xs as _,Cn as a,In as b,Ze as c,Hr as d,ta as e,Mt as f,Pt as g,Fa as h,Rs as i,Qf as j,y5 as k,je as o,v5 as p,Fr as r,si as t,W0 as u,Wu as w};
