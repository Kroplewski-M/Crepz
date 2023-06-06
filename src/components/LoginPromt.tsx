import { LoginState } from "../Pages/Login"

interface LoginPromptProps{
    state:LoginState,
}

export const LoginPrompt = (props:LoginPromptProps)=>{

    return(
        <section className="absolute md:w-[500px] w-[300px] ">
                {
                    props.state == 'default'?(
                    <div></div>):(<div></div>)
                }
                {
                    props.state == 'loading'?(
                        <div className="w-[300px] h-[30px] bg-gray-200/70 text-[#222222] rounded-md grid place-content-center mx-auto mb-5">
                            <p className="font-bold">Logging in...Please wait</p>
                        </div>
                    ):(<div></div>)
                }
                {
                    props.state == 'error'?(
                        <div className="w-[300px] h-[30px] bg-red-500/40 rounded-md grid place-content-center mx-auto mb-5">
                            <p className="font-bold">Error occured!</p>
                        </div>
                    ):(<div></div>)
                }
                {
                    props.state == 'success'?(
                        <div className="w-[300px] h-[30px] bg-green-500/40 rounded-md grid place-content-center mx-auto mb-5">
                            <p className="font-bold">Successfully logged in!</p>
                        </div>
                    ):(<div></div>)
                }
                {
                      props.state == 'empty'?(
                        <div className="w-[300px] h-[30px] bg-red-500/40 rounded-md grid place-content-center mx-auto mb-5">
                            <p className="font-bold">Please Fill in all the fields!</p>
                        </div>
                    ):(<div></div>)
                }

        </section>
    )
}