const userService = {
    addUser,
};

const addUser = (userName) => {
    const userArr = JSON.parse(localStorage.getItem('users')) || [{
        name: 'Default',
        feedList: ['Naruto', 'Itachi','Kiki Do U Love Me', 'Jiraiya', 'Naruto Love Story'], 
        isActiveUser: true,
        viewHistory: [],
        movieInfo: {},
     }]

     console.log(userArr)
}

module.exports = userService;