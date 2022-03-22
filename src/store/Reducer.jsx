import { 
    HANDLEMESSAGE,
    DELETEITEM,
    EDITITEM,
    FINISHWORK
 } 
from './actionType'

// console.log(window.localStorage.getItem("todolist") === null)

if(!window.localStorage){
    alert("浏览器不支持localstorage");
}else if(window.localStorage.getItem("todolist") === null){
    window.localStorage.setItem("todolist", JSON.stringify([{
        id: 0,
        content: "Welecome ToDolist",
        isFinished: false
      }]))
}
const defualtState = {list: JSON.parse(window.localStorage.getItem("todolist"))};

export default (state = defualtState, action) => {
    if(action.type === HANDLEMESSAGE){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(action.val);
        return newState;
    }
    if(action.type === DELETEITEM){
        const newState = JSON.parse(JSON.stringify(state));
        for(let i=0;i<newState.list.length;i++){
            if(newState.list[i].id === action.id){
                newState.list.splice(action.id,1);
            }
        }
        return newState;
    }
    if(action.type === EDITITEM){
        const newState = JSON.parse(JSON.stringify(state));
        for(let i=0;i<newState.list.length;i++){
            if(newState.list[i].id === action.id){
                newState.list[i].content = action.val;
            }
        }
        return newState;
    }
    if(action.type === FINISHWORK){
        const newState = JSON.parse(JSON.stringify(state));
        for(let i=0;i<newState.list.length;i++){
            if(newState.list[i].id === action.id){
                newState.list[i].isFinished = action.bool;
            }
        }
        return newState;
    }
    return state;
}