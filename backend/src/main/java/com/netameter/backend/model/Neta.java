package com.netameter.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity // 1. Ye batata hai ki ye Database ki Table hai
@Table(name = "netas") // 2. Table ka naam 'netas' hoga
public class Neta {
    
    @Id // 3. Ye Primary Key hai
    @GeneratedValue(strategy = GenerationType.IDENTITY) // 4. ID auto-increment hogi (1, 2, 3...)
    private int id;
    
    private String name;
    private String party;
    private String state;
    private int criminalCases;
    private double wealth2019;
    private double wealth2024;
    
    private double voterGrowth;

    // --- ZAROORI: Default Empty Constructor (JPA ke liye) ---
    public Neta() {
    }

    // Constructor (Humare use ke liye)
    public Neta(String name, String party, String state, int criminalCases, double wealth2019, double wealth2024, double voterGrowth) {
        this.name = name;
        this.party = party;
        this.state = state;
        this.criminalCases = criminalCases;
        this.wealth2019 = wealth2019;
        this.wealth2024 = wealth2024;
        this.voterGrowth = voterGrowth;
    }

    // Getters
    public int getId() { return id; }
    public String getName() { return name; }
    public String getParty() { return party; }
    public String getState() { return state; }
    public int getCriminalCases() { return criminalCases; }
    public double getWealth2019() { return wealth2019; }
    public double getWealth2024() { return wealth2024; }
    public double getVoterGrowth() { return voterGrowth; }
}
