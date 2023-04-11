import { useState } from 'react'
import filterIcon from '../assets/images/filter.png'
import { Filter } from '../components/Filter'

export const Browse = ()=>{
    const [showFilter, setShowFilter] = useState<boolean>(true);
    
    const closeFilter = ()=>{
        setShowFilter(false);
    }

    return(
        <section className="w-[100vw] pb-10 pt-16">
            <div className="w-[200px] mx-auto flex space-x-3">
                <div className='grid place-content-center w-[95px] h-[40px] bg-[#333333] hover:cursor-pointer md:hidden' onClick={()=>setShowFilter(true)}>
                    <div className='flex space-x-2'>
                        <p className='text-gray-200 '>Filter</p>
                        <img src={filterIcon} alt="" className='w-[20px] h-[20px]' />
                    </div>
                </div>
                <div className='grid place-content-center w-[95px] h-[40px] bg-[#333333] hover:cursor-pointer'>
                    <div className='flex space-x-2'>
                        <p className='text-gray-200 '>Sort</p>
                        <p className='text-gray-300'>↓</p>
                    </div>
                </div>
            </div>
            {
                showFilter?(<Filter closeFilter={closeFilter}/>):(<></>)
            }

        </section>
    )
}