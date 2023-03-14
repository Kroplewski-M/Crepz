import { useState } from 'react';
import heroVid from '../assets/heroVideo.mp4';
import Nike from '../assets/images/heroShoes/nike.png';


export const Home = ()=>{

    const [brands,setBrands] = useState(['Nike','Addidas','Puma', 'Converse', 'NewBalance', 'UnderArmour']);

    function getImg(name:string){
        const img = new URL(`../assets/images/heroShoes/${name}.png`, import.meta.url).href;
        return img;
    }
    return (
        <>
            <section className="w-[100%] h-[300px] grid place-content-center">
                <p className="text-center text-gray-600 font-semibold">Just in: Nike Air Max Plus </p>
                <h1 id='headline' className="font-bold text-[48px] text-[#222222] text-center mb-5">Feel next level comfort</h1>
                <p className="w-[700px] text-center font-semibold text-gray-600">Make some waves in the Nike Air Max Plus, a Tuned Air experience that offers premium stability and cushioning.</p>
                <div className="flex space-x-5 mx-auto mt-[20px]">
                    <button className="w-[110px] h-[30px] rounded-xl bg-[#222222] text-gray-200 hover:bg-gray-200 hover:text-[#222222] font-semibold px-[7px]">Shop Mens</button>
                    <button className="w-[130px] h-[30px] rounded-xl bg-[#222222] hover:bg-gray-200 hover:text-[#222222] text-gray-200 font-semibold">Shop Womens</button>   
                </div>
            </section>
            <section className='w-[90vw] mx-auto'>
                <video src={heroVid} autoPlay  loop className='w-[100%] mx-auto'></video>
            </section>
            <section className='w-[100%] pl-[86px] pt-5 mb-10'>
                <h1 className='font-semibold text-[20px]'>Shop by brand</h1>
                <div className='flex flex-wrap pt-[10px]'>
                    {
                        brands.map((brand)=>(
                            <div key={brand} 
                            className='w-[300px] h-[200px] rounded-md mr-5 mt-5 grid place-content-center relative hover:cursor-pointer hover:scale-[1.2] hover:z-50 duration-100 ease-linear'>
                                <img src={getImg(brand)} alt="" className='absolute rounded-md w-[100%] h-[100%]'/>
                                <div className='w-[200px] h-[50px] z-50 text-center rounded-md backdrop-blur-md'>
                                    <p className='font-bold z-50 text-[30px]'>{brand}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    )
}
