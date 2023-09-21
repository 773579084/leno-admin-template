import { BrowserRouter, HashRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import App from '@/App';
import '@/assets/icons';
import ReactDOM from 'react-dom';
// 配置 ant-design 中文版
import zhCN from 'antd/lib/locale/zh_CN';
import '@/assets/style/index.scss';
import '@/mock';

const root = document.getElementById('root');

if (root) {
  ReactDOM.render(
    <HashRouter>
      <ConfigProvider locale={zhCN}>
        <App />
      </ConfigProvider>
    </HashRouter>,
    root,
  );
}
