import React, {useEffect, useState} from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import axios from 'axios'

import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'

const Home = () => {
    const {workouts, dispatch} = useWorkoutsContext()

    useEffect(() => {
        axios.get('http://localhost:4000/api/workouts')
            .then((res) => {
                dispatch({type:'SET_WORKOUTS', payload: res.data})
            })
    }, [])

  return (
    <div className='home'>
        <div className="workouts">
            {workouts && workouts.map((workout) => (
                <WorkoutDetails key={workout._id} workout={workout} />
            ))}
        </div>
        <WorkoutForm />
    </div>
  )
}

export default Home