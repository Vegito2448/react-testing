import { render, screen } from '@testing-library/react';
import { Greet } from '../../../src/components';

describe('Greet', () => {
  test('renders correctly', () => {
    render(<Greet />);
    const text = screen.getByText(/greet/i);
    expect(text).toBeInTheDocument();
  });

  /* describe('Nested', () => {
    test('renders correctly with name', () => {
      render(<Greet name="John" />);
      const text = screen.getByText(/greet john/i);
      expect(text).toBeInTheDocument();
    });
  }); */
});
