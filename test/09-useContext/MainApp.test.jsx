import { render, screen } from '@testing-library/react';
import { MainApp } from '../../src/09-useContext/MainApp';
import { MemoryRouter } from 'react-router-dom';

describe('Test on MainApp', () => {
  test('should render the Router for the HomePage', () => {
    render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>,
    );
    expect(screen.getByText('HomePage')).toBeTruthy();
  });
  test('should render the Router for the LoginPage', () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <MainApp />
      </MemoryRouter>,
    );
    expect(screen.getByText('LoginPage')).toBeTruthy();
  });
});
