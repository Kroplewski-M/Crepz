import { useState } from 'react'
import { useBasketInfo } from '../context/BasketContext'
interface BasketCardProps{
    id:string,
    name:string,
    imageUrl:string,
    size:number,
    price:number,
    quantity:number,
}

export const BasketCard = (props:BasketCardProps)=>{
    const [loadedImg,setLoadedImg] = useState<boolean>(false);
    const {removeFromBasket,updateQuantity} = useBasketInfo();
    return(
        <div className="w-[100%] h-[230px] md:h-[255px] bg-[#333333] rounded-md flex mt-5 ">
            <div className='w-[120px] md:w-[150px] h-[100%] bg-[#222222] grid place-content-center rounded-l-md'>
                <img src={props.imageUrl} alt="" className={`w-[100px] md:w-[130px] -rotate-[20deg] ${loadedImg?(''):('hidden')}`} onLoad={()=>setLoadedImg(true)}/>
                <div className={`w-[100px] md:w-[130px] h-[100px] md:h-[130px] bg-[#222222] grid place-content-center animate-pulse ${loadedImg?('hidden'):('')}`}>
                    <p className='font-bold text-gray-200'>loading...</p>
                </div>
            </div>
            <div className='mt-[10px] pl-[10px] md:pl-10 flex flex-col space-y-[7px] w-[80%]'>
                <h1 className={`text-center md:text-left font-bold text-gray-200 hidden md:block ${props.name.length > 17? ('md:text-[16px]'):('md:text-[20px]')}`}>{props.name}</h1>
                <h1 className={`text-center md:text-left font-bold text-gray-200 md:hidden ${props.name.length > 17? ('md:text-[16px]'):('md:text-[20px]')}`}>{(props.name)?.substring(0,15)}...</h1>
                <p className='text-gray-300 md:text-[18px]'>Size: <span className='text-gray-200 font-bold'> {props.size} </span></p>
                <p className='text-gray-300 md:text-[18px]'>Price: <span className='text-gray-200 font-bold'> £{props.price} </span></p>
                <div className='flex space-x-2'>
                    <label htmlFor="quantity" className='text-gray-300'>Quantity:</label>
                        <select name="quantity" id="quantity" value={props.quantity} onChange={(event)=>updateQuantity(parseInt(event.target.value),props.id,props.size)} 
                        className='w-[40px] bg-gray-200 font-semibold hover:cursor-pointer rounded-sm bg-gray-200'>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                </div>
                <p className='text-gray-200 font-bold text-[20px] md:text-[24px]'>Total: £{(props.price * props.quantity).toFixed(2)}</p>
                <div className='w-[80%] md:w-[170px] h-[30px] mx-auto' onClick={()=>removeFromBasket(props.id,props.size)}>
                    <button className='w-[100%] h-[100%] font-bold bg-red-600 hover:bg-red-800 rounded-md '>Remove</button>
                </div>
            </div>
        </div>
    )
}