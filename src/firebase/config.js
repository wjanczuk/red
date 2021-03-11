import firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBdHvemkgDJU3LB5m0O7JJDIVwOYcDAS2A',
  authDomain: 'red-app-9c91d.firebaseapp.com',
  databaseURL: 'https://red-app-9c91d-default-rtdb.firebaseio.com/',
  projectId: 'red-app-9c91d',
  storageBucket: 'red-app-9c91d.appspot.com',
  messagingSenderId: '759126207595',
  appId: '1:759126207595:ios:417fb292fdb5c996a9552e',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };