package gic.i4gic.tp.app;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AllTasksController {

	@GetMapping("/")
	public String task1() {

		return """
				<center>
				<a href="http://localhost:8080/login"><h1> Login </h1><a>
				<a href="http://localhost:8080/homepage?username=Gest"><h1> Task5 </h1><a>
				<br>
				<h3>Username: toto and Password: titi</h3>
				<center>
				""";
	}
}



@Controller
class Controller01 {
	@GetMapping("/login")
	public String task2() {

		return "task02";
	}
}



@Controller
@RequestMapping(path="/homepage")
class Task_05Controller{
	
	@RequestMapping(method=RequestMethod.GET)
	public String task4(Model model,@RequestParam("username") String username) {
		model.addAttribute("name_user",username);
		return "task05";
	}
}


