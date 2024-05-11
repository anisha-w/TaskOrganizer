package com.github.anishaw.taskorganizerapp.taskdetail;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class TaskDetailController {

	@Autowired
	TaskDetailService taskDetailService;

    @GetMapping("/hello") // rest endpoint
    public String hello() {
        return "Hello from Spring!";
    }

	@GetMapping("/connectTest")
	public String get() {
		return taskDetailService.connectionTest();
	}
}
