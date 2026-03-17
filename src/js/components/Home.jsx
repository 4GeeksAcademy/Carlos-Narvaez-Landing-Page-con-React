import React from "react";
import { Navbar } from "./Navbar.jsx"
import { CardMenu } from "./CardMenu.jsx"
import { Card } from "./Card.jsx"

const Home = () => {
	return (
		<div>
			<Navbar />
			<CardMenu />			
			<Card />
		</div>
	);
};

export default Home;