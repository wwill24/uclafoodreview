package com.uclafood.uclafood.service;

import com.uclafood.uclafood.model.Upvote;
import com.uclafood.uclafood.repository.UpvotesRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UpvotesService {
    @Autowired
    private UpvotesRepository UpvotesRepository;

    public Upvote createUpvote(Upvote upvote) throws Exception {
      return UpvotesRepository.save(upvote);
    }
}
