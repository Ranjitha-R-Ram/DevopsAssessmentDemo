import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import EventService from "../Service/EventService";

const EditVenue = () => {
  let navigate = useNavigate();

  const { id } = useParams();

  const [venue, setVenue] = useState({
    name: "",
    location: "",
    seatCapacity: "",
    type: ""
  });
  const { name, location, seatCapacity, type } = venue;

  useEffect(() => {
    loadVenue();
  });
 
  const loadVenue = async () => {
    await EventService.Viewvenue(id).then((response) => {
      console.log(venue);
      setVenue(response.data);
    });
  };

  const handleInputChange = (e) => {
    setVenue({ ...venue, [e.target.name]: e.target.value });
  };

  const EditVenue = async (e) => {
    e.preventDefault();
    console.log(venue);
    await EventService.Updatevenue(venue).then((response) => {
      setVenue(response.data);
      navigate("/viewall-venue");
      alert("Venue Object Updated!..");
    });
  };
  return (
    <div className="col-sm-5 py-2 px-5 offset-4 shadow">
      <center><h2 className="mt-3">Update Venue Details</h2></center>
      <form onSubmit={(e) => EditVenue(e)}>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="name">
        Venue Name
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="name"
            id="name"
            required
            value={name}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="location">
            Location
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="location"
            id="location"
            required
            value={location}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="seatCapacity">
          Seat Availability
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="seatCapacity"
            id="seatCapacity"
            required
            value={seatCapacity}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="type">
            Type
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="type"
            id="type"
            required
            value={type}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="row mb-5">
          <div className="col-sm-3">
            <button type="submit" className="btn btn-outline-success btn-mx">
              Update
            </button>
          </div>

          <div className="col-sm-4">
            <Link
              to={"/viewall-venue"}
              type="submit"
              className="btn btn-outline-warning btn-mx">
              Cancel
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditVenue;
