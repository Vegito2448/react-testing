import { render, screen, } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { HttpResponse, http } from "msw";
import { describe, expect, it, test } from 'vitest';
import App from '../src/App';
import { server } from "./mocks";


test('checking wether vite and react text is available', () => {
  render(<App />);
  const text = screen.getByText("Vite + React");
  expect(text).toBeInTheDocument();
});

describe('App', () => {
  it('checking wether vite and react text is available', () => {
    render(<App />);
    const text = screen.getByText("Vite + React");
    expect(text).toBeInTheDocument();
  });

  it('should increment count click', async () => {
    render(<App />);
    await userEvent.click(screen.getByRole('button', { name: /count is 0/i }));
    expect(screen.getByText('count is 1')).toBeInTheDocument();
  });

  it('should fetch todos', async () => {
    render(<App />);
    const todoList = await screen.findByText('Todo List: 30');
    expect(todoList).toBeInTheDocument();
  });

  it("api error scenario", async () => {
    render(<App />);
    server.use(
      http.get('https://dummyjson.com/todos', () => {
        return new HttpResponse(null, { status: 401 });
      })
    );
    const todoList = screen.queryByText('Todo List');
    expect(todoList).not.toBeInTheDocument();
  });
});