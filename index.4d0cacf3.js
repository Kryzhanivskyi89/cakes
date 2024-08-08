let t;function e(t){return t&&t.__esModule?t.default:t}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},r={},a=o.parcelRequire11b0;null==a&&((a=function(t){if(t in i)return i[t].exports;if(t in r){var e=r[t];delete r[t];var o={id:t,exports:{}};return i[t]=o,e.call(o.exports,o,o.exports),o.exports}var a=Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){r[t]=e},o.parcelRequire11b0=a),(0,a.register)("kyEFX",function(t,e){Object.defineProperty(t.exports,"register",{get:function(){return o},set:function(t){return o=t},enumerable:!0,configurable:!0});var o,i=new Map;o=function(t,e){for(var o=0;o<e.length-1;o+=2)i.set(e[o],{baseUrl:t,path:e[o+1]})}}),a("kyEFX").register(new URL("",import.meta.url).toString(),JSON.parse('["5ZPII","index.4d0cacf3.js","hNgzI","1desk@1x.5703d9b4.jpg","jICWB","1tab@1x.673653b2.jpg","eEgi3","1mob@1x.69785b6f.jpg","kNvZm","2desk@1x.96833ea4.jpg","eKUeS","2tab@1x.fe3ecb27.jpg","4Y8l2","2mob@1x.ede91e6f.jpg","i5GlG","3desk@1x.6d1f071d.jpg","gEaU3","3tab@1x.9ee26a87.jpg","jhWL5","3mob@1x.6bd378f8.jpg","7m1dp","4desk@1x.345a1318.jpg","itWzZ","4tab@1x.cf493627.jpg","dkNtc","4mob@1x.2afe27c2.jpg","f1t2q","5desk@1x.6181253e.jpg","ilFn4","5tab@1x.d3bf8586.jpg","2XIII","5mob@1x.33de1c8f.jpg","hDdZL","6desk@1x.22c4d2ad.jpg","lrrJA","6tab@1x.b1cfdde8.jpg","hB8mx","6mob@1x.4ca7edf6.jpg","caUFX","7desk@1x.bd263f1b.jpg","6shwG","7tab@1x.3cc9ea70.jpg","6xIt2","7mob@1x.f672273d.jpg","ehEV9","8desk@1x.0fe487a9.jpg","4h2x7","8tab@1x.fa92e96a.jpg","3Vtwq","8mob@1x.ada5ba30.jpg","7Nhyv","9desk@1x.3627d42f.jpg","6BjMN","9tab@1x.78c3aa74.jpg","5BwvO","9mob@1x.9c41dce6.jpg","kSIKu","10desk@1x.bf93d187.jpg","8Cobd","10tab@1x.bc96d452.jpg","9FZlS","10mob@1x.5c2e3975.jpg","bdHM7","11desk@1x.016fce68.jpg","cfqjK","11tab@1x.cedb6327.jpg","cXWTn","11mob@1x.72753896.jpg","c9spP","12desk@1x.ab64a7f3.jpg","1oW7k","12tab@1x.a6cc30bb.jpg","loEZa","12mob@1x.d8f79aaf.jpg","gG6Hj","13desk@1x.dbe006b3.jpg","hZHHT","13tab@1x.409b8dde.jpg","dxrmA","13mob@1x.d7b3fe15.jpg"]'));// import flatpickr from "flatpickr";
// import "flatpickr/dist/flatpickr.min.css";
const d={startButton:document.querySelector("button[data-start]"),clockFace:document.querySelector(".timer")},n={intervalId:null,isActive:!1,start(){this.isActive||(this.isActive=!0,this.intervalId=setInterval(()=>{let t=new Date("2024-01-01 00:00:00")-new Date,e=function(t){let e=864e5,o=c(Math.floor(t/e)),i=c(Math.floor(t%e/36e5)),r=c(Math.floor(t%e%36e5/6e4)),a=c(Math.floor(t%e%36e5%6e4/1e3));return{days:o,hours:i,minutes:r,seconds:a}}(t);t<=1e3&&(clearInterval(this.intervalId),this.isActive=!1),function({days:t,hours:e,minutes:o,seconds:i}){d.clockFace.textContent=`${t}:${e}:${o}:${i}`}(e)},1e3))}};function c(t){return String(t).padStart(2,"0")}// timer.start()
d.startButton.addEventListener("click",()=>{n.start()});const s=document.querySelectorAll(".slider-box .slider-line img"),m=document.querySelector(".slider-line");let l=0;function b(){console.log("resize"),t=document.querySelector(".slider-box").offsetWidth,m.style.width=t*s.length+"px",s.forEach(e=>{e.style.width=t+"px";// item.style.height = 'auto';
}),p()}function p(){m.style.transform="translate(-"+l*t+"px)"}window.addEventListener("resize",b),b(),document.querySelector(".slider-next").addEventListener("click",function(){++l>=s.length&&(l=0),p()}),document.querySelector(".slider-prev").addEventListener("click",function(){--l<0&&(l=s.length-1),p()});const u=document.querySelector(".submit"),_=document.querySelector(".form"),H=document.querySelector(".ok_message"),g=document.querySelector(".btn-close"),f=document.querySelector(".order-btn");f.addEventListener("click",function(){_.classList.add("active")}),u.addEventListener("click",function(){u.parent().parent().hide(300),H.classList.add("active")}),g.addEventListener("click",function(){console.log("poc"),_.classList.remove("active")}),H.addEventListener("click",function(){H.classList.remove("active");//   form.classList.remove("active").show();
});var S={};S=new URL("1desk@1x.5703d9b4.jpg",import.meta.url).toString();var R={};R=new URL("1tab@1x.673653b2.jpg",import.meta.url).toString();var x={};x=new URL("1mob@1x.69785b6f.jpg",import.meta.url).toString();var v={};v=new URL("2desk@1x.96833ea4.jpg",import.meta.url).toString();var E={};E=new URL("2tab@1x.fe3ecb27.jpg",import.meta.url).toString();var h={};h=new URL("2mob@1x.ede91e6f.jpg",import.meta.url).toString();var j={};j=new URL("3desk@1x.6d1f071d.jpg",import.meta.url).toString();var F={};F=new URL("3tab@1x.9ee26a87.jpg",import.meta.url).toString();var A={};A=new URL("3mob@1x.6bd378f8.jpg",import.meta.url).toString();var L={};L=new URL("4desk@1x.345a1318.jpg",import.meta.url).toString();var k={};k=new URL("4tab@1x.cf493627.jpg",import.meta.url).toString();var w={};w=new URL("4mob@1x.2afe27c2.jpg",import.meta.url).toString();var P={};P=new URL("5desk@1x.6181253e.jpg",import.meta.url).toString();var y={};y=new URL("5tab@1x.d3bf8586.jpg",import.meta.url).toString();var U={};U=new URL("5mob@1x.33de1c8f.jpg",import.meta.url).toString();var q={};q=new URL("6desk@1x.22c4d2ad.jpg",import.meta.url).toString();var I={};I=new URL("6tab@1x.b1cfdde8.jpg",import.meta.url).toString();var $={};$=new URL("6mob@1x.4ca7edf6.jpg",import.meta.url).toString();var M={};M=new URL("7desk@1x.bd263f1b.jpg",import.meta.url).toString();var N={};N=new URL("7tab@1x.3cc9ea70.jpg",import.meta.url).toString();var Q={};Q=new URL("7mob@1x.f672273d.jpg",import.meta.url).toString();var O={};O=new URL("8desk@1x.0fe487a9.jpg",import.meta.url).toString();var T={};T=new URL("8tab@1x.fa92e96a.jpg",import.meta.url).toString();var B={};B=new URL("8mob@1x.ada5ba30.jpg",import.meta.url).toString();var D={};D=new URL("9desk@1x.3627d42f.jpg",import.meta.url).toString();var J={};J=new URL("9tab@1x.78c3aa74.jpg",import.meta.url).toString();var Z={};Z=new URL("9mob@1x.9c41dce6.jpg",import.meta.url).toString();var z={};z=new URL("10desk@1x.bf93d187.jpg",import.meta.url).toString();var W={};W=new URL("10tab@1x.bc96d452.jpg",import.meta.url).toString();var C={};C=new URL("10mob@1x.5c2e3975.jpg",import.meta.url).toString();var X={};X=new URL("11desk@1x.016fce68.jpg",import.meta.url).toString();var G={};G=new URL("11tab@1x.cedb6327.jpg",import.meta.url).toString();var K={};K=new URL("11mob@1x.72753896.jpg",import.meta.url).toString();var V={};V=new URL("12desk@1x.ab64a7f3.jpg",import.meta.url).toString();var Y={};Y=new URL("12tab@1x.a6cc30bb.jpg",import.meta.url).toString();var tt={};tt=new URL("12mob@1x.d8f79aaf.jpg",import.meta.url).toString();var te={};te=new URL("13desk@1x.dbe006b3.jpg",import.meta.url).toString();var to={};to=new URL("13tab@1x.409b8dde.jpg",import.meta.url).toString();var ti={};ti=new URL("13mob@1x.d7b3fe15.jpg",import.meta.url).toString();const tr=[{id:1,deskPhoto:/*@__PURE__*/e(S),tabPhoto:/*@__PURE__*/e(R),mobPhoto:/*@__PURE__*/e(x),// deskPhoto2x: desk1x2,
// tabPhoto2x: tab1x2,
// mobPhoto2x: mob1x1,
// photo: desk1x1,
// photo2x: g1x2,
title:"Misha",alt:"tort dlya Mishy",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis providentat"},{id:2,deskPhoto:/*@__PURE__*/e(v),tabPhoto:/*@__PURE__*/e(E),mobPhoto:/*@__PURE__*/e(h),// deskPhoto2x: desk2x2,
// tabPhoto2x: tab2x2,
// mobPhoto2x: mob2x1,
// photo: g2,
title:"",alt:"",description:"July 2023"},{id:3,deskPhoto:/*@__PURE__*/e(j),tabPhoto:/*@__PURE__*/e(F),mobPhoto:/*@__PURE__*/e(A),// deskPhoto2x: desk3x2,
// tabPhoto2x: tab3x2,
// mobPhoto2x: mob3x1,
// photo: g3,
title:"",alt:"",description:"July 2023"},{id:4,deskPhoto:/*@__PURE__*/e(L),tabPhoto:/*@__PURE__*/e(k),mobPhoto:/*@__PURE__*/e(w),// deskPhoto2x: desk4x2,
// tabPhoto2x: tab4x2,
// mobPhoto2x: mob4x1,
// photo: g4,
title:"",alt:"",description:"July 2023"},{id:5,deskPhoto:/*@__PURE__*/e(P),tabPhoto:/*@__PURE__*/e(y),mobPhoto:/*@__PURE__*/e(U),// deskPhoto2x: desk5x2,
// tabPhoto2x: tab5x2,
// mobPhoto2x: mob5x1,
// photo: g5,
title:"",alt:"",description:"July 2023"},{id:6,deskPhoto:/*@__PURE__*/e(q),tabPhoto:/*@__PURE__*/e(I),mobPhoto:/*@__PURE__*/e($),// deskPhoto2x: desk6x2,
// tabPhoto2x: tab6x2,
// mobPhoto2x: mob6x1,
// photo: g6,
title:"",alt:"",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis providentat"},{id:7,deskPhoto:/*@__PURE__*/e(M),tabPhoto:/*@__PURE__*/e(N),mobPhoto:/*@__PURE__*/e(Q),// deskPhoto2x: desk7x2,
// tabPhoto2x: tab7x2,
// mobPhoto2x: mob7x1,
// photo: g7,
title:"",alt:"",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis providentat"},{id:8,deskPhoto:/*@__PURE__*/e(O),tabPhoto:/*@__PURE__*/e(T),mobPhoto:/*@__PURE__*/e(B),// deskPhoto2x: desk8x2,
// tabPhoto2x: tab8x2,
// mobPhoto2x: mob8x1,
// photo: g8,
title:"",alt:"",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis providentat"},{id:9,deskPhoto:/*@__PURE__*/e(D),tabPhoto:/*@__PURE__*/e(J),mobPhoto:/*@__PURE__*/e(Z),// deskPhoto2x: desk9x2,
// tabPhoto2x: tab9x2,
// mobPhoto2x: mob9x1,
// photo: g9,
title:"",alt:"",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis providentat"},{id:10,deskPhoto:/*@__PURE__*/e(z),tabPhoto:/*@__PURE__*/e(W),mobPhoto:/*@__PURE__*/e(C),// deskPhoto2x: desk10x2,
// tabPhoto2x: tab10x2,
// mobPhoto2x: mob10x1,
// photo: g10,
title:"",alt:"",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis providentat"},{id:11,deskPhoto:/*@__PURE__*/e(X),tabPhoto:/*@__PURE__*/e(G),mobPhoto:/*@__PURE__*/e(K),// deskPhoto2x: desk11x2,
// tabPhoto2x: tab11x2,
// mobPhoto2x: mob11x1,
// photo: g11,
title:"",alt:"",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis providentat"},{id:12,deskPhoto:/*@__PURE__*/e(V),tabPhoto:/*@__PURE__*/e(Y),mobPhoto:/*@__PURE__*/e(tt),// deskPhoto2x: desk12x2,
// tabPhoto2x: tab12x2,
// mobPhoto2x: mob12x1,
// photo: g12,
title:"",alt:"",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis providentat"},{id:13,deskPhoto:/*@__PURE__*/e(te),tabPhoto:/*@__PURE__*/e(to),mobPhoto:/*@__PURE__*/e(ti),// deskPhoto2x: desk13x2,
// tabPhoto2x: tab13x2,
// mobPhoto2x: mob13x1,
// photo: g13,
title:"",alt:"",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis providentat"}],ta={gallery:document.querySelector(".container__gallery")};console.log(tr),function(){let t=tr.map(({id:t,deskPhoto:e,deskPhoto2x:o,tabPhoto:i,tabPhoto2x:r,mobPhoto:a,mobPhoto2x:d,alt:n,title:c,description:s})=>`        
            <li class="card" key=${t}>                
                
                    <div class="face face1">
                        <div class="content">
                            <picture>
                                <source srcset="
                                    ${e} 1x, 
                                    ${o} 2x"
                                    media="(min-width:1200px)"/>
                                <source srcset="
                                    ${i} 1x, 
                                    ${r} 2x" 
                                    media="(min-width:768px)"/>
                                <source srcset="
                                    ${a} 1x, 
                                    ${d} 2x" 
                                    media="(max-width:767px)"/>
                                <img
                                    src=${e} 
                                    alt=${n} 
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
                            <h3>${c}</h3>
                            <p>${s}</p>
                        </div>
                    </div>
                 
            </li>        
        `).join("");ta.gallery.insertAdjacentHTML("beforeend",t)}(tr),document.getElementById("contactForm").addEventListener("submit",async function(t){t.preventDefault();let e=t.target,o=new FormData(e),i={};console.log(i),o.forEach((t,e)=>{i[e]=t});try{let t=await fetch("https://cakes-backend.onrender.com/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});t.ok?alert("Заказ успішно надіслано!"):alert("Сталася помилка при надсиланні заказу.")}catch(t){console.error("Помилка:",t),alert("Сталася помилка при надсиланні заказу.")}});//# sourceMappingURL=index.4d0cacf3.js.map

//# sourceMappingURL=index.4d0cacf3.js.map
