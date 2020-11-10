import { render, screen } from '@testing-library/react';
import SimpleLogin from './SimpleLogin';

test('renders learn react link', () => {
  render(<SimpleLogin />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
