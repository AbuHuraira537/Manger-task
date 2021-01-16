import React, { useState,useEffect } from 'react'
import '../StyleSheets/Detail.css'
import { AddTask, UpdateTask } from '../Redux/Task/TaskActions';
import { useSelector, useDispatch } from 'react-redux'
import Task from './Task';
import UpdateIcon from '@material-ui/icons/Update';

function Completed() {
    const tasks = useSelector(state => state.Completed);
    const dispatch = useDispatch();
        

    useEffect(() => {
    }, [tasks])
    return (
        <div className="home">
            <div className="add_task">
                <form onSubmit={(e) => {
                    e.preventDefault();
                    const task = {
                        id: tasks.length + 1,
                        name: document.getElementById("name").value,
                        desc: document.getElementById("desc").value,
                        status: 1
                    }
                    alert(task.desc)
                    document.getElementById("name").value = ""
                    document.getElementById("desc").textContent = ""
                    dispatch(UpdateTask(task));

                }} >
                    <div className="form1">
                        <input type="text" className="input_task" id="name" placeholder="Add Task" onChange={(e) => e.target.value} />
                        <textarea id="desc"></textarea>
                        <button type="submit" className="btn"><UpdateIcon className="add_icon" /></button>
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
