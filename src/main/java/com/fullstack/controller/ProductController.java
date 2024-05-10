package com.fullstack.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.fullstack.model.Product;

import com.fullstack.repository.ProductRepository;

@RestController
@CrossOrigin("*")
public class ProductController {

	@Autowired
	private ProductRepository prodrepo;

	@PostMapping("/insertProduct")
	public String insertProduct(@RequestBody Product newfood) {
		String Msg = "";
		try {
			prodrepo.save(newfood);
			Msg = "Product Record saved";
		} catch (Exception e) {
			System.out.println(e);
			Msg = "Product Record Not Saved";
		}
		return Msg;
	}

	@PutMapping("/updateProduct/{id}")
	public String updateProd(@RequestBody Product newproduct, @PathVariable Integer id) {
		String Msg = "";
		try {
			if (prodrepo.existsById(id)) {
				newproduct.setProdId(id);
				prodrepo.save(newproduct);
				Msg = "Product updated Successfully";
			}

		} catch (Exception e) {
			System.out.println(e);
			Msg = "Product updation Failed";
		}

		return Msg;
	}

	@GetMapping("/getAllProduct")
	public List<Product> getAllProd() {
		return prodrepo.findAll();

	}
	@DeleteMapping("/deleteProduct/{id}")
	public String deleteadmin(@PathVariable Integer id) {
		String msg = " ";
		try {
			prodrepo.deleteById(id);
			msg = "Product Details Deleted Successfully";
		} catch (Exception e) {
			msg = "Product Details not found";
		}
		return msg;

	}
	

	

	
	@GetMapping("/AutopopProdIdList")
	public List<Integer> doAutoPop() {
		return prodrepo.getIdList();
	}
	
	@GetMapping("/AutopopProdNameList")
	public List<String> doAutoPop1() {
		return prodrepo.getNameList();
	}
	
	
	
	
}
