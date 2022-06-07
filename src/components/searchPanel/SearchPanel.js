import './searchPanel.scss';

const SearchPanel = () => {
    return (
        <div className='searchPanel_wrp'>
            <h2>
                Специалисты
            </h2>
            <div className='panel'>
                <input type="text" placeholder='Поиск' className='pnael_input'/>
                <button className='panel_button'>
                    Front-end
                </button>
                <button className='panel_button'>
                    Back-end 
                </button>
                <button className='panel_button'>
                    Дизайн
                </button>
                <button className='panel_button'>
                    SEO
                </button>
            </div>
        </div>
    )
}
export default SearchPanel