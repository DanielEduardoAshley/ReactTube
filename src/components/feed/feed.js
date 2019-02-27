import React from 'react';
import './feed.css';


class Feed extends React.Component {

  render() {
    return (
      <>
        <div className="feed-wrapper">
          <div className="input-field">
            <div className="header">
              <div>Create a New Explore Feed </div>
            </div>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Feed Name" aria-describedby="button-addon2"></input>
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button" id="button-addon2">Add</button>
              </div>
            </div>
          </div>

          <div className="feed-row">
            <div className="header">
              <div>Explore Feed List</div>
            </div>
            <div className="card-wrapper">
              <div className="card-item">Harry Potter</div>
                <div className="card-button">
                  <button type="button" class="close" aria-label="Close">
                    <div aria-hidden="true">&times;</div>
                  </button>
                </div>
              </div>
            </div>
        </div>
      </>
    );
  }

}

export default Feed