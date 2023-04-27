import shoe from '../assets/images/nikeShoe.png';
import { Heart } from './SVG/Heart'
import { useState } from 'react';
import { Shoe } from "../context/ProductContext";

interface ProductsProps{
    info: Shoe,
}


export const ProductCard = (Props:ProductsProps)=>{
    const [favorite,setFavorite] = useState<boolean>(false);
    const [color,setColor] = useState<string>('#FFFFFF');

    const changeColor = ()=>{
        setFavorite(!favorite);
        if(favorite)
            setColor('#FF0000');
        else
            setColor('#FFFFFF');
    }
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
        <div className="md:w-[300px] md:h-[425px] w-[200px] pb-5 md:pb-5 bg-[#333333] rounded-md relative overflow-hidden hover:cursor-pointer hover:bg-[#444444]">
            <div className={`md:w-[200px] md:h-[200px] w-[150px] h-[150px] rounded-full absolute -right-10 ${getGenderColor()}`}></div>
            <div className='absolute w-[35px] h-[35px] ml-[5px] mt-[5px] rounded-full bg-[#444444] grid place-content-center hover:cursor-pointer' onClick={changeColor}>
                <Heart fill={color} width={20} height={20} />
            </div>
            <img src={getImg(Props.info.ImgUrl)} alt="" className='md:w-[200px] w-[150px] rounded-t-md relative z-10 -rotate-[20deg] md:ml-16 ml-5'/>
            <p className='font-bold text-gray-200 text-[20px] h-[40px] text-center md:mt-0 z-50 relative w-[90%] mx-auto'>{Props.info.Name}</p>
            <div className='pl-5 mt-5'>
                <p className='text-gray-400 '>{Props.info.Gender} Shoes</p>
                <p className='text-gray-400 '>{Props.info.Brand}</p>
                <p className='text-gray-200 font-bold pt-[5px] text-[25px]'>£{Props.info.Price}</p>
            </div>
            <div className='md:w-[200px] w-[150px] mx-auto'>
                <button className='w-[100%] h-[30px] rounded-md bg-gray-200 hover:bg-gray-300 text-[#333333] font-bold mt-[10px]'>Add to basket</button>
            </div>
        </div>
    )
}