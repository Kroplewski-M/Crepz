import { Bag } from "../components/SVG/Bag"

export const OrderConfirmed = ()=>{


    return(
        <section className="w-[100vw] h-[100vh] pt-16">
            <div className="w-[70px] mx-auto mb-5">
                <Bag width={70} height={70} fill="#222222" />
            </div>
            <div className="text-center">
                <h1 className="font-bold text-[20px]">Thank you! Your order is confirmed.</h1>
                <p className="font-semibold mt-5">Order number: <span className="block">#fe88c7e1-3243-4348-8e5b-4ab92b2698fb</span></p>
            </div>
            <div className="grid place-content-center">
                <div className="w-[150px] mt-5">
                    <p className="font-bold">Address:</p>
                    <p>Mateusz Kroplewski</p>
                    <p>29 Poplars Road</p>
                    <p>Barnsley</p>
                    <p>S70 3NP</p>
                </div>
                <p className="mt-5 mb-5">Order Details:</p>
                <div className="flex flex-wrap flex-col">
                    <div className="h-[30px] rounded-sm odd:bg-gray-300 flex space-x-5 px-[5px]">
                        <p>Name: Nike Jordans</p>
                        <p>Size: 9</p>
                        <p>Quantity: 2</p>
                        <p>Total Price: £200</p>
                    </div>
                    <div className="h-[30px] rounded-sm odd:bg-gray-300 flex space-x-5 px-[5px]">
                        <p>Name: Nike Jordans</p>
                        <p>Size: 9</p>
                        <p>Quantity: 2</p>
                        <p>Total Price: £200</p>
                    </div>
                    <div className="h-[30px] rounded-sm odd:bg-gray-300 flex space-x-5 px-[5px]">
                        <p>Name: Nike Jordans</p>
                        <p>Size: 9</p>
                        <p>Quantity: 2</p>
                        <p>Total Price: £200</p>
                    </div>
                </div>
            </div>
            <div className="w-[200px] h-[30px] mx-auto mt-10">
                <button className="w-[100%] h-[100%] bg-[#333333] text-gray-200 ">Return Home</button>
            </div>
        </section>
    )
}