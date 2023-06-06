import { LoginForm } from '../components/LoginForm';
import { useNavigate  } from 'react-router-dom';
import { useState } from 'react';
import { LoginPrompt } from '../components/LoginPromt';
import './Login.css';

export enum LoginState{
    SUCCESS = 'success',
    ERROR = 'error',
    DEFAULT = 'default',
    LOADING = 'loading',
    EMPTY = 'empty'
}

export const Login = ()=>{
    const navigate = useNavigate();
    const [loginState,setLoggingState] = useState<LoginState>(LoginState.DEFAULT);

    function changeLoggingState(state:LoginState){
        setLoggingState(state);
    }
    return(
        <>
            <section className="w-[100vw] h-[100vh] flex relative">
                <section className='md:w-[50vw] w-[100vw] h-[100vh] bgLoginForm text-gray-200'>
                    <div className='grid w-[100%] place-items-end'>
                        <div className='flex mr-16 space-x-5'>
                            <button onClick={()=> navigate('/register')} className='font-semibold bg-gray-200 text-[#222222] hover:bg-gray-400 p-[10px]'>Register</button>
                            <button className='font-bold'>Log in</button>
                        </div>
                    </div>
                    <div className='w-[100%] grid place-content-center'>
                        <div className='md:w-[500px] w-[300px] mt-16 '>
                            <LoginPrompt state={loginState} />
                            <LoginForm changeLoggingState={changeLoggingState}/>
                        </div>
                    </div>
                </section>
                <section className="w-[50vw] h-[100vh] bg-[#111111] relative hidden md:inline">
                    <div className='w-[100%] h-[100%] absolute z-10 bg'></div>
                    <div className='w-[100%] h-[100%] z-50 relative pt-[200px]'>
                        <p className='text-gray-100 font-bold text-[55px] text-center'>Welcome back</p>
                        <p className='text-gray-300 text-[20px] pt-[10px] font-semibold text-center'>Log in to your account now!</p>
                    </div>
                </section>
            </section>
        </>
    )
}