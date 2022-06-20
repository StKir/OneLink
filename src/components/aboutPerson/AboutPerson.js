import './aboutPerson.scss';

const AboutPerson = (props) => {
    const {about} = props.person;
    return (
        <div className='about_text'>
            <span>Информация:</span>
            <p className='about_text--txt'>{about}</p>
        </div>
    )
}
export default AboutPerson;