import './App.css';
import GameInit from './components/GameInit';
import DataProvider from './data/DataProvider';
import Dashboard from './components/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DataProvider/>}/>
        <Route path='/startGame' element={<GameInit/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
