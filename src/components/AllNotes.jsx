import React from 'react'
import { fetchNotes } from '../services';
import Note from './Note'

export default function AllNotes({toggle, setToggle}) {

  const [data, setData] = React.useState([]);

  React.useEffect(() => {

    const fetchApiData = async () => {
      const apiData = await fetchNotes();
      setData(apiData?.docs);
    }
    fetchApiData();
  }, [toggle])

  return (
    <>
      <h3><strong>All Notes</strong></h3>
      <div className="row">
        {
          data?.map((e) => (
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6" key={e?.id}>
              <Note data={e} key={e?.id} setToggle={setToggle}/>
            </div>
          ))
        }
      </div>
    </>
  )
}
