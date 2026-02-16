import { useDarkMode } from "../context/DarkModeContext"
import { Link } from "react-router-dom"

function Navbar() {
  const { dark, toggleDark } = useDarkMode()

  return (
    <div className="w-full px-6 py-4 shadow-md 
                    bg-white dark:bg-gray-900 
                    flex justify-between items-center transition">

      <h1 className="text-xl font-bold text-gray-800 dark:text-white">
        React Demo
      </h1>

      <div className="flex gap-6 items-center">
        <Link to="/" className="text-gray-700 dark:text-gray-300 hover:underline">
          Home
        </Link>

        <Link to="/page2" className="text-gray-700 dark:text-gray-300 hover:underline">
          Page2
        </Link>

        <button
          onClick={toggleDark}
          className="px-4 py-2 rounded-xl 
                     bg-gray-800 text-white
                     dark:bg-yellow-400 dark:text-black
                     transition"
        >
          {dark ? "☀ Light" : "🌙 Dark"}
        </button>
      </div>
    </div>
  )
}

export default Navbar
