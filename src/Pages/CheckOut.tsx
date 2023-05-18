import shoe from '../assets/images/NikeLogo.jpg';
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
                    <tr className='bg-gray-200 h-[70px] border-b border-black'>
                        <td className='flex pt-[10px]'>
                                <img src={shoe} alt="" className='w-[70px] ml-[5px]'/>
                                <p className='ml-[10px]'>Nike Air Max 2</p>
                        </td>
                        <td>
                            <p className='text-center'>£300</p>
                        </td>
                        <td>
                            <div className='w-[65px] mx-auto'>
                                <select name="quantity" id="quantity" value='1' className=''>
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
                            <p className='text-center'>£300</p>
                        </td>
                    </tr>
                    <tr className='bg-gray-200 h-[70px] border-b border-black'>
                        <td className='flex pt-[10px]'>
                                <img src={shoe} alt="" className='w-[70px] ml-[5px]'/>
                                <p className='ml-[10px]'>Nike Air Max 2</p>
                        </td>
                        <td>
                            <p className='text-center'>£300</p>
                        </td>
                        <td>
                            <div className='w-[65px] mx-auto'>
                                <select name="quantity" id="quantity" value='1' className=''>
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
                            <p className='text-center'>£300</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}