import './searchPanel.scss';
import { useRef } from 'react';

const SearchPanel = (props) => {

    const {onUpdateProf, onUpdateTxt} = props;
    
    const onButtonClick = (value) => {
        onUpdateProf(value.dataset.value)
    }

    const itemsRefs = useRef([]);

    const onAddClassSelected = (e) => {
        itemsRefs.current.forEach(el => {
            el.classList.remove('clicked')
            e.currentTarget.classList.add('clicked');
            e.currentTarget.focus();
        });
    } 
    
    return (
        <div className='searchPanel_wrp'>
            <h2>
                Специалисты
            </h2>
            <div className='panel'>
                <input type="text" placeholder='Поиск' className='pnael_input' onChange={e => {onUpdateTxt(e.target.value)}}/>
                <button 
                className="panel_button clicked all"
                data-value=""
                ref={(el) => itemsRefs.current[0] = el}
                onClick={(e) => {onButtonClick(e.target);
                onAddClassSelected(e)}}>
                    Все
                </button>
                <button
                className='panel_button Front'
                data-value="Front-end"
                ref={(el) => itemsRefs.current[1] = el}
                onClick={(e) => {onButtonClick(e.target);
                    onAddClassSelected(e)}}>
                    Front-end
                </button>
                <button
                className='panel_button Back' 
                data-value="Back-end"
                ref={(el) => itemsRefs.current[2] = el}
                onClick={(e) => {onButtonClick(e.target);
                    onAddClassSelected(e)}}>
                    Back-end 
                </button>
                <button
                className='panel_button design'
                data-value="Дизайнер"
                ref={(el) => itemsRefs.current[3] = el}
                onClick={(e) => {onButtonClick(e.target);
                    onAddClassSelected(e)}}>
                    Дизайн
                </button>
                <button
                className='panel_button SEO'
                data-value="SEO"
                ref={(el) => itemsRefs.current[4] = el}
                onClick={(e) => {onButtonClick(e.target);
                    onAddClassSelected(e)}}>
                    SEO
                </button>
            </div>
        </div>
    )
}
export default SearchPanel