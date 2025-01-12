import { createContext, useState } from "react";


export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({
        name: 'Tusher',
        email: 'bhakta@anta.com',
    });
    const authInfo = {
      user,
      setUser,  
    }
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;