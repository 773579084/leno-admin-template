import { useState } from 'react';
import SvgIcon from '@/components/SvgIcon';
import { ILogin } from '@/type';
import classes from './index.module.scss';
import LoginForm from './component/LoginForm';
import RegisterForm from './component/RegisterForm';

const Login = () => {
  // 控制 login 与 register 切换
  const [isLogin, setIsLogin] = useState(true);
  const [login, setLogin] = useState({
    userName: 'admin',
    password: '123456',
  } as ILogin);
  const [registerList, setRegisterList] = useState({
    userName: '',
    password: '',
    password2: '',
  } as ILogin);

  const changeIsLogin = (data: ILogin, isStatus: string) => {
    switch (isStatus) {
      case 'reg':
        setRegisterList({ ...data });
        break;
      case 'regErr':
        setRegisterList({ ...data });
        return;
      case 'regOk':
        setLogin({ ...data });
        return;
      default:
        break;
    }
    setIsLogin(!isLogin);
  };

  return (
    <div className={classes['login-container']}>
      <SvgIcon iconClass="login_bg" svgClass={classes['svg-bg']}></SvgIcon>
      <div className={classes['login-sencond-box']}>
        <div className={classes['left-img']}>
          <div className={classes['react-logo']}></div>
          <h1 className={classes['project-name']}>Leno-Admin</h1>
        </div>
        {/* login && Register */}
        <div className={classes['login-box']}>
          {isLogin ? <LoginForm toggleLogin={isLogin} changeIsLogin={changeIsLogin} loginData={login} /> : <RegisterForm changeIsLogin={changeIsLogin} registerList={registerList} />}
        </div>

        <div className={classes.copyright}>Copyright © 2023-current zhaowenchao.top All Rights Reserved</div>
      </div>
    </div>
  );
};

export default Login;
