import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const PostListPage = lazy(() => import('./posts-list'))
const PostDetailPage = lazy(() => import('./post-detail'))

// глобальный роутинг на странице
export const Routing = () => {
	return (
		<Routes>
			<Route path='/' element={<PostListPage />} />
			<Route path='/:postId' element={<PostDetailPage />} />
		</Routes>
	)
}
