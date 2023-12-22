/*
 * @Describle:
 * @Author: sunmingyuan <fishmooger@gmail.com>
 * @Date: 2023-12-22 13:59:24
 * @LastEditors: sunmingyuan
 * @LastEditTime: 2023-12-22 14:21:18
 */
import { request } from '@umijs/max';
/** 登录接口 POST /api/login/account */
export async function queryLogin(body: User.LoginParams, options?: { [key: string]: any }) {
  return request<User.LoginResponse>(`/api/user/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
export async function queryProfile(options?: { [key: string]: any }) {
  return request<{
    data: API.CurrentUser;
  }>(`/api/user/profile`, {
    method: 'GET',
    ...(options || {}),
  });
}
