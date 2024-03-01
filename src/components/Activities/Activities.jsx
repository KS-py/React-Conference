import React from 'react';
import Navbar from '../Navbar/Navbar'
import './activities.css'
import img1 from '../../../img/coding.jpg'
import img2 from '../../../img/discussions.jpg'
import img3 from '../../../img/workshops.jpg'

const Activities = (props) => {
	return(
		<>
		<article className="article-act">
		<Navbar />
		<section className="section-food">
		<div className="page-title"> Activities </div>
		<p>
Welcome to our React conference where we not only dive deep into the world of React but also offer a range of engaging activities to enhance your conference experience. Get ready to amplify your learning journey and network with like-minded individuals through a variety of interactive activities designed to inspire, educate, and energize. Here's a sneak peek at some of the exciting activities awaiting you:
		</p>
		<br></br>		
		<ul className="sheet">
			<li>Code Labs and Workshops</li>
			<p>Immerse yourself in hands-on code labs and workshops led by industry experts, where you can sharpen your React skills, explore new concepts, and work on real-world projects in a collaborative environment.</p>
			<li>Tech Demos and Showcases</li>
			<p>Experience live tech demos and showcases featuring the latest innovations in the React ecosystem, where top developers and companies demonstrate cutting-edge technologies, tools and solutions.</p>	
			<li>Panel Discussions and Q&A Sessions </li>
			<p>Engage in insightful panel discussions and interactive Q&A sessions with renowned React developers, industry leaders and community influencers, offering valuable insights, trends and best practices in the React community.</p>	
			<li>Hackathons and Coding Challenges </li>
			<p>Participate in hackathons and coding challenges to put your React skills to the test, collaborate with fellow developers and showcase your creativity and problem-solving abilities within a competitive yet supportive environment.</p>
			<li>Networking Mixers and Social events</li>
			<p>Connect with fellow attendees, speakers, and sponsors during networking mixers and social events where you can build meaningful relationships, share ideas, and unwind in a relaxed and social atmosphere.			
			</p>	
			<li>Career Fair and Recruitment Opportunities</li>
			<p>Explore career fairs booths and recruitment opportunities to connect with leading tech companies, startups, and recruiters seeking React developers offering you a platform to explore career prospects and potential job opportunities.
			</p>
		</ul>
		<p>
			<br></br>
			Get ready to amplify your React conference experience through a blend of engaging activities that cater to diverse interests and levels of expertise. Whether you're a seasoned React pro or just starting your journey with React, there's something for everyone at our conference.
			<br></br>
			Join us for an unforgettable blend of learning, networking and fun as we celebrate the vibrant React community and foster growth, innovation adn collaboration in the world of React development
			See you at the conference, where React enthusiasts come together to learn, grow and thrive in the ever-evolving world of front-end development!!
		</p>
		</section>
		<div className="gallery">
			<img src={img1} />
			<img src={img2} />
			<img src={img3} />
		</div>
		<div className="banner">
			<p>Coding Challenges</p>
			<p>Discussions</p>
			<p>Workshops</p>
		</div>
		</article>
		</>
	)
}

export default Activities;