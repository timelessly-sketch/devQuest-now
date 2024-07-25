import { request } from '../request';
/**
 * Register
 *
 * @param email email
 * @param password Password
 * @param code
 */
export function fetchRegister(email: string, password: string, code: string) {
  return request({
    url: '/system/member/register',
    method: 'post',
    data: {
      email,
      password,
      code
    }
  });
}

/**
 * Login
 *
 * @param email User name
 * @param password Password
 */
export function fetchLogin(email: string, password: string) {
  return request<Api.Auth.LoginToken>({
    url: '/system/member/login',
    method: 'post',
    data: {
      email,
      password
    }
  });
}

/** Get member info */
export function fetchGetMemberInfo() {
  return request<Api.Auth.MemberInfo>({ url: '/system/member/Info' });
}

/** Get member list */
export function fetchGetMemberList(params?: Api.SystemManage.CommonSearchParams) {
  return request<Api.SystemManage.MemberList>({
    url: '/system/member/list',
    method: 'get',
    params
  });
}

// 如下为渠道模块
export function fetchInsertChannel(params?: Api.SystemManage.ChannelEditParams) {
  return request({
    url: '/system/channel/edit',
    method: 'post',
    params
  });
}

export function fetchChannelList(params?: Api.SystemManage.CommonSearchParams) {
  return request<Api.SystemManage.ChannelList>({
    url: '/system/channel/list',
    method: 'get',
    params
  });
}

export function fetchChannelDelete(id: number) {
  return request({
    url: `/system/channel/delete/${id}`,
    method: 'delete'
  });
}
