import React,{ createContext, ReactNode, useContext } from "react";

interface userProps{
    id:string,
    email:string,
    fullName:string,
}
interface UserProvider {
    userInfo:userProps,
    loginUser: (info: userProps )=>void,
    logoutUser: ()=> void,
}
interface UserProviderProps{
    children: ReactNode,
}

const UserProvider = createContext({} as UserProvider);

export const useUserInfo = ()=>{
    return useContext(UserProvider);
}
export const UserContext = ({children}: UserProviderProps)=>{
    const [userInfo,setUserInfo] = React.useState<userProps>({id:'',email:'',fullName:''});

    function loginUser(info:userProps){
        setUserInfo({
            id:info.id,
            email:info.email,
            fullName:info.fullName,
        });
    }
    function logoutUser(){
        setUserInfo({id:'',email:'',fullName:''});
    }

    return  <UserProvider.Provider value={{loginUser,logoutUser,userInfo}}>
                {children}
            </UserProvider.Provider>
}