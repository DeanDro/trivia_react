import {React} from 'react';
import Navbar from './Navbar';
import Card from './Card';
import Footer from './Footer';


export let counter = 0;

function Dashboard(){
    let question_number = counter + 1;
    return(
        <div className='mainDashboard'>
            <Navbar counter={question_number}/>
            <Card/>
            <Footer/>
        </div>
    )
}

export default Dashboard;