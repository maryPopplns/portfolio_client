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
  const mockBackgroundColor = jest.fn();
  const mockFontSize = jest.fn();
  const mockColor = jest.fn();
  function setup() {
    render(
      <TextSettings
        setBackgroundColor={mockBackgroundColor}
        setFontSize={mockFontSize}
        setColor={mockColor}
      />
    );
  }
  test('fires mockColor when color is changed', async () => {
    setup();
    const colorInput = screen.getByTestId('color');
    fireEvent.change(colorInput, { target: { value: '#00001' } });

    await waitFor(() => {
      expect(mockColor).toBeCalled();
    });
  });
  test('fires mockFontSize when font size is changed', async () => {
    setup();
    const fontSizeInput = screen.getByTestId('text_size');
    fireEvent.change(fontSizeInput, { target: { value: '25' } });

    await waitFor(() => {
      expect(mockFontSize).toBeCalled();
    });
  });
  test('fires mockBackgroundColor when background color is changed', async () => {
    setup();
    const backgroundInput = screen.getByTestId('background_color');
    fireEvent.change(backgroundInput, { target: { value: '#b34444' } });

    await waitFor(() => {
      expect(mockBackgroundColor).toBeCalled();
    });
  });
});
