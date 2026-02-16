interface Props {
  items: string[]
  heading: string
}

function ListGroup({ items, heading }: Props) {
  return (
    <div className="w-72 rounded-2xl bg-white shadow-lg p-4">
      <h1 className="text-lg font-semibold mb-3 text-gray-800">
        {heading}
      </h1>

      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="px-3 py-2 rounded-lg cursor-pointer
                       bg-gray-100 hover:bg-blue-500
                       hover:text-white transition"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListGroup
