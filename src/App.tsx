import Message from "./components/Message";
import ListGroup from "./components/ListGroup";
import PopupMenu from "./components/PopupMenu";
import Hero from "./components/Hero";

function App() {
  const items = ['Dashboard', 'Projects', 'Team', 'Settings', 'Best Swar', 'Rohit Sharma']
  const list = ["a", "b", "c", "d", 'aa']

  const text = ["Lorem, ipsum dolor.","lorem gh tuygih hjk", "wertyuyhgtrf", "dsefrgthyju"]
  const img = ["https://footballnewsindia.in/wp-content/uploads/2013/12/International-Management-Group.jpg", "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_728/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/nabd3lsoifdkrmfifqrn/IMGWorldsofAdventureTicketinDubai.jpg", "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_728/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/nabd3lsoifdkrmfifqrn/IMGWorldsofAdventureTicketinDubai.jpg", "https://footballnewsindia.in/wp-content/uploads/2013/12/International-Management-Group.jpg"]

  return <>
    <div><Message /></div>
    <div><ListGroup items = {items} heading="LIST"/></div>
    <div><PopupMenu list = {list} propFunction={(num)=>{console.log(num)}}/></div>
    <div><Hero text = {text} img = {img}/></div>

    {/* <div><Cards text = {text} img = {img}/></div>
    <div><Cards text = {text} img = {img}/></div>
    <div><Cards text = {text} img = {img}/></div> */}
  </>
}

export default App