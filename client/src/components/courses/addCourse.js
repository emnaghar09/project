import React, { useState }  from 'react';
import {Form, Button} from 'react-bootstrap'
import {useDispatch} from "react-redux"
import {addTraining} from '../../redux/action/action'

function AddCourse() {

  const [title,setTitle]=useState('')
  const [description,setDescription]=useState('')
  const [day,setDay]=useState('')
  const [duration,setDuration]=useState('')
  const [intencity,setIntencity]=useState('')
  const dispatch =useDispatch();
  const submitaddedtraining = () =>{
    dispatch(addTraining({title, description, day, duration,  intencity}))
  }
  return (
<div>
<div >
<div className='courseaddedtitle'>
<h3> Add new training </h3>
<Form.Label htmlFor="inputPassword5">Training course title</Form.Label>
      <Form.Control    type="text"   id="Training title" onChange={(e)=>setTitle(e.target.value)} />
      <br></br>
      <Form.Label htmlFor="inputPassword5">Description</Form.Label>
      <Form.Control    type="text"   id="Description"  onChange={(e)=>setDescription(e.target.value)}/>
</div> 
<br></br>
<div className='courseAddedChoice'>
    <Form.Select onChange={(e)=>setDay(e.target.value)} aria-label="Default select example">
    <option>DAY</option>
    <option value={'Monday'}>Monday</option>
    <option value={'Tuesday'}>Tuesday</option>
    <option value={'Wednesday'}>Wednesday</option>
    <option value={'Thursday'}>Thursday</option>
    <option value={'Friday'}>Friday</option>
    <option value={'Saturday'}>Saturday</option>
    <option value={'Sunday'}>Sunday</option>
  </Form.Select>
  <br></br>
  <Form.Select onChange={(e)=>setIntencity(e.target.value)} aria-label="Default select example">
  <option>Intensity</option>
  <option value={"High"}>High</option>
  <option value={"Medium-high"}>medium-high</option>
  <option value={"Moderate"}>moderate</option>
</Form.Select>
<br></br>
  <Form.Select onChange={(e)=>setDuration(e.target.value)} aria-label="Default select example">
  <option>Duration</option>
  <option value={"30 min"}>30 min</option>
  <option value={"45 min"}>45 min</option>
  <option value={"60 min"}>60 min</option>
</Form.Select>
   <br></br> 
    </div>
    <Button onClick={submitaddedtraining}>Submit</Button>
    </div>
    </div>
  )
}

export default AddCourse



{/* <Form.Select aria-label="Default select example">
  <option>COURSE</option>
  <option value="BODY ATTAQUE">BODY ATTAQUE</option>
  <option value="RPM">RPM</option>
  <option value="GRIT">GRIT</option>
  <option value="AQUADYNAMIC">AQUADYNAMIC</option>
</Form.Select> */}