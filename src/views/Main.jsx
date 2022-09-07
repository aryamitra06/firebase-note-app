import React from 'react'
import AddNote from '../components/AddNote'
import AllNotes from '../components/AllNotes'

export default function Main({toggle, setToggle}) {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-4 col-xl-3 mt-3">
                        <AddNote setToggle={setToggle} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-8 col-xl-9 mt-3">
                        <AllNotes toggle={toggle} setToggle={setToggle}/>
                    </div>
                </div>
            </div>
        </>
    )
}
