import  { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import app from '../../firebase.config';
export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    const auth = getAuth(app)
    const createUser = (email, pass) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, pass)
    }
    const login = (email, pass) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, pass)
    }
    
    const logout = () => {
        return signOut(auth)
    }
    useEffect(() => {
      const unSuscribe =  onAuthStateChanged(auth, currenUser => {
            setUser(currenUser)
            setLoading(false)
        })
        return () => {
            return unSuscribe()
        }
    },[])
    const authInfo = {
        createUser,
        login,
        logout,
        user,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;