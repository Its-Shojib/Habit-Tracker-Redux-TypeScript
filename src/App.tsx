import './App.css'
import { Container, Typography } from '@mui/material';
import AddHabitForm from './Components/AddHabitForm';
import HabitList from './Components/HabitList';

function App() {

  return (
    <Container maxWidth='md'>
      <Typography component='h2' variant='h3' align='center' >
        Habit Tracker!
      </Typography>

      <AddHabitForm />
      <HabitList />
    </Container>
  )
}

export default App
