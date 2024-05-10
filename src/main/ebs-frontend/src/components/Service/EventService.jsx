import axios from "axios";
import { Component } from "react";

const AddVenue = "http://localhost:4589/AddVenue";
const UpdateVenue="http://localhost:4589/UpdateVenue";
const DeleteVenue="http://localhost:4589/DeleteVenue/";
const FindVenue="http://localhost:4589/GetVenue/";
const FindAllVenue="http://localhost:4589/GetAllVenue";
const GetIds="http://localhost:4589/GetVenueIds";
const AddBooking="http://localhost:4589/AddBooking";
 
class EventService extends Component {
    Addvenue = (venue) => {
      return axios.post(AddVenue, venue);
    };
    Updatevenue = (venue) => {
        console.log(venue);
        return axios.put(UpdateVenue, venue);
      };
    
      Deletevenue = (id) => {
        return axios.delete(DeleteVenue + id);
      };
    
      Viewvenue = (id) => {
        return axios.get(FindVenue + id);
      };
      ViewAllvenue = () => {
        return axios.get(FindAllVenue);
      };
      GetVenueIds = () => {
        return axios.get(GetIds);
      };
      AddBooking = (booking) => {
        return axios.post(AddBooking, booking);
       };
}
export default  EventService();