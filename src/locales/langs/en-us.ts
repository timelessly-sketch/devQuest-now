const local: App.I18n.Schema = {
  system: {
    title: 'Quest Api',
    updateTitle: 'System Version Update Notification',
    updateContent: 'A new version of the system has been detected. Do you want to refresh the page immediately?',
    updateConfirm: 'Refresh immediately',
    updateCancel: 'Later'
  },
  common: {
    action: 'Action',
    add: 'Add',
    addSuccess: 'Add Success',
    backToHome: 'Back to home',
    batchDelete: 'Batch Delete',
    cancel: 'Cancel',
    close: 'Close',
    check: 'Check',
    expandColumn: 'Expand Column',
    columnSetting: 'Column Setting',
    config: 'Config',
    confirm: 'Confirm',
    delete: 'Delete',
    deleteSuccess: 'Delete Success',
    confirmDelete: 'Are you sure you want to delete?',
    edit: 'Edit',
    warning: 'Warning',
    error: 'Error',
    index: 'Index',
    keywordSearch: 'Please enter keyword',
    logout: 'Logout',
    logoutConfirm: 'Are you sure you want to log out?',
    lookForward: 'Coming soon',
    modify: 'Modify',
    modifySuccess: 'Modify Success',
    noData: 'No Data',
    operate: 'Operate',
    pleaseCheckValue: 'Please check whether the value is valid',
    refresh: 'Refresh',
    reset: 'Reset',
    search: 'Search',
    switch: 'Switch',
    tip: 'Tip',
    trigger: 'Trigger',
    update: 'Update',
    updateSuccess: 'Update Success',
    userCenter: 'User Center',
    yesOrNo: {
      yes: 'Yes',
      no: 'No'
    }
  },
  request: {
    logout: 'Logout user after request failed',
    logoutMsg: 'User status is invalid, please log in again',
    logoutWithModal: 'Pop up modal after request failed and then log out user',
    logoutWithModalMsg: 'User status is invalid, please log in again',
    refreshToken: 'The requested token has expired, refresh the token',
    tokenExpired: 'The requested token has expired'
  },
  theme: {
    themeSchema: {
      title: 'Theme Schema',
      light: 'Light',
      dark: 'Dark',
      auto: 'Follow System'
    },
    grayscale: 'Grayscale',
    layoutMode: {
      title: 'Layout Mode',
      vertical: 'Vertical Menu Mode',
      horizontal: 'Horizontal Menu Mode',
      'vertical-mix': 'Vertical Mix Menu Mode',
      'horizontal-mix': 'Horizontal Mix menu Mode',
      reverseHorizontalMix: 'Reverse first level menus and child level menus position'
    },
    recommendColor: 'Apply Recommended Color Algorithm',
    recommendColorDesc: 'The recommended color algorithm refers to',
    themeColor: {
      title: 'Theme Color',
      primary: 'Primary',
      info: 'Info',
      success: 'Success',
      warning: 'Warning',
      error: 'Error',
      followPrimary: 'Follow Primary'
    },
    scrollMode: {
      title: 'Scroll Mode',
      wrapper: 'Wrapper',
      content: 'Content'
    },
    page: {
      animate: 'Page Animate',
      mode: {
        title: 'Page Animate Mode',
        fade: 'Fade',
        'fade-slide': 'Slide',
        'fade-bottom': 'Fade Zoom',
        'fade-scale': 'Fade Scale',
        'zoom-fade': 'Zoom Fade',
        'zoom-out': 'Zoom Out',
        none: 'None'
      }
    },
    fixedHeaderAndTab: 'Fixed Header And Tab',
    header: {
      height: 'Header Height',
      breadcrumb: {
        visible: 'Breadcrumb Visible',
        showIcon: 'Breadcrumb Icon Visible'
      }
    },
    tab: {
      visible: 'Tab Visible',
      cache: 'Tab Cache',
      height: 'Tab Height',
      mode: {
        title: 'Tab Mode',
        chrome: 'Chrome',
        button: 'Button'
      }
    },
    sider: {
      inverted: 'Dark Sider',
      width: 'Sider Width',
      collapsedWidth: 'Sider Collapsed Width',
      mixWidth: 'Mix Sider Width',
      mixCollapsedWidth: 'Mix Sider Collapse Width',
      mixChildMenuWidth: 'Mix Child Menu Width'
    },
    footer: {
      visible: 'Footer Visible',
      fixed: 'Fixed Footer',
      height: 'Footer Height',
      right: 'Right Footer'
    },
    themeDrawerTitle: 'Theme Configuration',
    pageFunTitle: 'Page Function',
    configOperation: {
      copyConfig: 'Copy Config',
      copySuccessMsg: 'Copy Success, Please replace the variable "themeSettings" in "src/theme/settings.ts"',
      resetConfig: 'Reset Config',
      resetSuccessMsg: 'Reset Success'
    }
  },
  route: {
    login: 'Login',
    403: 'No Permission',
    404: 'Page Not Found',
    500: 'Server Error',
    'iframe-page': 'Iframe',
    home: 'Home',
    log: 'model log',
    about: 'About',
    manage: 'Manage',
    manage_user: 'Manage User',
    manage_channel: 'Manage Channel',
    manage_token: 'Manage Token',
    setting: 'setting',
    tariffs: 'tariffs',
    setting_other: 'setting other',
    setting_code: 'setting_code',
    topup: 'topup'
    // document: 'help document',
    // document_api: 'document_api'
  },
  page: {
    login: {
      common: {
        loginOrRegister: 'Login / Register',
        userNamePlaceholder: 'Please enter user name',
        phonePlaceholder: 'Please enter phone number',
        emailPlaceholder: 'Please enter email number',
        codePlaceholder: 'Please enter verification code',
        passwordPlaceholder: 'Please enter password',
        confirmPasswordPlaceholder: 'Please enter password again',
        codeLogin: 'Verification code login',
        confirm: 'Confirm',
        back: 'Back',
        validateSuccess: 'Verification passed',
        loginSuccess: 'Login successfully',
        welcomeBack: 'Welcome back, {userName} !'
      },
      pwdLogin: {
        title: 'Password Login',
        rememberMe: 'Remember me',
        forgetPassword: 'Forget password?',
        register: 'Register',
        otherAccountLogin: 'Other Account Login',
        otherLoginMode: 'Other Login Mode',
        superAdmin: 'Super Admin',
        admin: 'Admin',
        user: 'User'
      },
      codeLogin: {
        title: 'Verification Code Login',
        getCode: 'Get verification code',
        reGetCode: 'Reacquire after {time}s',
        sendCodeSuccess: 'Verification code sent successfully',
        imageCodePlaceholder: 'Please enter image verification code'
      },
      register: {
        title: 'Register',
        agreement: 'I have read and agree to',
        protocol: '《User Agreement》',
        policy: '《Privacy Policy》'
      },
      resetPwd: {
        title: 'Reset Password'
      },
      bindWeChat: {
        title: 'Bind WeChat'
      }
    },
    home: {
      branchDesc:
        'For the convenience of everyone in developing and updating the merge, we have streamlined the code of the main branch, only retaining the homepage menu, and the rest of the content has been moved to the example branch for maintenance. The preview address displays the content of the example branch.',
      greeting: 'Good morning, {userName}, today is another day full of vitality!',
      weatherDesc: 'Today is cloudy to clear, 20℃ - 25℃!',
      projectCount: 'Project Count',
      tokenApi: 'API: {url}',
      tokenKey: 'Token: {key}',
      todo: 'Todo',
      message: 'Message',
      registerCount: 'Register Count',
      schedule: 'Work and rest Schedule',
      indefiniteReference: 'token: sk-xxx',
      study: 'Study',
      work: 'Work',
      rest: 'Rest',
      entertainment: 'Entertainment',
      visitCount: 'Visit Count',
      remainingQuota: 'remainingQuota',
      utilizedQuota: 'utilizedQuota',
      dealCount: 'Deal Count',
      projectNews: {
        title: 'Project News',
        moreNews: 'More News',
        desc1: 'Soybean created the open source project soybean-admin on May 28, 2021!',
        desc2: 'Yanbowe submitted a bug to soybean-admin, the multi-tab bar will not adapt.',
        desc3: 'Soybean is ready to do sufficient preparation for the release of soybean-admin!',
        desc4: 'Soybean is busy writing project documentation for soybean-admin!',
        desc5: 'Soybean just wrote some of the workbench pages casually, and it was enough to see!'
      },
      creativity: 'Creativity'
    },
    tariffs: {
      title: 'model tariffs',
      chatInfo: 'chatInfo'
    },
    toup: {
      title: 'toup',
      quotaTitle: 'quota',
      utilizedQuota: 'utilizedQuota',
      remainingQuota: 'remainingQuota',
      code: {
        title: 'code',
        desc: 'code',
        info: 'info'
      },
      recharge: {
        title: 'online recharge',
        desc: 'online recharge',
        success: 'success'
      },
      qrCode: {
        title: 'pay detail',
        payQuota: 'pay Quota',
        payNumber: 'pay Number',
        success: 'success?',
        recognize: 'recognize'
      }
    },
    manage: {
      common: {
        status: {
          enable: 'Enable',
          disable: 'Disable'
        }
      },
      log: {
        title: 'log title',
        createAt: 'create at',
        name: 'token',
        model: 'model',
        time: 'time',
        input: 'input',
        output: 'output',
        total: 'total',
        info: 'info',
        searchTime: 'search Time'
      },
      channel: {
        title: 'title name',
        name: 'channel name',
        baseUrl: 'baseUrl',
        key: 'key',
        model: 'models',
        order: 'order',
        channelStatus: 'channelStatus',
        normal: 'normal',
        createAt: 'create at',
        updateAt: 'update at',
        channelType: 'channel type',
        form: {
          name: 'Please enter channel name',
          baseUrl: 'Please enter channel name',
          key: 'Please enter channel key',
          model: 'Please enter channel models',
          normal: 'Please enter normal models',
          order: 'Please enter channel order',
          channelStatus: 'Please enter channel status',
          channelType: 'channel type'
        },
        channelNormal: {
          status: {
            enable: 'normal',
            disable: 'disable normal'
          }
        },
        addChannel: 'Add channel',
        editChannel: 'Edit channel'
      },
      token: {
        title: 'token title',
        name: 'token name',
        key: 'token key',
        utilizedQuota: 'token utilizedQuota',
        remainingQuota: 'token remainingQuota',
        tokenStatus: 'token status',
        createAt: 'create at',
        updateAt: 'update at',
        form: {
          name: 'Please enter channel name',
          key: 'Please enter channel key',
          utilizedQuota: 'token utilizedQuota',
          remainingQuota: 'token remainingQuota',
          tokenStatus: 'token status'
        },
        editToken: 'edit token',
        addToken: 'add token'
      },
      user: {
        title: 'User List',
        userName: 'User Name',
        userGender: 'Gender',
        nickName: 'Nick Name',
        userPhone: 'Phone Number',
        userEmail: 'Email',
        userStatus: 'User Status',
        createAt: 'Create At',
        updateAt: 'Update At',
        userRole: 'User Role',
        form: {
          userName: 'Please enter user name',
          userGender: 'Please select gender',
          nickName: 'Please enter nick name',
          userPhone: 'Please enter phone number',
          userEmail: 'Please enter email',
          userStatus: 'Please select user status',
          userRole: 'Please select user role'
        },
        addUser: 'Add User',
        editUser: 'Edit User',
        gender: {
          male: 'Male',
          female: 'Female',
          secrecy: 'Secrecy'
        }
      }
    },
    setting: {
      other: {
        email: {
          title: 'email setting',
          info: 'info',
          host: 'host',
          port: 'port',
          name: 'email name',
          password: 'email passwd',
          button: 'test email',
          form: {
            host: 'smtp host',
            port: 'smtp port',
            name: 'smtp name',
            password: 'smtp password'
          }
        },
        feishu: {
          title: 'feishu title',
          info: 'info',
          appid: 'appid',
          secret: 'secret',
          form: {
            appid: 'appid',
            secret: 'secret'
          }
        },
        hupay: {
          title: 'hupay title',
          appid: 'appid',
          secret: 'secret',
          host: 'host',
          info: 'info',
          notify: 'notify',
          ratios: 'ratios',
          form: {
            appid: 'appid',
            secret: 'secret',
            host: 'host',
            notify: 'notify',
            ratios: 'ratios'
          }
        }
      },
      code: {
        title: 'title',
        button: 'button',
        success: 'success',
        failed: 'failed',
        add: {
          title: 'add title',
          name: 'name',
          quota: 'quota',
          number: 'number'
        },
        form: {
          id: 'id',
          name: 'name',
          key: 'key',
          quota: 'quota',
          mail: 'mail',
          createAt: 'createAt',
          updateAt: 'updateAt'
        }
      }
    },
    about: {
      title: 'About',
      introduction: 'About us'
    }
  },
  form: {
    required: 'Cannot be empty',
    userName: {
      required: 'Please enter user name',
      invalid: 'User name format is incorrect'
    },
    phone: {
      required: 'Please enter phone number',
      invalid: 'Phone number format is incorrect'
    },
    pwd: {
      required: 'Please enter password',
      invalid: '6-18 characters, including letters, numbers, and underscores'
    },
    confirmPwd: {
      required: 'Please enter password again',
      invalid: 'The two passwords are inconsistent'
    },
    code: {
      required: 'Please enter verification code',
      invalid: 'Verification code format is incorrect'
    },
    email: {
      required: 'Please enter email',
      invalid: 'Email format is incorrect'
    }
  },
  dropdown: {
    closeCurrent: 'Close Current',
    closeOther: 'Close Other',
    closeLeft: 'Close Left',
    closeRight: 'Close Right',
    closeAll: 'Close All'
  },
  icon: {
    themeConfig: 'Theme Configuration',
    themeSchema: 'Theme Schema',
    lang: 'Switch Language',
    fullscreen: 'Fullscreen',
    fullscreenExit: 'Exit Fullscreen',
    reload: 'Reload Page',
    collapse: 'Collapse Menu',
    expand: 'Expand Menu',
    pin: 'Pin',
    unpin: 'Unpin'
  },
  datatable: {
    itemCount: 'Total {total} items'
  }
};

export default local;
