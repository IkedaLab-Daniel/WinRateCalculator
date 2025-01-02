import reactPNG from '../assets/react.png';

function Footer(){
    return(
        <footer>
            <div className="left-side">
                <p className="top">Made by:</p>
                <p className="name-white copy">&copy;</p>
                <p className="name-yellow">dev</p>
                <p className="name-white">.IceIce</p>  {/* Formerly devDaniel  */}

            </div> 
            
            {/* Links removed for now  */}
            <div className="right-side">
                <a className="emit-mobile" target="_blank" href=""></a><span></span>    
                <a className="emit-mobile" target="_blank" href=""></a><span></span>
                <a className="emit-mobile" target="_blank" href=""></a>
                <img src={reactPNG} alt="" />
                <p>React JS</p>
            </div>
            <p className='version'>Version 1.0.7</p>
        </footer>
    )
}

export default Footer
