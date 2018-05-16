import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyD9XqEWnP0ZvHBDJ_-Q59PScMlMbq5Lt0Q",
  authDomain: "code2shop-512a4.firebaseapp.com",
  databaseURL: "https://code2shop-512a4.firebaseio.com",
  projectId: "code2shop-512a4",
  storageBucket: "code2shop-512a4.appspot.com",
  messagingSenderId: "802567417512"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};