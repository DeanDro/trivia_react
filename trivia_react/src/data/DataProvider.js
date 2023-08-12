import {React, createContext} from "react";
import Dashboard from "../components/Dashboard";
import { questions } from "../assets/questionsList";
import { useState } from "react";
import { retriveBackground } from "../assets/manageAssets";


export const DatabaseContext = createContext();

function DataProvider(){
    const [categories, setCategory] = useState(
        {
            choice: "None",
            value: questions
        }
    );

    const selection = (e)=>{
        e.preventDefault();
        //setCategory({...categories, choice: e.target.category.value});
        setCategory({...categories, choice: "Games_of_Chance"})
    };

    return(
        categories.choice === "None" ? 
        <div className="main_choice">
            <div className="category_selection">
                <form onSubmit={selection}>
                    <fieldset>
                        <label className="category" htmlFor="category">Games of Chance Quiz</label>
                    </fieldset>
                    <input className="category_button" type="submit" value={"Start"}/>
                </form>
            </div>
        </div>
        :
        <DatabaseContext.Provider value={categories}>
            <Dashboard/>
        </DatabaseContext.Provider> 
    )
}


export default DataProvider;