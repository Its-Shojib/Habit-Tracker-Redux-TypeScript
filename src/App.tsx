import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { reset, incrementByAmmount } from './features/Habits/habit-slice';
import { Button } from '@mui/material';

function App() {
  const habit = useSelector(state => state.habit.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <Button
          onClick={() => dispatch(incrementByAmmount(10))}
          variant="text">Increment</Button>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(incrementByAmmount(10))}
        >
          Increment
        </button>
        <span>{habit}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(reset())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

export default App
