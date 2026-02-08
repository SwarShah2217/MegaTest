import { useState } from 'react'

interface Props{
  list: string[]
  propFunction: (num: string)=> void
}

function PopupMenu({list, propFunction}: Props) {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(0)


  return (
    <div className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:text-amber-400"
      >
        Menu
      </button>

      {open && (
        <div className="absolute left-1/2 -translate-x-1/2 mt-2 min-w-48 rounded-lg bg-white shadow-lg border border-gray-200">
          <ul className="py-1">
            {list.map((num, index) => (
              <li key={num} onClick={() => {setSelected(index); propFunction(num)}} className={`px-4 py-4 border-2 cursor-pointer text-center ${selected === index
                ? 'bg-red-500 text-white border-red-700'
                : 'bg-amber-400 text-gray-900 border-blue-950 hover:bg-amber-300'}`}>
                {num}
              </li>
            ))}
          </ul>
        </div>
      )}

    </div>
  )
}

export default PopupMenu
