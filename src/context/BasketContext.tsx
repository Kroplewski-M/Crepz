import { createContext, ReactNode, useContext,useEffect,useState } from "react";
import { useProductInfo } from "./ProductContext";
import { Shoe } from "./ProductContext";
type BasketItem = {
    id:string,
    name:string,
    imageUrl:string,
    size:number,
    price:number,
    quantity:number,
}

interface BasketProvider{
    basketItems:BasketItem[],
    addToBasket:(value:string, size:number)=>void,
    removeFromBasket:(value:string,size:number)=>void,
    totalPrice:()=>number,
    clearBasket: ()=>void,
}

interface BasketProviderProps{
    children:ReactNode,
}
const BasketProvider = createContext({} as BasketProvider);

export const useBasketInfo = ()=>{
    return useContext(BasketProvider);
}

export const BasketContext = ({children}:BasketProviderProps)=>{
    const [basketItems,setBasketItems] = useState<BasketItem[]>([]);
    const [products,setProducts] = useState<Shoe[]>();
    const {getProducts} = useProductInfo();

    useEffect(()=>{
        setProducts(getProducts());
    },[getProducts()])

    const addToBasket = (value:string,selectedSize:number)=>{
        
    }
    const removeFromBasket = (value:string,selectedSize:number)=>{

    }
    const totalPrice = ()=>{
        return 0;
    }
    const clearBasket = ()=>{
        setBasketItems([]);
    }
    return <BasketProvider.Provider value={{basketItems,addToBasket,removeFromBasket,totalPrice,clearBasket}} >
        {children}
    </BasketProvider.Provider>
}