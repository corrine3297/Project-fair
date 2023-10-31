import React from 'react'
import Header from '../Components/Header'
import { Row ,Col} from 'react-bootstrap'
import ProjectCard from '../Components/ProjectCard'

function Projects() {
    return (
        <>
            <Header />
            <Row className='mb-5 w-100' style={{ marginTop: '100px' }}>
                <div className='d-flex justify-content-center align-items-center w-100'>
                    <div className='d-flex bordee w-50 rounded'>
                        <input type="text" className='form-control' placeholder='Search' />
                        <i style={{ marginLeft: '-50px' }} className="fa-solid fa-magnifying-glass fa-rotate-90"></i>
                    </div>
                </div>
            </Row>
            <Row className='mt-5 container-fluid'>
                <Col sm={12} md={6} lg={4}>

                    <ProjectCard />

                </Col>
            </Row>

        </>
    )
}

export default Projects