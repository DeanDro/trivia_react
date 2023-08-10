import React from "react";
import Dashboard from "./Dashboard";
import { Link } from "react-router-dom";


function startGame(){
    return (
        <Link to="/dashboard"></Link>
    );
};


function GameInit(){
    return (
        <div className="categoryChoice">
            <div className="instructions">
                <h2>Trivia Literature</h2>
                <div className="choices">
                    <label for="categories_dropdown">Choose a category:</label>
                    <select name="categories_dropdown" id="categories_dropdown">
                        <option value="Harry_Potter">Harry Potter</option>
                        <option value="Games_of_Chance">Games of Chance</option>
                    </select>
                    <button type="submit" onSubmit={startGame} className="submit_category">Start Trivia</button>
                </div>
            </div>
        </div>
    );
};

export default GameInit;