import './App.scss';
import MainPage from '../pages/MainPage';
import PersonPage from '../pages/PersonPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
              <Route path="/" element={<MainPage/>}/>
              <Route path="/:userid" element={<PersonPage/>}/>
              {/* <Route path="*" element={<Page404/>}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
