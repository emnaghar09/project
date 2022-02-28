import React from 'react';
import logo from '../Capture.PNG'
import {Link} from 'react-router-dom'
import {Container} from 'react-bootstrap';


function middlesection() {
  return (<div>
 
  <div className="middlepart">
  <h1>
Sports for everyone
</h1>
<p>
We are a team of passionate people whose goal is to improve everyone's life through appropriate training methods.
</p>
</div>

<div className="middlepart2">
<h1 className="granola">did you know?</h1>
<p className='diduknow'> ⛹️ Exercise helps to improve your mood and decreases feelings of anxiety, depression, and stress. ⛹️
<br></br>😊 Playing sports stimulates changes in some parts of your brain that regulate anxiety and stress.😊
 <br></br>🎾 It increases brain sensitivity for norepinephrine and serotonin, which relieve depression.🎾
  <br></br>🏆 Also, playing sports stimulates the production of endorphins, known to trigger positive feelings. 🏆
  <br></br>🏀 In people suffering from anxiety, sunny health and fitness workout and sports reduces symptoms of anxiety.🏀 
  <br></br>🏅 It also helps people be more aware of their mental state.🏅
<br></br> 🤼 Generally, playing sports, especially for fun, will leave you happier.🤼

</p>
<Container>

<img src='https://st2.depositphotos.com/1310390/5389/v/600/depositphotos_53896945-stock-illustration-healthy-lifestyle-diet-and-fitness.jpg' width='400' height='400'/>
<div>
<p className="granola">A healthy outside starts from the inside</p>

</div>

<img src='https://i.fbcd.co/products/original/b512db5e73e8906f61d5624530513d08a2fdfa742910bee645bf3bd80991dc5a.jpg' width='500' height='400'/>
<br></br>
</Container>
<p className='diduknow'>Looking to get to or stay at a healthy weight? 

Both diet and physical activity play a critical role in maintaining a healthy body weight, losing excess body weight, or maintaining successful weight loss.</p>

<br></br>
</div>
<br></br>
<div className="middlepart">
<h1>
Why join GOSPORTS?
</h1>
<span> Every member gets a free, personalized Get Started Plan when they join. We offer personal training and classes when you’re here, and the right tools to keep you on track when you’re not.
You’re not just joining a gym. You’re joining a supportive community of like-minded people who are here to give you the encouragement you need. </span>
<Link to={"/Offers"} className='offerlink'>👀 SEE OUR OFFERS</Link>
</div>

</div>)
}

export default middlesection;
