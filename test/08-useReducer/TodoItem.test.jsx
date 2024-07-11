import { fireEvent, render, screen } from '@testing-library/react';
import { TodoItem } from '../../src/08-useReducer/TodoItem';
describe('Test on TodoItem', () => {
  const todo = {
    id: 1,
    description: 'Recolectar la piedra del alma',
    done: false,
  };
  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test('should return a pending Todo', () => {
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />,
    );

    const liElement = screen.getByRole('listitem');
    expect(liElement.className.includes('list-group-item')).toBe(true);
  });

  test('should return a completed Todo', () => {
    todo.done = true;
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />,
    );

    const spanElement = screen.getByLabelText('span');
    expect(spanElement.className.includes('text-decoration-line-through')).toBe(
      true,
    );
  });

  test('should call onToggleTodo', () => {
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />,
    );

    const spanElement = screen.getByLabelText('span');

    fireEvent.click(spanElement);
    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
  });

  test('should call onDeleteTodo', () => {
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />,
    );

    const deleteButton = screen.getAllByRole('button')[0];

    fireEvent.click(deleteButton);
    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
  });
});
