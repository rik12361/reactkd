const SignInReducer = (state = false, action) => {

    switch (action.type) {
        case 'SIGN_IN':
            state = true;
            break;
        case 'SIGN_OUT':
            state = false;
            break;
        default:
            return state;
    }
}
export const selectCounter = (state) => state.SignInReducer;
export default SignInReducer
