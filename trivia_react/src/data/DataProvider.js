import {React, createContext} from "react";
import GameInit from "../components/GameInit";
import { questions } from "../assets/questionsList";


let category_chosen = "None";
const categories = {
    choice: category_chosen, 
    questions: questions
};

export const DatabaseContext = createContext();

function DataProvider(){
    return(
        <DatabaseContext.Provider value={categories}>
            <GameInit/>
        </DatabaseContext.Provider> 
    )
}

function updateChoiceValue(props){
    categories.choice = props.value;
}

export default DataProvider;
export { updateChoiceValue};