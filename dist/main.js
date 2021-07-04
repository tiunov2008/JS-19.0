(()=>{"use strict";let e=!1;class t{constructor({selector:e,pattern:t,method:o}){this.form=document.querySelector(e),this.pattern=t,this.method=o,this.elementsForm=[...this.form.elements].filter((e=>"button"!==e.tagName.toLowerCase()&&"button"!==e.type)),this.error=new Set}init(){this.applyStyle(),this.setPattern(),this.elementsForm.forEach((e=>e.addEventListener("change",this.checkIt.bind(this)))),this.form.addEventListener("submit",(t=>{if(this.elementsForm.forEach((e=>this.checkIt({target:e}))),this.error.size)return t.preventDefault(),void(e=!0);e=!1,this.elementsForm.forEach((e=>e.classList.remove("success")))}))}isValid(e){const t={notEmpty:e=>""!==e.value.trim(),pattern:(e,t)=>t.test(e.value)};if(!this.method)return console.warn("Передайте методы"),!0;{const o=this.method[e.id];if(o)return o.every((o=>t[o[0]](e,this.pattern[o[1]])))}}checkIt(e){const t=e.target;this.isValid(t)?(this.showSuccess(t),this.error.delete(t)):(this.showError(t),this.error.add(t))}showError(e){if(e.classList.remove("success"),e.classList.add("error"),e.nextElementSibling&&e.nextElementSibling.classList.contains("validator-error"))return;const t=document.createElement("div");t.textContent="Ошибка в этом поле",t.classList.add("validator-error"),e.insertAdjacentElement("afterend",t)}showSuccess(e){e.classList.remove("error"),e.classList.add("success"),e.nextElementSibling&&e.nextElementSibling.classList.contains("validator-error")&&e.nextElementSibling.remove()}applyStyle(){const e=document.createElement("style");e.textContent="\n        input.success {\n            border: 2px solid green !important;\n        }\n        input.error {\n            border: 2px solid red !important;\n        }\n        .validator-error {\n            font-size: 14px !important;\n            color: red !important;\n            font-family: sans-serif !important;\n        }\n        ",document.head.appendChild(e)}setPattern(){this.pattern.phone||(this.pattern.phone=/^\+?[78]([-()]*\d){10}$/),this.pattern.email||(this.pattern.email=/^\w+@+\w+\.\w{2,}$/)}}const o=new t({selector:"#form1",pattern:{name:/[A-Za-zА-Яа-яЁё]{2,}/,email:/^\w+@+\w+\.\w{2,}$/,phone:/^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/},method:{"form1-name":[["notEmpty"],["pattern","name"]],"form1-email":[["notEmpty"],["pattern","email"]],"form1-phone":[["notEmpty"],["pattern","phone"]]}}),n=new t({selector:"#form2",pattern:{name:/[A-Za-zА-Яа-яЁё]{2,}/,message:/[а-яё -]/gi,email:/^\w+@+\w+\.\w{2,}$/,phone:/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/},method:{"form2-name":[["notEmpty"],["pattern","name"]],"form2-message":[["notEmpty"],["pattern","message"]],"form2-email":[["notEmpty"],["pattern","email"]],"form2-phone":[["notEmpty"],["pattern","phone"]]}}),r=new t({selector:"#form3",pattern:{name:/[A-Za-zА-Яа-яЁё]{2,}/,email:/^\w+@+\w+\.\w{2,}$/,phone:/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/},method:{"form3-name":[["notEmpty"],["pattern","name"]],"form3-email":[["notEmpty"],["pattern","email"]],"form3-phone":[["notEmpty"],["pattern","phone"]]}});o.init(),n.init(),r.init();const a=new Date;(function(e){const t=document.querySelector("#timer-hours"),o=document.querySelector("#timer-minutes"),n=document.querySelector("#timer-seconds");function r(e){return void 0===e.toString()[1]?"0"+e:e}function a(){const a=function(){const t=(new Date(e).getTime()-(new Date).getTime())/1e3,o=Math.floor(t%60),n=Math.floor(t/60%60);return{timeRemaining:t,hours:Math.floor(t/60/60)%24,minutes:n,seconds:o}}();a.timeRemaining<0?(t.textContent="00",o.textContent="00",n.textContent="00"):(t.textContent=r(a.hours),o.textContent=r(a.minutes),n.textContent=r(a.seconds))}a(),setInterval(a,1e3)})(`${a.getFullYear()}-${a.getMonth()+1}-${a.getDate()+1}`),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),o=t.querySelectorAll("ul>li>a");document.body.addEventListener("click",(n=>{const r=n.target;r.classList.contains("close-btn")?(n.preventDefault(),t.classList.remove("active-menu")):r.closest(".menu")===e?t.classList.add("active-menu"):r!==t&&"li"!==r.tagName.toLowerCase()&&t.classList.remove("active-menu"),o.forEach((e=>{r===e&&(((e,t)=>{e.preventDefault();const o=t.getAttribute("href").substring(1),n=document.getElementById(o).getBoundingClientRect().top;window.scrollBy({top:n,behavior:"smooth"})})(n,e),t.classList.remove("active-menu"))}))}))})(),document.querySelector("a").addEventListener("click",(function(e){((e,t)=>{e.preventDefault();const o=t.getAttribute("href").substring(1),n=document.getElementById(o).getBoundingClientRect().top;window.scrollBy({top:n,behavior:"smooth"})})(e,this)})),(()=>{const e=document.querySelector(".popup");document.querySelectorAll(".popup-btn").forEach((t=>{t.addEventListener("click",(()=>{e.style.display="block"}))})),e.addEventListener("click",(t=>{let o=t.target;o.classList.contains("popup-close")?e.style.display="none":(o=o.closest(".popup-content"),o||(e.style.display="none"))}))})(),(()=>{const e=document.querySelector(".service-header"),t=e.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{let n=e.target;n=n.closest(".service-header-tab"),n?t.forEach(((e,r)=>{e===n&&(e=>{for(let n=0;n<o.length;n++)e===n?(t[n].classList.add("active"),o[n].classList.remove("d-none")):(t[n].classList.remove("active"),o[n].classList.add("d-none"))})(r)})):n=n.parentNode}))})(),(()=>{const e=document.querySelectorAll(".portfolio-item");let t=document.querySelectorAll(".dot");const o=document.querySelector(".portfolio-content");let n,r=0;(()=>{for(let t=0;t<e.length;t++){const e=document.createElement("li");e.classList.add("dot"),0===t&&e.classList.add("dot-active"),document.querySelector(".portfolio-dots").append(e)}})(),t=document.querySelectorAll(".dot");const a=(e,t,o)=>{e[t].classList.remove(o)},s=(e,t,o)=>{e[t].classList.add(o)},l=()=>{a(e,r,"portfolio-item-active"),a(t,r,"dot-active"),r++,r>=e.length&&(r=0),s(e,r,"portfolio-item-active"),s(t,r,"dot-active")},c=e=>{n=setInterval(l,e)};o.addEventListener("click",(o=>{o.preventDefault();const n=o.target;n.matches(".portfolio-btn, .dot")&&(a(e,r,"portfolio-item-active"),a(t,r,"dot-active"),n.matches("#arrow-right")?r++:n.matches("#arrow-left")?r--:n.matches(".dot")&&t.forEach(((e,t)=>{e===n&&(r=t)})),r>=e.length&&(r=0),r<0&&(r=e.length-1),s(e,r,"portfolio-item-active"),s(t,r,"dot-active"))})),o.addEventListener("mouseover",(e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&clearInterval(n)})),o.addEventListener("mouseout",(e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&c(1500)})),c(1500)})(),((e=100)=>{let t,o=0;const n=document.querySelector(".calc-block"),r=document.querySelector(".calc-type"),a=document.querySelector(".calc-square"),s=document.querySelector(".calc-day"),l=document.querySelector(".calc-count"),c=document.getElementById("total");n.addEventListener("change",(n=>{const i=n.target;(i.matches("select")||i.matches("input"))&&(()=>{let n=0,i=1,d=1;const m=r.options[r.selectedIndex].value,u=+a.value;l.value>1&&(i+=(l.value-1)/10),s.value&&s.value<5?d*=2:s.value&&s.value<10&&(d*=1.5),m&&u&&(n=Math.ceil(e*m*u*i*d));const p=e=>{c.textContent=e};let v=0;t<n?v=Math.ceil((n-t)/100):t>n&&(v=Math.ceil((t-n)/100));let h=0;const f=setInterval((()=>{h++,o<n?(o+=v,a.disabled="true",s.disabled="true",l.disabled="true",p(Math.ceil(o))):o>n&&(o-=v,a.disabled="true",s.disabled="true",l.disabled="true",p(Math.ceil(o))),100===h&&(clearInterval(f),p(n),r.removeAttribute("disabled"),a.removeAttribute("disabled"),s.removeAttribute("disabled"),l.removeAttribute("disabled"))}),10);t=n,r.addEventListener("change",(()=>{a.value="",s.value="",l.value="",c.value=0})),""===r.options[r.selectedIndex].value&&""===a.value&&""===s.value&&""===l.value&&(n=0,i=1,d=1,o=0,t=0)})()}))})(100),[document.getElementById("form1"),document.getElementById("form2"),document.getElementById("form3")].forEach((e=>{[...e.elements].filter((e=>"button"!==e.tagName.toLowerCase()&&"button"!==e.type)).forEach((e=>{e.addEventListener("input",(()=>{((e,t)=>{switch(t){case"name":e.value=e.value.replace(/[^а-яё -]/gi,"");break;case"email":e.value=e.value.replace(/[^a-z@_.!~*'0-9 -]/gi,"");break;case"phone":e.value=e.value.replace(/[^0-9()+-]/,"");break;case"message":e.value=e.value.replace(/[^а-яё -]/gi,"")}})(e,e.id.split("-")[1])})),e.addEventListener("blur",(()=>{((e,t)=>{"name"===t&&(e.value=e.value.toLowerCase().replace(/(?<!\p{Lowercase})\p{Lowercase}/gu,(e=>e.toUpperCase()))),e.value=e.value.trim().replace(/^\\-/,"").replace(/ {1,}/g," ").replace(/\\-{1,}/g,"-").replace(/\+{1,}/g,"+")})(e,e.id.split("-")[1])}))}))})),(()=>{const e=document.getElementById("form2-phone"),t=document.getElementById("form2-name"),o=document.getElementById("form2-email"),n=document.getElementById("form2-message");e.addEventListener("input",(()=>{e.value=e.value.replace(/[^0-9()+-]/,"")})),t.addEventListener("input",(()=>{t.value=t.value.replace(/[^а-яё -]/gi,"")})),o.addEventListener("input",(()=>{o.value=o.value.replace(/[^a-z@_.!~*'-]/gi,"")})),n.addEventListener("input",(()=>{n.value=n.value.replace(/[^а-яё -]/gi,"")}));const r=e=>{e.value=e.value.trim().replace(/^\\-/,"").replace(/ {1,}/g," ").replace(/\\-{1,}/g,"-").replace(/\+{1,}/g,"+")};e.addEventListener("focusout",(()=>{r(e)})),t.addEventListener("focusout",(()=>{r(t),t.value=t.value.toLowerCase().replace(/(?<!\p{Lowercase})\p{Lowercase}/gu,(e=>e.toUpperCase()))})),o.addEventListener("focusout",(()=>{r(o)})),n.addEventListener("focusout",(()=>{r(n)}))})(),document.querySelectorAll(".command__photo").forEach((e=>{let t;e.addEventListener("mouseenter",(e=>{t=e.target.src,e.target.src=e.target.dataset.img})),e.addEventListener("mouseout",(e=>{e.target.src=t}))})),(()=>{const t=[...document.querySelectorAll("form")],o=document.createElement("div");o.style.cssText="font-size: 2rem; color: #FFF !important;",t.forEach((t=>{t.addEventListener("submit",(n=>{if(n.preventDefault(),!e){t.appendChild(o),o.textContent="Загрузка...";const e=new FormData(t),n={};for(const t of e.entries())n[t[0]]=t[1];(e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}))(n).then((e=>{if(200!==e.status)throw new Error("Status network not 200");o.textContent="Спасибо! Мы скоро с вами свяжимся!",setTimeout((()=>{o.remove(),document.querySelector(".popup").style.display="none"}),3e3),t.reset()})).catch((e=>{o.textContent="Что то пошло не так...",setTimeout((()=>{o.remove(),document.querySelector(".popup").style.display="none"}),3e3),t.reset()}))}}))}))})()})();