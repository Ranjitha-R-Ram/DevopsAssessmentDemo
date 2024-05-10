import React, { useEffect, useState } from "react";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Search from "../common/Search";
import EventService from "../Service/EventService";

const VenueViewAll = () => {
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

  const handleDelete = async (id) => {
    console.log(id);
    await EventService.Deletevenue(id).then((response) => {
      setVenue(response.data);
      alert("Deleted Successfully");
      loadVenue();
    });
  };

  return (
    <section>
      <center>
        <h3><b>View All Venue Details</b></h3>
      </center>
      <div className="d-flex justify-content-between" >
        <Search search={search} setSearch={setSearch} name="search" />
        <Link className="btn btn-success h-25" to={"/add-venue"}>
          Add Venue
        </Link>
      </div>
      <br />
      <table className="table table-bordered table-secondary table-striped shadow ">
        <thead>
          <tr className="text-center">
            <th>Venue Id</th>
            <th>Venue Name</th>
            <th>Location</th>
            <th>Seat Availability</th>
            <th>Type</th>
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
                <td className="mx-2">
                  <Link
                    to={`/view-venue/${venue.id}`}
                    className="btn btn-info">
                    <FaEye />
                    View
                  </Link>
                </td>
                <td className="mx-2">
                  <Link
                    to={`/edit-venue/${venue.id}`}
                    className="btn btn-warning">
                    <FaEdit />
                    Update
                  </Link>
                </td>
                <td className="mx-2">
                  <button
                    className="btn btn-danger"
                    onClick={(e) => handleDelete(venue.id)}>
                    <FaTrashAlt />
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  );
};

export default VenueViewAll;
