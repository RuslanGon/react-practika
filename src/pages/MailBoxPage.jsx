
import '../App.css'
import MailBox from '../components/MailBox.jsx'
import { useEffect, useMemo, useState } from 'react';
import { nanoid } from 'nanoid';
import MailBoxForm from '../components/MailBoxForm.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, deleteUser, setFilter } from '../redux/mailbox/mailboxReducer.js';
import { selectFilter, selectFilteredUsers, selectUsers } from '../redux/mailbox/selectors.js';
import MailboxFilter from '../components/MailboxFilter.jsx';
  
function MailBoxPage() {

const dispatch = useDispatch()
const filteresUsers = useSelector(selectFilteredUsers)
// const users = useSelector(state => state.mailbox.users);
// const users = useSelector(selectUsers)
// const filter = useSelector(state => state.mailbox.filter);
// const filter = useSelector(selectFilter);


// useEffect(() => {
//   localStorage.setItem('users', JSON.stringify(users))
//    }, [users])

const onAddUser = (formData) => {
const finalUser = {
  ...formData,
  id: nanoid()
} 
dispatch(addUser(finalUser))
}
const onDeleteUser = (userId) => {dispatch(deleteUser(userId))}

// const filteredUsers = useMemo(() => {
//   return users.filter(user =>
//     user.userName.toLowerCase().includes(filter.toLowerCase()) ||
//     user.userEmail.toLowerCase().includes(filter.toLowerCase())
//   );
// }, [users, filter]);


  return (
<div>
  <MailBoxForm onAddUser={onAddUser}  />
  <section>
    <MailboxFilter />
  </section>
  <MailBox boxTitle='Meest Express' boxUsers={filteresUsers} onDeleteUser={onDeleteUser}  />
</div>
  )
}

export default MailBoxPage
