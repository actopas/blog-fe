/*
 * @Describle:
 * @Author: sunmingyuan <fishmooger@gmail.com>
 * @Date: 2023-12-22 14:11:52
 * @LastEditors: sunmingyuan
 * @LastEditTime: 2023-12-22 14:12:11
 */
declare namespace API {
  export interface BasicResponseType {
    status?: number;
  }
  export interface UserInfoType {
    id: number; // 用户id
    username: string; // 用户名
    name: string; // 姓名
    avatar: string; // 头像
  }

  export interface HeadersType {
    Authorization: string;
  }
}
