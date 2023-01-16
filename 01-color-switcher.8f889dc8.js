const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]");let r;e.addEventListener("click",(()=>{r=setInterval((()=>{document.querySelector("body").style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),e.disabled=!0})),t.addEventListener("click",(()=>{clearInterval(r),e.disabled=!1}));
//# sourceMappingURL=01-color-switcher.8f889dc8.js.map
