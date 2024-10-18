import { configureStore } from "@reduxjs/toolkit";
import habitReducer from '../features/Habits/habit-slice'


export default configureStore({
    reducer: {
        // Define your reducers here
        habit: habitReducer,
    },
})