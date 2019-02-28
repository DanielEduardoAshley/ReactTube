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
        key:'AIzaSyDRq-1-Gog-yzzF5buaQRPHv3IysLOZWNI',
        q: `${query}`,
        pageToken: `${nextPageToken}`
      }
    })
    

  } 






// const getMoreVidInfo=()=>{
//     const arr = []
//     console.log(this.state.videoArray)
//      this.state.videoArray.map((e)=>{
//       return axios({
//         method: 'get',
//         url: 'https://www.googleapis.com/youtube/v3/videos',
//         params: {
//           part: 'id,snippet,statistics',
//           key: 'AIzaSyDk4Baz4ZsCIIY-zwzjEgOATbmVwjZVVpc',
//           id: e,
//         }
//       })

//   })
// }

export default axiosFirstCall;