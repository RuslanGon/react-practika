import React from "react";

const MailBox = ({ boxTitle, mailBoxCount,boxUsers }) => {
  return (
    <div>
      <h1>{boxTitle}</h1>
      {mailBoxCount > 0 ? 
      <p>Количество активных ячеек: {mailBoxCount}</p>
       : 
      <p><b>Нет ативных ячеек</b></p>
      }
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
