import { fireEvent, render, screen } from '@testing-library/react';
import { UserContext } from '../../src/09-useContext/context/UserContext';
import { LoginPage } from '../../src/09-useContext/LoginPage';
describe('Test on LoaginPage', () => {
  test('should render the component without the user', () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>,
    );
    const preTag = screen.getByLabelText('pre');
    expect(preTag.innerHTML).toBe('null');
  });

  test('shloud call setUser when click on login button', () => {
    const setUserMock = jest.fn();
    render(
      <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>,
    );
    const btn = screen.getByRole('button');
    fireEvent.click(btn);
    expect(setUserMock).toHaveBeenCalledWith({
      email: 'juan@google.com',
      id: 123,
      name: 'Juan',
    });
  });
});
