import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchNotes } from '../redux/actions/notes';
import Note from './Note'

export default function AllNotes({ toggle, setToggle }) {

  const dispatch = useDispatch();


  React.useEffect(() => {
    dispatch(fetchNotes())
  }, [dispatch, toggle])


  const { notes, loading } = useSelector(state => state.notes);


  return (
    <>
      <h3><strong>All Notes</strong></h3>
      {
        loading && (
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">
            <div className="d-flex align-items-center gap-2">
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <h5 className='p-0 m-0'>Loading...</h5>
            </div>
          </div>
        )
      }
      {
        notes?.docs?.length === 0 && !loading && (
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">
            <div class="alert alert-primary" role="alert">
              No Notes Found
            </div>
          </div>
        )
      }
      <div className="row">
        {
          notes?.docs?.map((e) => (
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6" key={e?.id}>
              <Note data={e} key={e?.id} setToggle={setToggle} />
            </div>
          ))
        }
      </div>
    </>
  )
}
