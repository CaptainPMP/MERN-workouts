import React from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import axios from 'axios'

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
        <h1>{workout._id}</h1>
        <h4>{workout.title}</h4>
        <p><strong>Load (kg): </strong>{workout.load}</p>
        <p><strong>Reps (kg): </strong>{workout.reps}</p>
        <p>{workout.createdAt}</p>
        <span onClick={handleClick}>delete</span>
    </div>
  )
}

export default WorkoutDetails