// ------------------------------------
// Constants
// ------------------------------------
const SAVE_AGREEMENT = 'SAVE_AGREEMENT';

// ------------------------------------
// Action Handlers
// ------------------------------------
export function saveAgreement(agreement) {
    return {
        type: SAVE_AGREEMENT,
        agreement
    }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {}
export default function agreementReducer (state = initialState, action) {
    switch (action.type) {
        case SAVE_AGREEMENT:
            return Object.assign({}, state, {...action.agreement});
        default:
            return state;
    }
}
