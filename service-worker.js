!function(){"use strict";const e=["client/client.35b1d7ec.js","client/about.e7ecfbc7.js","client/Icon.ec95d7e8.js","client/[slug].e1cb1595.js","client/index.458856f9.js","client/client.7b2cd91c.js"].concat(["service-worker-index.html",".DS_Store","app/blog-watermark.png","app/logo-blog.svg","app/logo-owl.png","assets/.gitkeep","assets/0032a1961f.svg","assets/276e6a4c80.png","assets/358cc8b59f.png","assets/4f22341e39.svg","assets/55e4b392fa.svg","assets/6ecc7aea40.svg","assets/7a45323072.svg","assets/7feeb39080.svg","assets/aa17c8f68f.svg","assets/bea58ea18a.png","assets/c22ee304f4.svg","assets/e587a64fc8.png","assets/f52fbcc2ea.png","global.css","images/author-desc-frame.svg","images/becca-fp.png","images/becca.jpg","images/blog.svg","images/logo.svg","images/lukas-fp.png","images/lukas.jpg","manifest.json"]),s=new Set(e);self.addEventListener("install",s=>{s.waitUntil(caches.open("cache1590601556446").then(s=>s.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const s of e)"cache1590601556446"!==s&&await caches.delete(s);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const t=new URL(e.request.url);t.protocol.startsWith("http")&&(t.hostname===self.location.hostname&&t.port!==self.location.port||(t.host===self.location.host&&s.has(t.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1590601556446").then(async s=>{try{const t=await fetch(e.request);return s.put(e.request,t.clone()),t}catch(t){const a=await s.match(e.request);if(a)return a;throw t}}))))})}();
