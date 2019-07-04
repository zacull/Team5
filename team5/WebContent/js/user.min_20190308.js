function viewMsg(s,e,a){if(s&&a){var r=s+"Frms",i=s+"Status",t=s+"Msg";e&&$("#"+t).show(),"error"==a?($("#"+r).removeClass("has-success").addClass("has-error"),$("#"+i).removeClass("glyphicon-ok").addClass("glyphicon-remove"),$("#"+t).removeClass("text-success").addClass("text-danger")):($("#"+r).removeClass("has-error").addClass("has-success"),$("#"+i).removeClass("glyphicon-remove").addClass("glyphicon-ok"),$("#"+t).removeClass("text-danger").addClass("text-success")),e&&$("#"+t).html(e)}}function chkID(){idFlag=!1;var s=$("#id_user").val();if(!s)return void viewMsg("id","아이디를 입력해 주세요.","error");var e=/^[a-z0-9]{5,12}$/;return e.test(s)?void $.ajax({type:"POST",url:"/user/ajax.html",data:"q_mode=checkDuplicate&item=id&id="+btoa(unescape(encodeURIComponent(s))),success:function(s){switch(s){case"NO_USE":viewMsg("id","사용할 수 있는 아이디입니다.","success"),idFlag=!0;break;case"DUPLICATE":viewMsg("id","이미 사용중인 아이디입니다.","error");break;case"ERROR":viewMsg("id","오류입니다. 다시 시도해 주세요.","error")}}}):void viewMsg("id","5~12자의 영문 소문자, 숫자만 사용 가능합니다.","error")}function viewPWMsg(s,e){$("#pwMsg").show(),"error"==e?($("#pwFrms").removeClass("has-success").removeClass("has-warning").addClass("has-error"),$("#pwStatus").removeClass("glyphicon-ok").removeClass("glyphicon-exclamation-sign").addClass("glyphicon-remove"),$("#pwMsg").removeClass("text-success").removeClass("text-warning").addClass("text-danger")):"warning"==e?($("#pwFrms").removeClass("has-success").removeClass("has-error").addClass("has-warning"),$("#pwStatus").removeClass("glyphicon-ok").removeClass("glyphicon-remove").addClass("glyphicon-exclamation-sign"),$("#pwMsg").removeClass("text-success").removeClass("text-danger").addClass("text-warning")):($("#pwFrms").removeClass("has-error").removeClass("has-warning").addClass("has-success"),$("#pwStatus").removeClass("glyphicon-remove").removeClass("glyphicon-exclamation-sign").addClass("glyphicon-ok"),$("#pwMsg").removeClass("text-danger").removeClass("text-warning").addClass("text-success")),$("#pwMsg").html(s)}function chkShiftUp(s){s.which&&16==s.which&&(isShift=!1)}function chkShiftDown(s){s.which&&16==s.which&&(isShift=!0)}function chkCapslock(s){var e=0,a=!1;window.event?(e=s.keyCode,a=s.shiftKey):s.which&&(e=s.which,a=isShift),e>=65&&90>=e&&!a?viewPWMsg("Caps Lock이 켜져 있습니다.","warning"):e>=97&&122>=e&&a&&viewPWMsg("Caps Lock이 켜져 있습니다.","warning")}function chkPasswd1(){pwFlag=!1;var s=$("#tx_passwd").val();return s?/^[a-zA-Z0-9!@#$%^&*()?_~]{6,12}$/.test(s)?(viewPWMsg("양호한 비밀번호입니다.","success"),void(pwFlag=!0)):void viewPWMsg("비밀번호는 6자 이상 12자이내로 입력해야 합니다.","error"):void viewPWMsg("비밀번호를 입력해주세요.","error")}function isContinuedValue(s){for(var e=0,a=0,r="",i="",t="",o="",c=0;c<s.length-3;c++)r=s.charAt(c),i=s.charAt(c+1),t=s.charAt(c+2),o=s.charAt(c+3),r.charCodeAt(0)-i.charCodeAt(0)==1&&i.charCodeAt(0)-t.charCodeAt(0)==1&&t.charCodeAt(0)-o.charCodeAt(0)==1&&(e+=1),r.charCodeAt(0)-i.charCodeAt(0)==-1&&i.charCodeAt(0)-t.charCodeAt(0)==-1&&t.charCodeAt(0)-o.charCodeAt(0)==-1&&(a+=1);return e>0||a>0}function chkPasswd2(){return $("#tx_passwd_con").val()?$("#tx_passwd").val()!=$("#tx_passwd_con").val()?($("#pwMsg2").show(),$("#pwMsg2").html("비밀번호가 일치하지 않습니다."),$("#pwFrms2").removeClass("has-success").addClass("has-error"),$("#pwStatus2").removeClass("glyphicon-ok").addClass("glyphicon-remove"),!1):($("#pwFrms2").removeClass("has-error").addClass("has-success"),$("#pwStatus2").removeClass("glyphicon-remove").addClass("glyphicon-ok"),$("#pwMsg2").hide(),!0):($("#pwMsg2").show(),$("#pwFrms2").removeClass("has-success").addClass("has-error"),$("#pwStatus2").removeClass("glyphicon-ok").addClass("glyphicon-remove"),!1)}function chkNick(){nickFlag=!1;var s=$("#nm_user").val();if(!s)return void viewMsg("nick","닉네임을 입력해 주세요.","error");var e=/[^가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z0-9]/gi;return e.test(s)?void viewMsg("nick","한글, 영문, 숫자만 사용 가능합니다.","error"):s.length<2||s.length>30?void viewMsg("nick","2~30자로 입력해 주세요.","error"):void $.ajax({type:"POST",url:"/user/ajax.html",data:"q_mode=checkDuplicate&item=nick&id="+s,success:function(s){switch(s){case"NO_USE":$("#updEmail").html()&&nickSubmit(),viewMsg("nick","사용할 수 있는 닉네임입니다.","success"),nickFlag=!0;break;case"DUPLICATE":viewMsg("nick","이미 사용중인 닉네임입니다.","error");break;case"ERROR":viewMsg("nick","오류입니다. 다시 시도해 주세요.","error")}}})}function chkEmail(){emailFlag=!1;var s=$("#id_email").val();if(!s)return void viewMsg("email","이메일을 입력해 주세요.","error");var e=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,a=/[ㄱ-ㅎ가-힣]/g;return!e.test(s)||a.test(s)?void viewMsg("email","이메일 주소가 올바르지 않습니다.","error"):s.length<4||s.length>100?void viewMsg("email","100자 이내로 입력해 주세요.","error"):void $.ajax({type:"POST",url:"/user/ajax.html",data:"q_mode=checkDuplicate&item=email&id="+btoa(unescape(encodeURIComponent(s))),success:function(s){switch(s){case"NO_USE":$("#updNick").html()&&emailSubmit(),viewMsg("email","사용할 수 있는 이메일입니다.","success"),emailFlag=!0;break;case"DUPLICATE":viewMsg("email","이미 사용중인 이메일입니다.","error");break;case"ERROR":viewMsg("email","오류입니다. 다시 시도해 주세요.","error")}}})}function chkGender(s){$("#tg_male").removeClass("btn-success").addClass("btn-default"),$("#tg_female").removeClass("btn-success").addClass("btn-default");var e="m"==s?"tg_male":"tg_female";$("#"+e).removeClass("btn-default").addClass("btn-success"),$("#pro_tg_gender").val(s)}function chkBirth(){birthFlag=!1;var s=new Date,e=s.getFullYear(),a=$("#dt_birth").val();return a?!/[0-9]{4}/g.test(a)||1900>a||a>=e?void viewMsg("birth","생년을 정확히 입력해주세요. ex)1984 ","error"):a>e-14?void viewMsg("birth","14세 미만은 가입할 수 없습니다.","error"):($("#birthMsg").hide(),viewMsg("birth","","success"),void(birthFlag=!0)):void viewMsg("birth","생년을 입력해 주세요.","error")}var idFlag=!1,pwFlag=!1,nickFlag=!1,emailFlag=!1,birthFlag=!1,isShift=!1;