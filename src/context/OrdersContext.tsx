import { createContext, ReactNode, useContext,useEffect,useState } from "react";

type OrderItem = {
    OrderNo: string,
    Date: string,
    Total:number,
}

interface OrdersProvider{
    AddToOrders: ()=> void,
    fetchOrders: ()=> void,
    clearOrders: ()=> void,
}
interface OrderProviderProps{
    children: ReactNode,
}
const OrdersProvider = createContext({} as OrdersProvider)

export const useOrdersInfo = ()=>{
    return useContext(OrdersProvider);
}
