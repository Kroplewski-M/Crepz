import { OrdersCard } from "./OrdersCard"

export const Orders = ()=>{


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