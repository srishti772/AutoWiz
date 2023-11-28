import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useLocation } from 'react-router-dom'
import './VieworEdit.css';
import Form from 'react-bootstrap/Form';
import Navigation from '../Home/Navigation'
import Footer from '../Home/Footer'
import Gallery from './Gallery';
import { PencilSquare, XCircleFill, SaveFill, GeoAltFill } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import { CarBody } from '../../data/CarBody';
import { ColorsData } from '../../data/ColorsData';
import { FuelTypes } from '../../data/FuelTypes';
import { Locations } from '../../data/Locations';
import { Transmission } from '../../data/Transmission';
import { ListingYear } from '../../data/ListingYear';
import { Engine } from '../../data/Engine';
import Accordion from 'react-bootstrap/Accordion';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Path from '../Path/Path';
import { ExteriorFeatures, InteriorFeatures, SafetyFeatures } from '../../data/Features';
import '../Search/Search.css'; 
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Modal from 'react-bootstrap/Modal';
import {Bookings} from '../../data/Bookings'

import Toast from 'react-bootstrap/Toast';

function VieworEdit() {
    const locationd = useLocation()
    const  from  = locationd.state;   
    let canEdit=from.from.edit;

  const [edit,setEdit] = useState(canEdit);
  
const [smShow, setSmShow] = useState(false);
const [bShow, setbShow] = useState(false);
const [cShow, setcShow] = useState(false);
const[msg,setmsg]=useState('');
const[action,setaction]=useState('');

  const [carData,setcarData] = useState(from.from.details);



  const[year,setyear]=useState(carData.year);
  const[mileage,setmileage]=useState(carData.mileage);
  const[bodyType,setbodyType]=useState(carData.bodyType);
  
  const[fueltype,setfueltype]=useState(carData.fueltype);
  const[price,setprice]=useState(carData.price);
  const[condition,setcondition]=useState(carData.condition);
  const[appointment,setappointment]=useState('');
  
  const[engine,setengine]=useState(carData.engine);
  const[transmission,settransmission]=useState(carData.transmission);
  const[status,setstatus]=useState(carData.status);
  const[color,setcolor]=useState(carData.color);
  const[VIN,setVIN]=useState(carData.VIN);
  const[location,setlocation]=useState(carData.location);
  const[name,setname]=useState(carData.name);
  const[exterior,setExterior]=useState(carData.exterior);
  const[interior,setInterior]=useState(carData.interior);
  const[safety,setSafety]=useState(carData.safety);
  const[images,setimages]=useState(carData.images);



console.log('edit',edit);

const getBookingDays = () =>{
  const carBookedDates = Bookings.filter(booking=>booking.carid==carData.id).map(booking => booking.date);
  console.log('getBookings',carBookedDates);
  console.log('getBookings',appointment);
  if(carBookedDates.includes(appointment)){
    console.error('already booked');
    setbShow(true);
  
  }
  else{
    
    setmsg(`review date, location and contact details for 
    ${carData.name}
     Date : ${appointment}
     Location : 
    ${carData.location.streetaddress}
    ${carData.location.city}, ${carData.location.state} - ${carData.location.zip}
    ${carData.location.country}`);
    setaction('appointment');
              setSmShow(true);
  }

}

const alreadyBooked = Bookings.filter(booking=>booking.carid==carData.id && booking.userid == '1'); //TODO: check for current user id and fetch this from db ?



const handleRemoveImage = (imageIndex) => {
  
  const updatedImages = [...images];
  updatedImages.splice(imageIndex, 1);
  setimages(updatedImages);



};

const confirmChange = () =>{
  switch(action){

    case 'cancel' : 
      setimages(carData.images);
      setEdit(false);
    setyear(carData.year);
    setmileage(carData.mileage);
    setbodyType(carData.bodyType);
    setfueltype(carData.fueltype);
    setengine(carData.engine);
    settransmission(carData.transmission);
    setcolor(carData.color);
    setVIN(carData.VIN);
    setlocation(carData.location);
    setname(carData.name);
    setExterior(carData.exterior);
    setInterior(carData.interior);
    setSafety(carData.safety);
    setstatus(carData.status);
    setSmShow(false);
    setmsg('');
    setaction('');
    break;

    case 'save' : 
    //TODO: add
    //API calls for backend team members

    //set the carData again after successful save using setCarData method
    setEdit(false);
  setSmShow(false);
  setmsg('');
  setaction('');     

    //if api data is not show some error using toast
    setcShow(true);


    
  break;

  case 'appointment':
    console.log('inside booking');
    //TODO: save data to booking table
    //setSmShow(false);
    //setmsg('');
    //setaction('');

    //if api data is not show some error using toast
    setcShow(true);
    break;


  default:break;
    
  }
 
  
}

const handleAddImage = (file) =>{
  console.log('FILEEE ',file);
  const imageUrl = URL.createObjectURL(file);
  const updatedImages = [...images,imageUrl];
 
  setimages(updatedImages);
  console.log('after adding image', images);

}

const handleConditionChange = (feature, type) => {
  switch (feature) {
    case 'exterior':
      setExterior((prevExterior) => {
        const updatedExterior = [...prevExterior];
        const typeIndex = updatedExterior.indexOf(type);

        if (typeIndex === -1) {
          updatedExterior.push(type);
        } else {
          updatedExterior.splice(typeIndex, 1);
        }

        return updatedExterior;
      });
      break;

    case 'interior':
      setInterior((prevInterior) => {
        const updatedInterior = [...prevInterior];
        const typeIndex = updatedInterior.indexOf(type);
          console.log('INTTT index',typeIndex)
          console.log('INTTT',updatedInterior)
        if (typeIndex === -1) {
          updatedInterior.push(type);
        } else {
          updatedInterior.splice(typeIndex, 1);
        }

        return updatedInterior;
      });
      break;

    case 'safety':
      setSafety((prevSafety) => {
        const updatedSafety = [...prevSafety];
        const typeIndex = updatedSafety.indexOf(type);

        if (typeIndex === -1) {
          updatedSafety.push(type);
        } else {
          updatedSafety.splice(typeIndex, 1);
        }

        return updatedSafety;
      });
      console.log('updatedSafety',safety);
      break;


    default:
      break;
  }
};
const LocArray = [
  { link: '/search', title: 'Catalogue' },
  { link: '/view', title: 'Details' }
];
  
  return (
    <>

    
<div  className='sticky-top custom-navBar'>
    <Navigation/> 
    
    </div>
 


 <div className="container" >


<div className="SearchPage">


<Path loc={LocArray}/>
<Row>
  <Col lg={8}> 
  <div className='d-flex ms-auto' style={{justifyContent:'left'}}>
  <Form.Group as={Row} className="mt-0 mb-0" controlId="formName">
    <Form.Control className={`text-${!edit}`} style={{backgroundColor:'transparent',marginLeft:'0.8em',fontWeight:'1200'}} value={name} onChange={(event)=>{setname(event.target.value)}} size="lg" type="text" readOnly={!edit} />
   
</Form.Group>
  </div>

  <div className='d-flex ms-auto' style={{justifyContent:'right'}}>
 

  {!edit &&  <OverlayTrigger
        placement="top"
        overlay={<Tooltip id="edit-tooltip">Edit</Tooltip>}
      ><Button className="edit" onClick={()=>{setEdit(true)}}><PencilSquare/></Button>

      </OverlayTrigger>}
 
 {edit && <><OverlayTrigger
        placement="top"
        overlay={<Tooltip id="edit-tooltip">cancel</Tooltip>}
      >
         <Button className='cancel' onClick={()=>{
         
setmsg('This will discard all the changes');
setaction('cancel');
          setSmShow(true);
          }}><XCircleFill/></Button>

      </OverlayTrigger>
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id="edit-tooltip">save</Tooltip>}
      >
         <Button className='save' onClick={()=>{
         
         setmsg('Are you sure you want to save these changes');
         setaction('save');
                   setSmShow(true);
                   }}><SaveFill/></Button>

      </OverlayTrigger></>}
      




  </div>
<Gallery carImg={images} edit={edit} onRemoveImage={handleRemoveImage} onAddImage={handleAddImage}/>

{/*Specifications*/}

<Row className="specifications">
  
<h2>Specifications</h2>
<hr/>
  <Col lg={5} style={{marginLeft:'0.9em'}}>
  

      <Form.Group as={Row} className="mt-0 mb-0"controlId="formManufacturingYear">
        <Form.Label className="label" size="sm" column sm="6">
          Manufacturing Year

        

        </Form.Label>
        <Col sm="6">
          <Form.Select className={`text-${!edit}`} size="sm" type="number"  disabled={!edit} value={year} onChange={(event)=>{setyear(event.value)}}>
                  
                  <option value="" disabled>
                    Select Year
                  </option>

                  {ListingYear.map((year) => (
                  
                  <option key={year} value={year}>
                          {year}
                        </option>                       
                    
                  ))}


                </Form.Select>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mt-0 mb-0" controlId="formMileage">
        <Form.Label className="label" size="sm" column sm="4">
          Mileage
        </Form.Label>
        <Form.Text className="label" column sm="2">
         (MPG)
        </Form.Text>
        <Col sm="6">
          <Form.Control className={`text-${!edit}`} size="sm" type="number" readOnly={!edit} value={mileage} onChange={(event)=>{setmileage(event.value)}} />
        </Col>
        
      </Form.Group>

      <Form.Group as={Row} className="mt-0 mb-0" controlId="formBodyType">
        <Form.Label className="label" size="sm" column sm="6">
          Body Type
        </Form.Label>
        <Col sm="6">
        <Form.Select className={`text-${!edit}`} size="sm"  disabled={!edit} value={bodyType} onChange={(event)=>{setbodyType(event.value)}}>
                  
                  <option value="" disabled>
                    Select Body Type
                  </option>

                  {CarBody.map((data) => (
                  
                  <option key={data} value={data}>
                          {data}
                        </option>                       
                    
                  ))}


                </Form.Select>
        </Col>
      </Form.Group>

    

      <Form.Group as={Row} className="mt-0 mb-0" controlId="formEngine">
        <Form.Label className="label" size="sm" column sm="6">
          Engine
        </Form.Label>
        <Col sm="6">
          <Form.Select className={`text-${!edit}`} size="sm"  disabled={!edit} value={engine} onChange={(event)=>{setengine(event.value)}}>
                  
                  <option value="" disabled>
                    Select Engine Type
                  </option>

                  {Engine.map((data) => (
                  
                  <option key={data} value={data}>
                          {data}
                        </option>                       
                    
                  ))}


                </Form.Select>
        </Col>
      </Form.Group>






      
  </Col>
  <Col lg={5} style={{marginLeft:'0.9em'}}>

    
  <Form.Group as={Row} className="mt-0 mb-0" controlId="formTransmission">
        <Form.Label className="label" size="sm" column sm="6">
          Transmission
        </Form.Label>
        <Col sm="6">
          <Form.Select className={`text-${!edit}`} size="sm"  disabled={!edit} value={transmission} onChange={(event)=>{settransmission(event.value)}}>
                  
                  <option value="" disabled>
                    Select Engine Type
                  </option>

                  {Transmission.map((data) => (
                  
                  <option key={data} value={data}>
                          {data}
                        </option>                       
                    
                  ))}


                </Form.Select>
        </Col>
      </Form.Group>

  <Form.Group as={Row} className="mt-0 mb-0" controlId="formFuelType">
        <Form.Label className="label" size="sm" column sm="6">
          Fuel Type
        </Form.Label>
        <Col sm="6">
        <Form.Select className={`text-${!edit}`} size="sm"  disabled={!edit} value={fueltype} onChange={(event)=>{setfueltype(event.value)}}>
                  
                  <option value="" disabled>
                    Select Engine Type
                  </option>

                  {FuelTypes.map((data) => (
                  
                  <option key={data} value={data}>
                          {data}
                        </option>                       
                    
                  ))}


                </Form.Select>
        </Col>
      </Form.Group>

  

      <Form.Group as={Row} className="mt-0 mb-0" controlId="formExteriorColor">
        <Form.Label className="label" size="sm" column sm="6">
          Color
        </Form.Label>
        <Col sm="6">
        <Form.Select className={`text-${!edit}`} size="sm"  disabled={!edit} value={color} onChange={(event)=>{setcolor(event.value)}}>
                  
                  <option value="" disabled>
                    Select Engine Type
                  </option>

                  {ColorsData.map((data) => (
                  
                  <option key={data} value={data}>
                          {data}
                        </option>                       
                    
                  ))}


                </Form.Select>
        </Col>
      </Form.Group>

     
      <Form.Group as={Row} className="mt-0 mb-0" controlId="formVIN">
        <Form.Label className="label" size="sm" column sm="6">
          VIN
        </Form.Label>
        <Col sm="6">
          <Form.Control className={`text-${!edit}`} value={VIN} onChange={(event)=>{setVIN(event.target.value)}} size="sm" type="text" readOnly={!edit} />
        </Col>
      </Form.Group>
      <br />
  </Col>
</Row>

      <br />
      <br />
<Row>
  <Col>
  <h2>Features</h2>
  <Accordion defaultActiveKey={['0','1','2']} alwaysOpen className="custom-accordion">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Exterior</Accordion.Header>
        <Accordion.Body>
  {edit ? (
      <Form.Group className="d-flex flex-wrap custom-featuresList">
      {ExteriorFeatures.map((type) => (
        <Form.Check
        column
        className="flex-item"
          key={type}
          type='checkbox'
          id={type}
          label={type}
          checked={exterior.includes(type)}
          onChange={() => handleConditionChange('exterior',type)}
        />
      ))}
      </Form.Group>
  ) : (
    <ul className="d-flex flex-wrap custom-featuresList">
      {exterior.map((value, index) => (
        <li  className="flex-item" key={index}>{value}</li>
      ))}
    </ul>
  )}
</Accordion.Body>

      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header >Interior</Accordion.Header>
        <Accordion.Body>
        {edit ? (
         <Form.Group className="d-flex flex-wrap custom-featuresList">
         {InteriorFeatures.map((type) => (
           <Form.Check
           column
           className="flex-item"
             key={type}
             type='checkbox'
             id={type}
             label={type}
             checked={interior.includes(type)}
             onChange={() => handleConditionChange('interior',type)}
           />
         ))}
         </Form.Group>
  ) : (
    <ul className="d-flex flex-wrap custom-featuresList">
      {interior.map((value, index) => (
        <li  className="flex-item" key={index}>{value}</li>
      ))}
    </ul>
  )}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Safety</Accordion.Header>
        <Accordion.Body>
          
        {edit ? (
          <Form.Group className="d-flex flex-wrap custom-featuresList">
    {SafetyFeatures.map((type) => (
      <Form.Check
      column
      className="flex-item"
        key={type}
        type='checkbox'
        id={type}
        label={type}
        checked={safety.includes(type)}
        onChange={() => handleConditionChange('safety',type)}
      />
    ))}
    </Form.Group>
  ) : (
    <ul className="d-flex flex-wrap custom-featuresList">
      {safety.map((value, index) => (
        <li key={index}  className="flex-item">{value}</li>
      ))}
    </ul>
  )}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  </Col>
</Row>


  
</Col>

 
    
    
    <Col lg={4} style={{padding:'2em'}}>

        <div className="sticky-top pt-5">
        
      <Col className="locationdetails">
        <Row>
        <Col sm="6">

        <FloatingLabel controlId="statusSelect" label="status">
<Form.Select size="md" type="text" className={`text-${!edit}`}  disabled={!edit} value={status} onChange={(event)=>{setstatus(event.value)}}>
                  
                  <option value="Available" >
                  Available
                  </option>

                  <option value="Sold" >
                    Sold
                  </option>

                </Form.Select></FloatingLabel>

</Col>
<Col sm="6">

<FloatingLabel controlId="conditionSelect" label="condition">
<Form.Select className={`text-${!edit}`} size="md" type="text"  disabled={!edit} value={condition} onChange={(event)=>{setcondition(event.value)}}>
                  
                  <option value="Used" >
                  Used
                  </option>

                  <option value="New" >
                    New
                  </option>



                </Form.Select></FloatingLabel>

</Col>

</Row>



<Row>

  

<Form.Group as={Row} className="mt-2 mb-0"controlId="formManufacturingYear">
        
        <Col lg={1}>
        <b style={{fontSize:'1.8em'}}>$</b>

        </Col>
        <Col>
        <Form.Control className={`text-${!edit}`} style={{marginTop:'-0.3em'}} size="lg" type="number" readOnly={!edit} value={price} onChange={(event)=>{setprice(event.value)}} />
             </Col>
      </Form.Group>

</Row>
                
<Row>
  <Col>
  <hr/>
  <GeoAltFill/>{carData.location.streetaddress} <br/>
        {carData.location.city}, {carData.location.state} - {carData.location.zip}<br/>
        {carData.location.country}
  </Col>

        
</Row>



</Col>

{edit?'':(

  
<Col className="mt-2 locationdetails">



{alreadyBooked.length >0 ?<>
  <h5>Your have a test drive scheduled for {alreadyBooked[0].date} </h5>

</> :<> <h3>Schedule a Test Drive</h3>
<i>Get Behind the Wheel – Reserve Your Spot Now</i>
<hr/>
<br/>
<Form>
<Form.Group as={Row} className="mt-2 mb-0"controlId="appointment">

<Form.Group as={Col} controlId="appointmentdate">
          <Form.Label>Date</Form.Label>
          <Form.Control className={`text-${!edit}`} size="md" value={appointment}  onChange={(event)=>{setappointment(event.target.value)}} type="date" required min= {new Date().toISOString().split('T')[0]} />
      
        </Form.Group>

       
        
        
      </Form.Group>

      <br/>

      <Button className="me-2 action-button" onClick={()=>{
         getBookingDays();

                   }}>Book Now</Button>
                     <Toast   bg={'danger'} onClose={() => setbShow(false)} show={bShow} delay={3000} autohide>
        <Toast.Body>This date is not available</Toast.Body>
  </Toast>

                  </Form></>
 }

</Col>
            
        
        
)}
        </div> 
      
    </Col>
    </Row>

    <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="imageError"
        className="mt-5"      >
        <Modal.Header closeButton>
          <Modal.Title id="imageError">
          <p style={{fontSize:'0.5em',whiteSpace: 'pre-line'}}> {msg} </p> 
          
          </Modal.Title>
        </Modal.Header>
        <Modal.Body><Button  onClick={confirmChange} className="me-2 action-button">
        Confirm
        </Button>
        <Toast   bg={'danger'} onClose={() => setcShow(false)} show={cShow} delay={3000} autohide>
        <Toast.Body>Error Occured. Please try again</Toast.Body>
  </Toast>

        
        </Modal.Body>
      </Modal>

</div>

</div>



    <div style={{width:'100%', backgroundColor:'var(--primary)'}}>
<Footer/>
</div>
      
      
</>
    
  
  );
}

export default VieworEdit;