import React from 'react';
import image3 from './images/booster.png';
import image4 from './images/Compound.jpg';
import image5 from './images/fitness.jpg';
import image8 from './images/workout-timed.jpg';
import image9 from './images/exercice.png';
import image10 from './images/04run-gym-.jpg';

function lowersection() {
  return (<div>
  <div className="lowerimg" >


<img  className="lowimg" src={image3} width='350' height='200'/>
<img  className="lowimg" src={image4}  width='350' height='200'/>
<img   className="lowimg" src={image5} width='350' height='200' />

<img  className="lowimg" src={image9} width='350' height='200' />
 <img  className="lowimg" src={image8} width='350' height='200' />
 <img className="lowimg"  src={image10} width='350' height='200' />
</div>
<div className="middlepart">
<h1>
Such a pleasure!
</h1>
<span>Enjoy a pleasant setting, {"\n"} airy and air-conditioned spaces, state-of-the-art equipment and qualified coaches to supervise, motivate and support you. </span>
Gosports Gym is a fitness center that offers a variety of classes in a fitness area for adults, teens and children. You will find everything you need in our weight training and cardio training areas with quality equipment.
</div>




  </div>)
}

export default lowersection;
