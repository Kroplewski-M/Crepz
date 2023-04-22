import { createContext, ReactNode, useContext,useEffect,useState } from "react";
import { supabase } from '../supabaseClient';

export type Shoe = {
    id:string,
    Name:string,
    Brand:string,
    Desc:string,
    Gender:string
    Price:number,
    ImgUrl:string,
}

interface ProductProvider{
    getProducts: ()=> Shoe[]|undefined,
}
interface ProductProviderProps{
    children: ReactNode,
}

const ProductProvider = createContext({} as ProductProvider);

export const useProductInfo = ()=>{
    return useContext(ProductProvider);
}

export const ProductContext = ({children}: ProductProviderProps)=>{
    const [products,setProducts] = useState<Shoe[]>([]);

    const FetchProducts = async () => {
        try{
            const {data,error} = await supabase.from('Shoes').select();
            if(error) throw error;
            //not fetching on first load
            else{
                    data.map(shoe =>{
                        setProducts(prevShoes=>[...prevShoes,{id:shoe.id,Name:shoe.Name,Brand:shoe.Brand,Desc:shoe.Desc,Gender:shoe.Gender,Price:shoe.Price,ImgUrl:shoe.ImgUrl}])
                    });
            }
        }catch(error){
            console.log(error);
        }
    };
    //HAPPENING TWICE -- FIX
    useEffect(()=>{
        FetchProducts();
    },[]);

    const getProducts = () =>{
        return products;
    }

    return  <ProductProvider.Provider value={{getProducts}}>
    {children}
    </ProductProvider.Provider>
}