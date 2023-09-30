package server;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

@WebServlet(name = "controllerServlet", value = "")
public class ControllerServlet extends HttpServlet {
    @Override
    public void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException, ServletException {
        resp.setContentType("text/html");
        if (isPointSet(req))
            req.getRequestDispatcher("/areaCheck").forward(req, resp);
        //else if (Boolean.parseBoolean(req.getParameter("delete")))
            //reset table
        else
            req.getRequestDispatcher("/index.jsp").forward(req, resp);
    }

    private boolean isPointSet(HttpServletRequest req) {
        String x = req.getParameter("X");
        String y = req.getParameter("Y");
        String r = req.getParameter("R");
        return x != null && y != null && r != null;
    }
}
