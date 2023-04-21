import { createContext, ReactNode, useContext,useState } from "react";

type Shoe = {
    id:string,
    Name:string,
    Brand:string,
    Desc:string,
    Gender:string
    Price:number,
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
    const [products,setProducts] = useState<Shoe[]>([{id:'23425435',Name:'Nike Air Force 1',Brand:'Nike',Desc:'Shoes',Gender:'Male',Price:129.98 },
    {id:'23425435',Name:'Nike Air Force 1',Brand:'Nike',Desc:'Shoes',Gender:'Male',Price:129.98 }]);

    const getProducts = () =>{
        return products;
    }

    return  <ProductProvider.Provider value={{getProducts}}>
    {children}
    </ProductProvider.Provider>
}