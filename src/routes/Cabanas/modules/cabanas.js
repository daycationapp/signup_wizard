// ------------------------------------
// Constants
// ------------------------------------
const SAVE_CABANAS = 'SAVE_CABANAS';

// ------------------------------------
// Action Handlers
// ------------------------------------
export function saveCabanas(cabanas) {
    return {
        type: SAVE_CABANAS,
        cabanas
    }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {}
export default function cabanasReducer (state = initialState, action) {
    switch (action.type) {
        case SAVE_CABANAS:
            return Object.assign({}, state, {...action.cabanas});
        default:
            return state;
    }
}
