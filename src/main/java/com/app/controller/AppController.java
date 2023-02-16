package com.app.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AppController {

	
	@GetMapping("/app")
	public String method() {
		return "login";
	}
}
