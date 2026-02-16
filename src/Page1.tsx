import Message from "./components/Message"
import ListGroup from "./components/ListGroup"
import PopupMenu from "./components/PopupMenu"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"


function Page1() {
  const items = ["Dashboard", "Projects", "Team", "Settings"]
  const list = ["a", "b", "c", "d", "aa"]

  const text = [
    "Modern UI card example",
    "Smooth hover animation",
    "Responsive grid layout",
    "Clean Tailwind styling",
  ]

  const img = [
    "https://footballnewsindia.in/wp-content/uploads/2013/12/International-Management-Group.jpg",
    "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_728/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/nabd3lsoifdkrmfifqrn/IMGWorldsofAdventureTicketinDubai.jpg",
    "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_728/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/nabd3lsoifdkrmfifqrn/IMGWorldsofAdventureTicketinDubai.jpg",
    "https://footballnewsindia.in/wp-content/uploads/2013/12/International-Management-Group.jpg",
  ]

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition">

      <Navbar />

      <div className="max-w-6xl mx-auto p-6 space-y-8">

        <div className="text-2xl font-bold text-center text-gray-800 dark:text-white">
          <Message />
        </div>

        <div className="flex flex-wrap gap-6 justify-center">
          <ListGroup items={items} heading="Menu" />
          <PopupMenu list={list} propFunction={(num) => console.log(num)} />
        </div>

      </div>

      <Hero text={text} img={img} />
    </div>
  )

}

export default Page1
