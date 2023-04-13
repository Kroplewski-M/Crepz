import logo from '../assets/images/logo.png'
import basket from '../assets/images/basket.png'
import { useState, useEffect } from 'react'
import mobileMenuIcon from '../assets/images/mobileMenu.png'
import  {MobileMenu}  from './MobileMenu'
import { useNavigate  } from 'react-router-dom';
import {useUserInfo} from '../context/UserContext';
import { Heart } from './SVG/Heart'
import { Basket } from './SVG/Basket'
import {UserIcon} from './SVG/UserIcon'

export const Nav = ()=>{
    const {loginUser,logoutUser,userInfo} = useUserInfo();
    const navigate = useNavigate();
    const [windowSize, setWindowSize] = useState<number>(getWindowSize());
    const [mobileMenu, setMobileMenu] = useState<boolean>(false);
    const [showMobileMenu,setShowMobileMenu] = useState<boolean>(false);
    const mobileLimit:number = 768;

    function getWindowSize() {
        const innerWidth:number = window.innerWidth;
        return innerWidth;
      }

    useEffect(() => {
        function handleWindowResize() {
          setWindowSize(getWindowSize());
        }
        window.addEventListener('resize', handleWindowResize);
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      }, []);

        useEffect(() =>{
            if(windowSize >= mobileLimit && mobileMenu){
              setMobileMenu(false);
              setShowMobileMenu(false);
            }
            if(windowSize < mobileLimit){
                setMobileMenu(true);
            }
        },[windowSize]);
        
        const closeMobileMenu =():void=>{
            setShowMobileMenu(false);
        }
        const isLoggedIn = ()=>{
            if(userInfo.id == ""){
                navigate('/register');
            }else{
                navigate('/profile/user');
            }
        }
        const wishListRedirect = () =>{
            if(userInfo.id == ""){
                navigate('/register');
            }else{
                navigate('/profile/wishlist')
            }
        }
    return(
        <>
            <nav className="w-[100vw] h-[70px] bg-[#444444] flex z-50">
                <div className="flex space-x-2 ml-5 text-gray-200 hover:cursor-pointer hover:text-gray-400 space-between self-center" onClick={()=> navigate('/')}>
                    <img src={logo} alt="" className='w-[35px] h-[35px]'/>
                    <p className='font-bold text-[25px] font-["Itim"]'>Crepz</p>
                </div>
                {
                    !mobileMenu?(
                        <>
                            <div className='flex space-x-7 w-[230px] mx-auto text-gray-200 font-bold self-center text-[20px]'>
                                <p className='hover:cursor-pointer hover:text-gray-400 hover:underline underline-offset-4 decoration-2'>Men</p>
                                <p className='hover:cursor-pointer hover:text-gray-400 hover:underline underline-offset-4 decoration-2'>Women</p>
                                <p className='hover:cursor-pointer hover:text-gray-400 hover:underline underline-offset-4 decoration-2'>Kids</p>
                                <p className='hover:cursor-pointer hover:text-gray-400 hover:underline underline-offset-4 decoration-2'>Sale</p>
                            </div>
                            <div className='flex space-x-3 mr-5 self-center -mt-[7px]'>
                                <div onClick={wishListRedirect} className='hover:cursor-pointer hover:brightness-50'>
                                    <Heart fill="#FFFFFF" width={30} height={30} />
                                </div>
                                <div className='hover:cursor-pointer hover:brightness-50' onClick={isLoggedIn}>
                                    <UserIcon fill="#FFFFFF" width={35} height={30} />
                                </div>
                                <div className='hover:cursor-pointer hover:brightness-50'>
                                    <Basket fill="#FFFFFF" width={35} height={35}/>
                                </div>
                            </div>
                        </>
                    ):(
                        <div className='w-[100%] flex place-content-end	self-center -mt-[5px]'>
                            <img src={basket} alt="" className='w-[40px] h-[40px] hover:cursor-pointer hover:brightness-50 mr-5 mt-[3px]'/>
                            <img src={mobileMenuIcon} alt="" onClick={()=> setShowMobileMenu(true)} className='w-[30px] h-[30px] mr-5 mt-[10px] hover:cursor-pointer'/>
                        </div>
                    )
                }
                {
                    showMobileMenu?(
                        <MobileMenu closeMenu={closeMobileMenu}/>
                    ):(
                        <></>
                    )
                }
            </nav>
        </>
    )
}