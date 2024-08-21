import logo from './logo.svg';
import './App.css';

import Shackespear from './ShakesSpear/Shakespear';
import QuizApp from './QuizApp/QuizApp'
import CounterButton from './button/counterButton';
import InfoApp from './InfoApp/InfoApp';

import { useState } from 'react';
import { BrowserRouter as Router, Link, Routes, Route, useNavigate } from 'react-router-dom';


function CoolButton() {
	const [twoClicks, setTwoClicks] = useState(0);

	const handleTwoClicksChanged = () => {
		setTwoClicks(twoClicks + 0.5)
	};
	return (
		<div>
			<CounterButton onClicksChanged={handleTwoClicksChanged}></CounterButton>
			<p>
				button clicked twice: {twoClicks}
			</p>
		</div>
	);
}


function App() {
	const [routeIndex, setRouteIndex] = useState(0);
	const navigate = useNavigate();

	const savedRoutes = [
		"/",
		"/InfoStuffs",
		"/Quiz",
		"/Shackespear",
		"/CoolButton",
	]


	const nextRoute = () => {
		if (routeIndex != savedRoutes.length - 1) {
			setRouteIndex(routeIndex + 1);
		}
		else {
			setRouteIndex(0)
		}

		navigate(savedRoutes[routeIndex]);
	}
	const previousRoute = () => {
		if (routeIndex != 0) {
			setRouteIndex(routeIndex - 1);
		}
		else {
			setRouteIndex(savedRoutes.length - 1)
		}

		navigate(savedRoutes[routeIndex]);
	}



	return (
		<div>
			<ul>
				<li>
					<Link to="/" onClick={setRouteIndex(0)}>this page</Link>
				</li>
				<li>
					<Link to="/InfoStuffs" onClick={setRouteIndex(1)}>Info stuff</Link>
				</li>
				<li>
					<Link to="/Quiz" onClick={setRouteIndex(2)}>Quiz</Link>
				</li>
				<li>
					<Link to="/Shakespeare" onClick={setRouteIndex(3)}>Shake</Link>
				</li>
				<li>
					<Link to="/CoolButton" onClick={setRouteIndex(4)}>Cool button</Link>
				</li>
			</ul>
				<button onClick={previousRoute}>&lt;</button>

				<button onClick={nextRoute}>&gt;</button>
			<Routes>
				<Route path="/Quiz" element={<QuizApp></QuizApp>} />
				<Route path="/InfoStuffs" element={<InfoApp></InfoApp>} />
				<Route path="/Shakespear" element={<Shackespear></Shackespear>} />
				<Route path="/CoolButton" element={<CoolButton></CoolButton>} />
			</Routes>
		</div>
	);
}

export default App;
