import { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../routes/utils/firebase/firebase.utils';
import Button from '../button/button.component';

import FormInput from '../form-input/form-input.component';
import './sign-up-form.styles.jsx';
import { SignUpContainer, H2 } from './sign-up-form.styles.jsx';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if( password !== confirmPassword){
            window.alert("Password Mismatch!");
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);

    

            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();
            window.alert('Benutzerprofil angelegt');
        } catch(error){
            if(error.code === 'auth/email-already-in-use'){
                window.alert('Fehlgeschlagen, Email wird bereits genutzt!');
            }
            console.log('User creation encountered an error', error)
        }
    };

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields,[name]: value})
    };

    return (
        <SignUpContainer>
            <h2><H2>Don´t have an account?</H2></h2>
            <h1>
                Sign in with Email and Password
            </h1>
            <form onSubmit={handleSubmit}>
                <FormInput label="Display Name" type="text" required onChange={handleChange} name="displayName" value={displayName}/>

                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>

                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password}/>

                <FormInput label="Confirm Password" type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword}/>
                <Button type="submit">Sign Up</Button>
            </form>
        </SignUpContainer>
    );
};

export default SignUpForm;