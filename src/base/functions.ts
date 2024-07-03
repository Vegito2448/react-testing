const getUser = (): { uid: string; username: string } => ({
  uid: 'ABC123',
  username: 'Vegito2448',
});

const getActiveUser = (name: string): { uid: string; username: string } => ({
  uid: 'ABC567',
  username: name,
});

export { getActiveUser, getUser };
