package br.com.safehome.safehome.repositories;

import org.springframework.data.repository.CrudRepository;
import br.com.safehome.safehome.models.Visitante;

public interface RepositoryVisitante extends CrudRepository <Visitante, Long>{
    
}
