import { Component } from "react";
import "../App.scss";

class Profile extends Component {
  render() {
    const { users } = this.props;

    return (
      <div className="mainWrapper">
        {users.map((user, index) => (
          <div key={index}>
            <div className="Profile">
              <div className="Wrapper">
                <div className="Avatar">
                  <img src={user.profile_picture_url} alt="Profile Picture" />
                </div>
                <div className="Title">
                  <p>{user.name}</p>
                  <p>{user.occupation}</p>
                </div>
              </div>
              <div className="Description">
                {/* <p>Age: {user.age}</p>
                <p>Location: {user.location}</p>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p> */}
                <p>"{user.bio}"</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Profile;
