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

export function fetchMemberSendMsg(params: { email: string }) {
  return request({
    url: '/system/member/sendMsg',
    method: 'post',
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

// 如下为令牌模块
export function fetchTokenList(params?: Api.SystemManage.TokenSearchParams) {
  return request<Api.SystemManage.TokenList>({
    url: '/system/token/list',
    method: 'get',
    params
  });
}

export function fetchTokenEdit(params?: Api.SystemManage.TokenEditParams) {
  return request({
    url: '/system/token/edit',
    method: 'post',
    params
  });
}

// 如下为调用日志模块
export function fetchLogList(params?: Api.SystemManage.LogSearchParams) {
  return request<Api.SystemManage.LogList>({
    url: 'system/log/list',
    method: 'get',
    params
  });
}

// 如下为邮箱模块
export function fetchSettingEdit(params?: Api.SystemManage.EditSettingParams) {
  return request({
    url: 'system/config/edit',
    method: 'post',
    params
  });
}

export function fetchSetting(name: string) {
  return request<Api.SystemManage.Setting>({
    url: `system/config/${name}`,
    method: 'get'
  });
}

// 如下为资费模块
export function fetchTariffsList() {
  return request<Api.SystemManage.ModelList>({
    url: '/system/tariffs/list',
    method: 'get'
  });
}

// 如下为兑换码模块
export function fetchRedemption(params?: Api.SystemManage.Redemption) {
  return request<Api.SystemManage.RedemptionList>({
    url: '/system/redemption',
    method: 'post',
    params
  });
}

// 使用兑换码
export function fetchRedeem(params?: { code: string }) {
  return request({
    url: `/system/redeem/`,
    method: 'post',
    params
  });
}
