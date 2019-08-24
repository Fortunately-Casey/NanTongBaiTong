import axios from 'axios';

// 获取initCode和用户信息
export function GetInitCode(params) {
  console.log('111')
  const url = ""
  return axios.get(url,{
    params:params
  }).then((res) => {
    return Promise.resolve(res)
  }).catch((err) => {
    console.log(err)
  })
}