import { createContext, ReactNode, useContext,useState } from "react";


interface WishListProvider{
    wishList: string[],
    removeFromWishlist: (value:string)=>void,
    addToWishList:(value:string)=>void,
    toggleFromWishList:(value:string)=>void,
    clearWishList: ()=>void,
}
interface WishListProviderProps{
    children:ReactNode,
}
const WishListProvider = createContext({} as WishListProvider);

export const useWishListInfo = ()=>{
    return useContext(WishListProvider);
}
export const WishListContext = ({children}:WishListProviderProps)=>{
    const [wishList,setWishList] = useState<string[]>([]);

    const addToWishList = (value:string)=>{
        setWishList(prevItems=>[...prevItems,value])
    }
    const removeFromWishlist = (value:string)=>{
        setWishList(wishList.filter(function (item){
            return item !== value;
        }))
    }
    const toggleFromWishList = (value:string)=>{
        if(wishList.includes(value)){
            removeFromWishlist(value);
        }else{
            addToWishList(value);
        }
    }
    const clearWishList = ()=>{
        setWishList([]);
    }

    return <WishListProvider.Provider value={{wishList,addToWishList,removeFromWishlist,toggleFromWishList,clearWishList}}>
        {children}
    </WishListProvider.Provider>
}