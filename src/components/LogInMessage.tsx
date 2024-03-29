interface LogInMessageProps{
    message: string,
}

export const LogInMessage = (props:LogInMessageProps)=>{

    return(
        <div className="w-[100vw] h-[50px] fixed top-[50px] z-[100]">
            <div className="w-[300px] h-[100%] mx-auto bg-red-600/90 rounded-md grid place-content-center">
                <p className="font-bold text-gray-200 text-center">{props.message}</p>
            </div>
        </div>
    )
}