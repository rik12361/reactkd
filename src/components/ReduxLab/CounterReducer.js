const CounterReducer = (state=9, action) => {
    switch (action.type) {
        case "MIN":
            return state - 1;
        case "PLUS":
            return state + 1;
        default:
            return state;
    }
}
export const selectCounter = (state) => state.CounterReducer;

export default CounterReducer