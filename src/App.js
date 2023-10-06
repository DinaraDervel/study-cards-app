import Carousel from './components/Carousel/Carousel';
import Header from './components/Header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Table from './components/Table/Table';
import data from "./data/data.json";

function App() {
  const storedData = JSON.parse(localStorage.getItem("words"));
  data = storedData ? storedData : data;
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='carousel' element={<Carousel data={data} isShown={0} />} />
            <Route path='table' element={<Table data={data} />} />
          </Routes>
        </div>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
