package tn.essat.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import tn.essat.dao.IDaoPFE;
import tn.essat.dao.IDaoTypePFE;

import tn.essat.model.PFE;
import tn.essat.model.TypePFE;



@CrossOrigin("*")
@RestController
@RequestMapping(path = "/project")
public class RestApp {
	@Autowired
	IDaoPFE daopfe;
	@Autowired
	IDaoTypePFE daotype;
	
	
	@GetMapping("/liste-pfe")
	public List<PFE> get1(){
		return daopfe.findAll();
	}
	@GetMapping("/type-pfe")
	public List<TypePFE> get2(){
		List<TypePFE> listp =  daotype.findAll();
		for (TypePFE typePfe : listp) {
			typePfe.setListP(typePfe.getListP());
			
		}
		return listp;
	}
	@DeleteMapping("/delete-pfe/{id}")
	public void get5(@PathVariable("id") int id){
		daopfe.deleteById(id);	
	}
	@GetMapping("/type-pfe/{id}")
	public List<PFE> get2(@PathVariable("id") int id){
		return daopfe.getAllPfeByTypePfe(id);		
	}
	@PostMapping("/add-pfe")
	public void addM(@RequestBody PFE m) {
		
		daopfe.save(m);
	}
	
	
}
