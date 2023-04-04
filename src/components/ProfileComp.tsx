import userIcon from '../assets/images/userIcon.png'
import {useUserInfo} from '../context/UserContext';


export const ProfileComp = ()=>{
    const {loginUser,logoutUser,userInfo} = useUserInfo();

    const logOut = ()=>{
        console.log("logging out");
        //LOGOUT FUNCITON THEN REDIRECT TO HOME PAGE
    }
    return(
        <div className='pt-16 '>
            <div className='w-[70px] h-[70px] rounded-full bg-[#444444] grid place-content-center mx-auto'>
                <img src={userIcon} alt="" className='w-[60px]'/>
            </div>
            <div className='px-10 flex flex-col space-y-2 mt-5 md:w-[300px] md:px-0 md:mx-auto'>
                <p className='text-gray-400 bg-[#444444] rounded-md p-[5px]'>ID: <span className='text-gray-200 font-bold'>{userInfo.id}</span></p>
                <p className='text-gray-400 bg-[#444444] rounded-md p-[5px]'>Name: <span className='text-gray-200 font-bold'>{userInfo.fullName}</span></p>
                <p className='text-gray-400 bg-[#444444] rounded-md p-[5px]'>Email: <span className='text-gray-200 font-bold'>{userInfo.email}</span></p>
            </div>
            <div className='w-[200px] mx-auto'>
                <button className='w-[100%] rounded-md bg-red-600 hover:bg-red-700 font-bold mt-10' onClick={logOut}>Log out</button>
            </div>
        </div>
    )
}