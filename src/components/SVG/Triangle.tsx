interface TriangleProps{
    width:number,
    height:number,
    fill:string,
}

export const Triangle = (props:TriangleProps)=>{
    return(
        <svg fill={props.fill} width={props.width} height={props.height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M21,21H3L12,3Z"></path></g></svg>
    )
}