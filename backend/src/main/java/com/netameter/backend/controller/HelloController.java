package com.netameter.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
	
	@GetMapping("/")
	public String home() {
		return "Mubarak ho! Neta Meter ka Backend start ho gaya hai!";
	}
}
