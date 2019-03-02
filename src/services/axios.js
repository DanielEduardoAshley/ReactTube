import react from 'react'
import axios from 'axios'

 
 
 
 const axiosFirstCall=(query, nextPageToken='')=>{
   return axios({
      method: 'get',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        part: 'snippet',
        maxResults: 8,
        videoDefinition: 'high',
        type: 'video',
        videoEmbeddable: 'true',

        // key:'AIzaSyAp4QI_v1IXVKwmBfnij-X69jnKQkUv-GE',
        // key:"AIzaSyC55OjTm-LHRPginNybpzjCClbJELrIeYo",
        // key: 'AIzaSyDk4Baz4ZsCIIY-zwzjEgOATbmVwjZVVpc',
        // key:'AIzaSyDRq-1-Gog-yzzF5buaQRPHv3IysLOZWNI',
        // key: 'AIzaSyAWWomrb5NRZn7oTqjszqm6f2uYqW39cvc',
        // key: 'AIzaSyAq6KMp_lshvjdlu044KvIgax3VAMa023g',
        // key: 'AIzaSyCcZMHijbdSvcuTHdRGKWrwsN3j1t0-hoE',
        q: `${query}`,
        pageToken: `${nextPageToken}`
      }
    })
    

  } 






const axiosSecondCall=(id)=>{
      return axios({
        method: 'get',
        url: 'https://www.googleapis.com/youtube/v3/videos',
        params: {
          part: 'id,snippet,statistics',
          key: 'AIzaSyDk4Baz4ZsCIIY-zwzjEgOATbmVwjZVVpc',
          id: id,
        }
      })

  
}



export { axiosFirstCall , axiosSecondCall };