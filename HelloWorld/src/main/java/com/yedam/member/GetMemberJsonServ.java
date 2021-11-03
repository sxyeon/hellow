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
		// 입력하는 기능
		MemDAO dao = new MemDAO();
		String userID = request.getParameter("id");
		String userName = request.getParameter("name");
		String address = request.getParameter("addr");
		
		MemberVO vo = new MemberVO();
		vo.setUserId(userID);
		vo.setUserName(userName);
		vo.setAddress(address);
		System.out.println(vo);
		dao.insertMember(vo);
		
		response.getWriter().println("OK");
	}

}
