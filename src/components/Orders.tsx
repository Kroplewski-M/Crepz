import { OrdersCard } from "./OrdersCard"
import { supabase } from "../supabaseClient"
import { useEffect, useState } from "react"
import { useUserInfo } from "../context/UserContext"

interface Order{
    ID:string,
    Date:string,
    Total:number,
}

export const Orders = ()=>{
    const {userInfo} = useUserInfo();
    const [orders,setOrders] = useState<Order[]>([]);
    useEffect(()=>{
        const fetchOrders = async()=>{
            try{
                const { data, error } = await supabase
                    .from('Orders')
                    .select().eq('UserID',userInfo.id);
                if(error)throw error;
                else{
                    data.map(order=>{
                        setOrders(currItems=>[...currItems,{ID:order.OrderID,Date:order.Date,Total:(order.Total).toFixed(2)}]);
                    })
                }
            }catch(error){
                console.log('error');
            }
        }   
        fetchOrders();
    },[]);

    return(
        <div className="pl-10">
            <h1 className="font-bold text-gray-200 text-[25px] pt-5">Order history:</h1>
            <div className="mt-5 ">
                {
                    orders.length>0?(
                        orders.map(order=>(
                            <div key={order.ID}>
                                <OrdersCard OrderNo={order.ID} Date={order.Date} Total={order.Total}/>
                            </div>
                        ))
                    ):(
                        <p className="font-bold text-gray-200">You havent made any orders!</p>
                    )
                }
            </div>
        </div>
    )
}