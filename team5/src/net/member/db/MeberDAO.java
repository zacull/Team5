package net.member.db;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.naming.*;
import javax.sql.DataSource;

public class MeberDAO {
	Connection con;
	PreparedStatement pstmt;
	ResultSet rs;

	public MeberDAO() {
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
		
		return 0;
	}
}
