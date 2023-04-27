import { useProductInfo } from '../context/ProductContext';
import { Shoe } from '../context/ProductContext';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useWishListInfo } from '../context/WishListContext';

interface WishListProps{
    itemID:string
}
export const WishlistCard = (Props:WishListProps)=>{
    const {getProducts} = useProductInfo();
    const navigate = useNavigate();
    const {removeFromWishlist} = useWishListInfo();
    const [product,setProduct] = useState<Shoe>();
    
    useEffect(()=>{
        const products = getProducts();
        products?.map(product =>{
            if(product.id == Props.itemID){
                setProduct(product);
            }
        })
    },[]);

    return(
        <div className="w-[80%] md:h-[70px] rounded-md bg-gray-200 hover:cursor-pointer hover:bg-gray-300 flex flex-col md:flex-row mt-5 space-x-5 pr-5">
            {
                product != undefined?(<>
                    <div className='w-[100%] h-[100%] flex flex-col md:flex-row space-x-5' onClick={()=> navigate(`/product/${product.id}`)}>
                        <div className="flex self-center md:pl-5">
                            <p className="font-bold">{(product.Name)?.substring(0,15)}</p>
                        </div>
                        <div className='flex self-center bg-gray-400 rounded-md w-[80px] '>
                                <img src={product.ImgUrl} alt="" className='w-[70px] h-[50px] rounded-md mx-[5px]'/>
                        </div>
                        <div className='flex flex-col md:flex-row self-center pb-[5px] md:pb-0'>
                            <p className="font-bold pl-5 md:pl-0">£{product.Price}</p>
                        </div>
                    </div>
                    <div className='w-[70px] h-[30px] flex self-center' onClick={()=>removeFromWishlist(product.id)}>
                        <button className='bg-red-700 hover:bg-red-800 font-bold p-[2px] rounded-md w-[100%] h-[100%] pl-[5px] mb-[5px] md:mb-0 '>Remove</button>
                    </div>
                </>):(<></>)
            }
        </div>
    )
}