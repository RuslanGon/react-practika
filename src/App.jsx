import './App.css'
import MailBox from './components/MailBox.jsx'
import data from '../data.json';
import { useState } from 'react';
import { nanoid } from 'nanoid';
  
function App() {

const [users, setUsers]  = useState(data.meestExpres) 

const onAddUser = (formData) => {
const finalUser = {
  ...formData,
  id: nanoid()
} 
// setUsers([...users, finalUser])
setUsers(prevState => [...prevState, finalUser]) 


}

  return (
<div>
  <MailBox boxTitle='Meest Express' boxUsers={users} />
</div>
  )
}

export default App
