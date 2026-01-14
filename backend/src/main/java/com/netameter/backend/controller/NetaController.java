package com.netameter.backend.controller;

import com.netameter.backend.model.Complaint;
import com.netameter.backend.model.Neta;
import com.netameter.backend.repository.ComplaintRepository;
import com.netameter.backend.repository.NetaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "https://neta-meter-backend-api.onrender.com")
public class NetaController {

    @Autowired // Repository ko inject kiya
    private NetaRepository netaRepository;
    @Autowired
    private ComplaintRepository complaintRepository;

    @GetMapping("/netas")
    public List<Neta> getAllNetas() {
        // Ab ye Database se data layega!
        return netaRepository.findAll();
    }
    
    // Data save karne ke liye (Test karne ke liye)
    @PostMapping("/add")
    public Neta addNeta(@RequestBody Neta neta) {
        return netaRepository.save(neta);
    }
    
    @PostMapping("/report")
    public Complaint submitComplaint(@RequestBody Complaint complaint) {
    	System.out.println("New Complaint :"+complaint.getDescription());
    	return complaintRepository.save(complaint);
    }
    
    @GetMapping("/complaint")
    public List<Complaint> getAllComplaints(){
    	return complaintRepository.findAll();
    }
}
