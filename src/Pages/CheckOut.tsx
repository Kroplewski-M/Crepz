import shoe from '../assets/images/NikeLogo.jpg';
import { Heart } from '../components/SVG/Heart';
import { useBasketInfo } from '../context/BasketContext';
export const CheckOut = ()=>{
    const {basketItems,updateQuantity,totalPrice} = useBasketInfo();

    return(
        <section className="w-[100vw] grid place-content-center">
            <h1 className="font-bold text-[30px] mt-10 text-center text-[#333333]">My basket</h1>
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
                                            <select name="quantity" id="quantity" value={product.quantity} className=''>
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
                                                <p className='text-center mr-5'>£{(product.price * product.quantity).toFixed(2)}</p>
                                                <Heart width={20} height={20} fill='#333333'/>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                        ))
                    }
                </tbody>
            </table>
            <div>
                    <div className=''>
                        <button>Back To Shopping</button>
                    </div>
                    <div className='flex flex-row-reverse -mt-[25px]'>
                        <button>Clear All</button>
                    </div>

                <p className='font-bold text-[#333333] text-[30px] mt-5'>Total: £{totalPrice()}</p>
                <button>Continue to checkout</button>

            </div>
        </section>
    )
}