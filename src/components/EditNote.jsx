import React from 'react'
import card_image from '../static/card-image.png';
import toast from 'react-hot-toast';
import { useParams, useNavigate } from "react-router-dom";
import { getNoteById, updateNote } from '../services';

export default function EditNote({setToggle}) {
    
    const [title, setTitle] = React.useState("");
    const [desc, setDesc] = React.useState("");
    const [disabled, setDisabled] = React.useState(false);

    let params = useParams();
    let navigate = useNavigate();

    
    React.useEffect(()=> {
        const getDataFromApi = async ()=> {
            const data = await getNoteById(params.id);
            setTitle(data?._document?.data?.value?.mapValue?.fields?.title?.stringValue);
            setDesc(data?._document?.data?.value?.mapValue?.fields?.desc?.stringValue);
        }
        getDataFromApi();
    }, [params.id])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          setDisabled(true);
          await updateNote(params.id, { "title": title, "desc": desc });
          setDisabled(false);
          toast.success('Note Updated');
          setToggle(current => !current);
          navigate("/");
        } catch (error) {
          toast.error('Error');
          console.log(error);
        }
      }

      const goBackHandler = () => {
        navigate("/");
      }
    
      const EditNoteForm = () => (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="noteTitle" className="form-label">Title</label>
            <input key="password" type="text" className="form-control" id="noteTitle" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="noteDesc" className="form-label">Description</label>
            <textarea type="text" className="form-control" id="noteDesc" style={{height: "10rem"}} value={desc} onChange={(e) => setDesc(e.target.value)} />
          </div>
            <div className="d-flex gap-2">
            <button className="btn btn-secondary w-50" type='submit' disabled={disabled} onClick={goBackHandler}>Go Back</button>
            <button className="btn btn-primary w-50" type='submit' disabled={disabled}>Update Note</button>
            </div>
        </form>
      )


    return (
        <div className="card" style={{ width: "100%" }}>
            <div className="d-flex align-items-center justify-content-center">
                <img src={card_image} className="card-img-top p-4" alt="add note top graphic" style={{ height: '17rem', width: '18.5rem' }} />
            </div>
            <div className="card-body">
                <h5 className="card-title"><strong>Edit Note</strong></h5>
                {
                    EditNoteForm()
                }
            </div>
        </div>
    )
}
