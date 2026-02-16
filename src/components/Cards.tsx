interface Props {
  text: string
  img: string
}

function Cards({ text, img }: Props) {
  return (
    <div
      onClick={() => console.log("hi")}
      className="bg-white dark:bg-gray-800 
                 rounded-2xl shadow-lg 
                 overflow-hidden 
                 transition-transform duration-300 
                 hover:scale-105 hover:shadow-2xl 
                 w-full max-w-xs"
    >
      <img
        src={img}
        alt="card"
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <p className="text-gray-700 dark:text-gray-200 text-sm">
          {text}
        </p>
      </div>
    </div>
  )
}

export default Cards
