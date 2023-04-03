import { useState } from "react";
import { supabase } from '../supabaseClient';
import {useUserInfo} from '../context/UserContext';
import { LoginState } from "../Pages/Login"

interface LoginForm{
    changeLoggingState:(state:LoginState)=>void,
}
export const LoginForm = (props:LoginForm)=>{
    const {loginUser,logoutUser,userInfo} = useUserInfo();

    const [Email,setEmail] = useState('');
    const [Password,setPassword] = useState('');
    const [loading,setLoading] = useState(false);


    function setEmailValue(event:any){
        setEmail(event.target.value)
    }
    function setPasswordValue(event:any){
        setPassword(event.target.value)
    }
    async function login(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        props.changeLoggingState(LoginState.LOADING);
        setLoading(true);
        try{
            const { data, error } = await supabase.auth.signInWithPassword({
                email: Email,
                password: Password,
              })
              if(error) throw error;
              else{
                console.log("account found!");
                console.log(data.user);
                fetchUser(data?.user?.id);
              }
        }catch(error){
            console.log(error);
            props.changeLoggingState(LoginState.ERROR);
        }finally{
            setLoading(false);
            setEmail('');
            setPassword('');
        }

    }
    async function fetchUser(id:any){
        try{
            const { data, error } = await supabase
            .from('users')
            .select().eq('userID',id);
            if(error) throw error;
            else{  
                console.log('user fetched!');
                // console.log(data);
                const user = {id: data[0].userID, email: data[0].email,fullName: data[0].fullName}
                loginUser(user);
                console.log(user);
                props.changeLoggingState(LoginState.SUCCESS);
            }
        }catch(error){
            console.log(error);
            props.changeLoggingState(LoginState.ERROR);
        }
    }
    return(
        <>
            <section className="mt-10">
                <form action="" onSubmit={login} className="bg-[#444444] md:w-[100%] w-[300px] rounded-md pb-5">
                    <div className="w-[250px] mx-auto">
                        <h1 className="text-[50px] font-bold mb-10">Login</h1>
                        <label htmlFor="Email" className="block">Email:</label>
                        <input type="email" name="Email" id="Email" placeholder="JohnDoe@email.com" value={Email} onChange={setEmailValue}
                        className="bg-transparent border-b-2 border-b-solid border-b-gray-400 mt-[5px] text-[18px] focus:outline-0 mb-5" />
                        <label htmlFor="Password" className="block">Password:</label>
                        <input type="password" name="Password" id="Password" placeholder="Password"  value={Password} onChange={setPasswordValue}
                        className="block bg-transparent border-b-2 border-b-solid border-b-gray-400 mt-[5px] text-[18px] focus:outline-0 mb-5" />
                        <div className="w-[100px] h-[30px] rounded-md bg-gray-300 hover:bg-gray-500 text-[#333333] font-bold text-center mx-auto mt-5 hover:cursor-pointer">
                            <button type="submit" disabled={loading}>Login</button>
                        </div>
                    </div>
                </form>
            </section>
        </>
    )
}