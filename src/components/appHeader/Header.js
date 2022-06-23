import Logo from '../../resouces/img/logo.png';
import './header.scss'
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Link to={`/`} className='logo'>
                <img src={Logo} alt="Logo"/>
            </Link>
        </>
    )
}

export default Header