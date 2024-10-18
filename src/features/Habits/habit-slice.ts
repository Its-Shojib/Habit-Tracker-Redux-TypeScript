import { createSlice } from '@reduxjs/toolkit';

export const habitSlice = createSlice({
    name: 'habit',
    initialState: { value: 0 },
    reducers: {
        increment: (state) => {
            state.value++;
        },
        decrement: (state) => {
            state.value--;
        },
        reset: (state) => {
            state.value = 0;
        },
        incrementByAmmount: (state, action) => {
            state.value += action.payload;
        }
    }
})

export const { increment, decrement, reset, incrementByAmmount } = habitSlice.actions;

export default habitSlice.reducer;