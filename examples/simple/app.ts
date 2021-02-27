/*
 * @Author: renhhh
 * @Date: 2021-02-23 17:10:03
 * @Description:
 */
import axios from '../../src/index'

axios({
  method: 'get',
  url: '/simple/get',
  params: {
    a: 1,
    b: 2
  }
})
