import { rest } from 'msw';
import Blog from '../blog/Blog';
import ReadBlog from './ReadBlog';
import store from '../../store/store';
import Navbar from '../navbar/Navbar';
import { setupServer } from 'msw/node';
import { Provider } from 'react-redux';
import Homepage from '../homepage/Homepage';
import { MemoryRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';

import allPosts from '../testData/allPosts.json';

function setup() {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route index element={<Homepage />} />
            <Route path='blog' element={<Blog />} />
            <Route path='blog/:blogID' element={<ReadBlog />} />
          </Route>
        </Routes>
      </MemoryRouter>
    </Provider>
  );
}

describe('navbar', () => {
  const blogPosts = rest.get(
    'https://whispering-depths-29284.herokuapp.com/post',
    (req, res, ctx) => {
      return res(ctx.json(allPosts));
    }
  );

  const server = new setupServer(blogPosts);

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test('updated allPosts', async () => {
    setup();

    const blogLink = screen.getByRole('link', { name: '- blog -' });
    userEvent.click(blogLink);

    let testingPost;
    await waitFor(() => {
      testingPost = screen.getByText('testing title');
    });
    await userEvent.click(testingPost);

    await waitFor(() => {
      const testingHeading = screen.getByRole('heading', {
        name: 'testing title',
      });
      expect(testingHeading).toBeInTheDocument();
    });
    // click test category
    // await userEvent.click(testingTab);
    // await waitFor(() => {
    //   expect(testingTab).toHaveStyle('color: #00A36C');
    // });
  });
});
