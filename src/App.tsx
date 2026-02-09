import { useState } from "react"
import Page1 from "./Page1"
import Page2 from "./Page2";


function App() {
  const [page, setPage] = useState("Page1");
  return(
  <>
    {page === "Page1" && <Page1 goToPage={setPage} />}
    {page === "Page2" && <Page2 />}
  </>
  )
}

export default App