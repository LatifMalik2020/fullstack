package com.springBoot.demo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.springBoot.demo.enity.userEntity;


@Repository
public interface   UserDao extends CrudRepository<userEntity, String> {

	@Query(value = "SELECT * FROM USER_INFO",nativeQuery = true)
			List<userEntity> findAllUserDetails();
			
	@Query(value = "SELECT * FROM USER_INFO where name=:nameString",nativeQuery = true)
			List<userEntity>findAllspecificDetails(@Param("nameString") String nameString);
		
}
