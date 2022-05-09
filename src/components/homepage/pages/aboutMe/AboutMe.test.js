import { render, screen } from '@testing-library/react';
import AboutMe from './AboutMe';

describe('about me', () => {
  test('includes "about_me" header', () => {
    render(<AboutMe />);
    const header = screen.getByRole('heading', { name: 'about_me' });
    expect(header).toBeInTheDocument();
  });
  test('includes about me paragraph', () => {
    render(<AboutMe />);
    const aboutMeParagraph = screen.getByText(
      "Hello! My name is Spencer Knight, I am a US Navy veteran, fitness enthusiast, and full stack JavaScript developer. Solving problems whether it's aircraft, fitness, or software related is what I like to do. Front-end development is my current passion, but am confident I will thrive in any environment. Checkout my blog/projects and tell me what you think!"
    );
    expect(aboutMeParagraph).toBeInTheDocument();
  });
});
