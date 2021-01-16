import {add_task,update_task,delete_task,cancel_task} from './TaskTypes'


export const AddTask = (task)=>{
    return{
        type:"ADD_TASK",
        payload:task
    }
}

export const UpdateTask= (task)=>{
    return{
            payload:task,
            type:update_task
        }
    }
export const DeleteTask = (task)=>{
    return{
        payload:task,
        type:delete_task
    }
}
export const CancelTask = (task)=>{
    return{
        payload:task,
        type:cancel_task
    }
}