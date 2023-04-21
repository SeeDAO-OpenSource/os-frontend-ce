import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDhQjWwMmkYItbCH9gsNN-thzRbsLzXarw",
    authDomain: "octopus3.firebaseapp.com",
    projectId: "octopus3",
    storageBucket: "octopus3.appspot.com",
    messagingSenderId: "900244474319",
    appId: "1:900244474319:web:68295c62f38c75f6bbeaba",
    measurementId: "G-FV8VS93RQ9"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp