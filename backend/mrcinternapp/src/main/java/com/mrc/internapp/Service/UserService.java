package com.mrc.internapp.Service;

import com.mrc.internapp.Entity.UserModel;

import java.util.List;

public interface UserService {
    List<UserModel> all();
    UserModel add(UserModel userModel);
    UserModel getUserById(Long userId);

    void update(Long userId, UserModel userModel);

    void delete(Long userId);
}
