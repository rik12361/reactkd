import redux from 'react-redux'

import { createSlice } from '@reduxjs/toolkit'

    const initialState = {
      userName: '',
      userEmail: '',
      userPhoto: ''
    }

    const userSlice = createSlice({
        name: 'user',
        initialState,
        reducers: {
            setUserLogin: (state, action) => {
                // Redux Toolkit allows us to write "mutating" logic in reducers. It
                // doesn't actually mutate the state because it uses the Immer library,
                // which detects changes to a "draft state" and produces a brand new
                // immutable state based off those changes
                // console.log(action.payload);
                state.userName = action.payload.userName;
                state.userEmail = action.payload.userEmail;
                state.userPhoto = action.payload.userPhoto;
            },
            setSignOut: (state) => {
                state.userName = null
                state.userEmail = null
                state.userPhoto = null
            }
        } 
    })
    
  // Action creators are generated for each case reducer function
  export const { setUserLogin, setSignOut } = userSlice.actions
  
  export const selectUserName = (state) => state.user.userName;
  export const selectUserEmail = (state) => state.user.userEmail;
  export const selectUserPhoto = (state) => state.user.userPhoto;

  export default userSlice.reducer
