package com.blommel.dojosninjas.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.blommel.dojosninjas.models.Dojo;
import com.blommel.dojosninjas.models.Ninja;
import com.blommel.dojosninjas.repositories.DojoRepository;
import com.blommel.dojosninjas.repositories.NinjaRepository;

@Service
public class AppService {
	
	private final DojoRepository dojoRepo;
	private final NinjaRepository ninjaRepo;
	public AppService(DojoRepository dojoRepo, NinjaRepository ninjaRepo) {
		
		this.dojoRepo = dojoRepo;
		this.ninjaRepo = ninjaRepo;
	}
	
	//create a Dojo
	public Dojo newDojo(Dojo d) {
		return this.dojoRepo.save(d);
	}

	
	//get all Dojos
	public List<Dojo>getAllDojos(){
		return (List<Dojo>)this.dojoRepo.findAll();
	}
	
	
	//create a Ninja
	public Ninja newNinja(Ninja n) {
		return this.ninjaRepo.save(n);
	}

	//get one Dojo by id
	public Dojo getOneDojo(Long id) {
		return this.dojoRepo.findById(id).orElse(null);
	}
	
}
