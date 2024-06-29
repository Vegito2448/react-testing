import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Counter } from '../../../src/components';

describe('Counter', () => {
  test('renders correctly', () => {
    render(<Counter />);
    const button = screen.getByRole('button', { name: /count is 0/i });
    expect(button).toBeInTheDocument();
  });

  test('increments count on click', async () => {
    const event = userEvent.setup();
    render(<Counter />);
    const button = screen.getByRole('button', { name: /count is 0/i });
    const count = screen.getByText('count is 0');
    expect(count).toBeInTheDocument();
    await event.click(button);
    expect(count).toHaveTextContent('count is 1');
  });

  test('renders a count of 0 h1', () => {
    render(<Counter />);
    const count = screen.getByRole('heading', { name: /0/i });
    expect(count).toBeInTheDocument();
  });

  test('renders a count of 1 h1 after click increment button', async () => {
    userEvent.setup();
    render(<Counter />);
    const button = screen.getByRole('button', { name: /count is 0/i });
    const count = screen.getByRole('heading', { name: /0/i });
    expect(count).toBeInTheDocument();
    await userEvent.click(button);
    expect(count).toHaveTextContent('1');
  });

  test('renders a count of 10 h1 after click increment button twice', async () => {
    userEvent.setup();
    render(<Counter />);
    const amountInput = screen.getByRole('spinbutton');
    await userEvent.type(amountInput, '10');
    // amountInput = screen.getByRole('spinbutton');
    expect(amountInput).toHaveValue(10);
    const button = screen.getByRole('button', { name: /set/i });
    await userEvent.click(button);
    const count = screen.getByRole('heading', { name: /10/i });
    expect(count).toHaveTextContent('10');
  });

  test('Elements are focus in the correct order', async () => {
    userEvent.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole('button', { name: /count is 0/i });
    const amountInput = screen.getByRole('spinbutton');
    const setButton = screen.getByRole('button', { name: /set/i });
    await userEvent.tab();
    expect(incrementButton).toHaveFocus();
    await userEvent.tab();
    expect(amountInput).toHaveFocus();
    await userEvent.tab();
    expect(setButton).toHaveFocus();
  });
});
