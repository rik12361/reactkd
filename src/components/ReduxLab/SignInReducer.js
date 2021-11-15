const SignInReducer = (state = false, action) => {

    switch (action.type) {
        case 'SIGN_IN':
            state = true;
        case 'SIGN_OUT':
            state = false;
        default:
            return state;
    }
}
export const selectCounter = () => state.SignInReducer;
export default SignInReducer
