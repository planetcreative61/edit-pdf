(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1494:function(e,t,r){"use strict";r(7),r(55),r(25),r(26),r(113),r(34),r(18),r(121),r(41),r(100),r(95),r(31),r(32),r(11),r(13),r(30),r(22),r(37),r(33),r(59),r(61),r(60),r(66),r(49),r(12),r(8),r(9),r(10);var n=r(0),o=r.n(n),a=r(4),i=r.n(a),c=r(6),u=r(248),l=r(357),p=r(154),s=r(157),f=r(546),m=r(233),y=r(3);function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(){return(d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){g(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==b(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==b(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===b(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var j={dataElement:i.a.string.isRequired,children:i.a.arrayOf(i.a.any).isRequired},E=function(e){var t=e.dataElement,r=e.children,n=e.childrenClassName,a=Object(c.e)((function(e){return y.a.getPopupItems(e,t)}),c.c),i=o.a.Children.toArray(r);return a.map((function(e,t){var r=e.dataElement,a=e.type,c=e.hidden,y="".concat(a,"-").concat(r||t),b=null==c?void 0:c.map((function(e){return"hide-in-".concat(e)})).join(" "),v=i.find((function(e){return e.props.dataElement===r}));if(!v){var g=O(O({},e),{},{mediaQueryClassName:b,className:n});"toolButton"===a&&(v=o.a.createElement(u.a,g)),"toolGroupButton"===a&&(v=o.a.createElement(l.a,g)),"toggleElementButton"===a&&(v=o.a.createElement(p.a,g)),"actionButton"===a&&(v=o.a.createElement(s.a,g)),"statefulButton"===a&&(v=o.a.createElement(f.a,g)),"customElement"===a&&(v=o.a.createElement(m.a,g)),"spacer"!==a&&"divider"!==a||(v=o.a.createElement("div",d({className:"".concat(a," ").concat(b)},g)))}return v?o.a.cloneElement(v,{key:y}):null}))};E.propTypes=j;var w=E;t.a=w}}]);
//# sourceMappingURL=2.chunk.js.map