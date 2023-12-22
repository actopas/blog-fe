/*
 * @Describle:
 * @Author: sunmingyuan <fishmooger@gmail.com>
 * @Date: 2023-12-21 19:15:43
 * @LastEditors: sunmingyuan
 * @LastEditTime: 2023-12-22 17:04:13
 */
import { DefaultFooter } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <DefaultFooter
    // style={{
    //   background: 'none',
    // }}
    // copyright={`${currentYear} ${defaultMessage}`}
    // links={[
    //   {
    //     key: 'Ant Design Pro',
    //     title: 'Ant Design Pro',
    //     href: 'https://pro.ant.design',
    //     blankTarget: true,
    //   },
    //   {
    //     key: 'github',
    //     title: <GithubOutlined />,
    //     href: 'https://github.com/ant-design/ant-design-pro',
    //     blankTarget: true,
    //   },
    //   {
    //     key: 'Ant Design',
    //     title: 'Ant Design',
    //     href: 'https://ant.design',
    //     blankTarget: true,
    //   },
    // ]}
    />
  );
};

export default Footer;
