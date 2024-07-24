import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyATwWq7b-2bXEvsI94YMXyJMYh0Srxoz9E",
    authDomain: "crwnclothing-14781.firebaseapp.com",
    projectId: "crwnclothing-14781",
    storageBucket: "crwnclothing-14781.appspot.com",
    messagingSenderId: "192683986351",
    appId: "1:192683986351:web:d0e6b398ba31d1c9f0b35a",
    measurementId: "G-03SM8X5VZB"
  };

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists()){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc (userDocRef, {
                displayName,
                email,
                createdAt
            });
            
        } catch (error) {
            console.log('error creating the user ', error.message);
        }
    }

    return userDocRef;
}
