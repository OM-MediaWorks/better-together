import g from"https://esm.sh/reveal.js";import p from"https://esm.sh/reveal.js/plugin/highlight/highlight.esm";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const c of e.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function a(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(t){if(t.ep)return;t.ep=!0;const e=a(t);fetch(t.href,e)}})();const h=()=>({id:"svg-fragment",init:async s=>{var a,n,t,e,c;const o=document.querySelectorAll("[data-svg]");for(const r of o){const d=r.getAttribute("data-svg"),f=await fetch(location.pathname+d).then(i=>i.text());r.innerHTML=f.replaceAll("inkscape:label","inkscape-label"),(n=(a=r.children)==null?void 0:a[0])==null||n.removeAttribute("width"),(e=(t=r.children)==null?void 0:t[0])==null||e.removeAttribute("height");const u=[...r.querySelectorAll("[inkscape-label]")];u.shift();const m=((c=r.getAttribute("data-svg-fragments"))==null?void 0:c.split(","))??u.map(i=>i.getAttribute("inkscape-label"));for(const i of m){const l=r.querySelector(`[inkscape-label="${i}"]`);l==null||l.classList.add("fragment")}}s.on("fragmentshown",r=>{document.body.dataset.lastFragment=r.fragment.getAttribute("inkscape-label")}),s.on("fragmenthidden",r=>{document.body.dataset.lastFragment===r.fragment.getAttribute("inkscape-label")&&(document.body.dataset.lastFragment="")})}}),b=[...document.querySelectorAll("[data-unsplash")];for(const s of b){const o=s.getAttribute("data-unsplash");s.setAttribute("data-background",`https://images.unsplash.com/photo-${o}?auto=format&fit=crop&w=2200&q=80`)}if(localStorage.minute){const s=[...document.querySelectorAll("section")];for(const o of s)o.classList.contains("minute-at-the-mic")||o.remove()}const y=new g;y.initialize({hash:!0,plugins:[h,p],controlsTutorial:!1});const A=[...document.querySelectorAll("[data-opacity")];setTimeout(()=>{for(const s of A){const o=s.getAttribute("data-background"),a=document.querySelectorAll(`[data-background-hash^="${o}"]`);for(const n of a)n.classList.add("opacity")}},300);
