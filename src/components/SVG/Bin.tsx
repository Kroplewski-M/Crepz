
interface BinProps{
    width:number,
    height:number,
    fill:string,
}

export const Bin = (props:BinProps)=>{

    return(
        <svg fill={props.fill} width={props.width} height={props.height} viewBox="0 0 48 48" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" stroke="#e32400"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title></title><path d="M42,3H28a2,2,0,0,0-2-2H22a2,2,0,0,0-2,2H6A2,2,0,0,0,6,7H42a2,2,0,0,0,0-4Z"></path><path d="M39,9a2,2,0,0,0-2,2V43H11V11a2,2,0,0,0-4,0V45a2,2,0,0,0,2,2H39a2,2,0,0,0,2-2V11A2,2,0,0,0,39,9Z"></path><path d="M21,37V19a2,2,0,0,0-4,0V37a2,2,0,0,0,4,0Z"></path><path d="M31,37V19a2,2,0,0,0-4,0V37a2,2,0,0,0,4,0Z"></path></g></svg>
    )
}