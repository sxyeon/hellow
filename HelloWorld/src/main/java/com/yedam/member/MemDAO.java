package com.yedam.member;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class MemDAO extends DAO {
	
	// 한 건 조회하는 기능
	public MemberVO getMember(String id) {
		String sql = "select * from member where user_id = ?";
		connect();
		MemberVO vo = null;
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, id);
			rs = psmt.executeQuery();
			if(rs.next()) {
				vo = new MemberVO();
				vo.setAddress(rs.getString("address")); // address 칼럼에 담긴 결과값을 vo에 담기
				vo.setBirthDate(rs.getString("birth_date"));
				vo.setGender(rs.getString("gender"));
				vo.setPhone(rs.getString("phone"));
				vo.setUserId(rs.getString("user_id"));
				vo.setUserName(rs.getString("user_name"));
			}
		} catch (SQLException e) {
			e.printStackTrace();
			return null;
		} finally {
			disconnect();
		}
		return vo; // 예외 발생하면 null로
	}

	// 한 건 입력하는 기능
	public void insertMember(MemberVO vo) {
		String sql = "insert into member(user_id, user_name, address) values(?,?,?)";
		connect();
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, vo.getUserId());
			psmt.setString(2, vo.getUserName());
			psmt.setString(3, vo.getAddress());
			int r = psmt.executeUpdate();
			System.out.println(r + "건 입력됨");
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
	}

	// 전체 리스트
	public List<MemberVO> getMemberList() {
		String sql = "select * from member order by 1"; // 오름차순으로 멤버 가져오기
		connect(); // 상속받아서 쓰는 거니까 쓸 수 있음
		List<MemberVO> memberList = new ArrayList<>();
		try {
			stmt = conn.createStatement(); // Statement stmt = new Statement();
			rs = stmt.executeQuery(sql); // 쿼리 실행한한 결과 가져와서 rs에 담아주기
			while (rs.next()) {
				MemberVO vo = new MemberVO();
				vo.setAddress(rs.getString("address")); // address 칼럼에 담긴 결과값을 vo에 담기
				vo.setBirthDate(rs.getString("birth_date"));
				vo.setGender(rs.getString("gender"));
				vo.setPhone(rs.getString("phone"));
				vo.setUserId(rs.getString("user_id"));
				vo.setUserName(rs.getString("user_name"));
				memberList.add(vo); // 가지고 온 데이터 건수만큼 루핑 돌면서 값 담아줌
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return memberList;
	}
}
