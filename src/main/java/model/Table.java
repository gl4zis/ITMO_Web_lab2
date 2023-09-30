package model;

import java.util.ArrayList;

public class Table extends ArrayList<Row> {
    public void setNewRow(Row row) {
        add(row);
    }

    public Row getRow(int index) {
        return get(index);
    }
}
