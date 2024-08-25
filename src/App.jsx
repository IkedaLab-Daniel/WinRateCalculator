import MainPage from "./components/MainPage"
import FirstPage from "./componets-second/FirstPage"
import SecondPage from "./componets-second/SecondPage"
import Footer from "./componets-second/Footer"
import './App.css'

function App(){

  console.log('Welcome to the CONSOLE!\nFeel free to examine my codes.');
  console.log('Note: This is my first and solo project, so you have probably noticed that the button needs to be clicked 3 times in order for Kagura to get the answer, the reason for that is that the function and some variable declarations were quite fkkk-up. But, hey! It is working!!!');

  return(
    <> 
      <FirstPage />
      <SecondPage />
      {/*
      <Footer />
      */}
      <Footer />
      
    </>
  )
}

export default App