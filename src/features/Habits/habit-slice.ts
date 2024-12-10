import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';


export interface Habit {
    id: string;
    name: string;
    frequency: "daily" | "weekly";
    completedDates: string[];
    createdAt: string;
}
interface HabitState {
    habits: Habit[],
    isLoading: boolean,
    error: null | string,
}

const initialState: HabitState = {
    habits: [],
    isLoading: false,
    error: null,
};

export const fetchHabits = createAsyncThunk("habits/fetchHabits", async()=>{
    await new Promise((resolve)=>setTimeout(resolve, 1000));
    const mockHabits: Habit[] = [
        {
            id: Date.now().toString(),
            name: "Walk the dog",
            frequency: "daily",
            completedDates: [],
            createdAt: new Date().toISOString(),
        },
        {
            id: "43".toString(),
            name: "Read a book",
            frequency: "weekly",
            completedDates: [],
            createdAt: new Date().toISOString(),
        }
    ];
    return mockHabits;
})
export const habitSlice = createSlice({
    name: 'habits',
    initialState,
    reducers: {
        addHabit: (state, action: PayloadAction<{ name: string; frequency: "daily" | "weekly" }>) => {
            const newHabit: Habit = {
                id: Date.now().toString(),
                name: action.payload.name,
                frequency: action.payload.frequency,
                completedDates: [],
                createdAt: new Date().toISOString(),
            }
            state.habits.push(newHabit);
        },
        toggleHabit: (state, action: PayloadAction<{ id: string, date: string }>) => {
            const habit = state.habits.find((h) => h.id === action.payload.id)
            if (habit) {
                const index = habit.completedDates.indexOf(action.payload.date)
                if (index === -1) {
                    habit.completedDates.push(action.payload.date)
                } else {
                    habit.completedDates.splice(index, 1)
                }
            }
        },
        deleteHabit: (state, action: PayloadAction<{ id: string }>) => {
            state.habits = state.habits.filter((h) => h.id!== action.payload.id);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchHabits.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(fetchHabits.fulfilled, (state, action) => {
            state.habits = action.payload;
            state.isLoading = false;
        });
        builder.addCase(fetchHabits.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message || " failed to fetch habits";
        });
    }
})

export const { addHabit , toggleHabit, deleteHabit} = habitSlice.actions;

export default habitSlice.reducer;