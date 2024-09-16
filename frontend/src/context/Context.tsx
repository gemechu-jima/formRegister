import { createContext, useContext, ReactNode, useState,useEffect } from "react";


const GlobalContext = createContext<any>(null);
// interface ThemeMode{
//     theme:"dark" | "light"
//   }
  type Lan = "EN" | "AM" | "AO";


function GlobalContextProvider({ children }:{ children: ReactNode }): JSX.Element {
  const [language, setLanguage]=useState<Lan>("EN")
  const [theme, setTheme]=useState<boolean>(false)
  const [openIcon, setOpenIcon]=useState(true)
  const [query, setQuery] =useState("");
  
  const handleClick=()=>{
  setTheme(!theme)
  
  }
  useEffect(()=>{
    if(theme){
      document.documentElement.classList.add("dark");
    }else{
      document.documentElement.classList.remove("dark");
    }
  })
    return (
        <GlobalContext.Provider value={{handleClick, theme, openIcon, setOpenIcon, query, setQuery,  language, setLanguage}}  >
            {children}
        </GlobalContext.Provider>
    );
}
export const useGlobalContext=()=>{
  return useContext(GlobalContext)
}
export default GlobalContextProvider;
