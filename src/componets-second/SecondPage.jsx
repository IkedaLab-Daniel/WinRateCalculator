import React, {useState} from 'react';
import Kagura from '../assets/kagura.webp'
function SecondPage(){

    const [result, setResult] = useState("Please, input the details needed ~");
    const [currentWR, setCurrentWR] = useState();
    const [totalMatches, setTotalMatches] = useState();
    const [targetWR, setTargetWR] = useState();
    const [currentWins, setCurrentWins] = useState();
    const [winNeeded, setWinNeeded] = useState();
    const [buttonText, setButtonText] = useState('Ask Kagura!');
    const [count, setCount] = useState(0);
    function changeCurrentWR(event){
        setCurrentWR(event.target.value);
        setCount(0)
        setButtonText('Ask Kagura');
    }

    function changeTotalMatches(event){
        setTotalMatches(event.target.value);
        setCount(0)
        setButtonText('Ask Kagura');
    }

    function changeTargetWR(event){
        setTargetWR(event.target.value);
        setCount(0)
        setButtonText('Ask Kagura');
        
    }

    function calculate(){
        
            setCount(count + 1);
            if (count == 0 || count == 1){
                setButtonText('Continue...');
            } else {
                setButtonText('Reset');
            }
            /* Premilaries : Convert current WR to decimal */
            let WRpointer = currentWR / 100;
            console.log('WR pointer: ', WRpointer);
            

            /* Step 1: Calculate the current number of wins */
            setCurrentWins(WRpointer * totalMatches);
            console.log('Total Wins:',currentWins);

            /* Step 2: Set up the equation for the target win rate */
            let floatTargetWR = targetWR / 100;
            /* Step 3: Solve for Win Neede */
            setWinNeeded((floatTargetWR*totalMatches-currentWins)/(1-floatTargetWR));
            let finalResult = Math.ceil(winNeeded);
            console.log('Win Needed: ', finalResult);
            console.log('Count: ', count);

            if (count > 1){
                setResult(`Hmm, in order to get ${targetWR}% win rate, you have to win ${finalResult} more matches!`);
            } else if (count == 0){
                setResult('...');
            } else(
                setResult(`(Solved, click Continue ...)`)
            )
            
            if (count > 2){
                setCurrentWR('');
                setTotalMatches('');
                setTargetWR('');
                setResult('...');
                setButtonText('Ask Kagura')
            }
    }

    return(
        <div id="second-page">
            <div className="main-container">
                <div className="data-part">
                    <label htmlFor="CurrentWinRate">Curent Win Rate (%)</label><br></br>
                    <input typeof="numberInput"
                    placeholder="" 
                    onChange={changeCurrentWR}
                    value={currentWR}
                    name="CurrentWinRate"/>

                    <label htmlFor="TotalMatches">Total Matches</label><br></br>
                    <input typeof="numberInput" 
                    placeholder="" 
                    onChange={changeTotalMatches}
                    value={totalMatches}
                    name="TotalMatches"/>

                    <label htmlFor="TargetWinRate">Target WinRate (%)</label><br></br>
                    <input typeof="numberInput" 
                    placeholder=" " 
                    onChange={changeTargetWR}
                    value={targetWR}
                    name="TargetWinRate"/>

                    <button onClick={calculate}>{buttonText}</button>
                </div>
                <div className="result-part">
                    <h1></h1>
                    <p>{result}</p>
                    <img src={Kagura} alt="" />
                </div>
            </div>
        </div>
    )
}

export default SecondPage