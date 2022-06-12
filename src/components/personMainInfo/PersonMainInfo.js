import './PersonMainInfo.scss'

const PersonMainInfo = (props) => {
    const {name, salary, specialization, thumbnail, slogan, level, experience} = props.person
    return (
        <div className="main_info">
            <img className="thumbnail" src={thumbnail} alt={name}/>
            <div className="info_block">
                <h2>{name}</h2>
                <div className="btn_steck">
                    <div className="prof_spec">{specialization}</div>
                    <span>{level}</span>
                </div>
                <p className="slogan">
                    {slogan}
                </p>
            </div>
            <div className="exp_info">
                <div className='expAndSallary'>
                    Опыт
                    <span className='expAndSallary_info'>{experience ===0 ? '<1' : experience}г</span>
                </div>
                <div className='expAndSallary'>
                    З/П от
                    <span className='expAndSallary_info'>{salary}$</span>
                </div>
            </div>
        </div>
    )
}

export default PersonMainInfo;