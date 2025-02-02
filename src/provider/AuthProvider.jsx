import { createContext, useEffect, useState } from "react";
import app from "../components/firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";


export const AuthContext = createContext();
const auth = getAuth(app);

const  provider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // console.log(user);
    const createNewUser = (email, password) => {
        setLoading(true);
       return createUserWithEmailAndPassword(auth, email, password)
    }
    const userSignIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };
    const updateUserProfile = (updatedData) =>{
        return updateProfile(auth.currentUser, updatedData);
    };
    const signUpWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }
    
    const authInfo = {
      user,
      setUser,
      createNewUser,
      logOut, 
      userSignIn, 
      loading,
      updateUserProfile,
      signUpWithGoogle,
    }

    useEffect(() => {
        const unsubscribe =  onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    },[])

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;