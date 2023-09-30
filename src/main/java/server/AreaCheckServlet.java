package server;

import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import validation.Validator;

@WebServlet(name = "areaCheckServlet", value = "/areaCheck")
public class AreaCheckServlet extends HttpServlet {

    @Override
    public void doGet(HttpServletRequest req, HttpServletResponse resp) {
        String x = req.getParameter("X");
        String y = req.getParameter("Y");
        String r = req.getParameter("R");
        if (!Validator.validate(x, y, r)) {
            resp.setStatus(400);
            resp.setHeader("X-Status-Reason", "Validation Failed");
        }
    }
}
