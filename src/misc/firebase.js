import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyBT0HmrT3nd871oq4Gphit40nHH2ltJ_7E',
  authDomain: 'chat-app-db410.firebaseapp.com',
  projectId: 'chat-app-db410',
  storageBucket: 'chat-app-db410.appspot.com',
  messagingSenderId: '628903264565',
  appId: '1:628903264565:web:13be50c10e8a34cab9cc7c',
  measurementId: 'G-TVZ6QQQD2V',
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
