import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Search from "../common/Search";
import EventService from "../Service/EventService";

const VenueDetails = () => {
  const [venue, setVenue] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadVenue();
  }, []);

  const loadVenue = async () => {
    await EventService.ViewAllvenue().then((response) => {
      setVenue(response.data);
    });
  };

  

  return (
    <section>
      <center>
        <h3><b>Available Venue Details</b></h3>
      </center>
      <div style={{ position: "fixed", bottom: 430, width: "100% " }}>
        <Search search={search} setSearch={setSearch} />
      </div>
     <br/>
     <br/>
      <br />
      <table className="table table-bordered table-secondary table-striped shadow ">
        <thead>
          <tr className="text-center">
            <th >Venue Id</th>
            <th >Venue Name</th>
            <th >Location</th>
            <th >Seat Availability</th>
            <th >Type</th>
            <th colSpan="3">Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {venue

            .filter((st) => st.name.toLowerCase().includes(search))
            .map((venue) => (
              <tr>
                <td>{venue.id}</td>
                <td>{venue.name}</td>
                <td>{venue.location}</td>
                <td>{venue.seatCapacity}</td>
                <td>{venue.type}</td>
                 <div>
                <td className="mx-2">
                  <Link
                  to={`/add-booking/${venue.id}`}
                    className="btn btn-warning">
                    Book Now
                  </Link>
                </td></div>
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  );
};

export default VenueDetails;
