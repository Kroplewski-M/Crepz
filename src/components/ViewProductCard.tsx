import { useEffect, useState } from "react"
import { Close } from "./SVG/Close"
import { Shoe } from "../context/ProductContext";
import { useProductInfo } from "../context/ProductContext";
interface ViewProductCardProps{
    id:string,
    close:()=>void,
}

export const ViewProductCard = (props:ViewProductCardProps)=>{
    const [selectedProduct,setSelectedProduct] = useState<Shoe>();
    const [adultSizes,setAdultSizes] = useState<number[]>([6,7,8,9,10,11,12]);
    const [kidsSizes,setKidsSizes] = useState<number[]>([1,2,3,4,5]);
    const [selectedSize,setSelectedSize] = useState<number>(0);
    const {getProducts} = useProductInfo();
    useEffect(()=>{
        getProducts()?.map((item)=>{
            if(item.id == props.id){
                setSelectedProduct(item);
            }
        })
    },[]);
    useEffect(()=>{
        if(selectedProduct?.Gender == 'kids'){
            setSelectedSize(4);
        }else{
            setSelectedSize(9);
        }
    },[selectedProduct])
 
    return(
        <section className="w-[100vw] h-[100vh] z-[100] fixed top-0 backdrop-blur-md grid place-content-center">
            <div className="w-[300px] md:w-[500px] pb-10 bg-[#333333] rounded-md relative">
                <div onClick={props.close} className="absolute right-5 top-5 hover:cursor-pointer">
                    <Close width={30} height={30} />
                </div>
                <div className="mt-16">
                    <h1 className="font-bold text-gray-200 text-[20px] text-center">{selectedProduct?.Name}</h1>
                    <div className="w-[100px] md:w-[150px] md:h-[150px] h-[100px] mx-auto">
                        <img className="w-[100%] h-[100%]" src={selectedProduct?.ImgUrl} alt="" />
                    </div>
                    <div className="pl-10 pt-5 md:w-[80%] md:mx-auto">
                    <h1 className="text-gray-200 font-bold text-[18px] md:text-[25px] pb-[10px]">£{selectedProduct?.Price}</h1>
                        <h1 className="font-bold text-gray-300 text-[17px]">Select Size:</h1>
                        <div className="flex flex-wrap w-[80%] md:w-[100%] mt-[10px]">
                            {
                                selectedProduct?.Gender == 'Kids'?(<>
                                    {
                                        kidsSizes.map(size =>(
                                            <div key={size} className={`w-[40px] h-[40px] ${selectedSize === size?'bg-[#555555] text-gray-200':'bg-gray-300'} hover:bg-gray-400 hover:cursor-pointer mr-[10px] mb-[10px] grid place-content-center border-[2px] border-solid border-black/60`} onClick={()=>setSelectedSize(size)}>
                                                <p className="font-semibold">{size}</p>
                                            </div>
                                        ))
                                    }
                                </>):(<>
                                    {
                                        adultSizes.map(size =>(
                                            <div key={size} className={`w-[40px] h-[40px] ${selectedSize === size?'bg-[#555555] text-gray-200':'bg-gray-300'} hover:bg-gray-400 hover:cursor-pointer mr-[10px] mb-[10px] grid place-content-center border-[2px] border-solid border-black/60`} onClick={()=>setSelectedSize(size)}>
                                                <p className="font-semibold">{size}</p>
                                            </div>
                                        ))
                                    }
                                
                                </>)
                            }
                        </div>
                    </div>
                        <div className="w-[200px] h-[30px] mx-auto mt-5">
                            <button className="w-[100%] h-[100%] bg-gray-200 hover:bg-gray-300 hover:font-bold">Add To Basket</button>
                        </div>
                </div>
            </div>
        </section>
    )
}