import { render, screen } from "@testing-library/react";
import { MuiMode } from "../../src/components";
import { AppProviders } from "../../src/providers";

describe('MuiMode', () => {
  test('renders correctly', () => {
    render(<MuiMode />, {
      wrapper: AppProviders
    });
    const headingEl = screen.getByRole('heading', { name: /dark mode/i });
    expect(headingEl).toBeInTheDocument();
    expect(headingEl).toHaveTextContent(/dark mode/i);
  });

  // test('toggles dark mode on click', async () => {
  //   render(<MuiMode />);
  //   const headingEl = screen.getByRole('heading', { name: /dark mode/i });
  //   const body = document.body;
  //   expect(body).not.toHaveClass('dark');
  //   await headingEl.click();
  //   expect(body).toHaveClass('dark');
  //   await headingEl.click();
  //   expect(body).not.toHaveClass('dark');
  // });
});