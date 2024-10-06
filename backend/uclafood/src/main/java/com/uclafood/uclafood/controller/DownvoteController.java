package com.uclafood.uclafood.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.uclafood.uclafood.service.DownvotesService;

import jakarta.transaction.Transactional;

@RestController
@CrossOrigin
@RequestMapping("/downvotes")
public class DownvoteController {
  
  @Autowired
  private DownvotesService downvotesService;
  
  @PostMapping("/{userid}/{reviewid}")
  public void addDownvote(@PathVariable Long userid, @PathVariable Long reviewid) throws Exception{
    downvotesService.createDownvote(userid, reviewid);
  }

  @GetMapping("/{userid}/{reviewid}")
  public Boolean checkIfUserDownvoted(@PathVariable Long userid, @PathVariable Long reviewid) {
    return downvotesService.checkIfUserDownvoted(userid, reviewid);
  }

  @Transactional
  @DeleteMapping("/{reviewid}")
  public void deleteDownvote(@PathVariable Long reviewid) {
    downvotesService.deleteDownvote(reviewid);
  }
}
