package com.tp.TpRestAPI.service;

import com.tp.TpRestAPI.customException.ResourceNotFoundException;
import com.tp.TpRestAPI.model.User;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    public User checkUserExistance(int id) {
        int i =0;
        boolean find = false;
        User Result = null;
        while(i< User.userDatabase.size() && !find) {
            if (User.userDatabase.get(i).getId() == id) {
                Result = User.userDatabase.get(i);
                find=true;
            }
            i+=1;
        }
        return Result;
    }

    public Optional<User> get(int id) {
        int i =0;
        boolean find = false;
        User Result = null;
        while(i<User.userDatabase.size() && !find) {
            if (User.userDatabase.get(i).getId() == id) {
                Result = User.userDatabase.get(i);
                find=true;
            }
            i+=1;
        }
        return Optional.ofNullable(Result);
    }

    public Optional<List<User>> create(User user){
        if(checkUserExistance(user.getId())==null) {
            User.userDatabase.add(user);
            return Optional.ofNullable(User.userDatabase);
        }
        else {
            return Optional.ofNullable(User.userDatabase);
        }
    }

    public Optional<List<User>> update(int id,User user) {
        if(checkUserExistance(id)!=null) {
            User original = get(id).orElseThrow(()->
                    new ResourceNotFoundException("user with id: "+id+" do not exist"));
            original.setName(user.getName()).setSurname(user.getSurname()).setPassword(user.getPassword());

        }
        /*else {
            return Optional.ofNullable(User.userDatabase);
        }*/
        return Optional.ofNullable(User.userDatabase);
    }

    public List<User> delete(int id) {
        if(checkUserExistance(id)!=null) {
            User.userDatabase.remove(checkUserExistance(id));
            return User.userDatabase;
        } else {
            return User.userDatabase;
        }
    }

}

