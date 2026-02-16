import { useState } from "react"

interface Props {
  list: string[]
  propFunction: (num: string) => void
}

function PopupMenu({ list, propFunction }: Props) {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        className="px-5 py-2 bg-blue-600 text-white rounded-xl shadow-md
                   hover:bg-blue-700 transition"
      >
        Select Option
      </button>

      {open && (
        <div className="absolute mt-3 w-48 bg-white rounded-xl shadow-xl border">
          {list.map((num, index) => (
            <div
              key={num}
              onClick={() => {
                setSelected(index)
                propFunction(num)
                setOpen(false)
              }}
              className={`px-4 py-2 cursor-pointer transition 
                ${
                  selected === index
                    ? "bg-blue-600 text-white"
                    : "hover:bg-gray-100"
                }`}
            >
              {num}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default PopupMenu
