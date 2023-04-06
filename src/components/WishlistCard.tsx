import shoe from '../assets/images/heroShoes/Nike.png';


export const WishlistCard = ()=>{

    return(
        <div className="w-[80%] md:h-[70px] rounded-md bg-gray-200 hover:cursor-pointer hover:bg-gray-300 flex flex-col md:flex-row mt-5 space-x-5">
            <div className="flex self-center md:pl-5">
                <p className="font-bold">Nike Air Force 1</p>
            </div>
            <div className='flex md:self-center '>
                <img src={shoe} alt="" className='w-[70px] h-[50px] rounded-md ml-5'/>
            </div>
            <div className='flex flex-col md:flex-row md:self-center pb-[5px] md:pb-0'>
                <p className="font-bold pl-5 md:pl-0">£108.46</p>
                <button className='bg-red-700 hover:bg-red-800 font-bold p-[2px] rounded-md ml-5 w-[70px]'>Remove</button>
            </div>
        </div>
    )
}