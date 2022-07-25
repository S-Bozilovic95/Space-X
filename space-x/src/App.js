import './style/Style.scss';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Test from './components/Test';
import Launches from './components/Launches/Launches';
import Navbar from './components/Navbar';
import {ContextProvider}  from './context/Context';

function App() {
  return (
    <div className='home'>
      <ContextProvider>
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Launches/>}/>
            <Route path='/Test' element={<Test/>}/>
          </Routes>
        </Router>
      </ContextProvider>
    </div>
  );
}

export default App;
