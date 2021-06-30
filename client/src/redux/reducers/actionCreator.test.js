import axios from 'axios';
import { addTask } from './actionCreator';

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
