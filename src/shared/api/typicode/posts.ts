// конкретная реализация методов для получения данных

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { API_URL } from '@shared/config';

import { Post } from './models';

const BASE_URL = '/posts';

type PostsResponse = Post[];

export const postApi = createApi({
	reducerPath: 'post',
	baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
	endpoints: (build) => ({
		fetchAllPosts: build.query<PostsResponse, { limit: number; start: number }>(
			{
				query: ({ limit = 5, start = 0 }) => ({
					url: BASE_URL,
					params: {
						_limit: limit,
						_start: start,
					},
				}),
			},
		),
		fetchPostById: build.query<Post, number>({
			query: (id: number = 1) => ({
				url: `${BASE_URL}/${id}`,
			}),
		}),
	}),
});

export const { useFetchAllPostsQuery, useFetchPostByIdQuery } = postApi;
