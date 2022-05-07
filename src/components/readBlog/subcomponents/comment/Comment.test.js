import Comment from './Comment';
import { render, screen, waitFor } from '@testing-library/react';

const comment = {
  _id: '6260c83d0af77f766f04879d',
  comment: 'comment test',
  post: '6260740fc3125c4a6d10c5da',
  user: '6260907da456ced03c9415e9',
  date: '2022-04-21T02:58:05.798Z',
  __v: 0,
};

function setup() {
  render(<Comment comment={comment} color='red' />);
}

describe('comment', () => {
  test('renders comment', async () => {
    setup();
    const comment = screen.getByText('comment test');
    expect(comment).toBeInTheDocument();
  });
});
