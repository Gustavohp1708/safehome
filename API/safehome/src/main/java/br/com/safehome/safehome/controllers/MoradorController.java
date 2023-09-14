package br.com.safehome.safehome.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.safehome.safehome.models.Morador;
import br.com.safehome.safehome.repositories.Repository;

@RestController
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
}
