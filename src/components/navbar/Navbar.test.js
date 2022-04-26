import { rest } from 'msw';
import Navbar from './Navbar';
import Blog from '../blog/Blog';
import store from '../../store/store';
import { setupServer } from 'msw/node';
import { Provider } from 'react-redux';
import Homepage from '../homepage/Homepage';
import { MemoryRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';

const response = [
  {
    _id: '62670a947415fdf9241a6632',
    showing: false,
    date: '2022-04-25T20:54:44.490Z',
    title: 'test title',
    body: 'the body',
    category: 'test',
    comments: [],
  },
];

function setup() {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route index element={<Homepage />} />
            <Route path='blog' element={<Blog />} />
          </Route>
        </Routes>
      </MemoryRouter>
    </Provider>
  );
}

describe('navbar', () => {
  const contactMeResponse = rest.get(
    'https://whispering-depths-29284.herokuapp.com/post',
    (req, res, ctx) => {
      return res(ctx.json(response));
    }
  );

  const server = new setupServer(contactMeResponse);

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

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
  describe('home hover effects', () => {
    test('adds hovered class when hovered', async () => {
      setup();
      const blogLink = screen.getByRole('link', { name: /blog/i });
      userEvent.click(blogLink);

      const homeLink = screen.getByRole('link', { name: 'home' });
      expect(homeLink).toBeInTheDocument();
      userEvent.hover(homeLink);
      expect(homeLink).toHaveClass('navbarHovered');
    });
    test('should remove hovered class when unhovered', () => {
      setup();
      const blogLink = screen.getByRole('link', { name: /blog/i });
      userEvent.click(blogLink);

      const homeLink = screen.getByRole('link', { name: 'home' });
      userEvent.hover(homeLink);
      expect(homeLink).toHaveClass('navbarHovered');
      userEvent.unhover(homeLink);
      expect(homeLink).not.toHaveClass('navbarHovered');
    });
  });
  describe('data', () => {
    test.skip('pulls data from api', () => {
      setup();
      // TODO finish test once blog component is complete
      // just load component, click blog link ,data is loaded at top of file, then just assert that the title is present
    });
  });
});
