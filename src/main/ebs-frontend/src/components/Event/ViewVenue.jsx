import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EventService from "../Service/EventService";

const ViewVenue = () => {
  const { id } = useParams();

  const [venue, setVenue] = useState({
    name: "",
    location: "",
    seatCapacity: "",
    type: "",
  });

  useEffect(() => {
    loadVenue();
  });
 
  const loadVenue = async () => {
    console.log(id);
    await EventService.Viewvenue(id).then((response) => {
      setVenue(response.data);
    });
  };

  return (
    <section className="shadow" style={{ backgroundColor: "whitesmoke" }}>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-3">
            <div className="card mb-4">
              <div className="card-body text-center">
                <img
                  src="https://th.bing.com/th/id/OIP.BztkZlufUbCTosYAVySnOgHaE8?rs=1&pid=ImgDetMain"
                  alt="avatar"
                  className="rounded-circle img-fluid"
                  style={{ width: 150 }}
                />
                <h5 className="my-3">{`${venue.id} ${venue.name}`}</h5>
                <div className="d-flex justify-content-center mb-2">
                
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-9">
            <div className="card mb-4">
              <div className="card-body">
                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Venue Name</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{venue.name}</p>
                  </div>
                </div>

                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Location</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{venue.location}</p>
                  </div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Seat Availability</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{venue.seatCapacity}</p>
                  </div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Type</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{venue.type}</p>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewVenue;
