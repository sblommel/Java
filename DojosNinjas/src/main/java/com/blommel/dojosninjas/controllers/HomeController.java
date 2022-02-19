package com.blommel.dojosninjas.controllers;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.blommel.dojosninjas.models.Dojo;
import com.blommel.dojosninjas.models.Ninja;
import com.blommel.dojosninjas.services.AppService;

@Controller
public class HomeController {
	private final AppService appServ;
	
	public HomeController(AppService appServ) {
		this.appServ = appServ;
		
	}
	
	
	
	
	@RequestMapping("/dojos")
	public String home(Model model) {
		//when you need a form to show up send an empty object with view model
		
		model.addAttribute("dojo", new Dojo());
		
		return "dojo.jsp"; 
	}
	
	@PostMapping ("/dojos/new")
	public String newDojo(@Valid @ModelAttribute("dojo") Dojo dojo, BindingResult result) {
		if(result.hasErrors()) {
			return "dojo.jsp";
		}else {
			this.appServ.newDojo(dojo);
			//THIS REDIRECT MAY NEED TO CHANGE
			return "redirect:/dojos";
		}
		
	}
	
	@RequestMapping("/ninjas/new")
	public String newNinja(Model model) {
		
		model.addAttribute("ninja", new Ninja());
		
		model.addAttribute("allDojos", this.appServ.getAllDojos());
		
		return "ninja.jsp";
	}
	
	//create a ninja when submitting form
	@PostMapping("/ninjas/new")
	public String newNinja(@Valid @ModelAttribute("ninja") Ninja ninja, BindingResult result) {
		if(result.hasErrors()) {
			return "ninja.jsp";
		}else {
			this.appServ.newNinja(ninja);
			//THIS REDIRECT MAY NEED TO CHANGE
			return "redirect:/dojos";
		}
		
	}
	
	@RequestMapping("/dojos/{id}")
	public String showOneDojo(@PathVariable("id") Long id, Model model) {
		
		//get one Dojo by requesting from service using the id from path
		Dojo dojoToShow = this.appServ.getOneDojo(id);
		
		model.addAttribute("dojoToShow", dojoToShow);
		
		return "dojoNinja.jsp";
	}
	
	
	
}
	
	

