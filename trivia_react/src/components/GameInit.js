import React from "react";
import Dashboard from "./Dashboard";
import {BrowserRoute, Routes, Route } from 'react-router-dom'; 


function GameInit(){
    let category;
    return (
        <Routes>
            <div className="categoryChoice">
                <div className="instructions">
                    <h2>Trivia Literature</h2>
                    <div className="choices">
                        <label>Choose a category:</label>
                        <button className="dropdown">
                            <span>Categories</span>
                            <span className="arrow"></span>
                        </button>
                        <ul className="dropdown_content" role="menu">
                            <li>Harry Potter</li>
                            <li>Games of Chance</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Routes>
    );
};