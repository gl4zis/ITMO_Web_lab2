package server;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

@WebServlet(name = "controllerServlet", value = "/main")
public class ControllerServlet extends HttpServlet {
    @Override
    public void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException, ServletException {
        resp.setContentType("text/html");
        String x = req.getParameter("X");
        String y = req.getParameter("Y");
        String r = req.getParameter("R");
        if (x != null && y != null && r != null)
            req.getRequestDispatcher("/areaCheck").forward(req, resp);
        else
            req.getRequestDispatcher("/index.jsp").forward(req, resp);
    }
}
