package com.csiramone.desvenda.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.csiramone.desvenda.dto.SellerDTO;
import com.csiramone.desvenda.entities.Seller;
import com.csiramone.desvenda.repositories.SellerRepository;

@Service
public class SellerService {
	
	
	@Autowired
	private SellerRepository repository;
	
	public List<SellerDTO> findAll(){
		List<Seller> result = repository.findAll();
        return result.stream().map(x -> new SellerDTO(x)).collect(Collectors.toList());
	}

}
