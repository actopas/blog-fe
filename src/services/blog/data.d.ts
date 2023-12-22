/*
 * @Describle:
 * @Author: sunmingyuan <fishmooger@gmail.com>
 * @Date: 2023-12-22 13:58:43
 * @LastEditors: sunmingyuan
 * @LastEditTime: 2023-12-22 14:45:23
 */
declare namespace Blog {
  export interface ArticleListResponse {
    code: number;
    data: ArticleList;
    message: string;
  }
  export interface ArticleList {
    total: number;
    list: Article[];
  }
  export interface Article {
    id: number;
    title: string;
    content: string;
    createTime: string;
    updateTime: string;
  }
  export interface ArticleParams {
    id: number;
  }
  export interface ArticleResponse {
    code: number;
    data: Article;
    message: string;
  }
  export interface createArticleParams {
    title: string;
    content: string;
  }
  export interface createArticleResponse {
    code: number;
    data: Article;
    message: string;
  }
  export interface updateArticleParams {
    id: number;
    title: string;
    content: string;
  }
  export interface updateArticleResponse {
    code: number;
    data: Article;
    message: string;
  }
  export interface deleteArticleParams {
    id: number;
  }
  export interface deleteArticleResponse {
    code: number;
    data: Article;
    message: string;
  }
}
