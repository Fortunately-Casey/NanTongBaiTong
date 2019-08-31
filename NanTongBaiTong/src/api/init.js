import axios from 'axios';

// 获取initCode和用户信息
export function GetInitCode(params) {
  const url = "/api/baitongwebapi/rest/getInitCode"
  return axios.get(url, {
    params: params
  }).then((res) => {
    return Promise.resolve(res)
  }).catch((err) => {
    console.log(err)
  })
}

// 获取用户信息
export function GetUserInfo(params) {
  const url = "/api/baitongwebapi/rest/getUserInfo"
  return axios.post(url, params).then((res) => {
    return Promise.resolve(res)
  }).catch((err) => {
    console.log(err)
  })
}

// 图文提交
export function TextAndImage(params) {
  const url = "/api/baitongwebapi/rest/upload"
  return axios.post(url, params, {
    headers: {
      'Content-Type': 'false'
    }
  }).then((res) => {
    return Promise.resolve(res)
  }).catch((err) => {
    console.log(err)
  })
}
