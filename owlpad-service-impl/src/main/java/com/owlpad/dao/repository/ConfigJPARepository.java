package com.owlpad.dao.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.owlpad.service.model.Configuration;

public interface ConfigJPARepository extends JpaRepository<Configuration, Long>{

}
