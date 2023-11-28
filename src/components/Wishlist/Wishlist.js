import React, { useEffect, useState } from 'react'
import { CarsCollection } from '../../data/CarsCollection'
import LatestCarsCards from '../CarCard/LatestCarsCards'
import Col from 'react-bootstrap/Col'; 
import Row from 'react-bootstrap/Row'; 
import ListGroup from 'react-bootstrap/ListGroup';
import Pagination from 'react-bootstrap/Pagination';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { Button, OverlayTrigger } from 'react-bootstrap';
import { Trash3Fill } from 'react-bootstrap-icons';
import Tooltip from 'react-bootstrap/Tooltip';
import './Wishlist.css';
function Wishlist() {

  const itemsPerPage=6;
  const [currentPage, setCurrentPage] = useState(1);
  const [carsToDisplay, setCarsToDisplay] = useState([]);
  const [totalPages, setTotalPages] = useState([1]);

  const handleDelete = (car,index) =>{
    console.log(index);
    //TO DO: delete from db...refresh db
  }

  useEffect(() => {
    const filteredCars = CarsCollection.filter((car) => car.id < 5);

  
    const totalItems = filteredCars.length;
    const newTotalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex+itemsPerPage;
  
    setCurrentPage((prevPage) => Math.min(prevPage, newTotalPages));

    setCarsToDisplay(filteredCars.slice(startIndex, endIndex));
  
    setTotalPages(newTotalPages);
  }, [currentPage, CarsCollection]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


  return (
    <div>
      <br/>
      <div className='d-flex custom-title'> 
        <h1 style={{textAlign:'left',fontWeight:'800',color:'grey', display:'inline'}}>Wishlist &nbsp;</h1>
        <Badge className="custom-badge1">{CarsCollection.length}</Badge>  {/**TO DO: show current wishlist count, update when deletion happens**/}
       
        </div>
      
      
  
        <hr/>


<Row>

{carsToDisplay.map((car, index) => (

<>
<Row className='mb-4' >

<Col sm={1}>        <OverlayTrigger
        placement="top"
        overlay={<Tooltip id="edit-tooltip">remove from wishlist</Tooltip>}
      >
      <Button className='del' onClick={()=>handleDelete(car,index)} >
 <Trash3Fill/>
</Button>

      </OverlayTrigger>
      </Col>

  <Col>
<Link to='/view' state={{from:{details:car,edit:false}}}>
       <LatestCarsCards
       key={car.id}
         item={car}
         width='12em'
         view='list'
       />
        </Link>

        </Col>

       

      </Row>

      
     
      
      </>
     
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
  )
}

export default Wishlist