"use strict";(self["webpackChunkjasfitness_landing_page"]=self["webpackChunkjasfitness_landing_page"]||[]).push([[92],{1951:function(e,t,l){l.d(t,{Z:function(){return W}});var a=l(3396),s=l.p+"img/joint-dumbells.01436259.svg",o=l.p+"img/auth-gym.de983838.jpg",i=l(2483);const m=(0,a._)("i",{class:"far fa-arrow-alt-circle-left fa-xl"},null,-1),d=(0,a.Uk)(" Back"),n=[m,d];var r={__name:"AppGoBack",setup(e){const t=(0,i.tv)(),l=()=>t.go(-1);return(e,t)=>((0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("span",{onClick:l,class:"h-10 font-medium text-sm text-gray-100 hover:text-gray-400 hover:cursor-pointer transition duration-75 ease-out"},n)]))}};const c=r;var u=c;const f={class:"relative md:mt-20 flex md:justify-between items-center min-h-screen w-full md:h-fit md:w-max mx-auto md:rounded-lg overflow-hidden shadow-md bg-[url('/src/modules/Auth/assets/auth-gym.jpg')] bg-cover bg-center bg-no-repeat md:bg-none md:bg-zinc-100"},p=(0,a._)("div",{class:"md:hidden main-bg-cover-hue absolute h-full w-full top-0 left-0"},[(0,a._)("p",{class:"bg-gradient-to-b from-zinc-800 to-black opacity-70 h-full w-full"})],-1),g={class:"absolute top-3 left-3 z-10"},b={class:"absolute bottom-16 md:bottom-0 md:px-0 md:relative flex flex-col md:flex-row side-image text-center"},w=(0,a._)("div",{class:"md:absolute h-full w-full left-0 top-0"},[(0,a._)("p",{class:"bg-gradient-to-b from-zinc-800 to-black opacity-70 h-full w-full"})],-1),x={class:"text-white text-xl mb-6 md:text-4xl lg:text-5xl px-10 md:px-0 lg:w-96 font-normal md:absolute md:top-[50%] md:-translate-y-[50%] md:left-[50%] md:-translate-x-[50%]"},v=(0,a.uE)('<div class="flex flex-col items-center md:absolute md:bottom-8 md:left-[50%] md:-translate-x-[50%] text-zinc-200 text-opacity-40 font-thin text-xs"><div class="flex items-center gap-3 mb-3 imgs"><div class="border border-[#d4d4d4] w-24 md:w-44 rounded-full"></div><img src="'+s+'" alt="dumbbell" class="w-20"><div class="border border-[#d4d4d4] w-24 md:w-44 rounded-full"></div></div><span>Powered by JAS FITNESS</span></div><img src="'+o+'" alt="side image" class="hidden md:block w-[420px] lg:w-[23vw] bg-gradient-to-r from-neutral-700 to-neutral-900">',2),h={id:"form",class:"absolute left-[50%] md:left-0 -translate-x-[50%] md:-translate-x-0 top-[40%] -translate-y-[50%] md:-translate-y-0 md:top-0 md:relative md:block w-64 md:w-96 md:mx-12 lg:mx-20 p-4 md:p-10 z-10 bg-white rounded shadow-md md:shadow-[#e7e7e7]"},_={class:"mb-3 md:mb-8 block font-semibold text-md md:text-2xl"};var y={__name:"AuthTemplate",setup(e){return(e,t)=>((0,a.wg)(),(0,a.iD)("div",f,[p,(0,a._)("div",g,[(0,a.Wm)(u)]),(0,a._)("div",b,[w,(0,a._)("p",x,[(0,a.WI)(e.$slots,"motivation-section")]),v]),(0,a._)("div",h,[(0,a._)("span",_,[(0,a.WI)(e.$slots,"header-section")]),(0,a.WI)(e.$slots,"form-section")])]))}};const k=y;var W=k},9935:function(e,t,l){l.r(t),l.d(t,{default:function(){return w}});var a=l(3396),s=l(4870),o=l(65),i=l(5547),m=l(1951);const d=(0,a.Uk)(" Being Fit is Hard.   Being Obese is Hard. "),n=(0,a._)("span",{class:"text-yellow-600 font-bold"},"Choose",-1),r=(0,a.Uk)(" your Hard. "),c=(0,a.Uk)("Reset your password..."),u={class:"text-xs mb-6"},f=(0,a.Uk)(" Remembered your Password? "),p=(0,a.Uk)("Login");var g={__name:"PasswordResetEmailView",setup(e){const t=(0,s.iH)(""),l=(0,o.oR)(),g=e=>{try{console.log(e),l.commit("auth/setNotification",{message:"A password reset mail has been sent to your email",alertType:"Success"})}catch(t){console.log(t),l.commit("auth/setNotification",{message:"An error occured while perfoming this action. Please try again",alertType:"Warning"})}finally{(0,i.mc)("password-reset-form"),setTimeout((()=>{l.commit("auth/clearNotification")}),5e3)}};return(e,l)=>{const s=(0,a.up)("formKit"),o=(0,a.up)("router-link");return(0,a.wg)(),(0,a.j4)(m.Z,null,{"motivation-section":(0,a.w5)((()=>[d,n,r])),"header-section":(0,a.w5)((()=>[c])),"form-section":(0,a.w5)((()=>[(0,a.Wm)(s,{type:"form","submit-attrs":{inputId:"password-reset-form"},modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=e=>t.value=e),"submit-label":"Send Request",onSubmit:g},{default:(0,a.w5)((()=>[(0,a.Wm)(s,{type:"email",label:"Email",name:"email",suffixIcon:"email",placeholder:"example@email.com",validation:"email|length:5"}),(0,a._)("p",u,[f,(0,a.Wm)(o,{to:{name:"LoginPage"},class:"ml-1 underline hover:text-yellow-500"},{default:(0,a.w5)((()=>[p])),_:1})])])),_:1},8,["modelValue"])])),_:1})}}};const b=g;var w=b}}]);
//# sourceMappingURL=PasswordEmailView.238a2927.js.map