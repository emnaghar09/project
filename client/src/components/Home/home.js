import React from 'react';
import Top from './topsection'
import Card from './middlesectioncard'
import Middle from './middlesection'
import Low from './lowersection'
import {Container} from 'react-bootstrap';
// import {Button,  Container, } from 'react-bootstrap';
// import {Link} from 'react-router-dom'
// import image from '../products/images/allprdts.jpg'

function home() {
  return (<div>
  <div class="image-container">
  <div class="text">GOSPORTS</div>
</div>
<Top/>
      <Card/>
      <Middle/>
      <Low/>
   

{/* <Container>
<p className="granola">A healthy outside starts from the inside</p>
<img src={image} width='300' height='200'/>
<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGKoNgzVnsBRleycV8Y8239KXqg92DjZNhjA&usqp=CAU' width='300' height='50'/>
<Link to={"/Products"}><Button variant="info">VIEW PRODUCTS</Button></Link>
</Container>
*/}

<br></br>
</div>);
}

export default home;
