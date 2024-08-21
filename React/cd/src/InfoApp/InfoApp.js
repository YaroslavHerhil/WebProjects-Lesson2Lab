import './InfoApp.css';
import React from 'react';
import MyInfo from './personal-info-comp/MyInfo';
import CityInfo from './personal-info-comp/CityInfo';


export default function InfoApp() {
	return (
		<div className="InfoApp">

			<MyInfo name="Damian Forthcoming" year="1030" country="Nobucarnia"></MyInfo>
			<CityInfo name="Creack of creacks" year="140" country="Nobucarnia"></CityInfo>
		</div>
	);
}

