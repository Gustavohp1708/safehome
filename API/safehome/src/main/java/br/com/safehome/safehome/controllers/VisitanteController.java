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

import br.com.safehome.safehome.models.Visitante;
import br.com.safehome.safehome.repositories.RepositoryVisitante;

@RestController
@CrossOrigin(origins = "*")
public class VisitanteController {

    @Autowired
    private RepositoryVisitante repository;

    @PostMapping("/cadastrarvisitante")
    public Visitante cadastrar(@RequestBody Visitante visitante){
        return repository.save(visitante);
    }
    
    @GetMapping("/buscarvisitante")
    public Iterable<Visitante> selecionar(){
        return repository.findAll();
    }

    @PutMapping("/editarvisitante")
    public Visitante editar(@RequestBody Visitante visitante){
        return repository.save(visitante);
    }

    @DeleteMapping("/deletarvisitante{id}")
    public void remover(@PathVariable long id){
        repository.deleteById(id);
    }
}
