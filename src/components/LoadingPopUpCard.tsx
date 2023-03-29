import './LoadingPopUpCard.css'
import { useNavigate  } from 'react-router-dom';

export enum LoadingState{
    LOADING = 'loading',
    ERROR = 'error',
    SUCCESS = 'success',
    NONE = 'none',
}

interface PopUpCardProps{
    loadingText: string,
    errorText: string,
    successText:string,
    loadingState: LoadingState,
    changeLoadingState: (state: LoadingState) => void;
}


export const LoadingPopUpcard = (props:PopUpCardProps)=>{
    const navigate = useNavigate();
    
    const redirect = (redirectUrl:string) =>{
        props.changeLoadingState(LoadingState.NONE);
        navigate(redirectUrl);
    }

    return(<>
    <div className="w-[100vw] h-[100vh] backdrop-blur-lg grid place-content-center absolute top-0 z-50">
        <div className="w-[320px] md:w-[500px] h-[300px] bg-[#333333] rounded-md px-5 md:px-0 text-center md:text-left">
            {
                props.loadingState == 'loading'?(
                    <div className="grid place-content-center w-[100%] h-[100%]">
                        <p className="font-bold text-gray-200 text-[20px]">{props.loadingText}</p>
                            <span className="loader"></span>
                    </div>
                ):(<></>)
            }
            {
                props.loadingState == 'error'?(
                    <div className="grid place-content-center w-[100%] h-[100%]">
                        <p className="font-bold text-red-700 text-[20px]">{props.errorText}</p>
                        <div className='flex space-x-5 w-[210px] mt-5 mx-auto'>
                            <button className='bg-gray-200 rounded-md font-semibold px-2 hover:bg-gray-300' onClick={()=> redirect('/')}>Back to Home</button>
                            <button className='bg-red-500 rounded-md  font-semibold px-2 hover:bg-red-600' onClick={()=> props.changeLoadingState(LoadingState.NONE)}>Cancel</button>
                        </div>
                    </div>

                ):(<></>)
            }
            {
                props.loadingState == 'success'?(
                <div className="grid place-content-center w-[100%] h-[100%]">
                    <p className="font-bold text-green-700 text-[20px]">{props.successText}</p>
                    <div className='flex space-x-5 w-[240px] mt-5 mx-auto'>
                        <button className='bg-gray-200 rounded-md font-semibold px-2 hover:bg-gray-300 py-[2px]' onClick={()=> redirect('/browse')}>Browse Page</button>
                        <button className='bg-green-500 rounded-md font-semibold px-2 hover:bg-green-600' onClick={()=> redirect('/profile')}>Profile Page</button>
                    </div>
                </div>
                ):(<></>)
            }
        </div>
    </div>
    </>)
}