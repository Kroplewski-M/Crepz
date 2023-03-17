import registerBg from '../assets/images/registerBg.png';
import { RegisterForm } from '../components/RegisterForm';
import { useNavigate  } from 'react-router-dom';

export const Register = ()=>{
    const navigate = useNavigate();

    return(
        <>
            <section className="w-[100%] h-[100vh] flex relative">
                <section className="w-[50vw] h-[100vh] bg-[#111111] relative hidden md:inline">
                    <img src={registerBg} alt="" className='w-[100%] h-[100%] absolute z-10'/>
                    <div className='w-[100%] h-[100%] grid place-content-center z-50 relative'>
                        <p className='text-[#222222] font-bold text-[50px] text-center'>Welcome to Crepz</p>
                        <p className='text-[#222222] pt-[10px] font-semibold'>Sign up to keep upto date with new releases and track every order you make</p>
                    </div>
                </section>
                <section className='md:w-[50vw] w-[100vw] h-[100vh] bg-[#222222] text-gray-200'>
                    <div className='grid w-[100%] place-items-end'>
                        <div className='flex mr-16 space-x-5'>
                            <button className='font-bold'>Register</button>
                            <button onClick={()=> navigate('/login')} className='font-semibold bg-gray-200 text-[#222222] hover:bg-gray-400 p-[10px]'>Log in</button>
                        </div>
                    </div>
                    <div className='w-[100%] h-[100%] grid place-content-center'>
                        <div className='w-[500px] h-[500px] -mt-10'>
                            <RegisterForm />
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}