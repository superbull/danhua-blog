webpackJsonp([0xa6cd3c51205b],{75:function(e,t){},59:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(1),i=r(l);n(75);var s=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return u(t,e),t.prototype.render=function(){var e=this.props.text;return e?i.default.createElement("h2",{className:"page-description"},e):null},t}(i.default.Component);t.default=s,e.exports=t.default},76:function(e,t){},60:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(1),i=r(l);n(76);var s=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return u(t,e),t.prototype.render=function(){var e=this.props.text;return e?i.default.createElement("h1",{className:"page-title"},e):null},t}(i.default.Component);t.default=s,e.exports=t.default},77:function(e,t){},61:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(1),i=r(l),s=n(62),f=r(s);n(77);var c=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return u(t,e),t.prototype.render=function(){var e=this.props,t=e.page,n=e.pages,r=e.prev,o=e.next;return i.default.createElement("nav",{className:"pagination"},i.default.createElement(f.default,{className:"newer-posts",url:r,text:"← Newer Posts"}),i.default.createElement("span",{className:"page-number"},"Page ",t," of ",n),i.default.createElement(f.default,{className:"older-posts",url:o,text:"Older Posts →"}))},t}(i.default.Component);t.default=c,e.exports=t.default},78:function(e,t){},62:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=n(1),f=r(s),c=n(11),p=r(c);n(78);var d=function(e){function t(){return a(this,t),u(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){if(this.props.url){var e="nav-link";this.props.className&&(e=e+" "+this.props.className);var t=o(this.props,[]);return delete t.style,delete t.className,delete t.text,delete t.url,f.default.createElement(p.default,i({to:this.props.url},t,{className:e}),this.props.text)}return null},t}(f.default.Component);t.default=d,e.exports=t.default},79:function(e,t){},66:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(1),i=r(l),s=n(92),f=r(s),c=n(61),p=r(c);n(79);var d=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return u(t,e),t.prototype.render=function(){var e=this.props,t=e.page,n=e.pages,r=e.prev,o=e.next,a=e.children,u="";return t>1&&(u+=" paged"),i.default.createElement(f.default,{className:u},i.default.createElement("div",{className:"extra-pagination inner"},i.default.createElement(p.default,{page:t,pages:n,prev:r,next:o})),a,i.default.createElement(p.default,{page:t,pages:n,prev:r,next:o}))},t}(i.default.Component);t.default=d,e.exports=t.default},282:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var l=n(1),i=r(l),s=n(25),f=r(s),c=n(91),p=r(c),d=n(16),h=r(d),y=n(63),m=r(y),b=n(58),g=r(b),v=n(67),_=r(v),w=n(64),O=r(w),E=n(65),x=r(E),j=n(55),P=r(j),C=n(57),N=r(C),M=n(60),T=r(M),S=n(59),R=r(S),k=n(56),A=r(k),G=n(66),Q=r(G),q=function(e){function t(){var n,r,u;o(this,t);for(var l=arguments.length,i=Array(l),s=0;s<l;s++)i[s]=arguments[s];return n=r=a(this,e.call.apply(e,[this].concat(i))),r.state={menuOpen:!1},r.handleOnClick=function(e){e.stopPropagation(),r.state.menuOpen?r.closeMenu():r.openMenu()},r.handleOnClose=function(e){e.stopPropagation(),r.closeMenu()},r.openMenu=function(){r.setState({menuOpen:!0})},r.closeMenu=function(){r.setState({menuOpen:!1})},u=n,a(r,u)}return u(t,e),t.prototype.render=function(){var e=this.props.pathContext,t=e.tag,n=e.nodes,r=e.page,o=e.pages,a=e.total,u=e.limit,l=e.prev,s=e.next,c=this.props.data.authors.edges;return i.default.createElement(m.default,{isOpen:this.state.menuOpen},i.default.createElement(f.default,{title:'Posts tagged as "'+t+'" | '+h.default.siteTitle}),i.default.createElement(g.default,{config:h.default,onClose:this.handleOnClose}),i.default.createElement(_.default,null,i.default.createElement("div",{className:"tag-template"},i.default.createElement(O.default,{className:"tag-head",cover:t.featureImage},i.default.createElement(x.default,null,i.default.createElement(P.default,{logo:h.default.siteLogo,title:h.default.siteTitle}),i.default.createElement(N.default,{navigation:h.default.siteNavigation,onClick:this.handleOnClick})),i.default.createElement("div",{className:"vertical"},i.default.createElement("div",{className:"main-header-content inner"},i.default.createElement(T.default,{text:t}),i.default.createElement(R.default,{text:t.description||"A "+a+"-post collection"})))),i.default.createElement(Q.default,{page:r,pages:o,total:a,limit:u,prev:l,next:s},i.default.createElement(p.default,{postEdges:n,postAuthors:c}))),i.default.createElement(A.default,{copyright:h.default.copyright,promoteGatsby:h.default.promoteGatsby})))},t}(i.default.Component);t.pageQuery="** extracted graphql fragment **";t.default=q}});
//# sourceMappingURL=component---src-templates-tag-jsx-4bf4e5eb8ba69774ecc4.js.map