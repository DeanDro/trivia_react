import {React, createContext} from "react";
import Dashboard from "../components/Dashboard";
import { questions } from "../assets/questionsList";
import { useState } from "react";



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
        setCategory({...categories, choice: e.target.category.value});
    };

    return(
        categories.choice === "None" ? 
        <div>
            <div className="container_input">
                <form onSubmit={selection}>
                    <fieldset>
                        <label htmlFor="category">Choose a category: </label>
                        <select id="category">
                            <option value={"Harry_Potter"}>Harry Potter</option>
                            <option value={"Games_of_Chance"}>Games of Chance</option>
                        </select>
                    </fieldset>
                    <input type="submit" value={"Submit"}/>
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