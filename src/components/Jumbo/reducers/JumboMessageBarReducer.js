const JumboMessageBarReducer = (state = true, action) => {
    switch(action.type) {
        case 'TRUE':
            return true;
        case 'FALSE':
            return false;
        case 'TOGGLE':
            return !state;
        case 'MSGSTATUS':
            return state;
        default:
            return state;
    }
}
export const selectJumboMessageBar = (state) => state.JumboMessageBarReducer;

export default JumboMessageBarReducer