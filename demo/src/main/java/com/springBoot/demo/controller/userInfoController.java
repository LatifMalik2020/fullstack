package com.springBoot.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.springBoot.demo.dao.UserDao;
import com.springBoot.demo.enity.userEntity;

@RestController
@CrossOrigin
public class userInfoController {
	
	@Autowired
	public UserDao userDao;
	
	
	@GetMapping("/id")	
	public String testMethod() {
		System.out.println("api working!!!");
		return "successful!!!";
	}
	
	@GetMapping("/userDetails")
	public List<userEntity> userDetails() {
		List<userEntity> dataEntities = userDao.findAllUserDetails();
		return dataEntities;
	}

	@GetMapping("/specificUserDetails")
	public List <userEntity>specificUserDetails(@RequestParam("name") String name){
		
		List<userEntity>dataEntities = userDao.findAllspecificDetails(name);
		return dataEntities;
	}
}
