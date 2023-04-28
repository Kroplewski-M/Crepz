import registerBg from '../assets/images/registerBg.png';
import { RegisterForm } from '../components/RegisterForm';
import { useNavigate  } from 'react-router-dom';
import { LoadingPopUpcard,LoadingState } from '../components/LoadingPopUpCard';
import { useState } from 'react';
import './Register.css';
export const Register = ()=>{
    const navigate = useNavigate();
    const [loadingState, setLoadingState] = useState<LoadingState>(LoadingState.NONE);

    const changeLoadingState = (state: LoadingState) =>{
        setLoadingState(state);
    }

    return(
        <>
            <section className="w-[100%] h-[100vh] flex relative">
                <section className="w-[50vw] h-[100vh] bg-[#111111] relative hidden md:inline">
                    <div className='w-[100%] h-[100%] absolute z-10 bgReg'></div>
                    <div className='w-[100%] h-[100%] pt-[200px] z-50 relative'>
                        <p className='text-[#222222] font-bold text-[55px] text-center'>Welcome to Crepz</p>
                        <p className='text-[#333333] pt-[10px] text-[20px] font-semibold text-center'>Sign up to keep upto date with new releases and track every order you make</p>
                    </div>
                </section>
                <section className='md:w-[50vw] w-[100vw] h-[100vh] bgRegForm text-gray-200'>
                    <div className='grid w-[100%] place-items-end'>
                        <div className='flex mr-16 space-x-5'>
                            <button className='font-bold'>Register</button>
                            <button onClick={()=> navigate('/login')} className='font-semibold bg-gray-200 text-[#222222] hover:bg-gray-400 p-[10px]'>Log in</button>
                        </div>
                    </div>
                    <div className='w-[100%] grid place-content-center mt-10'>
                        <div className='lg:w-[500px] md:w-[380px] w-[300px]'>
                            <RegisterForm changeLoadingState={changeLoadingState}  />
                        </div>
                    </div>
                </section>
            </section>
            {
                loadingState != 'none' ?(<>
                    <LoadingPopUpcard loadingText='Creating account please wait...' errorText='Error creating account please try again later!' 
                    successText='Account created successfully!' loadingState={loadingState} changeLoadingState={changeLoadingState}/>
                </>):(<></>)
            }

        </>
    )
}