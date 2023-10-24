// import flatpickr from "flatpickr";
// import "flatpickr/dist/flatpickr.min.css";
const t={startButton:document.querySelector("button[data-start]"),clockFace:document.querySelector(".timer")},e={intervalId:null,isActive:!1,start(){this.isActive||(this.isActive=!0,this.intervalId=setInterval(()=>{let e=new Date("2024-01-01 00:00:00")-new Date,r=function(t){let e=864e5,r=n(Math.floor(t/e)),s=n(Math.floor(t%e/36e5)),a=n(Math.floor(t%e%36e5/6e4)),o=n(Math.floor(t%e%36e5%6e4/1e3));return{days:r,hours:s,minutes:a,seconds:o}}//# sourceMappingURL=index.07d3479b.js.map
(e);e<=1e3&&(clearInterval(this.intervalId),this.isActive=!1),function({days:e,hours:n,minutes:r,seconds:s}){t.clockFace.textContent=`${e}:${n}:${r}:${s}`}(r)},1e3))}};function n(t){return String(t).padStart(2,"0")}// timer.start()
t.startButton.addEventListener("click",()=>{e.start()});
//# sourceMappingURL=index.07d3479b.js.map
