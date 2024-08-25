import '../MainPage.css'
import Header from './Header'
import Main from './Main'

function MainPage(){
    return(
    <div className="main-page">
        <div className='header'>
            <Header />
        </div>
        
        <div className="main">
            <Main />
        </div>
    </div>
    )
}

export default MainPage