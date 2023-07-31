import{_ as R,d as q,r as V,o as s,c as t,a as n,t as i,b as d,F as p,e as c,f as b,w as I,g as a,h as L,T as j,i as B,u as W,j as O,p as A,k as E}from"./index.a6344696.js";const G=q({name:"DetailView",setup(){const e=a(1),l=W(),N=a(null),_=a({s:1,min:60,h:3600}),w=a({mm:1,cm:100,m:1e3}),C=a("min"),g=a("m"),u=a(""),f=a(["stl","gcode"]),m=a(["s","m","l"]),o=a(["x","y","z"]),r=a(O.urls.thingi10kurl);L(async()=>{if(l.query.from)try{e.value=parseInt(l.query.from)}catch{}u.value=l.query.no,await $()});const $=async()=>{const v=O.urls.baseurl+u.value+"/info.json";await fetch(v).then(h=>h.json()).then(h=>N.value=h)};function D(y,v){var h=0;const U=Object.keys(y),P=U.length-1,T=U.indexOf(v);return T<P&&(h=T+1),U[h]}function F(y){return y.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")}return{formatIntegerWithSpaces:F,backToPageNr:e,shuffleThroughOptions:D,dimensions:o,timeUnit:C,timeUnits:_,distanceUnit:g,distanceUnits:w,info:N,modelNr:u,modelTypes:f,modelSizes:m,thingyURLPath:r}},components:{ThreeDView:j}}),k=e=>(A("data-v-eb0f930f"),e=e(),E(),e),J={class:"site-head"},M=["title","href"],H={class:"site-head"},K={key:0},Q=k(()=>n("thead",null,[n("th",null,"Polygons [n]"),n("th",null,"Vertices [n]")],-1)),X={style:{display:"inline-block"}},Y={class:"view-description"},Z=["href"],S={key:0,class:"stats-table"},z={key:0},x={key:0},ee={key:1},ne={key:1,class:"arrow-down"},se={key:2,class:"stats-table"},te={key:0},oe=k(()=>n("th",null,"G-Code lines [n]",-1)),ie={key:0},le={key:0},ae={key:1},re={key:0},de={key:1},ue={key:0},me={key:1},he=k(()=>n("br",null,null,-1)),fe={class:"backlink"},pe=k(()=>n("span",{class:"back-symbol"},i("\u2B8C"),-1));function ye(e,l,N,_,w,C){const g=V("ThreeDView"),u=V("router-link");return s(),t(p,null,[n("div",J,[n("h2",null,[n("a",{class:"desc-item",title:e.modelNr+" @ thingi10k",target:"_blank",href:e.thingyURLPath+e.modelNr},i(e.modelNr),9,M)])]),n("div",H,[e.info?(s(),t("table",K,[Q,n("tbody",null,[n("tr",null,[n("td",null,i(e.info[e.modelNr].n_polys),1),n("td",null,i(e.info[e.modelNr].n_verts),1)])])])):d("",!0)]),(s(!0),t(p,null,c(e.modelTypes,(f,m)=>(s(),t("div",{key:m,class:"model-row"},[(s(!0),t(p,null,c(e.modelSizes,o=>(s(),t("span",X,[n("span",null,[b(g,{class:"single-view",modelNr:e.modelNr,materialBaseColor:"#444",set:e.fileName=e.modelNr+"_"+o+"."+f,type:f,fileName:e.fileName},null,8,["modelNr","set","type","fileName"]),n("div",Y,[n("a",{href:"mdl/"+e.modelNr+"/"+e.fileName},i(e.fileName),9,Z),b(u,{class:"fullscreen",to:{name:"single-detail",query:{no:e.modelNr,type:f,size:o}}},{default:I(()=>[B(i("\u26F6"))]),_:2},1032,["to"])]),e.info&&m==0?(s(),t("div",S,[o in e.info[e.modelNr]?(s(),t("table",z,[n("thead",null,[(s(!0),t(p,null,c(e.dimensions,r=>(s(),t("th",null,i(r.toUpperCase())+" [mm]",1))),256))]),n("tbody",null,[n("tr",null,[(s(!0),t(p,null,c(e.dimensions,r=>(s(),t("td",null,[r in e.info[e.modelNr][o]?(s(),t("span",x,i(e.info[e.modelNr][o][r].toFixed(2)),1)):(s(),t("span",ee,"n.a."))]))),256))])])])):d("",!0)])):d("",!0),m<1?(s(),t("div",ne)):d("",!0),e.info&&m>0?(s(),t("div",se,[o in e.info[e.modelNr]?(s(),t("table",te,[n("thead",null,[n("th",{onClick:l[0]||(l[0]=r=>e.distanceUnit=e.shuffleThroughOptions(e.distanceUnits,e.distanceUnit))},"Filament ["+i(e.distanceUnit)+"]",1),n("th",{onClick:l[1]||(l[1]=r=>e.timeUnit=e.shuffleThroughOptions(e.timeUnits,e.timeUnit))},"Printing time ["+i(e.timeUnit)+"]",1),oe]),n("tbody",null,[o in e.info[e.modelNr]?(s(),t("tr",ie,[n("td",{onClick:l[2]||(l[2]=r=>e.distanceUnit=e.shuffleThroughOptions(e.distanceUnits,e.distanceUnit))},["filament_used_mm"in e.info[e.modelNr][o]?(s(),t("span",le,i((e.info[e.modelNr][o].filament_used_mm/e.distanceUnits[e.distanceUnit]).toFixed(2)),1)):(s(),t("span",ae,"n.a."))]),n("td",{onClick:l[3]||(l[3]=r=>e.timeUnit=e.shuffleThroughOptions(e.timeUnits,e.timeUnit))},["estimated_printing_time_s"in e.info[e.modelNr][o]?(s(),t("span",re,i((e.info[e.modelNr][o].estimated_printing_time_s/e.timeUnits[e.timeUnit]).toFixed(2)),1)):(s(),t("span",de,"n.a."))]),n("td",null,["gcode_length_n"in e.info[e.modelNr][o]?(s(),t("span",ue,i(e.formatIntegerWithSpaces(e.info[e.modelNr][o].gcode_length_n)),1)):(s(),t("span",me,"n.a."))])])):d("",!0)])])):d("",!0)])):d("",!0)])]))),256)),he]))),128)),n("div",fe,[b(u,{to:{name:"home",query:{p:e.backToPageNr}}},{default:I(()=>[B("Back to overview "),pe]),_:1},8,["to"])])],64)}const ke=R(G,[["render",ye],["__scopeId","data-v-eb0f930f"]]);export{ke as default};