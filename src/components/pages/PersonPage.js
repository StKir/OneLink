import { useParams, Link} from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

import data from '../../api/__apiPersonList'

import './PersonPage.scss'
import Header from '../appHeader/Header';
import PersonMainInfo from '../personMainInfo/PersonMainInfo';
import SteckAndContacts from '../steckAndContacts/SteckAndContacts';
import PortfolioGallery from '../portfolioGallery/PortfolioGallery';
import AboutPerson from '../aboutPerson/AboutPerson';
import ProfileLink from '../profileLink/ProfileLink';
const PersonPage = () => {
    const userid = useParams();
    const [person, setPerson] = useState({});
    const [margin, setMargin] = useState(200);
    const {results} = data.data;
    const marginForSwiper = useRef('')


    useEffect(() => {
        getPerson(results, userid);
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        setMargin(marginForSwiper.current.offsetLeft)
    }, [])

    function getPerson(obj, key) {
        obj.forEach(element => {
            // eslint-disable-next-line
            if(element.id == key.userid) {
                setPerson(element);
            }
        });
    }

    return (
        <div className='person_page'>
            <div className='header'>
                <Link to={`/`} className='route_back'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.939341 10.9393C0.353554 11.5251 0.353554 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.80761 11.0711 0.80761 10.4853 1.3934L0.939341 10.9393ZM24 10.5L2 10.5L2 13.5L24 13.5L24 10.5Z" fill="#3632F4"/>
                    </svg>
                </Link>
                <Header/>
            </div>
            <div className='person_page-wrpapper' ref={marginForSwiper}>
                <PersonMainInfo person={person}/>
                <SteckAndContacts person={person}/>          
            </div>
            <PortfolioGallery person={person} offsetLeft={margin}/>
            <div className='person_page-wrpapper'>
                <AboutPerson person={person}/>
                <ProfileLink/>
            </div>
        </div>
    )
}

export default PersonPage