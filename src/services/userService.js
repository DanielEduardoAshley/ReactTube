
// addUser('Pam'), setsItem in LS
const addUser = (userName) => {
    const getUsers = JSON.parse(localStorage.getItem('users')) || [{
        name: 'Default',
        feedList: ['Naruto', 'Itachi','Kiki Do U Love Me', 'Jiraiya', 'Naruto Love Story'], 
        isActiveUser: true,
        viewHistory: [],
        movieInfo: {},
     }]

    const newUser = {
        name: userName,
        feedList: ['Naruto', 'Itachi','Kiki Do U Love Me', 'Jiraiya', 'Naruto Love Story'],
        isActiveUser: false,
        viewHistory: [],
        movieInfo: {},
    }

    const newUsers = getUsers.concat(newUser);
   
    localStorage.setItem('users',JSON.stringify(newUsers))

    // Function to find error
    // let toggle = true;
    // for(let i=0; i<getUsers.length; i++){
    //     if(getUsers[i].name === userName){
    //         toggle = false;
    //     }
    // }
}

export {addUser};  