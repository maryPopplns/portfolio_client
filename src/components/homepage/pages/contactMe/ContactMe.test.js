import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactMe from './ContactMe';

describe('contact page', () => {
  test('header includes "contact"', () => {
    render(<ContactMe />);
    const header = screen.getByRole('heading', { name: /contact/i });
    expect(header).toBeInTheDocument();
  });
  describe('contact form', () => {
    // labels
    test('form includes label "email"', () => {
      render(<ContactMe />);
      const email = screen.getByLabelText('email');
      expect(email).toBeInTheDocument();
    });
    test('form includes label "message"', () => {
      render(<ContactMe />);
      const email = screen.getByLabelText('message');
      expect(email).toBeInTheDocument();
    });
    // inputs
    test('form includes input "email"', () => {
      render(<ContactMe />);
      const email = screen.getByRole('textbox', { name: /email/i });
      expect(email).toBeInTheDocument();
    });
    test('form includes input "message"', () => {
      render(<ContactMe />);
      const message = screen.getByRole('textbox', { name: /message/i });
      expect(message).toBeInTheDocument();
    });
    // submit button
    test('form includes submit button', () => {
      render(<ContactMe />);
      const button = screen.getByRole('button', 'submit');
      expect(button).toBeInTheDocument();
    });

    // onChange handlers
    test('email input stores input correctly', async () => {
      render(<ContactMe />);
      const emailInput = screen.getByRole('textbox', { name: /email/i });
      userEvent.type(emailInput, 'email@email.com');
      await waitFor(() => {
        expect(emailInput).toHaveValue('email@email.com');
      });
    });
    test('message input stores input correctly', async () => {
      render(<ContactMe />);
      const messageInput = screen.getByRole('textbox', { name: /message/i });
      userEvent.type(messageInput, 'the message');
      await waitFor(() => {
        expect(messageInput).toHaveValue('the message');
      });
    });
  });
  // social media icons
  describe('social media icons', () => {
    test('linkedin icon', () => {
      render(<ContactMe />);
      const linkedinIcon = screen.getByAltText('linkedin icon');
      expect(linkedinIcon).toBeInTheDocument();
    });
    test('github icon', () => {
      render(<ContactMe />);
      const githubIcon = screen.getByAltText('github icon');
      expect(githubIcon).toBeInTheDocument();
    });
  });
  // form submissions
  describe('form submissions', () => {
    test.skip('successfully submits form', async () => {
      render(<ContactMe />);
      const messageInput = screen.getByRole('textbox', { name: /message/i });
      const emailInput = screen.getByRole('textbox', { name: /email/i });

      userEvent.type(emailInput, 'test@testing.com');
      userEvent.type(messageInput, 'this is the message');

      const submitButton = screen.getByRole('button', { name: /submit/i });

      userEvent.click(submitButton);

      await waitFor(
        () => {
          const successModal = screen.getByText(/success/i);
          expect(successModal).toBeInTheDocument();
        },
        { timeout: 10000 }
      );
    });
    test('handles form errors', async () => {
      render(<ContactMe />);
      const messageInput = screen.getByRole('textbox', { name: /message/i });
      const emailInput = screen.getByRole('textbox', { name: /email/i });

      userEvent.type(emailInput, 'test@');
      userEvent.type(messageInput, 'this is the message');

      const submitButton = screen.getByRole('button', { name: /submit/i });

      userEvent.click(submitButton);

      await waitFor(
        () => {
          const successModal = screen.getByText(/retry/i);
          expect(successModal).toBeInTheDocument();
        },
        { timeout: 10000 }
      );
    });
  });
});
