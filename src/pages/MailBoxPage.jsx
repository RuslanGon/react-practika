
import '../App.css'
import MailBox from '../components/MailBox.jsx'
import { useEffect, useMemo, useState } from 'react';
import { nanoid } from 'nanoid';
import MailBoxForm from '../components/MailBoxForm.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, deleteUser, setFilter } from '../redux/mailbox/mailboxReducer.js';
import { selectFilter, selectUsers } from '../redux/mailbox/selectors.js';
  
function MailBoxPage() {

const dispatch = useDispatch()
// const users = useSelector(state => state.mailbox.users);
const users = useSelector(selectUsers);
// const filter = useSelector(state => state.mailbox.filter);
const filter = useSelector(selectFilter);


useEffect(() => {
  localStorage.setItem('users', JSON.stringify(users))
   }, [users])

const onAddUser = (formData) => {
const finalUser = {
  ...formData,
  id: nanoid()
} 
dispatch(addUser(finalUser))
}

const onDeleteUser = (userId) => {dispatch(deleteUser(userId))}

const onChangeFilter = (e) => {dispatch(setFilter(e.target.value))}

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
