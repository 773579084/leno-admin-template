import Mock from 'mockjs';

// 登录
Mock.mock('/mock-api/user/login', 'post', {
  code: 200,
  message: '用户登录成功',
  success: true,
  result: {
    token:
      // eslint-disable-next-line max-len
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJOYW1lIjoiYWRtaW4iLCJzZXNzaW9uIjoibXNkanFvbTJudWpuc2VhdjB2cDFzMmhlbmh5MTl0IiwiZXhwIjo0ODQ5MjEyMjg4NjM2LCJpYXQiOjE2OTM1Mzg2ODh9.LBujNzKhAYCxR8eKV7ZhulMa1q4hZ5yd6sdQtuDYsDY',
  },
});

// 注册
Mock.mock('/mock-api/user/register', 'post', {
  code: 200,
  message: '注册成功',
  success: true,
  result: {
    userId: 56,
    userName: 'admin1',
  },
});

// 退出登录
Mock.mock('/mock-api/user/logout', 'delete', {
  code: 200,
  message: '退出账号成功',
  success: true,
});

// 获取用户信息(包含权限)
Mock.mock('/mock-api/user/getInfo', 'get', {
  code: 200,
  message: '获取用户个人信息成功',
  success: true,
  result: {
    userInfo: {
      email: '13313371335@163.com',
      phonenumber: '13313371335',
      sex: '0',
      avatar: '',
      status: '0',
      remark: '',
      dept: {
        ancestors: "'0,1'",
        leader: 'wen',
        phone: '158888888822',
        email: '15013371705@163.com',
        status: '0',
        deptId: 2,
        parentId: 1,
        deptName: '深圳总公司',
        orderNum: 1,
        delFlag: '0',
        createBy: 'admin',
        updateBy: 'admin',
        createdAt: '2023-03-01T09:04:11.000Z',
        updatedAt: '2023-07-08T01:05:53.000Z',
      },
      roles: [
        {
          status: '0',
          remark: null,
          roleId: 1,
          roleName: '超级管理员',
          roleKey: 'admin',
          roleSort: 0,
          dataScope: '1',
          delFlag: '0',
          createBy: 'admin',
          updateBy: null,
          createdAt: '2023-05-26T03:40:15.000Z',
          updatedAt: '2023-05-26T03:40:15.000Z',
        },
      ],
      userId: 1,
      deptId: 2,
      userName: 'admin',
      nickName: '超级管理员账号',
      userType: '0',
      delFlag: 0,
      loginIp: '',
      loginDate: '00:00:00',
      createBy: '',
      updateBy: 'admin',
      createdAt: '2023-02-28T07:07:40.000Z',
      updatedAt: '2023-08-25T07:52:16.000Z',
    },
    roles: ['admin'],
    permissions: ['*:*:*'],
  },
});
