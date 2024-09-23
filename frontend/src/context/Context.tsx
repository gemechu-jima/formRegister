import { createContext, useContext, ReactNode, useState,useEffect, useLayoutEffect, useCallback } from "react";

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
  const [token, setToken]=useState<string>()
  const [show, setShow] = useState<boolean>(false);
  
 
  const login=useCallback((email:string, tokenValue:string)=>{
    setToken(tokenValue)
    localStorage.setItem(
      "userData",
      JSON.stringify({
        token:tokenValue,
        email
      }))
      console.log("token, email", tokenValue, email)
  }, [])

  const logout=()=>{
    setToken("")
    localStorage.removeItem("userData")
   
    
  }
  const handleClick=()=>{
  setTheme(!theme)
  }

  useLayoutEffect(()=>{
    const userData = localStorage.getItem("userData") || "";
    if (userData) {
      const userDataParse = JSON.parse(userData);
      login(userDataParse.email, userDataParse.token);
    } else {
      return;
    }
  },[login])
  useEffect(()=>{
    if(theme){
      document.documentElement.classList.add("dark");
    }else{
      document.documentElement.classList.remove("dark");
    }
  }, [theme])

    return (
        <GlobalContext.Provider value={{
          handleClick,
          login, logout,
          token,
         theme, openIcon, 
         setOpenIcon, query,
          setQuery,  
          language, setLanguage,
          show, setShow}}  >
            {children}
        </GlobalContext.Provider>
    );
}
export const useGlobalContext=()=>{
  return useContext(GlobalContext)
}
export default GlobalContextProvider;
