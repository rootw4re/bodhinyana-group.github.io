function addLoadEvent(a){var b=window.onload;"function"!=typeof window.onload?window.onload=a:window.onload=function(){b(),a()}}function hideOld(){if(!document.getElementsByTagName)return!1;for(var a=new Date,b=document.getElementsByTagName("li"),c=0;c<b.length;c++)if(b[c].id){var d=new Date(b[c].id);console.log(d),console.log(a),a>d&&(b[c].hidden=!0)}}function popUp(a,b,c){var d=void 0!=window.screenLeft?window.screenLeft:screen.left,e=void 0!=window.screenTop?window.screenTop:screen.top;width=window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:screen.width,height=window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:screen.height;var f=width/2-b/2+d,g=height/2-c/2+e,h=window.open(a,"","scrollbars=no, width="+b+", height="+c+", top="+g+", left="+f);window.focus&&h.focus()}function prepareLinks(){if(!document.getElementsByTagName)return!1;for(var a=document.getElementsByTagName("a"),b=0;b<a.length;b++)"popup"==a[b].getAttribute("class")&&(a[b].onclick=function(){return popUp(this.getAttribute("href"),"550","280"),!1})}function insertAfter(a,b){var c=b.parentNode;c.lastChild==b?c.appendChild(a):c.insertBefore(a,b.nextSibling)}function createPrintLink(){if(!document.createElement)return!1;if(!document.createTextNode)return!1;if(!document.getElementById)return!1;if(0===document.getElementsByClassName("post-content").length)return!1;if(!document.getElementsByTagName)return!1;if(!window.print)return!1;var a=document.createElement("a");a.setAttribute("id","print");var b=document.createElement("i");b.setAttribute("class","fa fa-fw fa-print"),a.appendChild(b);var c=document.createTextNode("print this reading");a.appendChild(c),a.href="#",a.onclick=function(){return window.print(),!1};var d=document.getElementsByClassName("leader-name")[0];insertAfter(a,d)}addLoadEvent(hideOld),function(a,b){function c(){var a=p.elements;return"string"==typeof a?a.split(" "):a}function d(a){var b=o[a[m]];return b||(b={},n++,a[m]=n,o[n]=b),b}function e(a,c,e){return c||(c=b),i?c.createElement(a):(e||(e=d(c)),c=e.cache[a]?e.cache[a].cloneNode():l.test(a)?(e.cache[a]=e.createElem(a)).cloneNode():e.createElem(a),c.canHaveChildren&&!k.test(a)?e.frag.appendChild(c):c)}function f(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return p.shivMethods?e(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+c().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(p,b.frag)}function g(a){a||(a=b);var c=d(a);if(p.shivCSS&&!h&&!c.hasCSS){var e,g=a;e=g.createElement("p"),g=g.getElementsByTagName("head")[0]||g.documentElement,e.innerHTML="x<style>article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}</style>",e=g.insertBefore(e.lastChild,g.firstChild),c.hasCSS=!!e}return i||f(a,c),a}var h,i,j=a.html5||{},k=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,l=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,m="_html5shiv",n=0,o={};!function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",h="hidden"in a;var c;if(!(c=1==a.childNodes.length)){b.createElement("a");var d=b.createDocumentFragment();c="undefined"==typeof d.cloneNode||"undefined"==typeof d.createDocumentFragment||"undefined"==typeof d.createElement}i=c}catch(e){i=h=!0}}();var p={elements:j.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:!1!==j.shivCSS,supportsUnknownElements:i,shivMethods:!1!==j.shivMethods,type:"default",shivDocument:g,createElement:e,createDocumentFragment:function(a,e){if(a||(a=b),i)return a.createDocumentFragment();for(var e=e||d(a),f=e.frag.cloneNode(),g=0,h=c(),j=h.length;j>g;g++)f.createElement(h[g]);return f}};a.html5=p,g(b)}(this,document),addLoadEvent(prepareLinks),addLoadEvent(createPrintLink);