import { rest } from 'msw';
import { Provider } from 'react-redux';
import { setupServer } from 'msw/node';
import store from '../../store/store';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';

import Blog from './Blog';
import Navbar from '../navbar/Navbar';
import Homepage from '../homepage/Homepage';
import allPostsData from '../testData/allPosts.json';

describe('blog', () => {
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
  test('category button color changes to green when clicked', async () => {
    setup();

    const blogLink = screen.getByRole('link', { name: '- blog -' });
    userEvent.click(blogLink);

    let testingTab;
    await waitFor(() => {
      testingTab = screen.getByText('testing');
      expect(testingTab).toBeInTheDocument();
    });
    // click test category
    await userEvent.click(testingTab);
    await waitFor(() => {
      expect(testingTab).toHaveStyle('color: #00A36C');
    });
  });
  test.skip('clicking a category renders posts in that category', async () => {
    setup();
    // TODO once I have built out the post tiles on the blog homepage, finish this test
    const blogLink = screen.getByRole('link', { name: 'blog' });
    userEvent.click(blogLink);

    const fitnessPost = screen.getByRole('heading', { name: 'fitness title' });
    const techPost = screen.getByRole('heading', { name: 'tech title' });

    let testingTab;
    await waitFor(() => {
      testingTab = screen.getByText('testing');
      expect(testingTab).toBeInTheDocument();
    });
    // click test category
    await userEvent.click(testingTab);
    await waitFor(() => {
      expect(fitnessPost).not.toBeInTheDocument();
      // check if the other headings are in the document
    });
  });
});
