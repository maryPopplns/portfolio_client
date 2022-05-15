import Contact from './Contact';
import { screen, render } from '@testing-library/react';

describe('contact', () => {
  const setup = () => {
    render(<Contact />);
  };

  test('contains header', () => {
    setup();
    const email = screen.getByRole('heading', { name: 'Contact' });
    expect(email).toBeInTheDocument();
  });
});
