import { Layout } from 'antd';
import { Outlet, useLocation } from 'react-router-dom';
import ContentLoading from '@/components/ContentLoading';
import { observer } from 'mobx-react-lite';
import useStore from '@/store';
import classes from './index.module.scss';

const { Content } = Layout;

const ContentCom = () => {
  const { pathname } = useLocation();
  const {
    useLayoutStore: { layoutSet },
  } = useStore();

  return (
    <Content id="content" className={classes['site-layout-background']} style={layoutSet.fixedHeader ? { overflow: 'auto' } : {}} key={pathname}>
      <Outlet />

      {/* 内容展示区的laoding */}
      <ContentLoading />
    </Content>
  );
};
export default observer(ContentCom);
