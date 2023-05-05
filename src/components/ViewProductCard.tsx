import { useState } from "react"
import { Close } from "./SVG/Close"

interface ViewProductCardProps{
    id:string
}

export const ViewProductCard = (props:ViewProductCardProps)=>{
    const [sizes,setSizes] = useState([1,2,3,4,5]);
    return(
        <section className="w-[100vw] h-[100vh] z-50 fixed top-0 backdrop-blur-md grid place-content-center">
            <div className="w-[300px] pb-10 bg-[#333333] rounded-md relative">
                <div className="absolute right-5 top-5 hover:cursor-pointer">
                    <Close width={30} height={30} />
                </div>
                <div className="mt-16">
                    <h1 className="font-bold text-gray-200 text-[20px] text-center">Nike Run Swift 2</h1>
                    <div className="w-[100px] h-[100px] mx-auto">
                        <img className="w-[100%] h-[100%]" src="https://htxvetrvrwrdvoybymaz.supabase.co/storage/v1/object/public/ShoeImgs/c9d698e7-28d9-4d52-98cd-62599c714396.png" alt="" />
                    </div>
                    <div className="pl-10 pt-5">
                        <h1 className="font-bold text-gray-300 text-[17px]">Select Size:</h1>
                        <div className="flex flex-wrap w-[80%] mt-[10px]">
                            {
                                sizes.map(item =>(
                                    <div key={item} className="w-[40px] h-[40px] bg-gray-300 hover:bg-gray-400 hover:cursor-pointer mr-[10px] mb-[10px] grid place-content-center border-[2px] border-solid border-black/60">
                                        <p>{item}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                        <div className="w-[200px] h-[30px] mx-auto mt-5">
                            <button className="w-[100%] h-[100%] bg-gray-200">Add To Basket</button>
                        </div>
                </div>
            </div>
        </section>
    )
}