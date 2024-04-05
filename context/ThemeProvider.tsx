'use client'
// ThemeContext.tsx
import { createContext, useEffect, useState } from "react";

interface ThemeContextInterface {
    theme: string;
    changeTheme: (nextTheme: boolean) => void;
}

// create context
export const ThemeContext = createContext<ThemeContextInterface>({});

export const ThemeProvider = ({ children }: any) => {
    const [theme, setTheme] = useState( () => localStorage.getItem('theme') || "dark" )
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const storedTheme = localStorage.setItem("theme", theme)
    }, [theme])
    
    if(!loading) {
        return <div className="">
            loading...
        </div>
    }

    const changeTheme = (nextTheme: boolean) => {
        const stringTheme = nextTheme ? "dark" : "light"
        setTheme(stringTheme)
        localStorage.setItem("theme", stringTheme)

    }

    return (
        <ThemeContext.Provider value={{theme, changeTheme}}>
            {children}
        </ThemeContext.Provider>
    )
 }
