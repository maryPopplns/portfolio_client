import { render, screen } from '@testing-library/react';
import LandingPage from './LandingPage';

describe('Landing page header', () => {
  test('header includes first name', () => {
    render(<LandingPage />);
    const firstName = screen.getByRole('heading', { name: /spencer/i });
    expect(firstName).toBeInTheDocument();
  });
  test('header includes last name', () => {
    render(<LandingPage />);
    const lastName = screen.getByRole('heading', { name: /knight/i });
    expect(lastName).toBeInTheDocument();
  });
  test('landing page includes text "web_developer"', () => {
    render(<LandingPage />);
    const webdeveloper = screen.getByText(/web_developer/i);
    expect(webdeveloper).toBeInTheDocument();
  });
  test('landing page includes text "fitness_🤍"', () => {
    render(<LandingPage />);
    const fitness = screen.getByText(/fitness_🤍/i);
    expect(fitness).toBeInTheDocument();
  });
  describe('contains the text veteran', () => {
    test('includes letter "v"', () => {
      render(<LandingPage />);
      const v = screen.getByText(/v$/i);
      expect(v).toBeInTheDocument();
    });
    test('includes letter "e"', () => {
      render(<LandingPage />);
      const e = screen.getByText(/e$/i);
      expect(e).toBeInTheDocument();
    });
    test('includes letters "teran"', () => {
      render(<LandingPage />);
      const teran = screen.getByText(/teran/i);
      expect(teran).toBeInTheDocument();
    });
  });
});
