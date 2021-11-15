const BooleanReducer = (state = false, action) => {
    switch(action.type) {
        case 'TRUE':
            return true;
        case 'FALSE':
            return true;
        case 'TOGGLE':
            return !state;
    }
    return state;
}
export const selectBoolean = (state) => state.BooleanReducer;

export default BooleanReducer