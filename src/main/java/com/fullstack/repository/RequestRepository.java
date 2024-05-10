package com.fullstack.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.fullstack.model.Request;

public interface RequestRepository extends JpaRepository<Request, Integer> {

	@Query("select reqId from Request")
	public List<Integer> getIdList();

	@Query("select reqQuantity from Request")
	public List<String> getQuantityList();

}
