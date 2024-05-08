<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Login</title>
</head>
<body>
    <h1>Đăng nhập</h1>
    <% if (request.getParameter("error") != null && request.getParameter("error").equals("true")) { %>
    <p style="color: red;">Tên người dùng hoặc mật khẩu không chính xác. Vui lòng thử lại.</p>
    <% } %>
    <form action="LoginServlet" method="post">
        <label for="username">Tên người dùng:</label><br>
        <input type="text" id="username" name="username" required><br>
        <label for="password">Mật khẩu:</label><br>
        <input type="password" id="password" name="password" required><br><br>
        <button type="submit">Đăng nhập</button>
    </form>
</body>
</html>
