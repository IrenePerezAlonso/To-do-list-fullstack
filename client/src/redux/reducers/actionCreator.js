import axios from 'axios';
import actionTypes from './actionTypes';

const tasksUrl = 'http://localhost:2021/todo';

export function addTask(task) {
  return async (dispatch) => {
    const { data } = await axios.post(tasksUrl, task);
    dispatch({
      type: actionTypes.ADD_TASK,
      task: data
    });
  };
}
