package br.com.safehome.safehome.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.safehome.safehome.models.Morador;
import br.com.safehome.safehome.repositories.Repository;

@RestController
@CrossOrigin(origins = "*")
public class MoradorController {

    @Autowired
    private Repository repository;

    @PostMapping("/cadastrar")
    public Morador cadastrar(@RequestBody Morador morador){
        return repository.save(morador);
    }
    
    @GetMapping("/")
    public Iterable<Morador> selecionar(){
        return repository.findAll();
    }

    @PutMapping("/editar")
    public Morador editar(@RequestBody Morador morador){
        return repository.save(morador);
    }

    @DeleteMapping("/{id}")
    public void remover(@PathVariable long id){
        repository.deleteById(id);
    }
}
