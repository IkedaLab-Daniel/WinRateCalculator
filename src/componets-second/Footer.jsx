function Footer(){
    return(
        <footer>
            <div className="left-side">
                <p className="top">Made by:</p>
                <p className="name-white copy">&copy;</p>
                <p className="name-yellow">dev</p>
                <p className="name-white">Daniel</p>

            </div>
            <div className="right-side">
                <a className="emit-mobile" target="_blank" href="https://www.facebook.com/markdaniel.callejas.9">Facebook</a><span>|</span>
                <a className="emit-mobile" target="_blank" href="https://www.instagram.com/danieldaniel.dit/">Instagram</a><span>|</span>
                <a className="emit-mobile" target="_blank" href="https://www.benevolent-sunburst-33739d.netlify.app">Portfolio</a>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png" alt="" />
                <p>React JS</p>
            </div>
        </footer>
    )
}

export default Footer
