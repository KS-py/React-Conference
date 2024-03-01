import React from 'react'
import './speakers.css'
import {faker} from '@faker-js/faker'

const Speakers = (props) => {
	const female_names = []
	const male_names = []

	for(let i = 0; i < 4; i++){
		let female_name = faker.person.fullName({sex: 'female'})
		let male_name = faker.person.fullName({sex: 'male'})
		female_names.push(female_name)
		male_names.push(male_name)
	}

	return(
		<div className="speakers-area">
			<div className="speaker">
				<div className="speaker-img">
<img src='https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurvy&accessoriesType=Prescription01&hairColor=Black&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Happy&eyebrowType=FlatNatural&mouthType=Smile&skinColor=Yellow'
/>				
				</div>
				<div className="speaker-name">{female_names[0]}</div>
			</div>
			<div className="speaker">
				<div className="speaker-img">
					<img src='https://avataaars.io/?avatarStyle=Circle&topType=NoHair&accessoriesType=Blank&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Brown'
/>						
				</div>
				<div className="speaker-name">{male_names[0]}</div>
			</div>			
			<div className="speaker">
				<div className="speaker-img">
<img src='https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurly&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=ShirtCrewNeck&eyeType=Happy&eyebrowType=FlatNatural&mouthType=Smile&skinColor=Brown'
/>				
				</div>
				<div className="speaker-name">{female_names[1]}</div>
			</div>
			<div className="speaker">
				<div className="speaker-img">
					<img src='https://avataaars.io/?avatarStyle=Circle&topType=NoHair&accessoriesType=Blank&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Light'
/>						
				</div>
				<div className="speaker-name">{male_names[1]}</div>
			</div>
			<div className="speaker">
				<div className="speaker-img">
<img src='https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurly&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=ShirtCrewNeck&eyeType=Happy&eyebrowType=FlatNatural&mouthType=Smile&skinColor=Brown'
/>			
				</div>
				<div className="speaker-name">{female_names[2]}</div>
			</div>
			<div className="speaker">
				<div className="speaker-img">
					<img src='https://avataaars.io/?avatarStyle=Circle&topType=NoHair&accessoriesType=Blank&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Yellow'
/>						
				</div>
				<div className="speaker-name">{male_names[2]}</div>
			</div>
			<div className="speaker">
				<div className="speaker-img">
<img src='https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurvy&accessoriesType=Prescription01&hairColor=Black&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Happy&eyebrowType=FlatNatural&mouthType=Smile&skinColor=Light'
/>				
				</div>
				<div className="speaker-name">{female_names[3]}</div>
			</div>
			<div className="speaker">
				<div className="speaker-img">
					<img src='https://avataaars.io/?avatarStyle=Circle&topType=ShortHair&accessoriesType=Blank&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Light'
/>						
				</div>
				<div className="speaker-name">{male_names[3]}</div>
			</div>
		</div>
	)
}

export default Speakers;