import shoe from '../assets/images/nikeShoe.png';
import favorites from '../assets/images/favorites.png'


export const ProductCard = ()=>{


    return(
        <div className="w-[300px] h-[400px] bg-[#333333] rounded-md relative overflow-hidden ml-5 mt-5 hover:cursor-pointer hover:bg-[#444444]">
            <div className='w-[200px] h-[200px] rounded-full bg-blue-600 absolute -right-10'></div>
            <div className='absolute w-[35px] h-[35px] ml-[5px] mt-[5px] rounded-full bg-[#444444] grid place-content-center hover:cursor-pointer'>
                <img src={favorites} alt="" className='w-[30px]'/>
            </div>
            <img src={shoe} alt="" className='w-[100%] rounded-t-md relative z-10 -rotate-[20deg]'/>
            <p className='font-bold text-gray-200 text-[20px] text-center mt-10 md:mt-0'>Nike Air Force 1</p>
            <div className='pl-5 mt-5'>
                <p className='text-gray-400 '>Mens Shoes</p>
                <p className='text-gray-400 '>3 colors</p>
                <p className='text-gray-200 font-bold pt-[5px]'>$78.99</p>
            </div>
            <div className='w-[200px] mx-auto'>
                <button className='w-[100%] h-[30px] rounded-md bg-gray-200 hover:bg-gray-300 text-[#333333] font-bold mt-[10px]'>Add to basket</button>
            </div>
        </div>
    )
}