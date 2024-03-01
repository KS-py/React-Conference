import React from 'react';
import './conferenceInfo.css'

const ConferenceInfo = (props) => {
	return(
		<div className="main-area">
			<div className="conference-text">
				<p>
					The best place to be as a React developer, regardless of your level of experience.
				</p>
			</div>
			<div className="button-area">
				<button>
					Buy a ticket
				</button>
			</div>
		</div>
	)
}

export default ConferenceInfo;