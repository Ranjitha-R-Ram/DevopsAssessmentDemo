package com.ebs.entity;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="tbl_booking")
public class Booking {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int bid;
	private String location;
	private int seatCapacity;

	@OneToMany(cascade = CascadeType.ALL)
	private List<User> user;

	@OneToOne
	@JoinColumn
	private Venue venue;

	public Booking() {
		super();

	}

	public Booking(int bid, String location, int seatCapacity, List<User> user, Venue venue) {
		super();
		this.bid = bid;
		this.location = location;
		this.seatCapacity = seatCapacity;
		this.user = user;
		this.venue = venue;
	}

	public int getBid() {
		return bid;
	}

	public void setBid(int bid) {
		this.bid = bid;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public int getSeatCapacity() {
		return seatCapacity;
	}

	public void setSeatCapacity(int seatCapacity) {
		this.seatCapacity = seatCapacity;
	}

	public List<User> getUser() {
		return user;
	}

	public void setUser(List<User> user) {
		this.user = user;
	}

	public Venue getVenue() {
		return venue;
	}

	public void setVenue(Venue venue) {
		this.venue = venue;
	}

	@Override
	public String toString() {
		return "Booking [bid=" + bid + ", location=" + location + ", seatCapacity=" + seatCapacity + ", user=" + user
				+ ", venue=" + venue + "]";
	}

}
