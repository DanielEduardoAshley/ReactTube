import  React from 'react'
import {  withRouter } from 'react-router-dom';
import Homelayout2 from '../homelayout/homelayout'
import  { axiosFirstCall, axiosSecondCall }  from '../../services/axios'
import './home.css';
import { getActiveUser, getFeed } from '../../services/userService'


class Home extends React.Component {
    constructor(props){
        super(props)
        this.state={
                Users : {
                       Default : {
                                
                                feedlist: ['music', 'orochimaru'],
                                movieInfo: [
                                  {
                                   feedTitle: 'music',
                                   vidTitle : 'abba',
                                   vidInfo : 'new Album',
                                   vidImg  : 'jpg',
                                   chanName : 'listeners',
                                   TimePost : '4 hrs ago'
                                  }
                                 ]
                    },         
                       
                       Pam  :  { 
                        

                                    feedlist: [ 'jiraya', 'harry Potter', 'pokemon'],
                                    movieInfo: {}

                                  //   {
                                  //  feedTitle: 'music',
                                  //  title : 'abba',
                                  //  description : 'new Album',
                                  //  thumbnail  : 'jpg',
                                  //  channelTitle : 'listeners',
                                  //  publishedAt : '4 hrs ago',
                                  //  nextPageToken: 'CAgQAA'
                                  //   }
                                  // this.state.users[selectedUser].movieInfo[feedName].map()
                                    
                    }
                  },
                        
                activeUser : 'Pam',
                showMore : {
                                titleOfFeed : 'music',
                                showMore    :  false
                            }
        }
    }
     
    
  
    call=(query, nextPage='')=>{
      axiosFirstCall(query, nextPage).then((response)=>{
          const newArr = []
        console.log('data',response)
             response.data.items.map(e=>{
               
               return newArr.push({
                 feedTitle : query,
                 id: e.id.videoId,
                 title  : e.snippet.title,
                 description: e.snippet.description,
                 thumbnail: e.snippet.thumbnails.high,
                 channelTitle: e.snippet.channelTitle,
                 publishedAt : e.snippet.publishedAt,
                 nextPageToken: response.data.nextPageToken,
    
    
    
         }
               )
               
             })
               
               const addUserData = {...this.state}
               
              //  const active = getActiveUser();
              //  console.log('Active User',active)
               const Pamela = addUserData.Users[`${this.state.activeUser}`].movieInfo
              // const Pamela = addUserData.Users[active]
              // console.log('Pamela',Pamela)
                Pamela[query] = (Pamela[query] || []).concat(newArr)
                console.log('movies?',Pamela[query])
               // const newPamela = (Pamela || []).concat(newArr)
               // addUserData.Users.Pam.movieInfo = newPamela 
    
               console.log('this',addUserData.Users)
             this.setState({
               Users : addUserData.Users
             },()=>{
               console.log(this.state.Users)
               console.log(this.state.Users[`${this.state.activeUser}`].movieInfo)
     
     
             })
    
    
    })
    }






    onClick = (e) => {
      console.log(this.state.searchInput, 'input')

      console.log('onClick state', this.props.match.params.search)
      this.props.history.push(`/search/${this.state.searchInput}`);
      this.setState({
          searchInput: this.state.searchInput
      },() => console.log('onClick statesss', this.state))

      axiosFirstCall(this.state.searchInput, '').then((res) => {
          console.log(res)

          const resultsArr = [];
          res.data.items.map((e, i) => {
              const { id, snippet } = e;
              const { videoId } = id;
              const { publishedAt, channelTitle, channelId, description, thumbnails, title } = snippet;
              const { high } = thumbnails;
              const { url } = high;
              const resultsInfo = { id, snippet, videoId, publishedAt, channelTitle, channelId, description, thumbnails, title, high, url }
              // const published = Moment(`${publishedAt}`, "YYYYMMDD").fromNow();

              return resultsArr.push(resultsInfo);
          });
          console.log('done')

          return resultsArr;
      })
      .then(
          (results) => {
              console.log('urlcheck',this.state)
              this.setState({
                  prevSearch: (this.state.prevSearch || []).concat(this.state.results),

                  currentResults: results,
              // }, () => console.log(this.state, 'my state'))
              })
          })
      .catch((err) => console.log(err));


      const pam = { lol: 'rupa', dog: 'dan', cat: 'yun' };
      this.setState({ test: 'pam' });
      localStorage.setItem('test', JSON.stringify(pam));
  }



  
  
  componentDidMount(){
    // console.logI
    console.log('hello')
    const newArr = []
    const newObj = {}
    const addUserData = {...this.state}
    const active = getActiveUser()
    const stateFeed = {...this.state.Users}
    
    
    
    const feedlist = getFeed(active);
    stateFeed.Pam.feedlist = feedlist;

    this.setState({Users: stateFeed})
    
    
    
    // const query = this.state.Users[this.state.activeUser].feedlist
    // const feedlist = getFeed(active)
    // stateFeed = 

    // this.setState({
    //     Users : acti})
    // feedlist.map(elem=>{
    //   return this.call(elem)
    
    
    // })
    //const query
    // console.log(query)
    

    // query.map(elem=>{
    // })
  
  
  
   }
  
  
  
  
  
 vidPage=(id)=>{
    console.log(id)
    console.log(this.props)
    this.props.history.push(`video/${id}`)
    


 }

 loadmore=(feedTitle)=>{
    console.log('searching')
    const newArr = []
    const newObj = {}
    const query = feedTitle
    const addUserData = {...this.state}
    const nextPageToken = addUserData.Users[`${this.state.activeUser}`].movieInfo[query][addUserData.Users[`${this.state.activeUser}`].movieInfo[query].length-1].nextPageToken
    console.log('get',feedTitle)
    this.call(query, nextPageToken)


 }

  render(){
    console.log('these', this.props)
  return (
      <>
     <div className='pageWindow'>
                <Homelayout2 active={this.state.Users[`${this.state.activeUser}`].movieInfo} feedList={this.state.Users[`${this.state.activeUser}`].feedlist} vidsPage={this.vidPage} loadmore={this.loadmore}/>
           </div>   
  
            
      </>
  )
  
  
  
  }
  
  
}
export default Home;