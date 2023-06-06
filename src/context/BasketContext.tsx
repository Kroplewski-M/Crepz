import { createContext, ReactNode, useContext,useEffect,useState } from "react";
import { useProductInfo } from "./ProductContext";
import { Shoe } from "./ProductContext";
import { supabase } from "../supabaseClient";
import { useUserInfo } from "./UserContext";
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
    updateQuantity: (quantity:number, id:string,size:number)=>void,
    basketQuantity:number,
    basketState:boolean,
    setState:(state:boolean)=>void,
}

interface BasketProviderProps{
    children:ReactNode,
}
const BasketProvider = createContext({} as BasketProvider);

export const useBasketInfo = ()=>{
    return useContext(BasketProvider);
}

export const BasketContext = ({children}:BasketProviderProps)=>{
    const {userInfo} = useUserInfo();
    const [basketItems,setBasketItems] = useState<BasketItem[]>([]);
    const [products,setProducts] = useState<Shoe[]>();
    const {getProducts} = useProductInfo();
    const [basketQuantity,setBasketQuantity] = useState<number>(0);
    const [basketState,setBasketState]= useState<boolean>(false);
    useEffect(()=>{
        setProducts(getProducts());
    },[getProducts()])

    useEffect(()=>{
        updateBasketQuantity();
    },[basketItems])

    const fetchBasket = async()=>{
        let shoe:Shoe = {id:'',Name:'',Brand:'',Desc:'',Gender:'',Price:0,ImgUrl:''};
        try{
            const { data, error } = await supabase
            .from('Basket')
            .select().eq('UserID',userInfo.id);
            if(error)throw error;
            else{
                if(data.length > 0){
                    data.map((product)=>{
                        products?.map((item) =>{
                            if(item.id == product.ShoeID){
                                setBasketItems(currItems=> [...currItems, 
                                 {id:item.id,name:item.Name,imageUrl:item.ImgUrl,size:product.ShoeSize,price:item.Price,
                                 quantity:product.ProductQuantity}])
                            }
                        })
                    })
                }
            }
        }catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        if(userInfo.id !=''){
            fetchBasket();
        }
    },[userInfo.id])
    const addtoSupabaseBasket = async(id:string,size:number)=>{
        try{
            const { error } = await supabase
            .from('Basket')
            .insert({ UserID:userInfo.id,ShoeID: id,ShoeSize:size,ProductQuantity:1});
            if(error) throw error;
            else{
                console.log('added to table');
            }
        }catch(error){
            console.log(error);
        }
    }
    const removeFromSupabaseBasket = async(id:string,size:number)=>{
        try{
            const { error } = await supabase
            .from('Basket')
            .delete()
            .eq('UserID', userInfo.id).eq('ShoeID',id).eq('ShoeSize',size);
            if(error) throw error;
            else{
                console.log('item removed');
            }
        }catch(error){
            console.log(error);
        }
    }
    const updateSupabaseBasket = async(id:string,quantity:number,size:number)=>{
        try{
            const { error } = await supabase
            .from('Basket')
            .update({ ProductQuantity: quantity })
            .eq('UserID', userInfo.id).eq('ShoeID',id).eq('ShoeSize',size);
            if(error) throw error;
            else{
                console.log('item updated!');
            }
        }catch(error){
            console.log(error);
        }
    }

    const setState = (state:boolean)=>{
        setBasketState(state);
    }
    const updateBasketQuantity = ()=>{
        let quantity = 0;
        basketItems.map((item)=>{
            quantity = quantity + (item.quantity);
        })
        setBasketQuantity(quantity);
    }
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
                addtoSupabaseBasket(selectedItem.id,selectedSize);
            }
        }else{
            basketItems.map((item)=>{
                if(item.id == id && item.size == selectedSize){
                    if(item.quantity < 10){
                        item.quantity++
                        updateSupabaseBasket(id,item.quantity,item.size);
                    }
                }
            });
        }
        setState(true);
        updateBasketQuantity();
    }
    const removeFromBasket = (id:string,size:number)=>{
        let tempBasket = basketItems.filter(function(currItems){
            if(currItems.id === id && currItems.size === size){
                return false;
            }else{
                return currItems;
            }
        })
        setBasketItems(tempBasket);
        removeFromSupabaseBasket(id,size);
    }
    const updateQuantity = (quantity:number,id:string, size:number)=>{
        let tempBasket:BasketItem[] =[];
        basketItems.map((item)=>{
            if(item.id == id && item.size == size){
                tempBasket.push({id:item.id,name:item.name,imageUrl:item.imageUrl,size:item.size,price:item.price,quantity:quantity});
                updateSupabaseBasket(id,quantity,item.size);
            }else{
                tempBasket.push(item);
            }
        }) 
        setBasketItems(tempBasket);
        
    }
    const totalPrice = ()=>{
        let total = 0;
        basketItems.map(product =>{
            total = total + (product.price * product.quantity);
        })
        return total;
    }
    const clearBasket = async()=>{
        setBasketItems([]);
        try{
            const { error } = await supabase
            .from('Basket')
            .delete()
            .eq('UserID', userInfo.id);
            if(error) throw error;
            else{
                console.log('items removed');
            }
        }catch(error){
            console.log(error);
        }
    }


    return <BasketProvider.Provider value={{basketItems,addToBasket,removeFromBasket,totalPrice,clearBasket,updateQuantity,basketQuantity,basketState,setState}} >
        {children}
    </BasketProvider.Provider>
}