import Completed from '../../components/Completed'
import {add_task,update_task,delete_task,cancel_task} from './TaskTypes'


const initialState = {
    Tasks:[],
    Completed:[],
    Canceled:[]
}



const reducer= (state = initialState,action)=>{
    switch(action.type){

        case add_task:{
            localStorage.setItem("MyAppState",JSON.stringify({...state,Tasks:[...state.Tasks,action.payload]}))
            return{
            ...state,
             Tasks:[...state.Tasks,action.payload]
             }
            }
             case update_task:{
                 for(let i=0;i<state.Tasks.length;i++){
                     
                     if(action.payload.id==state.Tasks[i].id){
                         state.Tasks[i].id=action.payload.id;
                         state.Tasks[i].name=action.payload.name;
                         state.Tasks[i].desc=action.payload.desc;
                         state.Tasks[i].status=action.payload.status;
                if(action.payload.status==2){
                    const index = state.Tasks.findIndex(
                        (task) => task.id===action.payload.id
                    );
                    let newTasks = [...state.Tasks];
                    if(index>=0){
                        newTasks.splice(index,1)
                        
                    }
                    else{
                        console.warn(
                            `can;t update from the Tasks ${action.id} because it does not exist in basket`
                        )
                    }
                    localStorage.setItem("MyAppState",JSON.stringify({...state,Tasks:newTasks,Completed:[...state.Completed,action.payload]}))
                    return{
                        ...state,
                        Tasks:newTasks,
                        Completed:[...state.Completed,action.payload]
                    }
                }
                localStorage.setItem("MyAppState",JSON.stringify({...state,Tasks:[...state.Tasks]}))
                         return{
                            ...state,
                            Tasks:[...state.Tasks]
                        }
                     }
                 }

             }
             case delete_task:{
                const index0 = state.Tasks.findIndex(
                    (task) => task.id===action.payload.id
                );
                const index1 = state.Completed.findIndex(
                    (task) => task.id===action.payload.id
                );
                const index2 = state.Canceled.findIndex(
                    (task) => task.id===action.payload.id
                );
                let newTasks = [...state.Tasks];
                let newTasksCompleted = [...state.Completed];
                let newTasksCanceled = [...state.Canceled];
                if(index0>=0){
                    newTasks.splice(index0,1) 
                    localStorage.setItem("MyAppState",JSON.stringify({...state,Tasks:newTasks}))
                    return{
                        ...state,
                        Tasks:newTasks,
                    } 
                }
                if(index1>=0){
                    newTasksCompleted.splice(index1,1)
                    localStorage.setItem("MyAppState",JSON.stringify({...state,Completed:newTasksCompleted}))
                    return{
                        ...state,    
                        Completed:newTasksCompleted,
                    }
                }
                if(index2>=0){
                    newTasksCanceled.splice(index2,1)
                    localStorage.setItem("MyAppState",JSON.stringify({...state,Canceled:newTasksCanceled}))
                    
                    return{
                        ...state,
                        Canceled:newTasksCanceled
                    }
                }
                
             }
             case cancel_task:{
                const index = state.Tasks.findIndex(
                    (task) => task.id===action.payload.id
                );
                let newTasks = [...state.Tasks];
                if(index>=0){
                    newTasks.splice(index,1)
                    
                }
                else{
                    console.warn(
                        `can;t update from the Tasks ${action.id} because it does not exist in basket`
                    )
                }
                localStorage.setItem("MyAppState",JSON.stringify({...state,Tasks:newTasks, Canceled:[...state.Canceled,action.payload]}))
                return{
                    ...state,
                    Tasks:newTasks,
                    Canceled:[...state.Canceled,action.payload]
                }
             }
         default:{
        if(JSON.parse(localStorage.getItem("MyAppState"))===null)
            return state
        }
        return JSON.parse(localStorage.getItem("MyAppState"))
     }
}

export default reducer