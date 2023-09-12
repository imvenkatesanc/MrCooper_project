package com.mrc.internapp.Repo;

import com.mrc.internapp.Entity.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface UserRepository extends JpaRepository<UserModel, Long> {

}

