import TextSettings from './TextSettings';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

const comment = {
  _id: '6260c83d0af77f766f04879d',
  comment: 'comment test',
  post: '6260740fc3125c4a6d10c5da',
  user: '6260907da456ced03c9415e9',
  date: '2022-04-21T02:58:05.798Z',
  __v: 0,
};

describe('text settings', () => {
  const mockFontSize = jest.fn();
  function setup() {
    render(<TextSettings setFontSize={mockFontSize} />);
  }
  test('fires mockFontSize when font size is changed', async () => {
    setup();
    const fontSizeInput = screen.getByTestId('text_size');
    fireEvent.change(fontSizeInput, { target: { value: '25' } });

    await waitFor(() => {
      expect(mockFontSize).toBeCalled();
    });
  });
});
