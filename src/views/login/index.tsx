import React from 'react'
import classes from './index.module.scss'
console.log(3, classes)

/* 组件 */
import LoginForm from './component/LoginForm'
import SvgIcon from '@/components/SvgIcon'
// {classes[]}
//
const Login = () => {
  return (
    <div className={classes['login-container']}>
      <SvgIcon iconClass="login_bg" svgClass={classes['svg-bg']}></SvgIcon>
      <div className={classes['login-sencond-box']}>
        <div className={classes['left-img']}>
          <div className={classes['react-logo']}></div>
          <h1 className={classes['project-name']}>Leno-Admin</h1>
        </div>
        {/* login */}
        <div className={classes['login-box']}>
          <LoginForm />
        </div>
      </div>
    </div>
  )
}

export default Login
