/* eslint-disable no-undef */
export interface userType {
  userId?: number;
  deptId?: number;
  userName?: string;
  nickName?: string;
  userType?: string;
  email?: string;
  phonenumber?: number;
  sex?: string;
  avatar?: string;
  password?: string;
  status?: string;
  delFlag?: string;
  loginIp?: string;
  loginDate?: string | number;
  createBy?: string;
  updateBy?: string;
  remark?: string;
  iat?: string;
  exp?: string;
  createdAt?: string | null;
  updatedAt?: string | null;
  dept?: any;
  roles?: any[];
  postIds?: number[];
  roleIds?: number[];
}
// 登录form
export interface ILogin {
  userName?: string;
  password?: string;
  password2?: string;
  code?: string;
  uuid?: string;
}

// propstype
export interface userPropsType {
  toggleLogin?: boolean;
  changeIsLogin?: any;
}

// userInfo
export interface IChangePwd {
  confirmPwd?: string;
  newPwd?: string;
  oldPwd?: string;
}

export interface ILoginResult {
  token?: string;
  refreshToken?: string;
}
export interface ILoginApi {
  code: number;
  message: string;
  result: ILoginResult;
}

export interface registerResult {
  userId: number;
  userName: string;
}
export interface IRegisterApi {
  code: number;
  message: string;
  result: registerResult;
}

export interface IProfileAvatar {
  code: number;
  message: string;
  result: { avatarImg: string };
}

// 成功消息提醒
export interface IsucceeMes {
  code: number;
  message: string;
  result?: null;
}

// 返回的个人信息
export interface IuserInfo {
  userId?: number;
  deptId?: number;
  userName?: string;
  nickName?: string;
  userType?: boolean | number;
  email?: string;
  phonenumber?: number;
  sex?: boolean | number;
  avatar?: string;
  status?: boolean | number;
  delFlag?: boolean | number;
  loginIp?: string;
  loginDate?: string | number;
  createBy?: string;
  updateBy?: string;
  remark?: string;
  iat?: string;
  exp?: string;
  createdAt?: string;
}

export interface IgetInfoType {
  userInfo: userType;
  roles: string[];
  permissions: string[];
}
export interface IGetUserInfoAPI {
  code: number;
  message: string;
  result: IgetInfoType;
}

export interface RouteType {
  query?: string | undefined;
  name?: string;
  path?: string;
  perms?: string;
  children?: RouteType[];
  hidden?: boolean;
  element: string | JSX.Element | React.ReactNode;
  alwaysShow?: boolean;
  meta?: Meta;
}
