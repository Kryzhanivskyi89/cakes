!function(){// import flatpickr from "flatpickr";
// import "flatpickr/dist/flatpickr.min.css";
var t={startButton:document.querySelector("button[data-start]"),clockFace:document.querySelector(".timer")},e={intervalId:null,isActive:!1,start:function(){var e=this;this.isActive||(this.isActive=!0,this.intervalId=setInterval(function(){var a,c,o,r,i=new Date("2024-01-01 00:00:00")-new Date,s={days:n(Math.floor(i/864e5)),hours:n(Math.floor(i%864e5/36e5)),minutes:n(Math.floor(i%864e5%36e5/6e4)),seconds:n(Math.floor(i%864e5%36e5%6e4/1e3))};i<=1e3&&(clearInterval(e.intervalId),e.isActive=!1),a=s.days,c=s.hours,o=s.minutes,r=s.seconds,t.clockFace.textContent="".concat(a,":").concat(c,":").concat(o,":").concat(r)},1e3))}};function n(t){return String(t).padStart(2,"0")}// timer.start()
t.startButton.addEventListener("click",function(){e.start()})}();//# sourceMappingURL=index.c8f34fef.js.map

//# sourceMappingURL=index.c8f34fef.js.map
