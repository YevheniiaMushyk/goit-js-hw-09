import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */const t=document.querySelector(".feedback-form"),a=t.elements.email,l=t.elements.message,o="feedback-form-state",e=JSON.parse(localStorage.getItem(o));typeof e=="object"&&e!==null&&(e.hasOwnProperty(a)&&(a.value=e.email),e.hasOwnProperty(l)&&(l.value=e.message));t.addEventListener("input",()=>{const s=a.value.trim(),m=l.value.trim();localStorage.setItem(o,JSON.stringify({email:s,message:m})),e.email=s,e.message=m});t.addEventListener("submit",s=>{s.preventDefault(),a.value&&l.value?console.log(e):(alert("Fill in all fields of the form"),localStorage.removeItem(o)),a.value="",l.value="",t.reset()});
//# sourceMappingURL=commonHelpers2.js.map
