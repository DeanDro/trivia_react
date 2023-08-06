import {React, createContext} from "react";
import Dashboard from "../components/Dashboard";

const harryPotter = 
    {
        "question":"What is Voldermor's first name?",
        "answer1": "Tom",
        "answer2": "John",
        "answer3": "Timmy",
        "answer4": "Anabelle",
        "correct": "Tom"
    };

export const DatabaseContext = createContext();

function DataProvider(){
    return(
        <DatabaseContext.Provider value={harryPotter}>
            <Dashboard/>
        </DatabaseContext.Provider>
    )
}

export default DataProvider;