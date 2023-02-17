import {createContext, useEffect, useState} from 'react'

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState (
        JSON.parse(localStorage.getItem('user')) || null
    )

    const login = () => {
        //API
        setCurrentUser({
            id:1,
            name: 'Juliano Manzano',
            profilePic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8r9te0aQZe9O5cFBJ53Jl7-JselY4fdEvdg&usqp=CAU"
        })
    }

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(currentUser))
    },[currentUser])

    return(
        <AuthContext.Provider value={{currentUser, login}}>
            {children}
            </AuthContext.Provider>
    )
}