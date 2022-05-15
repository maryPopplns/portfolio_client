import { rest } from 'msw';
import Homepage from '../../Homepage';
import { Provider } from 'react-redux';
import { setupServer } from 'msw/node';
import Navbar from '../../../navbar/Navbar';
import store from '../../../../store/store';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';

import allPostsData from '../../../testData/allPosts.json';

describe('Landing page header', () => {
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
            </Route>
          </Routes>
        </MemoryRouter>
      </Provider>
    );
  };

  test('header includes first name', () => {
    setup();
    const firstName = screen.getByRole('heading', { name: /spencer/i });
    expect(firstName).toBeInTheDocument();
  });
  test('header includes last name', () => {
    setup();
    const lastName = screen.getByRole('heading', { name: /knight/i });
    expect(lastName).toBeInTheDocument();
  });
  test('landing page includes text "fitness <3"', () => {
    setup();
    const fitness = screen.getByText(/fitness <3/i);
    expect(fitness).toBeInTheDocument();
  });
});
