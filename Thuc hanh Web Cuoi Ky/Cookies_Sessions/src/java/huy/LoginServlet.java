package huy;

import java.io.IOException;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

@WebServlet("/LoginServlet")
public class LoginServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String username = request.getParameter("username");
        String password = request.getParameter("password");

        // Check if username and password are correct (Assuming password is always "123456")
        if (username != null && password != null && password.equals("123456")) {
            HttpSession session = request.getSession();
            session.setAttribute("username", username);

            // Check if the "Remember Me" checkbox is checked
            if (request.getParameter("remember") != null && request.getParameter("remember").equals("true")) {
                // Set a cookie to remember the username
                Cookie cookie = new Cookie("username", username);
                cookie.setMaxAge(30 * 24 * 60 * 60); // Cookie expires in 30 days
                response.addCookie(cookie);
            }

            response.sendRedirect("dashboard.jsp");
        } else {
            response.sendRedirect("login.jsp?error=true");
        }
    }
}
