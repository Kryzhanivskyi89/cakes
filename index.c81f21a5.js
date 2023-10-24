!function(){// import flatpickr from "flatpickr";
// import "flatpickr/dist/flatpickr.min.css";
let t={startButton:document.querySelector("button[data-start]"),clockFace:document.querySelector(".timer")},e={intervalId:null,isActive:!1,start(){this.isActive||(this.isActive=!0,this.intervalId=setInterval(()=>{let e=new Date("2024-01-01 00:00:00")-new Date,r=function(t){let e=864e5,r=n(Math.floor(t/e)),a=n(Math.floor(t%e/36e5)),i=n(Math.floor(t%e%36e5/6e4)),o=n(Math.floor(t%e%36e5%6e4/1e3));return{days:r,hours:a,minutes:i,seconds:o}}(e);e<=1e3&&(clearInterval(this.intervalId),this.isActive=!1),function({days:e,hours:n,minutes:r,seconds:a}){t.clockFace.textContent=`${e}:${n}:${r}:${a}`}(r)},1e3))}};function n(t){return String(t).padStart(2,"0")}// timer.start()
t.startButton.addEventListener("click",()=>{e.start()})}();//# sourceMappingURL=index.c81f21a5.js.map

//# sourceMappingURL=index.c81f21a5.js.map
