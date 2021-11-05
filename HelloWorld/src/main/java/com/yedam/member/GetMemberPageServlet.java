package com.yedam.member;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

@WebServlet("/GetMemberPageServlet")
public class GetMemberPageServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public GetMemberPageServlet() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/json;charset=UTF-8");
		
		// ?cmd=cnt => total count
		// ?cmd=list&page=2
		String cmd = request.getParameter("cmd");
		cmd = (cmd == null) ? "cnt" : cmd;
		MemDAO dao = new MemDAO();
		// 파라미터 사용해서 전체건수 가지고 올지 해당 페이지를 가지고 올지 결정
		if (cmd.equals("cnt")) {  // cmd=cnt이면 전체 건수 가지고 옴
			int result = dao.getTotalCount();
			// {"totalCnt": 134}
			response.getWriter().println("{\"totalCnt\": " + result + "}");
			
		} else if (cmd.equals("list")) { // cmd=list이면 해당 페이지의 데이터를 가지고 옴
			String page = request.getParameter("page"); // page라는 이름으로 파라미터 넘겨주기
			page = (page == null) ? "1" : page;

			List<MemberVO> list = dao.getMemberByPage(page); // 1이 들어가면 1부터 10까지 페이지

			Gson gson = new GsonBuilder().create();
			response.getWriter().println(gson.toJson(list));
		}
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
	}

}
