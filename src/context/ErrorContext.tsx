import { createContext, ReactNode, useContext,useState } from "react";

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

    const PushErrorMessage = (message:string)=>{

    }

    const RemoveFirstElement = ()=>{

    }
    return <ErrorProvider.Provider value={{ErrorMessages,PushErrorMessage,RemoveFirstElement}}>
        {children}
    </ErrorProvider.Provider>
}