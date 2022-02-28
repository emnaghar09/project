import React, { useState } from "react";
import {Button} from 'react-bootstrap';
function Bmi() {
  const [height, setHeight] = useState(0);
  const [mass, setMass] = useState(0);
  const [bmi, setBmi] = useState(0);

  const calculate = (e) => {
    //e.preventDefault() to do client-side form submission.
    e.preventDefault();
       //put condiction on height and mass more than 0
    const formValid = +height > 0 && +mass > 0;
    //check if height and mass are valid values.
    if (!formValid) {
      return;
    }
    const bmi = +mass / (+height) ** 2;
    setBmi(bmi);
  };

  return (
    <div>
    <div className="bmi" style={{border: '1px solid black'}} >
    <h6>Fitness isn’t about building a better body. It’s about building a better life. </h6>
<br></br>
    <h5>CALCULATE YOUR BMI</h5>
    <br></br>
      <form onSubmit={calculate}>
      
        <div>
        
          <label>Height in meters</label>
          <div> <input value={height} onChange={(e) => setHeight(e.target.value)} /></div>
         
        </div>

        <div>
          <label>Mass in kg</label>
          <div>    <input value={mass} onChange={(e) => setMass(e.target.value)} /></div>
      
        </div>
        <br></br>
        <Button type="submit">calculate</Button>
      </form>
      <h6 >BMI: {bmi}</h6>

 <p> Based on your BMI you are : {bmi <18.5? <h6>Underweight</h6> : bmi >18.5 && bmi <24.5?<h6>Normal weight </h6>: bmi >24.5 && bmi <29.9?<h6>Overweight </h6>: <h6>Obesity</h6>} </p>
    </div>
    <br></br>
    </div>
  );
}
export default Bmi;