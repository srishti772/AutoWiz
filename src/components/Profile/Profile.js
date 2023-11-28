import React from 'react'
import Navigation from '../Home/Navigation'
import Footer from '../Home/Footer'
import './Profile.css';
import '../Home/Home.css'
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link, Outlet } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Path from '../Path/Path';
import '../Search/Search.css';

function Profile() {
  const LocArray = [
    { link: '/profile', title: 'Account' },
  ];
  return (
   <>
   <div  className='sticky-top custom-navBar'>
    <Navigation/> 
    
    </div>
   <Row>

  
<Col lg={4}>
  
<div className="sticky-top pt-5">



<ListGroup className="sidebar" defaultActiveKey="#link1"  variant="flush">
  
<Path loc={LocArray}/>
<ListGroup.Item style={{backgroundColor:'var(--primary'}} className="listitem" >
        <b>UserName</b>
        <h6>srishti77@example.com</h6>
        <h6>555-555-555</h6>

      </ListGroup.Item>



      <ListGroup.Item  className="listitem" >
        Profile
      </ListGroup.Item>
      <ListGroup.Item className="listitem" >
      Password
      </ListGroup.Item>
      <Link to="wishlist">
      <ListGroup.Item className="listitem" action href="#" >
       Wishlist
      </ListGroup.Item>
      </Link>
      
      <Link to="mylisting">
      <ListGroup.Item className="listitem" action href="#1" >
       My Listing
      </ListGroup.Item>
      </Link>
      <ListGroup.Item  className="listitem" >
      Sign out
      </ListGroup.Item>
    </ListGroup>
    </div> 
   </Col>
        
        

<Col lg={7}>
  

<Outlet/>

</Col>
   </Row>
   
    <div style={{width:'100%', backgroundColor:'var(--primary)'}}>
<Footer/>
</div>
   
   </>
  )
}

export default Profile