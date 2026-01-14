package com.netameter.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.netameter.backend.model.Neta;

@Repository
public interface NetaRepository extends JpaRepository<Neta, Integer> {

}
