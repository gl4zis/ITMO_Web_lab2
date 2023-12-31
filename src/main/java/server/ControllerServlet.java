package server;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import model.Table;

import java.io.IOException;

@WebServlet(name = "controllerServlet", value = "")
public class ControllerServlet extends HttpServlet {
    @Override
    public void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException, ServletException {
        resp.setContentType("text/html");

        if (isPointSet(req))
            req.getRequestDispatcher("/areaCheck").forward(req, resp);
        else
            req.getRequestDispatcher("/index.jsp").forward(req, resp);
    }

    @Override
    public void doDelete(HttpServletRequest req, HttpServletResponse resp) {
        req.getSession().setAttribute("table", new Table());
    }

    private boolean isPointSet(HttpServletRequest req) {
        String x = req.getParameter("X");
        String y = req.getParameter("Y");
        String r = req.getParameter("R");
        return x != null && y != null && r != null;
    }
}
