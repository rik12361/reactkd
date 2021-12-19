const ArrayReducer = (state = ["rik", "aap"], action) => {
    switch(action.type) {
        case 'INIT_ARRAY':
            return ['aap', 'mies'];
        case 'UPD_ARRAY':
            // console.log(state);
            // var aap = state;
            // aap.push('noot');
            // console.log(aap);
            var statenew = state.map( x => x);
            statenew.push('noot');
            console.log(statenew);
            return statenew;
        default:
            return state;
    }
}
export const selectArray = (state) => state.ArrayReducer;

export default ArrayReducer