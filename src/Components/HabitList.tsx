import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from "../app/store"
import { Box, Paper } from '@mui/material';

const HabitList: React.FC = () => {

    // TODO: Implement fetching and displaying habits from the Redux store
    const habits = useSelector((state: RootState) => state.habit.habits)
    return (
        <div>
            {/* {
                habits.map(habit => (
                    
                ))
            } */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    mt: 4,
                    backgroundColor: '#f5f5f5',
                }}
            >
                {
                    habits.map((habit) => {
                        return <Paper key={habit.id} elevation={2} >
                            <h3>{habit.name}</h3>
                            <p>{habit.frequency}</p>
                            <p>Days completed: {habit.completedDates}</p>
                            <p>Last completed: {habit.createdAt}</p>
                        </Paper>
                    })
                }
            </Box>
        </div>
    );
};

export default HabitList;