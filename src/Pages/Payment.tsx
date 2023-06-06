import { PaymentForm } from "../components/PaymentForm"


export const Payment = ()=>{
    return(
        <>
            <div className="w-[80%] md:w-[350px] h-[60px] bg-red-700 mx-auto rounded-sm mt-5 text-gray-200 pt-[5px]">
                <p className="text-center font-semibold w-[95%]">This is only a test form please dont fill with sensative data</p>
            </div>
            <p className="text-center font-bold text-[25px] mt-5">Checkout form</p>
            <PaymentForm />
        </>
        )    
}