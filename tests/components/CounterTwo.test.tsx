import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CounterTwo } from '../../src/components';

describe('CounterTwo', () => {
  const count = 0;

  const handleIncrement = vi.fn(); // mock function to simulate increment vi may be jest.fn()
  const handleDecrement = vi.fn(); // mock function to simulate decrement vi may be jest.fn()

  test('should render', () => {
    render(<CounterTwo count={count} />);
    const textElement = screen.getByText(/Counter Two/i);
    expect(textElement).toBeInTheDocument();
  });

  test('handlers should be called', async () => {
    userEvent.setup();

    render(
      <CounterTwo
        count={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />,
    );

    const incrementButton = screen.getByRole('button', { name: /Increment/i });
    const decrementButton = screen.getByRole('button', { name: /Decrement/i });

    await userEvent.click(incrementButton);
    await userEvent.click(decrementButton);

    expect(handleIncrement).toHaveBeenCalledTimes(1);
    expect(handleDecrement).toHaveBeenCalledTimes(1);
  });
});
