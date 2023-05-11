import { createContext, ReactNode, useContext,useEffect,useState } from "react";

interface ErrorProvider{
    ErrorMessages:string[],
    PushErrorMessage:(message:string)=>void,
    RemoveFirstElement:()=>void,
}

interface ErrorProviderProps{
    children:ReactNode,
}

const ErrorProvider = createContext({} as ErrorProvider);

export const useErrorInfo = ()=>{
    return useContext(ErrorProvider);
}

export const ErrorContext = ({children}:ErrorProviderProps)=>{
    const [ErrorMessages,setErrorMessages] = useState<string[]>([]);
    
    
    const [size,setSize] = useState<number>(0);
    useEffect(()=>{
        while(ErrorMessages.length != 0){
            const interval = setInterval(() => {
                RemoveFirstElement();
            }, 2000);
            return () => clearInterval(interval);
        }
    },[size])

    const PushErrorMessage = (message:string)=>{
        setErrorMessages(prevState=>[...prevState,message]);
        setSize(size + 1);
    }

    const RemoveFirstElement = ()=>{
        setErrorMessages(ErrorMessages.slice(0,-1));
        setSize(size - 1);
    }
    return <ErrorProvider.Provider value={{ErrorMessages,PushErrorMessage,RemoveFirstElement}}>
        {children}
    </ErrorProvider.Provider>
}