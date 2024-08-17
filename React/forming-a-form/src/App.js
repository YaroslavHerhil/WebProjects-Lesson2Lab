import './App.css';
import Quiz from './questionableStuff/Quiz.js'



function App() {

	
	return (
		<div className="App">
			<Quiz question='hello' answer="1" questionIndex={0}></Quiz>
			<Quiz question='hello' answer="2" questionIndex={1}></Quiz>
			<Quiz question='hello' answer="3" questionIndex={2}></Quiz>
			<Quiz question='hello' answer="4" questionIndex={3}></Quiz>
			<Quiz question='hello' answer="5" questionIndex={4}></Quiz>
			<h3>{JSON.parse(localStorage.getItem("answers")).filter(x => x==1).length}/5</h3>
		</div>
		
	);
}

export default App;
