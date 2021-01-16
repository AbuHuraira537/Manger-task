import React, { useState,useEffect } from 'react'
import '../StyleSheets/Home.css'
import AddIcon from '@material-ui/icons/Add';
import { AddTask, UpdateTask } from '../Redux/Task/TaskActions';

import { useSelector, useDispatch } from 'react-redux'
import Task from './Task';

function Home() {
    const tasks = useSelector(state => state.Tasks);
    const dispatch = useDispatch();
    
     //const  tasks = JSON.parse(localStorage.getItem("MyAppState")).Tasks;
      

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
                        desc: "",
                        status: 1
                    }
                    document.getElementById("name").value = ""
                    dispatch(AddTask(task));
                    
                }} >
                    <div className="form">
                        <input type="text" className="input_task" id="name" placeholder="Add Task" onChange={(e) => e.target.value} />
                        <button type="submit" className="btn"><AddIcon className="add_icon" /></button>
                    </div>
                    <input className="input_task"  placeholder={"Pending Tasks ( "+tasks.length+" )"} disabled />
                </form>
            </div>
            <div className="all_tasks">
                <div className="tasks">
                    {
                        tasks.map(t=>{
                            if(t.status==1){
            return  <Task key={t.id} name={t.name} desc={t.desc} id={t.id} status={t.status}/>
                            }
                        
                    })
                    }
                   
                </div>

            </div>


        </div>

    )
}

export default Home
