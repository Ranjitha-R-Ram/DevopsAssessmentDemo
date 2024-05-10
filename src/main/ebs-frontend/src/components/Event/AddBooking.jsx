import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams} from "react-router-dom";
import EventService from "../Service/EventService";

const AddBooking = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [booking, setBooking] = useState({
    venue:{
      id: id
    },
    location: "",
    seatCapacity: "",
    type: "",
    user:[{
      userId:id
    }]
  });
  
  const [show, setShow] = useState([]); 


  const loadDetails = async () => { 
    await EventService.GetVenueIds() 
      .then((res) => {
        console.log(res.data);
        setShow(res.data)}) 
      .catch((err) => console.log(err)); 
  }; 

  useEffect(() => { 
    loadDetails(); 
    loadVenue();
  }); 
 
   const loadVenue = async () => {
    console.log(id)
    await EventService.Viewvenue(id).then((response) => {
      console.log(response.data);
      setBooking(response.data);
    }).catch((error) => {
      console.log(error);
    });
  };

  const handleInputChange = (e) => {
    if (e.target.name === "userId") { 

      setBooking({ ...booking, user: { userId: e.target.value } }); 

    } else if(e.target.name==="id"){
      setBooking({ ...booking,venue:{id: e.target.value}});
    }
    else {
    setBooking({ ...booking, [e.target.name]: e.target.value });
    }
  };

  const AddBooking = async (e) => {
    e.preventDefault();
    console.log(booking);
    await EventService.Addvenue(booking).then((response) => {
      setBooking(response.data);
    
      alert("Booked Successfully!!!");
      navigate("/");
    });
  };
  return (
    <div className="col-sm-5 py-2 px-5 offset-4 shadow">
      <center><h2 className="mt-3">Book Your Event Now !!</h2></center>
      <form onSubmit={(e) => AddBooking(e)}>

      <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="id">
        Venue Id
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="id"
            id="id"
            required
            value={booking.id}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
{/* 
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
            value={booking.name}
            onChange={(e) => handleInputChange(e)}
          />
        </div> */}

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
            value={booking.location}
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
            value={booking.seatCapacity}
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
            value={booking.type}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="userId">
            User Id
          </label>
          <select
            className="form-control col-sm-6"
            type="text"
            name="userId"
            id="userId"
            required
            // value={booking.user.userId}
            onChange={(e) => handleInputChange(e)}>
            {show.map((userId) => (
              <option key={userId}>{userId}</option>
            ))}
          </select>
        </div>

        <div className="row mb-5">
          <div className="col-sm-3">
            <button type="submit" name="save" className="btn btn-outline-success btn-mx">
              Book 
            </button>
          </div>

          <div className="col-sm-4">
            <Link
              to={"/"}
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

export default AddBooking;
