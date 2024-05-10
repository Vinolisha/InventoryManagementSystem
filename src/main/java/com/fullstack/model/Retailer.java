package com.fullstack.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Retailer_tbl")
public class Retailer {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int retId;
	private String retName;
	private int retPhoneNo;
	private String retAddress;

	@JsonManagedReference
	@JsonBackReference
	@JsonIgnore
	@OneToMany(mappedBy = "retailer")
	private List<Request> requests;
}
