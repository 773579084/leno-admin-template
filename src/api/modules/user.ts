import { http } from '@/api';
import { ILoginApi, IRegisterApi, ILogin, IGetUserInfoAPI, IsucceeMes } from '@/type';

// 登录
export const loginAPI = (data: ILogin) => http<ILoginApi>('POST', '/user/login', data);

// 注册
export const registerAPI = (data: ILogin) => http<IRegisterApi>('POST', '/user/register', data);

// 退出登录
export const logoutAPI = () => http<IsucceeMes>('DELETE', '/user/logout');

// 获取用户信息(包含权限)
export const getUserAPI = () => http<IGetUserInfoAPI>('GET', '/user/getInfo');
