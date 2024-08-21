import { useState } from 'react';
import './Quiz.css';

export default function Quiz(props){
    const [inputValue, setInputValue] = useState("");
    const [answerStyle, setAnswerStyle] = useState("Quiz");

	const handleInputChanges = (e) => {
		setInputValue(e.target.value);
	}
	const handleButtonClick = () => {
		if(inputValue == props.answer){
			props.onAnswerChanged(props.index, 1);
			setAnswerStyle("Quiz correct")
		}
		else{
			props.onAnswerChanged(props.index, 2);
			setAnswerStyle("Quiz wrong")
		}
	}


	
	return (
		<div className={answerStyle}>
			<h1>{props.question}</h1>
			<img src={props.image}></img>
			<input type="text" value={inputValue} onChange={handleInputChanges}></input>
			<button onClick={handleButtonClick} >Submit</button>
		</div>
	);
}