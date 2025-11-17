import './App.css'
import MailBox from './components/MailBox.jsx'
import data from '../data.json';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import MailBoxForm from './components/MailBoxForm.jsx';
  
function App() {

const [users, setUsers]  = useState(() => {
  const stingiUsers = localStorage.getItem('users')
  if(!stingiUsers) return data.meestExpres
  const parseUsers = JSON.parse(stingiUsers)
  if (!Array.isArray(parseUsers) || parseUsers.length === 0) {
    return data.meestExpres;
  }
  return parseUsers;
}) 

useEffect(() => {
  localStorage.setItem('users', JSON.stringify(users))
   }, [users])

const onAddUser = (formData) => {
const finalUser = {
  ...formData,
  id: nanoid()
} 
// setUsers([...users, finalUser])
setUsers(prevState => [...prevState, finalUser]) 
}

const onDeleteUser = (userId) => {
setUsers(prevUsers => prevUsers.filter(user => user.id !== userId))
}

  return (
<div>
  <MailBoxForm onAddUser={onAddUser}  />
  <MailBox boxTitle='Meest Express' boxUsers={users} onDeleteUser={onDeleteUser}  />
</div>
  )
}

export default App
