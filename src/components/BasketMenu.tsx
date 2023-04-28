import close from '../assets/images/close.png'

interface BasketMenuProps{
    closeMenu:()=>void,
}

export const BasketMenu = (props:BasketMenuProps)=>{
    return(
    <div className="w-[100vw] h-[100vh] bg-[#444444] fixed top-0 right-0 z-[100]">
        <img src={close} alt="" onClick={props.closeMenu} className='w-[30px] float-right mt-[5px] mr-[5px]'/>
        <p className="text-gray-200">Basket</p>
    </div>)
}