package com.fullstack.model;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Request_tbl")
public class Request {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int reqId;
	private String reqQuantity;

	@ManyToOne
	@JoinColumn(name = "prodName")
	private Product product;

	
	@ManyToOne
	@JoinColumn(name = "retId")
	private Retailer retailer;
}
