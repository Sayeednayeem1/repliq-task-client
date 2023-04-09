import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithCredential, signInWithEmailAndPassword, signInWithPhoneNumber, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };
    // todo google login/signup
    const googleLogin = provider => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    // todo update user Name
    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo);
    }

    // todo Logout authentication
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    //todo phone verification sms
    const sendVerificationCode = (phoneNumber, recaptcha) => {
        const appVerifier = new firebase.auth.RecaptchaVerifier(recaptcha);
        return signInWithPhoneNumber(auth, phoneNumber, appVerifier);
    };
    const signInWithCode = (verificationId, code) => {
        const credential = firebase.auth.PhoneAuthProvider.credential(
            verificationId,
            code
        );
        return signInWithCredential(auth, credential);
    };



    // todo to monitor the changes.
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const authInfo = {
        createUser,
        loginUser,
        logOut,
        updateUser,
        user,
        googleLogin,
        loading,
        sendVerificationCode,
        signInWithCode
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;