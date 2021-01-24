import React from "react";

const UsersInfoTile = (props) => {
  
  const user = props.user.username
  const firstName = props.user.first_name
  const lastName = props.user.last_name
  const email = props.user.email
  const id = props.user.id
  const role = props.user.role
  const accountCreated = props.user.accountCreated
  let favorites = null
  let reviews = null


  if (props.user.campgrounds) {
    favorites = props.user.campgrounds.length
  } else {
    favorites = 0
  }

  if (props.user.reviews) {
    reviews = props.user.reviews.length
  } else {
    reviews = 0
  }


  return (
    <tbody>
      <tr>
        <th>{user}</th>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{email}</td>
        <td>{id}</td>
        <td>{role}</td>
        <td>{accountCreated}</td>
        <td>{favorites}</td>
        <td>{reviews}</td>
        <td>Edit</td>
        <td>Delete</td>
      </tr>
    </tbody>
  );
};
export default UsersInfoTile;

