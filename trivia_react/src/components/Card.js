import React, { useContext } from "react";
import { DatabaseContext } from "../data/DataProvider";


function Card(){

    const value = useContext(DatabaseContext);
    return (
            <div className="container">
                <div className="question_box">
                    <h2>{value.question}</h2>
                </div>
                <br/>
                <button className="answer_box">
                    <p className="answer">{value.answer1}</p>
                </button>
                <br/>
                <button className="answer_box">
                    <p className="answer">{value.answer2}</p>
                </button>
                <br/>
                <button className="answer_box">
                    <p className="answer">{value.answer3}</p>
                </button>
                <br/>
                <button className="answer_box">
                    <p className="answer">{value.answer4}</p>
                </button>
            </div>
    );
}; 

export default Card;