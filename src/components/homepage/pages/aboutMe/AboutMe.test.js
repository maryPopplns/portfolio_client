import { render, screen } from "@testing-library/react";
import AboutMe from "./AboutMe";

describe("about me", () => {
  test("includes about me paragraph", () => {
    render(<AboutMe />);
    const aboutMeParagraph = screen.getByText(
      `Hi, I’m Spencer Knight — a Fullstack Software Engineer specializing in React, Node.js, and scalable backend
        systems. I’ve led development of web and mobile applications serving 100K+ users and executed large-scale data
        migrations (20M+ records) into Salesforce. I focus on building reliable systems, clean APIs, and solutions that
        scale. Feel free to explore my work or reach out to connect.`,
    );
    expect(aboutMeParagraph).toBeInTheDocument();
  });
});
