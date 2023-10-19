import Carousel from './components/Carousel/Carousel';
import Header from './components/Header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Table from './components/Table/Table';
import data from "./data/data.json";
import './App.css'

function App() {
  const storedData = JSON.parse(localStorage.getItem("words"));
  data = storedData ? storedData : data;
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className='app-wrapper-content'>
          <Routes>
            <Route exact path='/' element={<Table data={data} />} />
            <Route path='table' element={<Table data={data} />} />
            <Route path='carousel' element={<Carousel data={data} isShown={0} />} />
          </Routes>
        </div>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
