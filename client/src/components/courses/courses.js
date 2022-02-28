import React, {useState, useEffect} from 'react';
import {Card, Button, Modal} from 'react-bootstrap';
// import { courseslist } from './list';
import { useDispatch, useSelector } from "react-redux"
import {getAllTraining} from '../../redux/action/action'
import Calender from '../profile/calender/calender'



function Courses() {
    // imported for the form group
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)


  const dispatch=useDispatch()
  //what are excatly trainings that are being map??
  const trainings = useSelector((state) => state.contactReducer.Training)
  // where to put the following:
  useEffect(()=>{ dispatch(getAllTraining())},[])

  return ( <div>
 <div class="image-offer">
  <div class="text-offer">OUR COURSES</div> </div>
  <div  className="allcourses">  
  <div className="introcourses">

<p> Gosports is a series of gyms covering up to 2500m² spaces with their indoor and outdoor layout.

Our gyns are rich in the latest Technogym equipment, enhanced with committed coaches who listen to you and provided with professional classes that are intensely beneficial.

Our gym and our team invite you to experience a special daily routine with the mission of your well-being.</p>

    </div>
    
    <div  className='course'>
    {/* {courseslist.map((el, key) =>( <div> this is when i used to map the list in list.js */}
 {trainings.map((el, key) =>( <div>
<Card style={{ border:"success" , width: '18rem', height: '20rem'}}>
  <Card.Img className="cardimg" variant="top" src={el.image} style={{ width: '18rem' , height: '12rem'  }}/>
  <Card.Body>
    <Card.Title>{el.title}</Card.Title>
    <Card.Text>
    <h4>Time: {el.duration} min</h4>
<h5>Intencity: {el.intensity}</h5>
  {el.description}
  </Card.Text>
    {/* <Card.Text> <Link to={`/Details/${el.id}`}><Button variant="info">DETAILS</Button></Link></Card.Text> */}
  </Card.Body>
  <div className="btns">
<Button variant="light" onClick={handleShow}>Book</Button>
            </div>
            <Modal show={show} onHide={handleClose} className="modal">
        <Modal.Header closeButton>
            <Modal.Title>Book your course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
 <Calender />
    </Modal.Body>
        <Modal.Footer>
           
            <Button variant="info" >
            Save Changes
            </Button>
        </Modal.Footer>
        </Modal>
     
  </Card>
  </div>))}
</div>
</div>
  </div>);
}

export default Courses;
