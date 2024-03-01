import React from 'react';
import Navbar from '../Navbar/Navbar'
import './foodInfo.css'
import img1 from '../../../img/buffet1.jpg'
import img2 from '../../../img/buffet2.jpg'


const FoodInfo = (props) => {
	return(
		<>
			<article className="article-food">
				<Navbar />
				<section className="section-food">
				<div className="page-title"> Food Offerings </div>
				<p>
				Welcome to our conference where we aim to delight your senses not only with enlightening sessions but also with a culinary experience to remember. Our carefully curated food offerings seek to provide a diverse and delicious array of options to keep you energized and satisfied  throughout the event. A glimpse of what to expect:
				</p>
				<ul>
					<li>Gourmet Breakfast Selection</li>
					<p>Start your day on a high note with a variety of freshly baked pastries, artisanal bread, seasonal fruits, creamy yogurts and a selection of gourmet coffee and teas to kickstart morning</p>
					<li>Interactive Coffee Stations</li>
					<p>Indulge in our interactive coffee stations featuring barista-crafted beverages from velvet cappucinos to smooth lattes all made with premium coffee beans and alternative milk options</p>	
					<li>Elevated Luncheons</li>
					<p>Treat your palate to an elevated luncheon experience featuring a diverse range of culinary delights from flavorful salads and savory sandwiches to hot entrees that cateer to various dietary preferences, including vegetarian and gluten-free options</p>	
					<li>Hydration Stations</li>
					<p>Stay hydrated throughout the day with our hydration stations offering infused waters, herbal teas and a selection of juices to keep you refreshed and focused</p>	
				</ul>
				<p>
					<br></br>
					At our conference, we look to provide not only nourishment for the body but also a mouth-watering journey that complements the enriching discussions and networking opportunities. We welcome you to savor the flavors, mingle with fellow attendees and immerse yourself in a delightful culinary experience that adds a touch of gourmet hospitality to your conference experience.
					<br></br>
					Bon appetit and enjoy the feast for your taste buds as you relish flavors and imbibe knowledge at our conference.  
				</p>
				</section>
				<div className="gallery">
					<img src={img1} />
					<img src={img2} />
				</div>
				<div className="banner">
				</div>
			</article>
		</>		
	)
}

export default FoodInfo;