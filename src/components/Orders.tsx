import { OrdersCard } from "./OrdersCard"
import { supabase } from "../supabaseClient"
import { useEffect } from "react"
import { useUserInfo } from "../context/UserContext"
export const Orders = ()=>{
    const {userInfo} = useUserInfo();
    useEffect(()=>{
        const fetchOrders = async()=>{
            try{
                const { data, error } = await supabase
                    .from('Orders')
                    .select().eq('UserID',userInfo.id);
                if(error)throw error;
            }catch(error){
                console.log('error');
            }
        }   
    },[]);

    return(
        <div className="pl-10">
            <h1 className="font-bold text-gray-200 text-[25px] pt-5">Order history:</h1>
            <div className="mt-5 ">
                <OrdersCard />
                <OrdersCard />
                <OrdersCard />

            </div>
        </div>
    )
}