import { useState } from "react"


export const Product = ()=>{
    const [sizes,setSizes] = useState<number[]>([6,7,8,9,10,11,12]);
    const [selectedSize,setSelectedSize] = useState<number>(9);

    return(
        <section className="w-[100vw] h-[100vh]">
            <div className="mt-10">
                <h1 className="font-bold text-[30px] text-center">Nike Air Max</h1>
                <div className="w-[300px] h-[200px] bg-gray-400 rounded-md mx-auto mt-5"></div>
                <div className="pl-5 pt-[5px]">
                    <p>Mens shoes</p>
                    <p className="mt-[10px] font-semibold text-[20px]">sizes:</p>
                    <div className="flex flex-wrap mt-[10px]">
                        {
                            sizes.map((size) =>
                            <div className="w-[50px] h-[30px] bg-gray-300 hover:bg-gray-400 hover:cursor-pointer mr-[10px] mb-[10px] grid place-content-center border-[1px] border-solid border-black" key={size}>
                                    <p className="font-bold">{size}</p>
                                </div>
                            )
                        }
                    </div>
                    <h1 className="font-bold text-[30px] mt-[10px]">$128.99</h1>
                </div>
                    <div className="flex flex-col w-[300px] mx-auto mt-5">
                        <button className="w-[100%] h-[35px] bg-[#333333] hover:bg-[#444444] text-gray-200 font-bold">Add To Basket</button>
                        <button className="w-[100%] h-[35px] bg-gray-400 hover:bg-gray-500 text-[#333333] font-bold mt-[10px]">Add To Favorites</button>
                    </div>
            </div>
        </section>
    )
}