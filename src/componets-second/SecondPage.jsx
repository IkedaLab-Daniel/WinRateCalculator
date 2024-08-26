import React, {useState, useEffect} from 'react';
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

    /* v2 */

    const [wrPointer, setWrPointer] = useState(); 
    const [floatTargetWR, setFloatTargetWR] = useState();
    const [finalResult, setFinalResult] = useState();

    function changeCurrentWR(event){
        setCurrentWR(event.target.value);
        setCount(0)
        setButtonText('Ask Kagura');

        setWrPointer(w => currentWR/10); 

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

    useEffect(() => {
        setFloatTargetWR (targetWR / 100) 
        setCurrentWins(wrPointer * totalMatches);
        /* 
        console.log("Target WR: ", floatTargetWR);
        console.log("Total Matches: ", totalMatches);
        console.log("Current Wins: ", currentWins);
        console.log('*********************************');
        */
        console.log("Current WR: ", currentWR);
        setWinNeeded((floatTargetWR*totalMatches-currentWins)/(1-floatTargetWR));
        setFinalResult(sf => Math.ceil(winNeeded));
        
        /* Easter Egg */
        if (currentWR == 'yz'){
            setResult('Savage ni Brix');
        }
    });

    function calculate(){
            setCount(c => c + 1);

            setResult(`Hmm, in order to get ${targetWR}% win rate, you have to win ${finalResult} more matches!`);
            
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
