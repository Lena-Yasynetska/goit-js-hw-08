!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},e.parcelRequired7c6=n);var a=n("1WSnx"),o=document.querySelector(".feedback-form"),l=o.querySelector('input[name="email"]'),i=o.querySelector('textarea[name="message"]');o.addEventListener("input",(0,a.throttle)((function(){var e={email:l.value,message:i.value};localStorage.setItem(u,JSON.stringify(e))}),500)),o.addEventListener("submit",(function(e){e.preventDefault(),l.value="",i.value="",localStorage.removeItem(u)}));var u="feedback-form-state"}();
//# sourceMappingURL=03-feedback.e7324f2c.js.map