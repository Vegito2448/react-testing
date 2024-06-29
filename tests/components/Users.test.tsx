import { HttpResponse, http } from 'msw';
import { Users } from '../../src/components';
import { render, screen } from '../../src/utils';
import { server } from '../mocks';

describe('Users', () => {
  test('should render', async () => {
    render(<Users />);
    const textElement = await screen.getByText(/Users/i);
    expect(textElement).toBeInTheDocument();
  });

  test('render a list of users', async () => {
    render(<Users />);

    const users = await screen.findAllByRole('listitem');
    expect(users.length).toBeGreaterThan(3);
    expect(users).toHaveLength(10);
  });

  test('render error message', async () => {
    server.use(
      http.get('https://jsonplaceholder.typicode.com/users', () =>
        HttpResponse.json('Error', { status: 500 }),
      ),
    );

    render(<Users />);
    const errorMessage = await screen.findByText(/Error fetching users/i);
    expect(errorMessage).toBeInTheDocument();
  });
});
