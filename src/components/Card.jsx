import './Card.css'
function Card(props){
    return(
        <div className='card'>
            <div className="img-container">
                <img className='icon' src={props.icon} alt="icon" />
            </div>
            <div className="card-info">
                <p>Win Rate Calculator</p>
            </div>
        </div>
    )
}

export default Card