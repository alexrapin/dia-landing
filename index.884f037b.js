document.addEventListener("DOMContentLoaded",function(){var t=0,e=document.querySelectorAll(".slider__images--image"),n=function(t){var n=!(arguments.length>1)||void 0===arguments[1]||arguments[1];e.forEach(function(e){e.style.transition=n?"transform .8s":"none",e.style.transform="translateX(-".concat(100*t,"%)")})},o=function(o){n(t=o<0?e.length-1:o>=e.length?0:o)},r=function(){o(t+1),console.log("right")},l=document.querySelector(".slider__buttons--left"),c=document.querySelector(".slider__buttons--right");l?l.addEventListener("click",function(){o(t-1),console.log("left")}):console.error("Left button not found"),c?c.addEventListener("click",r):console.error("Right button not found"),setInterval(r,5e3)});
//# sourceMappingURL=index.884f037b.js.map
