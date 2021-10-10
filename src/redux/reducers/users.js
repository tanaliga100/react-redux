import { SET_USERS_INFO } from "../types";

const initialState = {
    info: {
        name: "Chris Martin",
        age: 21,
        gender: 'Male'
    }
}
const usersReducers = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_USERS_INFO:
            return {
                ...state,
                info: {
                    ...state.info,
                    ...action.payload
                }
            }
    
        default:
            return state;
    }
}


export default usersReducers;