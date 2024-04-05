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
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')
    console.log("inside themeprovider : " + theme)
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        setLoading(false);
        const storedTheme = localStorage.getItem('theme') || "dark";
        setTheme(storedTheme)
    }, []);
    
    if(loading) {
        return <div className="">
            loading...
        </div>
    }

    const changeTheme = (nextTheme: boolean) => {
        const stringTheme = nextTheme ? "light" : "dark"
        setTheme(stringTheme)
        localStorage.setItem("theme", stringTheme)
    }

    return (
        <ThemeContext.Provider value={{theme, changeTheme}}>
            {children}
        </ThemeContext.Provider>
    )
 }
