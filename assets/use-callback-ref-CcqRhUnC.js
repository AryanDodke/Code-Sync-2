import{r as f}from"./react-C0JOplFJ.js";function c(t,u){return typeof t=="function"?t(u):t&&(t.current=u),t}function s(t,u){var a=f.useState(function(){return{value:t,callback:u,facade:{get current(){return a.value},set current(e){var n=a.value;n!==e&&(a.value=e,a.callback(e,n))}}}})[0];return a.callback=u,a.facade}var v=typeof window<"u"?f.useLayoutEffect:f.useEffect,i=new WeakMap;function E(t,u){var a=s(null,function(e){return t.forEach(function(n){return c(n,e)})});return v(function(){var e=i.get(a);if(e){var n=new Set(e),o=new Set(t),l=a.current;n.forEach(function(r){o.has(r)||c(r,null)}),o.forEach(function(r){n.has(r)||c(r,l)})}i.set(a,t)},[t]),a}export{E as u};
