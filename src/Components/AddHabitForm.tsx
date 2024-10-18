import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../app/store";
import { addHabit } from "../features/Habits/habit-slice";


const AddHabitForm: React.FC = () => {
    const [name, setName] = useState<string>("");
    const [frequency, setFrequency] = useState<"daily" | "weekly">("daily");

    const dispatch = useDispatch<AppDispatch>();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Add the new habit to the store
        if(name.trim()){
            dispatch(addHabit({
                name,
                frequency,
            }))
        }
        setName("");

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                    }}
                >
                    <TextField
                        label='Habit Name'
                        value={name}
                        placeholder="Enter Habit Name"
                        fullWidth
                        onChange={(e) => setName(e.target.value)}
                    />

                    <FormControl fullWidth>
                        <InputLabel>Frequency</InputLabel>
                        <Select
                            value={frequency}
                            onChange={(e) => setFrequency(e.target.value as "daily" | "weekly")}
                        >
                            <MenuItem value='daily'>Daily</MenuItem>
                            <MenuItem value='weekly'>Weekly</MenuItem>

                        </Select>
                    </FormControl>

                    <Button type='submit' variant="contained" color="primary">
                        Add Habit
                    </Button>
                </Box>
            </form>
        </div>
    );
};

export default AddHabitForm;