import React, { useState, useEffect } from 'react';
import LatestCarsCards from '../CarCard/LatestCarsCards';
import { CarsCollection } from '../../data/CarsCollection';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Pagination from 'react-bootstrap/Pagination';
import Form from 'react-bootstrap/Form';
import './Search.css'; 
import { HeartFill, Heart, Trash3Fill, PencilFill, Pencil} from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import {  Link } from "react-router-dom";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Toast from 'react-bootstrap/Toast';
import Modal from 'react-bootstrap/Modal';

const itemsPerPage = 6;

function DisplayDataGrid({filters}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState('lowToHigh'); // 'lowToHigh', 'highToLow', or 'newest'
  const [carsToDisplay, setCarsToDisplay] = useState([]);
  const [toast,setToast] = useState(false);
  const [msg,setmsg] = useState('');
  const [variant,setVariant]=useState('');
  const [confirmDelete,setconfirmDelete]=useState(false);
  const [errorShow,seterrorShow]=useState(false);

  
  const [totalPages, setTotalPages] = useState([1]);



const savetowishlist = (car) =>{
  //TODO : database calls to save to wishlist
  //save the carid selected
  console.log("selected car is ", car.id);
/**if successfully saved
setToast(true);
setVariant('success');
setmsg('Added to wishlist');**/

//if not saved

setToast(true);
setVariant('danger');
setmsg('Please try again'); 


}

const getConfirmation = (car,index) =>{
  setconfirmDelete(true);

}

const deleteCar = (car,index) =>{
  //TODO : database calls to delete car from db
  //save the carid selected
  console.log("selected car to remove ", car.id);
  const updatedcars = [...carsToDisplay];
  updatedcars.splice(index,1);
  setCarsToDisplay(updatedcars); 
  //this is not updaing pagination, updating the db should refresh pages


/**if successfully deleted **/
setToast(true);
setVariant('success');
setmsg('deleted from database');
setconfirmDelete(false);

/**if issue occurs

setToast(true);
setVariant('danger');
setmsg('Please try again');  **/


}
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  
  useEffect(() => {
    let filteredCars =  Object.values(CarsCollection);
    // Filter by location
  if (filters.location) {
    filteredCars = filteredCars.filter((car) => car.location.city === filters.location);
  }

  // Filter by body types
  if (filters.bodyTypes && filters.bodyTypes.length > 0) {
    filteredCars = filteredCars.filter((car) => filters.bodyTypes.includes(car.bodyType));
  }

  // Filter by colors
  if (filters.colors && filters.colors.length > 0) {
    filteredCars = filteredCars.filter((car) => filters.colors.includes(car.color));
  }

  // Filter by condition
  if (filters.condition && filters.condition.length > 0) {
    filteredCars = filteredCars.filter((car) => filters.condition.includes(car.condition));
  }

  // Filter by fuel types
  if (filters.fuelTypes && filters.fuelTypes.length > 0) {
    filteredCars = filteredCars.filter((car) => filters.fuelTypes.includes(car.fuel));
  }

  // Filter by transmission
  if (filters.transmission && filters.transmission.length > 0) {
    filteredCars = filteredCars.filter((car) => filters.transmission.includes(car.transmission));
  }

  // Filter by year range
  if (filters.year && filters.year.from  ) {
    filteredCars = filteredCars.filter(
      (car) => car.year >= filters.year.from 
    );

   
    }

     // Filter by year range
  if (filters.year && filters.year.to  ) {
    filteredCars = filteredCars.filter(
      (car) => car.year <=  filters.year.to 
    );}
  
     // Apply sorting
     filteredCars.sort((a, b) => {
    if (sortOption === 'lowToHigh') {
      return a.price - b.price;
    } else if (sortOption === 'highToLow') {
      return b.price - a.price;
    } else if (sortOption === 'newest') {
      return b.id - a.id;
    }
    return 0;
  });
      
      const newTotalPages = Math.ceil(filteredCars.length / itemsPerPage);
      setTotalPages(newTotalPages);
      // Update current page based on the new total pages
      setCurrentPage(Math.min(currentPage, newTotalPages));

      if(currentPage === 0){
        setCurrentPage(1);
      }
    
      // Recalculate the range of cars to display based on the current page after filtering
      const newStartIndex = (currentPage-1) * itemsPerPage;
      const newEndIndex = newStartIndex + itemsPerPage;
    
      setCarsToDisplay(filteredCars.slice(newStartIndex, newEndIndex));
      console.log('filtered data', filteredCars);
      console.log('filts', filters);
      console.log('current Page:',currentPage, 'start:', newStartIndex, 'end:', newEndIndex);
  }, [filters, sortOption, currentPage, CarsCollection]); 

  return (

    <>
    <Toast   onClose={() => setToast(false)} bg={variant}  show={toast} delay={3000} autohide style={{position:'absolute', top:'7em'}}>
        <Toast.Body>{msg}</Toast.Body>
  </Toast>

  
  <Modal
        size="sm"
        show={confirmDelete}
        onHide={() => setconfirmDelete(false)}
        aria-labelledby="imageError"
        className="mt-5"      >
        <Modal.Header closeButton>
          <Modal.Title id="deleteerror">
          <p style={{fontSize:'0.5em',whiteSpace: 'pre-line'}}> Are you sure you want to delete?</p> 
          
          </Modal.Title>
        </Modal.Header>
        <Modal.Body><Button  onClick={deleteCar} className="me-2 action-button">
        Confirm
        </Button>
        <Toast   bg={'danger'} onClose={() => seterrorShow(false)} show={errorShow} delay={3000} autohide>
        <Toast.Body>Error Occured. Please try again</Toast.Body>
  </Toast>

        
        </Modal.Body>
      </Modal>


    <Form className='sort'>
        <Form.Group controlId="sortSelect">
        <Row>
        <Col md={3}><Form.Label>Sort by :</Form.Label></Col>
        <Col md={8}>
        <Form.Select className="custom-select mb-2"  onChange={handleSortChange} value={sortOption}>
          <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
            <option value="newest">Newest Listings</option>
                </Form.Select>

          


          </Col>
        
        </Row>  
          
        </Form.Group>
      </Form>
    <div>
      

      <Row>
        {carsToDisplay.map((car, index) => (
          <Col md={5} key={index} className="mb-3">
           
           <div className='actionButton'>



<OverlayTrigger
        placement="top"
        overlay={<Tooltip id="edit-tooltip">wishlist</Tooltip>}
      >
     <Button className='wishlist' onClick={()=>savetowishlist(car)}><HeartFill/></Button>

      </OverlayTrigger>

<OverlayTrigger
        placement="top"
        overlay={<Tooltip id="edit-tooltip">edit</Tooltip>}
      >
      <Link to='/view' state={{from:{details:car,edit:true}}}>
     <Button className='edit'><PencilFill/></Button></Link>

      </OverlayTrigger>

<OverlayTrigger
        placement="top"
        overlay={<Tooltip id="edit-tooltip">delete</Tooltip>}
      >
      <Button className='del'  onClick={()=>getConfirmation(car,index)}>
 <Trash3Fill/>
</Button>

      </OverlayTrigger>

</div>
<div style={{zIndex:'1'}}>

  <Link to='/view' state={{from:{details:car,edit:false}}}>
<LatestCarsCards
 key={car.id}
             item={car}
              view='grid'
              
            />
            </Link>

</div>
            
          </Col>
        ))}
      </Row>

      <Pagination className='pages'>
        {Array.from({ length: totalPages }).map((_, index) => (
          <Pagination.Item
            key={index}
            active={index + 1 === currentPage}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
    </>
  );
}

export default DisplayDataGrid;
