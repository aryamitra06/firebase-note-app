const initialState = {
    notes: [],
    loading: true,
    error: false
}

export default function notes(state = initialState, action) {
    switch (action.type) {
        case "GET_NOTES_REQUESTED":
            return {
                ...state, loading: true, error: false, notes: action.payload
            }
        case "GET_NOTES_SUCCESS":
            return {
                ...state, loading: false, error: false, notes: action.payload
            }
        case "GET_NOTES_ERROR":
            return {
                ...state, loading: false, error: true, notes: action.payload
            }
        default:
            return state;
    }
}