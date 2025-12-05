
import '../App.css'
import MailBox from '../components/MailBox.jsx'
import data from '../../data.json';
import { useEffect, useMemo, useState } from 'react';
import { nanoid } from 'nanoid';
import MailBoxForm from '../components/MailBoxForm.jsx';
import { useDispatch, useSelector } from 'react-redux';
  
function MailBoxPage() {

const dispatch = useDispatch()
const users = useSelector(state => state.mailbox.users);
const filter = useSelector(state => state.mailbox.filter);

useEffect(() => {
  localStorage.setItem('users', JSON.stringify(users))
   }, [users])

const onAddUser = (formData) => {
const finalUser = {
  ...formData,
  id: nanoid()
} 
const action = {type: "mailbox/ADD_USER", payload: finalUser}
dispatch(action)
}

const onDeleteUser = (userId) => {
  const action = { type: "mailbox/DELETE_USER", payload: userId }
  dispatch(action)
}

const onChangeFilter = (e) => {
  const action = {type: "mailbox/SET_FILTER",payload: e.target.value }
  dispatch(action)
}

const filteredUsers = useMemo(() => {
  return users.filter(user =>
    user.userName.toLowerCase().includes(filter.toLowerCase()) ||
    user.userEmail.toLowerCase().includes(filter.toLowerCase())
  );
}, [users, filter]);


  return (
<div>
  <MailBoxForm onAddUser={onAddUser}  />
  <section>
    <h2>Search user by name or email</h2>
    <input onChange={onChangeFilter} type="text" placeholder='search' value={filter} />
  </section>
  <MailBox boxTitle='Meest Express' boxUsers={filteredUsers} onDeleteUser={onDeleteUser}  />
</div>
  )
}

export default MailBoxPage
