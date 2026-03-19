import React from "react";
import Navbar from "./Navbar.jsx";
import CardMenu from "./CardMenu.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";

const cards = [
	{
		image: "https://picsum.photos/500/325",
		title: "Image 1",
		description: "Description 1",
	},
	{
		image: "https://picsum.photos/500/325",
		title: "Image 2",
		description: "Description 2",
	},
	{
		image: "https://picsum.photos/500/325",
		title: "Image 3",
		description: "Description 3",
	},
	{
		image: "https://picsum.photos/500/325",
		title: "Image 4",
		description: "Description 4",
	}
];

const Home = () => {
	return (
		<div>
			<Navbar />			
			<div className="container-fluid px-5 mt-4">
				<CardMenu />
				<div className="row g-4"> 
					{cards.map((item, index) => (					
					<div key={index} className="col-12 col-sm-12 col-md-6 col-lg-3 mb-4">
						<Card cards={item} />
					</div>
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;