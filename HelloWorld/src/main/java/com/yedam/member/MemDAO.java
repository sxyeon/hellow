package com.yedam.member;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class MemDAO extends DAO {
	
	// 수정기능
	public Map<String, Object> updateMember(MemberVO vo) {
		// retCode: OK, retVal: vo
		// retCode: NG, retVal: errMsg
		String sql = "update member";
		sql += "     set     user_name = ?";
		sql += "            ,birth_date = ?";
		sql += "            ,gender = ?";
		sql += "            ,address = ?";
		sql += "      where user_id = ?"; // 업데이트 구문 만든 거
		
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("retCode", "NG");
		map.put("retVal", "Error!!");
		
		connect();
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, vo.getUserName()); // 각각 파라미터에 값 주기
			psmt.setString(2, vo.getBirthDate());
			psmt.setString(3, vo.getGender());
			psmt.setString(4, vo.getAddress());
			psmt.setString(5, vo.getAddress());
			psmt.setString(6, vo.getUserId());
			int r = psmt.executeUpdate(); // 실행
			System.out.println(r + "건 수정");
			if(r > 0) { // db가 수정되면 1을 리턴해줌
				map.put("retCode", "OK");
				map.put("retVal", vo);
				return map;
			}
		} catch (SQLException e) {
			e.printStackTrace();
			map.put("retVal", e.getMessage()); // 예외가 가지고 있는 에러메시지
			return map;
		} finally {
			disconnect();
		}
		return map;
	} 
	
	// 한 건 삭제
	public boolean deleteMember(String id) {
		String sql = "delete from member where user_id = ?";
		connect();
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, id);
			int r = psmt.executeUpdate();
			System.out.println(r + "건 삭제.");
			if(r > 0) {
				return true;
			}
		} catch (SQLException e) {
			e.printStackTrace();
			return false;
		}
			return false;
	}	
	
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
	public boolean insertMember(MemberVO vo) {
		String sql = "insert into member(user_id, user_name, address, phone, birth_date, gender)"
				+ " values(?,?,?,?,?,?)";
		connect();
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, vo.getUserId());
			psmt.setString(2, vo.getUserName());
			psmt.setString(3, vo.getAddress());
			psmt.setString(4, vo.getPhone());
			psmt.setString(5, vo.getBirthDate());
			psmt.setString(6, vo.getGender());
			
			int r = psmt.executeUpdate();
			System.out.println(r + "건 입력됨");
		} catch (SQLException e) {
			e.printStackTrace();
			return false;
		} finally {
			disconnect();
		}
		return true;
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
