import { useNavigate } from 'react-router-dom';
import {useUserInfo} from '../context/UserContext';
import { Close } from './SVG/Close';
import { useFilterInfo } from '../context/FilterContext';
interface Props{
    closeMenu: ()=>void,
}
export const MobileMenu = (props:Props)=>{
    const {loginUser,logoutUser,userInfo} = useUserInfo();
    const {SetGenderTrue,ResetFilter} = useFilterInfo();
    const navigate = useNavigate();
    
    function redirectUser(url:string):void{
        navigate(url);
        props.closeMenu();
    }
    const redirectAndFilter = (value:string) =>{
        SetGenderTrue(value);
        navigate('/browse');
        props.closeMenu();
    }   
    return(
        <div className="w-[100vw] h-[100vh] fixed top-0 right-0 bg-[#333333] z-[100]">
            <div onClick={props.closeMenu} className='w-[35px] h-[35px] absolute right-5 top-2 hover:cursor-pointer'>
                <Close width={35} height={35}/>
            </div>
                <div className='mt-10 flex flex-col w-[250px] pl-5 mx-auto text-gray-200 font-bold space-y-5 text-[30px] relative '>
                    <p className='hover:cursor-pointer hover:text-gray-400' onClick={()=>redirectUser('/browse')}>All <span className='absolute right-10 text-[35px] leading-[40px]'>&gt;</span></p>
                    <p className='hover:cursor-pointer hover:text-gray-400' onClick={()=>redirectAndFilter('Male')}>Male<span className='absolute right-10 text-[35px] leading-[40px]'>&gt;</span></p>
                    <p className='hover:cursor-pointer hover:text-gray-400' onClick={()=>redirectAndFilter('Female')}>Female <span className='absolute right-10 text-[35px] leading-[40px]'>&gt;</span></p>
                    <p className='hover:cursor-pointer hover:text-gray-400' onClick={()=>redirectAndFilter('Kids')}>Kids <span className='absolute right-10 text-[35px] leading-[40px]'>&gt;</span></p>                    
                    {
                        userInfo.id==''?(
                            <>
                                <p className='text-[16px] text-gray-300 font-semibold pt-10 w-[90%]'>Become a Crepz Member for the best
                                products at amazing prices.</p>
                                <div className='flex space-x-4 pt-[15px]'>
                                    <button className='text-[15px] w-[40%] h-[30px] rounded-xl bg-gray-200 text-[#333333] hover:bg-gray-400' onClick={()=>redirectUser('/register')}>Join Us</button>
                                    <button className='text-[15px] w-[40%] h-[32px] rounded-xl bg-[#222222] gray-200 hover:bg-[#444444] -mt-[1px]' onClick={()=>redirectUser('/login')}>Sign in</button>
                                </div>
                            </>
                        ):(
                            <div>
                                <p className='text-[16px] text-gray-300 font-semibold pt-10 w-[90%] mb-[15px]'>Go to your account to view your profile informationm your previous orders
                                and look at your wish list.</p>
                                <button className='w-[200px] h-[30px] rounded-md bg-gray-200 text-[#333333] text-[16px]' onClick={()=>redirectUser('/profile/user')}>View Account</button>
                            </div>
                        )
                    }

                </div>
        </div>
    )
}