import axios from 'axios'
import {useState, useEffect} from 'react'
import './App.css';
import Social from './compenents/social/social.compent';
function App() {
  const  [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=30')
    .then(res=>setUsers(res.data.results))
    .catch(err=>console.log(err))  
  },[])
  return (
    <div className="App">
      {users.map((user,index)=>(
      <Social user={user} key={index}/>
      ))}
    </div>
  );
}

export default App;
