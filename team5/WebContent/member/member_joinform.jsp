<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>

<!DOCTYPE html>
<!--[if (IE 6)|(IE 7)|(IE 8)|(IE 9)]>
<html lang="ko" xmlns="http://www.w3.org/1999/xhtml" class="old_ie">
<![endif]-->
<![if !IE]>
<html lang="ko" xmlns="http://www.w3.org/1999/xhtml" class="">
<![endif]>
<head>  
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
<meta http-equiv="Pragma" content="no-cache" />
<meta http-equiv="Expires" content="-1" />
<meta property="fb:pages" content="1567451316868458" />
<meta name="description" content="5���� �̻��� ������, ���� �˻�, ��õ ������, �α���� ������, ���� �̺�Ʈ">
<meta name="keywords" content="">
<meta name="google-site-verification" content="3eLg1zfxeZ_oO6oOOsvIxbtcW-FtDsViPVm7-CYOl8w" />
<title>������ ������</title>
<meta property="kakao:title" content="������ ������" />
<meta property="kakao:description" content="" />
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PDPW2LX');</script>   
<link rel="stylesheet" type="text/css" href="http://recipe1.ezmember.co.kr/static/css/bootstrap_20180417.css" />
<link rel="stylesheet" type="text/css" href="/static/css/font.css" />
<link rel="stylesheet" type="text/css" href="/static/css/font-awesome.min.css" />
<link rel="stylesheet" type="text/css" href="http://recipe1.ezmember.co.kr/static/css/ez_recipe_20190221.css" />
<link href="/favicon.ico" rel="shortcut icon" type="image/x-icon" />
<link href="http://recipe1.ezmember.co.kr/img/icons/apple-touch-icon.png" rel="apple-touch-icon" />
<link href="http://recipe1.ezmember.co.kr/img/icons/apple-touch-icon-76x76.png" rel="apple-touch-icon" sizes="76x76" />
<link href="http://recipe1.ezmember.co.kr/img/icons/apple-touch-icon-120x120.png" rel="apple-touch-icon" sizes="120x120" />
<link href="http://recipe1.ezmember.co.kr/img/icons/apple-touch-icon-152x152.png" rel="apple-touch-icon" sizes="152x152" />
<link href="http://recipe1.ezmember.co.kr/img/icons/apple-touch-icon-180x180.png" rel="apple-touch-icon" sizes="180x180" />
<link href="http://recipe1.ezmember.co.kr/img/icons/icon-hires.png" rel="icon" sizes="192x192" />
<link href="http://recipe1.ezmember.co.kr/img/icons/icon-normal.png" rel="icon" sizes="128x128" />
<script type="text/javascript" src="../js/jquery-1.11.2.min.js" charset="utf-8"></script>
<script type="text/javascript" src="../js/publishertag.js"></script>
<script type="text/javascript">
// Common Javascript
var _WWW_URL_ = 'http://www.10000recipe.com';
var _IMG_URL_ = 'http://recipe1.ezmember.co.kr';
var _FILE_URL_ = 'http://recipe1.ezmember.co.kr/cache';
var _CURRENT_PAGE_ = 'http://www.10000recipe.com/user/insert.html?token=97951528';
var _USER_ID_ = '';
</script>
</head>
<body>
 <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PDPW2LX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>   
<div class="nav_etc"><a href="/index.html"><img src="http://recipe1.ezmember.co.kr/img/logo3.png"></a></div>
<script>

function chkEmailSSL() {
    emailFlag = false;
    var email = $("#id_email").val();
    if( !email )
    {
        viewMsg("email","�̸����� �Է��� �ּ���.","error");
        return ;
    }
    var isEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var isHan = /[��-����-��]/g;
    if (!isEmail.test(email) || isHan.test(email))
    {
        viewMsg("email","�̸��� �ּҰ� �ùٸ��� �ʽ��ϴ�.","error");
        return ;
    }
    if( email.length < 4 || email.length > 100 )
    {
        viewMsg("email","100�� �̳��� �Է��� �ּ���.","error");
        return ;
    }
    $.ajax({
        type: "POST",
        url: "https://www.10000recipe.com/user/ajax.html",
        dataType: 'jsonp',
        jsonpCallback: 'jsonEzCallback',
        data: "q_mode=checkDuplicateSSL&item=email&id="+btoa(unescape(encodeURIComponent(email))),
        success: function(result) {
            result = result['result'];
            switch(result)
            {
                case 'NO_USE' :
                    if($("#updNick").html()) emailSubmit(); //update ��
                    viewMsg("email","����� �� �ִ� �̸����Դϴ�.","success");
                    emailFlag = true;
                break;
                case 'DUPLICATE':
                    viewMsg("email","�̹� ������� �̸����Դϴ�.","error");
                break;
                case 'ERROR':
                    viewMsg("email","�����Դϴ�. �ٽ� �õ��� �ּ���.","error");
                break;
            }
        }
    });
}

