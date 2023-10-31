import React from 'react'
import { Link } from 'react-router-dom'
import loginimg from '../Assets/login/32.jpg';
import { Form } from 'react-bootstrap';


function Auth({ register }) {
    const isRegisterForm = register ? true : false
    return (
        <div className='d-flex justify-content-center align-items-center' style={{ width: '100%', height: '100vh' }}>
            <div className='w-75 contanier'>
                <Link to={'/'} style={{}}>

                </Link>
                <div className='card shadow p-5' style={{ backgroundColor: '#90ee90' }}>
                    <div className='row align-items-cneter'>
                        <div className='col-lg-6'>
                            <img className='rounded-start w-100' src={loginimg} alt="" />
                        </div>
                        <div className='col-lg-6'>
                            <div className='d-flex align-items-center flex-column'>
                                <h1 style={{ overflowY: 'hidden', color: 'white' }}> Project fair</h1>
                                <h5 className='fw-bolder mt-4 pb-3 text-light'>
                                    {
                                        isRegisterForm ? ' sign up to your account' : 'Sign in to your account'
                                    }
                                </h5>
                                <Form className='text-light w-100'>
                                    {
                                        isRegisterForm &&
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Control type="email" placeholder="username" />
                                        </Form.Group>
                                    }

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="password" placeholder="Enter " password />
                                    </Form.Group>
                                    {
                                        isRegisterForm ?
                                            <div className='d-flex align-items-center'>
                                                <button className='btn btn-light'style={{marginRight:'20px'}}>Register</button>
                                                <p className='mt-2'>Lorem ipsum dolor sit <Link to={'/login'}>Login</Link></p>
                                            </div> :
                                            <div className='d-flex align-items-center'>
                                                <button className='btn btn-light' style={{marginRight:'20px'}}>Register</button>
                                                <p className='mt-2 '>Lorem ipsum dolor sit <Link to={'/register'}>Register</Link></p>
                                            </div>
                                    }
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Auth