package com.ebs.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ebs.entity.Booking;
import com.ebs.repository.BookingRepository;

@RestController
@CrossOrigin("http://localhost:3000/")
public class BookingController {

	@Autowired
	BookingRepository repo;

	@PostMapping("/AddBooking")
	public String addBooking(@RequestBody Booking booking) {
		String msg = "";
		try {
			repo.save(booking);
			msg = "Booking Object Saved";
		} catch (Exception e) {
			msg = "Booking Object Not Saved";
		}
		return msg;
	}

	@DeleteMapping("/DeleteBooking/{bid}")
	public String deleteBooking(@PathVariable("bid") int bid) {
		String msg = "";
		try {
			repo.deleteById(bid);
			msg = "Booking Object Deleted";
		} catch (Exception e) {
			msg = "Booking Object Not deleted";
		}
		return msg;
	}

	@PutMapping("/UpdateBooking")
	public String updateBooking(@RequestBody Booking booking) {
		String msg = "";
		try {
			repo.save(booking);
			msg = "Booking Object Updated";
		} catch (Exception e) {
			msg = "Booking Object Not Updated";
		}
		return msg;
	}

	@GetMapping("/GetBooking/{bid}")
	public Optional<Booking> performFind(@PathVariable("bid") int bid) {
		return repo.findById(bid);

	}

	@GetMapping("/GetAllBooking")
	public List<Booking> getAllBooking() {
		return repo.findAll();
	}
}
