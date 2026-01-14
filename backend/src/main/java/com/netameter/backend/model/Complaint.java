package com.netameter.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "complaints")
public class Complaint {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String netaName; // Kis neta ki shikayat hai
    private String description; // Kya gadbad hai

    public Complaint() {}

    public Complaint(String netaName, String description) {
        this.netaName = netaName;
        this.description = description;
    }

    // Getters
    public String getNetaName() { return netaName; }
    public String getDescription() { return description; }
}
