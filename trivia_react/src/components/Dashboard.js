import {React} from 'react';
import Navbar from './Navbar';
import Card from './Card';
import Footer from './Footer';
import { useContext } from 'react';
import { DatabaseContext } from '../data/DataProvider';

function Dashboard(){
    const context = useContext(DatabaseContext);
    return(
        <div className='mainDashboard'>
            <Card/>
        </div>
    )
}

export default Dashboard;