(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{281:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(266),l=a(265),c=(a(38),a(321)),i=(a(16),function(e,t){var a=Object(n.useState)(e),s=a[0],r=a[1];return{handleSubmit:function(e){e&&e.preventDefault(),t()},handleInputChange:function(e){e.persist(),r((function(t){var a;return Object.assign({},t,((a={})[e.target.name]=e.target.value,a))}))},inputs:s}}),o=a(287),u=a(284),m=a(182),d=a(285),p=function(){var e=i({name:"",email:"",message:""},(function(){var e={email:t.email,name:t.name,message:t.message};c.send("default_service","contactform",e,"user_2aCUzqnCuE4sSeqWgys7M").then((function(e){console.log("Success",e.status,e.text)}),(function(e){console.log("Failed",e)})),alert("Thank you for your message "+t.name+"! We'll get back to you soon!")})),t=e.inputs,a=e.handleInputChange,n=e.handleSubmit;return s.a.createElement(o.a,{id:"contactPageForm",onSubmit:n},s.a.createElement(u.a,null,s.a.createElement(m.a,{xs:12,md:6},s.a.createElement(o.a.Group,null,s.a.createElement(o.a.Control,{required:!0,id:"contactName",as:"input",type:"text",name:"name",defaultValue:t.name,onChange:a,placeholder:"What is your name?"}))),s.a.createElement(m.a,{xs:12,md:6},s.a.createElement(o.a.Group,null,s.a.createElement(o.a.Control,{required:!0,id:"contactEmail",as:"input",type:"email",name:"email",defaultValue:t.email,onChange:a,placeholder:"Your email?"})))),s.a.createElement(o.a.Group,null,s.a.createElement(o.a.Control,{required:!0,id:"contactMessage",as:"textarea",rows:"3",name:"message",defaultValue:t.message,onChange:a,placeholder:"How can we help you?"})),s.a.createElement(d.a,{variant:"success",size:"lg",type:"submit"},"Send a message"))},f=a(161),E=a.n(f),h=a(162),v=a.n(h),g=a(283);t.default=function(){return s.a.createElement(r.a,{pageInfo:{pageName:"contact"}},s.a.createElement(l.a,{title:"Contact: GLI Norcal Landscape Construction"}),s.a.createElement(g.a,{className:"contact-bg"},s.a.createElement("div",{className:"contact wrapper"},s.a.createElement("div",{className:"container d-flex justify-content-around align-content-center 100-h"},s.a.createElement("div",{className:"contact-info card card-body mx-1"},s.a.createElement("h1",{className:"card-title text-white"},"Hi there!"),s.a.createElement("p",{className:"card-text"},"We would love to hear from you!"),s.a.createElement(g.a,{className:"pb-5"},s.a.createElement(p,null)),s.a.createElement(g.a,null,s.a.createElement(u.a,null,s.a.createElement(m.a,{xs:12,lg:{span:3,offset:3}},s.a.createElement("div",{className:"d-flex flex-row flex-nowrap align-items-end text-white"},s.a.createElement("img",{src:v.a,alt:"map icon"}),s.a.createElement("h2",null,"Our Offices")),s.a.createElement("p",{className:"text-justify"},"125 Rich Street",s.a.createElement("br",null),"Greenbrae, CA 94904")),s.a.createElement(m.a,{xs:12,lg:3},s.a.createElement("div",{className:"d-flex flex-row flex-nowrap align-items-end text-white"},s.a.createElement("img",{src:E.a,alt:"map icon"}),s.a.createElement("h2",null,"Call Us")),s.a.createElement("p",null,"(415) 331-1709")))))))))}},321:function(e,t,a){"use strict";a(68),a(5),a(15),Object.defineProperty(t,"__esModule",{value:!0});var n=a(322),s=a(323),r=null,l="https://api.emailjs.com";function c(e,t,a){return void 0===a&&(a={}),new Promise((function(s,r){var l=new XMLHttpRequest;for(var c in l.addEventListener("load",(function(e){var t=new n.EmailJSResponseStatus(e.target);200===t.status||"OK"===t.text?s(t):r(t)})),l.addEventListener("error",(function(e){r(new n.EmailJSResponseStatus(e.target))})),l.open("POST",e,!0),a)l.setRequestHeader(c,a[c]);l.send(t)}))}function i(e){var t=document.getElementById("g-recaptcha-response");return t&&t.value&&(e["g-recaptcha-response"]=t.value),t=null,e}t.init=function(e,t){r=e,l=t||"https://api.emailjs.com"},t.send=function(e,t,a,n){var s={lib_version:"2.3.2",user_id:n||r,service_id:e,template_id:t,template_params:i(a)};return c(l+"/api/v1.0/email/send",JSON.stringify(s),{"Content-type":"application/json"})},t.sendForm=function(e,t,a,n){if("string"==typeof a&&(a=document.querySelector(a)),!a||"FORM"!==a.nodeName)throw"Expected the HTML form element or the style selector of form";s.UI.progressState(a);var i=new FormData(a);return i.append("lib_version","2.3.2"),i.append("service_id",e),i.append("template_id",t),i.append("user_id",n||r),c(l+"/api/v1.0/email/send-form",i).then((function(e){return s.UI.successState(a),e}),(function(e){return s.UI.errorState(a),Promise.reject(e)}))}},322:function(e,t,a){"use strict";a(15),Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){this.status=e.status,this.text=e.responseText};t.EmailJSResponseStatus=n},323:function(e,t,a){"use strict";a(15),Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){}return e.clearAll=function(e){e.classList.remove(this.PROGRESS),e.classList.remove(this.DONE),e.classList.remove(this.ERROR)},e.progressState=function(e){this.clearAll(e),e.classList.add(this.PROGRESS)},e.successState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.DONE)},e.errorState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.ERROR)},e.PROGRESS="emailjs-sending",e.DONE="emailjs-success",e.ERROR="emailjs-error",e}();t.UI=n}}]);
//# sourceMappingURL=component---src-pages-contact-js-b868cdabdd65100ea119.js.map