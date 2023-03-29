import close from '../assets/images/close.png'
import { MouseEventHandler,MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom';

interface Props{
    closeMenu: ()=>void,
}
export const MobileMenu = (props:Props)=>{
    const navigate = useNavigate();
    
    function redirectUser(url:string):void{
        navigate(url);
        //THIS ISNT WORKING --- FIX IT
        props.closeMenu();
    }

    return(
        <div className="w-[100vw] h-[100vh] fixed top-0 right-0 bg-[#333333] z-[100]">
            <div className='w-[100%] h-[35px]'>
                <img src={close} alt="" className='w-[35px] absolute right-5 top-2 hover:cursor-pointer'  onClick={props.closeMenu}/>
            </div>
                <div className='mt-10 flex flex-col w-[250px] pl-5 mx-auto text-gray-200 font-bold space-y-5 text-[30px] relative '>
                    <p className='hover:cursor-pointer hover:text-gray-400'>Men <span className='absolute right-10 text-[35px] leading-[40px]'>&gt;</span></p>
                    <p className='hover:cursor-pointer hover:text-gray-400'>Women <span className='absolute right-10 text-[35px] leading-[40px]'>&gt;</span></p>
                    <p className='hover:cursor-pointer hover:text-gray-400'>Kids <span className='absolute right-10 text-[35px] leading-[40px]'>&gt;</span></p>
                    <p className='hover:cursor-pointer hover:text-gray-400'>Sale <span className='absolute right-10 text-[35px] leading-[40px]'>&gt;</span></p>
                    
                    <p className='text-[16px] text-gray-300 font-semibold pt-10 w-[90%]'>Become a Crepz Member for the best
                    products at amazing prices.</p>
                    <div className='flex space-x-4 pt-[15px]'>
                        <button className='text-[15px] w-[40%] h-[30px] rounded-xl bg-gray-200 text-[#333333] hover:bg-gray-400' onClick={()=>redirectUser('/register')}>Join Us</button>
                        <button className='text-[15px] w-[40%] h-[32px] rounded-xl bg-[#222222] gray-200 hover:bg-[#444444] -mt-[1px]' onClick={()=>redirectUser('/login')}>Sign in</button>
                    </div>
                </div>
        </div>
    )
}