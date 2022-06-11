import './App.scss';
import MainPage from '../pages/MainPage';
import PersonPage from '../pages/PersonPage';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      <Router>
        <Container>
          <Routes>
              <Route path="/" element={<MainPage/>}/>
              <Route path="/:userid" element={<PersonPage/>}/>
              {/* <Route path="*" element={<Page404/>}/> */}
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;
