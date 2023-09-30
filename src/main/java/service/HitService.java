package service;

import model.Row;

import java.util.Date;
import java.util.InvalidPropertiesFormatException;

public class HitService {

    public static Row getNewResult(String x, String y, String r) throws InvalidPropertiesFormatException {
        long startTime = System.nanoTime();
        if (!Validator.validate(x, y, r))
            throw new InvalidPropertiesFormatException("Validation Failed");
        double xD = Double.parseDouble(x);
        double yD = Double.parseDouble(y);
        double rD = Double.parseDouble(r);
        boolean hit = checkHit(xD, yD, rD);
        Date date = new Date();
        double time = ((double) (System.nanoTime() - startTime)) / 1000000;
        return new Row(xD, yD, rD, hit, date, time);
    }

    private static boolean checkHit(double x, double y, double r) {
        if (y >=0 && x <= 0)
            return Math.pow(x, 2) + Math.pow(y, 2) <= Math.pow(r, 2);
        else if (y <= 0 && x <= 0)
            return x >= -r && y >= -r/2;
        else if (y <= 0 && x > 0)
            return y >= x - r/2;
        else
            return false;
    }
}
