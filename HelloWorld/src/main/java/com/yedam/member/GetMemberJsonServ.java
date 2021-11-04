package com.yedam.member;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonObject;


@WebServlet("/GetMemberJsonServ") // 주소값
public class GetMemberJsonServ extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    
    public GetMemberJsonServ() {
        super();
    }

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException {
		response.setContentType("text/json;charset=UTF-8");
		PrintWriter out = response.getWriter();
		// {"name":"Hongkildong", "age":20, "phone":"010-1234-5678"}
		// " {\"name\":\"hong\"} "; 문자열 안에서 따음표 그대로 쓰게 해주기 위해서 \씀
		// "[{\"id\":\"?\", \"name\":?, birth:?, gender:?}, {}, {}]";
		MemDAO dao = new MemDAO();
		List<MemberVO> list = dao.getMemberList();
//		int cnt = list.size();
//		out.println("[");
//		for(int i = 0; i < cnt; i++) {
//			out.println("{\"id\": \"" + list.get(i).getUserId() //
//					+ "\", \"name\": \"" + list.get(i).getUserName() //
//					+ "\", \"birth\": \"" + list.get(i).getBirthDate().substring(0, 10) // 0부터 10개 잘라오기
//					+ "\", \"gender\": \"" + list.get(i).getGender() //
//					+ "\"}");
//			if(i != cnt - 1) {
//				out.println(",");
//			}
//		}
//		out.println("]");
		
		Gson gson = new GsonBuilder().create();
		out.println(gson.toJson(list)); // list에 들어있는 걸 json으로 바꿔줌
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8"); // 한글
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/html;charset=UTF-8");
		// 입력하는 기능
		MemDAO dao = new MemDAO();
		String userID = request.getParameter("uid");
		String userName = request.getParameter("uname");
		String address = request.getParameter("uaddress");
		String phone = request.getParameter("uphone");
		String gender = request.getParameter("ugender");
		String birth = request.getParameter("ubirth");
		
		MemberVO vo = new MemberVO();
		vo.setUserId(userID);
		vo.setUserName(userName);
		vo.setAddress(address);
		vo.setPhone(phone);
		vo.setGender(gender);
		vo.setBirthDate(birth);
		
		Gson gson = new GsonBuilder().create(); // json 반환
		JsonObject jsonObj = new JsonObject(); // json 데이터 만들기
		
		// {"retCode":"OK", "retVal": {vo}}
		// {"retCode":"NG", "retVal": "담당자에게 문의!!" }
		if(dao.insertMember(vo)) {
			jsonObj.addProperty("recCode", "OK");
			jsonObj.addProperty("userId", vo.getUserId());
			jsonObj.addProperty("userName", vo.getUserName());
			jsonObj.addProperty("birthDate", vo.getBirthDate());
			jsonObj.addProperty("address", vo.getAddress());
			jsonObj.addProperty("phone", vo.getPhone());
			jsonObj.addProperty("gender", vo.getGender());
		} else {
			jsonObj.addProperty("retCode", "NG");
			jsonObj.addProperty("retMsg", "오류발생!! \n 담당자 문의!");
		}
		response.getWriter().println(gson.toJson(jsonObj));
		
		//System.out.println(vo);
		
//		dao.insertMember(vo);
//		
//		response.getWriter().println("OK");
	}

}
