import React from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import axios from 'axios'

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const WorkoutDetails = ({workout}) => {
  const {dispatch} = useWorkoutsContext()
  const handleClick = async () => {
    axios.delete("http://localhost:4000/api/workouts/" + workout._id)
      .then((res) => {
        dispatch({type: "DELETE_WORKOUT", payload: res.data})
      })
      .catch()
  }
  return (
    <div className="workout-details">
        <h4>{workout.title}</h4>
        <p><strong>Load (kg): </strong>{workout.load}</p>
        <p><strong>Reps (kg): </strong>{workout.reps}</p>
        <p>{formatDistanceToNow(new Date(workout.createdAt), {addSuffix: true})}</p>
        <span className='material-symbols-outlined' onClick={handleClick}>delete</span>
    </div>
  )
}

export default WorkoutDetails