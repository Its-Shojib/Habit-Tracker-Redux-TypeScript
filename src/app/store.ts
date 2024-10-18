import { configureStore } from "@reduxjs/toolkit";
import habitReducer from '../features/Habits/habit-slice'


const store =  configureStore({
    reducer: {
        // Define your reducers here
        habit: habitReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;
export default store;