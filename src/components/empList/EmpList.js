import './empList.scss';
import data from '../../api/__apiPersonList'
import { useState, useEffect, useMemo } from 'react';

const EmpList = (props) => {
    const [personList, setPersonList] = useState([]);

    useEffect(() => {
        setPersonList(data.data.results)
    })

    function renderItems(arr) {
        const items = arr.map((item) => {
            if(item.name.toLowerCase().includes(props.searchTxt.toLowerCase())
            && item.specialization.includes(props.prof)){
                return (
                    <li className='empItem' key={item.id}>
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
                        <div className='line'></div>
                        <div className='expAndSallary'>
                            Опыт
                            <span className='expAndSallary_info'>{item.experience}г</span>
                        </div>
                        <div className='line'></div>
                        <div className='expAndSallary'>
                            З/П от
                            <span className='expAndSallary_info'>{item.salary}$</span>
                        </div>
                    </li>
                )
            }
        })
        return items
    }
    const items = renderItems(personList)
    return (
        <ul className='empList'>
            {items}
        </ul>
    )
}

export default EmpList;