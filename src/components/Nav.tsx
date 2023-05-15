import logo from '../assets/images/logo.png'
import { useState, useEffect } from 'react'
import  {MobileMenu}  from './MobileMenu'
import { useNavigate  } from 'react-router-dom';
import {useUserInfo} from '../context/UserContext';
import { Heart } from './SVG/Heart'
import { Basket } from './SVG/Basket'
import {UserIcon} from './SVG/UserIcon'
import { useFilterInfo } from '../context/FilterContext'
import {BasketMenu} from '../components/BasketMenu'
import { BurgerMenu } from './SVG/BugerMenu'
import { useBasketInfo } from '../context/BasketContext';
export const Nav = ()=>{
    const {SetGenderTrue,ResetFilter} = useFilterInfo();
    const {loginUser,logoutUser,userInfo} = useUserInfo();
    const {basketItems} = useBasketInfo();
    const navigate = useNavigate();
    const [windowSize, setWindowSize] = useState<number>(getWindowSize());
    const [mobileMenu, setMobileMenu] = useState<boolean>(false);
    const [showMobileMenu,setShowMobileMenu] = useState<boolean>(false);
    const [showBasket, setShowBasket] = useState<boolean>(false);
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
        const closeBasketMenu=():void=>{
            setShowBasket(false)
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
        const redirectAndFilter = (value:string) =>{
            SetGenderTrue(value);
            navigate('/browse');
        }   
        const resetFilterAndRedirect = ()=>{
            ResetFilter();
            navigate('/browse');
        }
        const getBasketCount = ()=>{
            return basketItems.length;
        }
    return(
        <>
            <nav className="w-[100vw] h-[70px] bg-[#333333] flex z-50">
                <div className="flex space-x-2 ml-5 text-gray-200 hover:cursor-pointer hover:text-gray-400 space-between self-center" onClick={()=> navigate('/')}>
                    <img src={logo} alt="" className='w-[35px] h-[35px]'/>
                    <p className='font-bold text-[25px] font-["Itim"]'>Crepz</p>
                </div>
                {
                    !mobileMenu?(
                        <>
                            <div className='flex space-x-7 w-[230px] mx-auto text-gray-200 font-bold self-center text-[20px]'>
                                <p className='hover:cursor-pointer hover:text-gray-400 hover:underline underline-offset-4 decoration-2' onClick={resetFilterAndRedirect}>All</p>
                                <p className='hover:cursor-pointer hover:text-gray-400 hover:underline underline-offset-4 decoration-2' onClick={()=>redirectAndFilter('Male')}>Male</p>
                                <p className='hover:cursor-pointer hover:text-gray-400 hover:underline underline-offset-4 decoration-2' onClick={()=>redirectAndFilter('Female')}>Female</p>
                                <p className='hover:cursor-pointer hover:text-gray-400 hover:underline underline-offset-4 decoration-2' onClick={()=>redirectAndFilter('Kids')}>Kids</p>
                            </div>
                            <div className='flex space-x-3 mr-5 self-center -mt-[7px]'>
                                <div onClick={wishListRedirect} className='hover:cursor-pointer hover:brightness-50'>
                                    <Heart fill="#FFFFFF" width={30} height={30} />
                                </div>
                                <div className='hover:cursor-pointer hover:brightness-50' onClick={isLoggedIn}>
                                    <UserIcon fill="#FFFFFF" width={30} height={30} />
                                </div>
                                <div className='hover:cursor-pointer hover:brightness-50 relative' onClick={()=> setShowBasket(true)}>
                                    <div className='w-[20px] h-[20px] rounded-full bg-red-600 grid place-content-center absolute -top-1 -left-1'>
                                        <p className='font-bold text-gray-300'>{getBasketCount()}</p>
                                    </div>
                                        <Basket fill="#FFFFFF" width={30} height={30}/>
                                </div>
                            </div>
                        </>
                    ):(
                        <div className='w-[100%] flex place-content-end	self-center -mt-[5px]'>
                            <div className='hover:cursor-pointer hover:brightness-50 mr-5 mt-[3px] relative' onClick={()=> setShowBasket(true)}>
                                <div className='w-[20px] h-[20px] rounded-full bg-red-600 grid place-content-center absolute -top-1 -left-1'>
                                    <p className='font-bold text-gray-300'>{getBasketCount()}</p>
                                </div>
                                <Basket width={35} height={35} fill='#FFFFFF' />
                            </div>
                            <div onClick={()=> setShowMobileMenu(true)} className='w-[30px] h-[30px] mr-5 mt-[5px] hover:cursor-pointer'>
                                <BurgerMenu width={35} height={35} fill='#FFFFFF'/>
                            </div>
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
                {
                    showBasket?(<BasketMenu closeMenu={closeBasketMenu} />):(<></>)
                }
            </nav>
        </>
    )
}