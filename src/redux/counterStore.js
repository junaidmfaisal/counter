import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./reduceSlice"

// define logic to create a store
const counterStore = configureStore({
    reducer:{
        counterReducer: counterSlice
    }
})

export default counterStore