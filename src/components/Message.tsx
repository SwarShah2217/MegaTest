import { useNavigate } from "react-router-dom"

function Message() {
  const navigate = useNavigate();
  const name = 'Swar Shah'
  return <h1 className='bg-blue-600' onClick={() => navigate("/page2")}>hello {name}</h1>
}

export default Message