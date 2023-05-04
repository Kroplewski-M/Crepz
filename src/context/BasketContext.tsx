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
    removeFromBasket:(value:string)=>void,
    totalPrice:()=>number,
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
    const removeFromBasket = (value:string)=>{

    }
    const totalPrice = ()=>{
        return 0;
    }
    return <BasketProvider.Provider value={{basketItems,addToBasket,removeFromBasket,totalPrice}} >
        {children}
    </BasketProvider.Provider>
}