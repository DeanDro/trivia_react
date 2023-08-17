import './App.css';
import DataProvider from './data/DataProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MetaTags from './components/MetaTags';

function App() {
  return (
    <>
      <MetaTags/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DataProvider/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
