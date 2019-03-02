
// addUser("Pam"), setsItem in LS
const addUser = (userName) => {
    const getUsers = JSON.parse(localStorage.getItem("users")) || [{
        name: "Default",
        feedList: ["Naruto", "Itachi","Kiki Do U Love Me", "Jiraiya", "Naruto Love Story"], 
        isActiveUser: true,
        viewHistory: [],
        movieInfo: {},
     }]

    const newUser = {
        name: userName,
        feedList: ["Naruto", "Itachi","Kiki Do U Love Me", "Jiraiya", "Naruto Love Story"],
        isActiveUser: false,
        viewHistory: [],
        movieInfo: {},
    }

    const newUsers = getUsers.concat(newUser);
   
    localStorage.setItem("users",JSON.stringify(newUsers))

    // Function to find error
    // let toggle = true;
    // for(let i=0; i<getUsers.length; i++){
    //     if(getUsers[i].name === userName){
    //         toggle = false;
    //     }
    // }
}

const updateActiveUser = (name) => {
    localStorage.setItem("activeUser", JSON.stringify(name))
};

const getAllUsersNames = () => {
const users = JSON.parse(localStorage.getItem("users")) || [{
    name: "Default",
    feedList: ["Naruto", "Itachi","Kiki Do U Love Me", "Jiraiya", "Naruto Love Story"], 
    isActiveUser: true,
    viewHistory: [],
    movieInfo: {},
 }]

const userNames = users.map(e =>  e.name)

return userNames;

};

const removeAllUsers = () => {
    // feedList: ["Naruto", "Itachi","Kiki Do U Love Me", "Jiraiya", "Naruto Love Story"], 
    localStorage.setItem("activeUser", JSON.stringify({name: "Default"}))
    localStorage.setItem("users", JSON.stringify([{
        name: "Default",
        feedList: [""],
        movieInfo: {},
        viewHistory:[],
        
          }]))
    
};

const addFeed = (name, feedName) => {
    const users = JSON.parse(localStorage.getItem("users")) || [{
        name: "Default",
        feedList: ["Naruto", "Itachi","Kiki Do U Love Me", "Jiraiya", "Naruto Love Story"], 
        isActiveUser: true,
        viewHistory: [],
        movieInfo: {},
     }]
    
    const updatedUsers = users.map((e) => {
     const feedL = e.feedList;
    if(e.name === name){
    const newFeedList = e.feedList.push(feedName);
    }
    return feedL;
    })
    
    localStorage.setItem("users", JSON.stringfy(updatedUsers))
    
    };

const getActiveUser = () => {
    const {name} = JSON.parse(localStorage.getItem("activeUser")) || {
        name: "Default",
     }

     return name;
}

const getFeed = (name) => {
    const users = JSON.parse(localStorage.getItem("users")) || [{
        name: "Default",
        feedList: ["Naruto", "Itachi","Kiki Do U Love Me", "Jiraiya", "Naruto Love Story"], 
        isActiveUser: true,
        viewHistory: [],
        movieInfo: {},
     }]

     const feed = users.map(e => {
         if(e.name === name){
             return e.feedList;
         }
     }) 

     return feed;
}

export {addUser , getActiveUser, getFeed};  

/*






deleteFeed = (name, feedName) => {
const users = JSON.parse(LocalStorage.getItem("users"))

const updatedUsers = users.map((e) => {
 Const feedL = e.feedList;
if(e.name === name){
const newFeedList = e.feedList.splice();
}
return feedL;
})

LocalStorage.setItem("users", JSON.stringfy(updatedUsers))

};
}

getFeed = (name) => {
const users = JSON.parse(LocalStorage.getItem("users"))

const feedList = users.map(e => e.name === name ? e.feedList : [])

Return feedList;
}

getMovieInfo = (name) => {
LocalStorage.getItem(JSON.parse("users"))
Const movieInfo = {}

If e.name === name {
Const movieObj = e.movieInfo
return movieInfo[movieObj]

Return movieInfo

}

}


*/