

export const OrdersCard = ()=>{
    

    return(
        <div className="w-[80%] md:h-[70px] rounded-md bg-gray-200 hover:cursor-pointer hover:bg-gray-300 flex mt-5">
            <div className="flex md:flex-row flex-col self-center md:space-x-7">
                <div className="flex flex-col pl-5">
                    <p className="text-gray-600">Order No.</p>
                    <p className="font-bold">#45346535645234</p>
                </div>
                <div className="flex flex-col pl-5">
                    <p className="text-gray-600">Date</p>
                    <p className="font-bold">05/04/2023</p>
                </div>
                <div className="flex flex-col pl-5">
                    <p className="text-gray-600">Total</p>
                    <p className="font-bold">£108.46</p>
                </div>
            </div>
        </div>
    )
}