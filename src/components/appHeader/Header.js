import Logo from '../../resouces/img/logo.png';
import './header.scss'

const Header = () => {
    return (
        <>
            <a href="#" className='logo'>
                <img src={Logo} alt="Logo"/>
            </a>
        </>
    )
}

export default Header