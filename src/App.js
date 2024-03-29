import { HashRouter, Routes, Route } from 'react-router-dom';
import Carousel from './components/Carousel/Carousel';
import Header from './components/Header/Header';
import Table from './components/Table/Table';
import NoMatch from './components/NoMatch/NoMatch';
import { Provider } from 'mobx-react';
import WordsStore from './stores/WordsStore';
import './App.scss'


const stores = {
  wordsStore: new WordsStore(),
};

function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <Provider {...stores}>
          <div className='app-wrapper-content'>
            <Routes>
              <Route exact path='/' element={<Table />} />
              <Route path='table' element={<Table />} />
              <Route path='carousel' element={<Carousel />} />
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </div>
        </Provider>
        {/* <Footer /> */}
      </HashRouter>
    </>
  );
}

export default App;
