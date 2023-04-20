import './PageNotFound.css'
import shoe from '../assets/images/nikeShoe.png';
import { useNavigate  } from 'react-router-dom';

export const PageNotFound = ()=>{
    const navigate = useNavigate();

    return(
        <section className="backgroundSvg ">
            <div className='w-[100vw] h-[100vh] grid place-content-center'>
                <div className='w-[300px] md:w-[500px] pb-5 backdrop-blur-md bg-[#444444]/50 border-[5px] border-solid border-gray-200/50 -mt-16'>
                    <h1 className='text-center text-[40px] md:text-[50px] font-bold text-gray-200'>404</h1>
                    <p className='font-bold text-gray-300 text-center md:text-[20px]'>Seems like this page doesnt exist...</p>
                    <div className='w-[150px] md:w-[300px] mx-auto'>
                        <img src={shoe} alt="" className='w-[100%] -rotate-[30deg] mt-10'/>
                    </div>
                    <div className='w-[130px] md:w-[170px] md:text-[20px] mx-auto mt-10' onClick={()=> navigate('/')}>
                        <button className='w-[100%] h-[30px] md:h-[40px] bg-gray-200 text-[#333333] font-bold hover:bg-gray-300'>Go Back Home</button>
                    </div>
                </div>

            </div>
        </section>
    )
}