import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../app/store";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { CheckCircle, Delete } from "@mui/icons-material";
import {
  deleteHabit,
  fetchHabits,
  Habit,
  toggleHabit,
} from "../features/Habits/habit-slice";

const HabitList: React.FC = () => {
  const habits = useSelector((state: RootState) => state.habit.habits);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchHabits());
  }, [dispatch]);

  const today = new Date().toISOString().split("T")[0];

  const getStreak = (habit: Habit) => {
    const completedDates = [...habit.completedDates]; 
    let streak = 0;
    const today = new Date().toISOString().split("T")[0];

    while (completedDates.includes(today)) {
      streak++;
      completedDates.splice(completedDates.indexOf(today), 1);
    }

    return streak;
  };
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          mt: 4,
          backgroundColor: "#f5f5f5",
        }}
      >
        {habits.map((habit) => {
          return (
            <Paper key={habit.id} elevation={2} sx={{ p: 2 }}>
              <Grid container alignItems="center">
                <Grid>
                  <Typography variant="h5">{habit?.name}</Typography>
                  <Typography variant="h5" color="primary">
                    {habit?.frequency}
                  </Typography>
                </Grid>
                <Grid xs={12} sm={6}>
                  <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <Typography variant="h5">
                      Streak: {getStreak(habit)}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
              <Grid xs={12} sm={6}>
                <Box
                  sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}
                >
                  <Button
                    variant="outlined"
                    color={
                      habit.completedDates.includes(today)
                        ? "success"
                        : "primary"
                    }
                    startIcon={<CheckCircle />}
                    onClick={() =>
                      dispatch(toggleHabit({ id: habit.id, date: today }))
                    }
                  >
                    {habit.completedDates.includes(today)
                      ? "Completed"
                      : "Mark Completed"}
                  </Button>
                  <Button
                    variant="outlined"
                    color="warning"
                    startIcon={<Delete />}
                    onClick={() => dispatch(deleteHabit({ id: habit.id }))}
                  >
                    Remove
                  </Button>
                </Box>
              </Grid>
            </Paper>
          );
        })}
      </Box>
    </div>
  );
};

export default HabitList;
