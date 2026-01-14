package com.netameter.backend;

import com.netameter.backend.model.Neta;
import com.netameter.backend.repository.NetaRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

    // Ye code tab chalega jab app start hoga
	@Bean
	CommandLineRunner initDatabase(NetaRepository repo) {
		return args -> {
            // Agar table khali hai, tabhi data bharna
            if(repo.count() == 0) {
                repo.save(new Neta("Ramesh Bahubali", "Party A", "UP", 12, 2.5, 85.0, 12.0));
                repo.save(new Neta("Suresh Sewak", "Party B", "Bihar", 0, 5.0, 6.2, 45.0));
                repo.save(new Neta("Gajodhar Thekedar", "Party C", "Maharashtra", 4, 10.0, 150.0, 20.0));
                System.out.println("✅ Database mein Neta load ho gaye!");
            }
		};
	}
}
