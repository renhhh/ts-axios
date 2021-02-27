import axios, { AxiosTransformer } from '../../src'
import qs from 'qs'

const instance = axios.create({
  transformRequest: [
    function(data) {
      // return data
      return qs.stringify(data)
    },
    ...(axios.defaults.transformRequest as AxiosTransformer[])
  ],
  transformReponse: [
    ...(axios.defaults.transformReponse as AxiosTransformer[]),
    function(data) {
      if (typeof data === 'object') {
        data.b = 2
      }

      return data
    }
  ]
})

instance({
  url: '/config/post',
  method: 'post',
  data: {
    a: 1
  }
}).then( res => {
  console.log(res.data);
})
// axios({
//   transformRequest: [
//     function(data) {

//       // return data
//       return qs.stringify(data)
//     },
//     ...(axios.defaults.transformRequest as AxiosTransformer[])
//   ],
//   transformReponse: [
//     ...(axios.defaults.transformReponse as AxiosTransformer[]),
//     function(data) {
//       if (typeof data === 'object') {
//         data.b = 2
//       }
//       console.log(data);
//       return data
//     }
//   ],
//   url: '/config/post',
//   method: 'post',
//   data: {
//     a: 1
//   }
// })

// axios.defaults.headers.common['test2'] = 123

// axios({
//   url: '/config/post',
//   method: 'post',
//   data: qs.stringify({
//     a:1
//   }),
//   headers: {
//     test: '321',
//     common:{
//       test2: 44
//     }
//   }
// }).then( res => {
//   console.log(res.data)
// })
