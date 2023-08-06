import React from "react";
import { ReactDOM } from "react";

function Navbar(){
    let questionNumber = 1;
    return (
        <nav className="questions">
            <h2>Question: {questionNumber}/20</h2>
        </nav>
    );
};

export default Navbar;