import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBPwGvjgKXLHgdWlPJcoatnUllERWNpQSg",
  authDomain: "movie-d5369.firebaseapp.com",
  databaseURL: "https://movie-d5369.firebaseio.com",
  projectId: "movie-d5369",
  storageBucket: "movie-d5369.appspot.com",
  messagingSenderId: "784337157063"
};
firebase.initializeApp(config);

export default firebase;
