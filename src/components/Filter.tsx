import close from '../assets/images/close.png'


interface FilterProps{
    closeFilter: ()=>void,
}


export const Filter = (props:FilterProps)=>{

    return(
        <div className="w-[100vw] pb-10 absolute top-0 right-0 bg-[#333333] z-[100]">
            <img src={close} alt="" onClick={props.closeFilter} className='absolute w-[30px] h-[30px] right-1 top-1'/>
            <h1 className="text-center font-bold text-gray-200 text-[35px] mt-10">Filter</h1>

            <div className="ml-5 mt-10 text-gray-200 font-bold text-[20px]">
                <h2 className="text-[30px]">Brand:</h2>
                <div className="mt-5 flex flex-col space-y-5">
                    <div className="">
                        <label htmlFor="newBalance" className="mr-[10px]">New Balance: </label>
                        <input type="checkbox" name="newBalance" className=""/>
                    </div>
                    <div className="">
                        <label htmlFor="nike" className="mr-[10px]">Nike: </label>
                        <input type="checkbox" name="nike" className=""/>
                    </div>
                    <div className="">
                        <label htmlFor="addiddas" className="mr-[10px] ">Addiddas: </label>
                        <input type="checkbox" name="addiddas" className=""/>
                    </div>
                    <div className="">
                        <label htmlFor="converse" className="mr-[10px]">Converse: </label>
                        <input type="checkbox" name="converse" className=""/>
                    </div>
                    <div className="">
                        <label htmlFor="puma" className="mr-[10px]">Puma: </label>
                        <input type="checkbox" name="puma" className=""/>
                    </div>
                    <div className="">
                        <label htmlFor="converse" className="mr-[10px]">Under Armour: </label>
                        <input type="checkbox" name="converse" className=""/>
                    </div>
                </div>
            </div>
                <hr className="mt-5 w-[90%] mx-auto"/>
                <div className="ml-5 mt-10 text-gray-200 font-bold text-[20px]">
                    <h2 className="text-[30px]">Gender:</h2>
                    <div className="mt-5 flex flex-col space-y-5">
                        <div className="">
                            <label htmlFor="male" className="mr-[10px]">Male: </label>
                            <input type="checkbox" name="male" className=""/>
                        </div>
                        <div className="">
                            <label htmlFor="female" className="mr-[10px]">Female: </label>
                            <input type="checkbox" name="female" className=""/>
                        </div>
                        <div className="">
                            <label htmlFor="kids" className="mr-[10px]">Kids: </label>
                            <input type="checkbox" name="kids" className=""/>
                        </div>
                    </div> 
                </div>
                <hr className="mt-5 w-[90%] mx-auto"/>
                <div className="ml-5 mt-10 text-gray-200 font-bold text-[20px]">
                    <h2 className="text-[30px]">Price:</h2>
                    <div className="flex space-x-2 mt-5">
                            <label htmlFor="min" className="mr-[10px]">Min: </label>
                            <input type="range" name="min" min="20" max="200" step="20"  className=""/>
                            <p>$65</p>
                    </div>
                    <div className="flex space-x-2 mt-5">
                            <label htmlFor="max" className="mr-[10px]">Max: </label>
                            <input type="range" name="max" min="20" max="200" step="20"  className=""/>
                            <p>$200</p>
                    </div>
                </div>
                <div className="mx-auto w-[200px] h-[30px] mt-10 ">
                    <button className="w-[100%] h-[100%] bg-gray-200 font-bold " onClick={props.closeFilter}>Done</button>
                </div>
        </div>
    )
}