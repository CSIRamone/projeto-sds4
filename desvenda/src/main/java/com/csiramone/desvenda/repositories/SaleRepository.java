package com.csiramone.desvenda.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.csiramone.desvenda.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long>{
	

}
