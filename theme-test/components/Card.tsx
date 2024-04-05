'use client'

import { ThemeContext } from "@/context/ThemeProvider"
import { useContext, useState } from "react"

export const Card = () => {
    
  const { toggleTheme } = useContext(ThemeContext)
  const [toggle, setToggle] = useState(false)

    return (
        <div className="">  
        <button className="btn mr-4" value={"light"}>Light theme</button>
        <button className="btn btn-neutral mr-4" value={"coffee"}>Dark theme</button>

        <button className="btn btn-primary" onClick={() => {
          setToggle(!toggle)
          toggleTheme(toggle)
        }}>Toggle theme</button>
      </div>
    )
    
}