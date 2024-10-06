package com.uclafood.uclafood.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.uclafood.uclafood.model.Downvote;

public interface DownvotesRepository extends JpaRepository<Downvote, Long> {

}