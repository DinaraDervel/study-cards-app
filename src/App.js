import Carousel from './components/Carousel/Carousel';
import Header from './components/Header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Table from './components/Table/Table';
import data from "./data/data.json";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='carousel' element={<Carousel data={data[0]} />} />
            <Route path='table' element={<Table data={data[0]} />} />
          </Routes>
        </div>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
