import Header from '../appHeader/Header';
import Hello from '../helloScrin/HelloScrin';
import SearchPanel from '../searchPanel/SearchPanel';
import EmpList from '../empList/EmpList';
import { useState } from 'react'

const MainPage = (props) => {
    const [ text, setText ] = useState('');
    const [ prof, setProf ] = useState('');

    const updateTxt = (value) => {
        setText(value)
    }

    const updateProf = (value) => {
        setProf(value)
    }

    return (
        <>
            <Header/>
            <Hello/>
            <SearchPanel onUpdateTxt={updateTxt} onUpdateProf={updateProf}/>
            <EmpList searchTxt={text} prof={prof}/>
        </>
    )
}
export default MainPage