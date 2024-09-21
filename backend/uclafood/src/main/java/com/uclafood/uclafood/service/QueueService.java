package com.uclafood.uclafood.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.uclafood.uclafood.repository.QueueRepository;
import com.uclafood.uclafood.model.Queue;

@Service
public class QueueService {
    
    @Autowired
    private QueueRepository queueRepository;

    public Queue saveQueue(Queue queue) {
        return queueRepository.save(queue);
    }

    public Boolean checkEmail(Map<String, Object> payload) {
        String email = payload.get("email").toString();
        return queueRepository.existsByEmail(email);
    }

    public Boolean checkPhone(Map<String, Object> payload) {
        String phone = payload.get("phone").toString();
        return queueRepository.existsByPhone(phone);
    }

    public Boolean checkUsername(Map<String, Object> payload) {
        String username = payload.get("username").toString();
        return queueRepository.existsByUsername(username);
    }
}
