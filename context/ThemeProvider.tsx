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
    const [theme, setTheme] = useState("light")
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const storedTheme = localStorage.getItem('theme') || "cupcake"
    }, [])
    
    if(!loading) {
        return <div className="">
            loading...
        </div>
    }

    const changeTheme = (theme: boolean) => {
        const stringTheme = theme ? "light" : "dark"
        setTheme(stringTheme)
        localStorage.setItem("theme", stringTheme)

    }

    return (
        <ThemeContext.Provider value={{theme, changeTheme}}>
            {children}
        </ThemeContext.Provider>
    )
 }
