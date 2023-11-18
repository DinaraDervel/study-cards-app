import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Carousel from './components/Carousel/Carousel';
import Header from './components/Header/Header';
import Table from './components/Table/Table';
import NoMatch from './components/NoMatch/NoMatch';
import { DataContextProvider } from './data-context';
import './App.css'



function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <DataContextProvider >
          <div className='app-wrapper-content'>
            <Routes>
              <Route exact path='/' element={<Table />} />
              <Route path='table' element={<Table />} />
              <Route path='carousel' element={<Carousel />} />
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </div>
        </DataContextProvider>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
