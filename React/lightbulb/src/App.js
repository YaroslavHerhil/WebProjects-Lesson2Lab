import React, { useState } from 'react';

import { motion } from 'framer-motion';

import './styles.css';
import './fonts/Lemonade-Stand.woff2'

import BulbComponent from './BulbComponent/BulbComponent';
import InfoComponent from './InfoComponent/InfoComponent';
import UpgradesComponent from './UpgradesComponent/UpgradesComponent';


// stuff left to do
// -upgrades
// -design
// --also includes art btw, its kinda alot and is important to mention me thinks
// -animations

// if i dont feel like dying after all of this
// -refactoring
// -divide code between files
// -more bulbs
// -more refactoring


export const CurrentBulbContext = React.createContext(null);
export const GameContext = React.createContext(null);
export const BulbsLibraryContext = React.createContext(null);

function App() {

	// base game context which I set through a state
	const [gameState, setGameState] = useState({
		money: 100,
		bulbsBroken: 0,
		power: 1,
		level: 1,
		upgradeCost: 100
		// dont know if I should do it here or not but oh well
		// this did turn out to be a bad idea, gotta move to a different context later
		
	})

	// this array should be sorted by rarity always, and type is basically an index btw
	const [bulbsLibrary, setBulbsLibrary] = useState([
			{
				type: 0,
				level: 1,
				sprite: "/s1",
				name: "Regular Lightbulb",
				maxHP: 3,
				payout: 10,
				rarity: 1,
				bulbsRequired: 0,
				upgradeCost: 50
			},
			{
				type: 1,
				level: 0,
				sprite: "/s1.png",
				name: "Halogen Lightbulb",
				maxHP: 15,
				payout: 300,
				rarity: 0.2,
				bulbsRequired: 15,
				upgradeCost: 150
			},
			{
				type: 2,
				level: 0,
				sprite: "/s1.png",
				name: "Fluorescent Lightbulb",
				maxHP: 40,
				payout: 1500,
				rarity: 0.07,
				bulbsRequired: 100,
				upgradeCost: 1050
			},
			{
				type: 3,
				level: 0,
				sprite: "/s1.png",
				name: "Candelabra",
				maxHP: 10,
				payout: 10000,
				rarity: 0.05,
				bulbsRequired: 250,
				upgradeCost: 5000
			},
	])

	// this one is mapped from bulbsLibrary array
	const [currentBulb, setCurrentBulb] = useState({
		HP: 3,
		maxHP: 3,
		type: 0,
		sprite: "/s1.png"
	});



	const gameStatePair = {gameState: gameState, setGameState: setGameState}
	const currentBulbPair = {currentBulb: currentBulb, setCurrentBulb: setCurrentBulb}
	const bulbsLibraryPair = {bulbsLibrary: bulbsLibrary, setBulbsLibrary: setBulbsLibrary}
	//************************** Variables end here **************************//


	// picks a random bulb and maps currentbilb to it
	const randomNextBulb = () =>{
		let diceRoll = Math.random();
		console.log(diceRoll);
		let newBulbIs0 = true;
		for(let i = bulbsLibrary.length - 1; i >= 0; i--){
			if(diceRoll <= bulbsLibrary[i].rarity && bulbsLibrary[i].level > 0){
				mapCurrentBulb(i);
				newBulbIs0 = false;
				if(i == 1)
					console.log("i was here")
				break;
			}
			else{
				diceRoll = Math.random();
				console.log(`${diceRoll} for type ${i}`);

			}
		}
		if(newBulbIs0){
			mapCurrentBulb(0);
		}
	}
	// maps a bulb to a current bulb object, they have different properties so mapper is needed
	// also it's called a mapper yet it sets the object? how peculiar
	const mapCurrentBulb = (index) =>{
		let newBulb = bulbsLibrary[index];
		let mappedBulb = {
			HP: newBulb.maxHP,
			maxHP: newBulb.maxHP,
			type: newBulb.type,
			sprite: "/s1.png"
		}
		setCurrentBulb(mappedBulb)
	}

	const bulbBroken = (bulb) =>{
		setGameState((prevGameState) => ({
			...prevGameState,
			money: prevGameState.money + bulbsLibrary[bulb.type].payout,
			bulbsBroken: prevGameState.bulbsBroken + 1,
		}));
		console.log(gameState);
		randomNextBulb();
	}

	const bulbClick = () =>{
		if(currentBulb.sprite == "/s4.png"){
			bulbBroken(currentBulb);
		}
		else{
			let newSprite;
			//logic for changing sprite here
			if(currentBulb.HP - gameState.power <= 0){
				newSprite = "/s4.png";
			}
			else if(currentBulb.HP - gameState.power <= currentBulb.maxHP / 3){
				newSprite = "/s3.png";
			}
			else if(currentBulb.HP - gameState.power <= currentBulb.maxHP / 1.5){
				newSprite = "/s2.png";
			}
			else{
				newSprite = "/s1.png";
			}

			setCurrentBulb((prevBulb) => ({
				...prevBulb,
				HP: prevBulb.HP - gameState.power,
				sprite: newSprite
			}));
		}
	}

	// ************************** Functions called here ************************** //


	


	

	// idea is -
	// you get a random lightbulb based on its rarity
	// you break the lightbulb to get money
	// you then can upgrade the lightbulb to give more money/be less rare/have less hp
	// or yourself to break stuff better/get more payout from all bulbs/autoclicks
	// or even unlock new bulbs with new upgrades
	// im workshopping this one still

	return (
		<div className='app'>
			<GameContext.Provider value={gameStatePair}>
				<CurrentBulbContext.Provider value={currentBulbPair}>
					<BulbsLibraryContext.Provider value={bulbsLibraryPair}>
						
						<InfoComponent/>
						<BulbComponent bulbClick={bulbClick}/>
						<UpgradesComponent/>

					</BulbsLibraryContext.Provider>
				</CurrentBulbContext.Provider>
			</GameContext.Provider>
		</div>
	);
}

export default App;
