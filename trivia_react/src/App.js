import './App.css';
import DataProvider from './data/DataProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div>
      <header></header>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<DataProvider/>}/>
          </Routes>
        </BrowserRouter>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
