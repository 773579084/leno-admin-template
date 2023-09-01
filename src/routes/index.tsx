import { lazy } from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import { HOME_URL } from '@/config/config'
import { RouteType } from '@/type'
import lazyLoad from '@/routes/utils/lazyLoad'

/* 主干路由页面 */
import Login from '@/views/login'
import Page404 from '@/views/errMessage/404'
import Page500 from '@/views/errMessage/500'
import Layout from '@/Layout'

/**
 * leno-admin 的路由配置项
 *
 * path:'路径'            // 路径，如果不是多级嵌套，可为 ' '
 * hidden:true           // 设置为true时不会出现在侧边栏
 * name:'router-name'     // 设定路由名，此项必填 (也是唯一标志名)
 * element:<login />     // 组件
 * perms: "profile:list"     // 权限字符
 * alwaysShow::true       // 设置该属性为true后，侧边栏就会出现多级嵌套，否则不会出现
 * meta:{
 *   title:'title'        // 设置该路由在侧边栏和面包屑的name
 *   link:'http'          // 外链地址
 *   noCache:false       // 是否缓存 true 缓存 false不缓存
 *   icon:'svg-name'      // 设置该路由的图标，对应路径 src/assets/icons/svg
 * }
 */
export const dynamicRouters = [
  {
    name: 'home',
    path: '/home',
    alwaysShow: false,
    element: lazyLoad(lazy(() => import(`@/views/home`))),
    hidden: false,
    query: '',
    perms: 'home:list',
    meta: {
      title: '首页',
      link: null,
      noCache: false,
      icon: 'shouye',
    },
  },
  {
    name: 'test',
    path: '/test',
    alwaysShow: true,
    hidden: false,
    children: [
      {
        name: 'test1',
        path: 'test1',
        query: null,
        alwaysShow: false,
        element: '/test/test1',
        hidden: false,
        meta: {
          title: '测试1',
          link: null,
          noCache: true,
          icon: 'online',
        },
      },
      {
        name: 'test2',
        path: 'test2',
        query: null,
        alwaysShow: false,
        element: '/test/test2',
        hidden: false,
        meta: {
          title: '测试2',
          link: null,
          noCache: true,
          icon: 'job',
        },
      },
    ],
    query: null,
    perms: null,
    meta: {
      title: '测试',
      link: null,
      noCache: true,
      icon: 'monitor',
    },
  },
] as RouteType[]

export const rootRouter = [
  // 所有的动态路由都将渲染到该主菜单上
  {
    element: <Layout />,
    children: dynamicRouters,
  },
  {
    path: '/login',
    element: <Login />,
    meta: {
      title: '登录页',
    },
  },
  {
    path: '/404',
    element: <Page404 />,
    meta: {
      title: '404页面',
    },
  },
  {
    path: '/500',
    element: <Page500 />,
    meta: {
      title: '500页面',
    },
  },
  {
    path: '/',
    element: <Navigate to={HOME_URL} />,
  },
  {
    path: '*',
    element: <Navigate to="/404" />,
    hidden: true,
  },
]

export const Router = () => {
  const routes = useRoutes(rootRouter)
  return routes
}
