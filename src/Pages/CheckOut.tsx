import { Bin } from '../components/SVG/Bin';
import { useBasketInfo } from '../context/BasketContext';
import { useNavigate } from 'react-router-dom';
export const CheckOut = ()=>{
    const {basketItems,updateQuantity,totalPrice,removeFromBasket,clearBasket} = useBasketInfo();
    const navigate = useNavigate();
    return(
        <section className="w-[100vw] grid place-content-center pb-10">
            <h1 className="font-bold text-[30px] mt-10 text-center text-[#333333]">My basket</h1>
            {
                basketItems.length == 0?(<>
                <div className='mt-10'>
                    <p className='text-[20px] font-semibold mb-5'>Your basket is empty!</p>
                    <div className='w-[200px] h-[35px]' onClick={()=>navigate('/browse')}>
                        <button className='w-[100%] h-[100%] bg-[#333333] hover:bg-[#444444] font-bold text-gray-200'>Browse items</button>
                    </div>
                </div>
                </>):(<>
                    <table className="table-auto mt-5 ">
                        <thead className="bg-[#333333] text-gray-200">
                            <tr>
                                <th className="w-[200px]">Name:</th>
                                <th className='w-[200px]'>Price:</th>
                                <th className='w-[200px]'>Quantity:</th>
                                <th className='w-[200px]'>Total:</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                basketItems.map(product =>(
                                        <tr className='bg-gray-200 h-[70px] border-b border-black'>
                                            <td className='flex pt-[10px]'>
                                                <img src={product.imageUrl} alt="" className='w-[70px] ml-[5px] -rotate-[15deg]'/>
                                                <p className='ml-[10px]'>{product.name}</p>
                                            </td>
                                            <td>
                                                <p className='text-center'>£{product.price}</p>
                                            </td>
                                            <td>
                                                <div className='w-[65px] mx-auto'>
                                                    <select name="quantity" id="quantity" value={product.quantity} onChange={(event)=>updateQuantity(parseInt(event.target.value),product.id,product.size)}
                                                    className='w-[50px] bg-gray-200 font-semibold hover:cursor-pointer rounded-sm '>
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
                                            </td>
                                            <td>
                                                <div className='grid place-content-center'>
                                                    <div className='flex'>
                                                        <p className='text-center mr-5 font-semibold'>£{(product.price * product.quantity).toFixed(2)}</p>
                                                        <div className='hover:cursor-pointer' onClick={()=> removeFromBasket(product.id,product.size)}>
                                                            <Bin width={20} height={20} fill='#CC2222'/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    <div>
                        <div className='w-[170px] h-[30px] mt-5' onClick={()=> navigate('/browse')}>
                            <button className='w-[100%] h-[100%] bg-[#333333] hover:bg-[#444444] text-gray-200 rounded-sm'> ← Back To Shopping</button>
                        </div>
                        <div className='flex flex-row-reverse -mt-[33px]' onClick={()=> clearBasket()}>
                            <div className='grid place-content-center w-[120px] h-[30px] bg-[#D10000] hover:bg-[#FF5555] hover:cursor-pointer rounded-sm'>
                                <div className='flex'>
                                    <p className='pl-[5px] pr-[10px] text-gray-100 font-semibold'>Clear All</p>
                                    <Bin width={20} height={20} fill='#FFFFFF'/>
                                </div>
                            </div>
                    </div>

                    <p className='font-bold text-[#333333] text-[30px] mt-5'>Total: £{totalPrice().toFixed(2)}</p>
                    <div className='w-[220px] h-[40px] mt-5 '>
                        <button className='w-[100%] h-[100%] bg-[#333333] hover:bg-[#444444] font-bold text-gray-200 rounded-sm text-[19px]'>Continue to checkout</button>
                    </div>
                    </div>
                </>)
            }
        </section>
    )
}