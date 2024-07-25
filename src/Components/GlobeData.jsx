import React, { useEffect, useMemo, useState } from "react";

export const Context = React.createContext();

const GlobeData =({children})=>{

    const [Page,setPage] = useState("Home");
    const [LogPage,SLP] = useState(true);
    const [loggedIn,setLog] = useState(()=>{
        const sdata=localStorage.getItem('LogIn');
        return sdata?JSON.parse(sdata):null;
    }); 

    const [User,setUser]=useState(()=>
    {
          const sdata=localStorage.getItem('User');
          return sdata?JSON.parse(sdata):null;
    });

    const ContextData = useMemo(()=>{
        return{
            Page,setPage,loggedIn,User,LogPage,SLP,
            LOGIN:(data)=>{setUser(data);setLog(true);},
            LOGOUT:()=>{
                setUser({});
                setLog(false);
                localStorage.removeItem('User');
                localStorage.removeItem('LogIn');
            }
        }
    },[Page,User,loggedIn,SLP,LogPage])

    useEffect(()=>{
        localStorage.setItem('User',JSON.stringify(User));
        localStorage.setItem('LogIn',JSON.stringify(loggedIn));
    },[User,loggedIn]);

return(
    <Context.Provider value={ContextData}>
        {children}
    </Context.Provider>
)
}

export default GlobeData;