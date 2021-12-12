package com.tp.TpRestAPI.DTO;

import com.tp.TpRestAPI.model.User;

public class userDTO {

    private String name;

    private String surname;

    public userDTO() {}

    public userDTO(String name, String surname) {
        this.name = name;
        this.surname = surname;
    }

    public String getName() {
        return name;
    }

    public userDTO setName(String name) {
        this.name = name;
        return this;
    }

    public String getSurname() {
        return surname;
    }

    public userDTO setSurname(String surname) {
        this.surname = surname;
        return this;
    }
    public static userDTO convertUserToUserDTO(User user) {
        userDTO u = new userDTO(user.getName(),user.getSurname());
        return u;
    }
}
