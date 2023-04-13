import { useState,useEffect } from 'react'
import filterIcon from '../assets/images/filter.png'
import { Filter } from '../components/Filter'
import { ProductCard } from '../components/ProductCard';

type Brand = {
    brand:string;
    checked:boolean;
}
type Gender = {
    gender: "Male" | "Female" | "Kids";
    checked:boolean;
}
export type Shoes = {
    brand:Brand[];
    gender:Gender[];
}

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
    const [filterState,setFilterState] = useState<Shoes>({
        brand:[
            {
                brand:'New Balance',
                checked: false,
            },
            {
                brand:'Nike',
                checked: false,
            },
            {
                brand:'Addiddas',
                checked: false,
            },
            {
                brand:'Puma',
                checked: false,
            },
            {
                brand:'Converse',
                checked: false,
            },
            {
                brand:'Under Armour',
                checked: false,
            },
        ],
        gender:[{
            gender:'Male',
            checked:false,
        },
        {
            gender:'Female',
            checked:false,
        },
        {
            gender:'Kids',
            checked:false,
        }
    ],
    });
    const updateBrandCheck = (value:string)=>{
        const newFilter = filterState.brand.map(option =>{
            if(option.brand == value){
                return {brand:option.brand, checked: !option.checked};
            }else{
                return option;
            }
        });
        setFilterState({brand:newFilter,gender:filterState.gender});
    }
    const updateGenderCheck = (value:string)=>{
        const newFilter = filterState.gender.map(option =>{
            if(option.gender == value){
                return {gender:option.gender, checked: !option.checked};
            }else{
                return option;
            }
        });
        setFilterState({gender:newFilter,brand:filterState.brand});
    }
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
                    <Filter closeFilter={closeFilter} filterState={filterState} updateGenderCheck={updateGenderCheck} updateBrandCheck={updateBrandCheck}
                    minPrice={minPrice} maxPrice={maxPrice} setMinFilter={setMinFilter} setMaxFilter={setMaxFilter}/>):(<></>)
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