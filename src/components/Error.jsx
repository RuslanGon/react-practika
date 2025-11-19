import React from 'react';

const Error = ({ message = "Щось пішло не так..." }) => {
  return (
    <div style={{
      padding: "20px",
      marginTop: "20px",
      textAlign: "center",
      color: "#b00020",
      background: "#ffe6e6",
      borderRadius: "8px",
      fontSize: "18px",
      fontWeight: "bold"
    }}>
      ❌ {message}
    </div>
  );
};

export default Error;
