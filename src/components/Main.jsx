import Card from "./Card";
import CalculatorIcon from './calculator.jpg';

function Main(){
    return(
        <div className="main">
            <div className="card-container">
                <Card icon={CalculatorIcon}/>
                <Card />
            </div>
        </div>
    )
}

export default Main