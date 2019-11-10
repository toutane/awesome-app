import app from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";

const config = {
  apiKey: "AIzaSyB-2qdqMzOLUR8igM2O96yhGJLqZdHS5-8",
  authDomain: "awesome-app-cd909.firebaseapp.com",
  databaseURL: "https://awesome-app-cd909.firebaseio.com",
  projectId: "awesome-app-cd909",
  storageBucket: "awesome-app-cd909.appspot.com",
  messagingSenderId: "196712668296",
  appId: "1:196712668296:web:bbd5a155d227dfa052133d",
  measurementId: "G-41XD5E4N8C"
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.firestore();
  }

  getCurrentUserId() {
    return this.auth.currentUser && this.auth.currentUser.uid;
  }
  getCurrentUsername() {
    return this.auth.currentUser && this.auth.currentUser.displayName;
  }
  isInitialized() {
    return new Promise(resolve => {
      this.auth.onAuthStateChanged(resolve);
    });
  }
}
export default new Firebase();
