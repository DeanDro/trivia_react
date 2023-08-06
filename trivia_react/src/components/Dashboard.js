import {React, useState, createContext} from 'react';
import Navbar from './Navbar';
import Card from './Card';


export let counter = 0;

function Dashboard(){
    let question_number = counter + 1;
    return(
        <div className='mainDashboard'>
            <Navbar counter={question_number}/>
            <Card/>
        </div>
    )
}

export default Dashboard;