const local: App.I18n.Schema = {
  system: {
    title: 'Quest Api',
    updateTitle: '系统版本更新通知',
    updateContent: '检测到系统有新版本发布，是否立即刷新页面？',
    updateConfirm: '立即刷新',
    updateCancel: '稍后再说'
  },
  common: {
    action: '操作',
    add: '新增',
    addSuccess: '添加成功',
    backToHome: '返回首页',
    batchDelete: '批量删除',
    cancel: '取消',
    close: '关闭',
    check: '勾选',
    expandColumn: '展开列',
    columnSetting: '列设置',
    config: '配置',
    confirm: '确认',
    delete: '删除',
    deleteSuccess: '删除成功',
    confirmDelete: '确认删除吗？',
    edit: '编辑',
    warning: '警告',
    error: '错误',
    index: '序号',
    keywordSearch: '请输入关键词搜索',
    logout: '退出登录',
    logoutConfirm: '确认退出登录吗？',
    lookForward: '敬请期待',
    modify: '修改',
    modifySuccess: '修改成功',
    noData: '无数据',
    operate: '操作',
    pleaseCheckValue: '请检查输入的值是否合法',
    refresh: '刷新',
    reset: '重置',
    search: '搜索',
    switch: '切换',
    tip: '提示',
    trigger: '触发',
    update: '更新',
    updateSuccess: '更新成功',
    userCenter: '个人中心',
    yesOrNo: {
      yes: '是',
      no: '否'
    }
  },
  request: {
    logout: '请求失败后登出用户',
    logoutMsg: '用户状态失效，请重新登录',
    logoutWithModal: '请求失败后弹出模态框再登出用户',
    logoutWithModalMsg: '用户状态失效，请重新登录',
    refreshToken: '请求的token已过期，刷新token',
    tokenExpired: 'token已过期'
  },
  theme: {
    themeSchema: {
      title: '主题模式',
      light: '亮色模式',
      dark: '暗黑模式',
      auto: '跟随系统'
    },
    grayscale: '灰度模式',
    layoutMode: {
      title: '布局模式',
      vertical: '左侧菜单模式',
      'vertical-mix': '左侧菜单混合模式',
      horizontal: '顶部菜单模式',
      'horizontal-mix': '顶部菜单混合模式',
      reverseHorizontalMix: '一级菜单与子级菜单位置反转'
    },
    recommendColor: '应用推荐算法的颜色',
    recommendColorDesc: '推荐颜色的算法参照',
    themeColor: {
      title: '主题颜色',
      primary: '主色',
      info: '信息色',
      success: '成功色',
      warning: '警告色',
      error: '错误色',
      followPrimary: '跟随主色'
    },
    scrollMode: {
      title: '滚动模式',
      wrapper: '外层滚动',
      content: '主体滚动'
    },
    page: {
      animate: '页面切换动画',
      mode: {
        title: '页面切换动画类型',
        'fade-slide': '滑动',
        fade: '淡入淡出',
        'fade-bottom': '底部消退',
        'fade-scale': '缩放消退',
        'zoom-fade': '渐变',
        'zoom-out': '闪现',
        none: '无'
      }
    },
    fixedHeaderAndTab: '固定头部和标签栏',
    header: {
      height: '头部高度',
      breadcrumb: {
        visible: '显示面包屑',
        showIcon: '显示面包屑图标'
      }
    },
    tab: {
      visible: '显示标签栏',
      cache: '缓存标签页',
      height: '标签栏高度',
      mode: {
        title: '标签栏风格',
        chrome: '谷歌风格',
        button: '按钮风格'
      }
    },
    sider: {
      inverted: '深色侧边栏',
      width: '侧边栏宽度',
      collapsedWidth: '侧边栏折叠宽度',
      mixWidth: '混合布局侧边栏宽度',
      mixCollapsedWidth: '混合布局侧边栏折叠宽度',
      mixChildMenuWidth: '混合布局子菜单宽度'
    },
    footer: {
      visible: '显示底部',
      fixed: '固定底部',
      height: '底部高度',
      right: '底部局右'
    },
    themeDrawerTitle: '主题配置',
    pageFunTitle: '页面功能',
    configOperation: {
      copyConfig: '复制配置',
      copySuccessMsg: '复制成功，请替换 src/theme/settings.ts 中的变量 themeSettings',
      resetConfig: '重置配置',
      resetSuccessMsg: '重置成功'
    }
  },
  route: {
    login: '登录',
    403: '无权限',
    404: '页面不存在',
    500: '服务器错误',
    'iframe-page': '外链页面',
    home: '首页',
    manage: '系统管理',
    log: '模型日志',
    manage_user: '用户管理',
    manage_channel: '渠道管理',
    manage_token: '令牌管理',
    setting: '系统设置',
    setting_other: '其他设置',
    setting_code: '兑换小码',
    tariffs: '资费介绍',
    about: '关于',
    topup: '钱包资产'
    // document: '帮助文档',
    // document_api: '接口文档'
  },
  page: {
    login: {
      common: {
        loginOrRegister: '登录 / 注册',
        userNamePlaceholder: '请输入用户名',
        phonePlaceholder: '请输入手机号',
        emailPlaceholder: '请输入邮箱',
        codePlaceholder: '请输入验证码',
        passwordPlaceholder: '请输入密码',
        confirmPasswordPlaceholder: '请再次输入密码',
        codeLogin: '验证码登录',
        confirm: '确定',
        back: '返回',
        validateSuccess: '验证成功',
        loginSuccess: '登录成功',
        welcomeBack: '欢迎回来，{userName} ！'
      },
      pwdLogin: {
        title: '密码登录',
        rememberMe: '记住我',
        forgetPassword: '忘记密码？',
        register: '注册账号',
        otherAccountLogin: '其他账号登录',
        otherLoginMode: '其他登录方式',
        superAdmin: '超级管理员',
        admin: '管理员',
        user: '普通用户'
      },
      codeLogin: {
        title: '验证码登录',
        getCode: '获取验证码',
        reGetCode: '{time}秒后重新获取',
        sendCodeSuccess: '验证码发送成功',
        imageCodePlaceholder: '请输入图片验证码'
      },
      register: {
        title: '注册账号',
        agreement: '我已经仔细阅读并接受',
        protocol: '《用户协议》',
        policy: '《隐私权政策》'
      },
      resetPwd: {
        title: '重置密码'
      },
      bindWeChat: {
        title: '绑定微信'
      }
    },
    home: {
      branchDesc:
        '为了方便大家开发和更新合并，我们对main分支的代码进行了精简，只保留了首页菜单，其余内容已移至example分支进行维护。预览地址显示的内容即为example分支的内容。',
      greeting: '您好，{userName}, 今天又是充满活力的一天!',
      weatherDesc: '今日多云转晴，20℃ - 25℃!',
      tokenApi: 'API地址: {url}',
      tokenKey: '令牌: {key}',
      projectCount: '项目数',
      indefiniteReference: '令牌: sk-xxxxxxxkvj6KCQ58m7vLXTqB6aTnwUbwFCAjQolmqCRRr',
      todo: '待办',
      message: '消息',
      registerCount: '注册量',
      schedule: '作息安排',
      study: '学习',
      work: '工作',
      rest: '休息',
      entertainment: '娱乐',
      visitCount: '请求次数',
      remainingQuota: '剩余额度',
      utilizedQuota: '已使用额度',
      dealCount: '日使用量',
      projectNews: {
        title: '项目动态',
        moreNews: '更多动态',
        desc1: 'Soybean 在2021年5月28日创建了开源项目 soybean-admin!',
        desc2: 'Yanbowe 向 soybean-admin 提交了一个bug，多标签栏不会自适应。',
        desc3: 'Soybean 准备为 soybean-admin 的发布做充分的准备工作!',
        desc4: 'Soybean 正在忙于为soybean-admin写项目说明文档！',
        desc5: 'Soybean 刚才把工作台页面随便写了一些，凑合能看了！'
      },
      creativity: '创意'
    },
    tariffs: {
      title: '模型价格',
      chatInfo: '按量计费费用 = 分组倍率 × 模型倍率 × （提示token数 + 补全token数 × 补全倍率）/ 500000 （单位：美元）'
    },
    toup: {
      title: '我的钱包',
      quotaTitle: '钱包概况',
      utilizedQuota: '已用余额 {utilizedQuota}',
      remainingQuota: '剩余余额 {utilizedQuota}',
      code: {
        title: '兑换余额',
        desc: '请填写兑换码',
        info: '还没有兑换码？ 客服购买更优惠哦^'
      },
      recharge: {
        title: '在线充值',
        desc: '微信充值',
        success: '兑换成功'
      },
      qrCode: {
        title: '支付详情',
        payQuota: '充值数量',
        payNumber: '实付金额',
        success: '已支付?',
        recognize: '支付成功'
      }
    },
    manage: {
      common: {
        status: {
          enable: '启用',
          disable: '禁用'
        }
      },
      log: {
        title: '消费详情',
        createAt: '时间',
        name: '令牌',
        model: '模型',
        time: '耗时',
        input: '提示',
        output: '补全',
        total: '花费',
        info: '详情',
        searchTime: '创建时间'
      },
      channel: {
        title: '渠道列表',
        name: '渠道名称',
        baseUrl: '渠道接口',
        key: '渠道秘钥',
        model: '模型',
        order: '排序',
        normal: '渠道类别',
        channelStatus: '渠道状态',
        createAt: '创建时间',
        updateAt: '更新时间',
        channelType: '渠道类型',
        form: {
          name: '请输入渠道名称',
          baseUrl: '请输入渠道接口',
          key: '请输入渠道秘钥',
          model: '请输入渠道模型',
          normal: '请选择渠道类型',
          order: '请选择渠道优先级',
          channelStatus: '请选择渠道状态',
          channelType: '渠道类型'
        },
        channelNormal: {
          status: {
            enable: '普通渠道',
            disable: '兜底渠道'
          }
        },
        addChannel: '添加渠道',
        editChannel: '添加渠道'
      },
      token: {
        title: '令牌列表',
        name: '令牌名称',
        key: '令牌Key',
        utilizedQuota: '已用额度',
        remainingQuota: '剩余额度',
        tokenStatus: '令牌状态',
        createAt: '创建时间',
        updateAt: '更新时间',
        form: {
          name: '请输入令牌名称',
          key: '请输入令牌key',
          utilizedQuota: '请输入已用额度',
          remainingQuota: '请输入剩余额度',
          tokenStatus: '请选择令牌状态'
        },
        addToken: '添加令牌',
        editToken: '编辑令牌'
      },
      user: {
        title: '用户列表',
        userName: '用户名',
        userGender: '性别',
        nickName: '昵称',
        userPhone: '手机号',
        userEmail: '邮箱',
        createAt: '创建时间',
        updateAt: '更新时间',
        userStatus: '用户状态',
        userRole: '用户角色',
        form: {
          userName: '请输入用户名',
          userGender: '请选择性别',
          nickName: '请输入昵称',
          userPhone: '请输入手机号',
          userEmail: '请输入邮箱',
          userStatus: '请选择用户状态',
          userRole: '请选择用户角色'
        },
        addUser: '新增用户',
        editUser: '编辑用户',
        gender: {
          male: '男',
          female: '女',
          secrecy: '保密'
        }
      }
    },
    setting: {
      other: {
        email: {
          title: 'SMTP设置',
          info: '用以支持系统的邮件发送, 注册、登录等',
          host: 'SMTP地址',
          port: '端口',
          name: '邮箱',
          password: '授权码',
          button: '发送测试邮件',
          form: {
            host: '请输入SMTP服务器地址',
            port: '请输入SMTP服务器端口',
            name: '请输入SMTP默认账户',
            password: '请输入SMTP授权码'
          }
        },
        feishu: {
          title: '飞书设置',
          appid: 'ID标识',
          secret: '密钥',
          info: '用以支持通过飞书进行消息通知, 渠道异常、恢复等消息',
          form: {
            appid: '请输入飞书应用标识',
            secret: '请输入飞书密钥'
          }
        },
        hupay: {
          title: '虎皮椒支付设置',
          appid: 'Appid',
          secret: '密钥',
          host: '支付网关',
          info: '支付渠道信息',
          notify: '支付回调',
          ratios: '充值比例',
          form: {
            appid: '请输入Appid',
            secret: '请输入密钥',
            host: '请输入支付网关接口',
            notify: '请输入支付回调',
            ratios: '请输入充值比例'
          }
        }
      },
      code: {
        title: '兑换码',
        button: '添加兑换码',
        success: '复制成功',
        failed: '复制失败',
        add: {
          title: '添加兑换码',
          name: '名称',
          quota: '额度',
          number: '数量'
        },
        form: {
          id: 'id',
          name: '名称',
          key: '兑换码',
          quota: '额度',
          mail: '使用者',
          createAt: '创建时间',
          updateAt: '更新时间'
        }
      }
    },
    about: {
      title: '关于',
      introduction: `Quest API 是我们自研的一个类OneApi产品，通过批量集成各API接口，多任务重试机制大大提高了接口异常的风险。`
    }
  },
  form: {
    required: '不能为空',
    userName: {
      required: '请输入用户名',
      invalid: '用户名格式不正确'
    },
    phone: {
      required: '请输入手机号',
      invalid: '手机号格式不正确'
    },
    pwd: {
      required: '请输入密码',
      invalid: '密码格式不正确，6-18位字符，包含字母、数字、下划线'
    },
    confirmPwd: {
      required: '请输入确认密码',
      invalid: '两次输入密码不一致'
    },
    code: {
      required: '请输入验证码',
      invalid: '验证码格式不正确'
    },
    email: {
      required: '请输入邮箱',
      invalid: '邮箱格式不正确'
    }
  },
  dropdown: {
    closeCurrent: '关闭',
    closeOther: '关闭其它',
    closeLeft: '关闭左侧',
    closeRight: '关闭右侧',
    closeAll: '关闭所有'
  },
  icon: {
    themeConfig: '主题配置',
    themeSchema: '主题模式',
    lang: '切换语言',
    fullscreen: '全屏',
    fullscreenExit: '退出全屏',
    reload: '刷新页面',
    collapse: '折叠菜单',
    expand: '展开菜单',
    pin: '固定',
    unpin: '取消固定'
  },
  datatable: {
    itemCount: '共 {total} 条'
  }
};

export default local;
