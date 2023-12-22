/*
 * @Describle:
 * @Author: sunmingyuan <fishmooger@gmail.com>
 * @Date: 2023-12-22 13:59:24
 * @LastEditors: sunmingyuan
 * @LastEditTime: 2023-12-22 14:13:00
 */

declare namespace User {
  type LoginParams = {
    email: string;
    password: string;
  };
  type LoginResponseData = {
    token: string;
    user: {
      name: string;
      email: string;
      avatar: string;
    };
  };
  interface LoginResponse extends API.BasicResponseType {
    data: LoginResponseData;
  }
}
