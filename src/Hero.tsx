import Cards from "./Cards"

interface Props{
    text: string[]
    img: string[]
}

function Hero({text, img}: Props){
    return(
        <>
        <div className="flex p-5 bg-amber-300 border-2 border-black justify-center items-center m-auto">
            {text.map((txt, index) =>(
                <div><Cards  text={txt} img = {img[index]}/></div>
            ))}
        </div>
        </>
    )
}

export default Hero