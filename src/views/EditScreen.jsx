import React from 'react'
import EditNote from '../components/EditNote'

export default function EditScreen({setToggle}) {

  return (
    <div className='container mt-5'>
      <div className="row d-flex justify-content-center">
        <div className="col-col-10-col-sm-10 col-md-8 col-lg-8 col-xl-8">
          <EditNote setToggle={setToggle}/>
        </div>
      </div>
    </div>
  )
}
