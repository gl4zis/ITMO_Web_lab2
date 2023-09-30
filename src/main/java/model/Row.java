package model;


import java.text.SimpleDateFormat;
import java.util.Date;

public record Row(double x, double y, double r, boolean hit, Date date, double time) {
    public String formattedDate() {
        return new SimpleDateFormat("yy-MM-dd hh:mm:ss zzz").format(date);
    }
}
