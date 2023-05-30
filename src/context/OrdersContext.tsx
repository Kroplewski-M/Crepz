import { createContext, ReactNode, useContext,useEffect,useState } from "react";
import { useUserInfo } from "./UserContext";
type OrderItem = {
    OrderNo: string,
    Date: string,
    Total:number,
}

interface OrdersProvider{
    AddToOrders: (OrderNo:string,Date:string,Total:number)=> void,
    fetchOrders: ()=> void,
    clearOrders: ()=> void,
    Orders: OrderItem[],
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
    const [Orders,setOrders] = useState<OrderItem[]>([]);

    const AddToOrders = (OrderNo:string,Date:string,Total:number)=>{
        setOrders((currItems)=> [...currItems,{OrderNo,Date,Total}])
    }
    
    const fetchOrders = ()=>{
        //LINK SUPABSE
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
    
    return <OrdersProvider.Provider value={{AddToOrders,fetchOrders,clearOrders,Orders}}>
        {children}
    </OrdersProvider.Provider>
}