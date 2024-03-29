import { createContext, ReactNode, useContext,useState } from "react";


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

interface FilterProvider {
    FilterState:()=>Shoes,
    updateGenderState: (value: string)=>void,
    updateBrandState: (value: string)=>void,
    SetGenderTrue: (value:string)=>void,
    SetBrandTrue: (value:string)=>void,
    ResetFilter: ()=>void,
    minPrice:number,
    maxPrice:number,
    SetMaxPrice:(value:number)=>void,
    SetMinPrice:(value:number)=>void,
}
interface FilterProviderProps{
    children: ReactNode,
}

const FilterProvider = createContext({} as FilterProvider);

export const useFilterInfo = ()=>{
    return useContext(FilterProvider);
}

export const FilterContext = ({children}: FilterProviderProps)=>{
    const [filterState,setFilterState] = useState<Shoes>({
        brand:[
            {
                brand:'New-Balance',
                checked: false,
            },
            {
                brand:'Nike',
                checked: false,
            },
            {
                brand:'Adidas',
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
                brand:'Under-Armour',
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
    const [minPrice,setMinPriceValue] = useState<number>(0);
    const [maxPrice,setMaxPriceValue] = useState<number>(300);

    const FilterState = ()=>{
        return filterState;
    }
    const updateGenderState = (value: string)=>{
        const newFilter = filterState.gender.map(option =>{
            if(option.gender == value){
                return {gender:option.gender, checked: !option.checked};
            }else{
                return option;
            }
        });
        setFilterState({gender:newFilter,brand:filterState.brand});
    }
    const updateBrandState = (value: string)=>{
        const newFilter = filterState.brand.map(option =>{
            if(option.brand == value){
                return {brand:option.brand, checked: !option.checked};
            }else{
                return option;
            }
        });
        setFilterState({brand:newFilter,gender:filterState.gender});
    }
    const SetGenderTrue = (value: string)=>{
        const newFilter = filterState.gender.map(option =>{
            if(option.gender == value){
                return {gender:option.gender, checked: true};
            }else{
                return {gender:option.gender, checked: false};
            }
        });
        const newFilter2 = filterState.brand.map(option =>{
            if(option.checked == true){
                return {brand:option.brand, checked: false};
            }else{
                return option;
            }
        });
        setFilterState({brand:newFilter2,gender:newFilter});
    }
    const SetBrandTrue = (value: string)=>{
        const newFilter = filterState.brand.map(option =>{
            if(option.brand == value){
                return {brand:option.brand, checked: true};
            }else{
                return {brand:option.brand, checked: false};
            }
        });
        
        setFilterState({brand:newFilter,gender:filterState.gender});
    }
    const ResetFilter = ()=>{
        const newFilter = filterState.brand.map(option =>{
            if(option.checked == true){
                return {brand:option.brand, checked: false};
            }else{
                return option;
            }
        });
        const newFilter2 = filterState.gender.map(option =>{
            if(option.checked == true){
                return {gender:option.gender, checked: false};
            }else{
                return option;
            }
        });
        setFilterState({brand:newFilter, gender:newFilter2});
        setMinPriceValue(0);
        setMaxPriceValue(300);
    }

    const SetMaxPrice = (value:number)=>{
        setMaxPriceValue(value);
    }
    const SetMinPrice = (value:number)=>{
        setMinPriceValue(value);
    }
    return  <FilterProvider.Provider value={{FilterState,SetGenderTrue,SetBrandTrue,updateBrandState,updateGenderState,ResetFilter,SetMaxPrice,SetMinPrice,minPrice,maxPrice}}>
                {children}
            </FilterProvider.Provider>

}
