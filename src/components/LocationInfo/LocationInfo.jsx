import React from 'react';
import Navbar from '../Navbar/Navbar'
import './locationInfo.css'
import img1 from '../../../img/skyline1.jpg'
import img2 from '../../../img/skyline2.jpg'
import img3 from '../../../img/skyline3.jpg'

const LocationInfo = (props) => {
	return(
		<>
			<article className="article">
				<Navbar />
				<section className="section">
				<div className="page-title"> Tithon </div>
				<p>
				The conference will be held in the serene city of 
				Tithon, with hospitable residents and technologically savvy youth, we chose this city due to its accessibility from anywhere in the world and by multiple modes of transport from nearby cities.
				A technological hub known for innovation and creativity we know this city will bring out the creativity and skill in each of our attendees.
				You'll definitely enjoy your stay here with a host of tourist attractions and entertainment.
				</p>
				</section>
				<div className="gallery">
					<img src={img1} />
					<img src={img2} />
					<img src={img3} />
				</div>
				<div className="banner">
				</div>
			</article>
		</>
	)
}

export default LocationInfo;