import logo from './logo.svg';
import './App.css';
import React from 'react';
import MyInfo from './personal-info-comp/MyInfo';
import CityInfo from './personal-info-comp/CityInfo';


function lotsOfPs(){
	for(let i = 0; i < 5; i++){
		myHtml += (
			<div>
				<p>Hello {i}!</p>
			</div>
		)
	}
	return(
		<div>
			{myHtml}
		</div>
	)
}

function App() {
	return (
		<div className="App">
			{lotsOfPs()}

			<MyInfo name="Damian Forthcoming" year="1030" country="Nobucarnia"></MyInfo>
			<CityInfo name="Creack of creacks" year="140" country="Nobucarnia"></CityInfo>
		</div>
	);
}

export default App;
