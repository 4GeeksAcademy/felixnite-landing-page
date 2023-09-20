import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx"

//create your first component
const Home = () => {
	const infoCard = [
		0,1,2,3
	]
	return (

		<>

		<Navbar/>

		<div className='container'>
			<Jumbotron/>
			<div className= "row">
				
		{ infoCard.map((item, index)=> {
			return <Card key={index}/>
		})}	</div>
        </div>
        <Footer/>
    
       </>
	)
};

export default Home;
