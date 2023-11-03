import React, {useState} from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import axios from 'axios'

const WorkoutForm = () => {
    const {dispatch} = useWorkoutsContext()
    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const workout = {title, load, reps}

        axios.post("http://localhost:4000/api/workouts", workout)
            .then((res) => {
                setTitle('')
                setLoad('')
                setReps('')
                console.log('new workout added', res.data);
                dispatch({type:'CREATE_WORKOUT', payload: res.data})
            })
            .catch((error) => {
                setError(error.response.data.err)
            })
    }

  return (
    <form className="create" onSubmit={handleSubmit}>
        <h3>Add a New Workout</h3>

        <label>Excersize Title:</label>
        <input 
            type="text"
            onChange={((e) => setTitle(e.target.value))}    
            value={title}
        />
        
        <label>Load (in kg):</label>
        <input 
            type="number"
            onChange={((e) => setLoad(e.target.value))}    
            value={load}
        />
        
        <label>Reps:</label>
        <input 
            type="number"
            onChange={((e) => setReps(e.target.value))}    
            value={reps}
        />

        <button>Add workout</button>
        {error && <div className='error'>{error}</div>}
    </form>
  )
}

export default WorkoutForm