package com.ebs.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "tbl_venue")
public class Venue {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String name;
	private String location;
	private int seatCapacity;
	private String type;

	public Venue() {
		super();
	}

	public Venue(int id, String name, String location, int seatCapacity, String type) {
		super();
		this.id = id;
		this.name = name;
		this.location = location;
		this.seatCapacity = seatCapacity;
		this.type = type;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
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

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	@Override
	public String toString() {
		return "Venue [id=" + id + ", name=" + name + ", location=" + location + ", seatCapacity=" + seatCapacity
				+ ", type=" + type + "]";
	}

}
