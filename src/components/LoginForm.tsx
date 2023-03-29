
export const LoginForm = ()=>{

    return(
        <>
            <section className="">
                <form action="" className="bg-[#444444] md:w-[100%] w-[300px] rounded-md pb-5">
                    <div className="w-[250px] mx-auto">
                        <h1 className="text-[50px] font-bold mb-10">Login</h1>
                        <label htmlFor="Email" className="block">Email:</label>
                        <input type="email" name="Email" id="Email" placeholder="JohnDoe@email.com" 
                        className="bg-transparent border-b-2 border-b-solid border-b-gray-400 mt-[5px] text-[18px] focus:outline-0 mb-5" />
                        <label htmlFor="Password" className="block">Password:</label>
                        <input type="password" name="Password" id="Password" placeholder="Password"
                        className="block bg-transparent border-b-2 border-b-solid border-b-gray-400 mt-[5px] text-[18px] focus:outline-0 mb-5" />
                        <div className="w-[100px] h-[30px] rounded-md bg-gray-300 hover:bg-gray-500 text-[#333333] font-bold text-center mx-auto mt-5 hover:cursor-pointer">
                            <button>Login</button>
                        </div>
                    </div>
                </form>
            </section>
        </>
    )
}