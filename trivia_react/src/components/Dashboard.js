import {React, useState} from 'react';
import ReactDom from 'react-dom';
import Navbar from './Navbar';

function Dashboard(){
    return(
        <div className='mainDashboard'>
            <Navbar/>
        </div>
    )
}

export default Dashboard;