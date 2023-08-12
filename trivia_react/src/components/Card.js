import React, { useContext } from "react";
import { DatabaseContext } from "../data/DataProvider";
import { useState } from "react";
import GameOver from "./GameOver";


function Card(){
    const [counter, setCounter] = useState(0);
    const [score, setScore] = useState(0);
    const [answer, setAnswer] = useState("");
    const [numberQuestion, setNumberQuestion] = useState(1);
    const [gameOn, setGameOn] = useState(true);
    const value = useContext(DatabaseContext);
    const choice = value.choice;
    let dict = value.value[0][choice][counter];

    const handleSubmit = (e)=>{
        e.preventDefault();
        setNumberQuestion(numberQuestion+1);

        if (answer === dict.correct){
            console.log("Correct!");
            setScore(score+1);
        } else {
            console.log("Wrong!");
        }
        
        // Ensure we don't have more than 11 questions 
        if (numberQuestion < 2){
            setCounter(counter+1);
        } else {
            setGameOn(false);
        }
        
        console.log(dict);
        console.log(counter+1);
    }

    return (
        gameOn ?
        <form onSubmit={handleSubmit}>
            <div className="container">
                <div className="question_box">
                    <h2>{dict.question}</h2>
                </div>
                <br/>
                <input className="answer_box" type="submit" value={dict.answer1} onClick={(e)=>setAnswer(e.target.value)}/>
                <input className="answer_box" type="submit" value={dict.answer2} onClick={(e)=>setAnswer(e.target.value)}/>
                <input className="answer_box" type="submit" value={dict.answer3} onClick={(e)=>setAnswer(e.target.value)}/>
                <input className="answer_box" type="submit" value={dict.answer4} onClick={(e)=>setAnswer(e.target.value)}/>
            </div>
        </form>
        :
        <GameOver score={score}/>
    );
}; 

export default Card;