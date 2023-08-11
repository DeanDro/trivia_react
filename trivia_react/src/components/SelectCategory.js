import { useContext } from "react";
import { DatabaseContext } from "../data/DataProvider";
import GameInit from "./GameInit";
import { Route } from "react-router-dom";


function SelectCategory(){
    let data = useContext(DatabaseContext);
    const makeSelection = (e)=> {
        e.preventDefault();
        data.choice = e.target.choice.value;
        console.log(data.choice);
        return <Route path="./startGame" element={<GameInit/>}/>
    }
    return (
        <div className="container">
            <form onSubmit={makeSelection}>
                <label htmlFor="choice">Select category of questions: </label>
                <select name="choice" id="choice">
                    <option value="Harry Potter">Harry Potter</option>
                    <option value="Games of Chance">Games of Chance</option>
                </select>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default SelectCategory;