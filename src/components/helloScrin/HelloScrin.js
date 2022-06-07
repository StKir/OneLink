import './HelloScrin.scss'
import '../../style/button.scss'
import Front from '../../resouces/img/Front-end.png'
import Back from '../../resouces/img/Back-end.png'
import Design from '../../resouces/img/design.png'
import Seo from '../../resouces/img/SEO.png'

const Hello = () => {
    return (
        <div className='Hello-wrp'>
            <h1 className='All_scill'>
            Все твои скилы теперь в одной ссылке!
            </h1>
            <div className='profes'>
                <div className='profes_item'>
                    <img src={Front} alt={Front} />
                    <span className='profes_title'>Front-end разработчики</span>
                </div>
                <div className='profes_item'>
                    <img src={Back} alt={Back} />
                    <span className='profes_title'>Back-end разработчики</span>
                </div>
                <div className='profes_item'>
                    <img src={Design} alt={Design} />
                    <span className='profes_title'>Дизайнеры</span>
                </div>
                <div className='profes_item'>
                    <img src={Seo} alt={Seo} />
                    <span className='profes_title'>SEO маркетологи</span>
                </div>
            </div>
            <div className='txt_paragraph'>
                <p className='helloTxt left'>Экономим время тем кто ищет сотрудников! Теперь все скилы и проекты кандидата доступны по одной ссылке!</p>
                <p className='helloTxt right'>Экономим время тем кто ищет работу, создайте портфолио и делитесь с работодателями всего одной ссылкой!</p>
            </div>
        </div>
    )
}

export default Hello;