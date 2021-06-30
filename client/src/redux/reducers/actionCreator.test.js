import axios from 'axios';
import { addTask, deleteTask } from './actionCreator';

jest.mock('axios');

describe('addTask', () => {
  test('Should return ADD_TASK', async () => {
    // arrange
    const mockedTask = { data: 'Mockdata' };
    const dispatch = jest.fn();
    axios.post.mockResolvedValue(mockedTask);

    // act
    await addTask(1)(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith({
      type: 'ADD_TASK',
      task: 'Mockdata'
    });
  });
});

describe('deleteTask', () => {
  test('Should return DELETE_TASK', async () => {
    // arrange
    const dispatch = jest.fn();
    axios.delete.mockResolvedValue(1);

    // act
    await deleteTask(1)(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith({
      type: 'DELETE_TASK',
      taskId: 1
    });
  });
});
