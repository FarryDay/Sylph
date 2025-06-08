import { Layout } from '@app/layout'
import { HomePage } from '@pages/homePage'
import { Fallback } from '@shared/ui/fallback'
import { createHashRouter, createRoutesFromElements, Link, Route, RouterProvider } from 'react-router-dom'

export function AppRouter() {
	const routers = createRoutesFromElements(
		<Route path='/' element={<Layout />} handle={{ crumb: <Link to='/'>Home</Link> }} errorElement={<Fallback />}>
			<Route index element={<HomePage />} />
			{/* <Route
				path='books'
				handle={{
					crumb: <Link to='/books'>Books</Link>,
				}}
			>
				<Route index element={<Categories />} />
				<Route
					path=':categoryId'
					element={<Category />}
					handle={{
						crumb: getDynamicPathForCategory,
					}}
				/>
				<Route
					path='description/:bookId'
					element={<BookDescription />}
					loader={() => book.title}
					handle={{
						crumb: getDynamicPathForBook,
					}}
				/>
			</Route>

			<Route
				path='cart'
				element={<Cart />}
				handle={{
					crumb: <Link to='/cart'>Cart</Link>,
				}}
			/> */}
			{/* <Route path='/search/:searchLine' element={<SearchResults />} /> */}
		</Route>
	)

	const router = createHashRouter(routers, {})

	return (
		<div>
			<RouterProvider router={router} />
		</div>
	)
}
