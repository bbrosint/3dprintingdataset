import{_ as L,d as q,r as I,o as s,c as t,a as n,t as i,b as d,F as p,e as y,f as b,w as B,g as a,h as j,T as W,i as O,u as A,j as _,p as E,k as G}from"./index.8d23cef8.js";const J=q({name:"DetailView",setup(){const e=a(1),l=A(),N=a(null),w=a({s:1,min:60,h:3600}),C=a({mm:1,cm:100,m:1e3}),T=a("min"),g=a("m"),u=a(""),f=a(["stl","gcode"]),m=a(["s","m","l"]),o=a(["x","y","z"]),r=a(_.urls.thingi10kurl),P=a(_.urls.baseurl);j(async()=>{if(l.query.from)try{e.value=parseInt(l.query.from)}catch{}u.value=l.query.no,await R()});const R=async()=>{const U=_.urls.baseurl+u.value+"/info.json";await fetch(U).then(h=>h.json()).then(h=>N.value=h)};function $(c,U){var h=0;const v=Object.keys(c),F=v.length-1,V=v.indexOf(U);return V<F&&(h=V+1),v[h]}function D(c){return c.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")}return{formatIntegerWithSpaces:D,backToPageNr:e,shuffleThroughOptions:$,dimensions:o,timeUnit:T,timeUnits:w,distanceUnit:g,distanceUnits:C,info:N,modelNr:u,modelTypes:f,modelSizes:m,thingyURLPath:r,baseURLPath:P}},components:{ThreeDView:W}}),k=e=>(E("data-v-bcfe3186"),e=e(),G(),e),M={class:"site-head"},H=["title","href"],K={class:"site-head"},Q={key:0},X=k(()=>n("thead",null,[n("th",null,"Polygons [n]"),n("th",null,"Vertices [n]")],-1)),Y={style:{display:"inline-block"}},Z={class:"view-description"},S=["href"],z={key:0,class:"stats-table"},x={key:0},ee={key:0},ne={key:1},se={key:1,class:"arrow-down"},te={key:2,class:"stats-table"},oe={key:0},ie=k(()=>n("th",null,"G-Code lines [n]",-1)),le={key:0},ae={key:0},re={key:1},de={key:0},ue={key:1},me={key:0},he={key:1},fe=k(()=>n("br",null,null,-1)),pe={class:"backlink"},ce=k(()=>n("span",{class:"back-symbol"},i("\u2B8C"),-1));function ye(e,l,N,w,C,T){const g=I("ThreeDView"),u=I("router-link");return s(),t(p,null,[n("div",M,[n("h2",null,[n("a",{class:"desc-item",title:e.modelNr+" @ thingi10k",target:"_blank",href:e.thingyURLPath+e.modelNr},i(e.modelNr),9,H)])]),n("div",K,[e.info?(s(),t("table",Q,[X,n("tbody",null,[n("tr",null,[n("td",null,i(e.info[e.modelNr].n_polys),1),n("td",null,i(e.info[e.modelNr].n_verts),1)])])])):d("",!0)]),(s(!0),t(p,null,y(e.modelTypes,(f,m)=>(s(),t("div",{key:m,class:"model-row"},[(s(!0),t(p,null,y(e.modelSizes,o=>(s(),t("span",Y,[n("span",null,[b(g,{class:"single-view",modelNr:e.modelNr,materialBaseColor:"#444",set:e.fileName=e.modelNr+"_"+o+"."+f,type:f,fileName:e.fileName},null,8,["modelNr","set","type","fileName"]),n("div",Z,[n("a",{href:e.baseURLPath+e.modelNr+"/"+e.fileName},i(e.fileName),9,S),b(u,{class:"fullscreen",to:{name:"single-detail",query:{no:e.modelNr,type:f,size:o}}},{default:B(()=>[O(i("\u26F6"))]),_:2},1032,["to"])]),e.info&&m==0?(s(),t("div",z,[o in e.info[e.modelNr]?(s(),t("table",x,[n("thead",null,[(s(!0),t(p,null,y(e.dimensions,r=>(s(),t("th",null,i(r.toUpperCase())+" [mm]",1))),256))]),n("tbody",null,[n("tr",null,[(s(!0),t(p,null,y(e.dimensions,r=>(s(),t("td",null,[r in e.info[e.modelNr][o]?(s(),t("span",ee,i(e.info[e.modelNr][o][r].toFixed(2)),1)):(s(),t("span",ne,"n.a."))]))),256))])])])):d("",!0)])):d("",!0),m<1?(s(),t("div",se)):d("",!0),e.info&&m>0?(s(),t("div",te,[o in e.info[e.modelNr]?(s(),t("table",oe,[n("thead",null,[n("th",{onClick:l[0]||(l[0]=r=>e.distanceUnit=e.shuffleThroughOptions(e.distanceUnits,e.distanceUnit))},"Filament ["+i(e.distanceUnit)+"]",1),n("th",{onClick:l[1]||(l[1]=r=>e.timeUnit=e.shuffleThroughOptions(e.timeUnits,e.timeUnit))},"Printing time ["+i(e.timeUnit)+"]",1),ie]),n("tbody",null,[o in e.info[e.modelNr]?(s(),t("tr",le,[n("td",{onClick:l[2]||(l[2]=r=>e.distanceUnit=e.shuffleThroughOptions(e.distanceUnits,e.distanceUnit))},["filament_used_mm"in e.info[e.modelNr][o]?(s(),t("span",ae,i((e.info[e.modelNr][o].filament_used_mm/e.distanceUnits[e.distanceUnit]).toFixed(2)),1)):(s(),t("span",re,"n.a."))]),n("td",{onClick:l[3]||(l[3]=r=>e.timeUnit=e.shuffleThroughOptions(e.timeUnits,e.timeUnit))},["estimated_printing_time_s"in e.info[e.modelNr][o]?(s(),t("span",de,i((e.info[e.modelNr][o].estimated_printing_time_s/e.timeUnits[e.timeUnit]).toFixed(2)),1)):(s(),t("span",ue,"n.a."))]),n("td",null,["gcode_length_n"in e.info[e.modelNr][o]?(s(),t("span",me,i(e.formatIntegerWithSpaces(e.info[e.modelNr][o].gcode_length_n)),1)):(s(),t("span",he,"n.a."))])])):d("",!0)])])):d("",!0)])):d("",!0)])]))),256)),fe]))),128)),n("div",pe,[b(u,{to:{name:"home",query:{p:e.backToPageNr}}},{default:B(()=>[O("Back to overview "),ce]),_:1},8,["to"])])],64)}const Ne=L(J,[["render",ye],["__scopeId","data-v-bcfe3186"]]);export{Ne as default};
