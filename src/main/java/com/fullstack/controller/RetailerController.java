package com.fullstack.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.fullstack.model.Retailer;
import com.fullstack.repository.RetailerRepository;

@RestController
@CrossOrigin("*")

public class RetailerController {

	@Autowired
	RetailerRepository retailrepo;

	@PostMapping("/insertRetailer")
	public String insertRetailer(@RequestBody Retailer newadmin) {
		String Msg = "";
		try {
			retailrepo.save(newadmin);
			Msg = "Retailer Record saved";
		} catch (Exception e) {
			Msg = "Retailer Record Not Saved";
		}
		return Msg;

	}

	@GetMapping("/getAllRetailer")
	public List<Retailer> getAllDept() {
		return retailrepo.findAll();

	}
	@GetMapping("/AutopopRetIdList")
	public List<Integer> doAutoPop() {
		return retailrepo.getIdList();
	}
	
	@DeleteMapping("/deleteRetailer/{id}")
	public String deleteadmin(@PathVariable Integer id) {
		String msg = " ";
		try {
			retailrepo.deleteById(id);
			msg = "Retailer Details Deleted Successfully";
		} catch (Exception e) {
			msg = "Retailer Details not found";
		}
		return msg;


}
}
