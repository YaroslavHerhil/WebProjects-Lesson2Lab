import { useState } from 'react';
import './QuizApp.css';
import Quiz from './Quiz.js';



export default function QuizApp() {
	const [answers, setAnswers] = useState([0,0,0,0,0]);

	const handleAnswerChanges = (index, value) =>{
		let updatedAnswers = [...answers];
		updatedAnswers[index] = value;
		setAnswers(updatedAnswers);
		console.log(answers);
	}


	return (
		<div className="QuizApp">
			<div className='sticky-element'><h3 className="counter">{answers.filter(x=>x==1).length}/5</h3></div>

			<Quiz question="In 1986 what animal consumed the most amount of nails?" image="/nails.jpg" answer="Moose" index={0} onAnswerChanged={handleAnswerChanges}/>
			<Quiz question="What is the twelfth ingredient of the Greek Flame?" image="/mustard.jpg" answer="Mustard" index={1} onAnswerChanged={handleAnswerChanges}/>
			<Quiz question="What year did the TV Show 'Madelin` Housewifes' debut?" image="/TV.jpg" answer="1984" index={2} onAnswerChanged={handleAnswerChanges}/>
			<Quiz question="How many finger am I holding up? " image="/finger.jpg" answer="None" index={3} onAnswerChanged={handleAnswerChanges}/>
			<Quiz question="What is the anwser to this question?" image="/question.jpg" answer="True" index={4} onAnswerChanged={handleAnswerChanges}/>
			<br></br>
		</div>
	);
}

