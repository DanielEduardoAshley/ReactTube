import React from 'react';
import './user.css';

class User extends React.Component {
  render() {
    return (
      <>
        <div className="user-wrapper">
          <div className="input-field">
            <div className="header">
              <div>Create a New User </div>
            </div>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="User Name" aria-describedby="button-addon2"></input>
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button" id="button-addon2">Add</button>
              </div>
            </div>
          </div>

          <div className="user-row">
            <div className="header">
              <div>User List</div>
            </div>
            <div className="list-wrapper">
              <div className="hvrbox">Yun</div>
              <div className="hvrbox-text">selected</div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default User