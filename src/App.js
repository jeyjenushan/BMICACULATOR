
import { useState } from 'react';
import './App.css';

function App() {
const[height,setHeight]=useState("")
const[weight,setWeight]=useState("")
const[bmi,setBmi]=useState(null)
const[bmiStatus,setBmiStatus]=useState("")
const[errormessage,setErrorMessage]=useState("")

const calculateBMI=()=>{
  const isValidHeight=/^\d+$/.test(height)
  const isValidWeight=/^\d+$/.test(weight)

  if(isValidHeight && isValidWeight ){
    const heightInMeters=height/100;
    const bmiValue=weight/(heightInMeters*heightInMeters);
    setBmi(bmiValue.toFixed(2))
    if(bmi<18.5){
      setBmiStatus("Underweight")
    }
    else if(bmi>=18.5 && bmi<24.9){
      setBmiStatus("Normal weight")
    }
    else if(bmi>=24.9 && bmi<29.9){
      setBmiStatus("Normal weight")
    }
    else{
      setBmiStatus("Obesity")
    }
setErrorMessage("")
  }else{
    setBmi(null);
    setBmiStatus("")
    setErrorMessage("Please enter valid numeric values for height and weight.")
  }
}
function clearvalue(){
  setHeight("")
  setWeight("")
  setBmi(null)
  setBmiStatus("")
}



  return (
    <div className="bmi-calculator">
      <div className='box'></div>
<div className='data'>

  <h1>BMI Calculator</h1>
  {errormessage &&  
    (<p className='error'>{errormessage}</p>)
  }

  <div className='input-container'>
    <label htmlFor='height'>Height (cm):</label>
    <input type='text' id='height'
    onChange={(e)=>setHeight(e.target.value)}
    value={height}
    />
  </div>
  <div className='input-container'>
    <label htmlFor='weight'>Weight (kg):</label>
    <input type='text' id='weight'
        onChange={(e)=>setWeight(e.target.value)}
        value={weight}
    />
  </div>
  <button onClick={calculateBMI}>Calculate BMI</button>
  <button onClick={clearvalue}>Clear</button>
  
  { bmi!=null &&(
  <div className='result'>
  <p>Your BMI is: {bmi}</p>
  <p>Status: {bmiStatus}</p>
</div>)


  }

</div>
    </div>
  );
}

export default App;
