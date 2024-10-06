package com.uclafood.uclafood.service;

import com.uclafood.uclafood.model.Upvote;
import com.uclafood.uclafood.repository.UpvotesRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UpvotesService {
    @Autowired
    private UpvotesRepository upvotesRepository;

    public void createUpvote(Long userid, Long reviewid) throws Exception {
      Upvote upvote = new Upvote();
      upvote.setUserID(userid);
      upvote.setReviewID(reviewid);
      upvotesRepository.save(upvote);
    }

    public void deleteUpvote(Long reviewid) {
      upvotesRepository.deleteByReviewId(reviewid);
    }

    public Boolean checkIfUserUpvoted(Long userid, Long reviewid) {
      Upvote upvote = new Upvote();
      upvote = upvotesRepository.findByReviewId(reviewid);
      Long loggedUserId = upvote.getUserID();

      if (loggedUserId == userid) {
        return true;
      }

      return false;
    }
}
