import React from 'react'
import { deleteNote } from '../services';
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

export default function Note({ data, setToggle }) {

    let navigate = useNavigate();

    const title = data?._document?.data?.value?.mapValue?.fields?.title?.stringValue;
    const desc = data?._document?.data?.value?.mapValue?.fields?.desc?.stringValue

    const handleDeleteNote = async () => {
        if (window.confirm("Are you sure you want to delete?") === true) {
            await deleteNote(data?.id)
            setToggle(current => !current);
            toast.success('Note Deleted');
        }
    }

    const handleEditNote = () => {
        navigate(`/edit/${data?.id}`)
    }

    return (
        <>
            <div className="card mb-3 mt-2">
                <div className="card-body">
                    <h5 className='m-0 p-1'><strong>{title}</strong></h5>
                    <p className='m-0 p-1'>{desc}</p>
                </div>
                <div className="card-body pt-0">
                    <div className="d-flex gap-2">
                        <button type="button" className="btn btn-light"  onClick={handleEditNote}><i className="fa-solid fa-pen-to-square"></i> Edit</button>
                        <button type="button" className="btn btn-danger" onClick={handleDeleteNote}><i className="fa-solid fa-trash"></i> Delete</button>
                    </div>
                </div>
            </div>
        </>
    )
}
