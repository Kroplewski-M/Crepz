
export const RegisterForm = ()=>{

    return(
        <>
            <section className="">
                <form action="" className="bg-[#444444] w-[100%] rounded-md pb-5">
                    <div className="w-[250px] mx-auto">
                        <h1 className="text-[50px] font-bold mb-10">Register</h1>
                        <label htmlFor="FullName" className="block font-semibold text-gray-300 text-[20px]">Full Name:</label>
                        <input type="text" name="FullName" id="FullName" placeholder="John Doe" 
                        className="bg-transparent border-b-2 border-b-solid border-b-gray-400 mt-[5px] text-[18px] focus:outline-0 mb-5" />
                        <label htmlFor="Email" className="block">Email:</label>
                        <input type="email" name="Email" id="Email" placeholder="JohnDoe@email.com" 
                        className="bg-transparent border-b-2 border-b-solid border-b-gray-400 mt-[5px] text-[18px] focus:outline-0 mb-5" />
                        <label htmlFor="Password" className="block">Password:</label>
                        <input type="password" name="Password" id="Password" placeholder="Password"
                        className="block bg-transparent border-b-2 border-b-solid border-b-gray-400 mt-[5px] text-[18px] focus:outline-0 mb-5" />
                        <label htmlFor="TOS" className="">I agree to all Terms of Service:</label>
                        <input type="checkbox" name="TOS" id="TOS" className="ml-[15px]"/>
                        <div className="w-[100px] h-[30px] rounded-md bg-gray-300 hover:bg-gray-500 text-[#333333] font-bold text-center mx-auto mt-5">
                            <button>Register</button>
                        </div>
                    </div>
                </form>
            </section>
        </>
    )
}