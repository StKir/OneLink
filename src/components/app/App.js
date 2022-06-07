import './App.scss';
import Header from '../appHeader/Header';
import Hello from '../helloScrin/HelloScrin';
import SearchPanel from '../searchPanel/SearchPanel';
import EmpList from '../empList/EmpList';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Container>
        <Header/>
        <Hello/>
        <SearchPanel/>
        <EmpList/>
      </Container>
    </div>
  );
}

export default App;
