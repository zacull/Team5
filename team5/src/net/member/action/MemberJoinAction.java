package net.member.action;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.member.db.MemberBean;
import net.member.db.MemberDAO;


public class MemberJoinAction implements Action {

	@Override
	public ActionForward execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
		// TODO Auto-generated method stub
		request.setCharacterEncoding("euc-kr");

		ActionForward forward = new ActionForward();

		MemberDAO memberdao=new MemberDAO();
		MemberBean member=new MemberBean();

		boolean result=false;

		member.setId(request.getParameter("MEMBER_ID"));
		member.setPw(request.getParameter("MEMBER_PW"));
		member.setEmail(request.getParameter("MEMBER_EMAIL"));
		member.setNick(request.getParameter("MEMBER_NICK"));
		member.setSex(request.getParameter("MEMBER_SEX"));

		result=memberdao.joinMember(member);

		if(result==false){
			System.out.println("회원가입 실패");
			return null;
		}

		//회원가입 성공.
		forward.setRedirect(true);
		forward.setPath("./MemberLogin.me");
		return forward;
	}

}
