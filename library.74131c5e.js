var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},n=e.parcelRequire74a3;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){a[e]=t},e.parcelRequire74a3=n),n("4rMUO"),n("9QIWt");var i=n("ky5oN"),l=n("eIXe9"),r=n("fmRoT"),d=n("qh4Og");const s=document.querySelector(".js-watched-btn"),o=document.querySelector(".js-queue-btn"),c=new URLSearchParams({api_key:"388e7c1d810433186d944819803a330c",language:"en-US"});async function u(e){return(await r.default.get(`https://api.themoviedb.org/3/movie/${e}?${c}`)).data}async function f(e){const t=await e.map((e=>u(e)));!function(e){const t=e.map((({adult:e,id:t,title:a,backdrop_path:n,genres:i,poster_path:l,release_date:r})=>{const d=i.map((e=>e.name)).join(", ");return`<li class="gallery__item">\n        <img\n          class="gallery__item--img"\n          src="https://image.tmdb.org/t/p/w500${l}"\n          alt=""\n          loading="lazy"\n          height=""\n          data-img-id="${t}"\n        />\n        <div class="gallery__item--data">${parseInt(r)}</div>\n        <div class="gallery__item--list">\n            <div class="gallery__item--title"><b>${a}</b></div>\n            <div class="gallery__item-genre">${d}</div>\n            </div>\n    </li>`})).join("");l.refs.galleryLibraryListEl.innerHTML="",l.refs.galleryLibraryListEl.insertAdjacentHTML("beforeend",t)}(await Promise.all(t))}s.addEventListener("click",(function(){f(i.default.load("watch")||"[]"),o.classList.remove("btn-active"),s.classList.add("btn-active")})),o.addEventListener("click",(function(){o.classList.add("btn-active"),s.classList.remove("btn-active"),f(i.default.load("queue")||"[]")})),l.refs.galleryLibraryListEl.addEventListener("click",(function(e){if(e.preventDefault(),"IMG"!==e.target.nodeName)return;const t=e.target.dataset.imgId;l.refs.wraperModalEl.classList.remove("modal-hidden"),l.refs.modalEl.classList.remove("modal-hidden"),l.refs.imageWrapperEl.innerHTML="",l.refs.filmDetailsWrapperEl.innerHTML="",u(t).then((e=>(0,d.default)(e))).catch((e=>e.message)),l.refs.btnModalWatchedEl.addEventListener("click",(function(){f(i.default.load("watch")||"[]")})),l.refs.btnModalQueueEl.addEventListener("click",(function(){f(i.default.load("queue")||"[]")}))})),f(i.default.load("watch")||"[]");
//# sourceMappingURL=library.74131c5e.js.map