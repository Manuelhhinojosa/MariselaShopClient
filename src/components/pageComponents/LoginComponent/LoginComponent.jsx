import React from "react";

// styles
import "./LoginComponent.scss";

export const LoginComponent = () => {
  const handleSignIn = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="loginComponentContainer">
      <div>
        <form action="">
          <input
            type="text"
            name="username"
            placeholder="user"
            autoComplete="off"
          />

          <input
            type="password"
            name="password"
            placeholder="password"
            autoComplete="off"
          />
          <button onClick={handleSignIn}>login</button>
        </form>
      </div>
    </div>
  );
};
