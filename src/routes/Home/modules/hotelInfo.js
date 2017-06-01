// ------------------------------------
// Constants
// ------------------------------------
const SAVE_HOTEL_INFO = 'SAVE_HOTEL_INFO';

// ------------------------------------
// Action Handlers
// ------------------------------------
export function saveHotelInfo(hotelInfo) {
    return {
        type: SAVE_HOTEL_INFO,
        hotelInfo
    }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {}
export default function hotelInfoReducer (state = initialState, action) {
    switch (action.type) {
        case SAVE_HOTEL_INFO:
            return Object.assign({}, state, {...action.hotelInfo});
        default:
            return state;
    }
}
