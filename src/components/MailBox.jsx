import React from "react";
import css from './MailBox.module.css'

const MailBox = ({ boxTitle, boxUsers, onDeleteUser }) => {
  return (
    <div>
      <h1>{boxTitle}</h1>
      <ul>
        {Array.isArray(boxUsers) && boxUsers.map((user) => (
         <li key={user.id}>
         <div className={css.name}><b>name:</b><div className={css.color}></div>{user.userName}</div>
         <div className={css.name}><b>email:</b>{user.userEmail}
         </div>
         <button type="button" onClick={() => onDeleteUser(user.id)}>
           ❌ user
         </button>
       </li>
        ))}
      </ul>
      
    </div>
  );
};

export default MailBox;
