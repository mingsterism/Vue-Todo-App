import axios from 'axios';
import TODO from "../constant/mutation-type";

const todoApi = axios.create({
    baseURL: 'http://localhost:2403/todos',
    timeout: 1000,
    responseType: 'json'
});

export const getTodoList = () => {
    return todoApi.get('/');
};

export const setTodoItem = ( todo ) => {
    return todoApi.post('/', {
        todo
    })
};

export const updateTodoItem = (payload) => {
    const targetKey = payload.id;
    const editedTodo = payload.editedTodo;

    todoApi.put(`${targetKey}`, {
        todo: editedTodo
    })
};

export const deleteTodoItem = (payload) => {
    const targetKey = payload.targetKey;
    const deleteTargetKey =  payload.deleteTargetKey;

    todoApi.delete(`${targetKey}`)
}

export const completeTodo = (payload) => {
    const primayKey = payload.id;
    const isDone = !payload.isDone;

    todoApi.put(`/${primayKey}`,{
        isDone: isDone
    })
}

export default completedAllTodos = (isCompletedAll) => {
}
