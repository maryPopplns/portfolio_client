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
  const commentBlog = rest.post(
    'https://whispering-depths-29284.herokuapp.com/post/comment/62609173365618a9b57359f8',
    (req, res, ctx) => {
      const comment = req.body.split('=')[1];
      if (comment === 'test') {
        return res(ctx.status(201));
      } else {
        return res(ctx.status(400));
      }
    }
  );

  const servers = [blogPosts, commentBlog];

  const server = new setupServer(...servers);

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test('clicking blog post renders readblog component', async () => {
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
  });
  test('submitting comment renders success modal', async () => {
    setup();

    const blogLink = screen.getByRole('link', { name: '- blog -' });
    userEvent.click(blogLink);

    let testingPost;
    await waitFor(() => {
      testingPost = screen.getByText('testing title');
    });
    await userEvent.click(testingPost);

    let commentInput;
    await waitFor(() => {
      commentInput = screen.getByPlaceholderText('be the first to comment!');
      expect(commentInput).toBeInTheDocument();
    });

    await userEvent.type(commentInput, 'test');

    const submitButton = screen.getByRole('button', { name: 'submit' });
    await userEvent.click(submitButton);

    await waitFor(() => {
      const modal = screen.getByTestId('comment_form_response_modal');
      expect(modal).toHaveStyle('color: #00A36C');
    });

    await waitFor(
      () => {
        const modal = screen.getByTestId('comment_form_response_modal');
        expect(modal).not.toHaveStyle('color: #00A36C');
      },
      { timeout: 4000 }
    );
  });
  test('error submitting form renders retry modal', async () => {
    setup();

    const blogLink = screen.getByRole('link', { name: '- blog -' });
    userEvent.click(blogLink);

    let testingPost;
    await waitFor(() => {
      testingPost = screen.getByText('testing title');
    });
    await userEvent.click(testingPost);

    let commentInput;
    await waitFor(() => {
      commentInput = screen.getByPlaceholderText('be the first to comment!');
      expect(commentInput).toBeInTheDocument();
    });

    await userEvent.type(commentInput, 'test failure');

    const submitButton = screen.getByRole('button', { name: 'submit' });
    await userEvent.click(submitButton);

    await waitFor(() => {
      const modal = screen.getByTestId('comment_form_response_modal');
      expect(modal).toHaveStyle('color: #b22234');
    });

    await waitFor(
      () => {
        const modal = screen.getByTestId('comment_form_response_modal');
        expect(modal).not.toHaveStyle('color: #b22234');
      },
      { timeout: 4000 }
    );
  });
});
