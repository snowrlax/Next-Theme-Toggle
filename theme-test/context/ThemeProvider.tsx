'use client'

import { createContext, useEffect, useState } from "react"


interface ThemeContextInterface { 
    theme: string,
    toggleTheme: (e: boolean) => void
}

export const ThemeContext = createContext<ThemeContextInterface>({})

export default function ThemeProvider({ children }: any) {

    const [theme, setTheme] = useState(localStorage.getItem('item') || 'coffee')

       useEffect(() => {
        const storedTheme = localStorage.getItem('theme') || "coffee"
        setTheme(storedTheme)
    }, [])


     // initially set the localstorage to light
     const toggleTheme = (e: boolean) => {
        setTheme(e ? "light" : "coffee")
        localStorage.setItem('theme', e ? "light" : "coffee")        
    }

    // const handleToggle = (e: boolean) => {
    //     if (e) {
    //         localStorage.setItem('theme', 'light')
    //     } else {
    //         localStorage.setItem('theme', 'coffee')
    //     }
    // }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}