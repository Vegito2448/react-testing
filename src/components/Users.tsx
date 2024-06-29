import { useEffect, useState } from 'react';
import { User } from '../interfaces';

export const Users = () => {
  const [users, setUsers] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res): Promise<User[]> => res.json())
      .then((data) => setUsers(data.map((user) => user.name)))
      .catch(() => setError('Error fetching users'));
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {error && <p>{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
};
