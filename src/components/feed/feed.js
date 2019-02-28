import React from 'react';
import './feed.css';


class Feed extends React.Component {
  constructor(props){
    super(props)
    this.state={
      users: [{
        name: 'Default',
        feedList: ['Naruto'],
        isActiveUser: true,
      }],
      activeUser:{},
      input: ''
    }
  }

  componentDidMount(){
    const activeUser = JSON.parse(localStorage.getItem('activeUser')) || {
      name: 'Default',
      feedList: [], 
      isActiveUser: true,
   } 
    const SavedUsers = JSON.parse(localStorage.getItem('users')) || [{
      name: 'Default',
      feedList: ['Naruto'], 
      isActiveUser: true,
   }]

   console.log(SavedUsers, typeof SavedUsers)
    this.setState({
      users: SavedUsers, 
      activeUser: activeUser
    })
  }
 
  onChange=(e)=>{
    this.setState({input: e.target.value})
  }

  onClickAdd = () =>{
  const newActiveUserObg = {...this.state.activeUser};
    newActiveUserObg.feedList.push(this.state.input)

  const newSavedUsersArr = this.state.users;
    newSavedUsersArr.forEach(e => {
    if (e.name === newActiveUserObg.name){
      e.feedList.push(this.state.input)
    }
    })
    this.setState({activeUser: newActiveUserObg})  
    localStorage.setItem('users', JSON.stringify(newSavedUsersArr));
    localStorage.setItem('activeUser', JSON.stringify(newActiveUserObg));
  
  }

  render() {
    return (
      <>
        <div className="feed-wrapper">
          <div className="input-field">
            <div className="header">
              <div>Create a New Explore Feed </div>
            </div>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Feed Name" aria-describedby="button-addon2" onChange={this.onChange}></input>
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={this.onClickAdd}>Add</button>
              </div>
            </div>
          </div>

          <div className="feed-row">
            <div className="header">
              <div>Explore Feed List</div>
            </div>
            <div className="card-wrapper">
              <div className="card-item">{}</div>
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