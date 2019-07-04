<%@ page language="java" contentType="text/html; charset=EUC-KR"
	pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html lang="ko" xmlns="http://www.w3.org/1999/xhtml" class="">
<![endif]>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
<meta http-equiv="Pragma" content="no-cache" />
<meta http-equiv="Expires" content="-1" />
<meta property="fb:pages" content="1567451316868458" />
<meta name="description"
	content="5만건 이상의 레시피, 편리한 검색, 추천 레시피, 인기쿡방 레시피, 매주 이벤트">
<meta name="keywords" content="">
<meta name="google-site-verification"
	content="3eLg1zfxeZ_oO6oOOsvIxbtcW-FtDsViPVm7-CYOl8w" />
<title>TEAM5_만개의 레시피_동의</title>
<meta property="kakao:title" content="만개의 레시피" />
<meta property="kakao:description" content="" />
<script>
	(function(w, d, s, l, i) {
		w[l] = w[l] || [];
		w[l].push({
			'gtm.start' : new Date().getTime(),
			event : 'gtm.js'
		});
		var f = d.getElementsByTagName(s)[0], j = d.createElement(s), dl = l != 'dataLayer' ? '&l='
				+ l
				: '';
		j.async = true;
		j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
		f.parentNode.insertBefore(j, f);
	})(window, document, 'script', 'dataLayer', 'GTM-PDPW2LX');
</script>
<link rel="stylesheet" type="text/css"
	href="http://recipe1.ezmember.co.kr/static/css/bootstrap_20180417.css" />
<link rel="stylesheet" type="text/css" href="/static/css/font.css" />
<link rel="stylesheet" type="text/css"
	href="/static/css/font-awesome.min.css" />
<link rel="stylesheet" type="text/css"
	href="http://recipe1.ezmember.co.kr/static/css/ez_recipe_20190221.css" />
<link href="/favicon.ico" rel="shortcut icon" type="image/x-icon" />
<link
	href="http://recipe1.ezmember.co.kr/img/icons/apple-touch-icon.png"
	rel="apple-touch-icon" />
<link
	href="http://recipe1.ezmember.co.kr/img/icons/apple-touch-icon-76x76.png"
	rel="apple-touch-icon" sizes="76x76" />
<link
	href="http://recipe1.ezmember.co.kr/img/icons/apple-touch-icon-120x120.png"
	rel="apple-touch-icon" sizes="120x120" />
<link
	href="http://recipe1.ezmember.co.kr/img/icons/apple-touch-icon-152x152.png"
	rel="apple-touch-icon" sizes="152x152" />
<link
	href="http://recipe1.ezmember.co.kr/img/icons/apple-touch-icon-180x180.png"
	rel="apple-touch-icon" sizes="180x180" />
<link href="http://recipe1.ezmember.co.kr/img/icons/icon-hires.png"
	rel="icon" sizes="192x192" />
<link href="http://recipe1.ezmember.co.kr/img/icons/icon-normal.png"
	rel="icon" sizes="128x128" />
<script type="text/javascript"
	src="http://recipe1.ezmember.co.kr/static/js/jquery-1.11.2.min.js"
	charset="utf-8"></script>
<script type="text/javascript"
	src="//static.criteo.net/js/ld/publishertag.js"></script>
<script type="text/javascript">
	// Common Javascript
	var _WWW_URL_ = 'http://www.10000recipe.com';
	var _IMG_URL_ = 'http://recipe1.ezmember.co.kr';
	var _FILE_URL_ = 'http://recipe1.ezmember.co.kr/cache';
	var _CURRENT_PAGE_ = 'http://www.10000recipe.com/user/join.html';
	var _USER_ID_ = '';
