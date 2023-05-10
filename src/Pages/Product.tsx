import { useEffect, useState } from "react"
import { Basket } from "../components/SVG/Basket";
import { Heart } from "../components/SVG/Heart";
import { useParams } from "react-router-dom";
import { Shoe, useProductInfo } from '../context/ProductContext';
import { useWishListInfo } from '../context/WishListContext';
import { kidsSizes, femaleSizes, mensSizes } from "../context/ProductContext";
export const Product = ()=>{
    const {id} = useParams();
    const {wishList,toggleFromWishList} = useWishListInfo();
    const {getProducts} = useProductInfo();
    const [selectedSize,setSelectedSize] = useState<number>(0);
    const [product,setProduct] = useState<Shoe>();
    
    const [loadedImg,setLoadedImg] = useState<boolean>(false);
    useEffect(()=>{
        let products = getProducts();
        products?.map(product =>{
            if(product.id == id){
                setProduct(product);
                if(product.Gender == 'Kids'){
                    setSelectedSize(3);
                }else{
                    setSelectedSize(7);
                }
            }
        })

    },[]);

    const getImg = (url:string)=>{
        if(url == null){
            return
        }
        return new URL(url, import.meta.url).href;
    }
    return(
        <section className="w-[100vw] pb-10">
            {
                product != undefined?(
                    <div className="mt-10 md:w-[70%] max-w-[2000px]  mx-auto md:pl-5 ">
                    <div className="md:flex md:space-x-3">
                        <div className="">
                            <h1 className="font-bold text-[30px] md:text-[40px] text-center md:text-left">{product.Name}</h1>
                            <div className="w-[300px] md:w-[500px] h-[200px] md:h-[300px]  rounded-md mx-auto md:mx-0 mt-5 grid place-content-center ">
                                <img src={getImg(product.ImgUrl)} alt="" className={`w-[350px] -rotate-[15deg] ${loadedImg?(''):('hidden')}`} onLoad={()=>setLoadedImg(true)}/>
                                <div className={`w-[350px] h-[350px] grid place-content-center bg-gray-300 ${loadedImg?('hidden'):('')} animate-pulse`}>
                                    <p className="font-bold text-[#333333] rounded-md">Loading...</p>
                                </div>
                            </div>
                        </div>
                        <div className="pl-5 pt-[5px] mt-[70px] md:flex md:flex-col md:space-y-5">
                            <div className="flex place-content-between pr-5">
                                <p>{product.Gender} shoes</p>
                                <p className="">Brand: {product.Brand}</p>
                            </div>
                            <p className="mt-[10px] font-semibold text-[20px]">Sizes:</p>
                            <div className="flex flex-wrap mt-[10px]">
                                {
                                    product.Gender == 'Kids'?(
                                    <>
                                        {
                                            kidsSizes.map((size) =>
                                            <div className={`${selectedSize === size?'bg-gray-700 text-gray-200':'bg-gray-300'} w-[60px] h-[30px] hover:bg-gray-400 hover:cursor-pointer mr-[10px] mb-[10px] grid place-content-center border-[1px] border-solid border-black`} 
                                            key={size} onClick={()=> setSelectedSize(size)}>
                                                    <p className="font-bold">UK: {size}</p>
                                                </div>
                                            )
                                        }
                                    </>
                                    ):(
                                    <>
                                        {
                                            product.Gender == 'Male'?(<>
                                            {
                                                mensSizes.map((size) =>
                                                    <div className={`${selectedSize === size?'bg-gray-700 text-gray-200':'bg-gray-300'} w-[60px] h-[30px] hover:bg-gray-400 hover:cursor-pointer mr-[10px] mb-[10px] grid place-content-center border-[1px] border-solid border-black`}
                                                    key={size} onClick={()=> setSelectedSize(size)}>
                                                        <p className="font-bold">UK: {size}</p>
                                                    </div>
                                                    )
                                            }
                                            </>):(<>
                                            {
                                                 femaleSizes.map((size) =>
                                                 <div className={`${selectedSize === size?'bg-gray-700 text-gray-200':'bg-gray-300'} w-[60px] h-[30px] hover:bg-gray-400 hover:cursor-pointer mr-[10px] mb-[10px] grid place-content-center border-[1px] border-solid border-black`}
                                                 key={size} onClick={()=> setSelectedSize(size)}>
                                                     <p className="font-bold">UK: {size}</p>
                                                 </div>
                                                 )
                                            }
                                            </>)
                                        }
                                    </>)
                                }
                            </div>
                            <h1 className="font-bold text-[30px] mt-[10px]">£{product.Price}</h1>
                            <div className="mt-10 w-[80%] hidden md:inline">
                                <p className="font-bold mb-[5px]">Description:</p>
                                <p>{product.Desc}</p>
                            </div>
                        </div>
    
                    </div>
                        <div className="flex flex-col md:flex-row-reverse w-[300px] md:w-[100%] mx-auto md:mx-0 mt-5 md:mt-10 md:mr-10">
                            <div className="w-[250px] h-[35px] bg-[#333333] hover:bg-[#444444] text-gray-200 font-bold grid place-content-center hover:cursor-pointer md:ml-5 mb-5 md:mb-0">
                                <div className="flex space-x-2">
                                    <p>Add to Basket</p>
                                    <Basket fill="#FFFFFF" width={25} height={25}/>
                                </div>
                            </div>
                            <div className="w-[250px] h-[35px] bg-red-500 hover:bg-red-600 text-[#333333] font-bold grid place-content-center hover:cursor-pointer"
                            onClick={()=>toggleFromWishList(product.id)}>
                                {
                                    wishList.includes(product.id)?(
                                        <div className="flex space-x-2">
                                            <p className="text-gray-200">Favorited!</p>
                                            <Heart fill="#FFFFFF" width={25} height={25}/>
                                        </div>
                                    ):(
                                        <div className="flex space-x-2">
                                            <p>Add to Favorites</p>
                                            <Heart fill="#444444" width={25} height={25}/>
                                        </div>
                                    )
                                }

                            </div>
                        </div>
                        <div className="mt-10 w-[80%] ml-5 md:hidden">
                            <p className="font-bold mb-[5px]">Description:</p>
                            <p>The radiance lives on in the Nike Air Force 1 '07, the basketball original that puts a fresh spin on what you know best: 
                                durably stitched overlays, clean finishes and the perfect amount of flash to make you shine</p>
                        </div>
                </div>
                ):(<></>)
            }
        </section>
    )
}