import React, { useContext } from "react";
import { DatabaseContext } from "../data/DataProvider";
import { useState, useEffect } from "react";
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
    

    const handleCorrectAnswer = (e)=>{
        setAnswer(e.target.value);
        let corChoice = dict.correctNumber;
        let box = document.getElementById(corChoice);
        box.style.backgroundColor = "#76de83";       
        
    }
    
    const handleSubmit = (e)=>{

        e.preventDefault();
        setTimeout(()=> {

            let corChoice = dict.correctNumber;
            let box = document.getElementById(corChoice);
            box.style.backgroundColor = "white";
            box.style.color = "black";
            box.onmouseover = ()=>{
                box.style.backgroundColor = "#372B4C";
                box.style.color = "white";
            }
            box.onmouseout = ()=>{
                box.style.backgroundColor = "white";
                box.style.color = "black";
            }

            setNumberQuestion(numberQuestion+1);        
            if (answer === dict.correct){
                setScore(score+1);
            }    

            // Ensure we don't have more than 11 questions 
            if (numberQuestion < 10){
                setCounter(counter+1);            
            } else {
                setGameOn(false);
            }
        },1000);
        
    }

    useEffect(()=>{
        setTimeout(()=>{
            let box1 = document.getElementById("answer1");
            let box2 = document.getElementById("answer2");
            let box3 = document.getElementById("answer3");
            let box4 = document.getElementById("answer4");

            if (box1 !== null){

                box1.style.backgroundColor = "white";
                box1.style.color = "black";
                box1.onmouseover = ()=>{
                    box1.style.backgroundColor = "#372B4C";
                    box1.style.color = "white";
                }
                box1.onmouseout = () =>{
                    box1.style.backgroundColor = "white";
                    box1.style.color = "black";
                }
                

                box2.style.backgroundColor = "white";
                box2.style.color = "black";
                box2.onmouseover = ()=>{
                    box2.style.backgroundColor = "#372B4C";
                    box2.style.color = "white";
                }
                box2.onmouseout = () =>{
                    box2.style.backgroundColor = "white";
                    box2.style.color = "black";
                }

                box3.style.backgroundColor = "white";
                box3.style.color = "black";
                box3.onmouseover = ()=>{
                    box3.style.backgroundColor = "#372B4C";
                    box3.style.color = "white";
                }
                box3.onmouseout = () =>{
                    box3.style.backgroundColor = "white";
                    box3.style.color = "black";
                }

                box4.style.backgroundColor = "white";
                box4.style.color = "black";
                box4.onmouseover = ()=>{
                    box4.style.backgroundColor = "#372B4C";
                    box4.style.color = "white";
                }
                box4.onmouseout = () =>{
                    box4.style.backgroundColor = "white";
                    box4.style.color = "black";
                }

            }
        },1300)
    });

    return (
        gameOn ?
        <div className="gameOn">
            <nav className="navbar">
                <h2>You have answered {score}/10 correct</h2>
            </nav>
            <form onSubmit={handleSubmit}>
                <div className="container">
                    <div className="question_box">
                        <h2>{dict.question}</h2>
                    </div>
                    <br/>
                    <input id="answer1" className="answer_box" type="submit" 
                    value={dict.answer1} onClick={handleCorrectAnswer}/>
                    <input id="answer2" className="answer_box" type="submit" 
                    value={dict.answer2} onClick={handleCorrectAnswer}/>
                    <input id="answer3" className="answer_box" type="submit" 
                    value={dict.answer3} onClick={handleCorrectAnswer}/>
                    <input id="answer4" className="answer_box" type="submit" 
                    value={dict.answer4} onClick={handleCorrectAnswer}/>
                </div>
            </form>
        </div>
        :
        <GameOver score={score}/>
    );
}; 

export default Card;