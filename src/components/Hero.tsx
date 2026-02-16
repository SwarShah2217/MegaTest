import Cards from "./Cards"

interface Props {
  text: string[]
  img: string[]
}

function Hero({ text, img }: Props) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">
        Featured Cards
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {text.map((txt, index) => (
          <Cards key={index} text={txt} img={img[index]} />
        ))}
      </div>
    </div>
  )
}

export default Hero
