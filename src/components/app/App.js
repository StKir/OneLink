import './App.scss';
import MainPage from '../pages/MainPage';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'

function App() {

  return (
    <div className="App">
      <Container>
        <MainPage/>
      </Container>
    </div>
  );
}

export default App;
