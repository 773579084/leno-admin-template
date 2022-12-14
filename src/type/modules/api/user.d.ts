// 登录form
export interface ILogin {
  username: string
  password: string
}

// 登录成功后返回值
export interface IuserInfo {
  name: string
  age: number
}

//#region  login 接口返回值
export interface ILoginApi {
  status: number
  token?: string
  message?: string
}
//#endregion
