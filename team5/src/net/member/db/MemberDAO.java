package net.member.db;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.naming.*;
import javax.sql.DataSource;

public class MemberDAO {
	Connection con;
	PreparedStatement pstmt;
	ResultSet rs;

	public MemberDAO() {
		try{
			Context init = new InitialContext();
			DataSource ds = (DataSource) init.lookup("java:comp/env/jdbc/OracleDB");
			con = ds.getConnection();
		}catch(Exception ex){
			System.out.println("DB ���� ���� : " + ex);
			return;
		}
	}

	//ȸ������
	public boolean joinMember(MemberBean member){

		return false;
	}

	//�����α���Ȯ��
	public int isMember(MemberBean member){
		String sql = "SELECT MEMBER_PW FROM MEMBER WHERE MEMBER_ID=?";
		int result=-1;

		try{
			pstmt=con.prepareStatement(sql);
			pstmt.setString(1, member.getId());
			rs = pstmt.executeQuery();

			if(rs.next()){
				if(rs.getString("pw").equals(
						member.getPw())){
					result=1;//��ġ.
				}else{
					result=0;//����ġ.
				}
			}else{
				result=-1;//���̵� �������� ����.
			}
		}catch(Exception ex){
			System.out.println("isMember ����: " + ex);			
		}finally{
			if(rs!=null) try{rs.close();}catch(SQLException ex){}
			if(pstmt!=null) try{pstmt.close();}catch(SQLException ex){}
		}

		return result;
	}
}
