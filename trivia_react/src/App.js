import './App.css';
import DataProvider from './data/DataProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DataProvider/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
