import { http } from '../index'
import { ILoginApi } from '@/type'

// 登录
export const loginAPI = (data: { username: string; password: string }) => {
  return http<ILoginApi>('POST', '/login', data)
}

// 获取用户信息
export const getUserAPI = () => {
  return http('GET', '/userInfo')
}
