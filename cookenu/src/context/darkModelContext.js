import {createContext, useEffect, useState} from 'react'

export const DarkModelContext = createContext()

export const DarkModelContextProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState (
        JSON.parse(localStorage.getItem('darkMode')) || false
    )

    const toggle = () => {
        setDarkMode(!darkMode)
    }

    useEffect(() => {
        localStorage.setItem('darkMode', darkMode)
    },[darkMode])

    return(
        <DarkModelContext.Provider value={{darkMode, toggle}}>
            {children}
            </DarkModelContext.Provider>
    )
}