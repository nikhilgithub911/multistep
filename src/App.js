import './App.css';
import FirstStep from './Components/FirstStep';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import SecondStep from './Components/SecondStep';
import ThirdStep from './Components/ThirdStep';
import { useContext } from 'react';
import { multiStepContext } from './StepContext';

function App() {

  const{currentStep,finalData} = useContext(multiStepContext)
  function showStep(step){
    switch(step){
      case 1:
        return <FirstStep/>
      case 2:
        return <SecondStep/>  
      case 3:
        return <ThirdStep/>  
        // default:<FirstStep/>
    }
  }
  return (
    <div className="App">
      <header className='App-header'>
        <h3 style={{ color: 'red', textDecoration: 'underline' }}>
          Multi step
        </h3>
        <div className='center-stepper'>
          <Stepper style={{ width: "18%" }} activeStep={currentStep - 1} orientation="horizontal">
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
          </Stepper>
         
        </div>
        {showStep(currentStep)}
      </header>
    </div>
  );
}

export default App;
