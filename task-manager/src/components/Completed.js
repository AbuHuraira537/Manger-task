import React, { useState,useEffect } from 'react'
import '../StyleSheets/Home.css'
import AddIcon from '@material-ui/icons/Add';
import { AddTask, UpdateTask } from '../Redux/Task/TaskActions';
import { useSelector, useDispatch } from 'react-redux'
import Task from './Task';

function Completed() {
    const tasks = useSelector(state => state.Completed);
    const dispatch = useDispatch();
        

    useEffect(() => {
    }, [tasks])
    return (
        <div className="home">
            <div className="add_task">
                <form> 
                    
                    <div className="form">
                        <input type="text" className="input_task" id="name" placeholder={"My Completed Tasks ("+tasks.length+" )"} disabled />
                    </div>
                </form>
            </div>
            <div className="all_tasks">
                <div className="tasks">
                    {
                        tasks.map(t=>{
                            if(t.status==2){
            return <Task key={t.id} name={t.name} desc={t.desc} id={t.id} status={t.status}/>
                            }
                        
                    })
                    }
                   
                </div>

            </div>


        </div>

    )
}

export default Completed
