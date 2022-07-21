import './style/Style.scss';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Test from './components/Test';
import Launches from './components/Launches/Launches';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='home'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Launches/>}/>
          <Route path='/Test' element={<Test/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
