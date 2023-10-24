package service;

public abstract class Validator {

    public static boolean validate(String x, String y, String r) {
        try {
            double xDouble = Double.parseDouble(x);
            double yDouble = Double.parseDouble(y);
            double rDouble = Double.parseDouble(r);

            return validX(xDouble) && validY(yDouble) && validR(rDouble);
        } catch (NumberFormatException e) {
            return false;
        }
    }

    private static boolean validX(Double x) {
        return x >= -4 && x <= 4;
    }

    private static boolean validY(Double y) {
        return y >= -3 && y <= 3;
    }

    private static boolean validR(Double r) {
        return r >= 1 && r <= 4;
    }
}
