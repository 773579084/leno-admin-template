import { Layout } from 'antd'
const { Content } = Layout
import { Outlet } from 'react-router-dom'
import classes from './index.module.scss'
import ContentLoading from '@/components/ContentLoading'
import { useLocation } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import useStore from '@/store'
import { useEffect } from 'react'
import { toJS } from 'mobx'

const ContentCom = () => {
  const { pathname } = useLocation()
  const {
    useLayoutStore: { layoutSet },
  } = useStore()

  return (
    <Content
      id="content"
      className={classes['site-layout-background']}
      style={layoutSet.fixedHeader ? { overflow: 'auto' } : {}}
      key={pathname}
    >
      <Outlet />

      {/* 内容展示区的laoding */}
      <ContentLoading />
    </Content>
  )
}
export default observer(ContentCom)
