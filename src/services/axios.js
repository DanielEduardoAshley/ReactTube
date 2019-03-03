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
        key:'AIzaSyCcZMHijbdSvcuTHdRGKWrwsN3j1t0-hoE',
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
          key: 'AIzaSyC55OjTm-LHRPginNybpzjCClbJELrIeYo',
          id: id,
        }
      })

}

export { axiosFirstCall, axiosSecondCall };