(this["webpackJsonpcss-gradient-generator"]=this["webpackJsonpcss-gradient-generator"]||[]).push([[0],{11:function(e,t,c){},12:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var n=c(0),o=c(1),r=c.n(o),a=c(5),l=c.n(a),s=(c(11),c(2)),d=c(3),i=(c(12),function(e){var t=e.gradient;return Object(n.jsx)("div",{className:"gradient",style:t})}),j=function(e){var t=e.text,c=Object(o.useState)(!1),r=Object(d.a)(c,2),a=r[0],l=r[1],s=Object(o.useCallback)((function(){i(t),l(!0)}),[t]);Object(o.useEffect)((function(){console.log(a)}),[a]),Object(o.useEffect)((function(){l(!1)}),[t]);var i=function(e){var t=document.createElement("textarea");t.value=e+";",t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)};return Object(n.jsxs)("div",{className:"css-output",onClick:s,children:[Object(n.jsxs)("p",{children:["background: ",t,";"]}),Object(n.jsx)("p",{className:"copied-confirm",children:a&&"Code Copied!"}),Object(n.jsx)("div",{className:"copy-msg",children:"Click anywhere in this text area to copy the code to your clipboard."})]})},b=function(e){var t=e.percent,c=e.colorCode,o=e.handleColorChooser,r=e.handlePercentChange,a=["0","1","2","3","4","5","6","7","8","9","Backspace","ArrowRight","ArrowLeft"];return Object(n.jsxs)("div",{className:"color",children:[Object(n.jsx)("input",{className:"percent",type:"text",defaultValue:t,maxLength:"3",onKeyUp:r,onKeyDown:function(e){a.includes(e.key)||e.preventDefault()}}),Object(n.jsx)("input",{className:"color-choose",type:"color",value:c,onChange:o}),Object(n.jsx)("input",{className:"hex-display",type:"text",value:c})]})};var u=function(){var e=Object(o.useState)({percentOne:"0",colorCodeOne:"#a872ee",percentTwo:"50",colorCodeTwo:"#cf8bf3",percentThree:"100",colorCodeThree:"#fdb99b"}),t=Object(d.a)(e,2),c=t[0],r=t[1],a=c.percentOne,l=c.colorCodeOne,u=c.percentTwo,O=c.colorCodeTwo,h=c.percentThree,p=c.colorCodeThree,f=Object(o.useState)({background:"linear-gradient(\n          90deg, \n          ".concat(l," ").concat(a,"%, \n          ").concat(O," ").concat(u,"%, \n          ").concat(p," ").concat(h,"%\n      )")}),C=Object(d.a)(f,2),g=C[0],x=C[1],m=g.background;Object(o.useEffect)((function(){console.log("side-effect"),console.log(c),x({background:"linear-gradient(\n        90deg, \n        ".concat(l," ").concat(a,"%, \n        ").concat(O," ").concat(u,"%, \n        ").concat(p," ").concat(h,"%\n      )")})}),[c]);var v=function(e,t,n){r("colorCode"===e?0===t?Object(s.a)(Object(s.a)({},c),{},{colorCodeOne:n}):1===t?Object(s.a)(Object(s.a)({},c),{},{colorCodeTwo:n}):Object(s.a)(Object(s.a)({},c),{},{colorCodeThree:n}):0===t?Object(s.a)(Object(s.a)({},c),{},{percentOne:n}):1===t?Object(s.a)(Object(s.a)({},c),{},{percentTwo:n}):Object(s.a)(Object(s.a)({},c),{},{percentThree:n}))},y=function(e){var t=e.target.parentElement,c=Array.from(t.parentElement.children).indexOf(t),n=e.target.value;v("colorCode",c,n)},w=function(e){var t=e.target.value;if(t>100||t<0)alert("Please enter a percentage value from 0 - 100");else{var c=e.target.parentElement,n=Array.from(c.parentElement.children).indexOf(c);v("percent",n,t)}};return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(i,{gradient:g}),Object(n.jsxs)("div",{className:"controls",children:[Object(n.jsx)("h1",{children:"Gradient Generator"}),Object(n.jsxs)("div",{className:"colors-control",children:[Object(n.jsx)(b,{percent:a,colorCode:l,handleColorChooser:y,handlePercentChange:w}),Object(n.jsx)(b,{percent:u,colorCode:O,handleColorChooser:y,handlePercentChange:w}),Object(n.jsx)(b,{percent:h,colorCode:p,handleColorChooser:y,handlePercentChange:w}),Object(n.jsx)(j,{text:m})]})]})]})};l.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(u,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.d1c5b19e.chunk.js.map