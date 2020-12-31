import React from "react";

const UserShowTile = (props) => {
  return (
    <div className="user-info-container">
      <h1 className='is-size-1'>User Profile:</h1>
      <br />
      <h4 className='is-size-4'>
        <strong>Username:</strong> {props.userInfo.username}
      </h4>
      <h4 className='is-size-4'>
        <strong>Full Name:</strong> {props.userInfo.firstName}{" "}
        {props.userInfo.lastName}
      </h4>
      <h4 className='is-size-4'>
        <strong>Email:</strong> {props.userInfo.email}
      </h4>
      <h4 className='is-size-4'>
        <strong>Member Since:</strong> {props.userInfo.accountCreated}
      </h4>
      <br />
      <a className='button' href="/users/edit">Change Email or Password</a>
    </div>
  );
};

export default UserShowTile;
