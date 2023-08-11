import React from "react";
import Dashboard from './Dashboard';
import SelectCategory from "./SelectCategory";
import { useContext } from "react";
import { DatabaseContext } from "../data/DataProvider";


const startGame = ()=>{
    return (
        <Dashboard/>
    );
};

const selectCategory = (props)=>{
    return (
        <SelectCategory value={props}/>
    )
}


function GameInit(props){
    let data = useContext(DatabaseContext);
    return (
        data.choice !=="None" ? startGame() : selectCategory()
    );
};

export default GameInit;