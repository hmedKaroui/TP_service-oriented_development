package com.tp.TpRestAPI.controller;

import com.tp.TpRestAPI.DTO.userDTO;
import com.tp.TpRestAPI.customException.ResourceNotFoundException;
import com.tp.TpRestAPI.model.User;
import com.tp.TpRestAPI.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api")
@CrossOrigin(origins = "*", maxAge = 3600)
public class UserController {

    private final UserService userservice;

    @Autowired
    public UserController(UserService userservice) {
        this.userservice=userservice;
    }

    @GetMapping("/{id}")
    public ResponseEntity<userDTO> get(@PathVariable int id) {
        userDTO user = userDTO.convertUserToUserDTO(userservice.get(id).orElseThrow(()->
                new ResourceNotFoundException("no User with id: "+id+" was found")));

        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @PostMapping("/")
    public ResponseEntity<List<User>> add (@RequestBody User user) {
        List<User> users = userservice.create(user).orElseThrow(()->
                new ResourceNotFoundException("user with id: "+user.getId()+" already exists"));
        return new ResponseEntity<>(users, HttpStatus.CREATED);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<List<User>> update(@PathVariable int id ,@RequestBody User changes) {
        List<User> users = userservice.update(id,changes).orElseThrow(()->
                new ResourceNotFoundException("user with id: "+id+" do not exist"));;
        return new ResponseEntity<>(users,HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable int id) {
        return new ResponseEntity<>(userservice.delete(id),HttpStatus.OK);
    }

}
