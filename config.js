import firebase from 'firebase'

 const firebaseConfig = {
  apiKey: "AIzaSyDypkz0YCWnlUHlKCevl4aPzTrrXaQ_2tw",
  authDomain: "attendace-checker.firebaseapp.com",
  databaseURL: "https://attendace-checker-default-rtdb.firebaseio.com",
  projectId: "attendace-checker",
  storageBucket: "attendace-checker.appspot.com",
  messagingSenderId: "118566025427",
  appId: "1:118566025427:web:f3cbe1922c5b27901a3c26"
};
firebase.initializeApp(firebaseConfig);

  export default firebase.database()
 


  