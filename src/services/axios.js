import react from 'react'
import axios from 'axios'

 
 
 
 const axiosFirstCall=(query, nextPageToken)=>{
   return axios({
      method: 'get',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        part: 'snippet',
        maxResults: 8,
        videoDefinition: 'high',
        type: 'video',
        videoEmbeddable: 'true',

        // key: 'AIzaSyDk4Baz4ZsCIIY-zwzjEgOATbmVwjZVVpc',
        key:'AIzaSyDsnv_b4Flda9bZwiymg5SrOldp0DpO8ek', // PAM'S KEY
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