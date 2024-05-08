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
        <input type="text" id="username" name="username" value="<%= getRememberedUsername(request) %>" required autocomplete="off"><br>
        <label for="password">Mật khẩu:</label><br>
        <input type="password" id="password" name="password" required><br>
        <input type="checkbox" id="remember" name="remember" value="true">
        <label for="remember">Nhớ tên đăng nhập</label><br><br>
        <button type="submit">Đăng nhập</button>
    </form>
    
    <%-- Helper method to get remembered username from cookie --%>
    <%!
        private String getRememberedUsername(HttpServletRequest request) {
            Cookie[] cookies = request.getCookies();
            if (cookies != null) {
                for (Cookie cookie : cookies) {
                    if (cookie.getName().equals("username")) {
                        return cookie.getValue();
                    }
                }
            }
            return "";
        }
    %>
</body>
</html>
