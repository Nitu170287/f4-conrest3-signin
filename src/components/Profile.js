import React from "react";
import { connect } from "react-redux";

const Profile = ({ user }) => {
  return (
    <div className="profile-page">
      <div className="profile">
        <img src={user.image} alt="profile_image" />
        <div className="user-info">
          <div className="fname">First Name: {user.firstName}</div>
          <div className="lname">Last Name: {user.lastName}</div>
          <div className="email">Email: {user.email}</div>
          <div className="username">Username: {user.username}</div>
          <div>Gender: male</div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state,
  };
};

export default connect(mapStateToProps)(Profile);
