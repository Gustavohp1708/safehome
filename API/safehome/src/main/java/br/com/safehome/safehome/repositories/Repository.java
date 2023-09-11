package br.com.safehome.safehome.repositories;

import org.springframework.data.repository.CrudRepository;
import br.com.safehome.safehome.models.Morador;

public interface Repository extends CrudRepository <Morador, Long>{
    
}
