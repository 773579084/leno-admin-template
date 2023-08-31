import { http } from '@/api'
import {
  ILoginApi,
  IRegisterApi,
  ILogin,
  IGetUserInfoAPI,
  IsucceeMes,
  getRouterApiType,
} from '@/type'

// 登录
export const loginAPI = (data: ILogin) => {
  return http<ILoginApi>('POST', '/user/login', data)
}

// 注册
export const registerAPI = (data: ILogin) => {
  return http<IRegisterApi>('POST', '/user/register', data)
}

// 退出登录
export const logoutAPI = () => {
  return http<IsucceeMes>('DELETE', '/user/logout')
}

// 获取路由
export const getRoutersAPI = () => {
  return http<getRouterApiType>('GET', '/user/menu/getRouters')
}

// 获取用户信息(包含权限)
export const getUserAPI = () => {
  return http<IGetUserInfoAPI>('GET', '/user/getInfo')
}
