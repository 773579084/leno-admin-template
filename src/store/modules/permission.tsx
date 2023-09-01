import { makeAutoObservable } from 'mobx'
import { RouteType } from '@/type'
export default class useRoutersStore {
  dynamicRouters = [] as RouteType[] // 路由表数据
  directoryList = [] as string[] // 路由表目录路径

  constructor() {
    // 响应式处理
    makeAutoObservable(this)
  }

  // 路由表目录路径
  routerDirectory = (routers: RouteType[]) => {
    const list = [] as string[]
    const keeps = [] as string[]
    function handleRouter(routers: RouteType[], beforePath = '') {
      routers.forEach((router) => {
        if (router.children) {
          list.push((beforePath + router.path) as string)
          handleRouter(router.children, (router.path + '/') as string)
        } else {
          if (router.meta?.noCache) {
            keeps.push(beforePath + router.path)
          }
        }
      })
    }
    handleRouter(routers)

    this.directoryList = list
  }
}
