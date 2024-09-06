import{a as i,o as r,F as s,b as a}from"./entry.d34aab00.js";const c=a("div",null,[a("head",null,[a("link",{rel:"stylesheet",href:"https://unpkg.com/leaflet@1.9.3/dist/leaflet.css",integrity:"sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI=",crossorigin:""})])],-1),d=a("div",{class:"z-0",id:"map",style:{height:"80vh"}},null,-1),h=a("div",{class:"w-full z-20 fixed mb-3 bottom-16"},[a("div",{class:"w-6/12 py-2 text-center mx-auto bg-white text-black text-lg font-bold"}," Click on the Blue tag to Start Tour ")],-1),w={__name:"Map",setup(m){{var e=L.map("map").setView([18.5093,73.8551],15);L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:20}).addTo(e);var t=L.marker([18.5195,73.8553]).bindTooltip("Shaniwarwada",{permanent:!0,className:"my-label",offset:[0,0]}).addTo(e);t.on("click",function(){window.location.href="/shaniwarWada"});var o=L.marker([18.5188,73.8565]).bindTooltip("Lal Mahal",{permanent:!0,className:"my-label",offset:[0,0]}).addTo(e);o.on("click",function(){window.location.href="/lalMahal"});var l=L.marker([18.5165,73.856]).bindTooltip("Shreemant Dagdusheth Halwai Ganpati Mandir",{permanent:!0,className:"my-label",offset:[0,0]}).addTo(e);l.on("click",function(){window.location.href="/DagdushethGanpati"});var n=L.marker([18.5129,73.8563]).bindTooltip("Mahatma Phule Mandai",{permanent:!0,className:"my-label",offset:[0,0]}).addTo(e);n.on("click",function(){window.location.href="/mahatmaPhuleMandai"})}return(f,u)=>(r(),i(s,null,[c,d,h],64))}};export{w as default};