import {React, createContext, useContext, useState} from "react";

const harryPotter = [
    {
        "question":"What is Voldermor's first name?",
        "answer1": "Tom",
        "answer2": "John",
        "answer3": "Timmy",
        "answer4": "Anabelle",
        "correct": "Tom"
    }
];

const DatabaseContext = createContext();

const DataProvider = ({children})=>{
    const [question, useQuestion] = useState(harryPotter);
    return (
        <DatabaseContext.Provider value={{question}}>
            {children}
        </DatabaseContext.Provider>
    )
}

export const useDatabaseContext = ()=>useContext(DatabaseContext);
export default DataProvider;