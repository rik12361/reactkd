import { createSlice } from '@reduxjs/toolkit'

export const movieSlice = createSlice({

  name: 'movie',
  initialState: {
    count: 99,
    movies: [],
    dailyCards: [],
  },
  reducers: {
    mincrement: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.count += 1
      console.log(state.count)
    },
    mdecrement: state => {
      state.count -= 1
      console.log(state.count)
    },
    mincrementByAmount: (state, action) => {
      state.count += action.payload
    },
    setmovies: (state, action) => {
      state.movies = action.payload;
      // console.log(state.movies);
    }
  }
})

// Action creators are generated for each case reducer function
export const { mincrement, mdecrement, mincrementByAmount, setmovies } = movieSlice.actions
export const selectmovies = (state) => state.movies;
export default movieSlice.reducer

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = amount => dispatch => {
  setTimeout(() => {
    dispatch(mincrementByAmount(amount));
  }, 1000);
};

// thunk function:
export const fetchTasks = () => async (dispatch) => {
    console.log("fetching");
    var data = [];
    data = await fetch ('http://localhost:8080/movie').then(res => res.json());
    dispatch(setmovies(data));
  };

