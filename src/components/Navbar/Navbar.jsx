import React from 'react'
import {Link} from 'react-router-dom'
import logo from './logo.svg'
import './navbar.css'

const Navbar = (props) => {
	return(
	<div className="navbar">
		<div className="event-title">
			<Link to="/">
			<img src={logo} className="logo"/>
			</Link>
			<h1> REACT CONFERENCE </h1>
		</div>
		<div className="buttons">
			<button>
				<Link to="/location-info" target="_blank" className="link">
					LOCATION
				</Link>
			</button>
			<button>
				<Link to="/food-info" target="_blank" className="link">
					FOOD INFO
				</Link>
			</button>			
			<button>
				<Link to="/activities" target="_blank" className="link">
				ACTIVITIES
				</Link>
			</button>						
		</div>
	</div>
	)
}

export default Navbar;