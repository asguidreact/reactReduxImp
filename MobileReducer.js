// Initial state

let initialState = {
    quantity: 100
}
 

//Reducer
// Define Reducer

const mobileReducer = (state = initialState, action) => {
    console.log('reducer function ' + JSON.stringify(state))
    if (state.quantity > 0) {
        switch (action.type) {
            case 'BUY_MOBILE':
                return {
                    ...state,
                    quantity: state.quantity - 1
                }
            default:
                return state;
        }
    } else {
        return state;
    }
}
export default mobileReducer;
