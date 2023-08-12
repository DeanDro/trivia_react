import React from "react";

function Navbar(props){
    return (
        <nav className="questions">
            <h2>Category: {props.choice}</h2>
        </nav>
    );
};

export default Navbar;