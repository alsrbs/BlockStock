package com.olock.blockstock.gateway.domain.auth.presentation;

import com.olock.blockstock.gateway.domain.auth.dto.request.AuthLoginRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.reactive.function.server.EntityResponse;
import reactor.core.publisher.Mono;

import javax.swing.text.html.parser.Entity;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @PostMapping("/login")
    public ResponseEntity<Mono<AuthLoginRequest>> login(@RequestBody AuthLoginRequest authLoginRequest) {
        System.out.println(authLoginRequest.getEmail() + " " + authLoginRequest.getPassword());
        return EntityResponse.ok().build();
    }
}
