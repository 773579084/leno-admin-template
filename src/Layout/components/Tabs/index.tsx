import { message, Tabs } from 'antd';
import React, { useEffect } from 'react';
import { HomeOutlined, CloseOutlined } from '@ant-design/icons';
import { HOME_URL } from '@/config/config';
import { useNavigate, useLocation } from 'react-router-dom';
import { tbasType, tbasKeyType, RouteType } from '@/type';
// mobx
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';
import useStore from '@/store';
import { dynamicRouters } from '@/routes';
import DelTabs from './components/DelTabs';
import classes from './index.module.scss';

const TabsCom = () => {
  const {
    useLayoutStore: { defaultObjMobx, changeTabsListMobx, layoutSet },
  } = useStore();
  // 删除路由缓存

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const tabsArr = toJS(defaultObjMobx.tabsListMobx) as tbasType[];

  const addTabsArr = () => {
    // 找出当前面包屑路由
    let currentPath = pathname.split('/')[pathname.split('/').length - 1];
    let route = {} as RouteType;

    const findCurrentRoute = (routes: RouteType[]) => {
      routes.forEach((_route: RouteType) => {
        if (_route.children instanceof Array) {
          findCurrentRoute(_route.children);
        } else if (_route.path?.indexOf('/:') !== -1) {
          if (pathname.indexOf(_route.path?.split('/:')[0] as string) !== -1) {
            currentPath = pathname.split('/')[pathname.split('/').length - 2];
            route = _route;
          }
        } else if (pathname.indexOf(_route.path) !== -1 || (pathname === '/' && _route.path === HOME_URL)) {
          route = _route;
        }
      });
    };
    findCurrentRoute(toJS(dynamicRouters));
    // 判断当前的pathname 在 tabsArr里面有没有
    let isSetTab = false;
    try {
      tabsArr.forEach((tab) => {
        if (tab.path === pathname) {
          isSetTab = true;
        }
      });
    } catch (error) {}

    if (!isSetTab) {
      const routePath = route.path?.split('/') as string[];

      if (routePath && !routePath[0]) {
        // eslint-disable-next-line prefer-destructuring
        routePath[0] = routePath[1];
      }

      routePath && routePath[0] === currentPath && changeTabsListMobx([...tabsArr, { path: pathname, title: route.meta?.title as string }]);
    }
  };
  // #endregion

  // #region  add tabsArr
  useEffect(() => {
    addTabsArr();
  }, [pathname]);

  const navigateFn = (path: string) => {
    // 此处默认返回子元素的key
    navigate(path);
  };

  // del tab
  const delTabFn = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>, path: string, delTabType?: string) => {
    // 如果未首页，提示不可删除
    e.stopPropagation();
    let newTabs: tbasType[] = [];
    if (delTabType === 'all') {
      newTabs = tabsArr.filter((item) => item.path === HOME_URL);
      navigate(HOME_URL);
    }
    if (delTabType === 'otherAll') {
      newTabs = tabsArr.filter((item) => item.path === path || item.path === HOME_URL);
    }
    if (!delTabType) {
      if (path === HOME_URL) return message.warning('首页不可删除！');
      const currentIndex = tabsArr.findIndex((item) => item.path === path);
      newTabs = tabsArr.filter((item) => item.path !== path);
      if (path === pathname) navigate(tabsArr[currentIndex - 1].path as string);
    }
    changeTabsListMobx(newTabs);
  };

  // 渲染 标签页
  const items = () => {
    const tabs = [] as tbasKeyType[];
    tabsArr.forEach((item) => {
      tabs.push({
        label: (
          <span>
            {item.path === HOME_URL ? <HomeOutlined /> : ''}
            {item.title}
            {item.path !== HOME_URL ? <CloseOutlined className={classes['del-icon']} onClick={(e) => delTabFn(e, item.path as string)} /> : null}
          </span>
        ),
        key: item.path,
      });
    });
    return tabs;
  };

  return (
    <div hidden={!layoutSet.tagsView} className={classes['layout-tabs']}>
      <div className={classes['layout-tabs-page']}>
        <Tabs type="card" activeKey={pathname} onChange={navigateFn} items={items()}></Tabs>
      </div>
      <DelTabs delTabFn={delTabFn} />
    </div>
  );
};

export default observer(TabsCom);
