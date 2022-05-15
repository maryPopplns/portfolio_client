import { render, screen } from '@testing-library/react';
import AboutMe from './AboutMe';

describe('about me', () => {
  test('includes about me paragraph', () => {
    render(<AboutMe />);
    const aboutMeParagraph = screen.getByText(
      "Hello! My name is Spencer Knight, I am a US Navy veteran, fitness enthusiast, and a web developer. Solving problems whether it's aircraft, fitness, or software related is what I like to do. Front-end development is my current passion, but am confident I can thrive in any environment. Checkout my blog/projects and tell me what you think!"
    );
    expect(aboutMeParagraph).toBeInTheDocument();
  });
});
