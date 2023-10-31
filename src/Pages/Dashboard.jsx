import React from 'react'
import Header from '../Components/Header'
import { Col, Row } from 'react-bootstrap'
import MyProject from '../Components/MyProject'
import Profile from '../Components/Profile'
function Dashboard() {
  return (
    <>
      <Header isHeaderLogout />

      <Row style={{ marginTop: '100px', marginBottom: '100px' }} className='container-fluid'>
        <Col sm={12} md={8}>
          <h2 style={{overflowY:'hidden'}}> Welcome <span>User</span></h2>
          <MyProject />

        </Col>
        <Col sm={12} md={4}>
          <Profile />
        </Col>
      </Row>

    </>
  )
}

export default Dashboard