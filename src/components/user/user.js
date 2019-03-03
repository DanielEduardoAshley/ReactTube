import React from 'react';
import './user.css';

class User extends React.Component {
  constructor(props){
    super(props)
    this.state= {
      users: [{
         name: 'Default',
         feedList: ['Naruto'], 
         isActiveUser: true,
      }],
      input: '',
    }
  }

  onChange = (e) => {
    this.setState({input: e.target.value})
  }

  onClickAdd = () => {
    for (let i = 0; i < this.state.users.length; i++){
      if(this.state.input.toLowerCase() === this.state.users[i].name){
        return;
      }
    }
    const newUser = {
      name: this.state.input,
      feedList: ["Jiraiya meets Naruko","Triple Integrals","Alice in Wonderland","Otters", "Ellen Degeneres","Itachi","Cardi B", "Saiki K"],
      isActiveUser: false,
      viewHistory: [],
      movieInfo: {},
    }

    const newUserArr= this.state.users.concat(newUser)
    this.setState({users:newUserArr})
    localStorage.setItem('users', JSON.stringify(newUserArr));
  }
  
  droppedDown = () => {
     const droppeddown = this.state.users.map((e, i) =>{
    
      return (
        <>
        {(e.isActiveUser) ? <div className="list-item item click" key={i}>{e.name}</div> : 
        <div className="list-item item"  key={i} onClick={() => this.onClickUser(i)}>{e.name}</div>}
        </>
      )
    })
    return droppeddown;
  }

  onClickUser = (i) => {
    const newObj = {...this.state};
    for (let y = 0; y < this.state.users.length ; y++){
      const userActive = this.state.users[y].isActiveUser
      if (userActive === true){
        newObj.users[y].isActiveUser = false;
        this.setState(newObj);
        break;
      }
    }
    newObj.users[i].isActiveUser = true;
    this.setState(newObj);
    localStorage.setItem('users', JSON.stringify(newObj.users));
    localStorage.setItem('activeUser', JSON.stringify(newObj.users[i]));
  }

  onKeyDown = (e) => {
    if(e.key.toLowerCase() === 'enter'){
      this.onClickAdd();
    }
  }

  componentDidMount() {
    const SavedUsers = JSON.parse(localStorage.getItem('users')) || [{
      name: 'Default',
      feedList: ["Jiraiya meets Naruko","Triple Integrals","Alice in Wonderland","Otters", "Ellen Degeneres","Itachi","Cardi B", "Saiki K"], 
      isActiveUser: true,
      viewHistory: [],
      movieInfo: {},
   }]

    this.setState({users: SavedUsers})
  }

  render() {
    return (
      <>
        {/* <div className='pageContainer'> */}
        <div className="user-wrapper">
        
          <div className="input-field">
            <div className="header">
              <div className="header-txt">Create a New User </div>
            </div>
    
          <div className="input-group">
              <textarea className="input-txt" placeholder="User Name"  onKeyDown={this.onKeyDown} onChange={this.onChange}></textarea>
             <div className="input-group-btn">
               <button className="btn-style" type="button" onClick={this.onClickAdd}>Add</button>
              </div>
            </div>
          </div>

          <div className="user-row">
            <div className="header">
              <div className="header-txt">User List</div>
            </div>
            <div className="list-wrapper">
                <div className="list-item">
                  {this.droppedDown()}
                </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </>
    )
  }
}

export default User