function doSubmit()
{
    if(!idFlag)
    {
        chkID();
        return false;
    }
    if(!pwFlag)
    {
        chkPasswd1();
        return false;
    }
    if(!chkPasswd2())
    {
        return false;
    }
    if(!nickFlag)
    {
        chkNick();
        return false;
    }
    if(!emailFlag)
    {
        chkEmailSSL();
        return false;
    }
    if(!$("#pro_tg_gender").val())
    {
        viewMsg("gender","������ ������ �ּ���.","error");
        return false;
    }
    return true;
} 
</script>
    <div class="container_etc" style="width:460px;">
      <h2>ȸ������</h2>
        <form name="form_insert" id="frmInsert" method="post" action="/MemberJoinAction.me" autocomplete="off" onSubmit="return doSubmit()">
        <input type='hidden' name='q_mode' value='insert'>
        <input type="hidden" name="q_path" value="">
          <div id="idFrms" class="form-group has-feedback">
            <input type="text" name="frm[pro_id_user]" class="form-control" id="id_user" onBlur="chkID()" placeholder="���̵�">
            <span id="idStatus" class="glyphicon form-control-feedback" aria-hidden="true"></span>
            <span id="idMsg" style="display:none;"></span>
          </div>
          <div id="pwFrms" class="form-group has-feedback">
            <input type="password" name="frm[pro_tx_password]" class="form-control" id="tx_passwd" onBlur="chkPasswd1()" onkeyup="chkShiftUp(event)"
                   onkeypress="chkCapslock(event)" onKeydown="chkShiftDown(event)" placeholder="��й�ȣ">
            <span id="pwStatus" class="glyphicon form-control-feedback" aria-hidden="true"></span>
            <span id="pwMsg" style="display:none;"></span>
          </div>
          <div id="pwFrms2" class="form-group has-feedback mag_b_10">
            <input type="password" name="tx_passwd_con" class="form-control" id="tx_passwd_con" onBlur="chkPasswd2()" placeholder="��й�ȣȮ��">
            <span id="pwStatus2" class="glyphicon form-control-feedback" aria-hidden="true"></span>
            <span id="pwMsg2" style="display:none;" class="text-danger">��й�ȣ Ȯ���� �Է����ּ���.</span>
          </div>
          <div id="emailFrms" class="form-group has-feedback">
            <input type="text" name="frm[pro_id_email]" class="form-control" id="id_email" onBlur="chkEmailSSL()" placeholder="�̸���">
            <span id="emailStatus" class="glyphicon form-control-feedback" aria-hidden="true"></span>
            <span id="emailMsg" style="display:none;"></span>
          </div>
          <div id="nickFrms" class="form-group has-feedback">
            <input type="text" name="frm[pro_nm_user]" class="form-control" id="nm_user" onBlur="chkNick()" placeholder="�г���">
            <span id="nickStatus" class="glyphicon form-control-feedback" aria-hidden="true"></span>
            <span id="nickMsg" style="display:none;"></span>
          </div>
          <div class="form-group has-feedback">
            <div class="btn_gender" style="width:220px;left:20px;">
              <span class="input-group-btn">
                <button type="button" id="tg_male" class="btn btn-sm btn-default" style="width:100px;" onClick="chkGender('m')">����</button>
              </span>
              <span class="input-group-btn">
                <button type="button" id="tg_female" class="btn btn-sm btn-default" style="width:100px;" onClick="chkGender('f')">����</button>
              </span>
            </div>
            <input type="text" class="form-control" disabled>
            <span id="genderMsg" style="display:none;"></span>
          </div>

          <input type="hidden" name="frm[pro_tg_gender]" id="pro_tg_gender">
          <button type="submit" class="btn btn-primary btn-block btn-lg">ȸ������</button>
      </div>

<script type="text/javascript" src="../js/user.min_20190308.js" charset="utf-8"></script>
<script type="text/javascript" src="../js/coreutil.min_20170112.js" charset="utf-8"></script>
<script type="text/javascript" src="../js/ui.min_20150609.js" charset="utf-8"></script>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','../js/analytics.js','ga');
  ga('create', 'UA-62003031-2', 'auto');
  ga('require', 'displayfeatures');
  ga('send', 'pageview');
</script>
<img src="//kr-gmtdmp.mookie1.com/t/v2/learn?tagid=V2_255869&src.rand=[timestamp]" style="display:none;"/>
<img src="//kr-gmtdmp.mookie1.com/t/v2/activity?tagid=V2_281041&src.rand=[timestamp]" style="display:none;"/>
<iframe src="//static-tagr.gd1.mookie1.com/s1/sync-apac.html?cc=KR" style="display:none;"></iframe>

</body>
</html>