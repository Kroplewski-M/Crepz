import { useState,useEffect } from 'react'
import filterIcon from '../assets/images/filter.png'
import { Filter } from '../components/Filter'
import { ProductCard } from '../components/ProductCard';


export const Browse = ()=>{
    const [showFilter, setShowFilter] = useState<boolean>(true);
    const [windowSize, setWindowSize] = useState<number>(getWindowSize());
    const [sortArrow, setSortArrow] = useState<string>('↓');
    const mobileLimit:number = 768;

    //SET FILTER DISPLAY DEPENDING ON SCREEN SIZE
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
        if(windowSize >= mobileLimit && !showFilter){
          setShowFilter(true);
        }
        if(windowSize < mobileLimit){
            setShowFilter(false);
        }
    },[windowSize]);


    const closeFilter = ()=>{
        setShowFilter(false);
    }
    const flipSort = ()=>{
        if(sortArrow === '↑'){
            setSortArrow('↓');
        }else{
            setSortArrow('↑');
        }
    } 
    //FILTER LOGIC
    const [minPrice,setMinPrice] = useState<number>(0);
    const [maxPrice,setMaxPrice] = useState<number>(2000);
    const setMinFilter = (value:number)=>{
        setMinPrice(value);
    }
    const setMaxFilter = (value:number)=>{
        setMaxPrice(value);
    }
    return(
        <section className="w-[100vw] max-w-[2000px]  mx-auto pb-10 pt-16">
            <div className="w-[200px] mx-auto flex space-x-3">
                <div className='grid place-content-center w-[95px] h-[40px] bg-[#333333] hover:cursor-pointer md:hidden' onClick={()=>setShowFilter(true)}>
                    <div className='flex space-x-2'>
                        <p className='text-gray-200 '>Filter</p>
                        <img src={filterIcon} alt="" className='w-[20px] h-[20px]' />
                    </div>
                </div>
                <div className='grid place-content-center w-[95px] h-[40px] bg-[#333333] hover:cursor-pointer' onClick={flipSort}>
                    <div className='flex space-x-2'>
                        <p className='text-gray-200 '>Sort</p>
                        <p className='text-gray-300'>{sortArrow}</p>
                    </div>
                </div>
            </div>
            <div className='flex mt-10'>
                {
                    showFilter?(
                    <Filter closeFilter={closeFilter} minPrice={minPrice} maxPrice={maxPrice} setMinFilter={setMinFilter} setMaxFilter={setMaxFilter}/>):(<></>)
                }
                <section className='w-[70%] ml-16 flex flex-wrap'>
                    <ProductCard /> 
                    <ProductCard /> 
                    <ProductCard /> 
                    <ProductCard /> 
                    <ProductCard /> 
                    <ProductCard /> 
                    <ProductCard /> 
                </section>
            </div>
        </section>
    )
}