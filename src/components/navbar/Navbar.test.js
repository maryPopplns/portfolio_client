import Navbar from './Navbar';
import { Provider } from 'react-redux';
import store from '../../store/store';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';

function setup() {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    </Provider>
  );
}

describe('navbar', () => {
  describe('button text', () => {
    test('blog link', () => {
      setup();
      const blogLink = screen.getByRole('link', { name: /blog/i });
      expect(blogLink).toBeInTheDocument();
    });
    test('projects link', () => {
      setup();
      const projectsLink = screen.getByRole('link', { name: /projects/i });
      expect(projectsLink).toBeInTheDocument();
    });
  });
  describe('blog hover effects', () => {
    test('adds hovered class when hovered', () => {
      setup();
      const blogLink = screen.getByRole('link', { name: /blog/i });
      userEvent.hover(blogLink);
      expect(blogLink).toHaveClass('navbarHovered');
    });
    test('should remove hovered class when unhovered', () => {
      setup();
      const blogLink = screen.getByRole('link', { name: /blog/i });
      userEvent.hover(blogLink);
      expect(blogLink).toHaveClass('navbarHovered');
      userEvent.unhover(blogLink);
      expect(blogLink).not.toHaveClass('navbarHovered');
    });
  });
  describe('projects hover effects', () => {
    test('adds hovered class when hovered', () => {
      setup();
      const projectsLink = screen.getByRole('link', { name: /projects/i });
      userEvent.hover(projectsLink);
      expect(projectsLink).toHaveClass('navbarHovered');
    });
    test('should remove hovered class when unhovered', () => {
      setup();
      const projectsLink = screen.getByRole('link', { name: /projects/i });
      userEvent.hover(projectsLink);
      expect(projectsLink).toHaveClass('navbarHovered');
      userEvent.unhover(projectsLink);
      expect(projectsLink).not.toHaveClass('navbarHovered');
    });
  });
});
