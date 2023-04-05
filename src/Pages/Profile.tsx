import { ProfileCard } from "../components/ProfileCard"
import { useEffect, useState } from "react";
import { Orders } from "../components/Orders";
import { Wishlist } from "../components/Wishlist";
import { useParams } from "react-router-dom";

export enum Select{
    PROFILE='profile',
    ORDERS='orders',
    WISHLIST='wishlist',
}

export const Profile = ()=>{
    const {select} = useParams();

    const [selectComp,setSelectComp]= useState<Select>(Select.PROFILE);

    useEffect(()=>{
        if(select !=null){
            if(select == 'wishlist'){
                const value = Select.WISHLIST
                setSelectComp(value);
            }
            if(select == 'user'){
                const value = Select.PROFILE
                setSelectComp(value);
            }
        }
    },[select])
    return(
        <>
        <section className="w-[100vw] grid justify-items-center mt-16 mb-16">
            <div className="md:w-[600px] w-[300px] h-[50px] bg-[#333333] rounded-t-md ">
                <div className="font-bold text-gray-200 grid space-y-[10px] space-x-5 justify-items-center">
                    <div className="flex space-x-5 mt-[10px]">
                        <p className={`hover:text-gray-400 hover:cursor-pointer
                         ${selectComp==Select.PROFILE?"underline underline-offset-8 decoration-4":""}`}
                         onClick={()=>setSelectComp(Select.PROFILE)}>Profile</p>
                        <p className={`hover:text-gray-400 hover:cursor-pointer
                         ${selectComp==Select.ORDERS?"underline underline-offset-8 decoration-4":""}`}
                         onClick={()=>setSelectComp(Select.ORDERS)}>Orders</p>
                        <p className={`hover:text-gray-400 hover:cursor-pointer
                         ${selectComp==Select.WISHLIST?"underline underline-offset-8 decoration-4":""}`}
                         onClick={()=>setSelectComp(Select.WISHLIST)}>WishList</p>
                    </div>
                </div>
            </div>
            <div className="md:w-[600px] w-[300px] min-h-[500px] pb-10 md:pb-0 bg-[#333333] rounded-b-md">
                {
                    selectComp == Select.PROFILE?(<ProfileCard />):(<></>)
                }
                {
                    selectComp == Select.WISHLIST?(<Wishlist />):(<></>)
                }
                {
                    selectComp == Select.ORDERS?(<Orders />):(<></>)
                }
            </div>
        </section>
        </>
    )
}