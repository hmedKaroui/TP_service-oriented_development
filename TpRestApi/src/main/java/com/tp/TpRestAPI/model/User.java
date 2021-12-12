package com.tp.TpRestAPI.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.ArrayList;
import java.util.List;

public class User {
    public static final List<User> userDatabase = new ArrayList<User>() {{
        add(new User(1,"Ahmed","Karoui","12589jk"));
        add(new User(2,"Oussama","Abdelwahed","125896"));
        add(new User(3,"Fares","Rahmeni","12547frous"));
    }};

    private int id;

    private String name;

    private String surname;

    @JsonIgnore
    private String password;

    public User() {}

    public User(int id, String name, String surname, String password) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.password = password;
    }

    public int getId() {
        return id;
    }

    public User setId(int id) {
        this.id = id;
        return this;
    }

    public String getName() {
        return name;
    }

    public User setName(String name) {
        this.name = name;
        return this;
    }

    public String getSurname() {
        return surname;
    }

    public User setSurname(String surname) {
        this.surname = surname;
        return this;
    }

    @JsonIgnore
    public String getPassword() {
        return password;
    }

    public User setPassword(String password) {
        this.password = password;
        return this;
    }
}
