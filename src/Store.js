import { configureStore } from "@reduxjs/toolkit"
import movieReducer from "./components/Disney/features/MovieSlice";

// <movie>: <movie>Reducer
export const store = configureStore ({
    reducer: {
        movie: movieReducer
    },
});
