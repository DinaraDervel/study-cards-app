import Carousel from './components/Carousel/Carousel';
import Header from './components/Header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Table from './components/Table/Table';
import data from "./data/data.json";
import { useEffect, useState } from 'react';

localStorage.setItem('words', JSON.stringify(data));

function App() {
  const storedWords = JSON.parse(localStorage.getItem('words'));
  const [words, setWords] = useState(storedWords);
  useEffect(() => {
    localStorage.setItem('words', JSON.stringify(words));
  }, [words]);

  return (
    <>
      <BrowserRouter>
        <Header />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='carousel' element={<Carousel data={data[0]} />} />
            <Route path='table' element={<Table data={words} setWords={setWords} />} />
          </Routes>
        </div>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
