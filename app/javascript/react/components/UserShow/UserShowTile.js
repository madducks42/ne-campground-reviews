import React from "react";

const UserShowTile = (props) => {
  return (
    <div className="user-info-container">
      <h1 className='is-size-1'>Member Information:</h1>
      <br />
      <h5 className='is-size-5'>
        <strong>Username:</strong> {props.userInfo.username}
      </h5>
      <h5 className='is-size-5'>
        <strong>Full Name:</strong> {props.userInfo.firstName}{" "}
        {props.userInfo.lastName}
      </h5>
      <h5 className='is-size-5'>
        <strong>Email:</strong> {props.userInfo.email}
      </h5>
      <h5 className='is-size-5'>
        <strong>Member Since:</strong> {props.userInfo.accountCreated}
      </h5>
      <br />
      <a className='button' href="/users/edit">Change Email or Password</a>
    </div>
  );
};

export default UserShowTile;
