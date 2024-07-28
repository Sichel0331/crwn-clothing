import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
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

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation={}) => {
    if(!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);


    if(!userSnapshot.exists()){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc (userDocRef, {
                displayName,
                email,
                createdAt,
                additionalInformation
            });
            
        } catch (error) {
            console.log('error creating the user ', error.message);
        }
    }

    return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {

if(!email || !password) return;

return await createUserWithEmailAndPassword(auth, email, password);

};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {

    if(!email || !password) return;
    
    return await signInWithEmailAndPassword(auth, email, password);
    
    };