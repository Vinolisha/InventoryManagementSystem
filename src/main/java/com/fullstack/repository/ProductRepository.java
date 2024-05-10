package com.fullstack.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.fullstack.model.Product;

public interface ProductRepository extends JpaRepository<Product, Integer> {

	@Query("select prodId from Product")
	public List<Integer> getIdList();

	@Query("select prodName from Product")
	public List<String> getNameList();

	@Query("select sellingPrice from Product")
	public List<String> getPriceList();

	@Query("select purchaseRate from Product")
	public List<String> getPurchaseRatesList();

	@Query("select availStock from Product")
	public List<String> getAvailProductList();

}
