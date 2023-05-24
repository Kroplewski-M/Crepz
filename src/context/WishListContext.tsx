import { createContext, ReactNode, useContext,useEffect,useState } from "react";
import { supabase } from "../supabaseClient";
import { useUserInfo } from "./UserContext";
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
    const {userInfo} = useUserInfo();

    const fetchWishlist = async()=>{
        try{
            const { data, error } = await supabase
            .from('Wishlist')
            .select().eq('UserID',userInfo.id);
            if(error)throw error;
            else{
                if(data.length > 0){
                    data.map((product)=>{
                        setWishList(prevItems=>[...prevItems,product.ShoeID]);
                    })
                }
            }
        }catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        if(userInfo.id != ''){
            fetchWishlist();
        }
    },[userInfo.id])

    const addToWishList = async(id:string)=>{
        setWishList(prevItems=>[...prevItems,id]);
        try{
            const { error } = await supabase
            .from('Wishlist')
            .insert({ UserID:userInfo.id,ShoeID: id});
            if(error) throw error;
            else{
                console.log('added to table');
            }
        }catch(error){
            console.log(error);
        }
    }
    const removeFromWishlist = async(id:string)=>{

        setWishList(wishList.filter(function (item){
            return item !== id;
        }));

        try{
            const { error } = await supabase
            .from('Wishlist')
            .delete()
            .eq('UserID', userInfo.id).eq('ShoeID',id);
            if(error) throw error;
            else{
                console.log('item removed');
            }
        }catch(error){
            console.log(error);
        }
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