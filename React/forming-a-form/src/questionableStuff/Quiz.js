import { useState } from 'react';

export default function Quiz(props){
    const [inputValue, setInputValue] = useState("");

	const handleInputChanges = (e) => {
		setInputValue(e.target.value);
	}


	let answers = JSON.parse(localStorage.getItem("answers"));
	let quizStyle = "white";
	const handleSubmit = () => {
		debugger
		if(inputValue === props.answer){
			answers[props.questionIndex] = 1;
			quizStyle = "green";
		}
		else{
			answers[props.questionIndex] = 2;
			quizStyle = "red";
		}
		console.log(inputValue);
		console.log(answers);
		
		localStorage.setItem("answers", JSON.stringify(answers));
	}
	return (
		<div style={{backgroundColor: (inputValue != "" ? (inputValue === props.answer ? "red" : "green") : "white")}}>
			<h1>{props.question}</h1>
			<input type="text" value={inputValue} onChange={handleInputChanges} placeholder="Your value is immeasurable" />
			<button onClick={handleSubmit} >Submit</button>
		</div>
	);
}