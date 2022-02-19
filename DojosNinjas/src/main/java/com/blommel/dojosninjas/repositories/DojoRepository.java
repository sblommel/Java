package com.blommel.dojosninjas.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.blommel.dojosninjas.models.Dojo;

@Repository
public interface DojoRepository extends CrudRepository<Dojo, Long> {

}
