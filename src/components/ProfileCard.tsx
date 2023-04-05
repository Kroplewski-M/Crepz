import userIcon from '../assets/images/userIcon.png'
import {useUserInfo} from '../context/UserContext';
import { supabase } from '../supabaseClient';
import { useNavigate  } from 'react-router-dom';
import { useState } from 'react';


export const ProfileCard = ()=>{
    const {loginUser,logoutUser,userInfo} = useUserInfo();
    const [logOutPromt,setLogOutPromt] = useState(false);
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();

    async function logOut(){
        console.log("logging out");
        setLoading(true);
        try{
            const { error } = await supabase.auth.signOut();
            if(error) throw error;
            else{
                logoutUser();
                navigate('/');
            }
        }catch(error){
            console.log(error);
        }
        finally{
            setLoading(false);
        }
    }
    return(
        <div className='pt-16 '>
            <div className='w-[70px] h-[70px] rounded-full bg-[#444444] grid place-content-center mx-auto'>
                <img src={userIcon} alt="" className='w-[60px]'/>
            </div>
            <div className='px-10 flex flex-col space-y-2 mt-5 md:w-[300px] md:px-0 md:mx-auto'>
                <p className='text-gray-400 bg-[#444444] rounded-md p-[5px]'>ID: <span className='text-gray-200 font-bold'>{userInfo.id}</span></p>
                <p className='text-gray-400 bg-[#444444] rounded-md p-[5px]'>Name: <span className='text-gray-200 font-bold'>{userInfo.fullName}</span></p>
                <p className='text-gray-400 bg-[#444444] rounded-md p-[5px]'>Email: <span className='text-gray-200 font-bold text-[13px]'>{userInfo.email}</span></p>
            </div>
            <div className='w-[200px] mx-auto'>
                <button className='w-[100%] rounded-md bg-red-600 hover:bg-red-700 font-bold mt-10' onClick={()=> setLogOutPromt(true)}>Log out</button>
            </div>
            {
                logOutPromt?(
                <section className='absolute w-[100vw] h-[100vh] top-0 left-0 backdrop-blur-md grid place-content-center'>
                    <div className='w-[300px] md:w-[400px] h-[200px] md:h-[300px] rounded-md bg-[#222222] grid place-content-center'>
                        <p className='text-gray-200 font-bold text-center'>Are you sure you want to log out?</p>
                        <div className='flex space-x-2 w-[205px] mx-auto mt-5'>
                            <button className='w-[100px] h-[30px] rounded-md bg-gray-200 hover:bg-gray-300 hover:font-bold'
                            onClick={()=> setLogOutPromt(false)}>Cancel</button>
                            <button className='w-[100px] h-[30px] rounded-md bg-red-600 hover:bg-red-700 hover:font-bold'
                            onClick={logOut} disabled={loading}>Log out</button>

                        </div>
                    </div>
                </section>):(<></>)
            }
        </div>
    )
}