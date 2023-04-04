import { ProfileComp } from "../components/ProfileComp"
export const Profile = ()=>{

    return(
        <>
        <section className="w-[100vw] grid justify-items-center mt-16 mb-16">
            <div className="md:w-[600px] w-[300px] h-[50px] bg-[#333333] rounded-t-md ">
                <div className="font-bold text-gray-200 grid space-y-[10px] space-x-5 justify-items-center">
                    <div className="flex space-x-5 mt-[10px]">
                        <p className="hover:text-gray-400 hover:cursor-pointer">Profile</p>
                        <p className="hover:text-gray-400 hover:cursor-pointer">Orders</p>
                        <p className="hover:text-gray-400 hover:cursor-pointer">WishList</p>
                    </div>
                </div>
            </div>
            <div className="md:w-[600px] w-[300px] h-[500px] bg-[#333333] rounded-b-md">
                <ProfileComp />
            </div>
        </section>
        </>
    )
}