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

/** Get user info */
export function fetchGetMemberInfo() {
  return request<Api.Auth.MemberInfo>({ url: '/system/member/Info' });
}

/**
 * return custom backend error
 *
 * @param code error code
 * @param msg error message
 */
export function fetchCustomBackendError(code: string, msg: string) {
  return request({ url: '/auth/error', params: { code, msg } });
}
