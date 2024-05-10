package com.ebs.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.ebs.entity.Venue;

public interface VenueRepository extends JpaRepository<Venue, Integer> {

	@Query("select id from Venue order by id asc")
	public List<Integer> fetchVenueIds();

	@Query("select name from Venue order by name asc")
	public List<String> fetchVenueNames();

	@Query("select location from Venue order by location asc")
	public List<String> fetchVenueLocation();

	@Query("select seatCapacity from Venue order by seatCapacity asc")
	public List<Integer> fetchVenueSeatCapacity();
}
