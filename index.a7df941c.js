let t;function e(t){return t&&t.__esModule?t.default:t}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},a=i.parcelRequire11b0;null==a&&((a=function(t){if(t in r)return r[t].exports;if(t in o){var e=o[t];delete o[t];var i={id:t,exports:{}};return r[t]=i,e.call(i.exports,i,i.exports),i.exports}var a=Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){o[t]=e},i.parcelRequire11b0=a),(0,a.register)("kyEFX",function(t,e){Object.defineProperty(t.exports,"register",{get:function(){return i},set:function(t){return i=t},enumerable:!0,configurable:!0});var i,r=new Map;i=function(t,e){for(var i=0;i<e.length-1;i+=2)r.set(e[i],{baseUrl:t,path:e[i+1]})}}),a("kyEFX").register(new URL("",import.meta.url).toString(),JSON.parse('["5ZPII","index.a7df941c.js","geg1f","1.6c2f386c.jpg","3HGNP","2.1247f6a3.jpg","5N3Mr","3.6028920d.jpg","cOWez","4.c2e8a00d.jpg","afaUO","5.11a92d4c.jpg","GHNyY","6.0dccdb3c.jpg","dd94S","7.cd841c7a.jpg","aIDbu","8.215a43b7.jpg","8OxH2","9.ef1b3431.jpg","lqKSR","10.84b4d1dc.jpg","l0giU","11.1e4c6df6.jpg","30PCD","12.92d84f00.jpg","bAYTs","13.825ed5f3.jpg","d69Ds","14.c10f4e7b.jpg","ae7vN","15.55ead2e1.jpg","cjaNH","16.215159e4.jpg","dcTRb","17.1cf311b5.jpg","gdtrI","18.4d406589.jpg","4vLBs","19.61d4d7a1.jpg","8WL8x","20.2adcc136.jpg","bkrpA","21.be9c7543.jpg","2DPAT","22.9e2e73be.jpg","7PMc8","23.bfb11569.jpg","3qjSb","24.54743c26.jpg","1EC8n","25.4f944f05.jpg","940z2","26.dd7511e4.jpg","dVy8u","27.a04bfeab.jpeg","i43Tz","28.f1dd0025.jpeg","6tcys","29.0810a4a4.jpeg","9U1It","30.df547913.jpeg"]'));// import flatpickr from "flatpickr";
// import "flatpickr/dist/flatpickr.min.css";
const n={startButton:document.querySelector("button[data-start]"),clockFace:document.querySelector(".timer")},c={intervalId:null,isActive:!1,start(){this.isActive||(this.isActive=!0,this.intervalId=setInterval(()=>{let t=new Date("2024-01-01 00:00:00")-new Date,e=function(t){let e=864e5,i=s(Math.floor(t/e)),r=s(Math.floor(t%e/36e5)),o=s(Math.floor(t%e%36e5/6e4)),a=s(Math.floor(t%e%36e5%6e4/1e3));return{days:i,hours:r,minutes:o,seconds:a}}(t);t<=1e3&&(clearInterval(this.intervalId),this.isActive=!1),function({days:t,hours:e,minutes:i,seconds:r}){n.clockFace.textContent=`${t}:${e}:${i}:${r}`}(e)},1e3))}};function s(t){return String(t).padStart(2,"0")}// timer.start()
n.startButton.addEventListener("click",()=>{c.start()});const d=document.querySelectorAll(".slider-box .slider-line img"),u=document.querySelector(".slider-line");let l=0;function p(){console.log("resize"),t=document.querySelector(".slider-box").offsetWidth,u.style.width=t*d.length+"px",d.forEach(e=>{e.style.width=t+"px";// item.style.height = 'auto';
}),m()}function m(){u.style.transform="translate(-"+l*t+"px)"}window.addEventListener("resize",p),p(),document.querySelector(".slider-next").addEventListener("click",function(){++l>=d.length&&(l=0),m()}),document.querySelector(".slider-prev").addEventListener("click",function(){--l<0&&(l=d.length-1),m()});const g=document.querySelector(".submit"),_=document.querySelector(".form"),f=document.querySelector(".ok_message"),H=document.querySelector(".btn-close"),S=document.querySelector(".order-btn");S.addEventListener("click",function(){_.classList.add("active")}),g.addEventListener("click",function(){g.parent().parent().hide(300),f.classList.add("active")}),H.addEventListener("click",function(){console.log("poc"),_.classList.remove("active")}),f.addEventListener("click",function(){f.classList.remove("active");//   form.classList.remove("active").show();
}),new URL("1.6c2f386c.jpg",import.meta.url).toString();var v={};v=new URL("2.1247f6a3.jpg",import.meta.url).toString();var R={};R=new URL("3.6028920d.jpg",import.meta.url).toString();var b={};b=new URL("4.c2e8a00d.jpg",import.meta.url).toString();var E={};E=new URL("5.11a92d4c.jpg",import.meta.url).toString();var A={};A=new URL("6.0dccdb3c.jpg",import.meta.url).toString();var j={};j=new URL("7.cd841c7a.jpg",import.meta.url).toString();var F={};F=new URL("8.215a43b7.jpg",import.meta.url).toString();var h={};h=new URL("9.ef1b3431.jpg",import.meta.url).toString();var L={};L=new URL("10.84b4d1dc.jpg",import.meta.url).toString();var w={};w=new URL("11.1e4c6df6.jpg",import.meta.url).toString();var y={};y=new URL("12.92d84f00.jpg",import.meta.url).toString();var U={};U=new URL("13.825ed5f3.jpg",import.meta.url).toString();var x={};x=new URL("14.c10f4e7b.jpg",import.meta.url).toString();var q={};q=new URL("15.55ead2e1.jpg",import.meta.url).toString();var k={};k=new URL("16.215159e4.jpg",import.meta.url).toString();var Q={};Q=new URL("17.1cf311b5.jpg",import.meta.url).toString();var $={};$=new URL("18.4d406589.jpg",import.meta.url).toString();var P={};P=new URL("19.61d4d7a1.jpg",import.meta.url).toString();var M={};M=new URL("20.2adcc136.jpg",import.meta.url).toString(),new URL("21.be9c7543.jpg",import.meta.url).toString(),new URL("22.9e2e73be.jpg",import.meta.url).toString(),new URL("23.bfb11569.jpg",import.meta.url).toString(),new URL("24.54743c26.jpg",import.meta.url).toString(),new URL("25.4f944f05.jpg",import.meta.url).toString(),new URL("26.dd7511e4.jpg",import.meta.url).toString(),new URL("27.a04bfeab.jpeg",import.meta.url).toString(),new URL("28.f1dd0025.jpeg",import.meta.url).toString(),new URL("29.0810a4a4.jpeg",import.meta.url).toString(),new URL("30.df547913.jpeg",import.meta.url).toString();// import g1x2 from './1@2x.jpg';
// import g2x2 from './2@2x.jpg';
// import g3x2 from './3@2x.jpg';
// import g4x2 from './4@2x.jpg';
// import g5x2 from './5@2x.jpg';
// import g6x2 from './6@2x.jpg';
// import g7x2 from './7@2x.jpg';
// import g8x2 from './8@2x.jpg';
// import g9x2 from './9@2x.jpg';
// import g10x2 from './10@2x.jpg';
// import g11x2 from './11@2x.jpg';
// import g12x2 from './12@2x.jpg';
// import g13x2 from './13@2x.jpg';
// import g14x2 from './14@2x.jpg';
// import g15x2 from './15@2x.jpg';
// import g16x2 from './16@2x.jpg';
// import g17x2 from './17@2x.jpg';
// import g18x2 from './18@2x.jpg';
// import g19x2 from './19@2x.jpg';
// import g20x2 from './20@2x.jpg';
// import g21x2 from './21@2x.jpg';
// import g22x2 from './22@2x.jpg';
// import g23x2 from './23@2x.jpg';
// import g24x2 from './24@2x.jpg';
// import g25x2 from './25@2x.jpg';
// import g26x2 from './26@2x.jpg';
// import g27x2 from './27@2x.jpeg';
// import g28x2 from './28@2x.jpeg';
// import g29x2 from './29@2x.jpeg';
// import g30x2 from './30@2x.jpeg';
const I=[{id:1,// deskPhoto:desk1,
// deskPhoto2x:desk1x2,
// tabPhoto:
// tabPhoto2x:
// mobPhoto:
// mobPhoto2x:
// photo: g1,
// photo2x: g1x2,
title:"Misha",alt:"tort dlya Mishy",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis providentat"},{id:2,photo:/*@__PURE__*/e(v),title:"",alt:"",description:"July 2023"},{id:3,photo:/*@__PURE__*/e(R),title:"",alt:"",description:"July 2023"},{id:4,photo:/*@__PURE__*/e(b),title:"",alt:"",description:"July 2023"},{id:5,photo:/*@__PURE__*/e(E),title:"",alt:"",description:"July 2023"},{id:6,photo:/*@__PURE__*/e(A),title:"",alt:"",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis providentat"},{id:7,photo:/*@__PURE__*/e(j),title:"",alt:"",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis providentat"},{id:8,photo:/*@__PURE__*/e(F),title:"",alt:"",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis providentat"},{id:9,photo:/*@__PURE__*/e(h),title:"",alt:"",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis providentat"},{id:10,photo:/*@__PURE__*/e(L),title:"",alt:"",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis providentat"},{id:11,photo:/*@__PURE__*/e(w),title:"",alt:"",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis providentat"},{id:12,photo:/*@__PURE__*/e(y),title:"",alt:"",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis providentat"},{id:13,photo:/*@__PURE__*/e(U),title:"",alt:"",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis providentat"},{id:14,photo:/*@__PURE__*/e(x),title:"",alt:"",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis providentat"},{id:15,photo:/*@__PURE__*/e(q),title:"",alt:"",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis providentat"},{id:16,photo:/*@__PURE__*/e(k),title:"",alt:"",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis providentat"},{id:17,photo:/*@__PURE__*/e(Q),title:"",alt:"",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis providentat"},{id:18,photo:/*@__PURE__*/e($),title:"",alt:"",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis providentat"},{id:19,photo:/*@__PURE__*/e(P),title:"",alt:"",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis providentat"},{id:20,photo:/*@__PURE__*/e(M),title:"",alt:"",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis providentat"}],D={gallery:document.querySelector(".container__gallery")};console.log(I),function(){let t=I.map(({id:t,deskPhoto:e,deskPhoto2x:i,tabPhoto:r,tabPhoto2x:o,mobPhoto:a,mobPhoto2x:n,alt:c,title:s,description:d})=>`        
            <li class="card" key=${t}>                
                
                    <div class="face face1">
                        <div class="content">
                            <picture>
                                <source srcset="
                                    ${e} 1x, 
                                    ${i} 2x"
                                    media="(min-width:1200px)"/>
                                <source srcset="
                                    ${r} 1x, 
                                    ${o} 2x" 
                                    media="(min-width:768px)"/>
                                <source srcset="
                                    ${a} 1x, 
                                    ${n} 2x" 
                                    media="(max-width:767px)"/>
                                <img
                                    src=${e} 
                                    alt=${c} 
                                    style="object-fit: cover;"
                                    crossorigin="anonymous" 
                                    decoding="auto"
                                    class="x5yr21d xu96u03 x10l6tqk x13vifvy x87ps6o xh8yej3"
                                    width="250" 
                                    height="200" 
                                    loading="lazy"
                                    sizes="226.8046875px"
                                    / >
                            </picture>
                        </div>
                    </div>
                    <div class="face face2">
                        <div class="content">
                            <h3>${s}</h3>
                            <p>${d}</p>
                        </div>
                    </div>
                 
            </li>        
        `).join("");D.gallery.insertAdjacentHTML("beforeend",t)}(I),document.getElementById("contactForm").addEventListener("submit",async function(t){t.preventDefault();let e=t.target,i=new FormData(e),r={};i.forEach((t,e)=>{r[e]=t});try{let t=await fetch("https://andrew-o1p4.onrender.com/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});t.ok?alert("Заказ успішно надіслано!"):alert("Сталася помилка при надсиланні заказу.")}catch(t){console.error("Помилка:",t),alert("Сталася помилка при надсиланні заказу.")}});//# sourceMappingURL=index.a7df941c.js.map

//# sourceMappingURL=index.a7df941c.js.map
