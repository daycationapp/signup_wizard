// ------------------------------------
// Constants
// ------------------------------------
const SAVE_DAY_PASSES = 'SAVE_DAY_PASSES';

// ------------------------------------
// Action Handlers
// ------------------------------------
export function saveDayPasses(dayPasses) {
    return {
        type: SAVE_DAY_PASSES,
        dayPasses
    }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {}
export default function dayPassesReducer (state = initialState, action) {
    switch (action.type) {
        case SAVE_DAY_PASSES:
            return Object.assign({}, state, {...action.dayPasses});
        default:
            return state;
    }
}
