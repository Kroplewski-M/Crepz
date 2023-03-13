import logo from '../assets/images/logo.png'
import favorites from '../assets/images/favorites.png'
import basket from '../assets/images/basket.png'
import userIcon from '../assets/images/userIcon.png'
import { useState, useEffect } from 'react'
import mobileMenuIcon from '../assets/images/mobileMenu.png'
import  {MobileMenu}  from './MobileMenu'
import { MouseEventHandler } from 'react'

export const Nav = ()=>{
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
    return(
        <>
            <nav className="w-[100vw] h-[60px] bg-[#333333] flex">
                <div className="flex space-x-2 ml-5 text-gray-200 hover:cursor-pointer hover:text-gray-400 space-between self-center">
                    <img src={logo} alt="" className='w-[35px] h-[35px]'/>
                    <p className='font-bold text-[25px] font-["Itim"]'>Crepz</p>
                </div>
                {
                    !mobileMenu?(
                        <>
                            <div className='flex space-x-5 w-[230px] mx-auto text-gray-200 font-bold self-center'>
                                <p className='hover:cursor-pointer hover:text-gray-400'>Men</p>
                                <p className='hover:cursor-pointer hover:text-gray-400'>Women</p>
                                <p className='hover:cursor-pointer hover:text-gray-400'>Kids</p>
                                <p className='hover:cursor-pointer hover:text-gray-400'>Sale</p>
                            </div>
                            <div className='flex space-x-3 mt-[7px] mr-5 self-center -mt-[5px]'>
                                <img src={favorites} alt="" className='w-[30px] h-[30px] hover:cursor-pointer hover:brightness-50'/>
                                <img src={userIcon} alt="" className='w-[30px] h-[30px] hover:cursor-pointer hover:brightness-50'/>
                                <img src={basket} alt="" className='w-[30px] h-[30px] hover:cursor-pointer hover:brightness-50'/>
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