import React from 'react';
import { Form } from 'react-bootstrap';


function Profile() {
    return (
        <>
            <div className='container rounded shadow m-2'>
                <div className='d-flex mt-3' style={{alignItems:'center',justifyContent:'space-between'}}>
                    <div className='text-dark fw-bolder fs-5'>My profile</div>
                    <div><button className='btn btn-outline-info'><i class="fa-solid fa-check"></i></button></div>
                </div>
                <div className='row justify-content-center mt-3'>
                    <label className='text-center'>
                        <input id="profile" style={{display:'none'}} type="file" />
                        <img width={'200px'} height={'200px'} src="https://www.vhv.rs/dpng/d/256-2569650_men-profile-icon-png-image-free-download-searchpng.png" alt="" />

                           </label>

                </div>
                <div className='mt-3 mb-2'>
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="username" />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="gitHub" />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="linkedin" />
                    </Form.Group>
                </div>
            </div>
        </>
    )
}

export default Profile