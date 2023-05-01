import { useState,useEffect } from 'react'
import filterIcon from '../assets/images/filter.png'
import { Filter } from '../components/Filter'
import { ProductCard } from '../components/ProductCard';
import { Shoe, useProductInfo } from '../context/ProductContext';
import { useNavigate  } from 'react-router-dom';
import { useFilterInfo } from '../context/FilterContext';
import { Heart } from '../components/SVG/Heart';
import { useWishListInfo } from '../context/WishListContext';

export const Browse = ()=>{
    const {FilterState,maxPrice,minPrice} = useFilterInfo();
    const {wishList,toggleFromWishList} = useWishListInfo();
    const navigate = useNavigate();
    const {getProducts} = useProductInfo();
    const [showFilter, setShowFilter] = useState<boolean>(true);
    const [windowSize, setWindowSize] = useState<number>(getWindowSize());
    const mobileLimit:number = 768;
    const [products,setProducts] = useState<Shoe[]>();
    const [filteredProducts, setFilteredProducts] = useState<Shoe[]>([]);
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

    useEffect(()=>{
        setProducts(getProducts());
    },[getProducts()]);

    useEffect(()=>{
        setFilteredProducts([]);
        getFilteredProducts();
    },[FilterState(),products,maxPrice,minPrice])

    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);

    const closeFilter = ()=>{
        setShowFilter(false);
    }
    const getFilteredProducts = ()=>{
        const filterBrands:string[] = [];
        const filterGender:string[] = [];
        FilterState().brand.map(brand =>{
            if(brand.checked == true){
                if(brand.brand == 'New-Balance'){
                    filterBrands.push('New Balance');
                }
                else if(brand.brand == 'Under-Armour'){
                    filterBrands.push('Under Armour');
                }
                else{
                    filterBrands.push(brand.brand);
                }
            }
        });
        FilterState().gender.map(brand =>{
            if(brand.checked == true){
                filterGender.push(brand.gender);
            }
        });
        products?.map((product)=>{
            if((filterBrands.includes(product.Brand) || filterBrands.length == 0) && (filterGender.includes(product.Gender) || filterGender.length == 0)
                && product.Price >= minPrice && product.Price <= maxPrice){
                setFilteredProducts((prevProducts) => [...prevProducts,product]);
            }

        })
    }
    const isWishListed = (value:string)=>{
        if(wishList.includes(value)){
            return '#ff0000';
        }else{
            return '#FFFFFF';
        }
    }
    return(
        <section className="w-[100vw] max-w-[2000px]  mx-auto pb-10 pt-16">
            <div className="w-[95px] mx-auto">
                <div className='grid place-content-center w-[95px] h-[40px] bg-[#333333] hover:cursor-pointer md:hidden' onClick={()=>setShowFilter(true)}>
                    <div className='flex space-x-2'>
                        <p className='text-gray-200 '>Filter</p>
                        <img src={filterIcon} alt="" className='w-[20px] h-[20px]' />
                    </div>
                </div>
            </div>
            <div className='flex mt-10'>
                {
                    showFilter?(
                    <Filter closeFilter={closeFilter} />):(<></>)
                }
                <section className='md:w-[70%] w-[100vw] md:ml-16 flex flex-wrap -mt-5'>
                    {
                        filteredProducts?.map(product =>(
                            <div key={product.id} className='w-[165px] mx-auto md:w-[300px] md:ml-[5px] mt-5'>
                                <div className='absolute w-[35px] h-[35px] ml-[5px] mt-[5px] rounded-full bg-[#444444] grid place-content-center hover:cursor-pointer z-50' 
                                onClick={()=> toggleFromWishList(product.id)}>
                                    <Heart fill={isWishListed(product.id)} width={20} height={20} />
                                </div>
                                <div onClick={()=> navigate(`/product/${product.id}`)}>
                                    <ProductCard  info={product} /> 
                                </div>
                            </div>

                        ))
                    }
                </section>
            </div>
        </section>
    )
}