import React from "react";

function Navbar(props){
    return (
        <nav className="questions">
            <h2>Question: {props.counter}/20</h2>
        </nav>
    );
};

export default Navbar;