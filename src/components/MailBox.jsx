import React from "react";

const MailBox = ({ boxTitle, boxUsers, onDeleteUser }) => {
  return (
    <div>
      <h1>{boxTitle}</h1>
      <ul>
        {Array.isArray(boxUsers) && boxUsers.map((user) => (
          <li key={user.id}>
            <span><b>name:</b></span> {user.userName}
            <br />
            <span><b>email:</b></span> {user.userEmail}
            <br />
            <button type="button" onClick={() => onDeleteUser(user.id)}>Delete User</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MailBox;
