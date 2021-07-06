(()=>{"use strict";let e=!1;class t{constructor({selector:e,pattern:t,method:o}){this.form=document.querySelector(e),this.pattern=t,this.method=o,this.elementsForm=[...this.form.elements].filter((e=>"button"!==e.tagName.toLowerCase()&&"button"!==e.type)),this.error=new Set}init(){this.applyStyle(),this.setPattern(),this.elementsForm.forEach((e=>e.addEventListener("change",this.checkIt.bind(this)))),this.form.addEventListener("submit",(t=>{if(this.elementsForm.forEach((e=>this.checkIt({target:e}))),this.error.size)return t.preventDefault(),void(e=!0);e=!1,this.elementsForm.forEach((e=>e.classList.remove("success")))}))}isValid(e){const t={notEmpty:e=>""!==e.value.trim(),pattern:(e,t)=>t.test(e.value)};if(!this.method)return console.warn("Передайте методы"),!0;{const o=this.method[e.id];if(o)return o.every((o=>t[o[0]](e,this.pattern[o[1]])))}}checkIt(e){const t=e.target;this.isValid(t)?(this.showSuccess(t),this.error.delete(t)):(this.showError(t),this.error.add(t))}showError(e){if(e.classList.remove("success"),e.classList.add("error"),e.nextElementSibling&&e.nextElementSibling.classList.contains("validator-error"))return;const t=document.createElement("div");t.textContent="Ошибка в этом поле",t.classList.add("validator-error"),e.insertAdjacentElement("afterend",t)}showSuccess(e){e.classList.remove("error"),e.classList.add("success"),e.nextElementSibling&&e.nextElementSibling.classList.contains("validator-error")&&e.nextElementSibling.remove()}applyStyle(){const e=document.createElement("style");e.textContent="\n        input.success {\n            border: 2px solid green !important;\n        }\n        input.error {\n            border: 2px solid red !important;\n        }\n        .validator-error {\n            font-size: 14px !important;\n            color: red !important;\n            font-family: sans-serif !important;\n        }\n        ",document.head.appendChild(e)}setPattern(){this.pattern.phone||(this.pattern.phone=/^\+?[78]([-()]*\d){10}$/),this.pattern.email||(this.pattern.email=/^\w+@+\w+\.\w{2,}$/)}}const o=new t({selector:"#form1",pattern:{name:/[A-Za-zА-Яа-яЁё]{2,}/,email:/^\w+@+\w+\.\w{2,}$/,phone:/^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/},method:{"form1-name":[["notEmpty"],["pattern","name"]],"form1-email":[["notEmpty"],["pattern","email"]],"form1-phone":[["notEmpty"],["pattern","phone"]]}}),n=new t({selector:"#form2",pattern:{name:/[A-Za-zА-Яа-яЁё]{2,}/,message:/[а-яё -]/gi,email:/^\w+@+\w+\.\w{2,}$/,phone:/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/},method:{"form2-name":[["notEmpty"],["pattern","name"]],"form2-message":[["notEmpty"],["pattern","message"]],"form2-email":[["notEmpty"],["pattern","email"]],"form2-phone":[["notEmpty"],["pattern","phone"]]}}),s=new t({selector:"#form3",pattern:{name:/[A-Za-zА-Яа-яЁё]{2,}/,email:/^\w+@+\w+\.\w{2,}$/,phone:/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/},method:{"form3-name":[["notEmpty"],["pattern","name"]],"form3-email":[["notEmpty"],["pattern","email"]],"form3-phone":[["notEmpty"],["pattern","phone"]]}});o.init(),n.init(),s.init();const i=new Date;(function(e){const t=document.querySelector("#timer-hours"),o=document.querySelector("#timer-minutes"),n=document.querySelector("#timer-seconds");function s(e){return void 0===e.toString()[1]?"0"+e:e}function i(){const i=function(){const t=(new Date(e).getTime()-(new Date).getTime())/1e3,o=Math.floor(t%60),n=Math.floor(t/60%60);return{timeRemaining:t,hours:Math.floor(t/60/60)%24,minutes:n,seconds:o}}();i.timeRemaining<0?(t.textContent="00",o.textContent="00",n.textContent="00"):(t.textContent=s(i.hours),o.textContent=s(i.minutes),n.textContent=s(i.seconds))}i(),setInterval(i,1e3)})(`${i.getFullYear()}-${i.getMonth()+1}-${i.getDate()+1}`),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),o=t.querySelectorAll("ul>li>a");document.body.addEventListener("click",(n=>{const s=n.target;s.classList.contains("close-btn")?(n.preventDefault(),t.classList.remove("active-menu")):s.closest(".menu")===e?t.classList.add("active-menu"):s!==t&&"li"!==s.tagName.toLowerCase()&&t.classList.remove("active-menu"),o.forEach((e=>{s===e&&(((e,t)=>{e.preventDefault();const o=t.getAttribute("href").substring(1),n=document.getElementById(o).getBoundingClientRect().top;window.scrollBy({top:n,behavior:"smooth"})})(n,e),t.classList.remove("active-menu"))}))}))})(),document.querySelector("a").addEventListener("click",(function(e){((e,t)=>{e.preventDefault();const o=t.getAttribute("href").substring(1),n=document.getElementById(o).getBoundingClientRect().top;window.scrollBy({top:n,behavior:"smooth"})})(e,this)})),(()=>{const e=document.querySelector(".popup");document.querySelectorAll(".popup-btn").forEach((t=>{t.addEventListener("click",(()=>{e.style.display="block"}))})),e.addEventListener("click",(t=>{let o=t.target;o.classList.contains("popup-close")?e.style.display="none":(o=o.closest(".popup-content"),o||(e.style.display="none"))}))})(),(()=>{const e=document.querySelector(".service-header"),t=e.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{let n=e.target;n=n.closest(".service-header-tab"),n?t.forEach(((e,s)=>{e===n&&(e=>{for(let n=0;n<o.length;n++)e===n?(t[n].classList.add("active"),o[n].classList.remove("d-none")):(t[n].classList.remove("active"),o[n].classList.add("d-none"))})(s)})):n=n.parentNode}))})(),(()=>{const e=document.querySelectorAll(".portfolio-item");let t=document.querySelectorAll(".dot");const o=document.querySelector(".portfolio-content");let n,s=0;(()=>{for(let t=0;t<e.length;t++){const e=document.createElement("li");e.classList.add("dot"),0===t&&e.classList.add("dot-active"),document.querySelector(".portfolio-dots").append(e)}})(),t=document.querySelectorAll(".dot");const i=(e,t,o)=>{e[t].classList.remove(o)},r=(e,t,o)=>{e[t].classList.add(o)},a=()=>{i(e,s,"portfolio-item-active"),i(t,s,"dot-active"),s++,s>=e.length&&(s=0),r(e,s,"portfolio-item-active"),r(t,s,"dot-active")},l=e=>{n=setInterval(a,e)};o.addEventListener("click",(o=>{o.preventDefault();const n=o.target;n.matches(".portfolio-btn, .dot")&&(i(e,s,"portfolio-item-active"),i(t,s,"dot-active"),n.matches("#arrow-right")?s++:n.matches("#arrow-left")?s--:n.matches(".dot")&&t.forEach(((e,t)=>{e===n&&(s=t)})),s>=e.length&&(s=0),s<0&&(s=e.length-1),r(e,s,"portfolio-item-active"),r(t,s,"dot-active"))})),o.addEventListener("mouseover",(e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&clearInterval(n)})),o.addEventListener("mouseout",(e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&l(1500)})),l(1500)})(),((e=100)=>{let t,o=0;const n=document.querySelector(".calc-block"),s=document.querySelector(".calc-type"),i=document.querySelector(".calc-square"),r=document.querySelector(".calc-day"),a=document.querySelector(".calc-count"),l=document.getElementById("total");n.addEventListener("change",(n=>{const c=n.target;(c.matches("select")||c.matches("input"))&&(()=>{let n=0,c=1,d=1;const m=s.options[s.selectedIndex].value,p=+i.value;a.value>1&&(c+=(a.value-1)/10),r.value&&r.value<5?d*=2:r.value&&r.value<10&&(d*=1.5),m&&p&&(n=Math.ceil(e*m*p*c*d));const u=e=>{l.textContent=e};let h=0;t<n?h=Math.ceil((n-t)/100):t>n&&(h=Math.ceil((t-n)/100));let v=0;const f=setInterval((()=>{v++,o<n?(o+=h,i.disabled="true",r.disabled="true",a.disabled="true",u(Math.ceil(o))):o>n&&(o-=h,i.disabled="true",r.disabled="true",a.disabled="true",u(Math.ceil(o))),100===v&&(clearInterval(f),u(n),s.removeAttribute("disabled"),i.removeAttribute("disabled"),r.removeAttribute("disabled"),a.removeAttribute("disabled"))}),10);t=n,s.addEventListener("change",(()=>{i.value="",r.value="",a.value="",l.value=0})),""===s.options[s.selectedIndex].value&&""===i.value&&""===r.value&&""===a.value&&(n=0,c=1,d=1,o=0,t=0)})()}))})(100),[document.getElementById("form1"),document.getElementById("form2"),document.getElementById("form3")].forEach((e=>{[...e.elements].filter((e=>"button"!==e.tagName.toLowerCase()&&"button"!==e.type)).forEach((e=>{e.addEventListener("input",(()=>{((e,t)=>{switch(t){case"name":e.value=e.value.replace(/[^а-яё -]/gi,"");break;case"email":e.value=e.value.replace(/[^a-z@_.!~*'0-9 -]/gi,"");break;case"phone":e.value=e.value.replace(/[^0-9()+-]/,"");break;case"message":e.value=e.value.replace(/[^а-яё -]/gi,"")}})(e,e.id.split("-")[1])})),e.addEventListener("blur",(()=>{((e,t)=>{"name"===t&&(e.value=e.value.toLowerCase().replace(/(?<!\p{Lowercase})\p{Lowercase}/gu,(e=>e.toUpperCase()))),e.value=e.value.trim().replace(/^\\-/,"").replace(/ {1,}/g," ").replace(/\\-{1,}/g,"-").replace(/\+{1,}/g,"+")})(e,e.id.split("-")[1])}))}))})),(()=>{const e=document.getElementById("form2-phone"),t=document.getElementById("form2-name"),o=document.getElementById("form2-email"),n=document.getElementById("form2-message");e.addEventListener("input",(()=>{e.value=e.value.replace(/[^0-9()+-]/,"")})),t.addEventListener("input",(()=>{t.value=t.value.replace(/[^а-яё -]/gi,"")})),o.addEventListener("input",(()=>{o.value=o.value.replace(/[^a-z@_.!~*'-]/gi,"")})),n.addEventListener("input",(()=>{n.value=n.value.replace(/[^а-яё -]/gi,"")}));const s=e=>{e.value=e.value.trim().replace(/^\\-/,"").replace(/ {1,}/g," ").replace(/\\-{1,}/g,"-").replace(/\+{1,}/g,"+")};e.addEventListener("focusout",(()=>{s(e)})),t.addEventListener("focusout",(()=>{s(t),t.value=t.value.toLowerCase().replace(/(?<!\p{Lowercase})\p{Lowercase}/gu,(e=>e.toUpperCase()))})),o.addEventListener("focusout",(()=>{s(o)})),n.addEventListener("focusout",(()=>{s(n)}))})(),document.querySelectorAll(".command__photo").forEach((e=>{let t;e.addEventListener("mouseenter",(e=>{t=e.target.src,e.target.src=e.target.dataset.img})),e.addEventListener("mouseout",(e=>{e.target.src=t}))})),(()=>{const t=[...document.querySelectorAll("form")],o=document.createElement("div");o.style.cssText="font-size: 2rem; color: #FFF !important;",t.forEach((t=>{t.addEventListener("submit",(n=>{if(n.preventDefault(),!e){t.appendChild(o),o.textContent="Загрузка...";const e=new FormData(t),n={};for(const t of e.entries())n[t[0]]=t[1];(e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}))(n).then((e=>{if(200!==e.status)throw new Error("Status network not 200");o.textContent="Спасибо! Мы скоро с вами свяжимся!",setTimeout((()=>{o.remove(),document.querySelector(".popup").style.display="none"}),3e3),t.reset()})).catch((e=>{o.textContent="Что то пошло не так...",setTimeout((()=>{o.remove(),document.querySelector(".popup").style.display="none"}),3e3),t.reset()}))}}))}))})(),new class{constructor({main:e,wrap:t,next:o,prev:n,infinity:s=!1,position:i=0,slidesToShow:r=3,responsive:a=[]}){this.main=document.querySelector(e),this.wrap=document.querySelector(t),n&&o&&(this.next=document.querySelector(o),this.prev=document.querySelector(n)),this.slidesToShow=r,this.slides=document.querySelector(t).children,this.options={position:i,infinity:s,widthSlide:Math.floor(100/this.slidesToShow),maxPosition:this.slides.length-this.slidesToShow},this.responsive=a}init(){this.addClass(),this.addStyles(),this.prev&&this.next||this.addArrow(),this.controlSlider(),this.responseInit()}addClass(){this.main.classList.add("glo-slider"),this.wrap.classList.add("glo-slider__wrap");for(const e of this.slides)e.classList.add("glo-slider__item")}controlSlider(){this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this))}prevSlider(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0&&(this.options.position=this.options.maxPosition),this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSlide}%)`)}nextSlider(){(this.options.infinity||this.options.position<this.options.maxPosition)&&(++this.options.position,this.options.position>this.options.maxPosition&&(this.options.position=0),this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSlide}%)`)}addArrow(){this.prev=document.createElement("button"),this.next=document.createElement("button"),this.prev.className="glo-slider__prev",this.next.className="glo-slider__next",this.main.appendChild(this.prev),this.main.appendChild(this.next);const e=document.createElement("style");e.textContent="\n        .glo-slider__next{\n            margin: 0 10px;\n            border:20px solid transparent;\n            background: transparent;\n            border-left-color: #19bbff\n        }        \n        .glo-slider__prev{\n            margin: 0 10px;\n            border:20px solid transparent;\n            background: transparent;\n            border-right-color: #19b5fe;\n        }\n        .glo-slider__prev:hover,\n        .glo-slider__next:hover,\n        .glo-slider__prev:focus,\n        .glo-slider__next:focus{\n            background: transparent;\n            outline: transparent;\n        }\n        ",document.head.appendChild(e)}addStyles(){let e=document.createElement("style");e||(e=document.createElement("style"),e.id="sliderCarousel-style"),e.textContent=`\n        .glo-slider{\n            overflow: hidden !important;\n        }\n        .glo-slider__wrap{\n            display: flex !important;\n            transition: transform 0.5s !important;\n            will-change: transform !important;\n        }\n        .glo-slider__item{\n            display: flex !important;\n            align-items: center;\n            justify-content: center;\n            flex: 0 0 ${this.options.widthSlide}% !important;\n            margin: auto 0 !important;\n        }`,document.head.appendChild(e)}responseInit(){const e=this.slidesToShow,t=this.responsive.map((e=>e.breakpoint)),o=Math.max(...t);window.addEventListener("resize",(()=>{const n=document.documentElement.clientWidth;if(n<o)for(let e=0;e<t.length;e++)n<t[e]&&(console.log(1),this.slidesToShow=this.responsive[e].slideToShow,this.options.widthSlide=Math.floor(100/this.slidesToShow),this.addStyles());else this.slidesToShow=e,this.options.widthSlide=Math.floor(100/this.slidesToShow),this.addStyles()}))}}({main:".companies-wrapper",wrap:".companies-hor",infinity:!0,slidesToShow:4,responsive:[{breakpoint:1024,slideToShow:3},{breakpoint:768,slideToShow:2},{breakpoint:576,slideToShow:1}]}).init()})();