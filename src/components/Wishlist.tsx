import { WishlistCard } from "./WishlistCard";
import { useWishListInfo } from "../context/WishListContext";
export const Wishlist = ()=>{
    const {wishList} = useWishListInfo();

    return(
        <div className="pl-10">
            <h1 className="font-bold text-gray-200 text-[25px] pt-5">Wish List:</h1>
            <div>
                {
                    wishList.length == 0?(<>
                        <p className="text-gray-400 font-bold mt-5 text-[20px]">Your Wish List is empty!</p>
                    </>):(
                    <>
                        {
                            wishList.map(item=>(
                                <div key={item}>
                                    <WishlistCard itemID={item}/>
                                </div>
                            ))
                        }
                    </>
                    )
                }
            </div>
        </div>
    )
}