/*!
 * Controls.js
 * http://controlsjs.com/
 *
 * Copyright (c) 2014 Position s.r.o.  All rights reserved.
 *
 * This version of Controls.js is licensed under the terms of Commercial Software License.
 * http://controlsjs.com/license.html
 *
 */

var ngOnAppLoading="undefined"===typeof ngOnAppLoading?null:ngOnAppLoading,ngOnAppDoLoading="undefined"===typeof ngOnAppDoLoading?null:ngOnAppDoLoading,ngOnAppLoaded="undefined"===typeof ngOnAppLoaded?null:ngOnAppLoaded,ngOnAppCreated="undefined"===typeof ngOnAppCreated?null:ngOnAppCreated,ngOnAppLoadProgress="undefined"===typeof ngOnAppLoadProgress?null:ngOnAppLoadProgress,ngOnAppFileLoad="undefined"===typeof ngOnAppFileLoad?null:ngOnAppFileLoad,ngOnAppFileLoaded="undefined"===typeof ngOnAppFileLoaded?
null:ngOnAppFileLoaded;function ngCreateHTMLFragment(a){var d=document.createDocumentFragment();if(d){var b=document.createElement("div");for(b.innerHTML=a;b.firstChild;)d.appendChild(b.firstChild)}return d}function ngURLExtractDomain(a){var d=a.indexOf("//");return 0<=d&&(d=a.indexOf("/",d+2),0<=d)?a.substring(0,d):""}
function ngLoadApplication(a,d,b){function h(c){var g,a,d,b;for(b in c){"string"===typeof c[b]&&(c[b]={File:c[b]});if("undefined"===typeof c[b].Type&&(g=u(c[b].File),a=g.lastIndexOf("/"),0>a&&(a=g.lastIndexOf("\\")),d=g.lastIndexOf("."),d>a))switch(g=g.substring(d+1).toLowerCase(),g){case "js":c[b].Type=1;break;case "css":c[b].Type=0;break;case "png":case "jpg":case "gif":case "jpeg":case "bmp":c[b].Type=2}switch(c[b].Type){case 0:ngLoadAppFile(c[b].File,c[b],null,c[b].Async);break;case 2:ngLoadAppImg(c[b].File,
c[b])}}for(b in c)1===c[b].Type&&ngLoadAppFile(c[b].File,c[b],null,c[b].Async)}function f(c){var g=c.indexOf("//");if(0>g)return window.location.hostname;c=c.substring(g+2,c.length);g=c.indexOf("/");0<=g&&(c=c.substring(0,g));g=c.indexOf(":");0<=g&&(c=c.substring(0,g));return c}function u(c){var g=c.indexOf("?");0<=g&&(c=c.substr(0,g));g=c.indexOf("#");0<=g&&(c=c.substr(0,g));return c}function v(c){J?MSApp.execUnsafeLocalFunction(function(){window.eval.call(window,c)}):window.execScript?window.execScript(c):
window.eval.call(window,c)}function y(c){var g=document.createElement("style");g.setAttribute("type","text/css");g.styleSheet?g.styleSheet.cssText=c:g.appendChild(document.createTextNode(c));r.appendChild(g)}function q(c,g,a,d){B++;if(C&&"function"===typeof ngOnAppLoadProgress){var b=0<w?Math.round(100*B/w):0;b>l&&(ngOnAppLoadProgress(b),l=b)}d||z(c,g,a)}function z(c,g,b){x++;0<=c&&"function"===typeof ngOnAppFileLoaded&&ngOnAppFileLoaded(c,g,b);if(x===w&&(ngInitializeAppUnits(),C&&x===w))var f=setTimeout(function(){clearTimeout(f);
"function"===typeof ngOnAppLoaded&&ngOnAppLoaded();x<w?ngOnAppLoaded=null:(C=0,"function"===typeof ngApplication&&(new ngApplication("function"===typeof ngStartParams?new ngStartParams:{},!a||"object"!==typeof a&&""==a?"ngApp":a,!1),ngApp&&""!=k&&(ngApp.AppPath=k),"function"===typeof ngOnAppCreated&&ngOnAppCreated(ngApp)),(!d||d(ngApp))&&ngApp&&ngApp.Run())},100)}function p(){if(!b&&!window.ngLoaderAppFilesUsed){window.ngLoaderAppFilesUsed=!0;b=[];if(ngAppFiles)for(var c in ngAppFiles)b.push(ngAppFiles[c]);
if("function"===typeof ngSetDevice&&(ngSetDevice(ngDevice),"undefined"!==typeof ngDevice&&"undefined"!==typeof ngAppDeviceFiles&&(c=function(c){c=ngAppDeviceFiles[c];if("undefined"!==typeof c)for(var g in c)b.push(c[g])},c(ngDevice),"object"===typeof ngDeviceProfile)))for(var g in ngDeviceProfile)ngDeviceProfile[g]&&(c("*."+g),c(ngDevice+"."+g))}if("function"===typeof ngOnAppDoLoading){g={apppath:k,appdomain:E,elm:a,files:b,callback:d};if(!ngOnAppDoLoading(g))return;k=g.apppath;E=g.appdomain;b=g.files;
a=g.elm;d=g.callback}b&&h(b);q(-1)}if("function"===typeof ngOnAppLoading&&!ngOnAppLoading())return!1;var r=document.getElementsByTagName("head").item(0);if(!r)return!1;var l=0,D=0,C=1,w=1,B=0,x=0,k="",E="",A={},K=[],L=[],t=navigator.userAgent.toLowerCase(),m="undefined"!==typeof window.cordova,n=-1!=t.indexOf("windows phone"),J="undefined"!==typeof Windows,H=-1!=t.indexOf("opera"),I;H&&(I=parseFloat(window.opera.version()));for(var t=document.getElementsByTagName("script"),F,e,G=0;G<t.length;G++)if("undefined"!==
typeof t[G].src&&(F=t[G].src,e=F.indexOf("apploader="),0<=e&&(e=F.indexOf("?"),0<=e))){k=F.substring(0,e);e=k.lastIndexOf("/");k=0>=e?"":k.substring(0,e+1);break}""!=k&&(E=ngURLExtractDomain(k),"/"!=k.charAt(k.length-1)&&(k+="/"));window.ngInitializeAppUnits=function(){if("object"===typeof ngAppUnits){for(var c in ngAppUnits)"undefined"===typeof ngAppUnits[c].LoadOrder&&(ngAppUnits[c].LoadOrder=D++);ngAppUnits.sort(function(c,a){"undefined"===typeof c.Priority&&(c.Priority=.5);"undefined"===typeof a.Priority&&
(a.Priority=.5);0>c.Priority&&(c.Priority=0);0>a.Priority&&(a.Priority=0);1<c.Priority&&(c.Priority=1);1<a.Priority&&(a.Priority=1);return c.Priority>a.Priority?-1:c.Priority<a.Priority?1:c.LoadOrder-a.LoadOrder});for(c in ngAppUnits)ngAppUnits[c].Initialized||(ngAppUnits[c].Initialized=!0,"function"===typeof ngAppUnits[c].OnInit&&ngAppUnits[c].OnInit())}};window.ngAppURL=function(c){0>c.indexOf("//")&&""!=c&&(c="/"==c.charAt(0)?E+c:k+c);var a;"undefined"!==typeof ngAppScriptsVer&&(a=ngAppScriptsVer);
a&&("undefined"!==typeof ngDEBUG&&ngDEBUG&&(a=-1),0>a&&(a=(new Date).getTime()),c=c+(0<=c.indexOf("?")?"&":"?")+a);return m&&n&&(0>c.indexOf("//")||0<=c.indexOf("file://"))?u(c):c};window.ngLoadAppScript=function(c,a,b,d,f){a||(a={});a.Type=1;a.File=c;"undefined"!==typeof d&&(a.Async=d);ngLoadAppFile(c,a,b,d,f)};window.ngLoadAppCSS=function(c,a,d,b,f){a||(a={});a.Type=0;a.File=c;"undefined"!==typeof b&&(a.Async=b);ngLoadAppFile(c,a,d,b,f)};window.ngLoadAppFile=function(c,a,b,d,e){function h(a,c,b,
f,g){function e(f){f=!0===f;var h="undefined"!==typeof console?console:null;if(h)switch(c.Type){case 0:h.error('CSS "'+a+'" was not loaded!');break;case 1:h.error('Script "'+a+'" was not loaded!')}d?"function"===typeof g&&(g(c.Type,a,c),b=null):(h=t[0],h.Async||("function"===typeof h.LoadFailCallback&&h.LoadFailCallback(h.Data.Type,h.URL,h.Data),h.LoadCallback=null));k(f)}function k(f,g){if(!A)if(A=!0,d)"undefined"!==typeof g&&""!==g&&l(g),"function"===typeof b&&b(c.Type,a,c),q(c.Type,a,c);else{!0===
f&&q(c.Type,a,c,!0);var e=t[0];if(!e.Async){if(!0===f)return;t.splice(0,1);"function"===typeof e.LoadCallback&&e.LoadCallback(e.Data.Type,e.URL,e.Data);q(e.Data.Type,e.URL,e.Data)}for(;t.length;){e=t[0];if(!e.Async){h(e.LoadURL,e.Data,e.LoadCallback,!1,e.LoadFailCallback);break}g=e.code;if("undefined"===typeof g)break;""!==g&&l(g);t.splice(0,1);"function"===typeof e.LoadCallback&&e.LoadCallback(e.Data.Type,e.URL,e.Data);z(e.Data.Type,e.URL,e.Data)}}}var A=!1;if(f){var m=new XMLHttpRequest;m.onreadystatechange=
function(){4==m.readyState&&(200==m.status||304==m.status||0==m.status?(d||(p.code=m.responseText),k(!0,m.responseText)):(d||(p.code=""),e(!0)))};m.open("GET",a,!0);m.send()}else{var n;switch(c.Type){case 0:n=document.createElement("link");break;case 1:n=document.createElement("script")}if(n){switch(c.Type){case 0:n.setAttribute("rel","stylesheet");n.setAttribute("type","text/css");n.setAttribute("href",a);k();break;case 1:n.onload=k,n.onerror=e,n.onreadystatechange=function(){"loaded"!=this.readyState&&
"complete"!=this.readyState||k()},n.setAttribute("src",a)}r.appendChild(n)}}}var k=ngAppURL(c),A=window.XMLHttpRequest&&("undefined"===typeof ngDEBUG||!ngDEBUG)&&(!H||11.1<=I&&"file:"!=window.location.protocol)&&(m||""!=window.location.hostname&&f(k)==window.location.hostname);if("function"!==typeof ngOnAppFileLoad||ngOnAppFileLoad(a.Type,c,a)){w++;var t,l;switch(a.Type){case 0:t=K;l=y;break;case 1:t=L,l=v}if(!d){var p={URL:c,LoadURL:k,Data:a,Async:A,LoadCallback:b,LoadFailCallback:e};t.push(p);if(!A&&
1<t.length)return}h(k,a,b,A,e)}};window.ngLoadAppImg=function(a,b,d){if("function"===typeof ngOnAppFileLoad&&!ngOnAppFileLoad(2,a,b))return null;var f=A[a];if("undefined"===typeof f){var e=function(){h||(h=!0,"function"===typeof d&&d(2,a,b),q(2,a,b))},f=new Image;w++;var h=!1;f.onload=e;f.onfailure=e;f.onerror=e;A[a]=f;f.src=ngAppURL(a)}return f};if(window.ngLoaderStarted)p();else var M=setTimeout(function(){clearTimeout(M);window.ngLoaderStarted=!0;p()},100);return!0};var ngOnDeviceChanged="undefined"===typeof ngOnDeviceChanged?null:ngOnDeviceChanged,ngOnGetDeviceInfo="undefined"===typeof ngOnGetDeviceInfo?null:ngOnGetDeviceInfo,ngDevice="undefined"===typeof ngDevice?void 0:ngDevice,ngDeviceProfile="undefined"===typeof ngDeviceProfile?void 0:ngDeviceProfile;
function ngDeviceReset(a){if("object"===typeof ngDevices&&ngDevices&&("undefined"===typeof a||"object"===typeof ngDevices[a])){var d=window.location.href,b=d.indexOf("?"),h=d.indexOf("#"),f="",u="";0<=h&&(u=d.substr(h),d=d.substr(0,h));0<=b&&(f=d.substr(b+1),d=d.substr(0,b));b=f.indexOf("appdevice=");0<=b?(h=f.indexOf("&",b),h=0<=h?f.substr(h+1):"",f=f.substr(0,b),"undefined"!==typeof a?f+="appdevice="+a:0<b&&(f=f.substr(0,b-1)),""!=h&&(""!=f&&(f+="&"),f+=h)):"undefined"!==typeof a&&(""!=f&&(f+="&"),
f+="appdevice="+a);""!=f&&(d+="?"+f);d+=u;window.location.href==d?window.location.reload():window.location.href=d}}
function ngGetDeviceInfo(){var a=0,d=0,b=navigator.userAgent.toLowerCase();"number"==typeof window.innerWidth?(a=window.innerWidth,d=window.innerHeight):document.documentElement&&document.documentElement.clientWidth?(a=document.documentElement.clientWidth,d=document.documentElement.clientHeight):document.body&&document.body.clientWidth&&(a=document.body.clientWidth,d=document.body.clientHeight);var h=window.screen.colorDepth;"undefined"===typeof h&&(h=24);var f=screen.width;"undefined"===typeof f&&
(f=a);var u=screen.height;"undefined"===typeof u&&(u=d);var v=window.orientation;"undefined"===typeof v&&(v=f>u?90:0);var y=a>d?90:0,q=90==y,z=90==Math.abs(v%180),a={ScreenWidth:f,ScreenHeight:u,ScreenOrientation:v,ScreenLandscape:z,ScreenPortrait:!z,Width:a,Height:d,Orientation:y,Landscape:q,Portrait:!q,ColorDepth:h,SupportsTouch:"ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch||navigator.msMaxTouchPoints?!0:!1,IExplorer:eval("/*@cc_on!@*/false"),FireFox:-1!=b.indexOf("firefox"),
Chrome:-1!=b.indexOf("chrome"),Safari:-1!=b.indexOf("safari"),Opera:-1!=b.indexOf("opera"),Android:-1!=b.indexOf("android"),iOS:b.match(/(ipad|iphone|ipod)/g)?!0:!1,WindowsPhone:-1!=b.indexOf("windows phone"),Cordova:"undefined"!==typeof window.cordova,WinStoreApp:"undefined"!==typeof Windows};a.FireFoxVersion=a.FireFox?parseInt(b.match(/firefox\/(.*)$/)[1]):void 0;a.FireFoxOS=a.FireFox&&-1!=b.indexOf("mobile");a.OperaVersion=a.Opera?parseFloat(window.opera.version()):void 0;a.IExplorerVersion=a.IExplorer?
parseInt(b.match(/msie (\d+)/)[1]):void 0;!a.IExplorer&&b.match(/trident/)&&((d=b.match(/rv\:(\d+)/))||(d=b.match(/msie (\d+)/)),d&&(a.IExplorer=!0,a.IExplorerVersion=parseInt(d[1])));a.UsingTouch=a.SupportsTouch&&(a.Android||a.iOS||a.WindowsPhone||-1!=b.indexOf("mobile")||-1!=b.indexOf("tablet"));if("object"===typeof ngAppDeviceInfo&&ngAppDeviceInfo)for(var p in ngAppDeviceInfo)a[p]=ngAppDeviceInfo[p];"function"===typeof ngOnGetDeviceInfo&&ngOnGetDeviceInfo(a);return a}
function ngDetectDevice(a){var d;if("object"===typeof ngDevices&&ngDevices){var b=function(a,b){b.numprops||"undefined"===typeof B&&(B=a);!b.matched||0>b.priority||!(b.priority>w||w==b.priority&&b.pts>D||w==b.priority&&b.pts==D&&b.numprops<C)||(w=b.priority,D=b.pts,C=b.numprops,d=a)},h=function(a,b,d){var h,k,m,n,l,p=0,r=0,q=.5,e;for(e in b){m=b[e];r++;n=e.substr(0,3);"Opt"==n?(e=e.substring(3,e.length),n=e.substr(0,3),h=!1):h=!0;"Not"==n?(e=e.substring(3,e.length),n=e.substr(0,3),k=!0):k=!1;l=!1;
switch(n){case "Min":e=e.substring(3,e.length);if("undefined"===typeof f[e])break;if(!k&&f[e]>=m||k&&f[e]<m)l=!0;break;case "Max":e=e.substring(3,e.length);if("undefined"===typeof f[e])break;if(!k&&f[e]<m||k&&f[e]>=m)l=!0;break;default:switch(e){case "Priority":q=m;case "IsMobile":h=!1;r--;break;case "UserAgent":m=-1!=navigator.userAgent.indexOf(m);!k==m&&(l=!0);break;case "UserAgentIC":m=-1!=u.indexOf(m.toLowerCase());!k==m&&(l=!0);break;default:n=f[e];if("undefined"===n)break;if("function"===n)n(e,
a,b);else if(!k&&n==m||k&&n!=m)l=!0}}if(l)p++;else if(h){p=-1E4;break}}"_"===d.charAt(0)&&(q=-1);1<q&&(q=1);return{numprops:r,pts:p,matched:0<r&&-1E4!=p,priority:q}},f=ngGetDeviceInfo(),u=navigator.userAgent.toLowerCase(),v,y,q,z,p={},r;for(r in ngDevices){"undefined"===typeof z&&(z=r);v=ngDevices[r];q=0;p[r]={};for(var l in v)"object"===typeof v[l]&&(q++,y=h(r,v[l],l),p[r][l]=y);q?p[r]._numobjects=q:(y=h(r,v,""),p[r]=y)}var D=0,C=1E4,w=-1,B,x;for(x in p)if(l=p[x],0<l._numobjects){delete l._numobjects;
for(var k in l)b(x,l[k]),l[k]=l[k].matched}else b(x,l),p[x]=l._matched;"undefined"===typeof d&&(d=B);"undefined"===typeof d&&(d=z);"object"===typeof a&&a&&(a.DeviceInfo=f,a.Device=d,a.DevicesStatus=p,"object"===typeof p[d]?a.DeviceProfile=p[d]:delete a.DeviceProfile)}return d}
function ngSetDevice(a,d){"undefined"===typeof d&&(d={},ngDetectDevice(d),"undefined"===typeof a||""==a)&&(a=d.Device);ngDevice=a;ngDeviceProfile="undefined"!==typeof a&&"object"===typeof d.DevicesStatus[a]?d.DevicesStatus[a]:void 0;d.Device=a;d.DeviceProfile=ngDeviceProfile;"function"===typeof ngOnDeviceChanged&&ngOnDeviceChanged(d)}function ngLoadAppDeviceCSS(a,d,b){if("undefined"!==typeof ngDevice&&ngDevice==a)return ngLoadAppCSS(d,b)}
function ngLoadAppDeviceScript(a,d,b,h,f){if("undefined"!==typeof ngDevice&&ngDevice==a)return ngLoadAppScript(d,b,h,f)}function ngLoadAppDeviceImg(a,d,b,h){if("undefined"!==typeof ngDevice&&ngDevice==a)return ngLoadAppImg(d,b,h)};(function(){function a(){if(b<d){b++;var a=document.getElementById("ngLoadProgress");a&&(a.innerHTML=b+" %")}else clearInterval(h),h=0}var d=0,b=0,h=0;ngOnAppLoadProgress=function(b){d!=b&&(d=b,b=1E3/(d-b),10>b&&(b=10),h&&clearInterval(h),h=setInterval(a,b))}})();