import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchNotes } from '../../services/index'
function* fetchNote() {
    try{
        const notes = yield call(()=> fetchNotes())
        yield put({ type: 'GET_NOTES_SUCCESS', payload: notes })
    }
    catch(e){
        console.log(e);
        yield put({ type: 'GET_NOTES_ERROR', payload: null })
    }
}

function* noteSaga(){
    yield takeEvery('GET_NOTES_REQUESTED', fetchNote)
}

export default noteSaga;