package com.fullstack.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.fullstack.model.Retailer;

public interface RetailerRepository extends JpaRepository<Retailer, Integer> {

	@Query("select retId from Retailer")
	public List<Integer> getIdList();

	@Query("select retName from Retailer")
	public List<Integer> getNameList();

	@Query("select retAddress from Retailer")
	public List<String> getAddressList();

}
