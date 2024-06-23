import{i as n,S as p}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function f(o){return o.hits.map(({webformatURL:s,largeImageURL:r,tags:i,likes:e,views:t,comments:a,downloads:d})=>`<li class="gallery-item">
          <a class="gallery-link" href="${r}">
            <img
              class="gallery-image"
              src="${s}"
              alt="${i}"
              width="360"
            />
          </a>
          <div class="thumb-block">
            <div class="block">
              <h2 class="tittle">Likes</h2>
              <p class="amount">${e}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Views</h2>
              <p class="amount">${t}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Comments</h2>
              <p class="amount">${a}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Downloads</h2>
              <p class="amount">${d}</p>
            </div>
          </div>
        </li>`).join("")}function h(o){const s="https://pixabay.com",r="/api",i=new URLSearchParams({key:"44542609-ff8a36f5b6e289e3f6d4e0ccb",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${s}${r}?${i}`;return fetch(e).then(t=>t.json())}const c=document.querySelector(".js-search"),u=document.querySelector(".gallery"),l=document.querySelector(".loader");l.style.display="none";c.addEventListener("submit",o=>{o.preventDefault();const s=o.target.elements.search.value;l.style.display="",h(s).then(r=>{if(l.style.display="none",!s.trim()){u.innerHTML="",n.error({title:"Error",message:"Please enter a value in the search field!",position:"topRight"});return}r.hits.length===0&&n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),u.innerHTML=f(r),new p(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh()}).catch(r=>{l.style.display="none",console.log(r)}),c.reset()});
//# sourceMappingURL=commonHelpers.js.map
