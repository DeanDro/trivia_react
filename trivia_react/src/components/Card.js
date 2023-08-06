import React, { useContext } from "react";
import DataProvider, { DatabaseContext } from "../data/DataProvider";


function Card(){

    const value = useContext(DatabaseContext);
    return (
        <DataProvider>
            <div className="container">
                {value.question}
            </div>
        </DataProvider>
    );
}; 

export default Card;