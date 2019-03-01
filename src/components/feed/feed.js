import React from 'react';
import './feed.css';
import { access } from 'fs';

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
      input: '',
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
  console.log('newSavedUsersArr', newSavedUsersArr)
    newSavedUsersArr.forEach(e => {
    if (e.name === newActiveUserObg.name){
      e.feedList.push(this.state.input)
    }
    })
    this.setState({activeUser: newActiveUserObg})  
    localStorage.setItem('users', JSON.stringify(newSavedUsersArr));
    localStorage.setItem('activeUser', JSON.stringify(newActiveUserObg));
  
  }

  onKeyDown = (e) =>{
    if (e.key.toLowerCase() ==='enter'){
      this.onClickAdd();
    }
  }

  droppedDown = () =>{
    const feedDroppedDown = this.state.activeUser.feedList.map ((e, i)=>{
      return (
             <>
             <div className= "card-n-btn">
                <div className="card-item" key={i}>{e}</div>
                     <div className="card-button">
                       <button type="button" className="close" aria-label="Close" key={i} onClick={this.onClickRemoved}>
                         <div aria-hidden="true">&times;</div>
                       </button>
                </div>
              </div>
             </>
           )
        })
    return feedDroppedDown;  
    }
    
    onClickRemoved = (i) =>{
      const newActiveUserObg = {...this.state.activeUser};
        newActiveUserObg.feedList.splice(i, 1)
      
      this.setState({
        activeUser: newActiveUserObg,
      })
      localStorage.setItem('activeUser', JSON.stringify(newActiveUserObg));
      
      const newSavedUsersArr = [...this.state.users];
        newSavedUsersArr.forEach((e) =>{
          if(e.name === newActiveUserObg.name){
             e.feedList = newActiveUserObg.feedList 
          }
        })

        this.setState({
          users: newSavedUsersArr
        })
      localStorage.setItem('users', JSON.stringify(newSavedUsersArr));  
    }
    


  render() {
    return (
      <>
        <div className="feed-wrapper">
          <div className="input-field">
            <div className="header">
              <div>Create a New Explore Feed </div>
            </div>
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Feed Name" aria-describedby="button-addon2" onChange={this.onChange} onKeyDown={this.onKeyDown}></input>
              <div className="input-group-append">
                <button className="btn btn-style" type="button" id="button-addon2" onClick={this.onClickAdd}>Add</button>
              </div>
            </div>
          </div>

          <div className="feed-row">
            <div className="header">
              <div>Explore Feed List</div>
            </div>
            <div className="card-wrapper">
              <div className="card-row">
            {(this.state.activeUser.feedList) ? this.droppedDown() : <p>Add a Feed!</p>}
              </div>
            </div>
            </div>
        </div>
      </>
    );
  }

}

export default Feed

// Storage = {}

// Storage.getActiveUser
// Storage.createUser
// Storage.removeUser
// Storage.changeActiveUser
// Storage.getAllUsers
