import React, { useContext } from "react";
import { DatabaseContext } from "../data/DataProvider";
import { useState } from "react";
import GameOver from "./GameOver";
import { useEffect } from "react";


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
            setScore(score+1);
        } else {
            setTimeout(()=>{
                let corChoice = dict.correctNumber;
                let box = document.getElementById(corChoice);
                box.style.color = "#76de83";
            }, 2000);

        }
        
        // Ensure we don't have more than 11 questions 
        if (numberQuestion < 2){
            setCounter(counter+1);
        } else {
            setGameOn(false);
        }
        
    }

    return (
        gameOn ?
        <div>
            <nav className="navbar">
                <h2>You have answered {score} questions correctly.</h2>
            </nav>
            <form onSubmit={handleSubmit}>
                <div className="container">
                    <div className="question_box">
                        <h2>{dict.question}</h2>
                    </div>
                    <br/>
                    <input id="answer1" className="answer_box" type="submit" 
                    value={dict.answer1} onClick={(e)=>setAnswer(e.target.value)}/>
                    <input id="answer2" className="answer_box" type="submit" 
                    value={dict.answer2} onClick={(e)=>setAnswer(e.target.value)}/>
                    <input id="answer3" className="answer_box" type="submit" 
                    value={dict.answer3} onClick={(e)=>setAnswer(e.target.value)}/>
                    <input id="answer4" className="answer_box" type="submit" 
                    value={dict.answer4} onClick={(e)=>setAnswer(e.target.value)}/>
                </div>
            </form>
        </div>
        :
        <GameOver score={score}/>
    );
}; 

export default Card;