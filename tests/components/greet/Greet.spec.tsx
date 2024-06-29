import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Greet } from '../../../src/components';

describe('Greet', () => {
  it('renders correctly', () => {
    render(<Greet />);
    const text = screen.getByText(/greet/i);
    expect(text).toBeInTheDocument();
  });

  describe('Nested', () => {
    it('renders correctly with name', () => {
      render(<Greet name="John" />);
      const text = screen.getByText(/greet john/i);
      expect(text).toBeInTheDocument();
    });
  });
});
