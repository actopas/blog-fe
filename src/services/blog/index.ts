/*
 * @Describle:
 * @Author: sunmingyuan <fishmooger@gmail.com>
 * @Date: 2023-12-22 13:58:19
 * @LastEditors: sunmingyuan
 * @LastEditTime: 2023-12-22 14:48:03
 */
import { request } from '@umijs/max';

export async function queryArticleList() {
  return request<Blog.ArticleListResponse>(`/api/blog/get`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
export async function queryArticleById(id: Blog.ArticleParams) {
  return request<Blog.ArticleResponse>(`/api/blog/get/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
export async function createArticle(body: Blog.createArticleParams) {
  return request<Blog.createArticleResponse>(`/api/blog/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
  });
}
export async function updateArticle(id: Blog.ArticleParams, body: Blog.updateArticleParams) {
  return request<Blog.updateArticleResponse>(`/api/blog/update/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
  });
}
export async function deleteArticle(body: Blog.deleteArticleParams) {
  return request<Blog.deleteArticleResponse>(`/api/blog/delete`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
  });
}
