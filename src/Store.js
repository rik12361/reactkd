import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './components/Disney/counterSlice'
import movieReducer from './components/Disney/moviesSlice'
import userReducer from './components/Disney/userSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    movie: movieReducer,
    user: userReducer,
  }
})
