import close from '../assets/images/close.png'
import { MouseEventHandler } from 'react'

interface Props{
    closeMenu: MouseEventHandler<HTMLDivElement>,
}
export const MobileMenu = (props:Props)=>{


    return(
        <div className="w-[100vw] h-[100vh] fixed top-0 right-0 bg-[#333333]" onClick={props.closeMenu}>
                <img src={close} alt="" className='w-[35px] absolute right-5 top-2'/>
        </div>
    )
}