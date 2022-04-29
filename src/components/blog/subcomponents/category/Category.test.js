import { rest } from 'msw';
import { Provider } from 'react-redux';
import { setupServer } from 'msw/node';
import store from '../../../../store/store';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';

import Blog from '../../Blog';
import Navbar from '../../../navbar/Navbar';
import Homepage from '../../../homepage/Homepage';

import allPostsData from '../../../testData/allPosts.json';
import userEvent from '@testing-library/user-event';
const postCategory = allPostsData[0].category;
const post = allPostsData[0];

describe('category', () => {
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
              <Route path='blog' element={<Blog />} />
            </Route>
          </Routes>
        </MemoryRouter>
      </Provider>
    );
  };
  test('button color changes to green when clicked', async () => {
    setup();

    const blogLink = screen.getByRole('link', { name: 'blog' });
    userEvent.click(blogLink);

    await waitFor(() => {
      const testingTab = screen.getByText('testing');
      expect(testingTab).toBeInTheDocument();
    });

    //
  });
});
