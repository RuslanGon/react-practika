import React from "react";

const MailBox = ({ boxTitle, mailBoxCount,box }) => {
  return (
    <div>
      <h1>{boxTitle}</h1>
      {mailBoxCount > 0 ? 
      <p>Количество активных ячеек: {mailBoxCount}</p>
       : 
      <p><b>Нет ативных ячеек</b></p>
      }
      <ul>
        {Array.isArray(box) && box.map((item) => (
          <li key={item.id}>
            <span>Name:</span> {item.usrName}
            <br />
            <span> Email:</span> {item.userEmail}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MailBox;
