interface Props{
    text: String
    img: string
}

function Cards({text, img}: Props){
    return(
    <>
        <div onClick={()=>{console.log("hi")}}
            className="bg-gray-600 text-white w-50 h-75 rounded-2xl border-4 border-black flex flex-col justify-center items-center m-3 p-5" >
            <div className="border-2 border-black"><img src={img} alt="" />
            </div>
            <div>{text}</div>
        </div>
    
    </>
    )
}

export default Cards