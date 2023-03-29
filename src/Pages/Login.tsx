import loginBg from '../assets/images/loginBg.jpg';
import { LoginForm } from '../components/LoginForm';
import { useNavigate  } from 'react-router-dom';

export const Login = ()=>{
    const navigate = useNavigate();

    return(
        <>
            <section className="w-[100vw] h-[100vh] flex relative">
                <section className='w-[100%] h-[100vh] bg-[#222222] text-gray-200'>
                    <div className='grid w-[100%] place-items-end'>
                        <div className='flex mr-16 space-x-5'>
                            <button onClick={()=> navigate('/register')} className='font-semibold bg-gray-200 text-[#222222] hover:bg-gray-400 p-[10px]'>Register</button>
                            <button className='font-bold'>Log in</button>
                        </div>
                    </div>
                    <div className='w-[100%] grid place-content-center'>
                        <div className='md:w-[500px] w-[300px] mt-16 '>
                            <LoginForm />
                        </div>
                    </div>
                </section>
                <section className="w-[50vw] h-[100vh] bg-[#111111] relative hidden md:inline">
                    <img src={loginBg} alt="" className='w-[100%] h-[100%] absolute z-10'/>
                    <div className='w-[100%] h-[100%] grid place-content-center z-50 relative'>
                        <p className='text-[#222222] font-bold text-[50px] text-center'>Welcome back</p>
                        <p className='text-[#222222] pt-[10px] font-semibold text-center'>Log in to your account now!</p>
                    </div>
                </section>
            </section>
        </>
    )
}