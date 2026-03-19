import { initializeApp, getApps } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getStorage, connectStorageEmulator } from 'firebase/storage';
import { getFunctions, connectFunctionsEmulator } from 'firebase/functions';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase only if not already initialized
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
export const functions = getFunctions(app);

// Connect to emulators if running locally
if (process.env.NODE_ENV === 'development') {
  // Check if emulators are already connected to avoid errors on hot reload
  const authUrl = 'http://127.0.0.1:9099';
  if (!auth.emulatorConfig) {
    connectAuthEmulator(auth, authUrl);
  }
  
  try {
    connectFirestoreEmulator(firestore, '127.0.0.1', 8080);
  } catch (e) {
    // Ignore error if already connected
  }

  try {
    connectStorageEmulator(storage, '127.0.0.1', 9199);
  } catch (e) {
    // Ignore error if already connected
  }

  try {
    connectFunctionsEmulator(functions, '127.0.0.1', 5001);
  } catch (e) {
    // Ignore error if already connected
  }
}

export default app;