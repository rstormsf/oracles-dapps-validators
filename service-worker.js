"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/oracles-dapps-validators/index.html","b6b57e6eb86a4565538858f8d97847fe"],["/oracles-dapps-validators/static/css/main.82346c0e.css","e079dced6ac2082286e32a3acf3535e1"],["/oracles-dapps-validators/static/js/main.1094dd0b.js","df9bf80c227c17a7de90797189f4fdab"],["/oracles-dapps-validators/static/media/CEREMONY.3aaa882b.png","3aaa882b8d5f53f9a5ce2a953b91308e"],["/oracles-dapps-validators/static/media/CEREMONY@2x.b8495078.png","b8495078a4079c685a95c0c1f7e5ba81"],["/oracles-dapps-validators/static/media/CEREMONY_footer.2e9492a0.png","2e9492a0598400a58de813350a57b78e"],["/oracles-dapps-validators/static/media/CEREMONY_footer@2x.7ae07c61.png","7ae07c61178e3ef4d3d36226555f933e"],["/oracles-dapps-validators/static/media/bg_footer.c0181fba.png","c0181fbaa582e7c44f4c77fb50e1781b"],["/oracles-dapps-validators/static/media/bg_header.55fb6ae4.png","55fb6ae4101fe4617b5e6a3463c1e701"],["/oracles-dapps-validators/static/media/loading.26ca894e.png","26ca894ecd4a23884b43df2a9531c30a"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,a,t,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],r=new URL(a,self.location),n=createCacheKey(r,hashParamName,t,/\.\w{8}\./);return[r.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var r=new Request(t,{credentials:"same-origin"});return fetch(r).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),r="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,r),a=urlsToCacheKeys.has(t));var n="/oracles-dapps-validators/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(n,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});