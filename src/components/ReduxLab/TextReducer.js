const TextReducer = (state = '', action) => {
     switch  (action.type) {
          case 'SET_TEXT':
               console.log(action);
               console.log(action.payload);
               return action.payload;
          default:
               return state;              
     }
}
export const selectText = (state) => state.TextReducer;

export default TextReducer