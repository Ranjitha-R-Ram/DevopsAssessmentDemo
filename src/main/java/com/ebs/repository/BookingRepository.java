package com.ebs.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ebs.entity.Booking;

public interface BookingRepository extends JpaRepository<Booking, Integer> {

}
