import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import EventService from "../Service/EventService";


const AddVenue = () => {
  let navigate = useNavigate();
  const [venue, setVenue] = useState({
    name: "",
    location: "",
    seatCapacity: "",
    type: ""
  });

  const { name, location, seatCapacity, type} = venue;

  const handleInputChange = (e) => {
    setVenue({ ...venue, [e.target.name]: e.target.value });
  };

  const saveVenue = async (e) => {
    e.preventDefault();
    console.log(venue);
    await EventService.Addvenue(venue).then((response) => {
      setVenue(response.data);
      alert("Venue Object Inserted Succesfully!..");
      navigate("/viewall-venue");
    });
  };
  return (
    <div className="col-sm-8 py-2 px-5 offset-2 shadow">
      <br />
      <form onSubmit={(e) => saveVenue(e)}>
        <center>
          <h3>Insert Venue Details</h3>
        </center>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="name">
            Venue Name
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="name"
            id="name"
            placeholder="Enter name"
            required
            value={name}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="input-group mb-5">
          <label className="input-group-text">
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
          <div className="col-sm-2">
            <button type="submit" name="Save" className="btn btn-outline-success btn-mx" data-testid="save-btn">
              Save
            </button>
          </div>

          <div className="col-sm-2" data-testid="cancel-btn">
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

export default AddVenue;