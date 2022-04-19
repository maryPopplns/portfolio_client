import { rest } from 'msw';
import ContactMe from './ContactMe';
import { setupServer } from 'msw/node';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';

describe('contact page', () => {
  const contactMeResponse = rest.post(
    'https://whispering-depths-29284.herokuapp.com/contact',
    (req, res, ctx) => {
      const { email } = req.body.split('&').reduce((object, input) => {
        const [key, value] = input.split('=');
        object[key] = value;
        return object;
      }, {});

      const decodedEmail = decodeURIComponent(email);
      if (decodedEmail === 'test@test.com') {
        return res(ctx.status(200));
      } else {
        return res(ctx.status(500));
      }
    }
  );

  const server = new setupServer(contactMeResponse);

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

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
    test('successfully submits form', async () => {
      render(<ContactMe />);
      const messageInput = screen.getByRole('textbox', { name: /message/i });
      const emailInput = screen.getByRole('textbox', { name: /email/i });

      userEvent.type(emailInput, 'test@test.com');
      userEvent.type(messageInput, 'this is the message');

      const submitButton = screen.getByRole('button', { name: /submit/i });

      userEvent.click(submitButton);

      const modal = screen.getByTestId('contact_form_response_modal');

      await waitFor(
        function networkCall() {
          expect(modal).toHaveTextContent('success');
        },
        { timeout: 1000 }
      );
    });
    test('handles form errors', async () => {
      render(<ContactMe />);
      const messageInput = screen.getByRole('textbox', { name: /message/i });
      const emailInput = screen.getByRole('textbox', { name: /email/i });

      userEvent.type(emailInput, 'test@test1.com');
      userEvent.type(messageInput, 'this is the message');

      const submitButton = screen.getByRole('button', { name: /submit/i });

      userEvent.click(submitButton);

      await waitFor(
        () => {
          const successModal = screen.getByText(/retry/i);
          expect(successModal).toBeInTheDocument();
        },
        { timeout: 1000 }
      );
    });
  });
});
