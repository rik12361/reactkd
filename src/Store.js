import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './components/Disney/counterSlice'
import movieReducer from './components/Disney/moviesSlice'
import userReducer from './components/Disney/userSlice'
import dailyCardReducer from './components/Clubhouse/Slices/DailyCardSlice'
import ArrayReducer from './components/ReduxLab/ArrayReducer'
import SignInReducer from './components/ReduxLab/SignInReducer'
import TextReducer from './components/ReduxLab/TextReducer'
import CounterReducer from './components/ReduxLab/CounterReducer'
import BooleanReducer from './components/ReduxLab/BooleanReducer'

import { combineReducers } from 'redux';

export default configureStore({
  reducer: {
    counter: counterReducer,
    movie: movieReducer,
    user: userReducer,
    dailycards: dailyCardReducer,
    ArrayReducer: ArrayReducer,
    SignInReducer: SignInReducer,
    CounterReducer:CounterReducer,
    TextReducer:TextReducer,
    BooleanReducer:BooleanReducer,
  }
});

export const allLabReducers = combineReducers ({
  ArrayReducer: ArrayReducer,
  SignInReducer: SignInReducer,
  TextReducer:TextReducer,
  CounterReducer:CounterReducer,
  BooleanReducer:BooleanReducer,
});
