import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../redux/mailbox/selectors.js';
import { setFilter } from '../redux/mailbox/mailboxReducer.js';

const MailboxFilter = () => {
    
const dispatch = useDispatch()
const filter = useSelector(selectFilter);
const onChangeFilter = (e) => {dispatch(setFilter(e.target.value))}

  return (
    <div>
    <h2>Search user by name or email</h2>
    <input onChange={onChangeFilter} type="text" placeholder='search' value={filter} />
  </div>
  )
}

export default MailboxFilter