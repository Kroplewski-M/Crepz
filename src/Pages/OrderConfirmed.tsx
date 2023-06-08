import { useEffect, useState } from "react";
import { Bag } from "../components/SVG/Bag"
import { useParams } from "react-router-dom";
import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";
interface Order{
    ID:string
    Total:number,
    Date:string,
    Address:string,
    Items:object,
}

export const OrderConfirmed = ()=>{
    const navigate = useNavigate();
    const {orderID} = useParams();
    const [order,SetOrder] = useState<Order>();

    useEffect(()=>{
        const fetchOrder = async()=>{
            try{
                const { data, error } = await supabase
                    .from('Orders')
                    .select().eq('OrderID',orderID);
                if(error) throw error;
                else{
                    console.log(data);
                    if(data.length == 0){
                        navigate('/');
                    }else{
                        SetOrder({ID:data[0].OrderID,Total: data[0].Total, Address:data[0].Address,Date:data[0].Date,Items:(JSON.parse(data[0].Items))});
                    }
                }
            }catch(error){
                console.log(error);
                navigate('/');
            }
        }
        fetchOrder();  
    },[])

    return(
        <section className="w-[100vw] h-[70vh]  grid place-content-center">
            {
                order !== undefined?(<>
                <div className="w-[70px] mx-auto mb-5">
                    <Bag width={70} height={70} fill="#222222" />
                </div>
                <div className="text-center">
                    <h1 className="font-bold text-[20px]">Thank you! Your order is confirmed.</h1>
                    <p className="font-semibold mt-5">Order number: <span className="block">#{order.ID}</span></p>
                </div>
                <div className="grid place-content-center">
                    <div className="w-[150px] mt-5">
                        <p className="font-bold">Address:</p>
                        <p>{order.Address}</p>
                    </div>
                    <p className="mt-5 mb-5">Order Details:</p>
                    <div className="flex flex-wrap flex-col">
                    {
                        Object.values(order.Items).map(item=>(
                            <div className="min-h-[30px] rounded-sm odd:bg-gray-300 flex space-x-5 px-[5px]" key={item.Name + item.Size}>
                                <p>Name: {item.Name}</p>
                                <p>Size: {item.Size}</p>
                                <p>Quantity: {item.Quantity}</p>
                                <p>Total Price: £{item.Total.toFixed(2)}</p>
                            </div>
                        ))
                    }
                    </div>
                </div>
                <div className="w-[200px] h-[30px] mx-auto mt-10" onClick={()=>navigate('/')}>
                    <button className="w-[100%] h-[100%] bg-[#333333] text-gray-200 ">Return Home</button>
                </div>
                </>):(<section className="grid place-content-center">
                    <p className="font-bold">Loading Order...</p>
                </section>)
            }

        </section>
    )
}