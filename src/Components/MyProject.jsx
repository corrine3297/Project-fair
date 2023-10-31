import React from 'react'
import AddProject from './AddProject'


function MyProject() {
    return (
        <>
            <div className='card shadow p-3'>
                <div className='d-flex'>
                    <h3 style={{ overflowY: 'hidden' }}>My Projects</h3>
                    <div className='ms-auto'>
                        <AddProject />
                    </div>
                    </div>
                    <div className='mt-4'>
                        <div className='border d-flex rounded p-2' style={{alignItems:'center'}}>
                            <h5>Projecr title</h5>
                            <div className='icon ms-auto'>
                                <button className='btn'>
                                <i className='fa-solid fa-pen-to-square fa-2x'> 
                                </i>
                                </button>

                                <button className='btn'>
                                <i className='fa-brands fa-github fa-2x'> 
                                </i>
                                </button>

                                <button className='btn'>
                                <i className='fa-solid fa-trash fa-2x'> 
                                </i>
                                </button>
                            </div>
                        </div>
                        <p className='text-danger fw-bolder fs-5'>No projects uploaded yet  </p>
                    </div>
                </div>
        </>
    )
}

export default MyProject