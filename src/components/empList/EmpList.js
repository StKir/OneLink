import './empList.scss';
import data from '../../api/__apiPersonList'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const EmpList = (props) => {
    const [personList, setPersonList] = useState([]);

    useEffect(() => {
        setPersonList(data.data.results)
    }, [])

    function renderItems(arr) {
        const items = arr.map((item) => {
            if(item.name.toLowerCase().includes(props.searchTxt.toLowerCase())
            && item.specialization.includes(props.prof)){
                return (
                    <li className='empItem' key={item.id}>
                        <Link to={`/${item.id}`}>
                            <div className='mainInfo'>
                                <img src={item.thumbnail} alt={item.name} />
                                <div className='mainInfo__title'>
                                    <h3>{item.name}</h3>
                                    <div className='mainInfo__title-prof'>
                                        <div className='prof-name'>{item.specialization}</div>
                                        <span className='prof-status'>{item.level}</span>
                                    </div>
                                </div>
                            </div>
                            <div className='line'></div>
                            <p className='about'>
                                {item.slogan}
                            </p>
                            <div className='expWrp'>
                                <div className='line'></div>
                                <div className='expAndSallary'>
                                    Опыт
                                    <span className='expAndSallary_info'>{item.experience ===0 ? '<1' : item.experience}г</span>
                                </div>
                                <div className='line'></div>
                                <div className='expAndSallary'>
                                    З/П от
                                    <span className='expAndSallary_info'>{item.salary}$</span>
                                </div>
                            </div>
                        </Link>
                    </li>
                )
            } else {
                return(null)
            }
        })
        return items
    }

    function errorMassage() {
        return(
            <div className='errorWrp'>
                <h1>Ничего не найдено(</h1>
            </div>
        )
    }

    const items = renderItems(personList).sort()

    const itemView = items[0] === null ? errorMassage() : items;
    return (
        <ul className='empList'>
            {itemView}
        </ul>
    )
}

export default EmpList;