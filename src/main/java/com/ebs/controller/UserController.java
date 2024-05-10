package com.ebs.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ebs.entity.User;
import com.ebs.repository.UserRepository;

@RestController
@CrossOrigin("http://localhost:3000/")
public class UserController {

	UserRepository repo;

	public UserController(UserRepository repo) {
		super();
		this.repo = repo;
	}

	@PostMapping("/AddUser")
	public String addUser(@RequestBody User user) {
		String msg = "";
		try {
			repo.save(user);
			msg = "User Object Saved";
		} catch (Exception e) {
			msg = "User Object Not Saved";
		}
		return msg;
	}

	@PutMapping("/UpdateUser")
	public String updateUser(@RequestBody User user) {
		String msg = "";
		try {
			repo.save(user);
			msg = "User Object Updated";
		} catch (Exception e) {
			msg = "User Object Not Updated";
		}
		return msg;
	}

	@GetMapping("/GetUser/{userId}")
	public Optional<User> performFind(@PathVariable("userId") int userId) {
		return repo.findById(userId);

	}

	@GetMapping("/GetAllUser")
	List<User> getAllUser() {
		return repo.findAll();
	}

	@GetMapping("/GetUserIds")
	public List<Integer> getUserIds() {
		return repo.fetchUserIds();
	}
}
