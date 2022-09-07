import React from 'react'
import { createNote } from '../services';
import card_image from '../static/card-image.png';
import toast from 'react-hot-toast';

export default function AddNote({setToggle}) {

  const [title, setTitle] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [disabled, setDisabled] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log({ "title": title, "desc": desc })
    try {
      setDisabled(true);
      await createNote({ "title": title, "desc": desc });
      setTitle("");
      setDesc("");
      setDisabled(false);
      toast.success('Note Saved');
      setToggle(current => !current);
    } catch (error) {
      toast.error('Error');
      console.log(error);
    }
  }

  const AddNoteForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="noteTitle" className="form-label">Title</label>
        <input key="password" type="text" className="form-control" id="noteTitle" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className="mb-3">
        <label htmlFor="noteDesc" className="form-label">Description</label>
        <textarea type="text" className="form-control" id="noteDesc" style={{height: "10rem"}} value={desc} onChange={(e) => setDesc(e.target.value)} />
      </div>
        <button className="btn btn-primary w-100" type='submit' disabled={disabled}>Add Note</button>
    </form>
  )

  return (
    <>
      <div className="card" style={{ width: "100%" }}>
        <div className="d-flex align-items-center justify-content-center">
          <img src={card_image} className="card-img-top p-4" alt="add note top graphic" style={{ height: '17rem', width: '18.5rem' }} />
        </div>
        <div className="card-body">
          <h5 className="card-title"><strong>Add Note</strong></h5>
          {
            AddNoteForm()
          }
        </div>
      </div>
    </>
  )
}
