
interface Props{
  items: string[]
  heading: string
}

function ListGroup({items, heading}: Props) {

  return (
    <div className="w-72 rounded-xl border border-gray-200 bg-white shadow-sm">
      <h1>{heading}</h1>
      <ul className="divide-y divide-gray-200">
        {items.map((item) => (
          <li
            key={item}
            className="px-4 py-3 cursor-pointer text-gray-700
                       hover:bg-blue-50 hover:text-blue-600
                       transition-colors"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListGroup
