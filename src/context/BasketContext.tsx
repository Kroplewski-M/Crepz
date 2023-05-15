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
    updateQuantity: (quantity:number, id:number)=>void,
    getTotalItemCount:()=>number,
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

    const addToBasket = (id:string,selectedSize:number)=>{
        let selectedItem:Shoe = {id:'',Name:'',Brand:'',Desc:'',Gender:'',Price:0,ImgUrl:''};
        products?.map((item) =>{
            if(item.id == id){
                selectedItem = item;
            }
        })

        if(!basketItems.find(item => item.id == id && item.size == selectedSize)){
            if(selectedItem !== undefined){
                setBasketItems(currItems=> [...currItems, 
                {id:selectedItem.id,name:selectedItem.Name,imageUrl:selectedItem.ImgUrl,size:selectedSize,price:selectedItem.Price,quantity:1}])
            }
        }else{
            basketItems.map((item)=>{
                if(item.id == id && item.size == selectedSize){
                    item.quantity++
                }
            });
        }
    }
    const removeFromBasket = (value:string,selectedSize:number)=>{
        
    }
    const updateQuantity = (quantity:number,id:number)=>{

    }
    const totalPrice = ()=>{
        return 0;
    }
    const clearBasket = ()=>{
        setBasketItems([]);
    }
    const getTotalItemCount = ()=>{
        return 0;
    }
    return <BasketProvider.Provider value={{basketItems,addToBasket,removeFromBasket,totalPrice,clearBasket,updateQuantity,getTotalItemCount}} >
        {children}
    </BasketProvider.Provider>
}