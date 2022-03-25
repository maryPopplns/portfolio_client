import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
// import userEvent from '@testing-library/user-event';
import Navbar from './Navbar';

describe('navbar', () => {
  test('blog link', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const blogLink = screen.getByRole('link', { name: /blog/i });
    expect(blogLink).toBeInTheDocument();
  });
  test('projects link', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const projectsLink = screen.getByRole('link', { name: /projects/i });
    expect(projectsLink).toBeInTheDocument();
  });
});
