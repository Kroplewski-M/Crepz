import logo from '../assets/images/logo.png'
import favorites from '../assets/images/favorites.png'
import basket from '../assets/images/basket.png'
import userIcon from '../assets/images/userIcon.png'
import { useState, useEffect } from 'react'

export const Nav = ()=>{
    const [windowSize, setWindowSize] = useState<number>(getWindowSize());
    const [mobileMenu, setMobileMenu] = useState<boolean>(false);
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
            }
            if(windowSize < mobileLimit){
                setMobileMenu(true);
            }
        },[windowSize]);
  
    return(
        <>
            <nav className="w-[100vw] h-[50px] bg-[#333333] flex">
                <div className="flex space-x-2 ml-5 pt-[5px] text-gray-200 hover:cursor-pointer hover:text-gray-300 space-between">
                    <img src={logo} alt="" className='w-[35px] h-[35px]'/>
                    <p className='font-bold text-[25px] font-["Itim"]'>Crepz</p>
                </div>
                {
                    !mobileMenu?(
                        <>
                            <div className='flex space-x-5 w-[230px] mx-auto text-gray-200 font-bold pt-[10px]'>
                                <p className='hover:cursor-pointer hover:text-gray-400'>Men</p>
                                <p className='hover:cursor-pointer hover:text-gray-400'>Women</p>
                                <p className='hover:cursor-pointer hover:text-gray-400'>Kids</p>
                                <p className='hover:cursor-pointer hover:text-gray-400'>Sale</p>
                            </div>
                            <div className='flex space-x-3 mt-[7px] mr-5'>
                                <img src={favorites} alt="" className='w-[30px] h-[30px] hover:cursor-pointer'/>
                                <img src={userIcon} alt="" className='w-[30px] h-[30px] hover:cursor-pointer'/>
                                <img src={basket} alt="" className='w-[30px] h-[30px] hover:cursor-pointer'/>
                            </div>
                        </>
                    ):(
                        <>
                        </>
                    )
                }
                
            </nav>
        </>
    )
}