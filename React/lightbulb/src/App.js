import React, { useState } from 'react';

import { motion } from 'framer-motion';

import logo from './logo.svg';
import './App.css';
import styles from './App.css';

import BulbComponent from './BulbComponent/BulbComponent';
import InfoComponent from './InfoComponent/InfoComponent';



export const GameContext = React.createContext(null);
export const BulbsLibraryContext = React.createContext(null);

function App() {

	// base game context which I set through a state
	const [gameState, setGameState] = useState({
		money: 100,
		bulbsBroken: 0,
		power: 1,

		// dont know if I should do it here or not but oh well
		// this did turn out to be a bad idea, gotta move to a different context later
		
	})
	const [bulbsLibrary, setBulbsLibrary] = useState([
			{
				type: 1,
				sprite: "bulb1",
				maxHP: 3,
				payout: 10,
				rarity: 1,
			},
			{
				type: 2,
				sprite: "bulb2",
				maxHP: 15,
				payout: 300,
				rarity: 0.1
			}
	])

	// this one is mapped from bulbsBase array
	const [currentBulb, setCurrentBulb] = useState({
		HP: 3,
		maxHP: 3,
		payout: 10,
		type: 1
	});

	//************************** Variables end here **************************//


	// picks a random bulb and maps currentbilb to it
	const randomNextBulb = () =>{
		let diceRoll = Math.random();
		if(diceRoll)
			console.log("wait a bit okay im dealing with context right now ill come back here later")


	}

	// maps a bulb to a current bulb object, they have different properties so mapper is needed
	const mapBulb = (index = 1) =>{

	}

	const bulbClick = (e) =>{
		gameState.money += 1;
		setGameState({
			money: gameState.money + 1,
			power: gameState.power,
			
		});

		console.log(gameState);
	}


	


	

	// idea is -
	// you get a random lightbulb based on its rarity
	// you break the lightbulb to get money
	// you then can upgrade the lightbulb to give more money/be less rare/have less hp
	// or yourself to break stuff better/get more payout from all bulbs/autoclicks
	// or even unlock new bulbs with new upgrades
	// im workshopping this one still

	return (
		<GameContext.Provider value={gameState}>
			<InfoComponent/>
			<BulbComponent bulbClick={bulbClick}/>
		</GameContext.Provider>
	);
}

export default App;
