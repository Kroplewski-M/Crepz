import { useNavigate } from "react-router-dom"
interface OrderCardProps{
    OrderNo:string,
    Date:string,
    Total:number,
}

export const OrdersCard = (props:OrderCardProps)=>{
    const navigate = useNavigate();

    return(
        <div className="w-[80%] md:h-[70px] rounded-md bg-gray-200 hover:cursor-pointer hover:bg-gray-300 flex mt-5" onClick={()=>navigate(`/OrderConfirmation/${props.OrderNo}`)}>
            <div className="flex md:flex-row flex-col self-center md:space-x-7 text-center md:text-left">
                <div className="flex flex-col pl-5">
                    <p className="text-gray-600">Order No.</p>
                    <p className="font-bold text-[12px] md:w-[200px] w-[80%]">#{props.OrderNo}</p>
                </div>
                <div className="flex flex-col">
                    <p className="text-gray-600">Date</p>
                    <p className="font-bold text-[13px]">{props.Date}</p>
                </div>
                <div className="flex flex-col ">
                    <p className="text-gray-600">Total</p>
                    <p className="font-bold text-[13px]">£{props.Total}</p>
                </div>
            </div>
        </div>
    )
}