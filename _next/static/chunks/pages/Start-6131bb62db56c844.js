(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[783],{8301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Start",function(){return n(9159)}])},9159:function(e,t,n){"use strict";n.r(t);var o=n(5893),i=n(7294);let a=()=>{let[e,t]=(0,i.useState)("Dictonary App"),[n,a]=(0,i.useState)("Welcome to our Dictionary App, the ultimate tool for language learners, word enthusiasts, and anyone who wants to improve their vocabulary. Our app is designed to be easy to use and accessible to anyone, whether you're a beginner or a seasoned linguist."),[s,l]=(0,i.useState)(""),r=async()=>{var t,n,o,i,s,r;let d=await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/".concat(e)),u=await d.json(),c=u[0].meanings[0].definitions[0].definition;(null===(t=null===(n=u[0])||void 0===n?void 0:n.phonetics[1])||void 0===t?void 0:t.audio)?l(u[0].phonetics[1].audio):(null===(o=null===(i=u[0])||void 0===i?void 0:i.phonetics[2])||void 0===o?void 0:o.audio)?l(u[0].phonetics[1].audio):l(null===(s=null===(r=u[0])||void 0===r?void 0:r.phonetics[0])||void 0===s?void 0:s.audio),a(c)},d=e=>{"word"==e.target.name&&t(e.target.value)};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("section",{className:"text-gray-600 body-font",children:(0,o.jsxs)("div",{className:"container px-5 py-24 mx-auto",children:[(0,o.jsxs)("div",{className:"flex flex-col text-center w-full mb-12",children:[(0,o.jsx)("h1",{className:"sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900",children:e}),(0,o.jsx)("p",{className:"lg:w-2/3 mx-auto leading-relaxed text-base",children:n})]}),(0,o.jsxs)("div",{className:"flex lg:w-2/3 w-full  flex-col mx-auto px-8   space-y-4 sm:px-0 items-start",children:[(0,o.jsxs)("div",{className:"relative flex-grow w-full",children:[(0,o.jsx)("label",{htmlFor:"full-name",className:"leading-7 text-sm text-gray-600",children:"Type a Word"}),(0,o.jsx)("input",{onChange:d,type:"text",id:"full-name",name:"word",className:"w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"})]}),(0,o.jsxs)("div",{className:"my-4 flex justify-between w-full",children:[(0,o.jsx)("button",{className:"text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg",onClick:r,children:"Find"}),s&&(0,o.jsx)("div",{children:(0,o.jsxs)("audio",{controls:!0,children:[(0,o.jsx)("source",{src:s,typeof:"audio/ogg"}),"Your Browser Does not Support the Audio Tag"]})})]})]})]})})})};t.default=a}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8301)}),_N_E=e.O()}]);