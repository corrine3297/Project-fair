import React from 'react'
import { Col, Row } from 'react-bootstrap'
import imgLanding from '../Assets/stock-vector-graphic-designer.jpg';
import ProjectCard from '../Components/ProjectCard';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <>
      {/* Landing page */}
      <div style={{ width: '100%', height: '100vh', backgroundColor: '#90ee90' }} className='container-fluid rounded'>
        <Row className='align-items-center p-5'>
          <Col sm={12} md={6}>
            <h1 style={{ fontSize: '80px', overflowY: 'hidden' }} className='fw-bolder text-align'>
              <i className='fa-brand fa-srack-overflow fa-bounce'> </i>
              Project Fair
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus nihil nemo autem tempore blanditiis sequi voluptatum sunt, maxime ea recusandae accusamus ab quam nam soluta asperiores quaerat. Commodi, unde consectetur!
            </p>
            <Link  to={'/login'} className='btn btn-warning'>
              view more
            </Link>
          </Col>
          <Col sm={6} md={6}>
            <img style={{ marginTop: '100px', width: '550px', height: '400px' }} src={imgLanding} alt="" />
          </Col>
        </Row>
      </div>
      {/* All project */}
      <div className='bg-light'>
        <h1 className="text-center mb-5 mt-5">Explore our Projects</h1>
        <marquee scrollAmount={25}>
          <div className='d-flex justify-content-between'>
            <div style={{ width: '500px' }}>
              <ProjectCard/>
            </div>
          </div>
        </marquee>
        <div className='text-center mt-5 mb-5'>
          <Link to={"/projects"}>View More Projects</Link>
        </div>
      </div>
    </>
  )
}

export default Home