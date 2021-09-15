import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the app', () => {
  render(<App />);
  const appTitle = screen.getByRole('heading', {name: /welcome to the pokemon playground/i});
  expect(appTitle).toBeInTheDocument();
});
