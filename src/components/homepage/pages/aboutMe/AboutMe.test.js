import { render, screen } from '@testing-library/react';
import AboutMe from './AboutMe';

describe('about me', () => {
  test('includes about me paragraph', () => {
    render(<AboutMe />);
    const aboutMeParagraph = screen.getByText(
      'Hello! My name is Spencer Knight, I am a US Navy veteran, fitness enthusiast, and a web developer. Solving complex problems with simple solutions is what I like to do. Front-end development is my current passion, but am confident I can thrive in any environment. Checkout my blog and let me what you think!'
    );
    expect(aboutMeParagraph).toBeInTheDocument();
  });
});
