import React, { useState, useEffect } from 'react';
import Kagura from '../assets/kagura.webp';


function SecondPage() {
  const [state, setState] = useState({
    result: "Please, input the details needed ~",
    currentWR: '',
    totalMatches: '',
    targetWR: '',
    currentWins: 0,
    winNeeded: 0,
    buttonText: '...',
    count: 0,
    wrPointer: 0,
    floatTargetWR: 0,
    finalResult: 0,
    buttonDisable: true,
    buttonClass: "buttonDisable",
  });

    // Function to handle image download
    const handleDownload = () => {
      const link = document.createElement('a');
      link.href = Kagura;  // URL of the image to download
      link.download = 'kagura.webp';  // Name of the downloaded file
      document.body.appendChild(link);
      link.click();  // Trigger download
      document.body.removeChild(link);  // Clean up the link element
    };
  

  function changeCurrentWR(event) {
    setState(prevState => ({
      ...prevState,
      currentWR: event.target.value,
      count: 0,
    }));
  }

  function changeTotalMatches(event) {
    setState(prevState => ({
      ...prevState,
      totalMatches: event.target.value,
      count: 0,
    }));
  }

  function changeTargetWR(event) {
    setState(prevState => ({
      ...prevState,
      targetWR: event.target.value,
      count: 0,
    }));
  }

  useEffect(() => {
    const wrPointer = state.currentWR / 100;
    const floatTargetWR = state.targetWR / 100;
    const currentWins = wrPointer * state.totalMatches;

    const winNeeded = (floatTargetWR * state.totalMatches - currentWins) / (1 - floatTargetWR);
    const finalResult = Math.ceil(winNeeded);

    setState(prevState => ({
      ...prevState,
      wrPointer,
      floatTargetWR,
      currentWins,
      winNeeded,
      finalResult,
    }));

    if (state.currentWR === 'yz') {
      setState(prevState => ({
        ...prevState,
        result: 'Savage ni Brix'
      }));
    }

    if (state.currentWR == "" || state.totalMatches == "" || state.targetWR == ""){
      setState(prevState => ({
        ...prevState,
        buttonText: "...",
        buttonDisable: true,
        buttonClass: "buttonDisable",
      }))
    } else{
      setState(prevState => ({
        ...prevState,
        buttonText: "Ask Kagura!",
        buttonDisable: false,
        buttonClass: "buttonEnable",
      }))
    }

    if (state.targetWR > 100){
      setState(prevState => ({
        ...prevState,
        result: "You can't have more than 100% win rate!"
      }))
    }
  }, [state.currentWR, state.totalMatches, state.targetWR]);

  function calculate() {
    setState(prevState => {
      const newCount = prevState.count + 1;

      let newResult;
      if (prevState.finalResult < 0) {
        newResult = `You want to lower your winrate? If so, you need to lose ${(prevState.finalResult - prevState.finalResult * 2)} matches to get ${prevState.targetWR}% winrate!`;
      } else {
        newResult = `Hmm, in order to get ${prevState.targetWR}% win rate, you have to win ${prevState.finalResult} more matches!`;
      }

      let newState = {
        ...prevState,
        count: newCount,
        result: newResult,
      };

      if (newCount > 2) {
        newState = {
          ...newState,
          currentWR: '',
          totalMatches: '',
          targetWR: '',
          result: '...',
        };
      }

      return newState;
    });
  }

  return (
    <div id="second-page">
      <div className="main-container">
        <div className="data-part">
          <label htmlFor="CurrentWinRate">Curent Win Rate (%)</label><br />
          <input 
            type="number"
            placeholder=""
            onChange={changeCurrentWR}
            value={state.currentWR}
            name="CurrentWinRate" />

          <label htmlFor="TotalMatches">Total Matches</label><br />
          <input 
            type="number"
            placeholder=""
            onChange={changeTotalMatches}
            value={state.totalMatches}
            name="TotalMatches" />

          <label htmlFor="TargetWinRate">Target WinRate (%)</label><br />
          <input 
            type="number"
            placeholder=" "
            onChange={changeTargetWR}
            value={state.targetWR}
            name="TargetWinRate" />

          <button className={state.buttonClass} onClick={calculate} disabled={state.buttonDisable}>{state.buttonText}</button>
        </div>
        <div className="result-part">
          <h1></h1>
          <p>{state.result}</p>
          <img src={Kagura} onClick={handleDownload} alt="" />
        </div>
      </div>
    </div>
  );
}

export default SecondPage;
