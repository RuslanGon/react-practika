import React from "react";

const MailBox = ({ boxTitle, boxUsers }) => {
  return (
    <div>
      <h1>{boxTitle}</h1>
      <ul>
        {Array.isArray(boxUsers) && boxUsers.map((user) => (
         <li key={user.id}>
         <span><b>name: </b>:</span> {user.usrName}
         <br />
         <span><b>email: </b></span> {user.userEmail}
       </li>
        ))}
      </ul>
    </div>
  );
};

export default MailBox;
