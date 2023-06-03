import { createContext, ReactNode, useContext,useEffect,useState } from "react";
import { useUserInfo } from "./UserContext";
import { supabase } from "../supabaseClient";
import { useBasketInfo } from "./BasketContext";

type OrderItem = {
    OrderNo: string,
    Date: string,
    Total:number,
    Address:string,
}

interface OrdersProvider{
    AddToOrders: (OrderNo:string,Date:string,Total:number,Address:string)=> void,
    fetchOrders: ()=> void,
    clearOrders: ()=> void,
    Orders: OrderItem[],
    pushToSupabase: (Address:string)=>void,
}
interface OrderProviderProps{
    children: ReactNode,
}
const OrdersProvider = createContext({} as OrdersProvider)

export const useOrdersInfo = ()=>{
    return useContext(OrdersProvider);
}

export const OrdersContext = ({children}:OrderProviderProps)=>{
    const {userInfo} = useUserInfo();
    const {totalPrice} = useBasketInfo();
    const [Orders,setOrders] = useState<OrderItem[]>([]);

    const pushToSupabase = async(address:string)=>{
        try{
            const { data,error } = await supabase
            .from('Orders')
            .insert({userID:userInfo.id,Total:totalPrice()}).select();
            if(error) throw error;
            else{
                console.log('added to orders');
                console.log(data);
                AddToOrders(data[0].OrderID,(data[0].Date).toString(),totalPrice(),address);
            }
        }catch(error){
            console.log(error);
        }
    }
    const AddToOrders = async(OrderNo:string,Date:string,Total:number,Address:string)=>{
        setOrders((currItems)=> [...currItems,{OrderNo,Date,Total,Address}])
    }
    const fetchOrders = async()=>{
        try{
            const { data, error } = await supabase
            .from('Orders')
            .select().eq('UserID',userInfo.id);
            if(error)throw error;
            else{
                if(data.length > 0){
                    data.map((order)=>{
                        const OrderNo:string = (order.OrderID).toString();
                        const Date:string = (order.Date).toString();
                        const Total:number = (order.Total);
                        const Address:string = (order.Address);
                        setOrders((currItems)=> [...currItems,{OrderNo,Date,Total,Address}])
                    })
                }
            }
        }catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        clearOrders();
        if(userInfo.id != ''){
            fetchOrders();
        }
    },[userInfo.id])

    const clearOrders = ()=>{
        setOrders([]);
    }
    
    return <OrdersProvider.Provider value={{AddToOrders,fetchOrders,clearOrders,Orders,pushToSupabase}}>
        {children}
    </OrdersProvider.Provider>
}