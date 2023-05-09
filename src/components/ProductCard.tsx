import { useState } from 'react';
import shoe from '../assets/images/nikeShoe.png';
import { Shoe } from "../context/ProductContext";

interface ProductsProps{
    info: Shoe,
}


export const ProductCard = (Props:ProductsProps)=>{
    const [imgLoaded,setImgLoaded] = useState<boolean>(false);

    const getImg = (url:string)=>{
        if(url == null){
            return shoe
        }
        return new URL(url, import.meta.url).href;
    }

    const getGenderColor = ()=>{
        if(Props.info.Gender == 'Male'){
            return 'bg-blue-600/60';
        }
        if(Props.info.Gender == 'Female'){
            return 'bg-pink-600/60';
        }
        if(Props.info.Gender == 'Kids'){
            return 'bg-purple-600/60';
        }
    }

    return(
        <div className="md:w-[300px] md:h-[425px] w-[165px] pb-5 md:pb-5 bg-[#333333] rounded-md relative overflow-hidden hover:cursor-pointer hover:bg-[#444444]">
            <div className={`md:w-[200px] md:h-[200px] w-[150px] h-[150px] rounded-full absolute -right-10 ${getGenderColor()}`}></div>
            <img src={getImg(Props.info.ImgUrl)} alt="" className={`md:w-[200px] w-[130px] rounded-t-md relative z-10 -rotate-[20deg] md:ml-16 ml-5 ${imgLoaded?(''):('hidden')}`} onLoad={()=>setImgLoaded(true)} />
            <div className={`md:w-[200px] md:h-[200px] h-[130px] w-[130px] rounded-md relative z-10 md:ml-16 ml-5 grid place-content-center ${imgLoaded?('hidden'):('')} animate-pulse`}>
                <p className='font-bold text-gray-200'>Img loading...</p>
            </div>
            <p className='font-bold text-gray-200 text-[16px] md:text-[20px] h-[40px] text-center md:mt-0 z-50 relative w-[90%] mx-auto'>{Props.info.Name}</p>
            <div className='pl-5 md:mt-5 mt-[5px] text-[15px] md:text-[16px]'>
                <p className='text-gray-400 '>{Props.info.Gender} Shoes</p>
                <p className='text-gray-400 '>{Props.info.Brand}</p>
                <p className='text-gray-200 font-bold pt-[5px] md:text-[25px] text-[20px]'>£{Props.info.Price}</p>
            </div>
        </div>
    )
}