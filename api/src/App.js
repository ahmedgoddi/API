import  React , {useState , useEffect} from "react"
import axios from "axios"
import NavBar from './components/NavBar';
import './App.css';
import UserList from "./components/UserList";


function App() {
  const [users , setUsers] = useState([])
  const [loading , setLoading] = useState(true)
  
  useEffect(() => {
  axios.get("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    setUsers(response.data)
    setLoading(false)
  })

  },[])
  
  if(loading) {
    return <h1>loading.....</h1>
  }
  
  return (
    <div>
    <NavBar/>
    <UserList users={users}/>
    <ul>
    
    </ul>
    </div>
  );
}

export default App;
