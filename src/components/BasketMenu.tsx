import { BasketCard } from './BasketCard'
import { Close } from './SVG/Close'
import { useBasketInfo } from '../context/BasketContext'
import { useNavigate  } from 'react-router-dom';


export const BasketMenu = ()=>{
    const {basketItems,totalPrice,setState} = useBasketInfo();
    const navigate = useNavigate();
    const goToCheckout = ()=>{
        setState(false);
        navigate('/checkout');
    }
    return(
    <div className="w-[100vw] md:w-[500px] h-[100vh] bg-[#444444] fixed top-0 right-0 z-[100] overflow-y-scroll pb-[100px]">
        <div onClick={()=>setState(false)} className='w-[30px] float-right mt-[5px] mr-[5px] hover:cursor-pointer'>
            <Close width={30} height={30}/>
        </div>
        <div className='md:pl-5 mt-10'>
            <h1 className="text-gray-200 font-bold text-[35px] text-center md:text-left md:pl-[20px]">Basket</h1>
            <div className='mt-10 w-[270px] md:w-[90%] mx-auto'>
                {
                    basketItems.length == 0?(<>
                        <p className='text-gray-300 font-semibold mt-10 text-center md:text-left'>it's looking empty in here... </p>
                    </>):(<>
                        {
                            basketItems.map((item,index) =>(
                                <div key={item.id+index}>
                                    <BasketCard id={item.id} name={item.name} imageUrl={item.imageUrl} size={item.size} price={item.price} quantity={item.quantity} />
                                </div>
                            ))
                        }
                        <h1 className='text-gray-200 font-bold text-[30px] mt-5 text-center md:text-right'>Total: £{totalPrice().toFixed(2)}</h1>
                        <div className='w-[80%] h-[40px] mx-auto' onClick={()=> goToCheckout()}>
                            <button className='w-[100%] h-[100%] rounded-md font-bold bg-gray-200 text-[#333333] mt-5 hover:bg-gray-300'>Continue To Checkout</button>
                        </div>
                    </>)
                }
            </div>
        </div>
    </div>)
}