</script>
</head>
<body>
	<noscript>
		<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PDPW2LX"
			height="0" width="0" style="display: none; visibility: hidden"></iframe>
	</noscript>
	<div class="nav_etc">
		<a href="./index.jsp"><img
			src="http://recipe1.ezmember.co.kr/img/logo3.png"></a>
	</div>
	<script>
		function doAgreeCheck() {
			if (!$('#contractCheck').is(':checked')
					|| !$('#privacyCheck').is(':checked')) {
				$('#checkMsg').show();
				return;
			} else {
				document.joinFrm.submit();
			}
		}

		$(document)
				.ready(
						function() {
							$("#allchk")
									.click(
											function() {
												var chked = ($('#allchk')
														.is(':checked')) ? true
														: false;
												$('#contractCheck').prop(
														"checked", chked);
												$('#privacyCheck').prop(
														"checked", chked);
											});
							$("#contractCheck")
									.click(
											function() {
												if (!$('#contractCheck').is(
														':checked'))
													$('#allchk').prop(
															"checked", false);
												else if ($('#contractCheck')
														.is(':checked')
														&& $('#privacyCheck')
																.is(':checked'))
													$('#allchk').prop(
															"checked", true);
											});
							$("#privacyCheck")
									.click(
											function() {
												if (!$('#privacyCheck').is(
														':checked'))
													$('#allchk').prop(
															"checked", false);
												else if ($('#contractCheck')
														.is(':checked')
														&& $('#privacyCheck')
																.is(':checked'))
													$('#allchk').prop(
															"checked", true);
											});

						});
	</script>
	<div class="container_etc" style="width: 490px;">
		<div class="panel panel-default">
			<div class="panel-body">
				<form name="joinFrm" method="post"
					action="./member/member_joinform.jsp">
					<input type="hidden" name="token" value="41481232"> <input
						type="hidden" name="kakao_token" value=""> <input
						type="hidden" name="facebook_token" value=""> <input
						type="hidden" name="naver_token" value=""> <input
						type="hidden" name="google_token" value=""> <input
						type="hidden" name="q_path" value="">
				</form>
				<p class="guide_txt2" style="padding-top: 20px;">
					이용약관, 개인정보 수집 및 이용에 모두 동의합니다. <input type="checkbox" id="allchk"
						value="1">
				</p>
				<div class="etc_line"></div>
				<p class="guide_txt2">
					만개의 레시피 이용약관 동의<input type="checkbox" id="contractCheck" value="1">
				</p>
				<textarea readonly="readonly"> 만개의레시피 이용약관은 다음과 같은 내용을 담고 있습니다. (2019년 7월 4일 시행) :	고구마머겅</textarea>
				<span style="position: relative;">
					<p class="guide_txt2" style="padding-top: 20px;">
						개인정보 수집 및 이용에 대한 안내 <input type="checkbox" id="privacyCheck"
							value="1"> <a href="/user/rules.html?f=privacy"
							style="float: right; margin-right: 10px; color: blue; font-size: 14px; font-weight: normal;">[전체보기]</a>
					</p>
				</span>
				<textarea readonly="readonly"> (주)창호회사 좋아연 </textarea>
			</div>
		</div>
		<p id="checkMsg"
			style="margin-top: 10px; text-align: center; color: #FF0000; display: none;">이용약관과
			개인정보 수집 및 이용에 대한 안내 모두 동의해주세요.</p>
		<p style="text-align: center;">
			<button type="button" onclick="doAgreeCheck()"
				class="btn btn-primary btn-lg" style="width: 210px;">동의</button>
			<button type="button" onclick="location.href='./index.jsp'"
				class="btn btn-default btn-lg" style="width: 210px;">비동의</button>
		</p>
	</div>

	<script type="text/javascript"
		src="http://recipe1.ezmember.co.kr/static/js/coreutil.min_20170112.js"
		charset="utf-8"></script>
	<script type="text/javascript"
		src="http://recipe1.ezmember.co.kr/static/js/ui.min_20150609.js"
		charset="utf-8"></script>
	<script>
		(function(i, s, o, g, r, a, m) {
			i['GoogleAnalyticsObject'] = r;
			i[r] = i[r] || function() {
				(i[r].q = i[r].q || []).push(arguments)
			}, i[r].l = 1 * new Date();
			a = s.createElement(o), m = s.getElementsByTagName(o)[0];
			a.async = 1;
			a.src = g;
			m.parentNode.insertBefore(a, m)
		})(window, document, 'script',
				'//www.google-analytics.com/analytics.js', 'ga');
		ga('create', 'UA-62003031-2', 'auto');
		ga('require', 'displayfeatures');
		ga('send', 'pageview');
	</script>
	<img
		src="//kr-gmtdmp.mookie1.com/t/v2/learn?tagid=V2_255869&src.rand=[timestamp]"
		style="display: none;" />
	<img
		src="//kr-gmtdmp.mookie1.com/t/v2/activity?tagid=V2_281041&src.rand=[timestamp]"
		style="display: none;" />
	<iframe src="//static-tagr.gd1.mookie1.com/s1/sync-apac.html?cc=KR"
		style="display: none;"></iframe>

</body>
</html>