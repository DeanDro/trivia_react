import React from "react";
import { Link } from 'react-router-dom';
import retrieveImg from "../assets/manageAssets";
import DataProvider from "../data/DataProvider";

function Navbar(props){
    const logo = retrieveImg("science");
    return (
        <nav className="logo">
            {logo}
        </nav>
    );
};

export default Navbar;