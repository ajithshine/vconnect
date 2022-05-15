import React, {useState} from 'react'
import axios from 'axios'
export default function Test() {
  const [username, setUsername] = useState('')
    axios.get("http://localhost:3001/api/login").then(
      (response) => {
        console.log(response);
        
      }
    );
  return (
    <div>test <br />
      {username}
    </div>
  )
}
