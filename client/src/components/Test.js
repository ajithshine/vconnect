import React, {useState} from 'react'
import axios from 'axios'
export default function Test() {
  const [abname, setAbname] = useState('')
  const ann = localStorage.getItem('token')
    axios.get("http://localhost:3001/api/users/62829dd98239bdc49fa7cbdc", {ann} ).then(
      (response) => {
        console.log(response);
        abname = response.data.username;
      }
    );
  return (
    <div>test <br />
      {abname}
    </div>
  )
}
