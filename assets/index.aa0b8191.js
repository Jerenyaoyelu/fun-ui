import{_ as i,o as s,c as n,p as I,e as b,f as r,d as p,g as v,F as h,a as m,u as o,n as y,h as w,t as B,i as M,r as S,j as c,w as u}from"./index.9b4201ab.js";const k={},C=e=>(I("data-v-1ca9b570"),e=e(),b(),e),E={class:"container"},F=C(()=>r("div",{class:"cube"},null,-1)),A=[F];function T(e,t){return s(),n("div",E,A)}const N=i(k,[["render",T],["__scopeId","data-v-1ca9b570"]]),W={class:"circle"},j=["text"],z={class:"circle"},O=["text"],V=p({__name:"infinite",props:{textMap:null},setup(e){const t=e,_=v(()=>t.textMap?JSON.stringify(t.textMap)==="{}":!0),l=v(()=>x=>{const f=Object.keys(t.textMap||{}).length;return _.value?"":t.textMap[x%f]});return(x,f)=>(s(),n("div",{class:w(["container",o(_)?"":"with-text"])},[r("div",W,[(s(!0),n(h,null,m(new Array(21),($,a)=>(s(),n("span",{text:o(_)?"":o(l)(a),key:a,style:y({"--i":a})},null,12,j))),128))]),r("div",z,[(s(!0),n(h,null,m(new Array(21),($,a)=>(s(),n("span",{text:o(_)?"":o(l)(a),key:a,style:y({"--i":a})},null,12,O))),128))])],2))}});const g=i(V,[["__scopeId","data-v-82d830f0"]]),D={class:"wrapper"},J={class:"title"},L={class:"content"},Q=p({__name:"Wrapper",props:{title:null},setup(e){return(t,_)=>(s(),n("div",D,[r("div",J,B(e.title),1),r("div",L,[M(t.$slots,"default",{},void 0,!0)])]))}});const d=i(Q,[["__scopeId","data-v-e8e0a554"]]),q={class:"page"},G=p({__name:"index",setup(e){const t=S({0:"h",1:"e",2:"l",3:"l",4:"o"});return(_,l)=>(s(),n("div",q,[c(d,{class:"marginTop",title:"Q\u5F39\u7684loading\u65B9\u5757"},{default:u(()=>[c(N)]),_:1}),c(d,{class:"marginTop",title:"\u221Eloading\u73AF"},{default:u(()=>[c(g)]),_:1}),c(d,{class:"marginTop",title:"\u5E26\u6587\u5B57\u7684\u221Eloading\u73AF"},{default:u(()=>[c(g,{"text-map":t.value},null,8,["text-map"])]),_:1})]))}});const K=i(G,[["__scopeId","data-v-f042ae9c"]]);export{K as default};
