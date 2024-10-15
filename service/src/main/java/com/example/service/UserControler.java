package com.example.service;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

@Controller
public class UserControler {

    private final String API_URL = "https://restapi.tu.ac.th/api/v1/auth/Ad/verify";
    private final String API_KEY = "";

    @PostMapping("/login")
    @ResponseBody
    public Map<String, Object> login(@RequestParam String username, @RequestParam String password) {
        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.set("Content-Type", "application/json");
        headers.set("Authorization", "Bearer " + API_KEY);

        Map<String, String> requestBody = new HashMap<>();
        requestBody.put("username", username);
        requestBody.put("password", password);

        HttpEntity<Map<String, String>> entity = new HttpEntity<>(requestBody, headers);

        Map<String, Object> result = new HashMap<>();
        try {
            ResponseEntity<Map> response = restTemplate.postForEntity(API_URL, entity, Map.class);
            if (response.getStatusCode().is2xxSuccessful() && response.getBody() != null) {
                result.put("message", "Login successful");
                result.put("username", username);
            } else {
                result.put("message", "Login failed. Please check your credentials.");
            }
        } catch (Exception e) {
            result.put("message", "An error occurred: " + e.getMessage());
        }

        return result;
    }
}
