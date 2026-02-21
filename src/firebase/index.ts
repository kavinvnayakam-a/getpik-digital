import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getStorage, FirebaseStorage } from 'firebase/storage';
import { firebaseConfig } from './config';

// App singletons
let app: FirebaseApp;
let auth: Auth;
let firestore: Firestore;
let storage: FirebaseStorage;

function initializeFirebase() {
  if (getApps().length > 0) {
    app = getApp();
    auth = getAuth(app);
    firestore = getFirestore(app);
    storage = getStorage(app);
  } else {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    firestore = getFirestore(app);
    storage = getStorage(app);
  }

  return { app, auth, firestore, storage };
}

// Initialize the singletons
const firebase = initializeFirebase();

// Export the specific instances for use in components
export const storageInstance = firebase.storage;
export const authInstance = firebase.auth;
export const dbInstance = firebase.firestore;

// Maintaining your original export style
export { initializeFirebase, storage, auth, firestore };

// Re-exporting your custom hooks and providers
export * from './provider';
export * from './auth/use-user';
export * from './firestore/use-collection';