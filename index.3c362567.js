!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},r=t.parcelRequire74a3;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){a[e]=t},t.parcelRequire74a3=r);var s=r("7pbsT"),i=r("4tSb9"),u=r("6nH8Q"),o=(u=r("6nH8Q"),r("HnSCr")),l=r("1VFfL"),c=r("iU1Pc"),p=r("9CIzh"),f=r("7Sf3J");r("aIGuM");var d=new(0,p.ApiImagesSearchRequest),g={totalItems:0,itemsPerPage:21,visiblePages:10,centerAlign:!0,page:1,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}} custom-class-{{type}}"><span class="tui-ico-{{type}}">☀</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}} custom-class-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip custom-class-{{type}}"><span class="tui-ico-ellip">...</span></a>'}};function h(){return(h=(0,s.default)((function(t,n){var a;return(0,i.__generator)(this,(function(r){switch(r.label){case 0:return""===n?((0,u.fullTrendFilmsRequestandRender)(1),[2]):[4,d.getImagesSearchGallery(t,n).then((function(e){return g.totalItems=e.total_results}))];case 1:return r.sent(),a=new(e(l))(f.refs.paginationContainer,g),y(t,n),a.on("beforeMove",(function(e){y(e.page,n),window.scrollTo({top:0,behavior:"smooth"})})),[2]}}))}))).apply(this,arguments)}function y(e,t){return m.apply(this,arguments)}function m(){return(m=(0,s.default)((function(e,t){return(0,i.__generator)(this,(function(n){switch(n.label){case 0:return[4,d.getImagesSearchGallery(e,t).then((function(e){if(!e.total_results)return c.Notify.failure("Sorry, there are no films matching your search query.Popular films shown."),void(0,u.renderTrendGallery)(1);(0,o.default)(e)})).catch((function(e){return e.message}))];case 1:return n.sent(),[2]}}))}))).apply(this,arguments)}f.refs.formElem.addEventListener("submit",(function(e){e.preventDefault(),function(e,t){h.apply(this,arguments)}(1,e.target.elements.searchQuery.value.trim())}))}();
//# sourceMappingURL=index.3c362567.js.map
