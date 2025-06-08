import { Providers } from '@app/providers'
import { Fonts } from '@utils/config'
import { Header } from '@widgets/header'
import { Toolbar } from '@widgets/toolbar'
import clsx from 'clsx'
import { Outlet } from 'react-router-dom'

export function Layout() {
	return (
		<Providers>
			<div className={clsx('h-screen flex flex-col', Fonts.cn_montserrat)}>
				<Header />
				<Toolbar />
				<main className='flex-1'>
					<Outlet />
				</main>
			</div>
		</Providers>
	)
}
