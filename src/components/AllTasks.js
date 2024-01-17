import React from 'react'
import "./AllTasks.css"
import data from '../data'

const AllTasks = () => {
    const tasksHandler = () => {
        console.log("klik");
    }

    

    return <div>
        {
            data.map((jednaUloha) => {
                const {id, name} = jednaUloha // toto je destructuring

                return <div className='one-task' key={id}>
                    <h4>{name}</h4>
                    <button onClick={tasksHandler}>vymazať</button>
                </div>
            })
        }
    </div>


}

export default AllTasks