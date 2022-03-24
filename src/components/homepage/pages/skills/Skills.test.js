import { render, screen } from '@testing-library/react';
import Skills from './Skills';

describe('skills page', () => {
  test('header includes first name', () => {
    render(<Skills />);
    const header = screen.getByRole('heading', { name: /skills/i });
    expect(header).toBeInTheDocument();
  });
  describe('icons', () => {
    test('JavaScript icon', () => {
      render(<Skills />);
      const jsIcon = screen.getByAltText('javascript icon');
      expect(jsIcon).toBeInTheDocument();
    });
    test('react icon', () => {
      render(<Skills />);
      const reactIcon = screen.getByAltText('react icon');
      expect(reactIcon).toBeInTheDocument();
    });
    test('git icon', () => {
      render(<Skills />);
      const reactIcon = screen.getByAltText('git icon');
      expect(reactIcon).toBeInTheDocument();
    });
    test('css icon', () => {
      render(<Skills />);
      const cssIcon = screen.getByAltText('css icon');
      expect(cssIcon).toBeInTheDocument();
    });
    test('html icon', () => {
      render(<Skills />);
      const htmlIcon = screen.getByAltText('html icon');
      expect(htmlIcon).toBeInTheDocument();
    });
    test('sass icon', () => {
      render(<Skills />);
      const sassIcon = screen.getByAltText('sass icon');
      expect(sassIcon).toBeInTheDocument();
    });
    test('node icon', () => {
      render(<Skills />);
      const nodeIcon = screen.getByAltText('node icon');
      expect(nodeIcon).toBeInTheDocument();
    });
    test('jest icon', () => {
      render(<Skills />);
      const jestIcon = screen.getByAltText('jest icon');
      expect(jestIcon).toBeInTheDocument();
    });
    test('figma icon', () => {
      render(<Skills />);
      const figmaIcon = screen.getByAltText('figma icon');
      expect(figmaIcon).toBeInTheDocument();
    });
  });
});
