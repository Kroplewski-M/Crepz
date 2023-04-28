import nikeShoe from '../assets/images/nikeShoe.png'

export const BasketCard = ()=>{

    return(
        <div className="w-[100%] h-[230px] md:h-[255px] bg-[#333333] rounded-md flex mt-5">
            <div className='w-[120px] md:w-[150px] h-[100%] bg-[#222222] grid place-content-center rounded-l-md'>
                <img src={nikeShoe} alt="" className='w-[100px] md:w-[130px] -rotate-[20deg]'/>
            </div>
            <div className='mt-[10px] pl-[10px] md:pl-10 flex flex-col space-y-[7px]'>
                <h1 className='text-center md:text-left font-bold text-gray-200 md:text-[20px]'>Nike Run Swift 2</h1>
                <p className='text-gray-300 md:text-[18px]'>Size: <span className='text-gray-200 font-bold'> 9 </span></p>
                <p className='text-gray-300 md:text-[18px]'>Price: <span className='text-gray-200 font-bold'> £130.96 </span></p>
                <p className='text-gray-300 md:text-[18px]'>Quantity: <span className='text-gray-200 font-bold'> 1 </span></p>

                <p className='text-gray-200 font-bold text-[20px] md:text-[24px]'>Total: £130.96</p>
                <div className='w-[80%] md:w-[170px] h-[30px] mx-auto'>
                    <button className='w-[100%] h-[100%] font-bold bg-red-600 hover:bg-red-800 rounded-md mt-5'>Remove</button>
                </div>
            </div>
        </div>
    )
}