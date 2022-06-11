import { useParams, Link, useMatch} from 'react-router-dom';

const PersonPage = () => {
    const userid = useParams();
    console.log(userid.userid);
    return (
        <>
        <h1>///</h1>
        </>
    )
}

export default PersonPage