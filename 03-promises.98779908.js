!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},n.parcelRequired7c6=r);var i=r("iU1Pc"),a=document.querySelector("form"),l=a.querySelector('[name="delay"]'),u=a.querySelector('[name="step"]'),c=a.querySelector('[name="amount"]');function s(e,n){return new Promise((function(o,t){setTimeout((function(){var r=Math.random()>.3;console.log("ShouldResolve:",r),r?o({position:e,delay:n}):t({position:e,delay:n})}),n)}))}a.querySelector('[type="submit"]').addEventListener("click",(function(n){n.preventDefault();for(var o=parseInt(l.value),t=parseInt(u.value),r=parseInt(c.value),a=0;a<=r;a++)s(a,o).then((function(n){var o=n.position,t=n.delay;e(i).Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms"))})).catch((function(n){var o=n.position,t=n.delay;e(i).Notify.failure("❌ Rejected promise ".concat(o," in ").concat(t,"ms"))})),o+=t}))}();
//# sourceMappingURL=03-promises.98779908.js.map
