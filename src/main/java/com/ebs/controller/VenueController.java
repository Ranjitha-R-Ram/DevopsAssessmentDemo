package com.ebs.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ebs.entity.Venue;
import com.ebs.repository.VenueRepository;

@RestController
@CrossOrigin("http://localhost:3000/")
public class VenueController {

	VenueRepository repo;

	public VenueController(VenueRepository repo) {
		super();
		this.repo = repo;
	}

	@PostMapping("/AddVenue")
	public String addVenue(@RequestBody Venue venue) {
		String msg = "";
		try {
			repo.save(venue);
			msg = "Venue Object Saved";
		} catch (Exception e) {
			msg = "Venue Object Not Saved";
		}
		return msg;
	}

	@DeleteMapping("/DeleteVenue/{id}")
	public String deleteVenue(@PathVariable("id") int id) {
		String msg = "";
		try {
			repo.deleteById(id);
			msg = "Venue Object Deleted";
		} catch (Exception e) {
			msg = "Venue Object Not deleted";
		}
		return msg;
	}

	@PutMapping("/UpdateVenue")
	public String updateVenue(@RequestBody Venue venue) {
		String msg = "";
		try {
			repo.save(venue);
			msg = "Venue Object Updated";
		} catch (Exception e) {
			msg = "Venue Object Not Updated";
		}
		return msg;
	}

	@GetMapping("/GetVenue/{id}")
	public Optional<Venue> performFind(@PathVariable("id") int id) {
		return repo.findById(id);

	}

	@GetMapping("/GetAllVenue")
	List<Venue> getAllVenue() {
		return repo.findAll();
	}

	@GetMapping("/GetVenueIds")
	public List<Integer> getVenueIds() {
		return repo.fetchVenueIds();
	}

}
