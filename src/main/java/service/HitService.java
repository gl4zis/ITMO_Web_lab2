package service;

import model.Row;

import java.util.Date;
import java.util.InvalidPropertiesFormatException;

public abstract class HitService {

    public static Row getNewResult(String x, String y, String r) throws InvalidPropertiesFormatException {
        long startTime = System.nanoTime();

        if (!Validator.validate(x, y, r))
            throw new InvalidPropertiesFormatException("Validation Failed");

        double xD = Double.parseDouble(x);
        double yD = Double.parseDouble(y);
        double rD = Double.parseDouble(r);
        boolean hit = checkHit(xD, yD, rD);
        Date date = new Date();
        double time = ((double) (System.nanoTime() - startTime)) * 1E-2;

        return new Row(xD, yD, rD, hit, date, ((double) Math.round(time)) / 1E4);
    }

    private static boolean checkHit(double x, double y, double r) {
        if (Double.compare(y, 0) >= 0 && Double.compare(x, 0) <= 0)
            return Math.pow(x, 2) + Math.pow(y, 2) <= Math.pow(r / 2, 2);

        else if (Double.compare(y, 0) <= 0 && Double.compare(x, 0) <= 0)
            return x >= -r && y >= -r / 2;

        else if (Double.compare(y, 0) <= 0 && Double.compare(x, 0) > 0)
            return y >= x - r / 2;

        else
            return false;
    }
}