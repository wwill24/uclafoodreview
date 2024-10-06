package com.uclafood.uclafood.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.uclafood.uclafood.model.Downvote;
import com.uclafood.uclafood.repository.DownvotesRepository;
import com.uclafood.uclafood.repository.UpvotesRepository;

@Service
public class DownvotesService {
    @Autowired
    private DownvotesRepository downvotesRepository;

    public void createDownvote(Long userid, Long reviewid) throws Exception {
      Downvote downvote = new Downvote();
      downvote.setUserID(userid);
      downvote.setReviewID(reviewid);
      downvotesRepository.save(downvote);
    }

    public void deleteDownvote(Long reviewid) {
      downvotesRepository.deleteByReviewid(reviewid);
    }

    public Boolean checkIfUserDownvoted(Long userid, Long reviewid) {
      Downvote upvote = new Downvote();
      upvote = downvotesRepository.findByReviewid(reviewid);
      Long loggedUserId = upvote.getUserID();

      if (loggedUserId == userid) {
        return true;
      }

      return false;
    }
}
