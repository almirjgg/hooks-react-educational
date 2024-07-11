import { todoReducer } from '../../src/08-useReducer/todoReducer';
describe('Test on todoRecuder', () => {
  const initialState = {
    id: 1,
    todo: 'Recolectar la piedra del alma',
    done: false,
  };

  test('should return default state', () => {
    const newState = todoReducer(initialState, {});
    expect(newState).toBe(initialState);
  });

  test('should add a todo', () => {
    const action = {
      type: '[TODO] Add Todo',
      payload: {
        id: 2,
        todo: 'Recolectar la piedra del poder',
        done: false,
      },
    };

    const newState = todoReducer([initialState], action);
    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
  });

  test('should delete a todo', () => {
    const action = {
      type: '[TODO] Remove Todo',
      payload: 1,
    };
    const newState = todoReducer([initialState], action);
    expect(newState.length).toBe(0);
  });

  test('should toggle a todo', () => {
    const action = {
      type: '[TODO] Toggle Todo',
      payload: 1,
    };

    const newState = todoReducer([initialState], action);
    expect(newState[0].done).toBe(true);
  });
});
