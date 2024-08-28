import React, { useState, useEffect } from 'react';

import { motion } from 'framer-motion';

import './styles.css';
import './fonts/Lemonade-Stand.woff2'

import BulbComponent from './BulbComponent/BulbComponent';
import InfoComponent from './InfoComponent/InfoComponent';
import UpgradesComponent from './UpgradesComponent/UpgradesComponent';
import SaveComponent from './SaveComponent/SaveComponent';


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

	const [gameState, setGameState] = useState({
		money: 100,
		bulbsBroken: 0,
		power: 1,
		level: 1,
		upgradeCost: 100
	});
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
	]);
	const [currentBulb, setCurrentBulb] = useState({
		HP: 3,
		maxHP: 3,
		type: 0,
		sprite: "/s1.png"
	});


	const gameStatePair = { gameState: gameState, setGameState: setGameState }
	const currentBulbPair = { currentBulb: currentBulb, setCurrentBulb: setCurrentBulb }
	const bulbsLibraryPair = { bulbsLibrary: bulbsLibrary, setBulbsLibrary: setBulbsLibrary }

	//************************** Variables end here **************************//


	// picks a random bulb and maps currentbilb to it
	const randomNextBulb = () => {
		let diceRoll = Math.random();
		console.log(diceRoll);
		let newBulbIs0 = true;
		for (let i = bulbsLibrary.length - 1; i >= 0; i--) {
			if (diceRoll <= bulbsLibrary[i].rarity && bulbsLibrary[i].level > 0) {
				mapCurrentBulb(i);
				newBulbIs0 = false;
				break;
			}
			else {
				diceRoll = Math.random();
			}
		}
		if (newBulbIs0) {
			mapCurrentBulb(0);
		}
	}
	// maps a bulb to a current bulb object, they have different properties so mapper is needed
	// also it's called a mapper yet it sets the object? how peculiar
	const mapCurrentBulb = (index) => {
		let newBulb = bulbsLibrary[index];
		let mappedBulb = {
			HP: newBulb.maxHP,
			maxHP: newBulb.maxHP,
			type: newBulb.type,
			sprite: "/s1.png"
		}
		setCurrentBulb(mappedBulb)
	}

	const bulbBroken = (bulb) => {
		setGameState((prevGameState) => ({
			...prevGameState,
			money: prevGameState.money + bulbsLibrary[bulb.type].payout,
			bulbsBroken: prevGameState.bulbsBroken + 1,
		}));
		console.log(gameState);
		randomNextBulb();
	}

	const bulbClick = () => {
		if (currentBulb.sprite == "/s4.png") {
			bulbBroken(currentBulb);
		}
		else {
			let newSprite;
			if (currentBulb.HP - gameState.power <= 0) {
				newSprite = "/s4.png";
			}
			else if (currentBulb.HP - gameState.power <= currentBulb.maxHP / 3) {
				newSprite = "/s3.png";
			}
			else if (currentBulb.HP - gameState.power <= currentBulb.maxHP / 1.5) {
				newSprite = "/s2.png";
			}
			else {
				newSprite = "/s1.png";
			}

			setCurrentBulb((prevBulb) => ({
				...prevBulb,
				HP: prevBulb.HP - gameState.power,
				sprite: newSprite
			}));
		}
	}


	const saveProgress = () => {
		localStorage.setItem('gameState', JSON.stringify(gameState));
		localStorage.setItem('currentBulb', JSON.stringify(currentBulb));
		localStorage.setItem('bulbsLibrary', JSON.stringify(bulbsLibrary));
	}

	const setProgressDefault = () =>{
		setBulbsLibrary([
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
		]);
		setGameState({
			money: 100,
			bulbsBroken: 0,
			power: 1,
			level: 1,
			upgradeCost: 100
		});
		setCurrentBulb({
			HP: 3,
			maxHP: 3,
			type: 0,
			sprite: "/s1.png"
		});
	}

	useEffect(() => {
		let savedGame = JSON.parse(localStorage.getItem('gameState'));
		let savedCurrentBulb = JSON.parse(localStorage.getItem('currentBulb'));
		let savedBulbs = JSON.parse(localStorage.getItem('bulbsLibrary'));
		if (savedGame != null && savedCurrentBulb != null && savedBulbs != null){
			setCurrentBulb(savedCurrentBulb);
			setBulbsLibrary(savedBulbs);
			setGameState(savedGame);
		}
		else{
			setProgressDefault();
		}

	}, [])


	return (
		<div className='app'>
			<GameContext.Provider value={gameStatePair}>
				<CurrentBulbContext.Provider value={currentBulbPair}>
					<BulbsLibraryContext.Provider value={bulbsLibraryPair}>

						<SaveComponent eraseProgress={setProgressDefault} saveProgress={saveProgress}/>
						<InfoComponent />
						<BulbComponent bulbClick={bulbClick} />
						<UpgradesComponent />

					</BulbsLibraryContext.Provider>
				</CurrentBulbContext.Provider>
			</GameContext.Provider>
		</div>
	);
}

export default App;
