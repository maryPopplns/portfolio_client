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

  test('menu modal opens', () => {
    setup();
    const hamburgerIcon = screen.getByTestId('hamburgerMenuIcon');
    userEvent.click(hamburgerIcon);

    const menu = screen.getByTestId('navigationModal');
    expect(menu).toHaveClass('mobile_nav_modal_open');
  });
  test('close button closes modal', () => {
    setup();
    const hamburgerIcon = screen.getByTestId('hamburgerMenuIcon');
    userEvent.click(hamburgerIcon);

    const closeButton = screen.getByAltText('close menu');
    userEvent.click(closeButton);

    const menu = screen.getByTestId('navigationModal');
    expect(menu).not.toHaveClass('mobile_nav_modal_open');
  });
  test('clicking link closes modal', () => {
    setup();
    const hamburgerIcon = screen.getByTestId('hamburgerMenuIcon');
    userEvent.click(hamburgerIcon);

    const homeLink = screen.getByRole('link', { name: '- home -' });
    userEvent.click(homeLink);

    const menu = screen.getByTestId('navigationModal');
    expect(menu).not.toHaveClass('mobile_nav_modal_open');
  });
  test('updated allPosts', async () => {
    setup();
    const hamburgerIcon = screen.getByTestId('hamburgerMenuIcon');
    userEvent.click(hamburgerIcon);

    const blogLink = screen.getByRole('link', { name: '- blog -' });
    userEvent.click(blogLink);

    await waitFor(() => {
      const heading = screen.getByRole('heading', { name: 'test title' });
      expect(heading).toBeInTheDocument();
    });
  });
});
