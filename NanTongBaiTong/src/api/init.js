import axios from 'axios';

// 获取initCode和用户信息
export function GetInitCode(params) {
  const url = "/api/baitongwebapi/rest/getInitCode"
  return axios.get(url,{
    params:params
  }).then((res) => {
    return Promise.resolve(res)
  }).catch((err) => {
    console.log(err)
  })
}

// 获取authCode
export function GetAuthCode(params) {
  const url = "/api/baitongwebapi/rest/getAuthCode"
  return axios.post(url,{
    params:params
  }).then((res) => {
    return Promise.resolve(res)
  }).catch((err) => {
    console.log(err)
  })
}