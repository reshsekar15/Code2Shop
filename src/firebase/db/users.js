import { db } from '../firebase';

export const doCreateUser = (id, username, email) =>{
  console.log(id);
  return db.ref(`users/${id}`).set({
    id,
    username,
    email
  });
}

export const onceGetCurrentUser = (id) =>
  db.ref(`users/${id}`).once('value');

export const onceGetUsers = () =>
  db.ref('users').once('value');

// Other Entity APIs ...