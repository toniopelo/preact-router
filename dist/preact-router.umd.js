!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("preact"),require("preact/hooks")):"function"==typeof define&&define.amd?define(["preact","preact/hooks"],e):(t=t||self).preactRouter=e(t.preact,t.hooks)}(this,function(t,e){var n={};function r(t,e){for(var n in e)t[n]=e[n];return t}function o(t,e,r){var o,i=/(?:\?([^#]*))?(#.*)?$/,u=t.match(i),c={};if(u&&u[1])for(var p=u[1].split("&"),s=0;s<p.length;s++){var l=p[s].split("=");c[decodeURIComponent(l[0])]=decodeURIComponent(l.slice(1).join("="))}t=a(t.replace(i,"")),e=a(e||"");for(var f=Math.max(t.length,e.length),h=0;h<f;h++)if(e[h]&&":"===e[h].charAt(0)){var d=e[h].replace(/(^:|[+*?]+$)/g,""),m=(e[h].match(/[+*?]+$/)||n)[0]||"",g=~m.indexOf("+"),v=~m.indexOf("*"),y=t[h]||"";if(!y&&!v&&(m.indexOf("?")<0||g)){o=!1;break}if(c[d]=decodeURIComponent(y),g||v){c[d]=t.slice(h).map(decodeURIComponent).join("/");break}}else if(e[h]!==t[h]){o=!1;break}return(!0===r.default||!1!==o)&&c}function i(t,e){return t.rank<e.rank?1:t.rank>e.rank?-1:t.index-e.index}function u(t,e){return t.index=e,t.rank=function(t){return t.props.default?0:a(t.props.path).map(c).join("")}(t),t.props}function a(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function c(t){return":"==t.charAt(0)?1+"*+?".indexOf(t.charAt(t.length-1))||4:5}var p=t.createContext({}),s=null,l=[],f=[],h={};function d(){var t;return""+((t=s&&s.location?s.location:s&&s.getCurrentLocation?s.getCurrentLocation():"undefined"!=typeof location?location:h).pathname||"")+(t.search||"")}function m(t,e){return void 0===e&&(e=!1),"string"!=typeof t&&t.url&&(e=t.replace,t=t.url),function(t){for(var e=l.length;e--;)if(l[e].canRoute(t))return!0;return!1}(t)&&function(t,e){void 0===e&&(e="push"),s&&s[e]?s[e](t):"undefined"!=typeof history&&history[e+"State"]&&history[e+"State"](null,null,t)}(t,e?"replace":"push"),g(t)}function g(t){for(var e=!1,n=0;n<l.length;n++)!0===l[n].routeTo(t)&&(e=!0);for(var r=f.length;r--;)f[r](t);return e}function v(t){if(t&&t.getAttribute){var e=t.getAttribute("href"),n=t.getAttribute("target");if(e&&e.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return m(e)}}function y(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button))return v(t.currentTarget||t.target||this),C(t)}function C(t){return t&&(t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault()),!1}function x(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button)){var e=t.target;do{if("A"===String(e.nodeName).toUpperCase()&&e.getAttribute("href")){if(e.hasAttribute("native"))return;if(v(e))return C(t)}}while(e=e.parentNode)}}var k=!1,b=function(e){var n,a;function c(t){var n;return n=e.call(this,t)||this,t.history&&(s=t.history),n.state={url:t.url||d()},n.contextValue={},k||("function"==typeof addEventListener&&(s||addEventListener("popstate",function(){g(d())}),addEventListener("click",x)),k=!0),n}a=e,(n=c).prototype=Object.create(a.prototype),n.prototype.constructor=n,n.__proto__=a;var f=c.prototype;return f.shouldComponentUpdate=function(t){return!0!==t.static||t.url!==this.props.url||t.onChange!==this.props.onChange},f.canRoute=function(e){var n=t.toChildArray(this.props.children);return this.getMatchingChildren(n,e,!1).length>0},f.routeTo=function(t){this.setState({url:t});var e=this.canRoute(t);return this.updating||this.forceUpdate(),e},f.componentWillMount=function(){l.push(this),this.updating=!0},f.componentDidMount=function(){var t=this;s&&(this.unlisten=s.listen(function(e){t.routeTo(""+(e.pathname||"")+(e.search||""))})),this.updating=!1},f.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),l.splice(l.indexOf(this),1)},f.componentWillUpdate=function(){this.updating=!0},f.componentDidUpdate=function(){this.updating=!1},f.getMatchingChildren=function(e,n,a){return e.filter(u).sort(i).map(function(e){var i=o(n,e.props.path,e.props);if(i){if(!1!==a){var u={url:n,matches:i};return r(u,i),delete u.ref,delete u.key,{vnode:t.cloneElement(e,u),matches:i}}return{vnode:e,matches:i}}}).filter(Boolean)},f.render=function(e,n){var r=e.onChange,o=n.url,i=this.getMatchingChildren(t.toChildArray(e.children),o,!0),u=i[0]||{vnode:null,matches:null},a=u.vnode,c=u.matches,s=this.previousUrl;return o!==s&&(this.previousUrl=o,this.contextValue={router:this,url:o,previous:s,active:i.map(function(t){return t.vnode}),current:a,path:a?a.props.path:null,matches:c},"function"==typeof r&&r(this.contextValue)),t.h(p.Provider,{value:this.contextValue},a)},c}(t.Component);return b.subscribers=f,b.getCurrentUrl=d,b.route=m,b.Router=b,b.Route=function(e){return t.createElement(e.component,e)},b.Link=function(e){return t.createElement("a",r({onClick:y},e))},b.exec=o,b.useRouter=function(){return[e.useContext(p),m]},b});
//# sourceMappingURL=preact-router.umd.js.map
