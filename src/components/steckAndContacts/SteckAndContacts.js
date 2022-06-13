import './steckAndContacts.scss'
import {iconArr, contactsIcon} from '../../resouces/steck-and-contacts'
import { useEffect, useState} from 'react';

const SteckAndContacts = (props) => {
    const {contacts, steck} = props.person;
    const iconImg = Object.keys(iconArr);
    const contactsImg = Object.keys(contactsIcon);
    const [steckList, setSteckList] = useState([])
    const [contactList, setContactList] = useState([]);

    useEffect(() => {
        setContactList(getArrayContacts())
        setSteckList(getArrayIcon(steck, iconImg))
    }, [steck, contacts])

    function getArrayContacts() {
        if(contacts){
            let copy = [];
            const contactList = Object.keys(contacts);
            contactList.forEach(el => {
                contactsImg.forEach(item => {
                    if(el.includes(item)){
                        copy.push([[contacts[el]], [item]])
                    }
                })
            })

            return copy
        }
    }

    function getArrayIcon(icons, keys) {
        let copy = []
        if(icons){
            icons.forEach((element) => {
                keys.forEach(item => {
                    if(element
                        .toLowerCase()
                        .includes(item
                            .toLowerCase())){
                                copy.push([[element], [item]])
                            }
                })
            });
        }
        return copy
    }

    function validateLinks(linkName, login) {
        const strLinkName = linkName[0];
        const strLogin = login[0];
        let response = null;
        switch (strLinkName)
        {
            case "mail":
                response = `https://mailto:${strLogin}`;
                // return `https://mailto:${strLogin}.com`;
                break;

            case "telegram":
                response = `https://t.me/${strLogin.slice(1)}`
                // return `https://t.me/${strLogin.slice(1)}`;
                break;
            case "vk":
                response = `https://vk.com/${strLogin}`
                break;
            case "github":
                response = `https://github.com/${strLogin}`
                break;
            default:
                response = '';

        }
        window.location.href = response;
    }

    function renderSteck(arr) {
        const arrayElement = arr.map((el, i) => {
            return(
                <div className='icons' key={i}>
                    <img src={iconArr[el[1]]} alt={el[1]} className="icon_img"/>
                    <span className='icon_name'>{el[0]}</span> 
                </div>
            )
            
        })
        return arrayElement
    }

    function renderContacts(arr) {
        const arrayElement = arr.map((el, i) => {
            return(
                <div className='icons link_icons'
                key={i}
                onClick={() => validateLinks(el[1], el[0])}>
                    <img src={contactsIcon[el[1]]} alt={el[1]} className="icon_img"/>
                    <span className='icon_name'>{el[0]}</span> 
                </div>
            )
            
        })
        return arrayElement
    }

    const steckElement = renderSteck(steckList);
    const contactElement = contactList ? renderContacts(contactList) : null
    return (
        <div className='sac_wrp'>
            <div className='icon_line'>
                <h4>Стек:</h4>
                <div className='icon_array'>
                    {steckElement.length > 0 ? (steckElement) : (<span>Стек не указан</span>)}
                </div>
            </div>
            <div className='icon_line icon_contacts_line'>
                <h4>Контакты:</h4>
                <div className='icon_array'>
                    {contactElement && contactElement.length > 0 ? (contactElement) : (<span>Контакты не указаны</span>)}
                </div>
            </div>
            <div className='contacts'></div>
        </div>
    )
}


export default SteckAndContacts;