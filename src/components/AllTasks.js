import React from 'react'
import "./AllTasks.css"
import data from '../data'

const AllTasks = () => {
    return <div>
        {
            data.map((jednaUloha) => {
                const {id, name} = jednaUloha // toto je destructuring

                return <div className='one-task'>
                    <h4>{name}</h4>
                </div>
            })
        }
    </div>


}

export default AllTasks