import { render, screen } from '@testing-library/react';
import { HomePage } from '../../src/09-useContext/HomePage';
import { UserContext } from '../../src/09-useContext/context/UserContext';

describe('Test on useContext', () => {
  const user = {
    id: 1,
    name: 'almir',
  };
  test('should render the component without the user', () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>,
    );
    const preTag = screen.getByLabelText('pre');
    expect(preTag.innerHTML).toBe('null');
  });

  test('should render the component with the user', () => {
    render(
      <UserContext.Provider value={{ user }}>
        <HomePage />
      </UserContext.Provider>,
    );

    const preTag = screen.getByLabelText('pre');
    expect(preTag.innerHTML).toContain(JSON.stringify(user, null, 3));
  });
});
