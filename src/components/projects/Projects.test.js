import { rest } from 'msw';
import { Provider } from 'react-redux';
import { setupServer } from 'msw/node';
import store from '../../store/store';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import Projects from './Projects';
import Navbar from '../navbar/Navbar';
import Homepage from '../homepage/Homepage';
import allPostsData from '../testData/allPosts.json';

describe('projects', () => {
  const allPosts = rest.get(
    'https://whispering-depths-29284.herokuapp.com/post',
    (req, res, ctx) => {
      return res(ctx.json(allPostsData));
    }
  );

  const server = new setupServer(allPosts);

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  const setup = () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Routes>
            <Route path='/' element={<Navbar />}>
              <Route index element={<Homepage />} />
              <Route path='projects' element={<Projects />} />
            </Route>
          </Routes>
        </MemoryRouter>
      </Provider>
    );
    const projectsLink = screen.getByRole('link', { name: '- projects -' });
    userEvent.click(projectsLink);
  };
  test('contains the correct elements', async () => {
    setup();

    const header = screen.getByRole('heading', { name: 'projects' });
    expect(header).toBeInTheDocument();
  });
  test('contains the projects', async () => {
    setup();

    const projectBlog = screen.getByRole('heading', { name: 'Blog API' });
    expect(projectBlog).toBeInTheDocument();
  });
});
