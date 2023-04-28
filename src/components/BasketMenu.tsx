import { Close } from './SVG/Close'

interface BasketMenuProps{
    closeMenu:()=>void,
}

export const BasketMenu = (props:BasketMenuProps)=>{
    return(
    <div className="w-[100vw] md:w-[500px] h-[100vh] bg-[#444444] fixed top-0 right-0 z-[100] overflow:auto">
        <div onClick={props.closeMenu} className='w-[30px] float-right mt-[5px] mr-[5px] hover:cursor-pointer'>
            <Close width={30} height={30}/>
        </div>
        <div className='md:pl-5 mt-10'>
            <h1 className="text-gray-200 font-bold text-[35px] text-center md:text-left">Basket</h1>
            <p className='text-gray-300 font-semibold mt-10 text-center md:text-left'>it's looking empty in here... </p>
        </div>
    </div>)
}