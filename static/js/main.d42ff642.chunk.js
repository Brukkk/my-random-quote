(this["webpackJsonpmy-random-quote"]=this["webpackJsonpmy-random-quote"]||[]).push([[0],{22:function(t,e,c){},42:function(t,e,c){"use strict";c.r(e);var n=c(1),o=c.n(n),i=c(15),s=c.n(i),a=(c(22),c(6)),r=c(16),u=c.n(r),d=c(17),j=c(0),b=function(){var t=Object(n.useState)(""),e=Object(a.a)(t,2),c=e[0],o=e[1],i=Object(n.useState)(""),s=Object(a.a)(i,2),r=s[0],b=s[1];Object(n.useEffect)((function(){h()}),[]);var h=function(){u.a.get("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json").then((function(t){var e=t.data.quotes,c=e[Math.floor(Math.random()*e.length)];console.log(c),o(c.quote),b(c.author)}))};return Object(j.jsxs)("div",{id:"quote-box",children:[Object(j.jsx)("div",{id:"text",children:Object(j.jsx)("p",{children:c})}),Object(j.jsx)("div",{id:"author",children:Object(j.jsx)("p",{children:r})}),Object(j.jsxs)("div",{className:"buttons",children:[Object(j.jsx)("div",{className:"social-media",children:Object(j.jsx)("a",{target:"_blank",href:"https://twitter.com/intent/tweet?text="+c+" - "+r,id:"tweet-quote",children:Object(j.jsx)(d.a,{className:"icon"})})}),Object(j.jsx)("button",{onClick:function(){h()},id:"new-quote",children:"New Quote"})]})]})};var h=function(){return Object(j.jsx)("div",{className:"container",children:Object(j.jsx)(b,{})})},l=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,43)).then((function(e){var c=e.getCLS,n=e.getFID,o=e.getFCP,i=e.getLCP,s=e.getTTFB;c(t),n(t),o(t),i(t),s(t)}))};s.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root")),l()}},[[42,1,2]]]);
//# sourceMappingURL=main.d42ff642.chunk.js.map