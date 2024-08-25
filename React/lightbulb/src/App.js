import logo from './logo.svg';
import './App.css';
import styles from './App.css';
import Bulb from './BulbComponent/Bulb';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

function App() {
	const [wobble, setWobble] = React.useState(0)

	return (
		<div className="App">
			<motion.img
				src="bulb1s1.png"
				animate={{rotate: 0, rotate: 15, rotate: 0}}

			/>
		</div>
	);
}

export default App;
