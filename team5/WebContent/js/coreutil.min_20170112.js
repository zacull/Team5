
var EZ=new Object;EZ.ATLogin=function(){if(confirm("로그인이 필요합니다.\n\n로그인 하시겠습니까?"))try{var t="";t="undefined"!=typeof parent._CURRENT_PAGE_?"/user/login.html?q_path="+encodeURIComponent(parent._CURRENT_PAGE_):"/user/login.html?q_path="+encodeURIComponent(_CURRENT_PAGE_),top.location.href=t}catch(n){t="/user/login.html?q_path="+encodeURIComponent(_CURRENT_PAGE_),top.location.href=t}},EZ.Login=function(){var t;t="undefined"!=typeof parent._CURRENT_PAGE_?"/user/login.html?q_path="+encodeURIComponent(parent._CURRENT_PAGE_):"undefined"!=typeof _CURRENT_PAGE_?"/user/login.html?q_path="+encodeURIComponent(_CURRENT_PAGE_):"/user/login.html",top.location.href=t},EZ.log=function(t,n){_E("__LOG__")&&(n&&$("#__LOG__").empty(),$("#__LOG__").append(t+"<br />"))},EZ.countLog = function(name,device,action,ref_no){$.ajax({type: "POST",url: "/common/count_link.html",data: "q_name="+name+"&q_device="+device+"&q_action="+action+"&q_ref_no="+ref_no,success:function(){},error:function(){}})},EZ.linkLog=function(t){$.ajax({type:"POST",url:"/common/count_link.html",data:"q_encoding=utf-8&q_nm_link="+t,success:function(){},error:function(){}})},EZ.viewLinkLog=function(){$(".linkLog").hover(function(t){if(this.title||this.alt||this.onclick||this.tooltipset){var n=t.pageX||(t.clientX?t.clientX+document.body.scrollLeft:0),e=t.pageY||(t.clientY?t.clientY+document.body.scrollTop:0);if(n+=10,e+=10,bgcolour="#eee",fgcolour="#000",!this.tooltipdiv){var r=document.createElement("div"),i=this.onclick.toString(),a=i.lastIndexOf("g("),o=i.lastIndexOf(")"),i=i.substring(a+3,o-1);this.tooltipdiv=r,$(r).css({border:"1px solid #ddd",padding:"1px",backgroundColor:bgcolour,color:fgcolour,position:"absolute"}).html(this.title||this.alt||i),this.title="",this.alt="",$("body").append(r),this.tooltipset=!0}$(this.tooltipdiv).show().css({left:n+"px",top:e+3+"px"})}},function(){this.tooltipdiv&&$(this.tooltipdiv).hide()})},EZ.embedFlash=function(t,n,e,r,i,a,o,u,l){var c=navigator.appName,s="";return"Netscape"==c?(s+='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="'+n+'" height="'+e+'" align="middle">',l||(s+='<param name="wmode" value="transparent">'),s+='<param name="allowScriptAccess" value="always">',s+='<param name="allowNetworking" value="all" />',s+='<param name="movie" value="'+r+"?"+a+'" id="'+t+'"/>',s+='<param name="quality" value="high" />',""!=o&&(s+='<param name="bgcolor" value="'+o+'">'),s+='<embed src="'+r+"?"+a+'" quality="high" width="'+n+'" height="'+e+'" name="'+i+'" id="'+t+'" align="middle" allowNetworking="all" allowScriptAccess="always" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashaplayer" />',s+="</object>"):(s+='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="'+n+'" height="'+e+'" id="'+t+'" name="'+i+'">',""!=a&&(s+='<param name="flashvars" value="'+a+'">'),l||(s+='<param name="wmode" value="transparent">'),s+='<param name="allowScriptAccess" value="always">',s+='<param name="allowNetworking" value="all" />',s+='<param name="movie" value="'+r+'">',s+='<param name="quality" value="high">',""!=o&&(s+='<param name="bgcolor" value="'+o+'">'),s+='<embed src="'+r+"?"+a+'" quality="high" allowNetworking="all" allowScriptAccess="always" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="'+n+'" height="'+e+'" id="'+t+'"></embed>',s+="</object>"),u?s:void document.write(s)},EZ.popupWnd=function(t,n,e,r,i,a,o,u){("undefined"==typeof i||isNaN(i)||0>i||i>screen.availHeight-10)&&(i=(screen.availHeight-r)/2),("undefined"==typeof a||isNaN(a)||0>a||a>screen.availWidth-10)&&(a=(screen.availWidth-e)/2),o=o?",scrollbars=yes,resizable=yes":"",u=u?",scrollbars=yes":"";var l=window.open(t,n,"width="+e+",height="+r+",top="+i+",left="+a+",location=0,toolbar=no,directories=no,status=no"+o+u+",menubar=no,border=0");l?l.focus():alert("팝업을 허용해주세요")},EZ.setCookie=function(t,n,e){var r=new Date,i="";e&&(r.setDate(r.getDate()+e),i="expires="+r.toGMTString()+";"),document.cookie=t+"="+escape(n)+"; path=/;"+i},EZ.getCookie=function(t){t+="=",cookie=document.cookie+";";var n=cookie.indexOf(t);if(-1!=n){var e=cookie.indexOf(";",n);return unescape(cookie.substring(n+t.length,e))}return""},EZ.checkChar=function(t,n){var e,r,i,a=t.length,o=n.length;for(r=0;a>r;r++)for(e=t.charAt(r),i=0;o>i&&e!=n.charAt(i);i++)if(i+1==o)return!1;return!0},EZ.isNumber=function(t){return EZ.checkChar(t,"0123456789")},EZ.isSmallEngNum=function(t){return EZ.checkChar(t,"abcdefghijklmnopqrstuvwxyz0123456789")};var ListUtil=new Object;ListUtil.getSelectedIndex=function(t){return ListUtil.isVaildObj(t)?t.selectedIndex:-1},ListUtil.getSelectedIndexes=function(t){if(!ListUtil.isVaildObj(t))return null;for(var n=new Array,e=0;e<t.options.length;e++)t.options[e].selected&&n.push(e);return n},ListUtil.selectByValue=function(t,n){if(ListUtil.isVaildObj(t)&&t&&n&&t.type&&"select-one"==t.type)for(var e=0;e<t.options.length;e++)if(t.options[e].value==n){t.options[e].selected="selected";break}},ListUtil.getOption=function(t,n){var e;return ListUtil.isVaildObj(t)?(e=n?n:ListUtil.getSelectedIndex(t),0>e||e>t.options.length?null:t.options[e]):null},ListUtil.add=function(t,n,e){if(ListUtil.isVaildObj(t)){var r=document.createElement("option");r.appendChild(document.createTextNode(n)),3==arguments.length&&r.setAttribute("value",e),t.appendChild(r)}},ListUtil.remove=function(t,n){var e;if(ListUtil.isVaildObj(t))return e="undefined"!=typeof n?n:ListUtil.getSelectedIndex(t),0>e||e>t.options.length?!1:(t.remove(e),!0)},ListUtil.removeAll=function(t){if(ListUtil.isVaildObj(t))for(var n=t.options.length-1;n>=0;n--)ListUtil.remove(t,n)},ListUtil.move=function(t,n,e){if(ListUtil.isVaildObj(t)&&ListUtil.isVaildObj(n)){var r=t.options[e];null!=r&&n.appendChild(r)}},ListUtil.shiftUp=function(t,n){if(ListUtil.isVaildObj(t)&&n>0){var e=t.options[n],r=t.options[n-1];t.insertBefore(e,r)}},ListUtil.shiftDown=function(t,n){if(ListUtil.isVaildObj(t)&&n<t.options.length-1){var e=t.options[n],r=t.options[n+1];t.insertBefore(r,e)}},ListUtil.isVaildObj=function(t){return t&&t.type&&("select-one"==t.type||"select-multiple"==t.type)?!0:!1};var CheckBoxUtil=new Object;CheckBoxUtil.setCheckAll=function(t,n){var e=t.form,r=e[n];if(!t||!r)return!1;if(r.length&&r.length>0)for(var i=0;i<r.length;i++)r[i].checked=t.checked?!0:!1;else r.checked=t.checked},CheckBoxUtil.getCheckAll=function(checklistObj,attrName){var result=[],hasAttrName;if(hasAttrName=attrName?!0:!1,!checklistObj)return!1;if(checklistObj.length&&checklistObj.length>0)for(var i=0;i<checklistObj.length;i++)checklistObj[i].checked&&result.push(hasAttrName?eval("checklistObj[i]."+attrName):checklistObj[i].value);else checklistObj.checked&&result.push(hasAttrName?eval("checklistObj."+attrName):checklistObj.value);return result},CheckBoxUtil.setCheck=function(t,n){if(!t||!n)return!1;if(t.length&&t.length>0)for(var e=0;e<t.length;e++)for(var r=0;r<n.length;r++)t[e].value==n[r]&&(t[e].checked=!0);else for(var r=0;r<n.length;r++)t.value==n[r]&&(t.checked=!0);return!0};var FormUtil=new Object;FormUtil.getValue=function(t){if(t&&t.type&&"select-one"==t.type)return t.options[t.selectedIndex].value;switch(t.length?t[0].tagName:t.tagName){case"INPUT":if(t.length){switch(t[0].type){case"radio":for(var n=0;n<t.length;n++)if(t[n].checked)return t[n].value;break;case"checkbox":for(var e="",n=0;n<t.length;n++)t[n].checked&&(e+=(""==e?"":",")+t[n].value);return e}return""}return t.value;default:return""}},FormUtil.limitChar=function(t,n,e){for(var r=0,i=0;i<t.value.length;i++)r+=escape(t.value.charAt(i)).length>4?2:1;if(r>n){alert("최대 "+n+"byte이므로 초과된 글자수는 자동삭제됩니다."),r=0;var a="";for(i=0;i<t.value.length;i++){if(r+=escape(t.value.charAt(i)).length>4?2:1,r>n){r-=escape(t.value.charAt(i)).length>4?2:1;break}a+=t.value.charAt(i)}t.value=a}e&&$("#"+e).html(""+r)},FormUtil.inVaildChar=function(t,n){for(var e=t.value,r=0;r<n.length;r++){var i=new RegExp(n[r],"g");e=e.replace(i,"")}e!=t.value&&(alert("허용하지 않는 문자는 자동삭제됩니다."),t.value=e)},EZ.chkValue=function(t,n){var e=$(t).val();if(!e)return!1;if("number"==n)return EZ.isNumber(e);if("date"==n)return EZ.chk_date(e);if("mmdd"==n)return EZ.chk_mmdd(e);if("time"==n)return EZ.chk_time(e);if("id"==n)return EZ.isSmallEngNum(e);if("mail"==n)return EZ.isEmail(e);if("juminno"==n)return EZ.chk_juminno(e);if("length"==n){var r=$(t).data("hlength");return EZ.getByteLength(e)>r?!0:!1}},EZ.chkForm=function(t){var n=!0;return $(t).find("[text]").each(function(){if("text"==this.type||"password"==this.type||"select-one"==this.type||"file"==this.type||"textarea"==this.type||"hidden"==this.type||"number"==this.type||"email"==this.type){var t=$(this).data("text");if(!$(this).val()||""==jQuery.trim($(this).val()))return"notnull"==$(this).data("notnull")?(alert(t+"은(는) 필수항목입니다"),"hidden"!=this.type&&this.focus(),n=!1):n=!0;var e=$(this).data("check");if(e){var r="";return(n=EZ.chkValue(this,e))?n:("number"==e?r=t+"을(를) 숫자로 입력하세요":"date"==e?r=t+"을(를) 날짜로 입력하세요":"mmdd"==e?r=t+"을(를) 월일로 입력하세요":"time"==e?r=t+"을(를) 시간으로 입력하세요":"id"==e?r=t+"을(를) 영문소문자,숫자로만 입력하세요":"mail"==e?r="올바른 메일주소가 아닙니다":"juminno"==e?r="올바른 주민번호가 아닙니다":"length"==e&&(r=t+"은(는) "+$(this).data("hlength")+"자까지 입력가능합니다."),alert(r),$(this).focus(),n)}}}),n},EZ.isEmail=function(t){return null==t||0==t.length?!1:/\w+([-+.]\w+)*@\w+([-.]\w+)*\.[a-zA-Z]{2,4}$/.test(t)},EZ.chk_date=function(toCheck){if(8!=toCheck.length)return!1;if(!EZ.isNumber(toCheck))return!1;var year=toCheck.substring(0,4),month=toCheck.substring(4,6),day=toCheck.substring(6,8);month-=1;var tempDate=new Date(year,month,day);return tempDate.getFullYear()==year&&parseInt(eval(month))==tempDate.getMonth()&&parseInt(eval(day))==tempDate.getDate()},EZ.chk_mmdd=function(t){return 4!=t.length?!1:EZ.isNumber(t)?EZ.chk_date("2000"+t.toString()):!1},EZ.chk_time=function(t){if(4!=t.length)return!1;if(!EZ.isNumber(t))return!1;var n=t.substring(0,2),e=t.substring(2,4);return 0>n||n>=24?!1:0>e&&e>=60?!1:!0},EZ.chk_juminno=function(t){for(var n=t.substring(0,6),e=t.substring(6,13),r=0,i=0;i<n.length;i++){var a=n.substring(i,i+1);("0">a||a>"9")&&(r+=1)}if(""==n||0!=r)return!1;for(var o=0,i=0;i<e.length;i++){var a=e.substring(i,i+1);("0">a||a>"9")&&(o+=1)}if(""==e||0!=o)return!1;if(1!=e.substring(0,1)&&2!=e.substring(0,1)&&3!=e.substring(0,1)&&4!=e.substring(0,1))return!1;if(6!=n.length||7!=e.length)return!1;var u=n.substring(0,1),l=n.substring(1,2),c=n.substring(2,3),s=n.substring(3,4),f=n.substring(4,5),h=n.substring(5,6),p=2*u+3*l+4*c+5*s+6*f+7*h,g=e.substring(0,1),d=e.substring(1,2),v=e.substring(2,3),m=e.substring(3,4),b=e.substring(4,5),y=e.substring(5,6),w=e.substring(6,7);return p=p+8*g+9*d+2*v+3*m+4*b+5*y,p%=11,p=11-p,p%=10,p!=w?!1:!0},EZ.getByteLength=function(t){var n=0;if(null==t||""==t)return 0;for(var e=0;e<t.length;e++){var r=escape(t.charAt(e));1==r.length?n++:-1!=r.indexOf("%u")?n+=2:-1!=r.indexOf("%")&&(n+=r.length/3)}return n},EZ.getAddDay=function(t,n){now=new Date;var e=t.substring(0,4),r=t.substring(4,6),i=t.substring(6,8);now.setFullYear(Number(e)),now.setMonth(Number(r)-1),now.setDate(Number(i)+Number(n));var a=now.getFullYear(),o=now.getMonth()+1;10>o&&(o="0".concat(String(o)));var u=now.getDate();10>u&&(u="0".concat(String(u)));var l=String(a).concat(String(o)).concat(String(u));return l},EZ.getAddMonth=function(t,n){var e=new Date,r=String(t).length,i=t.substring(0,4),a=t.substring(4,6),o=8==r?t.substring(6,8):"01";return e.setFullYear(Number(i)),e.setDate(Number(o)),e.setMonth(Number(a)+Number(n)-1),i=e.getFullYear(),a=e.getMonth()+1,o=e.getDate(),10>a&&(a="0".concat(String(a))),10>o&&(o="0".concat(String(o))),String(i).concat(String(a)).concat(String(8==r?o:""))},EZ.getDayTerm=function(sDate,eDate){dt1=new Date(sDate.substring(0,4),sDate.substring(4,6)-1,sDate.substring(6,8)).getTime(),dt2=new Date(eDate.substring(0,4),eDate.substring(4,6)-1,eDate.substring(6,8)).getTime();var term="",xSec=1e3,xMin=60*xSec,xHour=60*xMin,xDate=24*xHour;with(Math)term=(dt1-dt2)/xDate;return term},EZ.snsSender=function(t,n,e){var r="";"facebook"==t?r="http://www.facebook.com/sharer.php?u="+encodeURIComponent(n)+"&t="+e:"twitter"==t?r="http://twitter.com/intent/tweet?text="+encodeURIComponent(e+" "+n):"kakaoStory"==t&&(r="https://story.kakao.com/share?url="+encodeURIComponent(n)),window.open(r,t,"width=530, height=480, resizable=no, scrollbars=no, status=no")};var storageUtil=new Object;storageUtil.set=function(t,n){if(window.localStorage)try{return localStorage.setItem(t,JSON.stringify(n)),"SUCCESS"}catch(e){if("QUOTA_EXCEEDED_ERR"===e.name||"NS_ERROR_DOM_QUOTA_REACHED"===e.name)return"EXCEEDED"}return"FAIL"},storageUtil.get=function(t){return window.localStorage?JSON.parse(localStorage.getItem(t)):"FAIL"},storageUtil.remove=function(t){return window.localStorage?(localStorage.removeItem(t),"SUCCESS"):"FAIL"}(function(){function t(t){function n(n,e,r,i,a,o){for(;a>=0&&o>a;a+=t){var u=i?i[a]:a;r=e(r,n[u],u,n)}return r}return function(e,r,i,a){r=y(r,a,4);var o=!O(e)&&b.keys(e),u=(o||e).length,l=t>0?0:u-1;return arguments.length<3&&(i=e[o?o[l]:l],l+=t),n(e,r,i,o,l,u)}}function n(t){return function(n,e,r){e=w(e,r);for(var i=j(n),a=t>0?0:i-1;a>=0&&i>a;a+=t)if(e(n[a],a,n))return a;return-1}}function e(t,n,e){return function(r,i,a){var o=0,u=j(r);if("number"==typeof a)t>0?o=a>=0?a:Math.max(a+u,o):u=a>=0?Math.min(a+1,u):a+u+1;else if(e&&a&&u)return a=e(r,i),r[a]===i?a:-1;if(i!==i)return a=n(s.call(r,o,u),b.isNaN),a>=0?a+o:-1;for(a=t>0?o:u-1;a>=0&&u>a;a+=t)if(r[a]===i)return a;return-1}}function r(t,n){var e=C.length,r=t.constructor,i=b.isFunction(r)&&r.prototype||u,a="constructor";for(b.has(t,a)&&!b.contains(n,a)&&n.push(a);e--;)a=C[e],a in t&&t[a]!==i[a]&&!b.contains(n,a)&&n.push(a)}var i=this,a=i._,o=Array.prototype,u=Object.prototype,l=Function.prototype,c=o.push,s=o.slice,f=u.toString,h=u.hasOwnProperty,p=Array.isArray,g=Object.keys,d=l.bind,v=Object.create,m=function(){},b=function(t){return t instanceof b?t:this instanceof b?void(this._wrapped=t):new b(t)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=b),exports._=b):i._=b,b.VERSION="1.8.3";var y=function(t,n,e){if(void 0===n)return t;switch(null==e?3:e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,i){return t.call(n,e,r,i)};case 4:return function(e,r,i,a){return t.call(n,e,r,i,a)}}return function(){return t.apply(n,arguments)}},w=function(t,n,e){return null==t?b.identity:b.isFunction(t)?y(t,n,e):b.isObject(t)?b.matcher(t):b.property(t)};b.iteratee=function(t,n){return w(t,n,1/0)};var k=function(t,n){return function(e){var r=arguments.length;if(2>r||null==e)return e;for(var i=1;r>i;i++)for(var a=arguments[i],o=t(a),u=o.length,l=0;u>l;l++){var c=o[l];n&&void 0!==e[c]||(e[c]=a[c])}return e}},_=function(t){if(!b.isObject(t))return{};if(v)return v(t);m.prototype=t;var n=new m;return m.prototype=null,n},E=function(t){return function(n){return null==n?void 0:n[t]}},x=Math.pow(2,53)-1,j=E("length"),O=function(t){var n=j(t);return"number"==typeof n&&n>=0&&x>=n};b.each=b.forEach=function(t,n,e){n=y(n,e);var r,i;if(O(t))for(r=0,i=t.length;i>r;r++)n(t[r],r,t);else{var a=b.keys(t);for(r=0,i=a.length;i>r;r++)n(t[a[r]],a[r],t)}return t},b.map=b.collect=function(t,n,e){n=w(n,e);for(var r=!O(t)&&b.keys(t),i=(r||t).length,a=Array(i),o=0;i>o;o++){var u=r?r[o]:o;a[o]=n(t[u],u,t)}return a},b.reduce=b.foldl=b.inject=t(1),b.reduceRight=b.foldr=t(-1),b.find=b.detect=function(t,n,e){var r;return r=O(t)?b.findIndex(t,n,e):b.findKey(t,n,e),void 0!==r&&-1!==r?t[r]:void 0},b.filter=b.select=function(t,n,e){var r=[];return n=w(n,e),b.each(t,function(t,e,i){n(t,e,i)&&r.push(t)}),r},b.reject=function(t,n,e){return b.filter(t,b.negate(w(n)),e)},b.every=b.all=function(t,n,e){n=w(n,e);for(var r=!O(t)&&b.keys(t),i=(r||t).length,a=0;i>a;a++){var o=r?r[a]:a;if(!n(t[o],o,t))return!1}return!0},b.some=b.any=function(t,n,e){n=w(n,e);for(var r=!O(t)&&b.keys(t),i=(r||t).length,a=0;i>a;a++){var o=r?r[a]:a;if(n(t[o],o,t))return!0}return!1},b.contains=b.includes=b.include=function(t,n,e,r){return O(t)||(t=b.values(t)),("number"!=typeof e||r)&&(e=0),b.indexOf(t,n,e)>=0},b.invoke=function(t,n){var e=s.call(arguments,2),r=b.isFunction(n);return b.map(t,function(t){var i=r?n:t[n];return null==i?i:i.apply(t,e)})},b.pluck=function(t,n){return b.map(t,b.property(n))},b.where=function(t,n){return b.filter(t,b.matcher(n))},b.findWhere=function(t,n){return b.find(t,b.matcher(n))},b.max=function(t,n,e){var r,i,a=-1/0,o=-1/0;if(null==n&&null!=t){t=O(t)?t:b.values(t);for(var u=0,l=t.length;l>u;u++)r=t[u],r>a&&(a=r)}else n=w(n,e),b.each(t,function(t,e,r){i=n(t,e,r),(i>o||i===-1/0&&a===-1/0)&&(a=t,o=i)});return a},b.min=function(t,n,e){var r,i,a=1/0,o=1/0;if(null==n&&null!=t){t=O(t)?t:b.values(t);for(var u=0,l=t.length;l>u;u++)r=t[u],a>r&&(a=r)}else n=w(n,e),b.each(t,function(t,e,r){i=n(t,e,r),(o>i||1/0===i&&1/0===a)&&(a=t,o=i)});return a},b.shuffle=function(t){for(var n,e=O(t)?t:b.values(t),r=e.length,i=Array(r),a=0;r>a;a++)n=b.random(0,a),n!==a&&(i[a]=i[n]),i[n]=e[a];return i},b.sample=function(t,n,e){return null==n||e?(O(t)||(t=b.values(t)),t[b.random(t.length-1)]):b.shuffle(t).slice(0,Math.max(0,n))},b.sortBy=function(t,n,e){return n=w(n,e),b.pluck(b.map(t,function(t,e,r){return{value:t,index:e,criteria:n(t,e,r)}}).sort(function(t,n){var e=t.criteria,r=n.criteria;if(e!==r){if(e>r||void 0===e)return 1;if(r>e||void 0===r)return-1}return t.index-n.index}),"value")};var A=function(t){return function(n,e,r){var i={};return e=w(e,r),b.each(n,function(r,a){var o=e(r,a,n);t(i,r,o)}),i}};b.groupBy=A(function(t,n,e){b.has(t,e)?t[e].push(n):t[e]=[n]}),b.indexBy=A(function(t,n,e){t[e]=n}),b.countBy=A(function(t,n,e){b.has(t,e)?t[e]++:t[e]=1}),b.toArray=function(t){return t?b.isArray(t)?s.call(t):O(t)?b.map(t,b.identity):b.values(t):[]},b.size=function(t){return null==t?0:O(t)?t.length:b.keys(t).length},b.partition=function(t,n,e){n=w(n,e);var r=[],i=[];return b.each(t,function(t,e,a){(n(t,e,a)?r:i).push(t)}),[r,i]},b.first=b.head=b.take=function(t,n,e){return null==t?void 0:null==n||e?t[0]:b.initial(t,t.length-n)},b.initial=function(t,n,e){return s.call(t,0,Math.max(0,t.length-(null==n||e?1:n)))},b.last=function(t,n,e){return null==t?void 0:null==n||e?t[t.length-1]:b.rest(t,Math.max(0,t.length-n))},b.rest=b.tail=b.drop=function(t,n,e){return s.call(t,null==n||e?1:n)},b.compact=function(t){return b.filter(t,b.identity)};var S=function(t,n,e,r){for(var i=[],a=0,o=r||0,u=j(t);u>o;o++){var l=t[o];if(O(l)&&(b.isArray(l)||b.isArguments(l))){n||(l=S(l,n,e));var c=0,s=l.length;for(i.length+=s;s>c;)i[a++]=l[c++]}else e||(i[a++]=l)}return i};b.flatten=function(t,n){return S(t,n,!1)},b.without=function(t){return b.difference(t,s.call(arguments,1))},b.uniq=b.unique=function(t,n,e,r){b.isBoolean(n)||(r=e,e=n,n=!1),null!=e&&(e=w(e,r));for(var i=[],a=[],o=0,u=j(t);u>o;o++){var l=t[o],c=e?e(l,o,t):l;n?(o&&a===c||i.push(l),a=c):e?b.contains(a,c)||(a.push(c),i.push(l)):b.contains(i,l)||i.push(l)}return i},b.union=function(){return b.uniq(S(arguments,!0,!0))},b.intersection=function(t){for(var n=[],e=arguments.length,r=0,i=j(t);i>r;r++){var a=t[r];if(!b.contains(n,a)){for(var o=1;e>o&&b.contains(arguments[o],a);o++);o===e&&n.push(a)}}return n},b.difference=function(t){var n=S(arguments,!0,!0,1);return b.filter(t,function(t){return!b.contains(n,t)})},b.zip=function(){return b.unzip(arguments)},b.unzip=function(t){for(var n=t&&b.max(t,j).length||0,e=Array(n),r=0;n>r;r++)e[r]=b.pluck(t,r);return e},b.object=function(t,n){for(var e={},r=0,i=j(t);i>r;r++)n?e[t[r]]=n[r]:e[t[r][0]]=t[r][1];return e},b.findIndex=n(1),b.findLastIndex=n(-1),b.sortedIndex=function(t,n,e,r){e=w(e,r,1);for(var i=e(n),a=0,o=j(t);o>a;){var u=Math.floor((a+o)/2);e(t[u])<i?a=u+1:o=u}return a},b.indexOf=e(1,b.findIndex,b.sortedIndex),b.lastIndexOf=e(-1,b.findLastIndex),b.range=function(t,n,e){null==n&&(n=t||0,t=0),e=e||1;for(var r=Math.max(Math.ceil((n-t)/e),0),i=Array(r),a=0;r>a;a++,t+=e)i[a]=t;return i};var U=function(t,n,e,r,i){if(!(r instanceof n))return t.apply(e,i);var a=_(t.prototype),o=t.apply(a,i);return b.isObject(o)?o:a};b.bind=function(t,n){if(d&&t.bind===d)return d.apply(t,s.call(arguments,1));if(!b.isFunction(t))throw new TypeError("Bind must be called on a function");var e=s.call(arguments,2),r=function(){return U(t,r,n,this,e.concat(s.call(arguments)))};return r},b.partial=function(t){var n=s.call(arguments,1),e=function(){for(var r=0,i=n.length,a=Array(i),o=0;i>o;o++)a[o]=n[o]===b?arguments[r++]:n[o];for(;r<arguments.length;)a.push(arguments[r++]);return U(t,e,this,this,a)};return e},b.bindAll=function(t){var n,e,r=arguments.length;if(1>=r)throw new Error("bindAll must be passed function names");for(n=1;r>n;n++)e=arguments[n],t[e]=b.bind(t[e],t);return t},b.memoize=function(t,n){var e=function(r){var i=e.cache,a=""+(n?n.apply(this,arguments):r);return b.has(i,a)||(i[a]=t.apply(this,arguments)),i[a]};return e.cache={},e},b.delay=function(t,n){var e=s.call(arguments,2);return setTimeout(function(){return t.apply(null,e)},n)},b.defer=b.partial(b.delay,b,1),b.throttle=function(t,n,e){var r,i,a,o=null,u=0;e||(e={});var l=function(){u=e.leading===!1?0:b.now(),o=null,a=t.apply(r,i),o||(r=i=null)};return function(){var c=b.now();u||e.leading!==!1||(u=c);var s=n-(c-u);return r=this,i=arguments,0>=s||s>n?(o&&(clearTimeout(o),o=null),u=c,a=t.apply(r,i),o||(r=i=null)):o||e.trailing===!1||(o=setTimeout(l,s)),a}},b.debounce=function(t,n,e){var r,i,a,o,u,l=function(){var c=b.now()-o;n>c&&c>=0?r=setTimeout(l,n-c):(r=null,e||(u=t.apply(a,i),r||(a=i=null)))};return function(){a=this,i=arguments,o=b.now();var c=e&&!r;return r||(r=setTimeout(l,n)),c&&(u=t.apply(a,i),a=i=null),u}},b.wrap=function(t,n){return b.partial(n,t)},b.negate=function(t){return function(){return!t.apply(this,arguments)}},b.compose=function(){var t=arguments,n=t.length-1;return function(){for(var e=n,r=t[n].apply(this,arguments);e--;)r=t[e].call(this,r);return r}},b.after=function(t,n){return function(){return--t<1?n.apply(this,arguments):void 0}},b.before=function(t,n){var e;return function(){return--t>0&&(e=n.apply(this,arguments)),1>=t&&(n=null),e}},b.once=b.partial(b.before,2);var N=!{toString:null}.propertyIsEnumerable("toString"),C=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];b.keys=function(t){if(!b.isObject(t))return[];if(g)return g(t);var n=[];for(var e in t)b.has(t,e)&&n.push(e);return N&&r(t,n),n},b.allKeys=function(t){if(!b.isObject(t))return[];var n=[];for(var e in t)n.push(e);return N&&r(t,n),n},b.values=function(t){for(var n=b.keys(t),e=n.length,r=Array(e),i=0;e>i;i++)r[i]=t[n[i]];return r},b.mapObject=function(t,n,e){n=w(n,e);for(var r,i=b.keys(t),a=i.length,o={},u=0;a>u;u++)r=i[u],o[r]=n(t[r],r,t);return o},b.pairs=function(t){for(var n=b.keys(t),e=n.length,r=Array(e),i=0;e>i;i++)r[i]=[n[i],t[n[i]]];return r},b.invert=function(t){for(var n={},e=b.keys(t),r=0,i=e.length;i>r;r++)n[t[e[r]]]=e[r];return n},b.functions=b.methods=function(t){var n=[];for(var e in t)b.isFunction(t[e])&&n.push(e);return n.sort()},b.extend=k(b.allKeys),b.extendOwn=b.assign=k(b.keys),b.findKey=function(t,n,e){n=w(n,e);for(var r,i=b.keys(t),a=0,o=i.length;o>a;a++)if(r=i[a],n(t[r],r,t))return r},b.pick=function(t,n,e){var r,i,a={},o=t;if(null==o)return a;b.isFunction(n)?(i=b.allKeys(o),r=y(n,e)):(i=S(arguments,!1,!1,1),r=function(t,n,e){return n in e},o=Object(o));for(var u=0,l=i.length;l>u;u++){var c=i[u],s=o[c];r(s,c,o)&&(a[c]=s)}return a},b.omit=function(t,n,e){if(b.isFunction(n))n=b.negate(n);else{var r=b.map(S(arguments,!1,!1,1),String);n=function(t,n){return!b.contains(r,n)}}return b.pick(t,n,e)},b.defaults=k(b.allKeys,!0),b.create=function(t,n){var e=_(t);return n&&b.extendOwn(e,n),e},b.clone=function(t){return b.isObject(t)?b.isArray(t)?t.slice():b.extend({},t):t},b.tap=function(t,n){return n(t),t},b.isMatch=function(t,n){var e=b.keys(n),r=e.length;if(null==t)return!r;for(var i=Object(t),a=0;r>a;a++){var o=e[a];if(n[o]!==i[o]||!(o in i))return!1}return!0};var L=function(t,n,e,r){if(t===n)return 0!==t||1/t===1/n;if(null==t||null==n)return t===n;t instanceof b&&(t=t._wrapped),n instanceof b&&(n=n._wrapped);var i=f.call(t);if(i!==f.call(n))return!1;switch(i){case"[object RegExp]":case"[object String]":return""+t==""+n;case"[object Number]":return+t!==+t?+n!==+n:0===+t?1/+t===1/n:+t===+n;case"[object Date]":case"[object Boolean]":return+t===+n}var a="[object Array]"===i;if(!a){if("object"!=typeof t||"object"!=typeof n)return!1;var o=t.constructor,u=n.constructor;if(o!==u&&!(b.isFunction(o)&&o instanceof o&&b.isFunction(u)&&u instanceof u)&&"constructor"in t&&"constructor"in n)return!1}e=e||[],r=r||[];for(var l=e.length;l--;)if(e[l]===t)return r[l]===n;if(e.push(t),r.push(n),a){if(l=t.length,l!==n.length)return!1;for(;l--;)if(!L(t[l],n[l],e,r))return!1}else{var c,s=b.keys(t);if(l=s.length,b.keys(n).length!==l)return!1;for(;l--;)if(c=s[l],!b.has(n,c)||!L(t[c],n[c],e,r))return!1}return e.pop(),r.pop(),!0};b.isEqual=function(t,n){return L(t,n)},b.isEmpty=function(t){return null==t?!0:O(t)&&(b.isArray(t)||b.isString(t)||b.isArguments(t))?0===t.length:0===b.keys(t).length},b.isElement=function(t){return!(!t||1!==t.nodeType)},b.isArray=p||function(t){return"[object Array]"===f.call(t)},b.isObject=function(t){var n=typeof t;return"function"===n||"object"===n&&!!t},b.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(t){b["is"+t]=function(n){return f.call(n)==="[object "+t+"]"}}),b.isArguments(arguments)||(b.isArguments=function(t){return b.has(t,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(b.isFunction=function(t){return"function"==typeof t||!1}),b.isFinite=function(t){return isFinite(t)&&!isNaN(parseFloat(t))},b.isNaN=function(t){return b.isNumber(t)&&t!==+t},b.isBoolean=function(t){return t===!0||t===!1||"[object Boolean]"===f.call(t)},b.isNull=function(t){return null===t},b.isUndefined=function(t){return void 0===t},b.has=function(t,n){return null!=t&&h.call(t,n)},b.noConflict=function(){return i._=a,this},b.identity=function(t){return t},b.constant=function(t){return function(){return t}},b.noop=function(){},b.property=E,b.propertyOf=function(t){return null==t?function(){}:function(n){return t[n]}},b.matcher=b.matches=function(t){return t=b.extendOwn({},t),function(n){return b.isMatch(n,t)}},b.times=function(t,n,e){var r=Array(Math.max(0,t));n=y(n,e,1);for(var i=0;t>i;i++)r[i]=n(i);return r},b.random=function(t,n){return null==n&&(n=t,t=0),t+Math.floor(Math.random()*(n-t+1))},b.now=Date.now||function(){return(new Date).getTime()};var Z={"&":"&","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},D=b.invert(Z),I=function(t){var n=function(n){return t[n]},e="(?:"+b.keys(t).join("|")+")",r=RegExp(e),i=RegExp(e,"g");return function(t){return t=null==t?"":""+t,r.test(t)?t.replace(i,n):t}};b.escape=I(Z),b.unescape=I(D),b.result=function(t,n,e){var r=null==t?void 0:t[n];return void 0===r&&(r=e),b.isFunction(r)?r.call(t):r};var R=0;b.uniqueId=function(t){var n=++R+"";return t?t+n:n},b.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var F=/(.)^/,T={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},M=/\\|'|\r|\n|\u2028|\u2029/g,$=function(t){return"\\"+T[t]};b.template=function(t,n,e){!n&&e&&(n=e),n=b.defaults({},n,b.templateSettings);var r=RegExp([(n.escape||F).source,(n.interpolate||F).source,(n.evaluate||F).source].join("|")+"|$","g"),i=0,a="__p+='";t.replace(r,function(n,e,r,o,u){return a+=t.slice(i,u).replace(M,$),i=u+n.length,e?a+="'+\n((__t=("+e+"))==null?'':_.escape(__t))+\n'":r?a+="'+\n((__t=("+r+"))==null?'':__t)+\n'":o&&(a+="';\n"+o+"\n__p+='"),n}),a+="';\n",n.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{var o=new Function(n.variable||"obj","_",a)}catch(u){throw u.source=a,u}var l=function(t){return o.call(this,t,b)},c=n.variable||"obj";return l.source="function("+c+"){\n"+a+"}",l},b.chain=function(t){var n=b(t);return n._chain=!0,n};var q=function(t,n){return t._chain?b(n).chain():n};b.mixin=function(t){b.each(b.functions(t),function(n){var e=b[n]=t[n];b.prototype[n]=function(){var t=[this._wrapped];return c.apply(t,arguments),q(this,e.apply(b,t))}})},b.mixin(b),b.each(["pop","push","reverse","shift","sort","splice","unshift"],function(t){var n=o[t];b.prototype[t]=function(){var e=this._wrapped;return n.apply(e,arguments),"shift"!==t&&"splice"!==t||0!==e.length||delete e[0],q(this,e)}}),b.each(["concat","join","slice"],function(t){var n=o[t];b.prototype[t]=function(){return q(this,n.apply(this._wrapped,arguments))}}),b.prototype.value=function(){return this._wrapped},b.prototype.valueOf=b.prototype.toJSON=b.prototype.value,b.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return b})}.call(this));