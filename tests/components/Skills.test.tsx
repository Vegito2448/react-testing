import { logRoles, render, screen } from "@testing-library/react";
import { Skills } from "../../src/components";

describe('Skills', () => {
  const skills = ["JavaScript", "TypeScript", "React"];
  const title = "Skills";
  test('renders correctly', () => {
    render(<Skills title={title} skills={skills} />);
    const titleElement = screen.getByRole('heading', { name: /skills/i });
    expect(titleElement).toBeInTheDocument();
    const listElement = screen.getByRole('list');
    expect(listElement).toBeInTheDocument();
  });

  test('render a list of skills', () => {
    render(<Skills title={title} skills={skills} />);
    const listItemElement = screen.getAllByRole('listitem');
    expect(listItemElement).toHaveLength(skills.length);
    expect(listItemElement[0]).toHaveTextContent('JavaScript');
    expect(listItemElement[1]).toHaveTextContent('TypeScript');
    expect(listItemElement[2]).toHaveTextContent('React');
  });

  test('renders correctly without skills', () => {
    render(<Skills title={title} skills={[]} />);
    const titleElement = screen.getByRole('heading', { name: /skills/i });
    expect(titleElement).toBeInTheDocument();
  });

  test('renders correctly without title', () => {
    render(<Skills skills={skills} />);
    const titleElement = screen.queryByRole('heading', { name: /skills/i });
    expect(titleElement).not.toBeInTheDocument();
    const listElement = screen.getByRole('list');
    expect(listElement).toBeInTheDocument();
  });

  test('renders login button', () => {
    render(<Skills title={title} skills={skills} />);
    const loginButton = screen.getByRole('button', { name: /login/i });
    expect(loginButton).toBeInTheDocument();
  });

  test('renders logout button', async () => {
    render(<Skills title={title} skills={skills} />);
    const loginButton = screen.queryByRole('button', { name: /login/i });
    if (!loginButton) return;
    await loginButton.click();
    const logoutButton = screen.getByRole('button', { name: /logout/i });
    expect(logoutButton).toBeInTheDocument();
    const loginButtonPostClick = screen.queryByRole('button', { name: /login/i });
    expect(loginButtonPostClick).not.toBeInTheDocument();
  });

  test('logout button eventually displayed', async () => {
    const view = render(<Skills title={title} skills={skills} />);
    logRoles(view.container);
    const logoutButton = await screen.findByRole('button', { name: "Logout" }, {
      timeout: 2000
    });
    // screen.debug();
    expect(logoutButton).toBeInTheDocument();
  });

});