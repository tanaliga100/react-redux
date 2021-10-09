const reducer = (state = 100, action) => {
    switch(action.type) {
        case "deposit":
            return state + action.payload;
        case "withdraw":
            return state - action.payload;
        default:
            return state;
    }

}

export default reducer;

