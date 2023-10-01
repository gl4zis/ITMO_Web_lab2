package server;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import model.Row;
import service.HitService;

import java.io.IOException;
import java.util.InvalidPropertiesFormatException;

@WebServlet(name = "areaCheckServlet", value = "/areaCheck")
public class AreaCheckServlet extends HttpServlet {

    @Override
    public void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException, ServletException {
        String x = req.getParameter("X");
        String y = req.getParameter("Y");
        String r = req.getParameter("R");
        try {
            Row newRow = HitService.getNewResult(x, y, r);
            req.setAttribute("row", newRow);
            req.getRequestDispatcher("/result.jsp").forward(req, resp);
        } catch (InvalidPropertiesFormatException e) {
            resp.setStatus(400);
            resp.setHeader("X-Status-Reason", "Validation Failed");
        }
    }
}
