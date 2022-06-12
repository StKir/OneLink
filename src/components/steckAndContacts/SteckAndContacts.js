import './steckAndContacts.scss'
import iconArr from '../../resouces/steck-and-contacts'
import { useEffect, useState, useMemo } from 'react';

const SteckAndContacts = (props) => {
    const {contacts, steck} = props.person;
    const steckImg = Object.keys(iconArr);
    const [steckList, setSteckList] = useState([])


    function getArraySteck() {
        let copy = []
        if(steck){
            steck.forEach((element, i) => {
                steckImg.forEach(item => {
                    if(element
                        .toLowerCase()
                        .includes(item
                            .toLowerCase())){
                                copy.push([[element], [item]])
                            }
                })
            });
        }
        setSteckList(copy)
    }

    useEffect(() => {
        setSteckList(null)
        getArraySteck()
    }, [steck])

    function renderSteck(arr) {
        const arraySteck = arr.map((el, i) => {
            console.log(el);
            return(
                <div className='steck_icon'>
                    <img src={iconArr[el[1]]} alt={el[1]} className="steck_icon_icon"/>
                    <span className='icon_name'>{el[0]}</span> 
                </div>
            )
            
        })
        return arraySteck
    }
    console.log(steckList);
    const items = renderSteck(steckList)
    return (
        <div className='sac_wrp'>
            <div className='steck'>
                <h4>Стек:</h4>
                <div className='icon_array'>
                    {items}
                </div>
            </div>
            <div className='contacts'></div>
        </div>
    )
}


export default SteckAndContacts;