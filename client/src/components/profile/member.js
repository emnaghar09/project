import React from 'react'
import Chart from './chart/chart'
import Bmi from './BMI/BMI'
import {Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'



function memberProfile() {
  return (
    <div> 
    <div className="middlepart">
  <h1>
member name
</h1>
</div>

<br></br>
<h4> Your data for this month </h4>
    <div className="member-profile" >
{/* side cards and chart */}
<div className='member-middle'>
<Chart/>
{/* <img src='https://makeyourbodywork.com/wp-content/uploads/2018/02/calories-burned-walking.png' width='1000px'/> */}
<div className="member-card-side"> 

<Card style={{  width: '14rem' , height: '8rem', margin:'0.5rem' }}   >
  <Card.Body>
    <Card.Text>   <p> 7 GRIT sessions </p>   </Card.Text>
    <Card.Text style={{color: 'red'}}>    Burned calories per session: 345 kcal 🔥  </Card.Text>
  </Card.Body>
</Card>

<Card style={{  width: '14rem' , height: '8rem', margin:'0.5rem' }}  >
  <Card.Body>
  <Card.Text>   <p>10 body attack sessions </p>   </Card.Text>
  <Card.Text style={{color: 'red'}}>    Burned calories per session : 412 kcal 🔥  </Card.Text>
  </Card.Body>
</Card>

<Card style={{  width: '14rem' , height: '8rem', margin:'0.5rem' }}    >
  <Card.Body>
  <Card.Text>   <p>12 RPM sessions</p>     </Card.Text>
  <Card.Text style={{color: 'red'}} >    Burned calories per session: 327 kcal 🔥 </Card.Text>
  </Card.Body>
</Card>

<Card style={{  width: '14rem' , height: '8rem', margin:'0.5rem' }}  >
  <Card.Body>
  <Card.Text>   <p> 2 AQUADYNAMIC</p>     </Card.Text>
  <Card.Text style={{color: 'red'}} >    Burned calories per session: 200 kcal 🔥 </Card.Text>
  </Card.Body>
</Card>
</div>
  </div>
    </div>
     {/* top cards */}
<div className="member-card"> 
<Card style={{ width: '15rem' , height: '10rem', color:'white' }}    className='membercards'>
  <Card.Body>
    <Card.Title>45 passages</Card.Title>
    <Card.Text>
  
    <i class="fa-solid fa-calendar-check fa-5x"></i>
  

    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '15rem' , height: '10rem', color:'white' }}   className='membercards'>
  <Card.Body>
    <Card.Title>29 training sessions</Card.Title>
    <Card.Text>
    <i class="fa-solid fa-chart-pie fa-5x"></i>
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '15rem' , height: '10rem', color:'white' }}   className='membercards'>
  <Card.Body>
    <Card.Title>5673 kcal burned</Card.Title>
    <Card.Text>
    <i class="fa-solid fa-fire fa-5x"></i>
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '15rem' , height: '10rem', color:'white' }}  className='membercards'>
  <Card.Body>
    <Card.Title> -8.9 kg</Card.Title>
    <Card.Text>

    <i class="fa-solid fa-weight-scale fa-5x"></i>
    </Card.Text>
  </Card.Body>
</Card>

  </div>


    <div>
    <br></br>
    <p className="granola">You’re only one workout away from a good mood.</p>
<Button> 🎯<Link to={"/Courses"} className='offerlink'>book your next training session </Link> 🎯</Button>
<br></br>
<br></br>
<Bmi/>
</div>
    </div>
  )
}

export default memberProfile