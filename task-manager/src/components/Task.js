import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import CancelIcon from '@material-ui/icons/Cancel';
import UpdateIcon from '@material-ui/icons/Update';
import CheckIcon from '@material-ui/icons/Check';

import { green,red,lightBlue,grey } from '@material-ui/core/colors';
import '../StyleSheets/Task.css'
import DataUsageIcon from '@material-ui/icons/DataUsage';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import { DeleteTask, UpdateTask, CancelTask } from '../Redux/Task/TaskActions';
function Task({ id, name, desc, status }) {
    const dispatch = useDispatch();
    const [isPending, setPending] = useState(false)
    const [taskName, setTaskName] = useState(name)
    const [taskDesc, setTaskDesc] = useState(desc)
    const cancelTask = () => {
        const task = {
            id: id,
            name: name,
            desc: desc,
            status: 3
        }
        dispatch(CancelTask(task))

    }

    const deleteTask = () => {
        const task = {
            id: id,
            name: name,
            desc: desc,
            status: 2
        }
        dispatch(DeleteTask(task))

    }

    const ChangeStatus = () => {
        const task = {
            id: id,
            name: name,
            desc: desc,
            status: 2
        }

        setPending(true)

        window.setTimeout(() => {
            dispatch(UpdateTask(task))
        }, [500]);
    }

    const updatingTask = () => {
        let div = document.getElementById("update" + id)
        if (div.style.display === "none") {
            div.style.display = "block";
        } else {
            div.style.display = "none";
        }
    }
    return (
        <div className="task_section" id="section">
            <div className="task">
                <span>({id})</span>
                {
                    isPending ? <CheckIcon style={{ color: green[500] }} /> : status === 1 && <DataUsageIcon onClick={ChangeStatus} className="icon_circle" color="primary"/>
                        || status === 2 && <CheckIcon style={{ color: green[500] }}/> || status === 3 && <CancelIcon color="action"/>
                }
                <h3 className="task_name" style={{ color: grey[500] }}>{name}</h3>
                {status !== 2 && status !== 3 && <CreateIcon onClick={updatingTask} style={{ color: lightBlue[500] }}/>}
                <DeleteIcon onClick={deleteTask} style={{ color: red[500] }} />
                {
                    status !== 2 && status !== 3 && <CancelIcon onClick={cancelTask} color="action" />

                }

            </div>
            <span className="description">
                <p>{desc}</p>
            </span>
            <div id={"update" + id} className="show">
                <h4>Update Values of id {id}</h4>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    const task = {
                        id: id,
                        name: document.getElementById("task" + id).value,
                        desc: document.getElementById("desc" + id).value,
                        status: 1
                    }
                    dispatch(UpdateTask(task));
                    updatingTask()
                }} >
                    <div className="updating_section">
                        <textarea type="text" className="updating_input_task" id={"task" + id} value={taskName} onChange={(e) => setTaskName(e.target.value)} ></textarea>
                        <textarea id={"desc" + id} className="updating_input_task" value={taskDesc} onChange={(e) => setTaskDesc(e.target.value)}></textarea>
                        <button type="submit" className="updating_btn"><UpdateIcon className="add_icon" /></button>

                    </div>
                </form>
            </div>

        </div>
    )
}

export default Task
