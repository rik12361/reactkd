import { createSlice } from '@reduxjs/toolkit'

export const dailyCardSlice = createSlice({

  name: 'dailyCard',
  initialState: {
    count: 0,
    dailyCards: [],
  },
  reducers: {
    mincrement: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.count += 10
      console.log(state.count)
      console.log(state.dailyCards)
    },
    mdecrement: state => {
      state.count -= 10
      console.log(state.count)
      console.log(state.dailyCards)
    },
    mincrementByAmount: (state, action) => {
      state.count += action.payload
    },
    initDailyCards: (state, action) => {
      state.dailyCards[0] = 'rik 1';
      state.dailyCards[1] = 'rik 2';
      console.log('cards');
      console.log(state.dailyCards);
      // console.log('cards');
    },
    setDailyCards: (state, action) => {
      state.dailyCards = action.payload;
      console.log('cards');
      console.log(state.dailyCards);
      // console.log('cards');
    }
  }
})

// Action creators are generated for each case reducer function
export const { mincrement, mdecrement, mincrementByAmount, setDailyCards,} = dailyCardSlice.actions
export const selectdailyCards = (state) => state.dailyCards;
export const selectCount = (state) => state.count;
export default dailyCardSlice.reducer 


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
export const fetchDailyCards = () => async (dispatch) => {
    console.log("fetching");
    var data = [];
    data = await fetch ('http://localhost:8080/dailycard').then(res => res.json());
    dispatch(setDailyCards(data));
  };

