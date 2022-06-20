import { useState } from 'react';
import './profileLink.scss';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const ProfileLink = () => {
    const [copied, setСopied] = useState(false);

    return (
        <div className='LinkPage'>
            <span className='legend'>Ссылка на страницу:</span>
            <span style={copied ? {"color": "#F48F32"} : null} className='link'>{window.location.href}</span>
             <CopyToClipboard text={window.location.href}
                onCopy={() => setСopied(true)}>
                    <button className='btn-copy'>Копировать</button>
            </CopyToClipboard>
        </div>
    )
}
export default ProfileLink;