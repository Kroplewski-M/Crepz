import { useState } from 'react';
import heroVid from '../assets/heroVideo.mp4';
import nikeLogo from '../assets/images/NikeLogo.jpg';
import { useFilterInfo } from '../context/FilterContext'
import { useNavigate  } from 'react-router-dom';

export const Home = ()=>{
    const {SetBrandTrue,SetGenderTrue} = useFilterInfo();
    const navigate = useNavigate();

    const [brands,setBrands] = useState<string[]>(['Nike','Adidas','Puma', 'Converse', 'New-Balance', 'Under-Armour']);

    function getImg(name:string){
        const img = new URL(`../assets/images/heroShoes/${name}.png`, import.meta.url).href;
        return img;
    }
    const setGenderRedirect = (value:string) =>{
        SetGenderTrue(value);
        navigate('/browse');
    };
    const setBrandRedirect = (value:string) =>{
        SetBrandTrue(value);
        navigate('/browse');
    }
    return (
        <>
            <section className="w-[100vw] h-[300px] grid place-content-center mb-10">
                <p className="text-center text-gray-600 font-semibold md:text-[16px] text-[13px]">Just in: Nike Air Max Plus </p>
                <h1 id='headline' className=" font-bold md:text-[48px] text-[20px] text-[#222222] text-center mb-5">Feel next level comfort</h1>
                <p className="md:w-[700px] w-[250px] text-center font-semibold text-gray-600 md:text-[16px] text-[13px]">Make some waves in the Nike Air Max Plus, a Tuned Air experience that offers premium stability and cushioning.</p>
                <div className="flex space-x-5 mx-auto mt-[20px]">
                    <button className="md:w-[110px] w-[90px] text-[13px] h-[30px] rounded-xl bg-[#222222] text-gray-200 hover:bg-gray-200 hover:text-[#222222] font-semibold px-[7px]" onClick={()=>setGenderRedirect('Male')}>Shop Mens</button>
                    <button className="md:w-[110px] w-[100px]  text-[13px] h-[30px] rounded-xl bg-[#222222] hover:bg-gray-200 hover:text-[#222222] text-gray-200 font-semibold" onClick={()=>setGenderRedirect('Female')}>Shop Womens</button>   
                </div>
            </section>
            <section className='md:w-[95vw] w-[90vw] mx-auto'>
                <video src={heroVid} autoPlay loop muted className='w-[100%] mx-auto rounded-md' poster={nikeLogo}></video>
            </section>
            <section className='w-[100%] md:pl-[86px] pl-[20px] pt-5 mb-10'>
                <h1 className='font-semibold md:text-[20px] text-[16px]'>Shop by brand</h1>
                <div className='flex flex-wrap pt-[10px] place-content-center md:place-content-start'>
                    {
                        brands.map((brand)=>(
                            <div key={brand} onClick={()=>setBrandRedirect(brand)}
                            className='md:w-[300px] md:h-[200px] w-[200px] h-[100px] rounded-md mr-5 mt-5 grid place-content-center relative hover:cursor-pointer hover:scale-[1.2] hover:z-50 duration-100 ease-linear'>
                                <img src={getImg(brand)} alt="" className='absolute rounded-md w-[100%] h-[100%]'/>
                                <div className='md:w-[200px] w-[100px] md:h-[50px] h-[30px] pt-[2px] md:pt-0 z-50 text-center rounded-md backdrop-blur-md'>
                                    <p className='font-bold z-50 md:text-[25px] text-gray-200'>{brand}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <h1 className='font-semibold md:text-[20px] text-[16px] mt-5'>Shop by Gender</h1>
                <div className='flex flex-wrap pt-[10px] place-content-center md:place-content-start'>
                    <div className='md:w-[300px] md:h-[200px] w-[200px] h-[100px] bg-blue-600 rounded-md mr-5 mt-5 grid place-content-center relative hover:cursor-pointer hover:scale-[1.2] hover:z-50 duration-100 ease-linear' onClick={()=>setGenderRedirect('Male')}>
                        <p className='font-bold z-50 md:text-[30px] text-[#333333]'>Male</p>
                    </div>
                    <div className='md:w-[300px] md:h-[200px] w-[200px] h-[100px] bg-pink-600 rounded-md mr-5 mt-5 grid place-content-center relative hover:cursor-pointer hover:scale-[1.2] hover:z-50 duration-100 ease-linear' onClick={()=>setGenderRedirect('Female')}>
                        <p className='font-bold z-50 md:text-[30px] text-[#333333]'>Female</p>
                    </div>
                    <div className='md:w-[300px] md:h-[200px] w-[200px] h-[100px] bg-purple-500 rounded-md mr-5 mt-5 grid place-content-center relative hover:cursor-pointer hover:scale-[1.2] hover:z-50 duration-100 ease-linear' onClick={()=>setGenderRedirect('Kids')}>
                        <p className='font-bold z-50 md:text-[30px] text-[#333333]'>Kids</p>
                    </div>
                </div>
            </section>

        </>
    )
}

