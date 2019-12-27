package com.qst.project02main.pojo;

public class ActiveCrowd {
    private String name;
    private int value;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getValue() {
        return value;
    }

    public void setValue(int value) {
        this.value = value;
    }

    public ActiveCrowd(String name, int value) {
        this.name = name;
        this.value = value;
    }
}
