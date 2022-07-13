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
          <Route path='/Test' element={<Test/>}/>
          <Route path='/Launches' element={<Launches/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
