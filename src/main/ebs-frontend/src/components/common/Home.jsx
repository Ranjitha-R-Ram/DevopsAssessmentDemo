// Filename - App.js

import React, { Component } from "react";

class Home extends Component {
	render() {
		const myStyle = {
 			backgroundImage:
				"url('https://th.bing.com/th/id/R.f6c86bcb4af28c4b87ac770ab05b044c?rik=bejs25wjhttGRg&riu=http%3a%2f%2fwww.bookinglive.com%2fwp-content%2fuploads%2f2021%2f06%2fmockup-of-a-macbook-pro-placed-on-a-wooden-table-next-to-an-agenda-2328-el1-Copy-Copy-Copy.png&ehk=VScTWYW1hYQUN1QyMYQeGVdzGk6c%2bGr2ZxEM9tshY8U%3d&risl=&pid=ImgRaw&r=0')",
			height: "93vh",
			marginTop: "-70px", 
			fontSize: "50px",
	 		backgroundSize: "cover",
			backgroundRepeat: "no-repeat",
		};
		return (
			<div style={myStyle}>
			
			</div>
		);
	}
}

export default Home;
