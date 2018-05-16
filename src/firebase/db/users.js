import { db } from '../firebase';

export const doCreateUser = user =>
  db.ref(`users/${user.id}`).set({
    ...user
  });

export const onceGetUsers = () =>
  db.ref('users').once('value');

// Other Entity APIs ...