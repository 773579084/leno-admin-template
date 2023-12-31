import { Button, Card, Col, Collapse, Divider, Row } from 'antd';
import { GithubOutlined, GoogleOutlined, UserOutlined, SendOutlined } from '@ant-design/icons';
import classes from './index.module.scss';

const { Panel } = Collapse;

const Home = () => (
  <div className="app-container">
    <Row gutter={30}>
      <Col span={12}>
        <h1>leno-admin-template 后台基础框架</h1>
        <p style={{ color: '#696c6e' }}>
          leno-admin-template脱胎于
          <a href="https://gitee.com/zhao-wenchao110/leno_-admin" target="_blank">
            leno-admin前后端分离框架
          </a>
          ；基于react+ts+antd+webpack5开发的后台基础框架，拥有完善的路由配置、舒适的过渡效果、丰富多彩的可变主题、另外还配置了面包屑与tabs
          ；秉承着开源精神，leno-admin-template代码将完全开源，你可以在此基础上开发你的任何项目。
        </p>
        <p>
          <b>当前版本:</b> <span> v1.0.0</span>
        </p>
        <div>
          <Row gutter={[8, 16]}>
            <Col>
              <Button
                type="primary"
                ghost
                icon={<GoogleOutlined />}
                onClick={() => {
                  window.open('https://gitee.com/zhao-wenchao110/leno-admin-template');
                }}
              >
                Gitee
              </Button>
            </Col>
            <Col>
              <Button
                type="primary"
                ghost
                icon={<GithubOutlined />}
                onClick={() => {
                  window.open('https://github.com/773579084/-Leno_Admin_Template');
                }}
              >
                GitHub
              </Button>
            </Col>
          </Row>
        </div>
        <p style={{ marginTop: 15 }}>如果觉得不错，欢迎给一个⭐Star⭐,你的支持就是我继续免费更新下去的动力，谢谢~</p>
      </Col>
      <Col span={12}>
        <Row>
          <Col>
            <h1>技术选项</h1>
          </Col>
        </Row>
        <Row>
          <Col span={6}>
            <ul>
              <li>React Hooks</li>
              <li>mobx</li>
              <li>webpacke5</li>
              <li>typescript</li>
              <li>antd</li>
              <li>axios</li>
              <li>...</li>
            </ul>
          </Col>
        </Row>
      </Col>
    </Row>
    <Divider />

    <Row gutter={[30, 16]} className={classes.home}>
      <Col span={8}>
        <Card title="联系信息">
          <div>
            <SendOutlined /> leno-admin文档：
            <a href="http://zhao-wenchao110.gitee.io/lenoadmin-docs" target="_blank">
              http://zhao-wenchao110.gitee.io/lenoadmin-docs
            </a>
          </div>
          <div>
            <UserOutlined /> QQ群：913365274
          </div>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="更新日志">
          <Collapse accordion bordered={false} ghost>
            <Panel header="v1.0.0 2023-09-21" key="1">
              <p>1、leno-admin-template 后台基础框架正式发布</p>
            </Panel>
          </Collapse>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="其他模块"></Card>
      </Col>
    </Row>
  </div>
);
export default Home;
