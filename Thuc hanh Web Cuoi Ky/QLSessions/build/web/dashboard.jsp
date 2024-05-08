<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Dashboard</title>
</head>
<body>
    <h1>Dashboard</h1>
    <%
        String username = (String) session.getAttribute("username");
        if (username != null) {
    %>
    <p>Chào mừng, <%= username %>!</p>
    <a href="LogoutServlet">Đăng xuất</a>
    <% } else { %>
    <p>Bạn không được phép truy cập trang này. Vui lòng đăng nhập trước.</p>
    <a href="login.jsp">Đăng nhập</a>
    <% } %>
</body>
</html>
