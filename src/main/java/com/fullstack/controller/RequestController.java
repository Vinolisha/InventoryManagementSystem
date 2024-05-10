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
import com.fullstack.model.Request;
import com.fullstack.repository.RequestRepository;

@RestController
@CrossOrigin("*")
public class RequestController {
	@Autowired
	RequestRepository reqrepo;

	@PostMapping("/insertRequest")
	public String insertRest(@RequestBody Request newrest) {
		String Msg = "";
		try {
			reqrepo.save(newrest);
			Msg = "Request Record saved";
		} catch (Exception e) {
			e.printStackTrace();
			Msg = "Reequest Record Not Saved";
		}
		return Msg;
	}

	@GetMapping("/getAllRequest")
	public List<Request> getAllRequests() {
		return reqrepo.findAll();

	}
	
	@DeleteMapping("/deleteRequest/{id}")
	public String deleteRequest(@PathVariable Integer id) {
		String msg = " ";
		try {
			reqrepo.deleteById(id);
			msg = "Request Details Deleted Successfully";
		} catch (Exception e) {
			msg = "Request Details not found";
		}
		return msg;


}
}
