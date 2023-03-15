
export const RegisterForm = ()=>{

    return(
        <>
            <section>
                <h1 className="text-[40px] font-bold">Register</h1>
                <form action="" className="mt-10">
                    <label htmlFor="FullName" className="block">Full Name:</label>
                    <input type="text" name="FullName" id="FullName" />
                    <label htmlFor="Email" className="block">Email:</label>
                    <input type="email" name="Email" id="Email" />
                    <label htmlFor="Password" className="block">Password:</label>
                    <input type="password" name="Password" id="Password" className="block"/>
                    <label htmlFor="TOS" className="">I agree to all Terms of Service:</label>
                    <input type="checkbox" name="TOS" id="TOS" />
                </form>
            </section>
        </>
    )
}